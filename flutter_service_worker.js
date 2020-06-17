'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8b6ae594365bf0316566b8a610068989",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/image/torofi_gold.png": "d6c1638c31b578e3cf1d8f342d37e019",
"assets/image/torofi_gray.png": "8f3ba8540231526e7aa69b19af2ab9da",
"assets/image/twitter_logo.png": "d73d21cfc1df81e923d62e220e790022",
"assets/LICENSE": "b8d0774952b71ba8cf02b145d2630fe1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/sound/explosion.mp3": "ce38a00a24d7a628c2690bb0de977bf1",
"icons/Icon-192.png": "c4207f0e37194906b4d0b2157cf52eee",
"icons/Icon-512.png": "d1d23702723945aa00861d696e6e67a4",
"index.html": "84d6bed4a67e38ddead2952c7226e46c",
"/": "84d6bed4a67e38ddead2952c7226e46c",
"main.dart.js": "6de5f2a70c9b1abec9dc962f773358bd",
"manifest.json": "5f1779aa9fd5e8fe9306d8dc9ab513c0"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
