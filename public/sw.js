const CACHE_NAME = 'cmpro-cache-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/images/Logo.png',
  '/images/favicon-32x32.png',
  '/images/favicon-16x16.png',
  '/courses/javascript',
  '/courses/python',
  '/courses/golang',
  '/courses/analytics',
  '/forgot-password',
  '/documents',
  '/privacy-policy',
  '/terms-of-service'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Push notification event
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Новое уведомление от CodeMastersPRO',
    icon: '/images/Logo.png',
    badge: '/images/favicon-32x32.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Открыть',
        icon: '/images/favicon-32x32.png'
      },
      {
        action: 'close',
        title: 'Закрыть',
        icon: '/images/favicon-32x32.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('CodeMastersPRO', options)
  );
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
