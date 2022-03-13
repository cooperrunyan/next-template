// ts-check

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
module.exports = withPlugins({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
    scope: '/',
  },

  async redirects() {
    return [
      {
        source: '/test',
        destination: '/',
        permanent: false,
      },
    ];
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});

/**
 * @param {import('next').NextConfig} config
 * @returns {import('next').NextConfig}
 */
function withPlugins(config) {
  return withBundleAnalyzer(withPWA(config));
}
