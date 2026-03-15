const SW_VERSION = "drama-sw-v4";
const STATIC_CACHE = `${SW_VERSION}-static`;
const RUNTIME_CACHE = `${SW_VERSION}-runtime`;
const OFFLINE_FALLBACK_URL = "/offline.html";
const CORE_ASSETS = ["/", "/styles.css", "/app.js", "/manifest.webmanifest", OFFLINE_FALLBACK_URL, "/assets/logo-v5.png", "/assets/pwa-icon-180.png", "/assets/pwa-icon-192.png", "/assets/pwa-icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
      .catch(() => {})
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter((key) => key !== STATIC_CACHE && key !== RUNTIME_CACHE)
        .map((key) => caches.delete(key))
    );
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/uploads/")) return;

  if (req.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const networkRes = await fetch(req);
        const cache = await caches.open(RUNTIME_CACHE);
        cache.put(req, networkRes.clone()).catch(() => {});
        return networkRes;
      } catch {
        const cacheHit = await caches.match(req);
        if (cacheHit) return cacheHit;
        const offlineFallback = await caches.match(OFFLINE_FALLBACK_URL);
        if (offlineFallback) return offlineFallback;
        return caches.match("/");
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cacheHit = await caches.match(req);
    const networkFetch = fetch(req)
      .then(async (networkRes) => {
        if (networkRes && networkRes.ok) {
          const cache = await caches.open(RUNTIME_CACHE);
          cache.put(req, networkRes.clone()).catch(() => {});
        }
        return networkRes;
      })
      .catch(() => null);
    return cacheHit || networkFetch || Response.error();
  })());
});
