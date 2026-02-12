import React from 'react';
import type { Metadata } from 'next';
import HvacPlumbingSection from '@/components/HvacPlumbingSection';

import { IndustryDetails } from '@/components/templates/IndustryDetails';
import { INDUSTRIES_DATA } from '@/lib/seo-data';



// SEO Metadata
export const metadata: Metadata = {
  title: 'HVAC & Plumbing Field Software | Space Field',
  description: 'Streamline HVAC and plumbing service calls with Space Field. Manage dispatching, recurring maintenance, and digital invoicing with our mobile app.',
  keywords: ['hvac software', 'plumbing software', 'field service management', 'dispatch app', 'maintenance contracts', 'Space Field'],
  alternates: {
    canonical: 'https://spacecapture.ai/industries/hvac',
  },
  openGraph: {
    title: 'HVAC & Plumbing Field Software | Space Field',
    description: 'Boost technician efficiency and customer satisfaction with digital workflows.',
    url: 'https://spacecapture.ai/industries/hvac',
    siteName: 'Space Field',
    images: [
      {
        url: '/images/plumbing.jpg', 
        width: 1200,
        height: 630,
        alt: 'Space Field HVAC & Plumbing Operations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function HvacPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="container mx-auto max-w-[1400px] px-4 pt-4 pb-2">

      </div>
      <HvacPlumbingSection />
      <IndustryDetails data={INDUSTRIES_DATA['hvac-plumbing']} />
    </main>
  );
}