const CACHE_NAME = "ghibli-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./js/api.js",
  "./js/aleatorios.js",
  "./js/detalle.js",
  "./js/favoritos.js",
  "./js/home.js",
  "./js/nav.js",
  "./js/usuario.js",
  "./js/capturados.js",
  "./manifest.json"
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
