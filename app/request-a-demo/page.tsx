import DemoRequest from '@/components/DemoRequest';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Demo - SPACE CAPTURE',
  description: 'Schedule a personalized demo of SPACE CAPTURE, the ultimate mobile solution for field operations in construction, maintenance, and inspection sectors.',
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


