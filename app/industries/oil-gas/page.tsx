import React from 'react';
import type { Metadata } from 'next';
import OilGasSection from '@/components/OilGasSection';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { IndustryDetails } from '@/components/templates/IndustryDetails';
import { INDUSTRIES_DATA } from '@/lib/seo-data';


// SEO Metadata
export const metadata: Metadata = {
  title: 'Oil & Gas Field Management Software | Space Field',
  description: 'Maximize uptime and safety in Oil & Gas operations. Space Field provides offline-capable mobile solutions for rig inspections, pipeline monitoring, and HSE compliance.',
  keywords: ['oil and gas software', 'HSE compliance', 'pipeline monitoring', 'rig inspection app', 'field operations', 'Space Field'],
  alternates: {
    canonical: 'https://spaceaiapp.com/industries/oil-gas',
  },
  openGraph: {
    title: 'Oil & Gas Field Management Software | Space Field',
    description: 'Ensure asset integrity and workforce safety with digital field operations.',
    url: 'https://spaceaiapp.com/industries/oil-gas',
    siteName: 'Space Field',
    images: [
      {
        url: '/images/oilgas.jpg', 
        width: 1200,
        height: 630,
        alt: 'Space Field Oil & Gas Operations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function OilGasPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Add Breadcrumbs at the top, with some padding for the fixed navbar */}
      <div className="container mx-auto max-w-[1400px] px-4 pt-24 pb-2">
        <Breadcrumbs 
          items={[
            { label: 'Industries', href: '#' },
            { label: 'Oil & Gas', href: '/industries/oil-gas' }
          ]} 
        />
      </div>
      
      <OilGasSection />
      <IndustryDetails data={INDUSTRIES_DATA['oil-gas']} />
    </main>
  );
}