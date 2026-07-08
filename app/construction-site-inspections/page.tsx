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
  title: 'Construction Site Inspection Software | Site Inspection Tools',
  description:
    'Field software for construction site inspections. Daily safety walks, OSHA compliance, AI defect detection, and audit-ready reports — all from your phone.',
  keywords: [
    'construction site inspections',
    'site inspections',
    'site inspection',
    'site inspection software',
    'site inspection app',
    'site inspection services',
    'site inspector',
    'site safety inspection',
    'site safety software',
    'site safety plan',
    'site safety audit',
    'site safety training',
    'site safety officer',
    'site supervisor',
    'site supervisor software',
    'site supervisor app',
    'site engineer',
    'site engineer app',
    'site engineer software',
    'construction site management',
    'construction site management software',
    'construction site manager',
    'construction site engineer',
    'construction site supervisor',
    'construction site safety',
    'construction site safety software',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/construction-site-inspections',
  },
  openGraph: {
    type: 'website',
    title: 'Construction Site Inspection Software | SpaceCapture',
    description:
      'Field software for construction site inspections. Daily safety walks, OSHA compliance, AI defect detection, and audit-ready reports — all from your phone.',
    url: 'https://spacecapture.ai/construction-site-inspections',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is construction site inspection software?',
    answer:
      'Construction site inspection software is a digital platform that helps safety officers, site supervisors, and inspectors document daily walks, safety observations, and compliance checks. It typically includes mobile checklists, photo evidence, AI defect detection, and signed reports.',
  },
  {
    question: 'How does it support OSHA compliance?',
    answer:
      'Pre-built OSHA-aligned checklists (fall protection, PPE, scaffolding, electrical, etc.). Each item is photo-evidenced and signed. Reports are timestamped, geo-tagged, and ready for OSHA audits.',
  },
  {
    question: 'Can supervisors run daily safety walks from their phone?',
    answer:
      'Yes. Open the app, walk the site, capture observations and photos, and complete the report in under 15 minutes. The same workflow works offline.',
  },
  {
    question: 'Does it generate a daily safety report?',
    answer:
      'Yes. A daily safety report is generated automatically, summarizing observations, near-misses, and corrective actions. Email it to the project team and the safety director with one tap.',
  },
  {
    question: 'Can I track subcontractors\' safety compliance?',
    answer:
      'Yes. Subcontractor crews can complete their own pre-task safety briefings, and the system tracks completion across the project. Alerts are sent for any non-compliance.',
  },
  {
    question: 'Does it support toolbox talks?',
    answer:
      'Yes. Pre-loaded toolbox talk templates, plus the ability to add your own. Track attendance with on-device signatures.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Construction Site Inspection Software',
  description:
    'Field software for construction site inspections. Daily safety walks, OSHA compliance, AI defect detection, and audit-ready reports.',
  url: 'https://spacecapture.ai/construction-site-inspections',
  serviceType: 'Construction Site Inspection Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/construction-site-inspections')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Construction Site Inspection Software"
      subtitle="Run daily safety walks, OSHA checks, and AI-assisted site inspections from your phone. Photo evidence, e-signatures, and audit-ready reports — all in one platform."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Construction Site Inspection?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Construction site inspection is the daily or periodic walk-through
          of a job site to verify safety compliance, identify hazards, and
          document progress. It is required by OSHA and most project
          owners, and is the single most effective way to prevent incidents.
        </p>
      </div>

      <h2>Why Site Teams Choose SpaceCapture</h2>
      <p>
        Paper safety walks take 30–60 minutes and produce reports nobody
        reads. SpaceCapture cuts that to 10–15 minutes and produces a
        structured, signed, geo-tagged record that the safety director and
        the owner can actually use.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Capabilities
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Pre-built OSHA-aligned safety checklists',
            'AI hazard detection on site photos (PPE, fall risk, housekeeping)',
            'Daily safety reports with one-tap distribution',
            'Toolbox talks with attendance tracking',
            'Incident and near-miss reporting',
            'Subcontractor pre-task safety briefings',
            'Permit-to-work tracking (hot work, confined space, etc.)',
            'Equipment inspection checklists',
            'Environmental and erosion control checks',
            'Multi-site dashboards for safety directors',
            'Auto-alerts for non-compliance',
            'Offline capture in any site condition',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <ComparisonTable
        title="SpaceCapture vs Paper Safety Walks"
        features={[
          {
            feature: 'Walk time',
            spaceCapture: '10–15 min',
            competitors: '30–60 min',
          },
          {
            feature: 'Hazard detection',
            spaceCapture: 'AI-assisted',
            competitors: 'Manual only',
          },
          {
            feature: 'Distribution',
            spaceCapture: 'Auto-email to safety director',
            competitors: 'Email or drop-box',
          },
          {
            feature: 'Defensibility',
            spaceCapture: 'Geo-tagged, signed',
            competitors: 'Easy to challenge',
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
