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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b9b5bef2006756aa2aeac33ca9b6964c"
  },
  {
    "url": "assets/css/0.styles.55657cee.css",
    "revision": "074f24e364a949c29a708d85f3866521"
  },
  {
    "url": "assets/img/1.6c619288.png",
    "revision": "6c619288f00705de88913e6a3630c5c5"
  },
  {
    "url": "assets/img/2.2a5b6308.jpg",
    "revision": "2a5b6308244222a5b5335da0ebb9265b"
  },
  {
    "url": "assets/img/3.4fa9d829.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/introduce/2.jpg",
    "revision": "2a5b6308244222a5b5335da0ebb9265b"
  },
  {
    "url": "assets/introduce/3.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/js/10.cf1b84b8.js",
    "revision": "80aa16360f85f313f29d67aea78f6049"
  },
  {
    "url": "assets/js/2.527ef2e8.js",
    "revision": "424bfbe4eca171bc7d5c43a7212df819"
  },
  {
    "url": "assets/js/3.dce1f521.js",
    "revision": "9505abd0ef9677a032d64719158f96c3"
  },
  {
    "url": "assets/js/4.097db3b9.js",
    "revision": "971268c46b2c0899a4de0a75b2142bf5"
  },
  {
    "url": "assets/js/5.c7d3c16f.js",
    "revision": "1b2bee0cdb7cbe6f5f3b16ac8a33ae4c"
  },
  {
    "url": "assets/js/6.2c741554.js",
    "revision": "1dbed0e0c9bbbc1a6be233a1da478fc9"
  },
  {
    "url": "assets/js/7.a38e3cdd.js",
    "revision": "4ef72f596c77606ab33dda77cd7ab67c"
  },
  {
    "url": "assets/js/8.5cdde23a.js",
    "revision": "505c3962901098733e9a85cd0298fa67"
  },
  {
    "url": "assets/js/9.9ee308b6.js",
    "revision": "be6f53088c70632ce74845d3bcbfbca1"
  },
  {
    "url": "assets/js/app.8ba87e19.js",
    "revision": "d2bfe5999ba208be166558e097384b62"
  },
  {
    "url": "assets/layout/1.png",
    "revision": "6c619288f00705de88913e6a3630c5c5"
  },
  {
    "url": "index.html",
    "revision": "dccff9e84941c735ceca3a1ed025c5f3"
  },
  {
    "url": "introduce/index.html",
    "revision": "77b43ec4e64f88443cf8a13754155b75"
  },
  {
    "url": "layout/index.html",
    "revision": "7b24034173f24250f095236255c7adc2"
  },
  {
    "url": "logo.png",
    "revision": "106db4decc04072aaf88bc3226178395"
  },
  {
    "url": "router/index.html",
    "revision": "21b8c365ac1b532c937af165bb7c964e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
