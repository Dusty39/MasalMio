const CACHE_NAME = 'masalmio-v3.3.1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css?v=3.3.1',
    './app.js?v=3.3.1',
    './stories.js?v=3.3.1',
    './manifest.json',
    './images/masalmio_icon_premium.png',
    './images/masalmio_logo.png',
    './images/hero_boy_1.png',
    './images/hero_girl_1.png',
    // We can add more specific core UI images here if needed
];

// Install Event: Cache Core Assets
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing version:', CACHE_NAME);
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Caching all: app shell and content');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting(); // Force activation immediately
});

// Activate Event: Clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating...');
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[Service Worker] Removing old cache:', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim(); // Take control of all clients immediately
});

// Fetch Event: Stale-While-Revalidate Strategy
self.addEventListener('fetch', (event) => {
    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const fetchPromise = fetch(event.request).then((networkResponse) => {
                // Check if we received a valid response
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                    return networkResponse;
                }

                // Update cache with new version
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });

                return networkResponse;
            });

            // Return cached response if available, otherwise wait for network
            // "Stale-While-Revalidate" logic: return cache immediately, update in background
            return cachedResponse || fetchPromise;
        })
    );
});
