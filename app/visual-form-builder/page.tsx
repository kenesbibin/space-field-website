import React from 'react';
import type { Metadata } from 'next';
import VisualFormBuilderSection from '@/components/VisualFormBuilderSection';
import CallToActionSection from '@/components/CallToAction';


import { SolutionDetails } from '@/components/templates/SolutionDetails';
import { SOLUTIONS_DATA } from '@/lib/seo-data';

// SEO Metadata
export const metadata: Metadata = {
  title: 'No-Code Visual Form Builder | SpaceCapture',
  description: 'Build field data forms in minutes without coding. Use SpaceCapture�s drag-and-drop editor and templates for safety, quality, and maintenance.',
  keywords: ['form builder', 'no code app builder', 'field data collection', 'operational templates', 'digital forms', 'SpaceCapture'],
  alternates: {
    canonical: 'https://spacecapture.ai/visual-form-builder',
  },
  openGraph: {
    title: 'Visual Form Builder | SpaceCapture',
    description: 'Create powerful mobile forms with zero coding.',
    url: 'https://spacecapture.ai/visual-form-builder',
    siteName: 'SpaceCapture',
    locale: 'en_US',
    type: 'website',
  },
};

export default function VisualFormBuilderPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <VisualFormBuilderSection/>
      <SolutionDetails data={SOLUTIONS_DATA['visual-form-builder']} />
      <CallToActionSection/>
    </main>
  );
}