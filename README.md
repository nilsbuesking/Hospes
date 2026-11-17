# Hospes

A phone app for learning French (and later Italian) for travel: cafés, restaurants, bars, wine, hotels. It works
offline, reads every word and sentence aloud, and keeps your progress on the phone with an automatic backup to
GitHub.

**Open it:** https://nilsbuesking.github.io/Hospes/ in Safari on the iPhone, then Share → Add to Home Screen.

## What is in a unit
Introduction and background · Pronunciation · Phrases (with audio, also as flashcards and in the Phrasebook) ·
Dialogue (French only or with English, played line by line, normal or slow) · Vocabulary (gender in colour,
pronunciation) · Grammar (only what the phrases need) · Exercises (including listening and dictation) · Reading
(a real-world text such as a price board, every word tappable) · Test.

## Audio
For now the iPhone's own French voice reads everything. For a much better voice, on the iPhone go to
Settings → Accessibility → Spoken Content → Voices → French, and download a voice marked Enhanced (choose France,
not Canada). Then choose it in the app under Progress → Audio. Recorded neural voices (Azure, free tier) will
replace the phone voice unit by unit; the app uses a recording wherever one exists and the phone voice for the rest.

## Automatic backup
Progress → Backup → Automatic backup to GitHub. It needs a fine-grained GitHub token with only the
“Gists: read and write” permission; the steps are shown in the app. The backup is a private gist named
`hospes-progress.json`. On a new phone, connect with a token and the app offers to restore it.

## For Claude Code
See CLAUDE.md. Tests: `python3 tests/run_all.py`. Content checks for Nils: CONTENT-CHECKS.md.
