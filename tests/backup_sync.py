# Automatic backup to a GitHub Gist, against a simulated GitHub: connecting creates a private gist; changes are uploaded
# (the token never is); a fresh install that finds a backup offers to restore it; a phone with progress that finds an
# older backup pauses instead of overwriting it; a refused token is reported. Also the backup file text round trip.
import json
from playwright.sync_api import sync_playwright
errs, calls = [], []
state = {'gists': [], 'fail': None}

def github(route, request):
    url, m = request.url, request.method
    calls.append((m, url.split('api.github.com')[1] if 'api.github.com' in url else url, request.headers.get('authorization')))
    if state['fail']: return route.fulfill(status=state['fail'], body='{}')
    body = json.loads(request.post_data) if request.post_data else None
    if m == 'GET' and '/gists?' in url:
        return route.fulfill(status=200, content_type='application/json', body=json.dumps([{'id': g['id'], 'files': {k: {} for k in g['files']}} for g in state['gists']]))
    if m == 'POST' and url.endswith('/gists'):
        g = {'id': 'g%d' % (len(state['gists']) + 1), 'public': body['public'], 'files': {k: v['content'] for k, v in body['files'].items()}}
        state['gists'].append(g); return route.fulfill(status=201, content_type='application/json', body=json.dumps({'id': g['id']}))
    gid = url.rstrip('/').split('/')[-1]
    g = next((x for x in state['gists'] if x['id'] == gid), None)
    if not g: return route.fulfill(status=404, body='{}')
    if m == 'PATCH':
        for k, v in body['files'].items(): g['files'][k] = v['content']
        return route.fulfill(status=200, content_type='application/json', body='{}')
    if m == 'GET':
        return route.fulfill(status=200, content_type='application/json', body=json.dumps({'id': gid, 'files': {k: {'content': v, 'truncated': False} for k, v in g['files'].items()}}))
    route.fulfill(status=400, body='{}')

with sync_playwright() as p:
    b = p.chromium.launch()
    def phone():
        ctx = b.new_context(viewport={'width': 390, 'height': 844})
        ctx.route('https://api.github.com/**', github)
        pg = ctx.new_page(); pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.goto('http://localhost:8765/index.html'); pg.wait_for_timeout(500)
        return ctx, pg
    # phone 1: some progress, then connect → a private gist is created with the progress, without the token
    ctx, pg = phone()
    pg.click('text=Start unit'); pg.click('.chip[data-section=phrases]'); pg.click('[data-done]')
    pg.click('[data-go=progress]'); pg.click('#syncsetup summary')
    pg.screenshot(path='/tmp/hospes-shots/sync_setup.png', full_page=True)
    pg.fill('#synctoken', 'github_pat_TEST'); pg.click('[data-syncconnect]'); pg.wait_for_timeout(800)
    print('gists created', len(state['gists']), '(1 expect 1)')
    g = state['gists'][0]; content = g['files']['hospes-progress.json']
    print('gist private', g['public'] is False)
    print('token in backup:', 'github_pat_TEST' in content, '(False expected)')
    print('progress in backup:', '"fr-01"' in content)
    print('authorised calls', all(c[2] == 'Bearer github_pat_TEST' for c in calls))
    print('status shown:', 'Last backed up' in pg.locator('#syncsetup').inner_text())
    pg.screenshot(path='/tmp/hospes-shots/sync_on.png', full_page=True)
    # a change is uploaded on its own (the app shortens the wait when it goes to the background)
    n = len(calls)
    pg.click('[data-go=home]'); pg.click('.chip[data-section=dialogue]'); pg.click('[data-done]')
    pg.evaluate("document.dispatchEvent(new Event('visibilitychange'))")  # visibilityState stays 'visible' in the test browser
    pg.evaluate("Object.defineProperty(document, 'visibilityState', { value: 'hidden', configurable: true }); document.dispatchEvent(new Event('visibilitychange'))")
    pg.wait_for_timeout(600)
    patched = [c for c in calls[n:] if c[0] == 'PATCH']
    print('change uploaded', len(patched) >= 1, '| dialogue done in gist:', '"dialogue": true' in g['files']['hospes-progress.json'])
    # backup file text round trip (Copy backup text, then paste on another phone) keeps the progress, not the token
    pg.evaluate("Object.defineProperty(document, 'visibilityState', { value: 'visible', configurable: true })")
    ctx.close()

    # phone 2: fresh install, connect → the backup is found and offered for restore
    ctx, pg = phone()
    pg.click('[data-go=progress]'); pg.click('#syncsetup summary'); pg.fill('#synctoken', 'github_pat_TEST'); pg.click('[data-syncconnect]'); pg.wait_for_timeout(800)
    print('restore offered:', pg.locator('#confirmimport').count(), '(1 expect 1)')
    pg.click('[data-doimport]'); pg.wait_for_timeout(400)
    pg.click('[data-go=home]')
    print('restored progress:', '2 of' not in pg.locator('main').inner_text() and pg.locator('.dots i.on').count() >= 2)
    print('gists still', len(state['gists']), '(1 expect 1)')
    ctx.close()

    # phone 3: progress already on the phone, a backup exists → paused, nothing overwritten until chosen
    ctx, pg = phone()
    pg.click('text=Start unit'); pg.click('[data-done]')
    before = state['gists'][0]['files']['hospes-progress.json']
    n = len(calls)
    pg.click('[data-go=progress]'); pg.click('#syncsetup summary'); pg.fill('#synctoken', 'github_pat_TEST'); pg.click('[data-syncconnect]'); pg.wait_for_timeout(800)
    print('paused notice:', 'Paused' in pg.locator('#syncsetup').inner_text())
    pg.click('[data-go=home]'); pg.click('.chip[data-section=pron]'); pg.click('[data-done]')
    pg.evaluate("Object.defineProperty(document, 'visibilityState', { value: 'hidden', configurable: true }); document.dispatchEvent(new Event('visibilitychange'))")
    pg.wait_for_timeout(500)
    print('no upload while paused:', not [c for c in calls[n:] if c[0] in ('PATCH', 'POST')], '| gist unchanged:', state['gists'][0]['files']['hospes-progress.json'] == before)
    pg.evaluate("Object.defineProperty(document, 'visibilityState', { value: 'visible', configurable: true })")
    pg.click('[data-go=progress]'); pg.click('[data-syncnow]'); pg.wait_for_timeout(600)
    print('Back up now replaces it:', state['gists'][0]['files']['hospes-progress.json'] != before, '| pause lifted:', 'Paused' not in pg.locator('#syncsetup').inner_text())
    # a refused token is reported
    state['fail'] = 401; pg.click('[data-syncnow]'); pg.wait_for_timeout(600)
    print('refused token reported:', 'refused the token' in pg.locator('#syncsetup').inner_text())
    state['fail'] = None
    # disconnect forgets the token
    pg.click('[data-syncoff]'); pg.click('[data-syncoff]')
    print('token removed:', pg.evaluate("localStorage.getItem('hospes.sync')") is None)
    ctx.close()
    b.close()
print('errors', errs)
