import React from 'react';
import type { Metadata } from 'next';
import DataCollectionSection from '@/components/DataCollectionSection';

export const metadata: Metadata = {
  title: 'Data Collection & Feature Request Software | SpaceCapture',
  description:
    'Replace Fulcrum app workflows, deploy field data collection apps, restaurant inventory apps, HOA apps, and feature request management in one platform.',
  keywords: [
    'fulcrum app',
    'fulcrum data collection',
    'fulcrum pricing',
    'data collection programs',
    'data capture app',
    'data entry apps',
    'offline forms app',
    'software to collect data',
    'customer data collection software',
    'restaurant inventory app free',
    'restaurant food inventory app',
    'free restaurant inventory app',
    'hoa app',
    'portable toilet software',
    'process server apps',
    'feature request software',
    'feature request tool',
    'feature request management software',
    'feature request management'
  ],
  alternates: {
    canonical: '/solutions/data-collection',
  },
};

export default function DataCollectionPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <DataCollectionSection />
    </main>
  );
}
