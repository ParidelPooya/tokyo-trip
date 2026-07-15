// Service worker: cache-first app shell for full offline support.
// Bump CACHE_VERSION whenever index.html/itinerary.js/icons change, so
// clients pick up the new files instead of serving stale cached ones.
const CACHE_VERSION = "tokyo-trip-v15";
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

// Separate cache for OSM map tiles (offline map feature). Kept apart from
// the versioned app-shell cache so tile images persist across app updates
// instead of being wiped every time CACHE_VERSION bumps.
const TILE_CACHE = "tokyo-trip-tiles-v1";
const TILE_HOST_PATTERN = /^https:\/\/[abc]\.tile\.openstreetmap\.org\//;

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
        keys
          .filter((k) => k !== CACHE_VERSION && k !== TILE_CACHE)
          .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Cache-first for same-origin app shell assets and OSM map tiles (offline
// maps); network passthrough for everything else (e.g. Google Maps links
// open in a new tab, not fetched here).
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if (TILE_HOST_PATTERN.test(req.url)) {
    event.respondWith(
      caches.open(TILE_CACHE).then((cache) =>
        cache.match(req).then((cached) => {
          if (cached) return cached;
          return fetch(req)
            .then((res) => {
              if (res.ok) cache.put(req, res.clone());
              return res;
            })
            .catch(() => cached); // offline & not cached: nothing we can do
        })
      )
    );
    return;
  }

  if (url.origin !== self.location.origin) {
    return; // let other cross-origin requests (maps links etc.) go straight to network
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
