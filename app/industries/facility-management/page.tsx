import React from 'react';
import type { Metadata } from 'next';
import FacilityManagementSection from '@/components/FacilityManagementSection';


// SEO Metadata
export const metadata: Metadata = {
  title: 'Facility Management Software | Space Field',
  description: 'Streamline building operations with Space Field. Manage work orders, preventive maintenance, and asset tracking with our all-in-one facility management app.',
  keywords: ['facility management software', 'work order system', 'preventive maintenance', 'building operations', 'CMMS', 'Space Field'],
  alternates: {
    canonical: 'https://spaceaiapp.com/industries/facility-management',
  },
  openGraph: {
    title: 'Facility Management Software | Space Field',
    description: 'Optimize building performance and tenant satisfaction with digital facility operations.',
    url: 'https://spaceaiapp.com/industries/facility-management',
    siteName: 'Space Field',
    images: [
      {
        url: '/images/facility.jpg', 
        width: 1200,
        height: 630,
        alt: 'Space Field Facility Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function FacilityManagementPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <FacilityManagementSection />
    </main>
  );
}