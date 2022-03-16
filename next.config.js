/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    disable: process.env.NODE_ENV === 'development',
    skipWaiting: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['codingideas.vercel.app'],
  },
});
