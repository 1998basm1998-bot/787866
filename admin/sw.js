self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('real-estate-store-v2').then((cache) => cache.addAll([
      './',
      './index.html',
      './style.css',
      './script.js',
      './firebase.js'
    ])),
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== 'real-estate-store-v2') {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
