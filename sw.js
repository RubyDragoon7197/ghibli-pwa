const CACHE_NAME = "ghibli-cache-v1";
const urlsToCache = [
  "/",                // Tu página principal
  "/index.html",
  "/styles.css",      // Cambia esto si tu CSS tiene otro nombre
  "/main.js",         // Cambia esto si tu JS tiene otro nombre
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

// Se ejecuta cuando se instala el service worker
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Se ejecuta cuando se hacen peticiones desde la app
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
