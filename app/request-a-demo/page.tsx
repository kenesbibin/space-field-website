import DemoRequest from '@/components/DemoRequest';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Demo - SPACE CAPTURE',
  description: 'Schedule a personalized demo of SPACE CAPTURE, the ultimate mobile solution for field operations in construction, maintenance, and inspection sectors.',
  alternates: {
    canonical: 'https://spacecapture.ai/request-a-demo',
  },
};

export default function RequestDemoPage() {
  return <DemoRequest />;
}


