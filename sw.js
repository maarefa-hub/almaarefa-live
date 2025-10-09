self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("almaarefa-cache").then((cache) => {
      return cache.addAll([
        "index.html",
        "style.css",
        "manifest.json",
        "assets/icon.svg"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
