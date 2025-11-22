import React from 'react';
import type { Metadata } from 'next';
import VisualFormBuilderSection from '@/components/VisualFormBuilderSection';
import CallToActionSection from '@/components/CallToAction';


// SEO Metadata
export const metadata: Metadata = {
  title: 'No-Code Visual Form Builder | Space Capture',
  description: 'Build complex field data forms in minutes without coding. Use Space Capture’s drag-and-drop editor and library of operational templates for safety, quality, and maintenance.',
  keywords: ['form builder', 'no code app builder', 'field data collection', 'operational templates', 'digital forms', 'Space Capture'],
  alternates: {
    canonical: 'https://spacecapture.ai/visual-form-builder',
  },
  openGraph: {
    title: 'Visual Form Builder | Space Capture',
    description: 'Create powerful mobile forms with zero coding.',
    url: 'https://spacecapture.ai/visual-form-builder',
    siteName: 'Space Capture',
    locale: 'en_US',
    type: 'website',
  },
};

export default function VisualFormBuilderPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <VisualFormBuilderSection/>
      <CallToActionSection/>
    </main>
  );
}