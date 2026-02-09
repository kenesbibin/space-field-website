import React from 'react';
import type { Metadata } from 'next';
import TelecommunicationSection from '@/components/TelecommunicationSection';

import { IndustryDetails } from '@/components/templates/IndustryDetails';
import { INDUSTRIES_DATA } from '@/lib/seo-data';


// SEO Metadata
export const metadata: Metadata = {
  title: 'Telecommunication Field Management Software | Space Field',
  description: 'Manage telecom infrastructure, fiber deployment, and tower maintenance with Space Field. The ultimate offline-capable app for telecom field technicians.',
  keywords: ['telecom software', 'tower inspection', 'fiber deployment', 'field service management', '5G rollout', 'Space Field'],
  alternates: {
    canonical: 'https://spacecapture.ai/industries/telecommunication',
  },
  openGraph: {
    title: 'Telecommunication Field Management Software | Space Field',
    description: 'Streamline telecom operations with real-time dispatch and asset tracking.',
    url: 'https://spacecapture.ai/industries/telecommunication',
    siteName: 'Space Field',
    images: [
      {
        url: '/images/tele.jpg', 
        width: 1200,
        height: 630, 
        alt: 'Space Field Telecom Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function TelecommunicationPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="container mx-auto max-w-[1400px] px-4 pt-4 pb-2">

      </div>
      <TelecommunicationSection />
      <IndustryDetails data={INDUSTRIES_DATA['telecommunications']} />
    </main>
  );
}