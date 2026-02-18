import React from 'react';
import type { Metadata } from 'next';
import LogisticsSection from '@/components/LogisticsSection';

import { IndustryDetails } from '@/components/templates/IndustryDetails';
import { INDUSTRIES_DATA } from '@/lib/seo-data';


// SEO Metadata
export const metadata: Metadata = {
  title: 'Logistics & Fleet Management Software | SpaceCapture',
  description: 'Optimize your delivery fleet with Space Field. Real-time tracking, route optimization, and digital proof of delivery (POD) for modern logistics operations.',
  keywords: ['logistics software', 'fleet management', 'proof of delivery', 'route optimization', 'delivery app', 'Space Field'],
  alternates: {
    canonical: 'https://spacecapture.ai/industries/logistics',
  },
  openGraph: {
    title: 'Logistics & Fleet Management Software | SpaceCapture',
    description: 'Drive efficiency with real-time fleet tracking and digital delivery workflows.',
    url: 'https://spacecapture.ai/industries/logistics',
    siteName: 'Space Field',
    images: [
      {
        url: '/images/fleet.webp', 
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
      <div className="container mx-auto max-w-[1400px] px-4 pt-4 pb-2">

      </div>
      <LogisticsSection />
      <IndustryDetails data={INDUSTRIES_DATA['logistics']} />
    </main>
  );
}