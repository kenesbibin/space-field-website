import React from 'react';
import type { Metadata } from 'next';
import InspectionSolutionsSection from '@/components/InspectionSolutionsSection';

export const metadata: Metadata = {
  title: 'Inspection Software for Construction, Fire & Fleet | SpaceCapture',
  description:
    'Launch site inspection apps, building inspection software, fire extinguisher inspection software, equipment inspection software, and roof inspection templates in one platform.',
  keywords: [
    'inspection app',
    'site inspection app',
    'site inspection software',
    'quality inspection software',
    'building inspection software',
    'construction inspection software',
    'construction site inspection software',
    'equipment inspection software',
    'equipment inspection app',
    'fire extinguisher inspection software',
    'fire extinguisher inspection app',
    'fire protection inspection software',
    'roof inspection software',
    'roof inspection report template free',
    'roof inspection report software',
    'building inspection apps australia',
    'driver vehicle inspection report app',
    'car inspection app',
    'property inspection template',
    'property inspection report template',
    'inspection form builder',
    'inspection forms',
    'offline forms app'
  ],
  alternates: {
    canonical: '/solutions/inspection-software',
  },
};

export default function InspectionSoftwarePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <InspectionSolutionsSection />
    </main>
  );
}
