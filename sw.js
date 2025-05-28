const CACHE_NAME = "ghibli-cache-v1";
const urlsToCache = [
  "/ghibli-pwa/",
  "/ghibli-pwa/index.html",
  "/ghibli-pwa/styles.css",
  "/ghibli-pwa/main.js",
  "/ghibli-pwa/manifest.json",
  "/ghibli-pwa/icons/icon-192.png",
  "/ghibli-pwa/icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
