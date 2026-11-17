// Fast structural check of all course content (runs in about a second, no browser).
// Usage: node tests/validate_content.js        Exit code 1 if anything is wrong.
// Checks: every file in the catalogue exists, loads without errors and is in the offline list (CORE in sw.js);
// every CORE entry exists; lecture ids and numbers are unique; every exercise is complete (answer keys in range,
// paradigm rows match their headers, no duplicate options or tokens); each test can be built; nouns have a gender;
// phrases, dialogue and reading are complete, and every word of a reading has a gloss.
// Lines starting "NOTE" are worth knowing but do not fail the check.
const fs = require('fs'), path = require('path'), vm = require('vm');
const repo = path.resolve(__dirname, '..');
const reg = { catalogue: [], shared: [], lectures: {}, pages: [] };
let cur = 'catalogue.js';
const ctx = { console };
ctx.window = ctx;
ctx.Hospes = {
  setCatalogue: l => { reg.catalogue = l; }, setShared: f => { reg.shared = f; },
  addPage: (c, p) => reg.pages.push(p),
  addLecture: (c, l) => (reg.lectures[c] = reg.lectures[c] || []).push(Object.assign({ __file: cur }, l))
};
vm.createContext(ctx);
const fails = [], notes = [];
const F = (...a) => fails.push(a.join(' ')), N = (...a) => notes.push('NOTE ' + a.join(' '));

vm.runInContext(fs.readFileSync(path.join(repo, 'content/catalogue.js'), 'utf8'), ctx);
const sw = fs.readFileSync(path.join(repo, 'sw.js'), 'utf8');
const core = JSON.parse(sw.match(/const CORE = (\[[\s\S]*?\]);/)[1].replace(/'/g, '"'));
const files = [];
for (const c of reg.catalogue) for (const f of c.lectures) files.push(f);
for (const f of reg.shared) files.push(f);
for (const f of files) {
  if (!core.includes('content/' + f)) F('not in the offline list (CORE in sw.js):', f);
  const p = path.join(repo, 'content', f);
  if (!fs.existsSync(p)) { F('missing file:', f); continue; }
  cur = f;
  try { vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { filename: f }); } catch (e) { F('error in', f + ':', e.message); }
}
for (const u of core) if (u !== './' && !fs.existsSync(path.join(repo, u))) F('CORE entry missing on disk:', u);
for (const u of core.filter(u => u.startsWith('content/') && u !== 'content/catalogue.js'))
  if (!files.includes(u.slice(8))) F('in CORE but not in the catalogue:', u);

let n = 0;
for (const c of reg.catalogue) {
  const ls = reg.lectures[c.id] || [];
  const ids = new Set(), nums = new Set();
  const glossOf = v => (c.reverseFrom === 'de' && v.de) ? v.de : v.en;
  for (const l of ls) {
    n++;
    const where = `${l.__file} (${l.id})`;
    if (ids.has(l.id)) F('duplicate lecture id', where); ids.add(l.id);
    const key = (l.special ? 's' : '') + l.number; if (nums.has(key)) F('duplicate lecture number', l.number, where); nums.add(key);
    for (const k of ['id', 'number', 'title', 'subtitle', 'intro', 'grammar', 'vocab', 'exercises', 'test']) if (l[k] === undefined) F('missing field', k, where);
    const uniq = (arr, what) => { const s = new Set(); (arr || []).forEach(x => { if (s.has(x.id)) F('duplicate', what, 'id', x.id, where); s.add(x.id); }); };
    uniq(l.vocab, 'vocab'); uniq(l.exercises, 'exercise'); uniq(l.test && l.test.items, 'test item');
    uniq(l.grammarCards, 'grammar card'); uniq(l.reading && l.reading.questions, 'reading question');
    // missed items are stored as lecture:item, so ids must not be shared between exercises, test and reading
    const all = (l.exercises || []).concat((l.test && l.test.items) || [], (l.reading && l.reading.questions) || []);
    const seen = {};
    all.forEach(it => { if (seen[it.id] && seen[it.id] !== it) F('item id used twice (exercises/test/reading):', it.id, where); seen[it.id] = it; });
    for (const it of all) {
      const w = `${where} item ${it.id}`;
      if (it.type === 'mc') {
        if (!Array.isArray(it.options) || it.answer == null || it.answer < 0 || it.answer >= it.options.length) F('multiple choice: answer out of range', w);
        else if (new Set(it.options).size !== it.options.length) F('multiple choice: duplicate options', w);
      } else if (it.type === 'gap') { if (!it.answers || !it.answers.length) F('gap without answers', w); }
      else if (it.type === 'translate') {
        if (!it.accepted || !it.accepted.length || !it.dir || !it.model) F('translation incomplete', w);
        // translations into the course language explain the model answer (teaching review, November 2026)
        const into = String(it.dir || '').split('-')[1];
        if (into && into !== 'en' && into !== 'de' && !it.explain) F('translation into the course language without an explanation', w);
      }
      else if (it.type === 'paradigm') { (it.rows || []).forEach(r => { if (!r.answers || r.answers.length !== it.headers.length) F('table row does not match the headers', w, r.label); }); }
      else if (it.type === 'match') {
        if (!it.pairs || it.pairs.length < 2) F('matching: too few pairs', w);
        else { const L = it.pairs.map(p => p[0]), R = it.pairs.map(p => p[1]); if (new Set(L).size !== L.length || new Set(R).size !== R.length) F('matching: the same item twice', w); }
      } else if (it.type === 'order') {
        if (!it.tokens || it.tokens.length < 2) F('word order: too few pieces', w);
        else if (new Set(it.tokens).size !== it.tokens.length) F('word order: two identical pieces (ambiguous)', w);
      } else if (it.type === 'listen') {
        if (!it.text) F('listening item without text', w);
        if (it.options && (it.answer == null || it.answer < 0 || it.answer >= it.options.length || new Set(it.options).size !== it.options.length)) F('listening choice: answer out of range or duplicate options', w);
      } else F('unknown item type', it.type, w);
    }
    // modern-language units: nouns carry a gender, every vocabulary item can be spoken, phrases and dialogue complete
    for (const v of l.vocab || []) {
      if (!v.head || !v.la || !v.en || !v.pos) F('vocabulary item incomplete', v.id, where);
      if (c.lengthMark === 'accents' && /^noun/.test(v.pos || '') && !v.g) F('noun without gender', v.id, where);
    }
    const phIds = new Set();
    for (const x of l.phrases || []) { if (!x.id || !x.fr || !x.en) F('phrase incomplete', x.id, where); phIds.add(x.id); }
    for (const g of l.phraseGroups || []) for (const id of g.ids) if (!phIds.has(id)) F('phrase group lists an unknown phrase', id, where);
    if (l.phraseGroups) { const listed = new Set(l.phraseGroups.flatMap(g => g.ids)); for (const id of phIds) if (!listed.has(id)) F('phrase in no group (not shown)', id, where); }
    if (l.dialogue) { const d = l.dialogue; if (!d.title || !Array.isArray(d.lines) || !d.lines.length) F('dialogue incomplete', where); (d.lines || []).forEach((x, i) => { if (!x.who || !x.fr || !x.en) F('dialogue line incomplete', i + 1, where); }); }
    if (l.reading) { const r = l.reading; if (!r.title || !r.text || !r.glosses) F('reading incomplete', where);
      // every word of the reading has a gloss (the reader can tap any word)
      const words = (r.text.match(/[A-Za-zÀ-ɏ]+/g) || []).map(w => w.toLowerCase()), miss = [...new Set(words.filter(w => !(w in r.glosses)))];
      if (miss.length) F('reading words without a gloss:', miss.join(', '), where); }
    if (l.test && l.test.items.some(i => i.type === 'listen') === false && (l.exercises || []).some(i => i.type === 'listen')) N('test has no listening item', where);
    if (l.test) {
      const t = l.test, vq = t.vocabQuestions || 0;
      if (t.items.length < t.count - vq) F('test has fewer written items than it draws', where);
      const pool = (l.vocab || []).filter(v => v.pos.indexOf('verb') === 0 || v.pos.indexOf('noun') === 0);
      if (pool.length < vq) F('test: fewer nouns and verbs than vocabulary questions', where);
      for (const v of pool) {
        const same = pool.filter(x => x.id !== v.id && glossOf(x) === glossOf(v));
        if (same.length) N('two words with the same gloss (the test never shows both as options):', v.id, '=', same.map(x => x.id).join(', '), where);
      }
    }
  }
}
console.log(fails.concat(notes).join('\n'));
console.log(`content check: ${n} units, ${files.length} files, ${core.length} offline entries: ${fails.length ? fails.length + ' problem(s)' : 'OK'}`);
process.exit(fails.length ? 1 : 0);
