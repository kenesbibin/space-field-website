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
  title: 'Construction & Field Inspections | The SpaceCapture Platform',
  description:
    'The all-in-one platform for construction and field inspections. AI defect detection, mobile-first inspections, daily reports, and safety compliance for every jobsite.',
  keywords: [
    'construction & field inspections',
    'construction and field inspections',
    'construction and field',
    'field and construction',
    'construction inspections',
    'field inspections',
    'construction field inspections',
    'construction field',
    'field construction',
    'field inspection',
    'construction inspection',
    'construction & building inspections',
    'construction field inspections',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/construction-and-field-inspections',
  },
  openGraph: {
    type: 'website',
    title: 'Construction & Field Inspections | SpaceCapture',
    description:
      'The all-in-one platform for construction and field inspections. AI defect detection, mobile-first inspections, daily reports, and safety compliance for every jobsite.',
    url: 'https://spacecapture.ai/construction-and-field-inspections',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What are construction and field inspections?',
    answer:
      'Construction and field inspections are the documented checks performed at a job site to verify that work meets design specs, safety regulations, and quality standards. They include pre-pour, pre-drywall, QA/QC, safety, and final inspections — and are the foundation of a successful project.',
  },
  {
    question: 'Why are field inspections important?',
    answer:
      'Field inspections catch defects, safety hazards, and deviations from the design before they become expensive rework. They also create the audit trail needed for insurance, regulatory, and contractual compliance.',
  },
  {
    question: 'How does SpaceCapture help?',
    answer:
      'SpaceCapture is the all-in-one platform for construction and field inspections. Run inspections from a phone, attach photo evidence, get AI defect detection, and produce signed reports in minutes — all from one app.',
  },
  {
    question: 'Does it work for both commercial and residential projects?',
    answer:
      'Yes. Pre-built templates for residential, commercial, civil, industrial, modular, and prefab construction.',
  },
  {
    question: 'Can my subcontractors use it?',
    answer:
      'Yes. Subcontractor seats are free, and they only see the projects and inspections you assign them.',
  },
  {
    question: 'Is it the same as field data capture?',
    answer:
      'Field data capture is a broader category that includes inspections plus other field activities. SpaceCapture does both — see our field data capture software page for details.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Construction & Field Inspections',
  description:
    'The all-in-one platform for construction and field inspections. AI defect detection, mobile-first inspections, daily reports, and safety compliance for every jobsite.',
  url: 'https://spacecapture.ai/construction-and-field-inspections',
  serviceType: 'Construction & Field Inspections',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/construction-and-field-inspections')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Construction & Field Inspections — One Platform, Every Jobsite"
      subtitle="The SpaceCapture platform for construction and field inspections. AI defect detection, mobile-first inspections, daily reports, and safety compliance for every jobsite."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          Construction & Field Inspections, Defined
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Construction and field inspections are the documented checks
          performed at a job site to verify that work meets design specs,
          safety regulations, and quality standards. They include
          pre-pour, pre-drywall, QA/QC, safety, and final inspections — and
          are the foundation of a successful construction project. Done
          well, they prevent rework, reduce disputes, and protect every
          stakeholder from surprises.
        </p>
      </div>

      <h2>Why Construction & Field Inspections Matter</h2>
      <p>
        Every construction project involves hundreds — sometimes thousands —
        of inspection events. Paper-based inspections are slow, error-prone,
        and often lost. Digital inspections produce structured, signed,
        photo-anchored records that protect every party.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          What's Included in the SpaceCapture Platform
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Mobile-first inspection capture (iOS, Android, web)',
            'AI defect detection on every site photo',
            'Daily reports with weather, manpower, and progress',
            'Pre-pour, pre-drywall, QA/QC, safety, and final templates',
            'Punch lists with photo evidence and assignment',
            'Subcontractor coordination with free sub seats',
            'Safety observations and incident reporting',
            'Drawing markup and version control',
            'Multi-party digital signatures',
            'Branded PDF reports in 60 seconds',
            'Offline-first capture in any condition',
            'Public API for integrations',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <ComparisonTable
        title="SpaceCapture vs Paper-Based Inspections"
        features={[
          {
            feature: 'Inspection time',
            spaceCapture: 'Up to 50% faster',
            competitors: 'Baseline',
          },
          {
            feature: 'Defect detection',
            spaceCapture: 'AI-assisted',
            competitors: 'Manual',
          },
          {
            feature: 'Report turnaround',
            spaceCapture: 'Same day',
            competitors: 'Days',
          },
          {
            feature: 'Dispute protection',
            spaceCapture: 'Tamper-evident records',
            competitors: 'Easy to challenge',
          },
        ]}
      />

      <div className="mb-12 mt-12">
        <h2>Related Software</h2>
        <p>
          For inspection-specific workflows, see our{' '}
          <a
            href="/construction-inspection-software"
            className="text-indigo-600 underline"
          >
            construction inspection software
          </a>{' '}
          and{' '}
          <a
            href="/field-inspection-software"
            className="text-indigo-600 underline"
          >
            field inspection software
          </a>
          . For the broader platform, see{' '}
          <a
            href="/construction-management-software"
            className="text-indigo-600 underline"
          >
            construction management software
          </a>
          .
        </p>
      </div>

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
