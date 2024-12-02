import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

registerRoute(
  ({ request }) => request.destination === 'style' || 
                   request.destination === 'script' || 
                   request.destination === 'image',
  new CacheFirst({
    cacheName: 'static-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50, // Limita o número de itens no cache
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 dias
      }),
    ],
  })
);

// Cache dinâmico para pontos de descarte e agendamentos
registerRoute(
  ({ url }) => url.pathname.startsWith('/api/pontos-de-descarte') || 
               url.pathname.startsWith('/api/agendamentos'),
  new NetworkFirst({
    cacheName: 'dynamic-data',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200], // Apenas respostas bem-sucedidas
      }),
      new ExpirationPlugin({
        maxEntries: 20, // Máximo de 20 entradas no cache dinâmico
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 dias
      }),
    ],
  })
);
const CACHE_NAME = "bio-sync-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/static/js/bundle.js",
  "/static/js/vendors~main.chunk.js",
  "/static/js/main.chunk.js",
  "/static/css/main.chunk.css",
  "/static/media/*",  // Inclua outros arquivos de mídia como imagens e fontes
];

// Instalação do Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Abrindo cache e armazenando recursos essenciais");
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // Força o SW a ser ativado imediatamente
});

// Interceptação de requisições para retorno de conteúdo em cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((fetchResponse) => {
        // Cache a resposta para futuras requisições
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      });
    })
  );
});

// Atualização de cache e limpeza de versões antigas
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

// Escutando mensagens para forçar a atualização imediata
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});