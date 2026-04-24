import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    qualities: [75, 100],
  },
  async rewrites() {
    return [
      {
        source: '/blogs',
        destination: '/blog',
      },
      {
        source: '/blogs/:path*',
        destination: '/blog/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/request-a-demo',
        permanent: true,
      },
    ];
  },

};

export default nextConfig;


