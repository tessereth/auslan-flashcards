/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-b648cf50acf7d9d6f0ae.js"
  },
  {
    "url": "app-b633bb1610c69e7b8c95.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-9202f07f87f0c862dfb9.js"
  },
  {
    "url": "index.html",
    "revision": "b30e14c8e3fddb78a1fe18fe9a82b162"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "220a58edcf6bb8a8a37a54cefcf68fe5"
  },
  {
    "url": "0.36d8238e446377f2333c.css"
  },
  {
    "url": "1.6782b7f9b031002f1882.css"
  },
  {
    "url": "1-ffa92f51c066587508ad.js"
  },
  {
    "url": "component---src-pages-index-js-3f8d6d5573b1f4f4bc1f.js"
  },
  {
    "url": "0-e7805022b1e7ca73f94f.js"
  },
  {
    "url": "static/d/240/path---index-6a9-Gsq3NpcnVucv1HgW6B1cIW0Cw.json",
    "revision": "615f395fe832b3269c6b488dbe6c78d7"
  },
  {
    "url": "component---src-pages-404-js-d7145aa0029b2f92f361.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "99201f8449cca3fa90024ef841ddbd46"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/auslan-flashcards/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});