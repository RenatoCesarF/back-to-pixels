/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
  skipWaiting: true,
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["backtopixels.vercel.app"],
  },
  // outras opções válidas do next aqui
};

module.exports = withBundleAnalyzer(withPWA(nextConfig));
