import DemoRequest from '@/components/DemoRequest';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Demo - SPACE CAPTURE',
  description: 'Transform field data into actionable intelligence. Real-time dashboards, custom PDF reporting, and automated analytics for smarter decisions.',
  alternates: {
    canonical: '/request-a-demo',
  },
};

import { Suspense } from 'react';

export default function RequestDemoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <DemoRequest />
    </Suspense>
  );
}


