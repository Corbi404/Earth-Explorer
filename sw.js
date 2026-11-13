// Earth Explorer service worker: lets the map install as an app and open offline.
const CACHE = 'earth-explorer-v3';
const SHELL = [
  './',
  'index.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  // Only handle our own files and Leaflet from unpkg. Map tiles and APIs go straight to the network.
  if (!sameOrigin && url.hostname !== 'unpkg.com') return;

  // Pages: network first (so updates show up), fall back to the saved copy when offline.
  if (req.mode === 'navigate' || (sameOrigin && url.pathname.endsWith('.html'))) {
    e.respondWith(
      fetch(req.url, { cache: 'no-cache' })
        .then(r => {
          const copy = r.clone();
          caches.open(CACHE).then(c => c.put(req.url, copy));
          return r;
        })
        .catch(() => caches.match(req.url)
          .then(r => r || caches.match('index.html'))
          .then(r => r || caches.match('./')))
    );
    return;
  }

  // Everything else: saved copy first, then network (and save it for next time).
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r && (r.ok || r.type === 'opaque')) {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return r;
    }))
  );
});
