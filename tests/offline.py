# Offline: once the service worker has stored the app, it starts and runs a unit without a connection; requests to
# GitHub are never cached; a recorded audio file, once played, stays available offline. (index.html registers the
# service worker only over https, so the test registers it by hand.)
from playwright.sync_api import sync_playwright
import os, wave, struct
errs = []
d = 'content/french/audio'; os.makedirs(d, exist_ok=True)
with wave.open(d + '/_test.wav', 'w') as w:
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(8000); w.writeframes(struct.pack('<h', 0) * 800)
try:
    with sync_playwright() as p:
        b = p.chromium.launch(); ctx = b.new_context(viewport={'width': 390, 'height': 844}); pg = ctx.new_page()
        pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.goto('http://localhost:8765/index.html'); pg.wait_for_timeout(400)
        pg.evaluate("navigator.serviceWorker.register('sw.js')"); pg.evaluate("navigator.serviceWorker.ready.then(() => true)")
        pg.reload(); pg.wait_for_timeout(800)
        print('controlled', pg.evaluate('!!navigator.serviceWorker.controller'))
        print('audio fetched online', pg.evaluate("fetch('content/french/audio/_test.wav').then(r => r.status)"))
        ctx.set_offline(True)
        pg.reload(); pg.wait_for_timeout(800)
        pg.click('text=Start unit'); pg.click('.chip[data-section=dialogue]')
        print('dialogue offline lines', pg.locator('.dline').count(), '(expect 15)')
        st = pg.evaluate("fetch('content/french/audio/_test.wav').then(r => r.status).catch(() => 0)"); print('audio offline', st, '(expect 200)')
        print('caches', pg.evaluate("caches.keys()"))
        b.close()
finally:
    os.remove(d + '/_test.wav'); os.rmdir(d)
print('errors', errs)
