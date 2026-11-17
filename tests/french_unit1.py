# French Unit 1, end to end at iPhone width: every section opens without horizontal scrolling; every exercise and
# every test item is answered from the unit's own data and marked correct; listening items play their text by
# themselves; the dialogue plays line by line; flashcards include phrases and play the French; the phrasebook
# search works; the best French voice is chosen. Speech is replaced by a recorder (no sound in the test browser).
import json, os
from playwright.sync_api import sync_playwright
S = '/tmp/hospes-shots/'; os.makedirs(S, exist_ok=True)
FAKE_SPEECH = """
window.__spoken = [];
const voices = [
  { name: 'Amélie', lang: 'fr-CA', voiceURI: 'com.apple.voice.compact.fr-CA.Amelie', localService: true },
  { name: 'Thomas', lang: 'fr-FR', voiceURI: 'com.apple.voice.compact.fr-FR.Thomas', localService: true },
  { name: 'Audrey', lang: 'fr-FR', voiceURI: 'com.apple.voice.enhanced.fr-FR.Audrey', localService: true },
  { name: 'Grandma (French (France))', lang: 'fr-FR', voiceURI: 'com.apple.eloquence.fr-FR.Grandma', localService: true },
  { name: 'Daniel', lang: 'en-GB', voiceURI: 'com.apple.voice.compact.en-GB.Daniel', localService: true }];
window.SpeechSynthesisUtterance = function (t) { this.text = t; };
Object.defineProperty(window, 'speechSynthesis', { configurable: true, value: { getVoices: () => voices, cancel() {}, addEventListener() {},
  speak(u) { window.__spoken.push({ text: u.text, voice: u.voice && u.voice.name, rate: u.rate }); setTimeout(() => u.onend && u.onend(), 20); } } });
"""
ld = """async () => { const t = await (await fetch('content/french/unit-01.js')).text(); let L;
  const H = { addLecture: (c, l) => { L = l; } }; new Function('Hospes', t)(H); return L; }"""
errs = []
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={'width': 390, 'height': 844}, device_scale_factor=2)
    pg.add_init_script(FAKE_SPEECH)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto('http://localhost:8765/index.html'); pg.wait_for_timeout(500)
    pg.evaluate('localStorage.clear()'); pg.reload(); pg.wait_for_timeout(500)
    L = pg.evaluate(ld)
    pg.screenshot(path=S + 'home.png')
    pg.click('text=Start unit')
    widths = {}
    for sec in ['intro', 'pron', 'phrases', 'dialogue', 'vocab', 'grammar', 'reading']:
        pg.click(f'.chip[data-section={sec}]'); pg.wait_for_timeout(80)
        widths[sec] = pg.evaluate('document.documentElement.scrollWidth')
        pg.screenshot(path=S + f'sec_{sec}.png')
    print('widths', widths)
    print('wide sections:', [k for k, v in widths.items() if v > 390])
    # phrases: one speaker per phrase, Play all goes through every phrase
    pg.click('.chip[data-section=phrases]')
    print('phrase speakers', pg.locator('.pitem .speak').count(), f"({len(L['phrases'])} expect {len(L['phrases'])})")
    pg.evaluate('window.__spoken = []'); pg.click('[data-playall]'); pg.wait_for_timeout(len(L['phrases']) * 520 + 600)
    print('played all phrases', len(pg.evaluate('window.__spoken')), f"(expect {len(L['phrases'])})")
    voice = pg.evaluate('window.__spoken[0] && window.__spoken[0].voice'); print('voice used', voice, '(Audrey expected)')
    if voice != 'Audrey': print('FAIL best voice not chosen')
    # dialogue: English hidden by default, shown on request, plays line by line
    pg.click('.chip[data-section=dialogue]')
    print('english lines hidden', pg.locator('.den').count(), '(0 expect 0)')
    pg.click('[data-showen="1"]'); print('english lines shown', pg.locator('.den').count(), f"({len(L['dialogue']['lines'])} expect {len(L['dialogue']['lines'])})")
    pg.screenshot(path=S + 'dialogue_en.png', full_page=True)
    pg.evaluate('window.__spoken = []'); pg.click('[data-slow]'); pg.click('[data-playall]'); pg.wait_for_timeout(len(L['dialogue']['lines']) * 520 + 600)
    sp = pg.evaluate('window.__spoken')
    print('dialogue lines played', len(sp), f"(expect {len(L['dialogue']['lines'])})")
    if sp and sp[0]['rate'] > 0.7: print('FAIL slow setting not applied', sp[0]['rate'])
    pg.click('[data-slow]')
    # reading: every word tappable, questions answerable
    pg.click('.chip[data-section=reading]')
    print('reading words', pg.locator('.reading .w').count())
    for q in L['reading']['questions']:
        pg.click(f'[data-inline="{q["id"]}"][data-i="{q["answer"]}"]')
    print('reading answers marked right', pg.locator('.opt.right').count(), f"({len(L['reading']['questions'])} expect {len(L['reading']['questions'])})")

    def answer(item):
        t = item['type']
        if t in ('mc',) or (t == 'listen' and 'options' in item):
            pg.click(f'[data-choice="{item["answer"]}"]')
        elif t == 'gap':
            pg.fill('#ans', item['answers'][0]); pg.click('[data-check]')
        elif t == 'translate':
            pg.fill('#ans', item['accepted'][0]); pg.click('[data-check]')
        elif t == 'listen':
            pg.fill('#ans', (item.get('accepted') or [item['text']])[0]); pg.click('[data-check]')
        elif t == 'match':
            for k in range(len(item['pairs'])): pg.click(f'[data-ml="{k}"]'); pg.click(f'[data-mr="{k}"]')
        elif t == 'order':
            for k in range(len(item['tokens'])): pg.click(f'[data-ob="{k}"]')
            pg.click('[data-check]')
        return pg.locator('.feedback').first.inner_text().split('\n')[0]

    # exercises, in order, each answered from the data
    pg.click('.chip[data-section=practice]'); pg.evaluate('window.__spoken = []'); pg.click('[data-start=practice]')
    bad, listened = [], 0
    for i, item in enumerate(L['exercises']):
        if item['type'] == 'listen':
            sp = pg.evaluate('window.__spoken'); listened += 1 if sp and sp[-1]['text'] == item['text'] else 0
            pg.screenshot(path=S + f'ex_listen_{i}.png')
        fb = answer(item)
        if fb != 'Correct.': bad.append((item['id'], fb))
        pg.click('[data-next-item]')
    print('not correct:', bad)
    n_listen = sum(1 for x in L['exercises'] if x['type'] == 'listen')
    print('listening items played by themselves', listened, f'(expect {n_listen})')
    # accents: a missing accent is accepted with a reminder
    pg.click('[data-start=practice]')
    for i, item in enumerate(L['exercises']):
        if item['id'] == 'e14':
            pg.fill('#ans', "Un cafe et un croissant, s'il vous plait"); pg.click('[data-check]'); fbt = pg.locator('.feedback').first.inner_text(); print('no-accent answer:', fbt.replace('\n', ' | '))
            if not fbt.startswith('Correct.') or 'accents' not in fbt: print('FAIL missing accent not accepted with a reminder')
            break
        if item['type'] in ('mc',) or (item['type'] == 'listen' and 'options' in item): pg.click(f'[data-choice="{item["answer"]}"]')
        else: answer(item)
        pg.click('[data-next-item]')
    # test: build several, answer every item (including the vocabulary questions the app builds) from its data
    pg.click('.chip[data-section=test]')
    bad, kinds = [], set()
    for run in range(5):
        pg.click('[data-start=test]')
        for k in range(L['test']['count']):
            item = pg.evaluate('Hospes._item()'); kinds.add(item['type'])
            fb = answer(item)
            if fb != 'Correct.': bad.append((run, item['id'], fb))
            pg.click('[data-next-item]')
        res = pg.locator('#secbody').inner_text()
    print('test not correct:', bad)
    print('test item types seen', sorted(kinds))
    for t in ('translate', 'gap', 'listen'):
        if t not in kinds: print('FAIL test never drew a', t, 'item')
    print('test result:', ' '.join(res.split()))
    # flashcards: phrases deck exists; French played automatically
    pg.click('[data-go=cards]'); pg.click('[data-deck=phrases]')
    print('phrases deck new cards', pg.locator('.stat b').nth(1).inner_text())
    pg.evaluate('window.__spoken = []'); pg.click('[data-startcards]')
    front = pg.locator('.card .front').inner_text(); sp = pg.evaluate('window.__spoken')
    print('card played on show:', bool(sp) and sp[-1]['text'] == front.replace(' ', ' '))
    pg.screenshot(path=S + 'card.png')
    for k in range(3): pg.click('[data-flip]'); pg.click('[data-grade=good]')
    # phrasebook search
    pg.click('[data-go=ref]'); print('phrasebook phrases', pg.locator('.pitem').count(), f"({len(L['phrases'])} expect {len(L['phrases'])})")
    pg.fill('#phsearch', 'addition'); pg.wait_for_timeout(300); print('search addition', pg.locator('.pitem').count(), '(1 expect 1)')
    pg.fill('#phsearch', 'bill'); pg.wait_for_timeout(300); print('search bill', pg.locator('.pitem').count(), '(1 expect 1)')
    pg.screenshot(path=S + 'phrasebook.png')
    pg.click('[data-refpage=fr-sounds]'); print('sounds page width', pg.evaluate('document.documentElement.scrollWidth'), '(390 expect 390)')
    pg.click('[data-refpage=tables]'); pg.screenshot(path=S + 'tables.png')
    # progress: audio panel lists French voices only, no novelty voice
    pg.click('[data-go=progress]')
    opts = pg.locator('#sVoice option').all_inner_texts(); print('voice options', opts)
    if any('Grandma' in o or 'Daniel' in o for o in opts): print('FAIL novelty or English voice listed')
    pg.screenshot(path=S + 'progress.png', full_page=True)
    # text size extra large: no page wider than the screen
    pg.select_option('#sText', 'xl')
    wide = []
    pg.click('[data-go=home]'); pg.click('[data-go=home]')
    pg.click('[data-lecture]')
    for sec in ['intro', 'pron', 'phrases', 'dialogue', 'vocab', 'grammar', 'practice', 'reading', 'test']:
        pg.click(f'.chip[data-section={sec}]'); w = pg.evaluate('document.documentElement.scrollWidth')
        if w > 390: wide.append((sec, w))
    print('wide at extra large:', wide)
    if wide: print('FAIL pages wider than the screen at extra large text')
    pg.emulate_media(color_scheme='dark'); pg.click('.chip[data-section=dialogue]'); pg.screenshot(path=S + 'dark_dialogue.png')
    b.close()
print('errors', errs)
