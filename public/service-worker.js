const CACHE_NAME = 'my-pwa-cache-v1';
const DYNAMIC_CACHE = 'dynamic-cache-v1';

// Assets that should be cached immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/masked-icon.svg'
];

// Cache strategy: Network First, falling back to cache
const networkFirst = async (request) => {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
    throw new Error('Network response was not ok');
  } catch (error) {
    // Fall back to cache
    const cachedResponse = await caches.match(request);
    return cachedResponse || Promise.reject('no-match');
  }
};

self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting()) // Activate new service worker immediately
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => cacheName !== CACHE_NAME && cacheName !== DYNAMIC_CACHE)
            .map(cacheName => caches.delete(cacheName))
        );
      }),
      // Take control of all clients immediately
      self.clients.claim()
    ])
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Ignore requests related to Vite's dev server and dynamic imports
  if (url.origin === self.location.origin && (
    url.pathname.startsWith('/@vite/') ||
    url.pathname.startsWith('/src/') ||
    url.pathname.includes('node_modules')
  )) {
    return; // Don't cache these requests
  }

  // For navigation requests (HTML), use network-first strategy
  if (event.request.mode === 'navigate') {
    event.respondWith(networkFirst(event.request));
    return;
  }

  // For other requests, try cache-first, then network fallback
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => cachedResponse || fetch(event.request))
      .catch(() => caches.match('/index.html')) // Fallback for offline
  );
});


// Push notification handlers remain the same
self.addEventListener('push', (event) => {
  const options = {
    body: event.data.text(),
    icon: './src/assets/img/dong.png',
    badge: './src/assets/img/dong.png',
    vibrate: [200, 100, 200],
    tag: 'new-job-notification',
    actions: [
      {
        action: 'view',
        title: 'View Job'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('New Job Posted!', options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const urlToOpen = event.action === 'view' ? '/jobs' : '/';

  event.waitUntil(
    self.clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      return self.clients.openWindow(urlToOpen);
    })
  );
});