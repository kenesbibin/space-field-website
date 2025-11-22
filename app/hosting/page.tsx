import React from 'react';
import type { Metadata } from 'next';
import CallToActionSection from '@/components/CallToAction';
import HostingSection from '@/components/HostingSection';


// SEO Metadata
export const metadata: Metadata = {
  title: 'Hosting & Deployment Options | Space Capture',
  description: 'Choose from SaaS, Private Cloud, or On-Premise self-hosting. Space Capture offers flexible deployment models to meet enterprise security and data residency needs.',
  keywords: ['saas hosting', 'on-premise software', 'private cloud', 'data residency', 'self-hosted', 'enterprise security', 'Space Capture'],
  alternates: {
    canonical: 'https://spacecapture.ai/hosting',
  },
  openGraph: {
    title: 'Space Capture Hosting Options',
    description: 'Secure deployment: Cloud, Private, or On-Prem.',
    url: 'https://spacecapture.ai/hosting',
    siteName: 'Space Capture',
    locale: 'en_US',
    type: 'website',
  },
};

export default function HostingPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <HostingSection />
      <CallToActionSection/>
    </main>
  );
}