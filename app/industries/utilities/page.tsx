import React from 'react';
import type { Metadata } from 'next';
import UtilitiesSection from '@/components/UtilitiesSection';

import { IndustryDetails } from '@/components/templates/IndustryDetails';
import { INDUSTRIES_DATA } from '@/lib/seo-data';



// SEO Metadata
export const metadata: Metadata = {
  title: 'Utility Field Management Software | SpaceCapture',
  description: 'Modernize utility operations with Space Field. Manage grid inspections, smart meter deployments, and outage response with our offline-capable mobile app.',
  keywords: ['utility software', 'grid maintenance', 'outage management', 'smart meter deployment', 'field service', 'Space Field'],
  alternates: {
    canonical: 'https://spacecapture.ai/industries/utilities',
  },
  openGraph: {
    title: 'Utility Field Management Software | SpaceCapture',
    description: 'Ensure grid reliability and workforce safety with digital utility operations.',
    url: 'https://spacecapture.ai/industries/utilities',
    siteName: 'Space Field',
    images: [
      {
        url: '/images/utilities.jpg', 
        width: 1200,
        height: 630,
        alt: 'Space Field Utility Operations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function UtilitiesPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="container mx-auto max-w-[1400px] px-4 pt-4 pb-2">

      </div>
      <UtilitiesSection />
      <IndustryDetails data={INDUSTRIES_DATA['utilities-energy']} />
    </main>
  );
}