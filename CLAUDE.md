# Hospes: notes for Claude Code

The owner, Nils, does not program. Explain changes in plain English, test them yourself, and keep the app working
on an iPhone (Safari, home-screen web app). British English in all text. Nils is a German native speaker living in
London; his French is a little beyond beginner, his Italian (the second course, later) starts from zero.

Hospes is a phone app for learning modern languages for travel, French first, then Italian. Focus: vocabulary and
phrases for hospitality (cafés, restaurants, bars, wine, hotels), audio for everything, grammar applied rather than
theoretical. It was forked in November 2026 from Viātor (github.com/nilsbuesking/Viator, Nils's app for old
languages); the engine keeps Viātor's robustness work, and internally a unit is still called a "lecture".

## Architecture rules
- `app.js` / `app.css` are the engine and must stay language-independent. Nothing about French or Italian belongs
  there; it goes in `content/`.
- A unit is one file `content/<course>/unit-NN.js` calling `Hospes.addLecture(courseId, {...})`. Copy the structure
  of `content/french/unit-01.js`. Register new files in `content/catalogue.js` and in `CORE` in `sw.js`.
- Unit sections (shown when the unit has them): intro (+ `background` blocks), `pronunciation`, `phrases`
  (with `phraseGroups`), `dialogue`, `vocab`, `grammar`, exercises, `reading`, test. Phrases become flashcards
  (deck “Phrases”) and appear in the Phrasebook (Reference tab), searchable offline.
- Exercise types: `mc`, `gap`, `match`, `order`, `translate` (`dir: 'fr-en'` checked against English variants,
  articles ignored; `dir: 'en-fr'` checked word-order-free), `paradigm`, and `listen` (`text` is played when the
  question appears; with `options`/`answer` a choice, without them a dictation checked against `accepted` or `text`).
  Tests always draw at least one translation, one gap and one listening item when the unit has them.
- Accents (`lengthMark: 'accents'`): a missing accent is accepted with a reminder unless “Require accents” is on.
- Audio: `speak(text)` plays a recorded file if `Hospes.addAudio(courseId, { text: 'path below content/' })` has
  one for exactly that text, otherwise the phone's voice (best French-France voice, Enhanced/Premium preferred,
  Apple novelty voices excluded; choice and speed under Progress → Audio). Audio may only start inside a tap (iOS),
  so automatic playback (listening questions, flashcards) happens in click handlers. Recorded files live in
  `content/<course>/audio/`, are not part of CORE, and are cached by the service worker once played (cache
  `hospes-audio`). When the first recordings arrive, test playback on the iPhone itself: Safari sends Range requests
  for media, and a cached full response may need handling there.
- Backup: a file (share sheet / copy text) and, if set up, an automatic private GitHub Gist (`hospes-progress.json`)
  via a fine-grained token with only the Gists permission. Token and gist id live in `localStorage['hospes.sync']`,
  never in backups. Empty progress is never uploaded; a phone with progress that finds an existing gist pauses
  (`hold`) until Nils restores or overwrites. Requests to api.github.com must never be cached (sw.js).
- Progress is versioned (`FORMAT` in app.js, starting at 1 for Hospes). Any change to what is stored must bump
  `FORMAT` and extend `migrate()`; new stored fields need a default there.
- Offline copy: `sw.js` serves one complete version and replaces it only when `VERSION` changes. Raise `VERSION`
  in `sw.js` and `BUILD` in `app.js` with every push.
- Phone layout: form text never under 16 px; touch targets 44 px; no page wider than the screen at any text size.
- No build step, no frameworks. Outside services: Google Fonts, and GitHub's API for the backup only.

## Content rules
- Original text only. Phrases and dialogues must be what people actually say in France today; mark regional
  variants (chocolatine) and register (casual, formal).
- English is the reference language. Add a German comparison (`<p class="aside"><strong>German angle.</strong>…`)
  only where it genuinely helps (sounds: German ü/ö/r/sch; Sie/du; sein-Perfekt; gender mismatches). No Latin
  anchors (Nils is a beginner in Latin).
- Every noun has its gender (`g: 'm' | 'f' | 'mf'`), every vocabulary item an IPA `pron`; `head` is what is spoken
  and sorted, `la` what is shown, `say` overrides what is spoken.
- French typography: typographic apostrophe ’ and a no-break space (` `) before ? ! : in French text.
- Grammar is applied: only what the unit's phrases need, explained by use. Every translation into French needs an
  `explain`.
- Background and culture notes: qualify claims to their evidence; prices and customs change, say so.
- After writing a unit, list everything you are less than certain of in CONTENT-CHECKS.md (Nils checks against
  Le Robert or Larousse, or asks a French speaker).
- Order of units (catalogue `planned`): café; restaurant I and II; wine I and II; hotel; market and shops;
  transport; pharmacy. Italian follows the same plan once the French course has proved the app.

## Testing after changes
`node tests/validate_content.js` after any content change (one second). Before every push `python3 tests/run_all.py`
(starts a local server; all tests in parallel; exit code 1 on failure). Add a `tests/french_unitN.py` for each new
unit (copy `french_unit1.py`: it answers every exercise and test item from the unit's own data). After pushing,
check that the GitHub Pages deployment succeeded.
