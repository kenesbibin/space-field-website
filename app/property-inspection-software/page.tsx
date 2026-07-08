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
  title: 'Property Inspection Software for Real Estate Inspectors',
  description:
    'Mobile property inspection software for residential and commercial property managers. Standardize move-in, move-out, and routine property inspections with digital checklists and instant reports.',
  keywords: [
    'property inspection software',
    'property inspections',
    'property field inspections',
    'property inspection reports',
    'real estate inspection',
    'real estate inspection services',
    'real estate property inspector',
    'real estate home inspector',
    'estate inspection',
    'residential property inspection',
    'commercial property inspection',
    'rental property inspection',
    'move in inspection',
    'move out inspection',
    'property condition report',
    'landlord inspection',
    'tenant inspection',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/property-inspection-software',
  },
  openGraph: {
    type: 'website',
    title: 'Property Inspection Software | SpaceCapture',
    description:
      'Mobile property inspection software for residential and commercial property managers. Standardize inspections with digital checklists and instant reports.',
    url: 'https://spacecapture.ai/property-inspection-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is property inspection software?',
    answer:
      'Property inspection software is a mobile platform that helps landlords, property managers, real estate agents, and tenants document the condition of a property. It standardizes move-in, move-out, periodic, and post-maintenance inspections with photos, signatures, and timestamped reports.',
  },
  {
    question: 'How is it different from a home inspection tool?',
    answer:
      'Property inspection software focuses on rental and portfolio use cases (move-in/out, periodic condition reports, post-maintenance verifications) while home inspection software targets pre-purchase / pre-listing buyer-seller inspections. SpaceCapture supports both — same platform, different templates.',
  },
  {
    question: 'Can tenants complete an inspection themselves?',
    answer:
      'Yes. Send a tenant a portal link to complete a self-inspection at move-in. They can add photos, sign, and submit from any device. The report is auto-stored against the property record.',
  },
  {
    question: 'Does it generate a move-in / move-out condition report?',
    answer:
      'Yes. The system produces a side-by-side, photo-annotated condition report comparing the state of the property at move-in and move-out — exactly what you need to resolve security-deposit disputes.',
  },
  {
    question: 'Can I manage multiple properties and units?',
    answer:
      'Yes. Manage a portfolio of single-family, multi-family, and commercial units. Each property has its own history of inspections, photos, and reports.',
  },
  {
    question: 'Does it support digital signatures for tenants?',
    answer:
      'Yes. Collect tenant and landlord signatures directly on the device. Signed reports are time-stamped and stored in the cloud for legal protection.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Property Inspection Software',
  description:
    'Mobile property inspection software for landlords, property managers, and real estate teams. Standardize move-in/out and periodic inspections with digital checklists and instant PDF reports.',
  url: 'https://spacecapture.ai/property-inspection-software',
  serviceType: 'Property Inspection Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/property-inspection-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Property Inspection Software for Landlords & Property Managers"
      subtitle="Standardize move-in, move-out, and periodic property inspections. Capture photo evidence, generate condition reports, and resolve deposit disputes in minutes — not days."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Property Inspection Software?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Property inspection software digitizes the process of inspecting a
          residential or commercial property for condition, compliance, and
          change-tracking. It is used by landlords, property managers, real
          estate agents, and tenants to record the state of a property at any
          point in time — typically move-in, move-out, and during periodic
          inspections.
        </p>
      </div>

      <h2>Why Property Teams Choose SpaceCapture</h2>
      <p>
        Property inspections are time-sensitive and dispute-prone. A clear,
        timestamped, photo-annotated report is the difference between a
        five-minute security-deposit return and a thirty-day legal battle.
        SpaceCapture gives your team — and your tenants — a single source of
        truth for property condition.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Capabilities</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Move-in / move-out condition reports with side-by-side photo comparison',
            'Tenant self-inspections via a secure portal link',
            'Pre-built templates for residential, commercial, and HOA inspections',
            'Photo annotation and geo-tagging for every room and asset',
            'Digital signatures from tenants, landlords, and property managers',
            'Recurring inspection schedules (quarterly, annual, etc.)',
            'Multi-unit portfolio management with property-level history',
            'Works offline at the property, syncs when reconnected',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>Use Cases</h2>
      <ul className="list-disc pl-6 space-y-2 mb-12 marker:text-indigo-600">
        <li>
          <strong>Move-in inspections</strong> — capture property condition
          before a new tenant takes possession.
        </li>
        <li>
          <strong>Move-out inspections</strong> — compare to the move-in report
          and document deductions for damages.
        </li>
        <li>
          <strong>Periodic inspections</strong> — quarterly or annual check-ins
          to identify maintenance issues early.
        </li>
        <li>
          <strong>Pre-listing inspections</strong> — for real estate agents
          preparing a property for sale.
        </li>
        <li>
          <strong>Post-maintenance verifications</strong> — confirm contractor
          work meets your standards.
        </li>
        <li>
          <strong>Insurance and claims documentation</strong> — capture
          pre-incident condition for faster claims processing.
        </li>
      </ul>

      <ComparisonTable
        title="SpaceCapture vs Paper Property Inspections"
        features={[
          {
            feature: 'Move-in / move-out comparison',
            spaceCapture: 'Auto side-by-side, photo-annotated',
            competitors: 'Manual, prone to omissions',
          },
          {
            feature: 'Tenant participation',
            spaceCapture: 'Portal link, mobile-friendly',
            competitors: 'Scheduling emails, in-person only',
          },
          {
            feature: 'Photo evidence',
            spaceCapture: 'Geo-tagged, time-stamped, organized by room',
            competitors: 'Mixed camera roll, unorganized',
          },
          {
            feature: 'Dispute resolution',
            spaceCapture: 'Defensible, signed PDF in minutes',
            competitors: 'Days of back-and-forth',
          },
        ]}
      />

      <div className="mb-12 mt-12">
        <h2>Related Software</h2>
        <p>
          For residential pre-purchase inspections, see our{' '}
          <a href="/home-inspection-software" className="text-indigo-600 underline">
            home inspection software
          </a>
          . For construction and capital-project work, see our{' '}
          <a href="/construction-inspection-software" className="text-indigo-600 underline">
            construction inspection software
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
