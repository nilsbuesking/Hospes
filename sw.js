/* Offline support. The app is stored on the phone as one complete version: every file in CORE is downloaded
 * when a version is installed, and the app is then served from that copy alone, so the files on the phone always
 * belong together (a half-finished update on a bad connection changes nothing). A new version is fetched only when
 * VERSION changes, so raise VERSION with every push (tests/version_check.py fails if this is forgotten).
 * Pictures and fonts from other sites (Wikimedia Commons, Google Fonts) go into a separate cache, MEDIA, which
 * survives version changes, so a picture seen once online stays available offline. Requests to GitHub (the automatic
 * backup) are never cached. */
const VERSION = 'hospes-v8';
const MEDIA = 'hospes-media';
const MEDIA_MAX = 400;   // entries; the oldest are removed beyond this
const CORE = ['./', 'index.html', 'app.css', 'app.js', 'manifest.webmanifest',
  'content/catalogue.js', 'content/french/unit-01.js', 'content/french/unit-02.js', 'content/french/unit-03.js', 'content/french/unit-04.js', 'content/french/unit-05.js', 'content/french/pages.js', 'icons/icon-180.png', 'icons/icon-192.png'];
// Recorded audio (content/<course>/audio/…) is not part of a version: each file is kept once it has been played or
// downloaded (cache AUDIO, which survives version changes), so new recordings never force a large update.
const AUDIO = 'hospes-audio';

self.addEventListener('install', e => {
  // cache: 'reload' skips the browser's own HTTP cache, which GitHub Pages lets keep files for 10 minutes
  e.waitUntil(caches.open(VERSION).then(c => Promise.all(CORE.map(u => c.add(new Request(u, { cache: 'reload' }))))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== MEDIA && k !== AUDIO).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) {
    // only fonts and pictures are kept; anything else (the GitHub backup) always goes to the network
    if (/(^|\.)(googleapis\.com|gstatic\.com|wikimedia\.org)$/.test(url.hostname)) e.respondWith(media(e.request));
    return;
  }
  if (/\/content\/[^/]+\/audio\//.test(url.pathname)) { e.respondWith(audio(e.request)); return; }
  e.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const hit = await cache.match(e.request, { ignoreSearch: true });
    if (hit) return hit;
    // not part of the stored version (the large icon, this file itself when the app checks the connection)
    try { return await fetch(e.request); }
    catch (err) {
      if (e.request.mode === 'navigate') { const page = await cache.match('index.html'); if (page) return page; }
      return Response.error();
    }
  })());
});

// Pictures and fonts: from the cache if there, otherwise from the network and then kept. Matched by the full
// address, because the two Google Fonts stylesheets differ only after the "?".
async function media(req) {
  const cache = await caches.open(MEDIA);
  const hit = await cache.match(req);
  if (hit) return hit;
  let res;
  try {
    // A CORS copy where the site allows one (Wikimedia and Google both do): browsers count an opaque copy against
    // storage at a much inflated size.
    res = await fetch(req.url, { mode: 'cors', credentials: 'omit' });
  } catch (e) {
    try { res = await fetch(req); } catch (e2) { return Response.error(); }
  }
  if (res && (res.ok || res.type === 'opaque')) {
    try { await cache.put(req, res.clone()); trim(cache); } catch (e) { /* storage full: serve without keeping */ }
  }
  return res;
}
async function audio(req) {
  const cache = await caches.open(AUDIO);
  const hit = await cache.match(req, { ignoreSearch: true });
  if (hit) return hit;
  try {
    const res = await fetch(req);
    if (res.ok && res.status === 200) { try { await cache.put(req, res.clone()); } catch (e) { /* storage full */ } }
    return res;
  } catch (e) { return Response.error(); }
}
async function trim(cache) {
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - MEDIA_MAX; i++) await cache.delete(keys[i]);
}
