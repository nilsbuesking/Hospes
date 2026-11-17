# Tests

    python3 tests/run_all.py          # everything (about a minute)
    python3 tests/run_all.py french   # only tests whose file name contains "french"

Starts a local server on port 8765 if none is running. A test fails if it crashes, prints a line starting `FAIL`,
reports incorrect answers (`not correct: [...]`) or page errors (`errors [...]`), or prints `N (expect M)` with
different numbers. Logs: `/tmp/hospes-test-logs/`; screenshots: `/tmp/hospes-shots/`.

- `validate_content.js` (Node, no browser): catalogue files exist and are in the offline list; every exercise and
  test item is complete; nouns have a gender; phrases, dialogue and reading are complete; every reading word has a gloss.
- `french_unit1.py`: Unit 1 end to end at iPhone width, every exercise and test item answered from the unit's data,
  listening items, dialogue playback (normal and slow), the voice choice, flashcards with audio, phrasebook search,
  extra-large text. Speech is replaced by a recorder.
- `backup_sync.py`: the automatic GitHub Gist backup against a simulated GitHub.
- `offline.py`: start and use offline; recorded audio cached once played.
- `version_check.py`: `VERSION` (sw.js) and `BUILD` (app.js) raised whenever app files change.

`tests/fonts` holds the app's fonts (SIL Open Font Licence) because Google Fonts cannot be reached from the test machine.
