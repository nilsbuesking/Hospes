# The phone fetches a new version only when VERSION in sw.js changes (the stored copy of the app is otherwise served
# as it is), so every push that changes a file the phone uses must raise VERSION, and BUILD in app.js with it.
# This compares the working files with what was last pushed (origin/main). Skipped where git or origin/main is missing.
import os, re, subprocess, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SERVED = ['index.html', 'app.js', 'app.css', 'sw.js', 'manifest.webmanifest', 'content', 'icons']
def git(*a):
    return subprocess.run(['git', *a], cwd=ROOT, capture_output=True, text=True)
def find(pattern, text):
    m = re.search(pattern, text or ''); return m.group(1) if m else None
if git('rev-parse', '--verify', '-q', 'origin/main').returncode != 0:
    print('ok   version check skipped: no origin/main to compare with'); sys.exit(0)
changed = [l for l in git('diff', '--name-only', 'origin/main', '--', *SERVED).stdout.splitlines() if l.strip()]
changed += [l for l in git('ls-files', '--others', '--exclude-standard', '--', *SERVED).stdout.splitlines() if l.strip()]
now_v = find(r"const VERSION = '([^']+)'", open(os.path.join(ROOT, 'sw.js')).read())
old_v = find(r"const VERSION = '([^']+)'", git('show', 'origin/main:sw.js').stdout)
now_b = find(r"const BUILD = '([^']+)'", open(os.path.join(ROOT, 'app.js')).read())
old_b = find(r"const BUILD = '([^']+)'", git('show', 'origin/main:app.js').stdout)
if not changed:
    print('ok   no file of the app differs from the last push'); sys.exit(0)
print(('ok   ' if now_v != old_v else 'FAIL ') + f'VERSION in sw.js raised ({old_v} → {now_v}); {len(changed)} app files changed since the last push')
print(('ok   ' if now_b != old_b else 'FAIL ') + f'BUILD in app.js raised ({old_b} → {now_b})')
