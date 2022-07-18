/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


module.exports = withBundleAnalyzer(withPWA(
  {
    pwa: {
      dest: "public",
      register: true,
      disable: process.env.NODE_ENV === 'development',
      skipWaiting: true,
    },
    reactStrictMode: true,
    concurrentFeatures: true,
    images: {
      domains: ['backtopixels.vercel.app', 'backtopixels.com'],
    },
    // staticPageGenerationTimeout: 1000,
  }
));

