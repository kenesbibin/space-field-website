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
  title: 'Civil Construction Software for Infrastructure & Heavy Civil',
  description:
    'Field software for civil construction, heavy civil, and infrastructure projects. Road, bridge, and utility inspections with offline mobile capture, AI defect detection, and audit-ready reports.',
  keywords: [
    'civil construction',
    'civil construction software',
    'civil construction contractor',
    'civil construction project manager',
    'civil construction projects',
    'civils companies',
    'civils contractors',
    'civils in construction',
    'heavy civil construction companies',
    'heavy civil construction companies near me',
    'heavy civil contractor',
    'heavy civil infrastructure',
    'heavy civil projects',
    'heavy construction companies',
    'heavy construction projects',
    'heavy industrial construction companies',
    'industrial building contractor',
    'industrial construction companies',
    'industrial civil contractors',
    'infrastructure contractors',
    'infrastructure construction',
    'road construction software',
    'bridge inspection software',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/civil-construction-software',
  },
  openGraph: {
    type: 'website',
    title: 'Civil Construction Software | SpaceCapture',
    description:
      'Field software for civil construction, heavy civil, and infrastructure projects. Road, bridge, and utility inspections with offline mobile capture, AI defect detection, and audit-ready reports.',
    url: 'https://spacecapture.ai/civil-construction-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is civil construction software?',
    answer:
      'Civil construction software is a digital platform that helps civil contractors and infrastructure teams plan, execute, and document work on roads, bridges, utilities, and other public-infrastructure projects. It typically includes mobile field inspections, daily reports, safety compliance, and project management.',
  },
  {
    question: 'How is civil construction different from building construction?',
    answer:
      'Civil construction focuses on infrastructure (roads, bridges, water, sewer, utilities) while building construction focuses on vertical structures (homes, offices, retail). Civil projects have stricter DOT and municipal compliance requirements, longer durations, and different inspection protocols.',
  },
  {
    question: 'Does it work for heavy civil contractors?',
    answer:
      'Yes. Pre-built templates for earthwork, paving, structures, drainage, and utilities. Multi-crew daily reports and equipment-hour tracking included.',
  },
  {
    question: 'Can I capture field inspections offline?',
    answer:
      'Yes. The mobile app works fully offline — essential for remote job sites without cellular coverage. Sync when connectivity returns.',
  },
  {
    question: 'Does it integrate with DOT and municipal reporting?',
    answer:
      'Yes. Custom forms for state-specific DOTs (Caltrans, TxDOT, FDOT, etc.) and municipal inspectors can be configured. Daily reports auto-format per agency spec.',
  },
  {
    question: 'How is AI used in civil construction?',
    answer:
      'AI defect detection flags cracks, spalling, exposed rebar, and other common infrastructure defects on site photos. AI also validates progress against the schedule by comparing site photos day-over-day.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Civil Construction Software',
  description:
    'Field software for civil construction, heavy civil, and infrastructure projects. Road, bridge, and utility inspections with offline mobile capture, AI defect detection, and audit-ready reports.',
  url: 'https://spacecapture.ai/civil-construction-software',
  serviceType: 'Civil Construction Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/civil-construction-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Civil Construction Software for Heavy Civil & Infrastructure"
      subtitle="Field software purpose-built for civil contractors and infrastructure teams. Road, bridge, and utility inspections with offline mobile capture, AI defect detection, and audit-ready reports."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Civil Construction Software?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Civil construction software is a digital platform that helps civil
          contractors, DOTs, and infrastructure teams plan, execute, and
          document work on roads, bridges, water systems, sewers, and other
          public-infrastructure projects. It typically combines mobile field
          inspections, daily reports, safety compliance, project scheduling,
          and equipment tracking in one platform.
        </p>
      </div>

      <h2>Capabilities for Civil & Heavy Civil Contractors</h2>
      <ul className="grid md:grid-cols-2 gap-4 my-8">
        {[
          'Mobile field inspections (paving, structures, drainage, utilities)',
          'AI defect detection on infrastructure photos',
          'Multi-crew daily reports with weather and equipment hours',
          'DOT-compliant daily report templates (state-configurable)',
          'Safety observations, toolbox talks, and incident reporting',
          'Quantity and progress tracking per bid item',
          'Subcontractor coordination (electrical, mechanical, etc.)',
          'Equipment and material tracking with QR/barcode',
          'Stormwater and erosion control inspections',
          'Right-of-way and utility-locate checks',
          'As-built photo records and geo-tagged evidence',
          'Offline capture in remote areas without coverage',
          'RFI and submittal workflows',
          'Owner and municipality portal access',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
            <span className="text-slate-700 font-medium">{item}</span>
          </li>
        ))}
      </ul>

      <h2>Project Types We Support</h2>
      <ul className="list-disc pl-6 space-y-2 mb-12 marker:text-indigo-600">
        <li>Highway and road construction</li>
        <li>Bridge construction and rehabilitation</li>
        <li>Water and wastewater infrastructure</li>
        <li>Stormwater and drainage systems</li>
        <li>Utility installation (gas, electric, telecom)</li>
        <li>Earthwork and grading</li>
        <li>Rail and transit infrastructure</li>
        <li>Airport and port infrastructure</li>
        <li>Site development for buildings</li>
      </ul>

      <ComparisonTable
        title="SpaceCapture vs Paper-Based Civil Inspections"
        features={[
          {
            feature: 'Field inspection time',
            spaceCapture: 'Up to 50% faster',
            competitors: 'Baseline',
          },
          {
            feature: 'DOT reporting',
            spaceCapture: 'Auto-formatted, audit-ready',
            competitors: 'Manual transcription',
          },
          {
            feature: 'Defect detection',
            spaceCapture: 'AI-assisted',
            competitors: 'Manual review only',
          },
          {
            feature: 'Offline support',
            spaceCapture: 'Full offline + sync',
            competitors: 'None',
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
