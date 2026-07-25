import React from 'react';
import type { Metadata } from 'next';
import CallToActionSection from '@/components/CallToAction';
import ReportsSection from '@/components/ReportSection';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Deep Insights & Analytics | SpaceCapture',
  description: 'Transform field data into actionable intelligence with SpaceCapture. Real-time dashboards, custom PDF reporting, and automated analytics for smarter decisions.',
  keywords: ['field analytics', 'reporting dashboard', 'construction data', 'custom reports', 'business intelligence', 'SpaceCapture'],
  alternates: {
    canonical: 'https://spacecapture.ai/reports',
  },
  openGraph: {
    title: 'Deep Insights & Analytics | SpaceCapture',
    description: 'Visual dashboards and automated reporting for field operations.',
    url: 'https://spacecapture.ai/reports',
    siteName: 'SpaceCapture',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ReportsPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <ReportsSection />
      <CallToActionSection/>
    </main>
  );
}