import React from 'react';
import type { Metadata } from 'next';
import ManufacturingSection from '@/components/ManufacturingSection';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { IndustryDetails } from '@/components/templates/IndustryDetails';
import { INDUSTRIES_DATA } from '@/lib/seo-data';


// SEO Metadata
export const metadata: Metadata = {
  title: 'Manufacturing Field Management Software | Space Field',
  description: 'Digitize manufacturing operations with Space Field. Streamline equipment maintenance, quality control inspections, and shop floor management with our mobile app.',
  keywords: ['manufacturing software', 'preventive maintenance', 'quality control', 'shop floor management', 'work order app', 'Space Field'],
  alternates: {
    canonical: 'https://spacecapture.ai/industries/manufacturing',
  },
  openGraph: {
    title: 'Manufacturing Field Management Software | Space Field',
    description: 'Optimize production workflows with digital inspections and asset tracking.',
    url: 'https://spacecapture.ai/industries/manufacturing',
    siteName: 'Space Field',
    images: [
      {
        url: '/images/manufac.jpg', 
        width: 1200,
        height: 630,
        alt: 'Space Field Manufacturing Operations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function ManufacturingPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="container mx-auto max-w-[1400px] px-4 pt-24 pb-2">
         <Breadcrumbs 
          items={[
            { label: 'Industries', href: '#' },
            { label: 'Manufacturing', href: '/industries/manufacturing' }
          ]} 
        />
      </div>
      <ManufacturingSection />
      <IndustryDetails data={INDUSTRIES_DATA['manufacturing']} />
    </main>
  );
}