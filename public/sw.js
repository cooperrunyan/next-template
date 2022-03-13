if (!self.define) {
  let e,
    a = {};
  const i = (i, s) => (
    (i = new URL(i + '.js', s).href),
    a[i] ||
      new Promise((a) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = i), (e.onload = a), document.head.appendChild(e);
        } else (e = i), importScripts(i), a();
      }).then(() => {
        let e = a[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, n) => {
    const c = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (a[c]) return;
    let t = {};
    const r = (e) => i(e, c),
      o = { module: { uri: c }, exports: t, require: r };
    a[c] = Promise.all(s.map((e) => o[e] || r(e))).then((e) => (n(...e), t));
  };
}
define(['./workbox-75794ccf'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_articledata/test-2.json', revision: 'b75cce517ebecebd6294932a56a28618' },
        { url: '/_articledata/test-3.json', revision: 'e521ddbfb78d2f7c1cb8fbcbd0110df4' },
        { url: '/_articledata/test-4.json', revision: 'ec42db8d4ebf04dc134e9cfa11d1f698' },
        { url: '/_articledata/test.json', revision: '103d40a79031a488b55abdccf1f6ceb5' },
        { url: '/_articleimgs/test.webp', revision: '4eeb080403c7f9ede4ddbc4063ba6310' },
        { url: '/_articles/test-2.md', revision: '8c2d289849de069a6f49ad753fc3b9cb' },
        { url: '/_articles/test-3.md', revision: '8c2d289849de069a6f49ad753fc3b9cb' },
        { url: '/_articles/test-4.md', revision: '8c2d289849de069a6f49ad753fc3b9cb' },
        { url: '/_articles/test.md', revision: 'f4f25adbcae45cfbc50007fd260c7a20' },
        { url: '/_next/static/IhntAtmW3jIWvqaIodKkD/_buildManifest.js', revision: 'IhntAtmW3jIWvqaIodKkD' },
        { url: '/_next/static/IhntAtmW3jIWvqaIodKkD/_middlewareManifest.js', revision: 'IhntAtmW3jIWvqaIodKkD' },
        { url: '/_next/static/IhntAtmW3jIWvqaIodKkD/_ssgManifest.js', revision: 'IhntAtmW3jIWvqaIodKkD' },
        { url: '/_next/static/chunks/framework-91d7f78b5b4003c8.js', revision: 'IhntAtmW3jIWvqaIodKkD' },
        { url: '/_next/static/chunks/main-51b428d2065e9457.js', revision: 'IhntAtmW3jIWvqaIodKkD' },
        { url: '/_next/static/chunks/pages/_app-a6bf9791364476e2.js', revision: 'IhntAtmW3jIWvqaIodKkD' },
        { url: '/_next/static/chunks/pages/_error-2280fa386d040b66.js', revision: 'IhntAtmW3jIWvqaIodKkD' },
        { url: '/_next/static/chunks/pages/index-60204a3670413b7e.js', revision: 'IhntAtmW3jIWvqaIodKkD' },
        { url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js', revision: 'IhntAtmW3jIWvqaIodKkD' },
        { url: '/_next/static/chunks/webpack-514908bffb652963.js', revision: 'IhntAtmW3jIWvqaIodKkD' },
        { url: '/_next/static/css/c416ca3662e7d066.css', revision: 'IhntAtmW3jIWvqaIodKkD' },
        { url: '/_next/static/css/d4eb72cbbac00e01.css', revision: 'IhntAtmW3jIWvqaIodKkD' },
        { url: '/browserconfig.xml', revision: 'fc2a5efb0467068661342d1265648b70' },
        { url: '/favicon.svg', revision: 'efb8c27da0f876885bf3cea4377f928e' },
        { url: '/imgs/banner.png', revision: 'baf02ffebbb4d548b5af13793c72b1eb' },
        { url: '/imgs/profile.png', revision: '12377ffaa1e5665bfce68a03df2228f7' },
        { url: '/manifest.json', revision: '4692672555a4dd374763b6755d2c048e' },
        { url: '/pwa/android-144x144.webp', revision: '244b96900d820da762d2fb466bf1938f' },
        { url: '/pwa/android-192x192.webp', revision: '5c6483eeba6b524b0a07da1f63922390' },
        { url: '/pwa/android-36x36.webp', revision: 'e3b92a46c498ddafb4d23871e74d8e6f' },
        { url: '/pwa/android-48x48.webp', revision: 'a489962d436b4aa4c2fbc355295b27de' },
        { url: '/pwa/android-72x72.webp', revision: 'a1e40bd4f7d71611ff7e5e77486fc655' },
        { url: '/pwa/android-96x96.webp', revision: '9967e98b124432a13267a12469562162' },
        { url: '/pwa/android-chrome-192x192.webp', revision: '5c6483eeba6b524b0a07da1f63922390' },
        { url: '/pwa/android-chrome-512x512.webp', revision: '4c21ec7faa5ac8863cba14026ee08c43' },
        { url: '/pwa/android-chrome-maskable-192x192.webp', revision: 'e091a23bbea1c7961f88b5af1b753022' },
        { url: '/pwa/android-chrome-maskable-512x512.webp', revision: '4849cd055fe2d7fade9b84e63e46eb71' },
        { url: '/pwa/apple-touch-icon-120x120.webp', revision: '8586f0ffa6fab25804fd3f7015948a88' },
        { url: '/pwa/apple-touch-icon-152x152.webp', revision: '250d325925d22169860b0b284c86083d' },
        { url: '/pwa/apple-touch-icon-167x167.webp', revision: 'dae1d9ea4803ea0125912ea6037ffe94' },
        { url: '/pwa/apple-touch-icon-60x60.webp', revision: 'c0c0eec5ea905c000c93cd80298631e4' },
        { url: '/pwa/apple-touch-icon-76x76.webp', revision: 'f5ab78dda0e6229e5f19d4e9df616094' },
        { url: '/pwa/apple-touch-icon.webp', revision: 'b8e61fc0a74480de3add65670192fede' },
        { url: '/pwa/coast-228x228.webp', revision: '077a65a423200cf21f2d31ec0918ef74' },
        { url: '/pwa/favicon-128x128.webp', revision: 'ed0352174854e9a4931a3c327b5792c8' },
        { url: '/pwa/favicon-16x16.webp', revision: '613e0692a0dcafb93e08bf9c73b242fa' },
        { url: '/pwa/favicon-256x256.webp', revision: 'a61d038be0ccbf275b80da3ee80c1535' },
        { url: '/pwa/favicon-32x32.webp', revision: 'cb52cc2f30c93e064d2f55fcb018293b' },
        { url: '/pwa/favicon-48x48.webp', revision: 'dc223214a205281c5fe70e6d27544f55' },
        { url: '/pwa/favicon-64x64.webp', revision: '11d0ca81222793371445a8106045e2c7' },
        { url: '/pwa/favicon-96x96.webp', revision: '7d4a83aa789d526772127139191b0793' },
        { url: '/pwa/icon-background.webp', revision: 'a1cbc876878cf741f6ae6c57cc4c9776' },
        { url: '/pwa/icon-foreground.webp', revision: '652b16c2a91c5b51a3e6b9bec114fdde' },
        { url: '/pwa/icon.webp', revision: 'a213c17a6ee19c96c5b8bcc2642f83e2' },
        { url: '/pwa/msapplication-icon-144x144.webp', revision: '7243159c0ec8e64a1d1b6173e9de5d14' },
        { url: '/pwa/mstile-144x144.webp', revision: '7243159c0ec8e64a1d1b6173e9de5d14' },
        { url: '/pwa/mstile-150x150.webp', revision: '1ab5a3040ee7d4988c4898cc4b14a045' },
        { url: '/pwa/splash.webp', revision: '235eaabbea01c19decf7333fe129f406' },
        { url: '/pwa/tile150x150.webp', revision: 'b52720e1fa583ae9766138d3a1f859c2' },
        { url: '/pwa/tile310x150.webp', revision: 'b16f6926a4ddab5945b067a3a570cbf9' },
        { url: '/pwa/tile310x310.webp', revision: '9061064c025a23a0be4374917cd96e08' },
        { url: '/pwa/tile70x70.webp', revision: '9ea2473d85a59f3ac8b599e2d75a911e' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: a, event: i, state: s }) =>
              a && 'opaqueredirect' === a.type
                ? new Response(a.body, { status: 200, statusText: 'OK', headers: a.headers })
                : a,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const a = e.pathname;
        return !a.startsWith('/api/auth/') && !!a.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET',
    );
});
