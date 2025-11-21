import DemoRequest from '@/components/DemoRequest';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Demo - Space Field',
  description: 'Schedule a personalized demo of Space Field, the ultimate mobile solution for field operations in construction, maintenance, and inspection sectors.',
  alternates: {
    canonical: '/request-a-demo',
  },
};

export default function RequestDemoPage() {
  return <DemoRequest />;
}