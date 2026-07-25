import React from 'react';
import type { Metadata } from 'next';
import CallToActionSection from '@/components/CallToAction';
import EngagementFlowsSection from '@/components/EngagementFLowSection';



export const metadata: Metadata = {
  title: 'Automated Engagement Flows | SpaceCapture',
  description: 'Automate field operations with SpaceCaptures visual workflow builder. Create triggers, route tasks, and send notifications using real-time data.',
  keywords: ['workflow automation', 'field operations logic', 'if this then that', 'process automation', 'automated dispatch', 'SpaceCapture'],
  alternates: {
    canonical: 'https://spacecapture.ai/engagement-flows',
  },
  openGraph: {
    title: 'Automated Engagement Flows | SpaceCapture',
    description: 'Design powerful automation logic without code.',
    url: 'https://spacecapture.ai/engagement-flows',
    siteName: 'SpaceCapture',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EngagementFlowsPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <EngagementFlowsSection />
      <CallToActionSection/>
    </main>
  );
}