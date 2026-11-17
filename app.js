/*
 * Hospes — the engine. Language-independent: everything about a language
 * comes from content/catalogue.js and the unit files it lists.
 * Progress is stored in this browser (localStorage), backed up by export and,
 * if set up, synced to a private GitHub Gist.
 * Forked from Viātor (November 2026); internally a unit is still called a "lecture".
 */
(function () {
  'use strict';

  const CONTENT_BASE = (document.currentScript && document.currentScript.dataset.content) || 'content/';
  const BUILD = '2026-11-17b';           // shown under Progress so you can tell which version is running
  const FORMAT = 1;                       // progress format version; bump + migrate() on change
  const STORE_KEY = 'hospes.progress';
  const INTERVALS = [0, 1, 2, 4, 8, 16, 32, 64]; // Leitner box → days until next review
  const SCALES = { s: 0.92, m: 1, l: 1.15, xl: 1.3 };   // text sizes
  const CARD_DIRS = ['both', 'la-en', 'en-la'];

  // ---------- registry used by content files ----------
  const registry = { catalogue: [], lectures: {}, pages: [], shared: [], audio: {} };
  window.Hospes = {
    setCatalogue(list) { registry.catalogue = list; },
    setShared(files) { registry.shared = files; },
    // Reference pages: courses = '*' or a list of course ids; kinds: 'dates', 'timeline', 'map'
    addPage(courses, page) { registry.pages.push(Object.assign({ courses }, page)); },
    addLecture(courseId, lecture) {
      (registry.lectures[courseId] = registry.lectures[courseId] || []).push(lecture);
    },
    // pre-recorded audio: text (exactly as in the content) → file path below content/, from the rendering job
    addAudio(courseId, map) { registry.audio[courseId] = Object.assign(registry.audio[courseId] || {}, map); }
  };

  // ---------- utilities ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const roman = n => { let r = '', x = Number(n) || 0; if (x <= 0 || x > 3999) return String(n); for (const [v, l] of [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]) while (x >= v) { r += l; x -= v; } return r; };
  // Length marks are per course: macron (Latin ā) or circumflex (Middle Low German â, as in the dictionaries).
  // For a modern language (lengthMark 'accents') every accent counts: é è ê ë à â ç ô î ï ù û. A missing accent is
  // then accepted with a reminder, like a missing macron in Latin, unless accents are required in the settings.
  const stripMacrons = s => String(s).normalize('NFD').replace((course && course.lengthMark === 'accents') ? /[\u0300-\u036f]/g : (course && course.lengthMark === 'circumflex') ? /\u0302/g : /\u0304/g, '').normalize('NFC');
  // Spelling variants a course treats as equivalent when checking answers and looking up words (e.g. v = u, y = i).
  const spell = s => (course && course.spelling || []).reduce((x, [a, b]) => x.replace(new RegExp(a, 'g'), b), s);
  const markName = () => (course && course.lengthMarkName) || 'macrons';
  // Translation directions: 'xx-en' into English, 'xx-de' into German, anything else into the course language.
  const dirParts = d => (d || '').split('-');
  const intoLang = d => { const t = dirParts(d)[1]; return t === 'en' || t === 'de' ? t : 'target'; };
  const fromTarget = d => !['en', 'de'].includes(dirParts(d)[0]);
  const glossOf = v => (course && course.reverseFrom === 'de' && v.de) ? v.de : v.en;
  const otherLang = () => (course && course.reverseFrom === 'de') ? 'German' : 'English';
  const today = () => { const d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000); };
  const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  const sample = (a, n) => shuffle(a).slice(0, n);

  function loadScript(src) {
    return new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = src; s.onload = res; s.onerror = () => rej(new Error('Could not load ' + src));
      document.head.appendChild(s);
    });
  }
  // Content files are downloaded in parallel but run in the order given (async = false). A file that fails to
  // download is reported in `missing` and skipped, so one missing lecture does not stop the whole app.
  const missing = [];
  const shortName = src => src.replace(/^.*?content\//, '');
  function loadScripts(srcs) {
    return Promise.all(srcs.map(src => new Promise(res => {
      const s = document.createElement('script');
      s.src = src; s.async = false;
      s.onload = () => res();
      s.onerror = () => { missing.push(shortName(src)); res(); };
      document.head.appendChild(s);
    })));
  }
  // A content file that downloads but contains an error also leaves its lecture out; report it the same way.
  window.addEventListener('error', e => {
    const f = e.filename || '';
    if (f.indexOf('/content/') < 0) return;
    const name = shortName(f) + ' (error)';
    if (!missing.includes(name)) { missing.push(name); if (course && ui.view === 'home') render(); }
  });

  // ---------- progress & storage ----------
  function freshProgress() {
    return {
      format: FORMAT, created: new Date().toISOString(), lastExport: null,
      activeCourse: null,
      streak: { count: 0, last: null },
      // the direction of vocabulary cards is chosen per course (courses[id].cardDir, else the course's default)
      settings: { macronsShown: true, strictMacrons: false, newPerDay: 10, backupDays: 7, textSize: 'l',
        speechRate: 'normal', autoplay: true, voice: {} },   // voice: course id → chosen system voice
      courses: {}
    };
  }
  const isObj = x => !!x && typeof x === 'object' && !Array.isArray(x);
  const emptyCourse = () => ({ lectures: {}, cards: {}, newToday: { day: 0, count: 0 }, misses: {}, overrides: {} });
  function migrate(p) {
    if (!isObj(p)) return freshProgress();
    if (!isObj(p.courses)) p.courses = {};
    // Every format: whatever was stored or restored is brought into the expected shape, so that an incomplete or
    // hand-edited backup cannot stop the app. Anything unusable is dropped; the rest is kept.
    const base = freshProgress();
    const s = p.settings = Object.assign({}, base.settings, isObj(p.settings) ? p.settings : {});
    const pick = (v, allowed, dflt) => allowed.includes(v) ? v : dflt;
    s.macronsShown = s.macronsShown !== false; s.strictMacrons = s.strictMacrons === true;
    s.newPerDay = pick(Number(s.newPerDay), [5, 10, 15, 20, 30, 50], base.settings.newPerDay);
    s.backupDays = pick(Number(s.backupDays), [3, 7, 14, 30], base.settings.backupDays);
    s.textSize = pick(s.textSize, Object.keys(SCALES), base.settings.textSize);
    s.speechRate = pick(s.speechRate, ['normal', 'slow'], 'normal'); s.autoplay = s.autoplay !== false;
    if (!isObj(s.voice)) s.voice = {};
    if (s.cardDir !== undefined && !CARD_DIRS.includes(s.cardDir)) delete s.cardDir;
    p.streak = isObj(p.streak) ? p.streak : base.streak;
    if (typeof p.lastExport !== 'string' || isNaN(Date.parse(p.lastExport))) p.lastExport = null;
    if (typeof p.activeCourse !== 'string') p.activeCourse = null;
    const num = (v, d) => (typeof v === 'number' && isFinite(v)) ? v : d;
    for (const id of Object.keys(p.courses)) {
      const c = p.courses[id];
      if (!isObj(c)) { delete p.courses[id]; continue; }
      const e = emptyCourse();
      for (const k of Object.keys(e)) if (!isObj(c[k])) c[k] = e[k];
      c.newToday = { day: num(c.newToday.day, 0), count: num(c.newToday.count, 0) };
      if (c.cardDir !== undefined && !CARD_DIRS.includes(c.cardDir)) delete c.cardDir;
      for (const [k, l] of Object.entries(c.lectures)) {
        if (!isObj(l)) { delete c.lectures[k]; continue; }
        l.started = !!l.started; if (!isObj(l.sections)) l.sections = {};
        l.testBest = l.testBest == null ? null : num(l.testBest, null); l.testRuns = num(l.testRuns, 0);
      }
      for (const [k, x] of Object.entries(c.cards)) {
        if (!isObj(x) || typeof x.box !== 'number' || typeof x.due !== 'number') { delete c.cards[k]; continue; }
        x.box = Math.max(0, Math.min(INTERVALS.length - 1, Math.round(x.box))); x.lapses = num(x.lapses, 0);
      }
      for (const [k, n] of Object.entries(c.misses)) if (!(num(n, 0) > 0)) delete c.misses[k];
      for (const [k, a] of Object.entries(c.overrides)) if (!Array.isArray(a)) delete c.overrides[k]; else c.overrides[k] = a.filter(v => typeof v === 'string').slice(-3);
    }
    p.format = FORMAT;
    return p;
  }
  let P;
  // damaged: stored progress could not be read ({ kept: true } if a copy was put aside);
  // holdSaves: the copy could not be put aside, so nothing is written over the original until the person decides;
  // saveFailed: the browser refused the last save;
  // newer: the stored progress was written by a later version of the app than the one running (an old copy of the app
  // has come back); it is shown but not written over until the app is up to date
  let damaged = null, holdSaves = false, saveFailed = false, newer = false;
  function load() {
    let raw = null;
    try { raw = localStorage.getItem(STORE_KEY); } catch (e) { /* storage unavailable */ }
    try {
      const stored = raw ? JSON.parse(raw) : null;
      if (stored !== null && !isObj(stored)) throw new Error('not progress');
      if (isObj(stored) && stored.format > FORMAT) { newer = true; holdSaves = true; }
      P = migrate(stored);
    }
    catch (e) {
      // Unreadable progress is never silently replaced: keep the text under its own key first.
      P = freshProgress(); damaged = { kept: false };
      try { localStorage.setItem(STORE_KEY + '.damaged.' + new Date().toISOString(), raw); damaged.kept = true; } catch (e2) { holdSaves = true; }
    }
    try { navigator.storage && navigator.storage.persist && navigator.storage.persist(); } catch (e) { /* not supported */ }
  }
  function save() {
    if (holdSaves) return;
    try { localStorage.setItem(STORE_KEY, JSON.stringify(P)); saveFailed = false; if (typeof scheduleSync === 'function') scheduleSync(); }
    catch (e) {
      if (saveFailed) return;
      saveFailed = true;   // say so once; the notice on the course page stays until a save succeeds
      setTimeout(() => { toast('Progress could not be saved on this phone. Save a backup now.'); if (ui.view === 'home') render(); }, 0);
    }
  }
  // Before a backup is restored or a course is reset, the progress as it was is kept on this phone (one copy), so
  // that the step can be taken back under Progress → Backup.
  const UNDO_KEY = STORE_KEY + '.previous';
  function keepPrevious(why) { try { localStorage.setItem(UNDO_KEY, JSON.stringify({ t: new Date().toISOString(), why, progress: P })); } catch (e) { /* no room: go on without */ } }
  function previousProgress() { try { const o = JSON.parse(localStorage.getItem(UNDO_KEY) || 'null'); return isObj(o) && isObj(o.progress) ? o : null; } catch (e) { return null; } }
  function courseP(id) {
    return P.courses[id] = P.courses[id] || emptyCourse();
  }
  function lectureP(cid, lid) {
    const c = courseP(cid);
    return c.lectures[lid] = c.lectures[lid] || { started: false, sections: {}, testBest: null, testRuns: 0 };
  }
  function touchStreak() {
    const d = today(), s = P.streak;
    if (s.last === d) return;
    s.count = (s.last === d - 1) ? s.count + 1 : 1;
    s.last = d;
  }

  // ---------- problems ----------
  // Errors are recorded on this phone (the last ten) and shown under Progress, so that a problem can be reported
  // even though a phone has no console to look at.
  const ERR_KEY = 'hospes.errors';
  function errorLog() { try { const l = JSON.parse(localStorage.getItem(ERR_KEY) || '[]'); return Array.isArray(l) ? l : []; } catch (e) { return []; } }
  function logError(e, where) {
    try {
      const msg = String((e && (e.stack || e.message)) || e).slice(0, 700), list = errorLog(), last = list[list.length - 1];
      const at = ui.view + (ui.view === 'lecture' ? ' ' + ui.lectureId + ' ' + ui.section : '') + (course ? ' (' + course.id + ')' : '');
      if (last && last.msg === msg) { last.n = (last.n || 1) + 1; last.t = new Date().toISOString(); }
      else list.push({ t: new Date().toISOString(), build: BUILD, where, at, msg });
      localStorage.setItem(ERR_KEY, JSON.stringify(list.slice(-10)));
    } catch (x) { /* storage unavailable */ }
  }
  let lastErrorToast = 0;
  function reportError(e, where) {
    logError(e, where);
    if (Date.now() - lastErrorToast < 10000) return;
    lastErrorToast = Date.now();
    try { toast('Something went wrong. If it happens again, see Progress → Problems recorded.'); } catch (x) {}
  }
  window.addEventListener('error', e => {
    if (!(e.error || e.message) || e.message === 'Script error.') return;   // the second: an error in a script from another site, with no details
    const f = e.filename || '', where = 'error' + (f ? ' in ' + shortName(f) : '');
    if (f.indexOf('/content/') >= 0) logError(e.error || e.message, where);   // course files have their own notice on the course page
    else reportError(e.error || e.message, where);
  });
  window.addEventListener('unhandledrejection', e => reportError(e.reason, 'promise'));

  // ---------- state ----------
  const ui = { view: 'home', lectureId: null, section: 'intro', ex: null, cards: null, ref: '', confirmImport: null, gloss: null, open: {},
    fold: {},            // folding lists that stay as they were left (finished lectures, test scores, problems)
    lectureOpen: false,  // a lecture is open in the Course tab: the tab returns to it from the other tabs
    scroll: {} };        // where the lecture and the reference page were left, for coming back to them
  let course = null;  // active course object from catalogue
  // special lectures (special: true) sort after the numbered ones, show ✦ instead of a numeral, and are left out of “Continue”
  const lectures = () => (registry.lectures[course.id] || []).slice().sort((a, b) => (!!a.special - !!b.special) || a.number - b.number);
  const lnum = l => l.special ? '✦' : String(l.number);
  // Roman numerals are scaled to fit their space on a phone: XXXVIII is fourteen times as wide as I.
  // Widths per em of the display font (Marcellus); other characters count as 0.6.
  const NUMW = { I: 0.25, V: 0.64, X: 0.68, L: 0.44, C: 0.66, D: 0.72, M: 0.86, '✦': 0.82 };
  const fitNum = (t, maxPx, boxPx) => {
    const em = [...String(t)].reduce((a, ch) => a + (NUMW[ch] || 0.6), 0);
    return `font-size:${Math.min(maxPx, Math.floor(boxPx / Math.max(em, 0.1)))}px`;
  };
  const findLecture = id => lectures().find(l => l.id === id);
  const M = html => P.settings.macronsShown ? html : stripMacrons(html);

  const SECTIONS = [
    { id: 'intro', label: 'Introduction' },
    { id: 'pron', label: 'Pronunciation', when: l => !!l.pronunciation },
    { id: 'phrases', label: 'Phrases', when: l => !!(l.phrases && l.phrases.length) },
    { id: 'dialogue', label: 'Dialogue', when: l => !!l.dialogue },
    { id: 'vocab', label: 'Vocabulary' },
    { id: 'grammar', label: 'Grammar' },
    { id: 'practice', label: 'Exercises' },
    { id: 'reading', label: 'Reading', when: l => !!l.reading },
    { id: 'test', label: 'Test' }
  ];
  const sectionsFor = l => SECTIONS.filter(s => !s.when || s.when(l));

  // ---------- flashcards ----------
  function cardsForLecture(l) {
    // order matters for new cards: Latin→English first, then grammar, then English→Latin
    const fwd = [], rev = [], gram = [];
    (l.vocab || []).forEach(v => {
      const meta = [v.pos, v.g ? ({ m: 'masc.', f: 'fem.', n: 'neut.' }[v.g]) : ''].filter(Boolean).join(', ');
      const meaning = v.de ? `${v.de} · ${v.en}` : v.en;
      fwd.push({ id: `v:${l.id}:${v.id}:f`, deck: 'vocab', dir: 'la-en', front: v.la, back: meaning, meta, latinFront: true, vid: v.id, say: v.head });
      rev.push({ id: `v:${l.id}:${v.id}:r`, deck: 'vocab', dir: 'en-la', front: glossOf(v), back: v.la, meta, latinFront: false, vid: v.id, say: v.head });
    });
    (l.grammarCards || []).forEach(g => gram.push({ id: `g:${l.id}:${g.id}`, deck: 'grammar', front: g.front, back: g.back, latinFront: false }));
    // phrases are cards of their own deck, in both directions like the vocabulary
    const pf = [], pr = [];
    (l.phrases || []).forEach(x => {
      pf.push({ id: `p:${l.id}:${x.id}:f`, deck: 'phrases', dir: 'la-en', front: x.fr, back: x.en, meta: '', latinFront: true, say: x.fr });
      pr.push({ id: `p:${l.id}:${x.id}:r`, deck: 'phrases', dir: 'en-la', front: x.en, back: x.fr, meta: '', latinFront: false, say: x.fr });
    });
    return fwd.concat(pf, gram, rev, pr);
  }
  function unlockedCards() {
    const c = courseP(course.id);
    return lectures().filter(l => c.lectures[l.id] && c.lectures[l.id].started).flatMap(cardsForLecture);
  }
  function cardState(id) { return courseP(course.id).cards[id]; }
  // Direction of vocabulary cards: the person's choice for this course, else the course's default (the reading courses
  // show cards from the course language only), else an older setting for all courses, else both directions.
  const cardDir = () => courseP(course.id).cardDir || course.cardDir || P.settings.cardDir || 'both';
  function dirAllowed(card) { const d = cardDir(); return card.deck === 'grammar' || d === 'both' || d === card.dir; }
  // the stored state of the cards that are currently in use (cards of the other direction are kept but not shown)
  const shownStates = () => { const c = courseP(course.id); return unlockedCards().filter(dirAllowed).map(k => c.cards[k.id]).filter(Boolean); };
  function dueCards(deck) {
    const d = today();
    return unlockedCards().filter(c => (deck === 'all' || c.deck === deck) && dirAllowed(c))
      .filter(c => { const s = cardState(c.id); return s && s.box > 0 && s.due <= d; });
  }
  function newCards(deck) {
    const c = courseP(course.id);
    if (c.newToday.day !== today()) c.newToday = { day: today(), count: 0 };
    const left = Math.max(0, P.settings.newPerDay - c.newToday.count);
    return unlockedCards().filter(x => (deck === 'all' || x.deck === deck) && dirAllowed(x) && !cardState(x.id)).slice(0, left);
  }
  function gradeCard(card, grade) {
    const c = courseP(course.id), d = today();
    let s = c.cards[card.id];
    if (!s) { s = c.cards[card.id] = { box: 0, due: d, lapses: 0 }; c.newToday.count++; }
    if (grade === 'again') { s.box = 1; s.due = d; s.lapses++; }
    else {
      s.box = Math.min(INTERVALS.length - 1, s.box + (grade === 'easy' ? 2 : 1));
      s.due = d + INTERVALS[s.box];
    }
    touchStreak(); save();
  }

  // ---------- answer checking ----------
  function norm(s) {
    return String(s).toLowerCase().replace(/[’‘`]/g, "'")
      .replace(/\(pl\.?\)/g, ' ')
      .replace(/[.,!?;:"“”«»()\[\]–—]/g, ' ')
      .replace(/\s+/g, ' ').trim();
  }
  function normEn(s) {
    return norm(s)
      .replace(/\bdon't\b/g, 'do not').replace(/\bdoesn't\b/g, 'does not').replace(/\bisn't\b/g, 'is not')
      .replace(/\baren't\b/g, 'are not').replace(/\bdont\b/g, 'do not').replace(/\bdoesnt\b/g, 'does not')
      .replace(/'/g, '')
      .split(' ').filter(w => w && !['the', 'a', 'an'].includes(w)).join(' ');
  }
  const bag = s => s.split(' ').filter(Boolean).sort().join(' ');
  // Latin/target-language answers: word order free (bag of words); macrons per setting.
  function checkTarget(input, accepted, opts = {}) {
    const strict = P.settings.strictMacrons && P.settings.macronsShown && course.macrons;
    const f = opts.orderFree ? bag : (x => x);
    const clean = x => spell(norm(x).replace(/'/g, ''));
    const inp = f(clean(input));
    if (accepted.some(a => f(clean(a)) === inp)) return { ok: true, macron: false };
    const inpLoose = f(stripMacrons(clean(input)));
    const loose = accepted.some(a => f(stripMacrons(clean(a))) === inpLoose);
    if (loose) return { ok: !strict, macron: true };
    return { ok: false, macron: false };
  }
  function normDe(s) {
    return bag(norm(s).replace(/ß/g, 'ss').replace(/'/g, '')
      .split(' ').filter(w => w && !['der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine', 'einen', 'einem', 'einer', 'eines'].includes(w)).join(' '));
  }
  function checkGerman(input, accepted) {
    const inp = normDe(input);
    return { ok: accepted.some(a => normDe(a) === inp), macron: false };
  }
  function checkEnglish(input, accepted) {
    const inp = normEn(input);
    return { ok: accepted.some(a => normEn(a) === inp), macron: false };
  }
  function recordResult(itemId, ok) {
    const m = courseP(course.id).misses;
    if (!ok) m[itemId] = (m[itemId] || 0) + 1;
    else if (inRevision() && m[itemId]) delete m[itemId];   // in revision, an item answered correctly leaves the list
    touchStreak(); save();
  }

  // ---------- audio ----------
  // Every French text can be heard. A pre-recorded file is used if the course has one for exactly that text
  // (Hospes.addAudio, written by the audio rendering job); otherwise the phone's own voice reads it. Upgrading the
  // voices therefore means adding files, not changing the app. Audio must start from a tap (iOS rule), so automatic
  // playback happens only inside click handlers.
  const audioKey = t => String(t).replace(/\s+/g, ' ').trim();
  const hasSpeech = () => 'speechSynthesis' in window;
  const canHear = () => !!(course && course.tts) && (hasSpeech() || !!(registry.audio[course.id] && Object.keys(registry.audio[course.id]).length));
  const RATES = { normal: { tts: 0.92, file: 1 }, slow: { tts: 0.68, file: 0.75 } };
  // Apple's novelty voices exist in every language and are useless for learning
  const NOVELTY = /^(eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox|albert|fred|junior|kathy|ralph)\b/i;
  function courseVoices() {
    if (!hasSpeech() || !course || !course.tts) return [];
    const want = course.tts.toLowerCase(), base = want.split('-')[0];
    return speechSynthesis.getVoices().filter(v => v.lang && v.lang.replace('_', '-').toLowerCase().split('-')[0] === base && !NOVELTY.test(v.name));
  }
  // best voice: the one chosen in Settings; else the course's own region (fr-FR rather than fr-CA), premium or enhanced
  // quality first (downloadable in iOS Settings → Accessibility → Spoken Content → Voices)
  function voiceScore(v) {
    const lang = v.lang.replace('_', '-').toLowerCase(), id = (v.voiceURI + ' ' + v.name).toLowerCase();
    return (lang === course.tts.toLowerCase() ? 10 : 0) + (/premium/.test(id) ? 4 : /enhanced|améliorée|amélioré/.test(id) ? 3 : 0) + (v.localService ? 1 : 0);
  }
  function pickVoice() {
    const list = courseVoices(); if (!list.length) return null;
    const chosen = P.settings.voice[course.id];
    return list.find(v => v.voiceURI === chosen) || list.slice().sort((a, b) => voiceScore(b) - voiceScore(a))[0];
  }
  if (hasSpeech()) speechSynthesis.addEventListener && speechSynthesis.addEventListener('voiceschanged', () => { if (ui.view === 'progress') { const y = window.scrollY; render(); window.scrollTo(0, y); } });
  const SPEAKER = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 8.8a4.5 4.5 0 0 1 0 6.4M18.2 6.2a8.2 8.2 0 0 1 0 11.6"/></svg>';
  function speakBtn(text, label) {
    if (!text || !canHear()) return '';
    return `<button type="button" class="speak${label ? ' labelled' : ''}" data-speak="${esc(audioKey(text))}" aria-label="Listen">${SPEAKER}${label ? `<span>${esc(label)}</span>` : ''}</button>`;
  }
  let player = null, seq = null;
  function stopAudio() {
    seq = null;
    try { if (hasSpeech()) speechSynthesis.cancel(); } catch (e) {}
    if (player) { try { player.onended = player.onerror = null; player.pause(); } catch (e) {} }
    document.querySelectorAll('.playing').forEach(el => el.classList.remove('playing'));
  }
  // speak one text; done() is called when it has finished (or failed), for playing a dialogue line by line
  function speak(text, opts = {}) {
    if (!opts.keepSeq) stopAudio(); else { try { if (hasSpeech()) speechSynthesis.cancel(); } catch (e) {} }
    const rate = RATES[opts.rate || P.settings.speechRate] || RATES.normal, done = opts.done || (() => {});
    const file = course && registry.audio[course.id] && registry.audio[course.id][audioKey(text)];
    const viaVoice = () => {
      if (!hasSpeech()) { toast('Audio is not available on this device.'); done(); return; }
      // iOS Safari quirks handled here: speak() straight after cancel() can be dropped, a paused engine stays silent, and
      // a listed voice may be unusable (not fully downloaded). If nothing starts within 2.5 s, retry once with the
      // phone's default voice for the language and record what happened under Progress → Problems recorded.
      const attempt = (useVoice) => {
        let started = false, finished = false;
        const end = () => { if (!finished) { finished = true; clearTimeout(dog); done(); } };
        let dog = 0;
        try {
          const u = new SpeechSynthesisUtterance(text);
          u.lang = course.tts; u.rate = rate.tts;
          const v = useVoice ? pickVoice() : null; if (v) u.voice = v;
          u.onstart = () => { started = true; };
          u.onend = end;
          u.onerror = ev => {
            const err = ev && ev.error;
            if (err === 'canceled' || err === 'interrupted') { end(); return; }
            logError('Speech error: ' + err + ' · voice ' + (v ? v.name + ' / ' + v.voiceURI : 'default'), 'speak');
            if (useVoice && !started && !finished) { finished = true; clearTimeout(dog); attempt(false); return; }
            toast('The phone could not play this (' + (err || 'unknown') + '). Check the volume and the silent switch.'); end();
          };
          dog = setTimeout(() => {
            if (started || finished) return;
            logError('Speech did not start within 2.5 s · voice ' + (v ? v.name + ' / ' + v.voiceURI : 'default') + ' · speaking=' + speechSynthesis.speaking + ' paused=' + speechSynthesis.paused, 'speak');
            finished = true; try { speechSynthesis.cancel(); } catch (e) {}
            if (useVoice && v) { toast('That voice did not respond; trying the default French voice.'); setTimeout(() => attempt(false), 80); }
            else { toast('No sound. Check the volume and the silent switch (the one on the side of the phone).'); done(); }
          }, 2500);
          setTimeout(() => { try { if (speechSynthesis.paused) speechSynthesis.resume(); speechSynthesis.speak(u); } catch (e) { logError(e, 'speak'); end(); } }, 60);
        } catch (e) { logError(e, 'speak'); toast('Audio is not available on this device.'); end(); }
      };
      attempt(true);
    };
    if (!file) { viaVoice(); return; }
    try {
      player = player || new Audio();
      player.onended = () => done(); player.onerror = () => { player.onerror = null; viaVoice(); };
      player.src = CONTENT_BASE + file; player.playbackRate = rate.file;
      const pr = player.play(); if (pr && pr.catch) pr.catch(() => viaVoice());
    } catch (e) { viaVoice(); }
  }
  // play several texts one after another, marking the element of each as it plays (a dialogue)
  function speakAll(items, rate) {
    stopAudio();
    const run = seq = { i: 0 };
    const step = () => {
      if (seq !== run) return;
      document.querySelectorAll('.playing').forEach(el => el.classList.remove('playing'));
      if (run.i >= items.length) { seq = null; const b = $('[data-playall]'); if (b) b.classList.remove('on'); return; }
      const it = items[run.i++], el = it.el && document.getElementById(it.el);
      if (el) { el.classList.add('playing'); el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
      speak(it.text, { rate, keepSeq: true, done: () => setTimeout(step, 450) });
    };
    step();
  }
  // the French side of a flashcard that is showing, played when the card appears or turns (setting: autoplay)
  function autoSpeakCard() {
    const s = ui.cards; if (!P.settings.autoplay || !s || !s.queue.length || !canHear()) return;
    const c = s.queue[0]; if (!c.say) return;
    if (c.latinFront || s.flipped) speak(c.say);
  }

  // ---------- rendering ----------
  const root = () => $('#app');
  let toastTimer;
  function toast(msg) {
    let t = $('.toast'); if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, 2600);
  }

  const ICONS = {
    home: '<svg viewBox="0 0 24 24"><path d="M4 19V6.5A1.5 1.5 0 0 1 5.5 5H11v15H5.5A1.5 1.5 0 0 1 4 18.5"/><path d="M20 19V6.5A1.5 1.5 0 0 0 18.5 5H13v15h5.5a1.5 1.5 0 0 0 1.5-1.5"/></svg>',
    cards: '<svg viewBox="0 0 24 24"><rect x="3" y="7" width="14" height="12" rx="2"/><path d="M7 7V5.5A1.5 1.5 0 0 1 8.5 4h11A1.5 1.5 0 0 1 21 5.5v9a1.5 1.5 0 0 1-1.5 1.5H17"/></svg>',
    ref: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/></svg>',
    progress: '<svg viewBox="0 0 24 24"><path d="M4 20h16"/><path d="M7 16v-4M12 16V7M17 16v-7"/></svg>'
  };

  function applyTextSize() {
    const k = SCALES[P.settings.textSize] || SCALES.l;
    document.documentElement.style.setProperty('--scale', k);
  }
  // If a page cannot be drawn, the app goes back to the course page instead of stopping, forgets the place it was
  // in (so that a restart does not lead straight back into the problem) and records what happened.
  function render() {
    try { draw(); return; } catch (e) { logError(e, 'drawing the page'); }
    try { localStorage.removeItem(PLACE_KEY); } catch (e) {}
    const was = ui.view;
    Object.assign(ui, { view: 'home', ex: null, cards: null, gloss: null, lectureOpen: false, confirmImport: null });
    if (was !== 'home') {
      try { draw(); toast('That page could not be shown. The problem is recorded under Progress.'); return; } catch (e) { logError(e, 'drawing the course page'); }
    }
    root().innerHTML = `<div class="gutter stack" style="padding-block:40px"><p><b>The app has run into a problem and cannot show this page.</b></p>
      <p class="small">Your progress is still stored on this phone. Save a backup first, then reload. If the problem stays, reload the app files (your progress is kept).</p>
      <div class="row"><button class="btn" data-export>Save backup file</button><button class="btn quiet" data-reloadnow>Reload</button><button class="btn quiet" data-reloadfiles>Reload app files</button></div>
      <p class="small muted">${esc((errorLog().slice(-1)[0] || {}).msg || '').split('\n')[0]}</p></div>`;
  }
  function draw() {
    applyTextSize();
    const due = dueCards('all').length + newCards('all').length;
    const header = ui.view === 'lecture' ? `<button class="back" data-go="home">‹ ${esc(course.name)}</button><span class="spacer"></span>`
      : ui.view === 'review' ? `<button class="back" data-go="progress" data-anchor="revision">‹ Progress</button><span class="spacer"></span>`
      : `<p class="brand">Hospes</p><span class="spacer"></span>${registry.catalogue.length > 1
          ? `<select class="coursepick" id="coursepick" aria-label="Language">${registry.catalogue.map(c => `<option value="${c.id}" ${c.id === course.id ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}</select>`
          : `<span class="coursepick">${esc(course.name)}</span>`}`;
    const body = ({ home: viewHome, lecture: viewLecture, cards: viewCards, ref: viewRef, progress: viewProgress, review: viewReview })[ui.view]();
    const tab = (id, label) => `<button class="tab" data-go="${id}" ${(ui.view === id || (id === 'home' && ui.view === 'lecture') || (id === 'progress' && ui.view === 'review')) ? 'aria-current="page"' : ''}>${ICONS[id]}${label}${id === 'cards' && due ? `<span class="badge">${due}</span>` : ''}</button>`;
    root().innerHTML = `
      <div class="app">
        <header class="top gutter">${header}</header>
        <main class="gutter">${body}</main>
      </div>
      <nav class="tabs" aria-label="Sections"><div class="tabs-inner">
        ${tab('home', 'Course')}${tab('cards', 'Cards')}${tab('ref', 'Reference')}${tab('progress', 'Progress')}
      </div></nav>`;
    after();
    savePlace(false);   // the scroll position is saved when the app goes into the background
  }

  // ----- home -----
  // Problems the person needs to know about: unreadable progress, failed saves, course files that did not load.
  function notices() {
    const out = [];
    if (damaged) out.push(`<div class="nudge" role="alert"><p><b>Your saved progress could not be read.</b> ${damaged.kept
        ? 'The damaged copy has been kept on this phone, and the app has started afresh. Restore your last backup under Progress → Backup.'
        : 'Nothing has been overwritten yet. Restore your last backup under Progress → Backup, or start afresh.'}</p>
      <div class="row"><button class="btn quiet" data-go="progress" data-anchor="backup">Restore a backup</button>${holdSaves ? '<button class="btn danger" data-startafresh>Start afresh</button>' : '<button class="btn quiet" data-dismissdamaged>OK</button>'}</div></div>`);
    if (newer) out.push(`<div class="nudge" role="alert"><p><b>This is an older copy of the app than the one that saved your progress.</b> Nothing new is saved until the app is up to date, so that nothing is lost.</p><button class="btn quiet" data-reloadfiles>Update the app</button></div>`);
    if (saveFailed) out.push(`<div class="nudge" role="alert"><p><b>This browser is not saving your progress.</b> It may be full or in private mode. Save a backup file before you close the app.</p><button class="btn quiet" data-go="progress" data-anchor="backup">Back up now</button></div>`);
    if (missing.length) out.push(`<div class="nudge" role="alert"><p><b>Some course files could not be loaded</b> (${esc(missing.join(', '))}). Those units are missing for now. Check the connection and open the app again.</p></div>`);
    return out.join('');
  }
  function backupDue() {
    const c = courseP(course.id);
    const hasProgress = Object.keys(c.cards).length || Object.keys(c.lectures).length;
    if (!hasProgress) return false;
    const cfg = syncCfg(), last = [P.lastExport, cfg && cfg.last].filter(Boolean).sort().pop();
    if (!last) return true;
    return (Date.now() - new Date(last).getTime()) / 86400000 >= P.settings.backupDays;
  }
  function nextStep() {
    const c = courseP(course.id);
    for (const l of lectures().filter(x => !x.special)) {
      const lp = c.lectures[l.id];
      for (const s of sectionsFor(l)) if (!(lp && lp.sections[s.id])) return { l, s };
    }
    return null;
  }
  function viewHome() {
    const c = courseP(course.id), ls = lectures();
    const step = nextStep();
    const due = dueCards('all').length, fresh = newCards('all').length;
    const learned = shownStates().filter(s => s.box >= 3).length;
    const item = l => {
      const lp = c.lectures[l.id], secs = sectionsFor(l);
      const done = lp ? secs.filter(s => lp.sections[s.id]).length : 0;
      const complete = done === secs.length;
      return `<button class="lect" data-lecture="${l.id}">
        <span class="num" style="${fitNum(lnum(l), 27, 56)}">${lnum(l)}</span>
        <span><span class="t la">${M(esc(l.title))}</span><br><span class="s">${esc(l.subtitle)}</span>
          <span class="dots" aria-label="${done} of ${secs.length} sections done">${secs.map(s => `<i class="${lp && lp.sections[s.id] ? 'on' : ''}"></i>`).join('')}</span></span>
        <span class="pill ${complete ? 'done' : ''}">${complete ? 'Done' : `${l.minutes} min`}</span>
      </button>`;
    };
    // The finished lectures at the head of the list fold into one line once there are three or more, so that the
    // list starts at the lecture in hand; one tap opens them, and they stay open until closed.
    const numbered = ls.filter(l => !l.special);
    const isDone = l => { const lp = c.lectures[l.id]; return !!lp && sectionsFor(l).every(s => lp.sections[s.id]); };
    let nDone = 0; while (nDone < numbered.length && isDone(numbered[nDone])) nDone++;
    const foldDone = nDone >= 3 && nDone < numbered.length;
    const items = foldDone
      ? `<details class="fold" data-fold="done" ${ui.fold.done ? 'open' : ''}><summary>${lnum(numbered[0])}–${lnum(numbered[nDone - 1])} · ${nDone} units done</summary>${numbered.slice(0, nDone).map(item).join('')}</details>${numbered.slice(nDone).map(item).join('')}`
      : numbered.map(item).join('');
    const specials = ls.filter(l => l.special).map(item).join('');
    const planned = (course.planned || []).map((t, i) => `<div class="lect planned"><span class="num" style="${fitNum(String(ls.filter(l => !l.special).length + i + 1), 27, 56)}">${ls.filter(l => !l.special).length + i + 1}</span><span><span class="t">${esc(t)}</span></span><span class="pill">Planned</span></div>`).join('');
    return `
      <section class="today panel">
        <p class="eyebrow">Today</p>
        ${step ? `<p class="today lead">${lnum(step.l)} · ${esc(step.s.label)}</p>
          <button class="btn wide" data-lecture="${step.l.id}" data-section="${step.s.id}">${c.lectures[step.l.id] && c.lectures[step.l.id].started ? 'Continue' : 'Start unit'}</button>
          ${ls.length > 1 ? `<label class="small muted" for="pickLecture">or choose a unit</label>
          <select class="field" id="pickLecture" style="width:100%"><option value="">${lnum(step.l)} · ${M(esc(step.l.title))} (current)</option>${ls.filter(l => l.id !== step.l.id).map(l => {
            const lp = c.lectures[l.id], secs = sectionsFor(l), done = lp ? secs.filter(x => lp.sections[x.id]).length : 0;
            return `<option value="${l.id}">${lnum(l)} · ${M(esc(l.title))}${done === secs.length ? ' · done' : done ? ` · ${done}/${secs.length}` : ''}</option>`; }).join('')}</select>` : ''}`
          : !ls.length ? `<p class="lead">The first unit of this course is in preparation.</p><p class="small muted">The planned units are listed below. The reference pages are already available.</p>`
          : `<p class="lead">All available units are done.</p>${ls.length ? `<label class="small muted" for="pickLecture">Choose a unit to revise</label><select class="field" id="pickLecture" style="width:100%"><option value="">Choose…</option>${ls.map(l => `<option value="${l.id}">${lnum(l)} · ${M(esc(l.title))}</option>`).join('')}</select>` : ''}`}
        <div class="stats3">
          <div class="stat"><b>${due}</b><span>cards due</span></div>
          <div class="stat"><b>${fresh}</b><span>new cards</span></div>
          <div class="stat"><b>${learned}</b><span>known well</span></div>
        </div>
        ${due + fresh ? `<button class="btn ghost wide" data-go="cards">Review cards</button>` : ''}
        ${finishedLectures().length || missedKeys(courseItems()).length ? `<button class="btn ghost wide" data-go="progress" data-anchor="revision">Revision: missed items and tests</button>` : ''}
      </section>
      ${notices()}
      ${backupDue() ? `<div class="nudge"><p>${P.lastExport ? `Your last backup is more than ${P.settings.backupDays} days old.` : 'You haven’t made a backup yet.'} Progress lives only in this browser.</p><button class="btn quiet" data-go="progress" data-anchor="backup">Back up now</button></div>` : ''}
      <section>
        <p class="eyebrow">${esc(course.native || course.name)}${!ls.length ? ' · units planned' : ` · ${ls.filter(l => { const lp = c.lectures[l.id]; return lp && sectionsFor(l).every(x => lp.sections[x.id]); }).length} of ${ls.length} ${ls.length === 1 ? 'unit' : 'units'} complete`}</p>
        <div class="lectures">${items}${planned}</div>
      </section>
      ${specials ? `<section><p class="eyebrow">Special units</p><div class="lectures">${specials}</div></section>` : ''}`;
  }

  // ----- lecture -----
  function viewLecture() {
    const l = findLecture(ui.lectureId), lp = lectureP(course.id, l.id);
    const secs = sectionsFor(l);
    const chips = secs.map(s => `<button class="chip ${lp.sections[s.id] ? 'done' : ''}" data-section="${s.id}" ${ui.section === s.id ? 'aria-current="true"' : ''}><span class="tick"></span>${s.label}</button>`).join('');
    let body = '';
    switch (ui.section) {
      case 'intro': body = `<div class="prose">${M(l.intro)}</div>${(l.background || []).length ? `<p class="eyebrow">Background</p>${blocks(l.background, 'b')}` : ''}${l.culture ? `<div class="panel prose">${M(l.culture)}</div>` : ''}${doneBtn()}`; break;
      case 'pron': body = `<div class="prose">${M(l.pronunciation)}</div>${doneBtn()}`; break;
      case 'grammar': body = (l.grammar.length > 3 ? `<nav class="jump" aria-label="Grammar topics">${l.grammar.map((g, i) => `<button data-jump="g-${i}">${M(esc(g.title))}</button>`).join('')}</nav>` : '') + blocks(l.grammar, 'g') + doneBtn(); break;
      case 'vocab': body = vocabList(l.vocab) + `<p class="small muted">These words are now in your flashcards.</p>` + doneBtn(); break;
      case 'phrases': body = viewPhrases(l); break;
      case 'dialogue': body = viewDialogue(l); break;
      case 'practice': body = exerciseRunner('practice', l); break;
      case 'reading': body = viewReading(l); break;
      case 'test': body = exerciseRunner('test', l); break;
    }
    // The full heading (numeral, title, summary) is shown on the introduction; every other section has it on one
    // line, to leave the screen to the text or the question.
    const compact = ui.section !== 'intro';
    return `
      ${compact ? `<p class="lmini"><span class="numeral">${lnum(l)}</span> <span class="la">${M(esc(l.title))}</span></p>`
        : `<div class="lhead"><span class="numeral" style="${fitNum(lnum(l), 54, 110)}">${lnum(l)}</span>
        <div><p class="eyebrow">${esc(course.lectureWord || 'Unit')}</p><h1 class="la">${M(esc(l.title))}</h1><p>${esc(l.subtitle)}</p></div></div>`}
      <nav class="chips" aria-label="Unit sections">${chips}</nav>
      <section class="stack" id="secbody">${body}</section>`;
  }
  function blocks(list, prefix) {
    return list.map((g, i) => `<div class="gblock prose" id="${prefix}-${i}"><h3 class="gt">${M(esc(g.title))}</h3>${M(g.html)}</div>`).join('');
  }
  function doneBtn(label) {
    const l = findLecture(ui.lectureId), secs = sectionsFor(l), i = secs.findIndex(s => s.id === ui.section);
    const next = secs[i + 1];
    return `<button class="btn wide" data-done="${ui.section}" data-next="${next ? next.id : ''}">${label || (next ? `Done · next: ${next.label}` : 'Done')}</button>`;
  }
  const GENDER = { m: 'masc.', f: 'fem.', n: 'neut.', mf: 'm./f.' };
  function vocabList(vocab) {
    return `<div class="vlist">${vocab.map(v => `
      <div class="vitem">
        <span class="vla"><span class="vhead">${M(esc(v.la))}</span>${v.g ? `<span class="g-tag g-${v.g}">${v.g === 'mf' ? 'm/f' : v.g}</span>` : ''}${speakBtn(v.say || v.head)}</span>
        <span class="vmeta">${esc(v.pos)}${v.g && GENDER[v.g] ? ` · ${GENDER[v.g]}` : ''}${v.pron ? ` · <span class="ipa">${esc(v.pron)}</span>` : ''}</span>
        <span class="ven">${v.de ? `${esc(v.en)} <span class="muted">· ${esc(v.de)}</span>` : esc(v.en)}</span>
        ${v.stress && v.stress !== '—' ? `<span class="vstress">${M(esc(v.stress))}</span>` : ''}
        ${v.deriv ? `<span class="vnote">Compare: ${esc(v.deriv)}</span>` : ''}
        ${v.note ? `<span class="vnote">${M(v.note)}</span>` : ''}
      </div>`).join('')}</div>`;
  }

  // ----- phrases -----
  // whole phrases to use as they are; the grammar behind them comes later
  function phraseRows(list, prefix) {
    return `<div class="plist">${list.map((x, i) => `
      <div class="pitem" id="${prefix}-${i}">
        <span class="pfr" lang="${course.langTag}">${esc(x.fr)}${speakBtn(x.fr)}</span>
        <span class="pen">${esc(x.en)}</span>
        ${x.lit ? `<span class="vnote">Literally: ${esc(x.lit)}</span>` : ''}
        ${x.note ? `<span class="vnote">${x.note}</span>` : ''}
      </div>`).join('')}</div>`;
  }
  function viewPhrases(l) {
    const groups = l.phraseGroups || [{ title: '', ids: l.phrases.map(x => x.id) }];
    let k = 0;
    const html = groups.map(g => {
      const list = g.ids.map(id => l.phrases.find(x => x.id === id)).filter(Boolean);
      const out = `${g.title ? `<p class="eyebrow">${esc(g.title)}</p>` : ''}${phraseRows(list, 'ph' + k)}`; k++; return out;
    }).join('');
    const all = []; k = 0;
    groups.forEach(g => { g.ids.map(id => l.phrases.find(x => x.id === id)).filter(Boolean).forEach((x, i) => all.push({ text: x.fr, el: `ph${k}-${i}` })); k++; });
    ui.playList = all;
    return `${l.phrasesIntro ? `<div class="prose">${l.phrasesIntro}</div>` : ''}
      ${canHear() ? `<div class="row"><button class="btn quiet" data-playall="phrases">${SPEAKER} Play all</button>${slowToggle()}</div>` : ''}
      ${html}<p class="small muted">The phrases are now in your flashcards (deck “Phrases”).</p>${doneBtn()}`;
  }
  const slowToggle = () => `<button class="btn quiet" data-slow aria-pressed="${P.settings.speechRate === 'slow'}">${P.settings.speechRate === 'slow' ? 'Slow: on' : 'Slow: off'}</button>`;

  // ----- dialogue -----
  function viewDialogue(l) {
    const d = l.dialogue, showEn = !!ui.showEn;
    ui.playList = d.lines.map((x, i) => ({ text: x.fr, el: 'dl-' + i }));
    return `
      <h2 class="section">${esc(d.title)}</h2>
      ${d.setting ? `<div class="prose small">${d.setting}</div>` : ''}
      ${canHear() ? `<div class="row"><button class="btn" data-playall="dialogue">${SPEAKER} Play dialogue</button>${slowToggle()}</div>` : ''}
      <div class="deckpick two" role="group" aria-label="Translation"><button class="seg" data-showen="0" aria-pressed="${!showEn}">French only</button><button class="seg" data-showen="1" aria-pressed="${showEn}">With English</button></div>
      <div class="dialogue" lang="${course.langTag}">${d.lines.map((x, i) => `
        <div class="dline ${x.who === d.you ? 'you' : ''}" id="dl-${i}">
          <span class="who">${esc(x.who)}</span>
          <span class="dfr">${esc(x.fr)}${speakBtn(x.fr)}</span>
          ${showEn ? `<span class="den" lang="en">${esc(x.en)}</span>` : ''}
        </div>`).join('')}</div>
      ${(d.notes || []).length ? `<details class="panel" data-keep="dnotes" ${ui.open.dnotes ? 'open' : ''}><summary>Notes on the dialogue</summary><dl class="notes">${d.notes.map(n => `<dt lang="${course.langTag}">${esc(n.ref)}</dt><dd class="prose">${n.html}</dd>`).join('')}</dl></details>` : ''}
      ${doneBtn()}`;
  }

  // ----- reading -----
  function viewReading(l) {
    const r = l.reading, lp = lectureP(course.id, l.id);
    const known = new Set();
    if (!ui.readView) ui.readView = r.startView || 'norm';
    const asWritten = r.diplomatic && ui.readView === 'dipl';
    const loose = k => spell(stripMacrons(k.toLowerCase()));
    const looseMap = {}; Object.keys(r.glosses).forEach(k => { const lk = loose(k); if (!(lk in looseMap)) looseMap[lk] = r.glosses[k]; });
    // editorial brackets inside a word (allme[c]htich, hl(ǣw)) and an editor's raised dot (u·nheánlice) belong to the word; letters include Latin Extended-B (ǣ ȳ ƿ) and ʒ
    // last resort for texts printed with an editor's own marks (acute accents, hooked ǫ ę): ignore all diacritics
    const bare = k => spell(k.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').normalize('NFC'));
    const bareMap = {}; Object.keys(r.glosses).forEach(k => { const bk = bare(k); if (!(bk in bareMap)) bareMap[bk] = r.glosses[k]; });
    const glossFor = w => { const k = w.replace(/[\[\]()·]/g, ''); return r.glosses[k.toLowerCase()] || looseMap[loose(k)] || bareMap[bare(k)]; };
    const parts = (asWritten ? r.diplomatic : r.text).split(/((?:[A-Za-zÀ-ɏʒ̀-ͯ]|\[[A-Za-zÀ-ɏʒ̀-ͯ]+\]|\([A-Za-zÀ-ɏʒ̀-ͯ]+\)|(?<=[A-Za-zÀ-ɏ])·(?=[A-Za-zÀ-ɏ]))+)/);
    let html = parts.map((p, i) => {
      if (i % 2 === 0) return esc(p);
      const g = glossFor(p);
      const isNew = g && /\(new word\)|next lecture/.test(g);
      return g ? `<span class="w ${isNew ? 'new' : ''} ${ui.gloss === i ? 'sel' : ''}" data-w="${i}" role="button" tabindex="0">${M(esc(p))}</span>` : M(esc(p));
    }).join('');
    // Verse (mostly short lines): one block per line, so that a line too long for the screen continues indented
    // instead of looking like a new line. Prose (mostly long lines, i.e. paragraphs) is left as it is.
    const srcLines = (asWritten ? r.diplomatic : r.text).split('\n'), filled = srcLines.filter(x => x.trim());
    const verse = filled.length > 1 && filled.filter(x => x.length > 120).length * 3 <= filled.length;
    if (verse) html = html.split('\n').map(x => x.trim() ? `<span class="ln">${x}</span>` : '<span class="ln gap"></span>').join('');
    const sel = ui.gloss != null ? parts[ui.gloss] : null;
    const qs = (r.questions || []).map(q => inlineMC(q)).join('');
    // The note on the source: short notes as they are; long ones folded to two lines, open on tap.
    const note = String(r.note || '').replace(/\s*Tap any word[^.]*\.?\s*$/i, '');
    const noteHtml = !note ? '' : note.length <= 130 ? `<p class="small muted" style="margin:0">${esc(note)}</p>`
      : `<details class="srcnote" data-keep="src" ${ui.open.src ? 'open' : ''}><summary><span class="pv">${esc(note)}</span></summary></details>`;
    return `
      <h2 class="section la">${M(esc(r.title))}</h2>
      ${noteHtml}
      <p class="small muted" style="margin:0">Tap any word for its meaning. Words underlined with dots are not yet in your vocabulary.</p>
      ${r.diplomatic ? `<div class="deckpick two" role="group" aria-label="Text form"><button class="seg" data-rview="norm" aria-pressed="${!asWritten}">Normalised</button><button class="seg" data-rview="dipl" aria-pressed="${!!asWritten}">${esc(r.diplomaticLabel || 'As written')}</button></div>
      <p class="small muted" style="margin:0">${asWritten ? esc(r.diplomaticNote || 'Spelling as a scribe might write it.') : 'Normalised dictionary spelling, with long vowels marked.'}</p>` : ''}
      <div class="reading${verse ? ' verse' : ''}" lang="${course.langTag}">${html}</div>
      ${sel ? `<div class="glossbox" aria-live="polite"><span class="la">${M(esc(sel))}</span> · ${M(esc(glossFor(sel) || ''))}</div>` : ''}
      ${(r.translations || [{ label: 'translation', text: r.translation }]).map((t, k) => `<details class="panel" data-keep="tr${k}" ${ui.open['tr' + k] ? 'open' : ''}><summary>Show ${esc(t.label)}</summary><p class="prose" style="margin-top:10px">${esc(t.text)}</p></details>`).join('')}
      ${(r.notes || []).length ? `<details class="panel" data-keep="notes" ${ui.open.notes ? 'open' : ''}><summary>Notes on the passage</summary><dl class="notes">${r.notes.map(n => `<dt class="la">${M(esc(n.ref))}</dt><dd class="prose">${M(n.html)}</dd>`).join('')}</dl></details>` : ''}
      ${qs ? `<p class="eyebrow">Comprehension</p><div class="stack">${qs}</div>` : ''}
      ${doneBtn()}`;
  }
  function inlineMC(q) {
    const st = ui.inline && ui.inline[q.id];
    return `<div class="panel stack"><p class="q">${M(q.prompt)}</p><div class="opts">${q.options.map((o, i) => {
      let cls = ''; if (st != null) { if (i === q.answer) cls = 'right'; else if (i === st) cls = 'wrong'; }
      return `<button class="opt ${cls}" data-inline="${q.id}" data-i="${i}" ${st != null ? 'disabled' : ''}>${M(esc(o))}</button>`;
    }).join('')}</div>${st != null ? `<p class="small muted">${M(esc(q.explain || ''))}</p>` : ''}</div>`;
  }

  // ----- exercise runner (practice + test) -----
  // n items drawn at random, with at least one translation and one ending or table question among them whenever the
  // pool has them, so that a test never consists of choices alone
  function mixedSample(pool, n) {
    const picked = [];
    for (const want of [i => i.type === 'translate', i => i.type === 'gap' || i.type === 'paradigm', i => i.type === 'listen']) {
      if (picked.length >= n) break;
      const c = shuffle(pool.filter(i => want(i) && !picked.includes(i)));
      if (c.length) picked.push(c[0]);
    }
    return picked.concat(sample(pool.filter(i => !picked.includes(i)), n - picked.length));
  }
  function buildTest(l) {
    const t = l.test, vq = t.vocabQuestions || 0;
    const written = mixedSample(t.items, Math.max(0, t.count - vq));
    const vocabPool = l.vocab.filter(v => v.pos.indexOf('verb') === 0 || v.pos.indexOf('noun') === 0);
    const kind = v => v.pos.split(',')[0];
    const vocab = sample(vocabPool, vq).map(v => {
      // Three wrong answers, all different from the right one and from each other: first words of the same kind
      // from this lecture, then from the rest of the course, then any word from this lecture.
      const answer = glossOf(v), wrong = [];
      const add = list => { for (const x of shuffle(list)) { if (wrong.length >= 3) break; const g = glossOf(x); if (g && g !== answer && !wrong.includes(g)) wrong.push(g); } };
      add(vocabPool.filter(x => x.id !== v.id && kind(x) === kind(v)));
      if (wrong.length < 3) add(lectures().filter(o => o.id !== l.id).flatMap(o => o.vocab || []).filter(x => kind(x) === kind(v)));
      if (wrong.length < 3) add(l.vocab.filter(x => x.id !== v.id));
      const opts = shuffle([answer, ...wrong]);
      return { id: 'tv-' + v.id, type: 'mc', prompt: `<span class="la">${esc(v.head)}</span> means:`, options: opts, answer: opts.indexOf(answer), explain: v.la + ': ' + (v.de ? v.de + ' · ' : '') + v.en };
    });
    return shuffle(written.concat(vocab));
  }
  function startRun(mode, l) {
    const items = mode === 'test' ? buildTest(l) : l.exercises.slice();
    ui.ex = { mode, lid: l.id, items, i: 0, score: 0, state: null, finished: false, perm: null };
  }
  function exerciseRunner(mode, l) {
    if (!ui.ex || ui.ex.mode !== mode || ui.ex.lid !== l.id) {
      const lp = lectureP(course.id, l.id);
      return `
        <div class="panel stack">
          ${mode === 'test'
            ? `<p class="prose" style="margin:0">${l.test.count} questions drawn from the whole unit. A score of 70% or more completes the unit.</p>${lp.testBest != null ? `<p class="small muted" style="margin:0">Best so far: ${lp.testBest}% (${lp.testRuns} attempt${lp.testRuns === 1 ? '' : 's'})</p>` : ''}`
            : `<p class="prose" style="margin:0">${l.exercises.length} exercises: choices, endings, tables, matching, word order and translation. Each is checked when you tap Check.</p>`}
          <button class="btn wide" data-start="${mode}">${mode === 'test' ? 'Start test' : 'Start exercises'}</button>
        </div>`;
    }
    const x = ui.ex;
    if (x.finished) {
      const pct = Math.round(100 * x.score / x.items.length);
      return `<div class="panel stack"><p class="eyebrow">${mode === 'test' ? 'Test result' : 'Exercises finished'}</p>
        <p class="today lead" style="margin:0">${x.score} / ${x.items.length} · ${pct}%</p>
        <p class="small muted" style="margin:0">${mode === 'test' ? (pct >= 70 ? 'Unit complete.' : 'Below 70%. Review the grammar and vocabulary, then try again.') : 'Items you missed are listed under Progress for review.'}</p>
        <div class="row"><button class="btn quiet" data-start="${mode}">Again</button>${doneBtn('Continue')}</div></div>`;
    }
    const item = x.items[x.i];
    return `
      <div class="exhead"><span>${mode === 'test' ? 'Test' : 'Exercise'} ${x.i + 1} of ${x.items.length}</span><span>${x.score} correct</span></div>
      <div class="bar"><i style="width:${100 * x.i / x.items.length}%"></i></div>
      ${renderItem(item, x.state)}`;
  }
  function kbd() {
    return course.keyboard && course.keyboard.length ? `<div class="kbd" aria-label="Special characters">${course.keyboard.map(k => `<button type="button" data-key="${k}">${k}</button>`).join('')}</div>` : '';
  }
  function feedbackHtml(st, item) {
    if (!st || !st.checked) return '';
    const parts = [];
    if (st.ok) parts.push(`<b>Correct.</b>`); else parts.push(`<b>Not quite.</b>`);
    if (st.macron) parts.push(`<span>With ${esc(markName())}: <span class="la">${esc(st.macronForm || '')}</span></span>`);
    if (item.model) parts.push(`<span>Model answer: <span class="${item.dir && intoLang(item.dir) === 'target' ? 'la' : ''}">${M(esc(item.model))}</span></span>`);
    if (item.full && !st.ok) parts.push(`<span>Answer: <span class="la">${M(esc(item.full))}</span></span>`);
    if (item.explain) parts.push(`<span class="small">${M(esc(item.explain))}</span>`);
    return `<div class="feedback ${st.ok ? 'ok' : 'no'}" role="status">${parts[0]}${parts.slice(1).join('<br>')}</div>`;
  }
  function nextBtns(st, item) {
    if (!st || !st.checked) return `<button class="btn wide" data-check>Check</button>`;
    const selfGrade = !st.ok && item.type === 'translate' && !st.overridden;
    return `<div class="row">${selfGrade ? `<button class="btn quiet" data-override>I was right</button>` : ''}<button class="btn" style="flex:1" data-next-item>Next</button></div>`;
  }
  function renderItem(item, st) {
    st = st || {};
    if (item.type !== 'listen' && item.type !== 'mc') return renderItemRest(item, st);
    switch (item.type) {
      case 'listen': {
        // dictation (type what you hear) or a choice of meanings; the text is played when the question appears
        const head = `<p class="eyebrow">${item.options ? 'Listen and choose' : 'Listen and write it down'}</p>
          <p class="q">${M(item.prompt || (item.options ? 'What did you hear?' : 'Write what you hear.'))}</p>
          <div class="row listenrow"><button type="button" class="btn" data-speak="${esc(audioKey(item.text))}">${SPEAKER} Play</button><button type="button" class="btn quiet" data-speak="${esc(audioKey(item.text))}" data-rate="slow">Slowly</button></div>`;
        if (item.options) return head + mcBlock(item, st);
        return head + `${st.checked ? '' : kbd()}<input class="field ${st.checked ? (st.ok ? 'right' : 'wrong') : ''}" id="ans" autocomplete="off" autocapitalize="sentences" autocorrect="off" spellcheck="false" enterkeyhint="done" placeholder="Type what you hear" value="${esc(st.value || '')}" ${st.checked ? 'readonly' : ''} lang="${course.langTag}">
          ${feedbackHtml(st, Object.assign({}, item, st.checked ? { full: item.text } : {}))}${nextBtns(st, item)}`;
      }
      case 'mc': return `<p class="q">${M(item.prompt)}</p>` + mcBlock(item, st);
    }
    return '';
  }
  function mcBlock(item, st) {
    const order = ui.ex.perm || (ui.ex.perm = shuffle(item.options.map((_, i) => i)));
    return `<div class="opts">${order.map(i => {
      let cls = ''; if (st.checked) { if (i === item.answer) cls = 'right'; else if (i === st.choice) cls = 'wrong'; }
      return `<button class="opt ${cls}" data-choice="${i}" ${st.checked ? 'disabled' : ''}>${M(esc(item.options[i]))}</button>`;
    }).join('')}</div>${feedbackHtml(st, item)}${st.checked ? nextBtns(st, item) : ''}`;
  }
  function renderItemRest(item, st) {
    switch (item.type) {
      case 'gap':
        return `<p class="q">${M(item.prompt)}<span class="hint">${esc(item.hint || '')}</span></p>
          ${st.checked ? '' : kbd()}<input class="field ${st.checked ? (st.ok ? 'right' : 'wrong') : ''}" id="ans" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" placeholder="${esc(item.placeholder || 'Type the missing word')}" value="${esc(st.value || '')}" ${st.checked ? 'readonly' : ''} lang="${course.langTag}">
          ${feedbackHtml(st, item)}${nextBtns(st, item)}`;
      case 'translate':
        { const into = intoLang(item.dir), src = fromTarget(item.dir);
        return `<p class="eyebrow">Translate into ${into === 'en' ? 'English' : into === 'de' ? 'German' : esc(course.name)}</p>
          <p class="q ${src ? 'la' : ''}">${M(esc(item.source))}${src ? speakBtn(item.source) : ''}</p>
          ${st.checked || into !== 'target' ? '' : kbd()}<textarea class="field ${st.checked ? (st.ok ? 'right' : 'wrong') : ''}" id="ans" autocomplete="off" autocapitalize="sentences" spellcheck="false" enterkeyhint="done" ${st.checked ? 'readonly' : ''} lang="${into === 'target' ? course.langTag : into}">${esc(st.value || '')}</textarea>
          ${feedbackHtml(st, item)}${nextBtns(st, item)}`; }
      case 'paradigm':
        { const nCells = item.rows.reduce((a, r) => a + r.answers.length, 0);
        return `<p class="q">${M(item.prompt)}</p>
          ${st.checked ? '' : kbd()}<div class="tablewrap"><table class="ptable"><thead><tr><th></th>${item.headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>
          ${item.rows.map((r, ri) => `<tr><th>${esc(r.label)}</th>${r.answers.map((a, ci) => {
            const k = ri + '-' + ci, cell = st.cells && st.cells[k];
            const last = ri === item.rows.length - 1 && ci === r.answers.length - 1;
            return `<td><input data-cell="${k}" class="${cell ? (cell.ok ? 'right' : 'wrong') : ''}" value="${esc((st.values && st.values[k]) || '')}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="${last || nCells === 1 ? 'done' : 'next'}" ${st.checked ? 'readonly' : ''} lang="${course.langTag}" aria-label="${esc(r.label)} ${esc(item.headers[ci])}">${cell && (!cell.ok || cell.macron) ? `<span class="sol">${M(esc(a.split('|').join(' / ')))}</span>` : ''}</td>`;
          }).join('')}</tr>`).join('')}</tbody></table></div>
          ${feedbackHtml(st, {})}${nextBtns(st, item)}`; }
      case 'match': {
        if (!st.right) { st.right = shuffle(item.pairs.map((_, i) => i)); st.left = shuffle(item.pairs.map((_, i) => i)); st.done = []; st.misses = 0; ui.ex.state = st; }
        return `<p class="q">${esc(item.prompt)}</p><div class="match">
          <div class="col">${st.left.map(i => `<button class="la ${st.done.includes(i) ? 'matched' : ''} ${st.sel === i ? 'sel' : ''}" data-ml="${i}" ${st.done.includes(i) ? 'disabled' : ''}>${M(esc(item.pairs[i][0]))}</button>`).join('')}</div>
          <div class="col">${st.right.map(i => `<button class="${st.done.includes(i) ? 'matched' : ''} ${st.miss === i ? 'miss' : ''}" data-mr="${i}" ${st.done.includes(i) ? 'disabled' : ''}>${esc(item.pairs[i][1])}</button>`).join('')}</div>
        </div>${st.checked ? feedbackHtml(st, {}) + nextBtns(st, item) : '<p class="small muted">Tap a form on the left, then its meaning.</p>'}`;
      }
      case 'order': {
        if (!st.bank) { st.bank = shuffle(item.tokens.map((_, i) => i)); st.line = []; ui.ex.state = st; }
        return `<p class="eyebrow">${esc(item.prompt)}</p><p class="q la">${M(esc(item.source))}</p>
          <div class="order-line" aria-label="Your answer">${st.line.map(i => `<button class="tok" data-ol="${i}" ${st.checked ? 'disabled' : ''}>${esc(item.tokens[i])}</button>`).join('')}</div>
          <div class="order-bank">${st.bank.filter(i => !st.line.includes(i)).map(i => `<button class="tok" data-ob="${i}">${esc(item.tokens[i])}</button>`).join('')}</div>
          ${feedbackHtml(st, Object.assign({}, item, st.checked && !st.ok ? { full: item.tokens.join(' ') } : {}))}${nextBtns(st, item)}`;
      }
    }
    return '';
  }
  function checkItem() {
    const x = ui.ex, item = x.items[x.i], st = x.state || (x.state = {});
    const val = () => ($('#ans') || {}).value || '';
    if (item.type === 'listen' && !item.options) {
      st.value = val(); if (!st.value.trim()) return;
      const r = checkTarget(st.value, item.accepted || [item.text]);
      Object.assign(st, r, { macronForm: r.macron ? item.text : null });
    } else if (item.type === 'gap') {
      st.value = val(); if (!st.value.trim()) return;
      const r = checkTarget(st.value, item.answers);
      Object.assign(st, r, { macronForm: r.macron ? item.full : null });
    } else if (item.type === 'translate') {
      st.value = val(); if (!st.value.trim()) return;
      const into = intoLang(item.dir);
      const r = into === 'en' ? checkEnglish(st.value, item.accepted) : into === 'de' ? checkGerman(st.value, item.accepted) : checkTarget(st.value, item.accepted, { orderFree: true });
      Object.assign(st, r, { macronForm: r.macron ? item.model : null });
    } else if (item.type === 'paradigm') {
      st.values = {}; st.cells = {}; let all = true, anyMac = false;
      document.querySelectorAll('[data-cell]').forEach(inp => {
        const k = inp.dataset.cell, [ri, ci] = k.split('-').map(Number);
        st.values[k] = inp.value;
        const r = checkTarget(inp.value, item.rows[ri].answers[ci].split('|'));
        st.cells[k] = r; if (!r.ok) all = false; if (r.macron) anyMac = true;
      });
      st.ok = all; st.macron = false; if (anyMac && all) st.note = true;
    } else if (item.type === 'order') {
      if (st.line.length !== item.tokens.length) { toast('Use all the pieces first.'); return; }
      st.ok = st.line.every((v, i) => v === i);
    } else return;
    st.checked = true;
    if (st.ok) x.score++;
    recordResult(lectureQualified(item), st.ok);
    ui.reveal = true; render();
  }
  const lectureQualified = item => (item.lid || ui.ex.lid) + ':' + item.id;
  function nextItem() {
    const x = ui.ex; x.i++; x.state = null; x.perm = null;
    if (x.i >= x.items.length) {
      x.finished = true;
      if (x.lid) {   // a lecture's exercises or test (revision sessions have no lecture of their own)
        const lp = lectureP(course.id, x.lid);
        if (x.mode === 'test') {
          const pct = Math.round(100 * x.score / x.items.length);
          lp.testRuns++; lp.testBest = Math.max(lp.testBest || 0, pct);
          if (pct >= 70) lp.sections.test = true;
        } else lp.sections.practice = true;
      }
      save();
    }
    render(); window.scrollTo(0, 0); playListenItem(); focusAnswer();
  }
  // a listening question plays its text as soon as it appears (inside the tap on Next or Start, as iOS requires)
  function playListenItem() { const x = ui.ex; if (x && !x.finished && x.items[x.i] && x.items[x.i].type === 'listen' && canHear()) speak(x.items[x.i].text); }
  // A question that is answered by typing has its box ready (on a phone the keyboard opens), so that no extra tap is needed.
  function focusAnswer() { const f = $('#ans'); if (f && !f.readOnly) f.focus({ preventScroll: true }); }

  // ----- revision: missed items, and revision tests across the finished lectures -----
  const inRevision = () => ui.view === 'review' && ui.ex && !ui.ex.lid;
  const REVIEW_MAX = 15, REVISION_COUNT = 12, REVISION_MISSED = 4;
  // every exercise, test item and reading question of the course, under the key used for misses, with its lecture
  function courseItems() {
    const out = {};
    for (const l of lectures()) {
      for (const i of l.exercises.concat(l.test.items)) out[l.id + ':' + i.id] = Object.assign({}, i, { lid: l.id });
      for (const i of (l.reading && l.reading.questions) || []) out[l.id + ':' + i.id] = Object.assign({}, i, { lid: l.id, rq: true });
    }
    return out;
  }
  function missedKeys(all) { const m = courseP(course.id).misses; return Object.keys(m).filter(k => m[k] > 0 && all[k]).sort((a, b) => m[b] - m[a]); }
  function finishedLectures() { const c = courseP(course.id); return lectures().filter(l => c.lectures[l.id] && c.lectures[l.id].sections.test); }
  function startReview(mode) {
    const all = courseItems();
    let items;
    if (mode === 'missed') items = missedKeys(all).slice(0, REVIEW_MAX).map(k => all[k]);
    else {
      // a mixed test from the lectures whose test has been passed (reading questions need the text, so they stay out):
      // a few of the most-missed items first, then at least one translation and one ending or table, the rest at random
      const done = new Set(finishedLectures().map(l => l.id));
      const pool = Object.values(all).filter(i => done.has(i.lid) && !i.rq);
      const missed = sample(missedKeys(all).map(k => all[k]).filter(i => done.has(i.lid) && !i.rq).slice(0, 2 * REVISION_MISSED), REVISION_MISSED);
      items = shuffle(missed.concat(mixedSample(pool.filter(i => !missed.includes(i)), REVISION_COUNT - missed.length)));
    }
    if (!items.length) return;
    ui.view = 'review'; ui.ex = { mode, lid: null, items, i: 0, score: 0, state: null, finished: false, perm: null };
    render(); window.scrollTo(0, 0); playListenItem();
  }
  function revisionPanel() {
    const all = courseItems(), nMissed = missedKeys(all).length, nDone = finishedLectures().length;
    return `<div class="panel stack" id="revision"><p class="eyebrow">Revision</p>
      <p class="small" style="margin:0">Practise the exercises you got wrong: each one leaves the list when you get it right. Or take a mixed test of ${REVISION_COUNT} questions from the units whose test you have passed, with some of your missed items among them.</p>
      <div class="row"><button class="btn" data-review="missed" ${nMissed ? '' : 'disabled'}>Missed items (${nMissed})</button><button class="btn quiet" data-review="revision" ${nDone ? '' : 'disabled'}>Revision test</button></div>
      ${nDone ? '' : '<p class="small muted" style="margin:0">The revision test opens once you have passed a unit test.</p>'}</div>`;
  }
  function viewReview() {
    const x = ui.ex;
    if (!x || x.lid || !x.items) return `<h2 class="section">Revision</h2>${revisionPanel()}`;
    const name = x.mode === 'missed' ? 'Missed items' : 'Revision test';
    if (x.finished) {
      const pct = Math.round(100 * x.score / x.items.length), left = missedKeys(courseItems()).length;
      return `<h2 class="section">${name}</h2><div class="panel stack"><p class="eyebrow">Result</p>
        <p class="today lead" style="margin:0">${x.score} / ${x.items.length} · ${pct}%</p>
        <p class="small muted" style="margin:0">${x.mode === 'missed'
          ? `${x.score ? 'The items you got right are off the list. ' : ''}${left ? `${left} still to practise.` : 'Nothing left to practise.'}`
          : 'Items you got wrong join the list of missed items; missed items you got right leave it.'}</p>
        <div class="row">${x.mode === 'missed' ? (left ? '<button class="btn quiet" data-review="missed">Practise again</button>' : '') : '<button class="btn quiet" data-review="revision">New revision test</button>'}<button class="btn" style="flex:1" data-go="progress" data-anchor="revision">Done</button></div></div>`;
    }
    const item = x.items[x.i], l = findLecture(item.lid);
    return `
      <div class="exhead"><span>${name} · ${x.i + 1} of ${x.items.length}</span><span>${x.score} correct</span></div>
      <div class="bar"><i style="width:${100 * x.i / x.items.length}%"></i></div>
      ${l ? `<p class="small muted from">${esc(course.lectureWord || 'Unit')} ${lnum(l)} · <span class="la">${M(esc(l.title))}</span></p>` : ''}
      ${renderItem(item, x.state)}`;
  }

  // ----- flashcards view -----
  function viewCards() {
    const s = ui.cards;
    if (s && s.queue.length) {
      const card = s.queue[0];
      const front = card.latinFront ? M(esc(card.front)) : M(esc(card.front));
      const back = M(esc(card.back));
      return `
        <div class="exhead"><span>${s.done} reviewed · ${s.queue.length} left</span><span class="acts">${s.last ? '<button class="back" data-undocard>Undo</button>' : ''}<button class="back" data-endcards>End</button></span></div>
        <button class="card" data-flip>
          <span class="meta">${card.deck === 'grammar' ? 'Grammar' : (card.deck === 'phrases' ? 'Phrase · ' : '') + (card.dir === 'la-en' ? esc(course.name) + ' → ' + otherLang() : otherLang() + ' → ' + esc(course.name))}${card.meta ? ' · ' + esc(card.meta) : ''}</span>
          <span class="front ${card.deck === 'grammar' || !card.latinFront ? 'small' : ''} ${card.latinFront ? 'la' : ''}">${front}</span>
          ${s.flipped ? `<span class="answer ${card.dir === 'en-la' ? 'la' : ''}">${back}</span>` : '<span class="tapnote">Tap to show the answer</span>'}
        </button>
        ${card.say && (card.latinFront || s.flipped) ? `<div class="row cardaudio">${speakBtn(card.say, 'Listen')}</div>` : ''}
        ${s.flipped ? `<div class="grade">
            <button class="btn danger" data-grade="again">Again<small>see it today</small></button>
            <button class="btn quiet" data-grade="good">Good<small>${INTERVALS[Math.min(7, ((cardState(card.id) || { box: 0 }).box) + 1)]}d</small></button>
            <button class="btn" data-grade="easy">Easy<small>${INTERVALS[Math.min(7, ((cardState(card.id) || { box: 0 }).box) + 2)]}d</small></button>
          </div>` : ''}`;
    }
    const deck = (s && s.deck) || 'all';
    const counts = d => ({ due: dueCards(d).length, fresh: newCards(d).length });
    const c = counts(deck);
    const total = unlockedCards().filter(dirAllowed).length;
    return `
      <h2 class="section">Flashcards</h2>
      ${s && s.done ? `<div class="feedback ok"><b>Session done.</b>${s.done} ${s.done === 1 ? 'card' : 'cards'} reviewed.${s.last ? ' <button class="back" data-undocard>Undo the last card</button>' : ''}</div>` : ''}
      <div class="deckpick four" role="group" aria-label="Deck">
        ${[['all', 'All'], ['vocab', 'Words'], ['phrases', 'Phrases'], ['grammar', 'Grammar']].map(([k, lab]) => `<button class="seg" data-deck="${k}" aria-pressed="${deck === k}">${lab}</button>`).join('')}
      </div>
      <div class="panel stack">
        <div class="stats3">
          <div class="stat"><b>${c.due}</b><span>due now</span></div>
          <div class="stat"><b>${c.fresh}</b><span>new today</span></div>
          <div class="stat"><b>${total}</b><span>cards unlocked</span></div>
        </div>
        <button class="btn wide" data-startcards ${c.due + c.fresh ? '' : 'disabled'}>${c.due + c.fresh ? 'Start review' : 'Nothing due'}</button>
        ${total ? '' : '<p class="small muted" style="margin:0">Cards unlock when you start a unit.</p>'}
      </div>
      <div class="panel">
        <div class="setting"><label for="cardDir">Direction for words and phrases<small>For ${esc(course.name)}. Grammar cards always show the question first.</small></label>
          <select class="field" id="cardDir">${[['both', 'Both'], ['la-en', `${esc(course.name)} → ${otherLang()}`], ['en-la', `${otherLang()} → ${esc(course.name)}`]].map(([v, lab]) => `<option value="${v}" ${cardDir() === v ? 'selected' : ''}>${lab}</option>`).join('')}</select></div>
        <div class="setting"><label for="newPerDay">New cards per day<small>For each course.</small></label>
          <select class="field" id="newPerDay">${[5, 10, 15, 20, 30, 50].map(n => `<option ${P.settings.newPerDay === n ? 'selected' : ''}>${n}</option>`).join('')}</select></div>
        ${canHear() ? `<div class="setting"><label for="sAuto">Play the French automatically<small>When a card shows French, and when it turns to French.</small></label><input type="checkbox" class="switch" id="sAuto" ${P.settings.autoplay ? 'checked' : ''}></div>` : ''}
      </div>
      <p class="small muted">Spacing: a card you know moves up a box and returns after 1, 2, 4, 8, 16, 32 then 64 days; “Easy” jumps two boxes, so words you already know leave the daily queue within a few sessions. “Again” sends a card back to the start.</p>`;
  }
  function startCards(deck) {
    const q = shuffle(dueCards(deck)).concat(shuffle(newCards(deck)));
    ui.cards = { deck, queue: q, done: 0, flipped: false, again: new Set() };
  }

  // ----- reference -----
  const coursePages = () => registry.pages.filter(p => p.courses === '*' || p.courses.includes(course.id));
  function viewRef() {
    const pages = [{ id: 'phrasebook', title: 'Phrasebook' }, { id: 'glossary', title: 'Glossary' }, { id: 'tables', title: 'Tables' }].concat(coursePages());
    if (!pages.find(p => p.id === ui.refPage)) ui.refPage = 'phrasebook';
    const nav = `<nav class="chips refnav" aria-label="Reference pages">${pages.map(p => `<button class="chip" data-refpage="${p.id}" ${ui.refPage === p.id ? 'aria-current="true"' : ''}>${esc(p.title)}</button>`).join('')}</nav>`;
    const page = pages.find(p => p.id === ui.refPage);
    if (page.id === 'phrasebook') return nav + viewPhrasebook();
    if (page.kind === 'notes') return nav + `<h2 class="section">${esc(page.title)}</h2><div class="prose">${page.html}</div>`;
    return nav + viewGlossary(ui.refPage === 'tables');
  }
  function glossHits() {
    const q = spell(stripMacrons(ui.ref.toLowerCase().trim()));
    const all = lectures().flatMap(l => l.vocab.map(v => Object.assign({ lnum: l.number }, v)));
    const hits = q ? all.filter(v => spell(stripMacrons((v.la + ' ' + v.en + ' ' + (v.de || '')).toLowerCase())).includes(q)) : all;
    return hits.sort((a, b) => stripMacrons(a.head.replace(/^-/, '')).localeCompare(stripMacrons(b.head.replace(/^-/, ''))));
  }
  const hitCount = n => `Glossary · ${n} ${n === 1 ? 'entry' : 'entries'}`;
  // While typing in the search box only the list is rebuilt, once typing pauses, so the box itself is never replaced.
  let searchTimer = null;
  function showHits() { const c = $('#refcount'), h = $('#refhits'); if (!c || !h) return; const hits = glossHits(); c.textContent = hitCount(hits.length); h.innerHTML = vocabList(hits); }
  function viewGlossary(tablesOnly) {
    const hits = tablesOnly ? [] : glossHits();
    const tables = lectures().flatMap(l => (l.reference || []).map(t => `
      <div class="gblock"><h3 class="gt">${M(esc(t.title))} <span class="small muted">· ${lnum(l)}</span></h3>
      <div class="tablewrap"><table><thead><tr>${t.headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>
      <tbody>${t.rows.map(r => `<tr><th>${esc(r[0])}</th>${r.slice(1).map(c => `<td class="la">${M(esc(c))}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`)).join('');
    if (tablesOnly) return `<section>${tables || '<p class="muted">No tables yet.</p>'}</section>`;
    return `
      <div class="search"><input class="field" id="refsearch" type="search" placeholder="Search ${esc(course.name)}, English${course.reverseFrom === 'de' ? ' or German' : ''}" value="${esc(ui.ref)}" autocomplete="off" autocapitalize="off" spellcheck="false"></div>
      <section><p class="eyebrow" id="refcount">${hitCount(hits.length)}</p><div id="refhits">${vocabList(hits)}</div></section>`;
  }

  // ----- phrasebook: every phrase of every unit, searchable, for use on the spot (works offline) -----
  const phraseNorm = x => stripMacrons(String(x).toLowerCase()).replace(/[’']/g, "'");
  function phraseHits() {
    const q = phraseNorm(ui.pref || '').trim();
    return lectures().map(l => ({ l, list: (l.phrases || []).filter(x => !q || phraseNorm(x.fr + ' ' + x.en + ' ' + (x.note || '')).includes(q)) })).filter(g => g.list.length);
  }
  function phrasebookHtml() {
    const groups = phraseHits(), n = groups.reduce((a, g) => a + g.list.length, 0);
    return `<p class="eyebrow" id="phcount">Phrasebook · ${n} ${n === 1 ? 'phrase' : 'phrases'}</p>` + (n ? groups.map((g, k) => `<p class="small muted phgroup">${lnum(g.l)} · ${esc(g.l.title)}</p>${phraseRows(g.list, 'pb' + k)}`).join('')
      : `<p class="muted">${lectures().some(l => (l.phrases || []).length) ? 'No phrase matches.' : 'Phrases appear here as units are added.'}</p>`);
  }
  let phTimer = null;
  function viewPhrasebook() {
    return `<div class="search"><input class="field" id="phsearch" type="search" placeholder="Search ${esc(course.name)} or English" value="${esc(ui.pref || '')}" autocomplete="off" autocapitalize="off" spellcheck="false"></div>
      <section id="phhits">${phrasebookHtml()}</section>`;
  }

  // ----- progress & settings -----
  function viewProgress() {
    const c = courseP(course.id);
    const boxes = Array(8).fill(0); shownStates().forEach(s => boxes[s.box]++);
    const max = Math.max(1, ...boxes);
    const allCards = Object.fromEntries(lectures().flatMap(cardsForLecture).map(k => [k.id, k]));
    const weakCards = Object.entries(c.cards).filter(([id, s]) => s.lapses > 0 && allCards[id] && dirAllowed(allCards[id])).sort((a, b) => b[1].lapses - a[1].lapses).slice(0, 8);
    const allItems = Object.fromEntries(lectures().flatMap(l => l.exercises.concat(l.test.items, (l.reading && l.reading.questions) || []).map(i => [l.id + ':' + i.id, i])));
    const weakItems = Object.entries(c.misses).filter(([k, n]) => n > 0 && allItems[k]).sort((a, b) => b[1] - a[1]).slice(0, 6);
    const lrows = lectures().map(l => { const lp = c.lectures[l.id]; return `<dt>${lnum(l)} · <span class="la">${M(esc(l.title))}</span></dt><dd>${lp && lp.testBest != null ? lp.testBest + '%' : '–'}</dd>`; }).join('');
    const itemLabel = i => i.source || i.prompt.replace(/<[^>]+>/g, '');
    const backupText = ui.showBackup ? JSON.stringify(exportObj()) : '';
    const nOverrides = Object.values(P.courses).reduce((a, x) => a + Object.keys(x.overrides || {}).length, 0);
    const errs = errorLog(), prev = previousProgress();
    return `
      <h2 class="section">Progress</h2>
      <div class="panel stack">
        <p class="eyebrow">Flashcards by box</p>
        <div class="boxes" role="img" aria-label="Number of cards in each box">${boxes.map((n, i) => `<div><span>${n}</span><i style="height:${Math.round(60 * n / max)}%"></i><span>${i === 0 ? 'new' : i}</span></div>`).join('')}</div>
        <p class="small muted" style="margin:0">Box 3 and above counts as well known.</p>
      </div>
      ${revisionPanel()}
      ${lectures().length > 10
        ? `<details class="panel" data-fold="tests" ${ui.fold.tests ? 'open' : ''}><summary>Unit tests · ${finishedLectures().length} of ${lectures().length} passed</summary><dl class="kv" style="margin-top:12px">${lrows}</dl></details>`
        : `<div class="panel"><p class="eyebrow">Unit tests · best score</p><dl class="kv">${lrows}</dl></div>`}
      ${weakCards.length || weakItems.length ? `<div class="panel stack"><p class="eyebrow">Needs work</p>
        ${weakCards.map(([id, s]) => allCards[id] ? `<div class="wk"><span class="${allCards[id].latinFront ? 'la' : ''}">${M(esc(allCards[id].front))}</span><span class="small muted">${s.lapses}× again</span></div>` : '').join('')}
        ${weakItems.map(([k, n]) => `<div class="wk"><span class="small">${M(esc(itemLabel(allItems[k])))}</span><span class="small muted">${n}× missed</span></div>`).join('')}
      </div>` : ''}

      <div class="panel stack" id="backup">
        <p class="eyebrow">Backup</p>
        <p class="small" style="margin:0">Your progress is stored in this app on this phone. Deleting the app or clearing website data deletes it, so keep a backup: automatically on GitHub, or as a file in Files or iCloud Drive.</p>
        <p class="small muted" style="margin:0">Last backup: ${P.lastExport ? new Date(P.lastExport).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'never'}${nOverrides ? ` · The backup also holds the ${nOverrides} ${nOverrides === 1 ? 'answer' : 'answers'} you marked “I was right”, so that they can be added to the accepted answers.` : ''}</p>
        ${syncPanel()}
        <div class="row"><button class="btn" data-export>Save backup file</button><button class="btn quiet" data-copybackup>Copy backup text</button></div>
        ${ui.showBackup ? `<textarea class="field small" id="backuptext" readonly>${esc(backupText)}</textarea>` : ''}
        <details id="restore" ${ui.confirmImport || ui.restoreOpen ? 'open' : ''}><summary class="small">Restore from a backup</summary>
          <div class="stack" style="margin-top:10px">
            <label class="small" for="importfile">Choose a backup file</label>
            <input type="file" id="importfile" accept=".json,application/json,text/plain">
            <label class="small" for="importtext">or paste backup text</label>
            <textarea class="field small" id="importtext" placeholder='{"app":"hospes", …}'></textarea>
            <button class="btn quiet" data-importtext>Read pasted text</button>
            ${ui.confirmImport ? `<div class="feedback no" id="confirmimport"><b>Replace current progress?</b>The backup is from ${esc(new Date(ui.confirmImport.exportedAt).toLocaleString('en-GB'))}. Everything stored now will be overwritten.<div class="row" style="margin-top:8px"><button class="btn danger" data-doimport>Replace</button><button class="btn quiet" data-cancelimport>Cancel</button></div></div>` : ''}
          </div></details>
        ${prev ? `<p class="small" id="previous" style="margin:0">Your progress as it was before the last ${esc(prev.why)} (${esc(new Date(prev.t).toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }))}) is still on this phone. <button class="back" data-undoprogress>Put it back</button></p>` : ''}
      </div>

      ${audioPanel()}
      <div class="panel">
        <p class="eyebrow">Settings</p>
        ${course.lengthMark === 'accents' ? '' : `<div class="setting"><label for="sMac">Show ${esc(markName())}<small>Long-vowel marks: ${esc(course.lengthMarkExample || 'ā ē ī ō ū')}</small></label><input type="checkbox" class="switch" id="sMac" ${P.settings.macronsShown ? 'checked' : ''}></div>`}
        <div class="setting"><label for="sStrict">Require ${esc(markName())} in answers<small>Off: a missing ${course.lengthMark === 'accents' ? 'accent' : 'mark'} still counts as right, with a reminder.</small></label><input type="checkbox" class="switch" id="sStrict" ${P.settings.strictMacrons ? 'checked' : ''} ${P.settings.macronsShown ? '' : 'disabled'}></div>
        <div class="setting"><label for="sText">Text size<small>Applies to the whole app.</small></label><select class="field" id="sText">${[['s', 'Small'], ['m', 'Medium'], ['l', 'Large'], ['xl', 'Extra large']].map(([k, n]) => `<option value="${k}" ${P.settings.textSize === k ? 'selected' : ''}>${n}</option>`).join('')}</select></div>
        <div class="setting"><label for="sBackup">Backup reminder</label><select class="field" id="sBackup">${[3, 7, 14, 30].map(n => `<option value="${n}" ${P.settings.backupDays === n ? 'selected' : ''}>every ${n} days</option>`).join('')}</select></div>
        <div class="setting"><label>App version ${BUILD}<small>Updates install by themselves when you are online. Use this if a change has not arrived.</small></label><button class="btn quiet" data-update>Check for updates</button></div>
        <div class="setting"><label>Reload app files<small>Discards the stored copy of the app and downloads it again. Your progress is kept.</small></label><button class="btn quiet" data-hardreload>${ui.confirmHard ? 'Tap again to reload' : 'Reload'}</button></div>
        <div class="setting"><label>Reset ${esc(course.name)} progress<small>Cannot be undone; save a backup first.</small></label><button class="btn danger" data-reset>${ui.confirmReset ? 'Tap again to reset' : 'Reset'}</button></div>
      </div>
      ${errs.length ? `<details class="panel" id="problems" data-fold="errors" ${ui.fold.errors ? 'open' : ''}><summary>Problems recorded (${errs.length})</summary>
        <div class="stack" style="margin-top:10px"><p class="small" style="margin:0">If something did not work, copy this text when you report it. It contains no personal data.</p>
        <textarea class="field small" id="errtext" readonly rows="6">${esc(errorText(errs))}</textarea>
        <div class="row"><button class="btn quiet" data-copyerrors>Copy</button><button class="btn quiet" data-clearerrors>Clear</button></div></div></details>` : ''}
      <p class="small muted">Hospes · version ${BUILD} · progress format ${FORMAT}</p>`;
  }
  // the voice, its speed, and a test sentence; and how to get better voices on the phone
  function audioPanel() {
    if (!course.tts) return '';
    const vs = courseVoices(), cur = pickVoice(), chosen = P.settings.voice[course.id];
    const label = v => `${v.name} (${v.lang.replace('_', '-')})${/premium/i.test(v.voiceURI + v.name) ? ' · premium' : /enhanced/i.test(v.voiceURI + v.name) ? ' · enhanced' : ''}`;
    const nFiles = Object.keys(registry.audio[course.id] || {}).length;
    return `<div class="panel" id="audio">
      <p class="eyebrow">Audio</p>
      <div class="setting"><label for="sVoice">Voice<small>${vs.length ? `${vs.length} ${esc(course.name)} ${vs.length === 1 ? 'voice' : 'voices'} on this phone.` : `No ${esc(course.name)} voice found on this device.`}</small></label>
        <select class="field" id="sVoice"><option value="">Best available${!chosen && cur ? ` (${esc(cur.name)})` : ''}</option>${vs.map(v => `<option value="${esc(v.voiceURI)}" ${chosen === v.voiceURI ? 'selected' : ''}>${esc(label(v))}</option>`).join('')}</select></div>
      <div class="setting"><label for="sRate">Speed</label><select class="field" id="sRate"><option value="normal" ${P.settings.speechRate === 'normal' ? 'selected' : ''}>Normal</option><option value="slow" ${P.settings.speechRate === 'slow' ? 'selected' : ''}>Slow</option></select></div>
      <div class="setting"><label>Try it</label>${speakBtn(course.sample || course.native, 'Play a sentence')}</div>
      <p class="small muted" style="margin:8px 0 0">Better voices: iPhone Settings → Accessibility → Spoken Content → Voices → ${esc(course.name)}, and download a voice marked Enhanced or Premium (for France, not Canada). It then appears in the list above.${nFiles ? ` ${nFiles} recorded audio files are used where available; the voice reads the rest.` : ''}</p>
    </div>`;
  }
  const errorText = list => list.map(e => `${e.t} · version ${e.build}${e.n ? ' · ' + e.n + '×' : ''} · ${e.where || ''} · ${e.at || ''}\n${e.msg}`).join('\n\n');
  function exportObj() { return { app: 'hospes', format: FORMAT, exportedAt: new Date().toISOString(), progress: P }; }
  async function doExport() {
    const text = JSON.stringify(exportObj(), null, 1);
    const name = `hospes-backup-${new Date().toISOString().slice(0, 10)}.json`;
    try {
      const file = new File([text], name, { type: 'application/json' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: 'Hospes backup' });
        P.lastExport = new Date().toISOString(); save(); render(); toast('Backup saved.'); return;
      }
    } catch (e) { if (e && e.name === 'AbortError') return; }
    try {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([text], { type: 'application/json' })); a.download = name;
      document.body.appendChild(a); a.click(); a.remove();
      P.lastExport = new Date().toISOString(); save(); render();
      toast('If no file appeared, use Copy backup text.');
    } catch (e) { toast('Saving a file is blocked here. Use Copy backup text.'); }
  }
  async function copyBackup() {
    const text = JSON.stringify(exportObj());
    try { await navigator.clipboard.writeText(text); P.lastExport = new Date().toISOString(); save(); ui.showBackup = false; render(); toast('Backup copied. Paste it into Notes or a file.'); }
    catch (e) { ui.showBackup = true; render(); const t = $('#backuptext'); if (t) { t.focus(); t.select(); } toast('Select the text below and copy it.'); }
  }
  function readImport(text) {
    try {
      const o = JSON.parse(text);
      if (!isObj(o) || o.app !== 'hospes' || !isObj(o.progress)) throw new Error();
      if (o.format > FORMAT || o.progress.format > FORMAT) { toast('This backup comes from a newer version of the app. Update the app first (Settings → Check for updates).'); return; }
      ui.confirmImport = o; render();
      const el = $('#confirmimport'); if (el) el.scrollIntoView({ block: 'center' });
    } catch (e) { toast('That is not a Hospes backup.'); }
  }

  // Buttons that need a second tap: the label changes for four seconds, then goes back.
  function armConfirm(flag, btn, armed, idle) {
    ui[flag] = true; btn.textContent = armed;
    setTimeout(() => { ui[flag] = false; if (document.contains(btn)) btn.textContent = idle; }, 4000);
  }
  // Discard the stored copy of the app and download it again. Only when the server can be reached: offline, the stored
  // copy is the only one there is. Pictures already seen (the media cache) and the progress are kept.
  async function reloadFiles() {
    try { const r = await fetch('sw.js', { cache: 'no-store' }); if (!r.ok) throw new Error(); }
    catch (e) { toast('The server cannot be reached, so nothing was changed. Try again when you are online.'); return; }
    try {
      if (window.caches) { const ks = await caches.keys(); await Promise.all(ks.filter(k => !/-media$/.test(k)).map(k => caches.delete(k))); }
      if (navigator.serviceWorker) { const rs = await navigator.serviceWorker.getRegistrations(); await Promise.all(rs.map(r => r.unregister())); }
    } catch (e) { /* reload anyway */ }
    location.reload();
  }

  // ---------- automatic backup to a private GitHub Gist ----------
  // The token and the gist id stay on this phone (hospes.sync), never in a backup file. The progress is uploaded a
  // little after each change while online, and when the app goes into the background. An empty progress is never
  // uploaded, so a fresh install cannot overwrite the backup before it has been restored.
  const SYNC_KEY = 'hospes.sync', GIST_FILE = 'hospes-progress.json', SYNC_DELAY = 20000;
  let syncTimer = null, syncBusy = false;
  function syncCfg() { try { const o = JSON.parse(localStorage.getItem(SYNC_KEY) || 'null'); return isObj(o) && typeof o.token === 'string' ? o : null; } catch (e) { return null; } }
  function saveSyncCfg(o) { try { if (o) localStorage.setItem(SYNC_KEY, JSON.stringify(o)); else localStorage.removeItem(SYNC_KEY); } catch (e) {} }
  const hashText = t => { let h = 5381; for (let i = 0; i < t.length; i++) h = ((h << 5) + h + t.charCodeAt(i)) | 0; return String(h >>> 0); };
  const progressEmpty = () => !Object.values(P.courses).some(c => Object.keys(c.cards || {}).length || Object.keys(c.lectures || {}).length);
  async function gh(cfg, method, url, body) {
    const r = await fetch('https://api.github.com' + url, { method, cache: 'no-store',
      headers: Object.assign({ Authorization: 'Bearer ' + cfg.token, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }, body ? { 'Content-Type': 'application/json' } : {}),
      body: body ? JSON.stringify(body) : undefined });
    if (!r.ok) { const e = new Error('GitHub answered ' + r.status); e.status = r.status; throw e; }
    return r.status === 204 ? null : r.json();
  }
  const syncError = e => e && (e.status === 401 || e.status === 403) ? 'GitHub refused the token (expired, or without the Gists permission).'
    : e && e.status === 404 ? 'The backup gist was not found (deleted?). Use Disconnect, then connect again.'
    : 'No connection to GitHub.';
  // upload now; manual = the person tapped "Back up now" (then also when nothing changed, and errors are shown)
  async function syncUp(manual) {
    const cfg = syncCfg(); if (!cfg || syncBusy) return;
    if ((progressEmpty() || cfg.hold) && !manual) return;   // hold: a backup on GitHub awaits a decision
    if (!manual && navigator.onLine === false) return;
    const text = JSON.stringify(exportObj(), null, 1), h = hashText(JSON.stringify(P));
    if (!manual && cfg.lastHash === h) return;
    syncBusy = true;
    try {
      if (cfg.gistId) await gh(cfg, 'PATCH', '/gists/' + cfg.gistId, { files: { [GIST_FILE]: { content: text } } });
      else { const g = await gh(cfg, 'POST', '/gists', { description: 'Hospes progress (automatic backup from the app)', public: false, files: { [GIST_FILE]: { content: text } } }); cfg.gistId = g.id; }
      Object.assign(cfg, { last: new Date().toISOString(), lastHash: h, error: null, hold: false }); saveSyncCfg(cfg);
      if (manual) toast('Backed up to GitHub.');
    } catch (e) {
      cfg.error = syncError(e); cfg.errorAt = new Date().toISOString(); saveSyncCfg(cfg);
      if (manual) toast(cfg.error);
    } finally { syncBusy = false; if (ui.view === 'progress') { const y = window.scrollY; render(); window.scrollTo(0, y); } }
  }
  function scheduleSync() { if (!syncCfg()) return; clearTimeout(syncTimer); syncTimer = setTimeout(() => syncUp(false), SYNC_DELAY); }
  // Connect: check the token and look for an existing backup gist (a new phone, or the app installed again)
  async function syncConnect(token) {
    token = String(token || '').trim(); if (!token) { toast('Paste the token first.'); return; }
    const cfg = { token };
    toast('Connecting…');
    try {
      let found = null;
      for (let page = 1; page <= 5 && !found; page++) {
        const list = await gh(cfg, 'GET', `/gists?per_page=100&page=${page}`);
        found = list.find(g => g.files && g.files[GIST_FILE]);
        if (list.length < 100) break;
      }
      if (found) cfg.gistId = found.id;
      saveSyncCfg(cfg); ui.syncToken = '';
      if (found && progressEmpty()) { toast('Connected. A backup was found on GitHub.'); await syncDown(); return; }
      if (found) {
        // progress on this phone and a backup on GitHub: nothing is overwritten until the person chooses
        cfg.hold = true; saveSyncCfg(cfg); render();
        toast('Connected. A backup already exists on GitHub: restore it, or tap Back up now to replace it.'); return;
      }
      toast('Connected. The first backup is being made.');
      render(); syncUp(true);
    } catch (e) { toast(syncError(e)); }
  }
  // fetch the backup from GitHub and offer to restore it (the same confirmation as a backup file)
  async function syncDown() {
    const cfg = syncCfg(); if (!cfg || !cfg.gistId) { toast('There is no backup on GitHub yet.'); return; }
    try {
      const g = await gh(cfg, 'GET', '/gists/' + cfg.gistId), f = g.files && g.files[GIST_FILE];
      if (!f) throw Object.assign(new Error('no file'), { status: 404 });
      let text = f.content;
      if (f.truncated && f.raw_url) { const r = await fetch(f.raw_url, { cache: 'no-store' }); text = await r.text(); }
      ui.view = 'progress'; ui.restoreOpen = true; render(); readImport(text);
    } catch (e) { toast(syncError(e)); }
  }
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && syncCfg()) { clearTimeout(syncTimer); syncUp(false); } });
  window.addEventListener('online', () => scheduleSync());
  function syncPanel() {
    const cfg = syncCfg();
    const when = t => new Date(t).toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
    if (!cfg) return `<details class="sub" id="syncsetup" ${ui.syncOpen ? 'open' : ''}><summary class="small"><b>Automatic backup to GitHub</b> · not set up</summary>
      <div class="stack" style="margin-top:10px">
        <p class="small" style="margin:0">Backs up your progress to a private gist on your GitHub account whenever you are online. It needs a token that can do nothing but read and write gists:</p>
        <ol class="small steps"><li>On github.com: Settings → Developer settings → Personal access tokens → <b>Fine-grained tokens</b> → Generate new token.</li>
          <li>Name it “Hospes”, expiry as long as you like (up to a year; the app tells you when it stops working). Repository access: <b>Public repositories</b> (read-only, i.e. none of yours).</li>
          <li>Under <b>Account permissions</b>, set <b>Gists</b> to <b>Read and write</b>. Nothing else.</li>
          <li>Generate, copy the token, paste it here.</li></ol>
        <input class="field" id="synctoken" type="password" placeholder="github_pat_…" autocomplete="off" autocapitalize="off" spellcheck="false" value="${esc(ui.syncToken || '')}">
        <button class="btn" data-syncconnect>Connect</button>
        <p class="small muted" style="margin:0">The token is kept on this phone only. It is not part of backup files.</p>
      </div></details>`;
    return `<div class="sub stack" id="syncsetup"><p class="small" style="margin:0"><b>Automatic backup to GitHub</b> · on</p>
      <p class="small muted" style="margin:0">${cfg.last ? `Last backed up ${esc(when(cfg.last))}.` : 'Not backed up yet.'}${cfg.error && (!cfg.last || cfg.errorAt > cfg.last) ? ` <span class="warn">Last attempt failed (${esc(when(cfg.errorAt))}): ${esc(cfg.error)}</span>` : ''}</p>
      ${cfg.hold ? '<p class="small warn" style="margin:0">Paused: there is a backup on GitHub from before. Restore it, or tap Back up now to replace it with the progress on this phone.</p>' : ''}
      <div class="row"><button class="btn quiet" data-syncnow>Back up now</button><button class="btn quiet" data-syncdown>Restore from GitHub</button><button class="btn quiet" data-syncoff>${ui.confirmSyncOff ? 'Tap again' : 'Disconnect'}</button></div></div>`;
  }

  // ---------- updates ----------
  // index.html calls this when a new version of the app has taken over. On the course page the app reloads at once;
  // anywhere else it offers to, so that an exercise, a test or a typed answer is not lost, and reloads when the
  // person next returns to the course page.
  let updatePending = false;
  window.Hospes.updateReady = () => {
    if (ui.view === 'home' && !ui.confirmImport) { location.reload(); return; }
    updatePending = true;
    if ($('.updatebar')) return;
    const b = document.createElement('div'); b.className = 'updatebar'; b.setAttribute('role', 'status');
    b.innerHTML = '<span>A new version of the app is ready.</span><button class="btn quiet" data-reloadnow>Reload now</button>';
    document.body.appendChild(b);
  };

  // ---------- events ----------
  // The Course tab leads back to the lecture that is open, at the place where it was left, when coming from another
  // tab; from the lecture itself (or with the ‹ button) it leads to the list of lectures. The reference page also
  // keeps its place.
  function go(view) {
    stopAudio();
    if (ui.view === 'lecture' || ui.view === 'ref') ui.scroll[ui.view] = window.scrollY;
    if (view === 'home') {
      if (ui.view !== 'lecture' && ui.view !== 'home' && ui.lectureOpen && findLecture(ui.lectureId)) view = 'lecture';
      else ui.lectureOpen = false;
    }
    if (updatePending && view === 'home') { ui.view = 'home'; savePlace(); location.reload(); return; }
    const same = ui.view === view;
    ui.view = view; ui.gloss = null; render(); window.scrollTo(0, !same && (view === 'lecture' || view === 'ref') ? ui.scroll[view] || 0 : 0);
  }
  function openLecture(id, section) {
    stopAudio();
    // exercises or a test left unfinished in this lecture are still there when it is opened again
    if (!(ui.ex && ui.ex.lid === id && !ui.ex.finished)) ui.ex = null;
    ui.view = 'lecture'; ui.lectureId = id; ui.section = section || 'intro'; ui.lectureOpen = true; ui.gloss = null; ui.inline = {}; ui.readView = null; ui.open = {};
    const lp = lectureP(course.id, id); if (!lp.started) { lp.started = true; touchStreak(); save(); }
    P.courses[course.id].current = id; save();
    render(); window.scrollTo(0, 0);
  }

  function after() {
    const cp = $('#coursepick'); if (cp) cp.onchange = () => { switchCourse(cp.value); };
    // Choose a lecture: open it at its first unfinished section (or the introduction if all are done)
    const pl = $('#pickLecture'); if (pl) pl.onchange = () => { const l = findLecture(pl.value); if (!l) return; const lp = courseP(course.id).lectures[l.id]; const s = sectionsFor(l).find(x => !(lp && lp.sections[x.id])); openLecture(l.id, s ? s.id : 'intro'); };
    const rs = $('#refsearch');
    if (rs) rs.oninput = () => { ui.ref = rs.value; clearTimeout(searchTimer); searchTimer = setTimeout(showHits, 150); };
    const bind = (id, fn) => { const el = $('#' + id); if (el) el.onchange = () => { fn(el); save(); render(); }; };
    bind('cardDir', el => { courseP(course.id).cardDir = el.value; });
    bind('newPerDay', el => P.settings.newPerDay = Number(el.value));
    bind('sMac', el => { P.settings.macronsShown = el.checked; });
    bind('sStrict', el => { P.settings.strictMacrons = el.checked; });
    bind('sText', el => { P.settings.textSize = el.value; });
    bind('sBackup', el => { P.settings.backupDays = Number(el.value); });
    bind('sAuto', el => { P.settings.autoplay = el.checked; });
    bind('sRate', el => { P.settings.speechRate = el.value; });
    bind('sVoice', el => { if (el.value) P.settings.voice[course.id] = el.value; else delete P.settings.voice[course.id]; });
    const ph = $('#phsearch');
    if (ph) ph.oninput = () => { ui.pref = ph.value; clearTimeout(phTimer); phTimer = setTimeout(() => { const h = $('#phhits'); if (h) h.innerHTML = phrasebookHtml(); }, 150); };
    const rd = $('#restore'); if (rd) rd.ontoggle = () => { ui.restoreOpen = rd.open; };
    const f = $('#importfile');
    if (f) f.onchange = () => { const file = f.files[0]; if (!file) return; const r = new FileReader(); r.onload = () => readImport(r.result); r.readAsText(file); };
    // Return checks the answer (translations are one sentence, so no line breaks are needed); in a table it moves on to the next box
    const ans = $('#ans'); if (ans && !ans.readOnly && (ui.view === 'lecture' || ui.view === 'review')) ans.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); checkItem(); } });
    const cells = [...document.querySelectorAll('[data-cell]')];
    cells.forEach((c, i) => { if (!c.readOnly) c.addEventListener('keydown', e => { if (e.key !== 'Enter' || e.isComposing) return; e.preventDefault(); if (cells[i + 1]) cells[i + 1].focus(); else checkItem(); }); });
    // after an answer is checked, bring the feedback and the Next button into view (above the tab bar)
    if (ui.reveal) { ui.reveal = false; const nb = $('[data-next-item]'), tabs = $('.tabs');
      if (nb && tabs) { const limit = tabs.getBoundingClientRect().top - 12, b = nb.getBoundingClientRect().bottom;
        if (b > limit) window.scrollBy({ top: b - limit, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); } }
    // the row of sections scrolls sideways: bring the one in use into view
    document.querySelectorAll('.chips').forEach(nav => { const cur = nav.querySelector('[aria-current="true"]'); if (cur) nav.scrollLeft += cur.getBoundingClientRect().left - nav.getBoundingClientRect().left - (nav.clientWidth - cur.offsetWidth) / 2; });
    // header height, for the sticky search bar and for jumping to a grammar section
    const top = $('.top'); if (top) document.documentElement.style.setProperty('--top-h', top.offsetHeight + 'px');
    markWide();
  }

  // Pictures: if one image size fails to load, try the next listed in data-fallbacks; if all fail, say so.
  document.addEventListener('error', e => {
    const img = e.target;
    if (!(img instanceof HTMLImageElement) || !img.classList.contains('fig-img')) return;
    const rest = (img.dataset.fallbacks || '').split('|').filter(Boolean);
    if (rest.length) { img.dataset.fallbacks = rest.slice(1).join('|'); img.src = rest[0]; return; }
    const note = document.createElement('p'); note.className = 'fig-missing';
    note.textContent = navigator.onLine === false ? 'Picture not available offline. It appears once you have viewed it online.' : 'The picture could not be loaded. Use the link below to see it on Wikimedia Commons.';
    img.replaceWith(note);
  }, true);

  // Tables wider than the screen scroll sideways; a fade at the right edge shows that there is more, until the end is reached.
  function markWide(root = document) {
    root.querySelectorAll('.tablewrap').forEach(w => {
      const set = () => w.classList.toggle('more', w.scrollWidth - w.clientWidth - w.scrollLeft > 2);
      set(); if (!w.dataset.wide) { w.dataset.wide = '1'; w.addEventListener('scroll', set, { passive: true }); }
    });
  }
  window.addEventListener('resize', () => markWide());
  // Folding panels (translation, notes, the note on the source) stay open when the page is redrawn, e.g. after tapping a word.
  document.addEventListener('toggle', e => { const d = e.target; if (d.dataset && d.dataset.keep) ui.open[d.dataset.keep] = d.open; if (d.dataset && d.dataset.fold) ui.fold[d.dataset.fold] = d.open; if (d.open) markWide(d); }, true);
  // A touch listener makes Safari show the pressed state of buttons (:active); it also tells the place restore that the person has scrolled.
  let touched = false;
  document.addEventListener('touchstart', () => { touched = true; }, { passive: true });

  // ---------- keeping the place ----------
  // iOS may restart a home-screen app that has been in the background for a while. The current place (course, page,
  // lecture section, scroll position, an exercise or test in progress) is kept on this phone only, outside the progress
  // and the backups, and restored if the app starts again within PLACE_HOURS. After that it opens on the course page.
  const PLACE_KEY = 'hospes.place', PLACE_HOURS = 4;
  function savePlace(keepScroll = true) {
    if (!course) return;
    const inLecture = ui.view === 'lecture' || ui.lectureOpen;
    const pl = { t: Date.now(), course: course.id, view: ui.view, lectureId: ui.lectureId, section: ui.section, readView: ui.readView, refPage: ui.refPage,
      ref: ui.ref, open: ui.open, inline: ui.inline, scroll: keepScroll === true ? Math.round(window.scrollY) : 0,
      lectureOpen: inLecture, lectureScroll: ui.view === 'lecture' ? 0 : ui.scroll.lecture || 0,
      ex: (inLecture && ui.ex && ui.ex.lid === ui.lectureId) || (ui.view === 'review' && ui.ex && !ui.ex.lid) ? ui.ex : null };
    try { localStorage.setItem(PLACE_KEY, JSON.stringify(pl)); } catch (e) {}
  }
  function restorePlace() {
    let pl = null; try { pl = JSON.parse(localStorage.getItem(PLACE_KEY) || 'null'); } catch (e) {}
    if (!pl || !(Date.now() - pl.t < PLACE_HOURS * 3600000) || pl.course !== course.id) return null;
    const setLecture = () => {
      const l = findLecture(pl.lectureId); if (!l || !sectionsFor(l).some(s => s.id === pl.section)) return false;
      ui.lectureId = l.id; ui.section = pl.section; ui.readView = pl.readView || null; ui.inline = pl.inline || {}; ui.lectureOpen = true;
      ui.ex = pl.ex && pl.ex.lid === l.id && Array.isArray(pl.ex.items) && pl.ex.items.length ? pl.ex : null;
      return true;
    };
    if (pl.view === 'lecture') { if (!setLecture()) return null; }
    else if (pl.view === 'review') {
      // a revision session in progress, if all its items still exist; otherwise the Progress page
      const ok = pl.ex && !pl.ex.lid && Array.isArray(pl.ex.items) && pl.ex.items.length && pl.ex.items.every(i => findLecture(i.lid));
      if (ok) ui.ex = pl.ex; else pl.view = 'progress';
    } else if (!['home', 'cards', 'ref', 'progress'].includes(pl.view)) return null;
    // a lecture left open behind another tab (not behind a revision session, which has exercises of its own)
    if (pl.view !== 'lecture' && pl.view !== 'review' && pl.view !== 'home' && pl.lectureOpen && setLecture()) ui.scroll.lecture = pl.lectureScroll || 0;
    ui.view = pl.view; ui.refPage = pl.refPage || 'phrasebook'; ui.ref = pl.ref || ''; ui.open = pl.open || {};
    return pl.scroll || 0;
  }
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') savePlace(); });
  window.addEventListener('pagehide', () => savePlace());

  document.addEventListener('input', e => {
    const t = e.target, x = ui.ex;
    if (!x || x.finished || !(t.id === 'ans' || (t.dataset && t.dataset.cell)) || !(ui.view === 'lecture' || ui.view === 'review')) return;
    const st = x.state || (x.state = {}); if (st.checked) return;
    if (t.id === 'ans') st.value = t.value; else (st.values = st.values || {})[t.dataset.cell] = t.value;
  });
  let lastField = null;
  document.addEventListener('focusin', e => { if (e.target.matches('input[type=text], input:not([type]), textarea')) lastField = e.target; });
  // keep the keyboard open when tapping the special-character buttons
  document.addEventListener('pointerdown', e => { if (e.target.closest('[data-key]')) e.preventDefault(); });

  document.addEventListener('click', e => {
    const t = e.target.closest('button, [data-w], [data-place]'); if (!t) return;
    const d = t.dataset;
    if (d.key) { const fld = lastField && document.contains(lastField) ? lastField : $('#ans') || $('[data-cell]'); if (fld && !fld.readOnly) { const s = fld.selectionStart ?? fld.value.length, en = fld.selectionEnd ?? s; fld.value = fld.value.slice(0, s) + d.key + fld.value.slice(en); fld.focus(); fld.setSelectionRange(s + 1, s + 1); fld.dispatchEvent(new Event('input', { bubbles: true })); } return; }
    if (d.refpage) { ui.refPage = d.refpage; render(); window.scrollTo(0, 0); return; }
    if (d.jump) { const el = document.getElementById(d.jump); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    if (d.go) { go(d.go); if (d.anchor) setTimeout(() => { const el = $('#' + d.anchor); if (el) el.scrollIntoView(); }, 0); return; }
    if (d.lecture) { openLecture(d.lecture, d.section); return; }
    if (d.section && ui.view === 'lecture' && t.classList.contains('chip')) { stopAudio(); ui.section = d.section; ui.gloss = null; ui.open = {}; render(); window.scrollTo(0, 0); return; }
    if (d.done !== undefined && d.done !== '') {
      const lp = lectureP(course.id, ui.lectureId); lp.sections[d.done] = true; touchStreak(); save();
      if (d.next) { ui.section = d.next; ui.gloss = null; ui.open = {}; render(); window.scrollTo(0, 0); } else go('home');   // from the lecture, so to the list
      return;
    }
    if (d.start) { startRun(d.start, findLecture(ui.lectureId)); render(); playListenItem(); focusAnswer(); return; }
    if (d.review) { startReview(d.review); return; }
    if (d.speak) { speak(d.speak, { rate: d.rate }); return; }
    if (d.playall !== undefined && d.playall !== '') {
      if (seq) { stopAudio(); t.classList.remove('on'); return; }
      t.classList.add('on'); speakAll(ui.playList || []); return;
    }
    if (t.hasAttribute('data-slow')) { P.settings.speechRate = P.settings.speechRate === 'slow' ? 'normal' : 'slow'; save(); const y = window.scrollY; render(); window.scrollTo(0, y); return; }
    if (d.showen !== undefined) { ui.showEn = d.showen === '1'; const y = window.scrollY; render(); window.scrollTo(0, y); return; }
    if (d.rview) { ui.readView = d.rview; ui.gloss = null; const y = window.scrollY; render(); window.scrollTo(0, y); return; }
    if (d.w !== undefined) { ui.gloss = ui.gloss === Number(d.w) ? null : Number(d.w); const y = window.scrollY; render(); window.scrollTo(0, y); return; }
    if (d.inline) { ui.inline = ui.inline || {}; ui.inline[d.inline] = Number(d.i); const l = findLecture(ui.lectureId); const q = l.reading.questions.find(q => q.id === d.inline); recordResult(l.id + ':' + q.id, Number(d.i) === q.answer); const y = window.scrollY; render(); window.scrollTo(0, y); return; }

    // exercise interactions
    if (ui.ex && (ui.view === 'lecture' || ui.view === 'review')) {
      const x = ui.ex, item = x.items[x.i];
      if (d.choice !== undefined && !(x.state && x.state.checked)) {
        const ok = Number(d.choice) === item.answer;
        x.state = { checked: true, ok, choice: Number(d.choice) }; if (ok) x.score++;
        recordResult(lectureQualified(item), ok); ui.reveal = true; render(); return;
      }
      if (t.hasAttribute('data-check')) { checkItem(); return; }
      if (t.hasAttribute('data-next-item')) { nextItem(); return; }
      if (t.hasAttribute('data-override')) {
        x.state.ok = true; x.state.overridden = true; x.score++;
        const cp = courseP(course.id), m = cp.misses, k = lectureQualified(item), typed = String(x.state.value || '').trim();
        if (inRevision() || m[k] <= 1) delete m[k]; else if (m[k]) m[k]--;
        // the answer typed is kept (the last three per item, 300 items at most) and travels with the backup
        if (typed) {
          const o = cp.overrides = cp.overrides || {}, a = o[k] = (o[k] || []).filter(v => v !== typed);
          a.push(typed); if (a.length > 3) a.shift();
          const keys = Object.keys(o); if (keys.length > 300) delete o[keys[0]];
        }
        save(); render(); return;
      }
      if (d.ml !== undefined) { x.state.sel = Number(d.ml); x.state.miss = null; render(); return; }
      if (d.mr !== undefined && x.state.sel != null) {
        const st = x.state, r = Number(d.mr);
        if (r === st.sel) { st.done.push(r); st.sel = null; st.miss = null; } else { st.misses++; st.miss = r; }
        if (st.done.length === item.pairs.length) { st.checked = true; st.ok = st.misses === 0; if (st.ok) x.score++; recordResult(lectureQualified(item), st.ok); ui.reveal = true; }
        render(); return;
      }
      if (d.ob !== undefined) { x.state.line.push(Number(d.ob)); render(); return; }
      if (d.ol !== undefined) { x.state.line = x.state.line.filter(i => i !== Number(d.ol)); render(); return; }
    }

    // flashcards
    if (d.deck) { ui.cards = { deck: d.deck, queue: [], done: 0 }; render(); return; }
    if (t.hasAttribute('data-startcards')) { startCards((ui.cards && ui.cards.deck) || 'all'); render(); autoSpeakCard(); return; }
    if (t.hasAttribute('data-flip')) { const was = ui.cards.flipped; ui.cards.flipped = true; render(); if (!was && !ui.cards.queue[0].latinFront) autoSpeakCard(); return; }
    if (d.grade) {
      const s = ui.cards, card = s.queue.shift(), cp = courseP(course.id);
      // what is needed to take the grade back (a tap on the wrong button on a moving train)
      s.last = { card, state: cp.cards[card.id] ? Object.assign({}, cp.cards[card.id]) : null, newToday: Object.assign({}, cp.newToday), requeued: false };
      gradeCard(card, d.grade);
      if (d.grade === 'again' && !s.again.has(card.id)) { s.again.add(card.id); s.queue.push(card); s.last.requeued = true; }
      s.done++; s.flipped = false; render(); autoSpeakCard(); return;
    }
    if (t.hasAttribute('data-undocard') && ui.cards && ui.cards.last) {
      const s = ui.cards, u = s.last, cp = courseP(course.id);
      if (u.state) cp.cards[u.card.id] = u.state; else delete cp.cards[u.card.id];
      cp.newToday = u.newToday;
      if (u.requeued) { s.again.delete(u.card.id); const i = s.queue.lastIndexOf(u.card); if (i >= 0) s.queue.splice(i, 1); }
      s.queue.unshift(u.card); s.done--; s.flipped = true; s.last = null; save(); render(); return;
    }
    if (t.hasAttribute('data-endcards')) { ui.cards.queue = []; ui.cards.last = null; render(); return; }

    // notices
    if (t.hasAttribute('data-reloadnow')) { location.reload(); return; }
    if (t.hasAttribute('data-dismissdamaged')) { damaged = null; render(); return; }
    if (t.hasAttribute('data-startafresh')) { damaged = null; holdSaves = false; save(); render(); toast('Started afresh.'); return; }
    if (t.hasAttribute('data-reloadfiles')) { reloadFiles(); return; }
    if (t.hasAttribute('data-clearerrors')) { try { localStorage.removeItem(ERR_KEY); } catch (e) {} render(); return; }
    if (t.hasAttribute('data-copyerrors')) {
      const box = $('#errtext');
      navigator.clipboard.writeText(errorText(errorLog())).then(() => toast('Copied.'), () => { if (box) { box.focus(); box.select(); } toast('Select the text and copy it.'); });
      return;
    }

    // updates
    if (t.hasAttribute('data-update')) {
      if (!('serviceWorker' in navigator)) { toast('Updates are not available here.'); return; }
      navigator.serviceWorker.getRegistration().then(r => {
        if (!r) { toast('Updates work in the installed app only.'); return; }
        toast('Checking…');
        r.update().then(() => setTimeout(() => toast(r.installing || r.waiting ? 'New version found. It will be ready in a moment.' : 'You have the latest version.'), 1500))
          .catch(() => toast('Could not reach the server. Are you online?'));
      });
      return;
    }
    if (t.hasAttribute('data-hardreload')) {
      if (!ui.confirmHard) { armConfirm('confirmHard', t, 'Tap again to reload', 'Reload'); return; }
      ui.confirmHard = false; reloadFiles(); return;
    }
    // backup
    if (t.hasAttribute('data-export')) { doExport(); return; }
    if (t.hasAttribute('data-syncconnect')) { syncConnect(($('#synctoken') || {}).value); return; }
    if (t.hasAttribute('data-syncnow')) { syncUp(true); return; }
    if (t.hasAttribute('data-syncdown')) { syncDown(); return; }
    if (t.hasAttribute('data-syncoff')) {
      if (!ui.confirmSyncOff) { armConfirm('confirmSyncOff', t, 'Tap again', 'Disconnect'); return; }
      ui.confirmSyncOff = false; saveSyncCfg(null); render(); toast('Disconnected. The gist on GitHub is kept.'); return;
    }
    if (t.hasAttribute('data-copybackup')) { copyBackup(); return; }
    if (t.hasAttribute('data-importtext')) { readImport(($('#importtext') || {}).value || ''); return; }
    if (t.hasAttribute('data-cancelimport')) { ui.confirmImport = null; ui.restoreOpen = false; render(); return; }
    if (t.hasAttribute('data-doimport')) {
      keepPrevious('restore');
      P = migrate(ui.confirmImport.progress); ui.confirmImport = null; ui.restoreOpen = false;
      { const cfg = syncCfg(); if (cfg && cfg.hold) { cfg.hold = false; saveSyncCfg(cfg); } }
      damaged = null; holdSaves = false; newer = false; save();
      switchCourse(P.activeCourse || course.id).then(() => toast('Progress restored.')); return;
    }
    if (t.hasAttribute('data-reset')) {
      if (!ui.confirmReset) { armConfirm('confirmReset', t, 'Tap again to reset', 'Reset'); return; }
      keepPrevious('reset of ' + course.name);
      delete P.courses[course.id]; ui.confirmReset = false; ui.lectureOpen = false; ui.ex = null; ui.cards = null; save(); render(); toast(course.name + ' progress reset.'); return;
    }
    if (t.hasAttribute('data-undoprogress')) {
      const prev = previousProgress(); if (!prev) return;
      const now = P; P = migrate(prev.progress);
      try { localStorage.setItem(UNDO_KEY, JSON.stringify({ t: new Date().toISOString(), why: 'step back', progress: now })); } catch (e) {}
      damaged = null; holdSaves = false; newer = false; save();
      switchCourse(P.activeCourse || course.id).then(() => toast('Earlier progress put back.')); return;
    }
  });
  document.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[data-w], [data-place]')) { e.preventDefault(); e.target.dispatchEvent(new MouseEvent('click', { bubbles: true })); } });

  function setCourse(id) {
    course = registry.catalogue.find(c => c.id === id) || registry.catalogue[0];
    P.activeCourse = course.id; ui.view = 'home'; ui.ex = null; ui.cards = null; ui.ref = ''; ui.readView = null; ui.refPage = 'phrasebook'; ui.pref = ''; ui.lectureOpen = false; ui.scroll = {}; save();
  }
  // Each course's lecture files are loaded once; the current course first, the others in the background.
  const courseLoads = {};
  const loadCourse = c => courseLoads[c.id] = courseLoads[c.id] || loadScripts(c.lectures.map(f => CONTENT_BASE + f));
  async function switchCourse(id) {
    const c = registry.catalogue.find(x => x.id === id) || registry.catalogue[0];
    if (updatePending) { P.activeCourse = c.id; save(); ui.view = 'home'; course = c; savePlace(false); location.reload(); return; }
    await loadCourse(c);
    setCourse(c.id); render(); window.scrollTo(0, 0);
  }

  // ---------- boot ----------
  async function boot() {
    load();
    try {
      await loadScript(CONTENT_BASE + 'catalogue.js');
    } catch (e) {
      root().innerHTML = `<div class="gutter" style="padding-block:40px"><p><b>Course files could not be loaded.</b></p><p class="small">${esc(e.message)}. Check the connection, or that the content folder sits next to index.html.</p></div>`;
      return;
    }
    const first = registry.catalogue.find(c => c.id === P.activeCourse) || registry.catalogue[0];
    await Promise.all([loadCourse(first), loadScripts(registry.shared.map(f => CONTENT_BASE + f))]);
    setCourse(first.id);
    // back to where the person was, if the app was restarted within a few hours (not when there is a problem to report)
    const y = damaged || missing.length ? null : restorePlace();
    render();
    if (y) {
      window.scrollTo(0, y);
      // pictures above the place may still be loading and push the text down: scroll again once they are in, unless the person has moved
      const imgs = [...document.querySelectorAll('main img')].filter(i => !i.complete);
      if (imgs.length) Promise.race([Promise.all(imgs.map(i => new Promise(r => { i.addEventListener('load', r); i.addEventListener('error', r); }))), new Promise(r => setTimeout(r, 2000))])
        .then(() => { if (!touched) window.scrollTo(0, y); });
    }
    setTimeout(() => registry.catalogue.forEach(loadCourse), 1500);   // the other courses, a moment after the first screen, so that switching is instant
  }
  window.Hospes._buildTest = id => buildTest(findLecture(id));   // for the tests
  window.Hospes._item = () => ui.ex && !ui.ex.finished ? ui.ex.items[ui.ex.i] : null;   // the question showing (tests)
  window.Hospes._startReview = mode => { startReview(mode); return ui.view === 'review' && ui.ex ? ui.ex.items.map(i => ({ lid: i.lid, id: i.id, type: i.type, rq: !!i.rq })) : null; };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
