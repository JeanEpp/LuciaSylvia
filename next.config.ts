import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/LuciaSylvia',
  assetPrefix: '/LuciaSylvia/',
  images: {
    unoptimized: true,
  }
};

module.exports = withBundleAnalyzer(nextConfig);