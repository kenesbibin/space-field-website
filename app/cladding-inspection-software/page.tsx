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
  title: 'Cladding Inspection Software for Facade & Wall Systems',
  description:
    'Field software for cladding, facade, and wall-system inspections. Mobile capture, AI defect detection, and audit-ready reports for high-rise and low-rise buildings.',
  keywords: [
    'cladding inspection',
    'cladding inspections',
    'cladding in construction',
    'cladding in building construction',
    'cladding for buildings',
    'clad construction',
    'cladding inspection software',
    'facade inspection',
    'facade inspection software',
    'wall cladding inspection',
    'building facade inspection',
    'high rise cladding inspection',
    'rainscreen cladding inspection',
    'EIFS inspection',
    'stucco inspection',
    'brick veneer inspection',
    'curtain wall inspection',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/cladding-inspection-software',
  },
  openGraph: {
    type: 'website',
    title: 'Cladding Inspection Software | SpaceCapture',
    description:
      'Field software for cladding, facade, and wall-system inspections. Mobile capture, AI defect detection, and audit-ready reports.',
    url: 'https://spacecapture.ai/cladding-inspection-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is cladding inspection software?',
    answer:
      'Cladding inspection software is a digital platform that helps facade engineers, building inspectors, and cladding contractors document the condition of a building envelope. It supports high-rise and low-rise inspections of EIFS, stucco, brick veneer, curtain wall, rainscreen, and other cladding systems.',
  },
  {
    question: 'Why is cladding inspection important?',
    answer:
      'Defective cladding has been the cause of major building fires (e.g. Grenfell Tower) and water ingress. Many jurisdictions now require periodic facade inspections of mid- and high-rise buildings. SpaceCapture helps inspectors document condition consistently, with photo evidence that stands up in court.',
  },
  {
    question: 'Can it handle high-rise inspections?',
    answer:
      'Yes. Combine rope-access inspector photos, drone imagery, and ground-level photos in a single inspection record. Pin findings to floor plans or facade elevations.',
  },
  {
    question: 'Does it detect specific defects like cracking or delamination?',
    answer:
      'Yes. AI is trained to flag cracks, spalling, delamination, water staining, sealant failure, and other common cladding defects. Severity is auto-rated.',
  },
  {
    question: 'Can I generate a court-ready report?',
    answer:
      'Yes. Export a signed PDF report with photo evidence, location pins, and inspector credentials. Reports are tamper-evident and timestamped.',
  },
  {
    question: 'Does it work for new construction QA/QC?',
    answer:
      'Yes. Use SpaceCapture during construction to verify cladding installation meets design specs. Capture progress and sign off each elevation.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Cladding Inspection Software',
  description:
    'Field software for cladding, facade, and wall-system inspections. Mobile capture, AI defect detection, and audit-ready reports.',
  url: 'https://spacecapture.ai/cladding-inspection-software',
  serviceType: 'Cladding Inspection Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/cladding-inspection-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Cladding Inspection Software for Facade Engineers"
      subtitle="Field software for cladding, facade, and wall-system inspections. Mobile capture, AI defect detection, and audit-ready reports for high-rise and low-rise buildings."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Cladding Inspection?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Cladding inspection is the systematic documentation of a
          building's external envelope — including EIFS, stucco, brick
          veneer, curtain wall, rainscreen, metal panel, and other
          cladding systems. It is used both during construction (QA/QC)
          and as part of periodic facade condition assessments required
          by many jurisdictions.
        </p>
      </div>

      <h2>Why Cladding Inspectors Choose SpaceCapture</h2>
      <p>
        Cladding inspection requires photo evidence that is geo-tagged,
        elevation-pinned, and defensible in court. SpaceCapture gives you
        the tools to capture that evidence consistently across inspectors
        and projects, with AI flagging likely defects in real time.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Capabilities
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Mobile capture with photo annotation',
            'AI defect detection (cracks, spalling, delamination, staining, sealant failure)',
            'Pin findings to facade elevations or floor plans',
            'Combine drone, rope-access, and ground-level imagery',
            'Severity auto-rating with manual override',
            'Pre-built templates for EIFS, stucco, brick, curtain wall, rainscreen',
            'Generate court-ready PDF reports',
            'Tamper-evident timestamps and geo-tags',
            'Multi-inspector coordination for high-rise projects',
            'Multi-year inspection history per building',
            'Public API for BIM / FM integration',
            'Offline capture in basements and remote sites',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <ComparisonTable
        title="SpaceCapture vs Paper Facade Reports"
        features={[
          {
            feature: 'Photo organization',
            spaceCapture: 'By elevation, by defect type',
            competitors: 'By camera roll',
          },
          {
            feature: 'AI defect detection',
            spaceCapture: 'Built in',
            competitors: 'None',
          },
          {
            feature: 'Report time per facade',
            spaceCapture: 'Hours, not days',
            competitors: 'Days of manual work',
          },
          {
            feature: 'Defensibility',
            spaceCapture: 'Tamper-evident timestamps',
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
