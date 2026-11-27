/**
 * sw.js - Service Worker para Operação 100% Offline (PWA) e GitHub Pages
 */

const CACHE_NAME = 'ntm-visitas-v3';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './css/style.css',
    './js/db.js',
    './js/image-utils.js',
    './js/sync.js',
    './js/pdf-generator.js',
    './js/auth.js',
    './js/app.js',
    './assets/logo-ntm.jpg',
    './assets/logo-base64.js',
    './assets/html2pdf.bundle.min.js',
    './manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    if (!event.request.url.startsWith(self.location.origin)) return;

    // Network-first com fallback para cache (atualiza fácil no GitHub Pages e funciona offline)
    event.respondWith(
        fetch(event.request).then((networkResponse) => {
            if (networkResponse && networkResponse.ok) {
                const responseClone = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseClone);
                });
            }
            return networkResponse;
        }).catch(() => {
            return caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                const accept = event.request.headers.get('accept') || '';
                if (accept.includes('text/html')) {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
