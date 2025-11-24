import React from 'react';
import type { Metadata } from 'next';
import ManufacturingSection from '@/components/ManufacturingSection';

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
      <ManufacturingSection />
    </main>
  );
}