import React from 'react';
import type { Metadata } from 'next';
import CallToActionSection from '@/components/CallToAction';
import IntegrationsSection from '@/components/IntegrationSection';


// SEO Metadata
export const metadata: Metadata = {
  title: 'Developer Integrations & AI Agents | Space Capture',
  description: 'Extend Space Capture with powerful developer tools. Connect field data to your stack via Webhooks, APIs, and autonomous AI Agent integrations.',
  keywords: ['webhooks', 'api integration', 'ai agents', 'field data automation', 'developer tools', 'Space Capture'],
  alternates: {
    canonical: 'https://spacecapture.ai/integrations',
  },
  openGraph: {
    title: 'Developer Integrations | Space Capture',
    description: 'Connect your field ops with Webhooks and AI Agents.',
    url: 'https://spacecapture.ai/integrations',
    siteName: 'Space Capture',
    locale: 'en_US',
    type: 'website',
  },
};

export default function IntegrationsPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <IntegrationsSection />
      <CallToActionSection/>
    </main>
  );
}