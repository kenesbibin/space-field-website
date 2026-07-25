import React from 'react';
import type { Metadata } from 'next';
import CallToActionSection from '@/components/CallToAction';
import HostingSection from '@/components/HostingSection';


// SEO Metadata
export const metadata: Metadata = {
  title: 'Hosting & Deployment Options | SpaceCapture',
  description: 'Choose from SaaS, Private Cloud, or On-Premise hosting. SpaceCapture offers flexible deployment models for enterprise security and data residency.',
  keywords: ['saas hosting', 'on-premise software', 'private cloud', 'data residency', 'self-hosted', 'enterprise security', 'SpaceCapture'],
  alternates: {
    canonical: 'https://spacecapture.ai/hosting',
  },
  openGraph: {
    title: 'SpaceCapture Hosting Options',
    description: 'Secure deployment: Cloud, Private, or On-Prem.',
    url: 'https://spacecapture.ai/hosting',
    siteName: 'SpaceCapture',
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