import React from 'react';
import type { Metadata } from 'next';
import AiDetectionSection from '@/components/AiDectectionSection';
import CallToActionSection from '@/components/CallToAction';


// SEO Metadata
export const metadata: Metadata = {
  title: 'AI Field Detection & Analysis | Space Capture',
  description: 'Leverage AI to automatically analyze inspection photos, detect defects, and generate structured field reports instantly. Reduce manual data entry by 80%.',
  keywords: ['AI inspection', 'computer vision', 'automated defect detection', 'ocr field data', 'asset recognition', 'Space Capture'],
  alternates: {
    canonical: 'https://spacecapture.ai/ai-detection',
  },
  openGraph: {
    title: 'AI Field Detection | Space Capture',
    description: 'Automate your field reporting with AI-powered image analysis.',
    url: 'https://spacecapture.ai/ai-detection',
    siteName: 'Space Capture',
    locale: 'en_US',
    type: 'website',
  },
};

export default function AiDetectionPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <AiDetectionSection />
      <CallToActionSection/>
    </main>
  );
}