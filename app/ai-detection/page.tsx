import React from 'react';
import type { Metadata } from 'next';
import AiDetectionSection from '@/components/AiDectectionSection';
import CallToActionSection from '@/components/CallToAction';


import { SolutionDetails } from '@/components/templates/SolutionDetails';
import { SOLUTIONS_DATA } from '@/lib/seo-data'; // Adjust path if needed

// SEO Metadata
export const metadata: Metadata = {
  title: 'AI Field Detection & Analysis | SpaceCapture',
  description: 'Leverage AI to automatically analyze inspection photos, detect defects, and generate structured field reports instantly. Reduce manual data entry by 80%.',
  keywords: ['AI inspection', 'computer vision', 'automated defect detection', 'ocr field data', 'asset recognition', 'SpaceCapture'],
  alternates: {
    canonical: 'https://spacecapture.ai/ai-detection',
  },
  openGraph: {
    title: 'AI Field Detection | SpaceCapture',
    description: 'Automate your field reporting with AI-powered image analysis.',
    url: 'https://spacecapture.ai/ai-detection',
    siteName: 'SpaceCapture',
    locale: 'en_US',
    type: 'website',
  },
};

export default function AiDetectionPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <AiDetectionSection />
      <SolutionDetails data={SOLUTIONS_DATA['ai-detection']} />
      <CallToActionSection/>
    </main>
  );
}