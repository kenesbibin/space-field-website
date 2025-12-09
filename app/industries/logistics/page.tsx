import React from 'react';
import type { Metadata } from 'next';
import LogisticsSection from '@/components/LogisticsSection';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Logistics & Fleet Management Software | Space Field',
  description: 'Optimize your delivery fleet with Space Field. Real-time tracking, route optimization, and digital proof of delivery (POD) for modern logistics operations.',
  keywords: ['logistics software', 'fleet management', 'proof of delivery', 'route optimization', 'delivery app', 'Space Field'],
  alternates: {
    canonical: 'https://spacecapture.ai/industries/logistics',
  },
  openGraph: {
    title: 'Logistics & Fleet Management Software | Space Field',
    description: 'Drive efficiency with real-time fleet tracking and digital delivery workflows.',
    url: 'https://spacecapture.ai/industries/logistics',
    siteName: 'Space Field',
    images: [
      {
        url: '/images/fleet.jpg', 
        width: 1200,
        height: 630,
        alt: 'Space Field Logistics Operations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function LogisticsPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <LogisticsSection />
    </main>
  );
}