import React from 'react';
import type { Metadata } from 'next';
import UtilitiesSection from '@/components/UtilitiesSection';


// SEO Metadata
export const metadata: Metadata = {
  title: 'Utility Field Management Software | Space Field',
  description: 'Modernize utility operations with Space Field. Manage grid inspections, smart meter deployments, and outage response with our offline-capable mobile app.',
  keywords: ['utility software', 'grid maintenance', 'outage management', 'smart meter deployment', 'field service', 'Space Field'],
  alternates: {
    canonical: 'https://spaceaiapp.com/industries/utilities',
  },
  openGraph: {
    title: 'Utility Field Management Software | Space Field',
    description: 'Ensure grid reliability and workforce safety with digital utility operations.',
    url: 'https://spaceaiapp.com/industries/utilities',
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
      <UtilitiesSection />
    </main>
  );
}