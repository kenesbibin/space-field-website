import type { NextConfig } from "next";

const SECURITY_HEADERS = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(self), geolocation=(self), microphone=(self)" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    qualities: [60, 75, 100],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/videos/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
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
      {
        source: '/lab',
        destination: '/lab/photogrammetry',
        permanent: false,
      },
      {
        source: '/home-appraisal-software',
        destination: '/property-inspection-software',
        permanent: true,
      },
      {
        source: '/home-appraisal',
        destination: '/property-inspection-software',
        permanent: true,
      },
      {
        source: '/house-appraisal',
        destination: '/property-inspection-software',
        permanent: true,
      },
      {
        source: '/real-estate-appraiser-software',
        destination: '/property-inspection-software',
        permanent: true,
      },
      {
        source: '/knowledge-base',
        destination: '/glossary',
        permanent: true,
      },
      {
        source: '/knowledge-base/:slug',
        destination: '/glossary/:slug',
        permanent: true,
      },
      {
        source: '/industries/oil-gas',
        destination: '/industries/oil-and-gas',
        permanent: true,
      },
      {
        source: '/alternatives/iauditor',
        destination: '/alternatives/safetyculture',
        permanent: true,
      },
    ];
  },


};

export default nextConfig;


