import CallToActionSection from '@/components/CallToAction';
import CoreFunctionsSection from '@/components/CoreFunctionSection';
import type { Metadata } from 'next';



export const metadata: Metadata = {
  title: 'Core Functions & Features | Space Capture',
  description: 'Explore the core capabilities of Space Capture: Visual Form Builder, Dynamic User Profiles, Engagement Flows, Access Control, and Deep Insights.',
  keywords: ['field data app', 'form builder', 'user profiles', 'workflow automation', 'access control', 'analytics', 'Space Capture'],
  alternates: {
    canonical: 'https://spacecapture.ai/core-functions',
  },
  openGraph: {
    title: 'Space Capture Core Features',
    description: 'Powerful tools for field data collection and management.',
    url: 'https://spacecapture.ai/core-functions',
    siteName: 'Space Capture',
    locale: 'en_US',
    type: 'website',
  },
};

export default function CoreFunctionsPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <CoreFunctionsSection />
      <CallToActionSection/>
    </main>
  );
}