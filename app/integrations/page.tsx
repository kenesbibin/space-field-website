import React from 'react';
import type { Metadata } from 'next';
import CallToActionSection from '@/components/CallToAction';
import IntegrationsSection from '@/components/IntegrationSection';
import StructuredData from '@/components/seo/StructuredData';
import { getServiceSchema } from '@/components/seo/ServiceSchema';
import {
  buildBreadcrumbsFromPath,
  getBreadcrumbListSchema,
} from '@/components/seo/BreadcrumbListSchema';


// SEO Metadata
export const metadata: Metadata = {
  title: 'Developer Integrations & AI Agents | SpaceCapture',
  description: 'Extend SpaceCapture with powerful developer tools. Connect field data to your stack via Webhooks, APIs, and autonomous AI Agent integrations.',
  keywords: ['webhooks', 'api integration', 'ai agents', 'field data automation', 'developer tools', 'SpaceCapture'],
  alternates: {
    canonical: 'https://spacecapture.ai/integrations',
  },
  openGraph: {
    title: 'Developer Integrations | SpaceCapture',
    description: 'Connect your field ops with Webhooks and AI Agents.',
    url: 'https://spacecapture.ai/integrations',
    siteName: 'SpaceCapture',
    locale: 'en_US',
    type: 'website',
  },
};

const serviceSchema = getServiceSchema({
  name: 'Developer Integrations & AI Agents',
  description:
    'Extend SpaceCapture with powerful developer tools. Connect field data to your stack via Webhooks, APIs, and autonomous AI Agent integrations.',
  url: 'https://spacecapture.ai/integrations',
  serviceType: 'Developer Integrations',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/integrations')
);

export default function IntegrationsPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <IntegrationsSection />
      <CallToActionSection/>

      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@graph': [serviceSchema, breadcrumbSchema],
        }}
      />
    </main>
  );
}