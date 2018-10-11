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
    "url": "webpack-runtime-9b340f413a5e59c0f41c.js"
  },
  {
    "url": "app-f7bfe1bfae1537cb8cc7.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-b1c1ddef374ad46337c9.js"
  },
  {
    "url": "index.html",
    "revision": "93e7b196f2e72a3e25c9ce387359ebcf"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ef6f5a663d647bf45deb81ad36404c1d"
  },
  {
    "url": "0.b5da3644d043010255db.css"
  },
  {
    "url": "1.a2f79e435cd8da55ea98.css"
  },
  {
    "url": "1-aea584d24834504c0a36.js"
  },
  {
    "url": "component---src-pages-index-js-63df51cad03e6bad820c.js"
  },
  {
    "url": "0-38d71c14fe37a1a487e6.js"
  },
  {
    "url": "static/d/147/path---index-6a9-zwQVJBdqjKy8AdfQBy1qty3udY.json",
    "revision": "88648f8d5aee6888cf4ef7831165f529"
  },
  {
    "url": "component---src-pages-404-js-339ad3244fa2091415c2.js"
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