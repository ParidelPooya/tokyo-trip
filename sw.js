// Service worker: cache-first app shell for full offline support.
// Bump CACHE_VERSION whenever index.html/itinerary.js/icons change, so
// clients pick up the new files instead of serving stale cached ones.
const CACHE_VERSION = "tokyo-trip-v13";
const ASSETS = [
  "./",
  "./index.html",
  "./itinerary.js",
  "./reference.js",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-180.png",
  "./icon-maskable-192.png",
  "./icon-maskable-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Cache-first for same-origin app shell assets; network passthrough for
// everything else (e.g. Google Maps links open in a new tab, not fetched here).
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if (url.origin !== self.location.origin) {
    return; // let cross-origin requests (maps links etc.) go straight to network
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          // Cache newly fetched same-origin assets for future offline use.
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => {
          // Offline and not cached — fall back to the app shell for navigations.
          if (req.mode === "navigate") return caches.match("./index.html");
        });
    })
  );
});
