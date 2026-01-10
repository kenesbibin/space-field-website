import React from 'react';
import type { Metadata } from 'next';
import RealEstateSection from '@/components/RealEstateSection';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { IndustryDetails } from '@/components/templates/IndustryDetails';
import { INDUSTRIES_DATA } from '@/lib/seo-data';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Real Estate Property Management Software | Space Field',
  description: 'Streamline property inspections, tenant moved-ins/outs, and maintenance requests with AI-powered field software.',
  keywords: ['property management software', 'real estate inspections', 'tenant turnover', 'field maintenance app', 'Space Field'],
  alternates: {
    canonical: 'https://spaceaiapp.com/industries/real-estate',
  },
  openGraph: {
    title: 'Real Estate Property Management Software | Space Field',
    description: 'Manage portfolios with precision. From acquisition due diligence to daily maintenance.',
    url: 'https://spaceaiapp.com/industries/real-estate',
    siteName: 'Space Field',
    images: [
      {
        url: '/images/real-estate.jpg', 
        width: 1200,
        height: 630, 
        alt: 'Space Field Real Estate Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RealEstatePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="container mx-auto max-w-[1400px] px-4 pt-24 pb-2">
        <Breadcrumbs 
          items={[
            { label: 'Industries', href: '#' },
            { label: 'Real Estate', href: '/industries/real-estate' }
          ]} 
        />
      </div>
      <RealEstateSection />
      <IndustryDetails data={INDUSTRIES_DATA['real-estate']} />
    </main>
  );
}
