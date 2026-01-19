import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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


