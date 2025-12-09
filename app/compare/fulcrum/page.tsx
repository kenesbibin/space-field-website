import React from 'react';
import type { Metadata } from 'next';
import FulcrumComparisonSection from '@/components/FulcrumComparisonSection';

export const metadata: Metadata = {
  title: 'Fulcrum App Alternative | SpaceCapture vs Fulcrum',
  description:
    'Compare SpaceCapture with the Fulcrum app. Import Fulcrum data collection projects, match Fulcrum pricing, and extend workflows with Azure AD SSO.',
  keywords: [
    'fulcrum app',
    'fulcrum data collection',
    'fulcrum pricing',
    'fulcrum app alternative',
    'azure ad sso',
    'inspection app',
    'data collection programs'
  ],
  alternates: {
    canonical: '/compare/fulcrum',
  },
};

export default function FulcrumComparePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <FulcrumComparisonSection />
    </main>
  );
}
