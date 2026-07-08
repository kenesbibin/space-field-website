import React from 'react';
import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/seo/SeoLandingPage';
import { ComparisonTable } from '@/components/seo/ComparisonTable';
import { FaqSection } from '@/components/seo/FaqSection';
import StructuredData from '@/components/seo/StructuredData';
import { getServiceSchema } from '@/components/seo/ServiceSchema';
import { getFaqSchema } from '@/components/seo/FaqSchema';
import {
  buildBreadcrumbsFromPath,
  getBreadcrumbListSchema,
} from '@/components/seo/BreadcrumbListSchema';

export const metadata: Metadata = {
  title: 'Construction Robotics Software | AI for Modern Builders',
  description:
    'Field software for construction robotics, automation, and AI. Integrate drone inspections, robotic layout, and AI defect detection into your construction workflow.',
  keywords: [
    'construction robot',
    'construction robotics',
    'construction robotics software',
    'robotics in construction',
    'robotics in construction industry',
    'robotics in building construction',
    'robotics and automation in construction',
    'automation and robotics in construction',
    'use of robotics in construction',
    'robotics in construction industry',
    'robotic construction companies',
    'construction automation',
    'construction automation companies',
    'automated construction',
    'construction robot',
    'construction robotics',
    'construction technology',
    'construction innovation',
    'innovation in construction',
    'new construction technologies',
    'emerging technologies in construction',
    'digital technologies in construction',
    'construction ai',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/construction-robotics-software',
  },
  openGraph: {
    type: 'website',
    title: 'Construction Robotics Software | SpaceCapture',
    description:
      'Field software for construction robotics, automation, and AI. Integrate drone inspections, robotic layout, and AI defect detection into your construction workflow.',
    url: 'https://spacecapture.ai/construction-robotics-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is construction robotics software?',
    answer:
      'Construction robotics software is a digital platform that integrates with on-site robots — drones, automated layout systems, brick-laying robots, demolition robots, and exoskeletons — to coordinate their work, capture their data, and feed it into the broader project workflow.',
  },
  {
    question: 'What kinds of construction robots does SpaceCapture support?',
    answer:
      'We integrate with most common inspection drones (DJI, Skydio, Parrot), 360° cameras, robotic total stations, and computer-vision cameras. Talk to us about your specific hardware stack.',
  },
  {
    question: 'Does it work for 3D-printed construction?',
    answer:
      'Yes. We support 3D-printed concrete and other additive construction methods. Capture as-built scans, compare to BIM, and track print progress.',
  },
  {
    question: 'Can I run automated progress tracking?',
    answer:
      'Yes. Schedule daily drone flights, auto-ingest the imagery, run AI on the photos, and produce a progress report — all without manual intervention.',
  },
  {
    question: 'Does it integrate with BIM 360?',
    answer:
      'Yes. We can publish to and consume from BIM 360 / ACC. Bring your own BIM workflow and add SpaceCapture on top for field validation.',
  },
  {
    question: 'What about safety automation?',
    answer:
      'Yes. PPE detection on video streams, geofencing alerts, and proximity warnings to heavy equipment are all supported.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Construction Robotics Software',
  description:
    'Field software for construction robotics, automation, and AI. Integrate drone inspections, robotic layout, and AI defect detection into your construction workflow.',
  url: 'https://spacecapture.ai/construction-robotics-software',
  serviceType: 'Construction Robotics Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/construction-robotics-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Construction Robotics Software for the Modern Jobsite"
      subtitle="Integrate drones, robotic layout, AI cameras, and 3D printing into a single field workflow. Capture, validate, and report — automatically."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          Why Robotics Matters in Construction
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          The construction industry is being transformed by robotics — drones
          for surveying and inspection, robots for layout, bricklaying, and
          demolition, and AI cameras for safety monitoring. The challenge is
          integrating all of this data into the project workflow without
          fragmenting the team.
        </p>
      </div>

      <h2>What SpaceCapture Adds to Your Robotics Stack</h2>
      <p>
        SpaceCapture sits on top of your existing robotics and IoT stack.
        Drone flights, robotic total stations, AI cameras, and 3D printers
        all feed into the same platform. The platform coordinates jobs,
        captures output, runs AI analysis, and produces reports that match
        your existing project structure.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Capabilities
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Drone flight scheduling and auto-ingest (DJI, Skydio, Parrot)',
            '360° camera capture and stitching',
            'AI defect detection on drone and 360 imagery',
            'Robotic total station integration',
            '3D-printed construction as-built tracking',
            'Automated daily progress reports from drone flights',
            'PPE detection on safety camera streams',
            'Geofencing and proximity alerts',
            'BIM model comparison from robotic capture',
            'Multi-robot fleet management',
            'Public API for any robot',
            'Edge and cloud AI processing',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <ComparisonTable
        title="SpaceCapture vs Standalone Robotics Platforms"
        features={[
          {
            feature: 'Multi-robot support',
            spaceCapture: 'Yes',
            competitors: 'Often single-vendor',
          },
          {
            feature: 'Field app integration',
            spaceCapture: 'Native',
            competitors: 'Web-only',
          },
          {
            feature: 'AI defect detection',
            spaceCapture: 'Built in',
            competitors: 'Add-on',
          },
          {
            feature: 'Construction workflow integration',
            spaceCapture: 'Yes',
            competitors: 'Often siloed',
          },
        ]}
      />

      <FaqSection items={faqs} />

      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
        }}
      />
    </SeoLandingPage>
  );
}
