import React from 'react';
import type { Metadata } from 'next';
import CallToActionSection from '@/components/CallToAction';
import EngagementFlowsSection from '@/components/EngagementFLowSection';



export const metadata: Metadata = {
  title: 'Automated Engagement Flows | Space Capture',
  description: 'Automate your field operations with Space Capture’s visual workflow builder. Create custom triggers, route tasks, and send notifications based on real-time data.',
  keywords: ['workflow automation', 'field operations logic', 'if this then that', 'process automation', 'automated dispatch', 'Space Capture'],
  alternates: {
    canonical: 'https://spacecapture.ai/engagement-flows',
  },
  openGraph: {
    title: 'Automated Engagement Flows | Space Capture',
    description: 'Design powerful automation logic without code.',
    url: 'https://spacecapture.ai/engagement-flows',
    siteName: 'Space Capture',
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