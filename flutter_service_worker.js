'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "8b6ae594365bf0316566b8a610068989",
"/assets\FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\image\torofi_gold.png": "d6c1638c31b578e3cf1d8f342d37e019",
"/assets\image\torofi_gray.png": "8f3ba8540231526e7aa69b19af2ab9da",
"/assets\image\twitter_logo.png": "d73d21cfc1df81e923d62e220e790022",
"/assets\LICENSE": "02179851bfb2ad33a7a3811fed7ef975",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets\sound\explosion.mp3": "ce38a00a24d7a628c2690bb0de977bf1",
"/index.html": "982fe212833c645c6911c6279edabc2b",
"/main.dart.js": "c2543432b6a002d1d95fe5e462ba75ab"
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
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
