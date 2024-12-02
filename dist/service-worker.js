const CACHE_NAME = "bio-sync-cache-v1";
const urlsToCache = ["/", "/index.html", "/static/js/bundle.js"];

// Instalação do Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Abrindo cache");
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // Força o SW a ser ativado imediatamente
});

// Interceptar requisições para uso offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Atualizar cache
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
  self.clients.claim(); // Garante que o novo SW controle todas as abas abertas
});

// Escuta mensagens para atualizar SW
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});