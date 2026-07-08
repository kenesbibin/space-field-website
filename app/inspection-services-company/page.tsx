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
  title: 'Inspection Services Company Software | Inspection Company Tools',
  description:
    'Run an inspection services company with one platform. Schedule, dispatch, capture, report, and invoice — all from a single mobile-first system. Built for multi-inspector firms and franchise networks.',
  keywords: [
    'inspection company',
    'inspection services company',
    'the inspection company',
    'inspection services',
    'inspection business',
    'inspection firm',
    'inspection company software',
    'inspection dispatch software',
    'multi-inspector software',
    'inspection franchise software',
    'inspection scheduling software',
    'inspection reporting software',
    'inspection invoicing',
    'property inspection company',
    'building inspection company',
    'home inspection company',
    'field service company',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/inspection-services-company',
  },
  openGraph: {
    type: 'website',
    title: 'Inspection Services Company Software | SpaceCapture',
    description:
      'Run an inspection services company with one platform. Schedule, dispatch, capture, report, and invoice — all mobile-first.',
    url: 'https://spacecapture.ai/inspection-services-company',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What software do inspection companies use?',
    answer:
      'Inspection companies use specialized field service software to schedule jobs, dispatch inspectors, run digital checklists on-site, generate reports, and invoice clients. SpaceCapture combines all of this in one mobile-first platform.',
  },
  {
    question: 'Can I dispatch inspections to multiple inspectors?',
    answer:
      'Yes. The web dashboard lets you assign jobs to inspectors by skill, location, or availability. Inspectors receive push notifications, accept the job, and complete it on their mobile device.',
  },
  {
    question: 'Does SpaceCapture handle invoicing?',
    answer:
      'Yes. Completed inspections can be auto-billed via Stripe, or exported to QuickBooks, Xero, or any accounting system that supports CSV. Mark jobs as paid, track AR, and reconcile easily.',
  },
  {
    question: 'Can clients book inspections online?',
    answer:
      'Yes. Embed a booking widget on your website. Clients select a service, pick a time, and pay — the system auto-assigns an inspector and sends a confirmation.',
  },
  {
    question: 'How do I manage inspectors across multiple regions?',
    answer:
      'Use role-based access, region tags, and centralized templates. Each region has its own team, but reporting rolls up to a single operations dashboard.',
  },
  {
    question: 'Is there a franchise model?',
    answer:
      'Yes. SpaceCapture supports franchise networks with shared branding, shared templates, and per-franchise billing. Contact sales to discuss enterprise rollout.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Inspection Services Company Software',
  description:
    'All-in-one inspection company software. Schedule, dispatch, capture, report, and invoice from a single mobile-first platform.',
  url: 'https://spacecapture.ai/inspection-services-company',
  serviceType: 'Inspection Services Company Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/inspection-services-company')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Inspection Services Company Software"
      subtitle="Run your inspection business on one platform. Schedule, dispatch, capture, report, and invoice — all from a single mobile-first system built for multi-inspector firms."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Inspection Services Company Software?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Inspection services company software is an all-in-one platform that
          helps inspection businesses — from solo operators to multi-region
          franchise networks — manage every step of their workflow. It combines
          scheduling, dispatch, mobile inspections, branded reporting,
          invoicing, and client communication in a single system.
        </p>
      </div>

      <h2>From Booking to Invoice in One System</h2>
      <p>
        Most inspection companies stitch together 4–6 tools: a CRM, a
        scheduling app, a mobile form tool, a PDF generator, an accounting
        system, and a chat platform. SpaceCapture replaces all of these with
        one platform designed for inspection work.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          What's Included
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Online booking widget (embed on your website)',
            'Smart scheduling and dispatch with skill matching',
            'Mobile inspection app (iOS + Android, works offline)',
            'Branded, photo-annotated PDF reports in under 60 seconds',
            'Multi-party digital signatures',
            'Stripe / QuickBooks / Xero integrations for invoicing',
            'Client portal for report delivery and re-orders',
            'Operations dashboard with revenue, conversion, and SLA metrics',
            'Multi-inspector, multi-region support with role-based access',
            'Franchise-ready branding and per-location billing',
            'API access for custom integrations',
            'White-glove onboarding and migration support',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>Which Inspection Verticals Does This Serve?</h2>
      <ul className="list-disc pl-6 space-y-2 mb-12 marker:text-indigo-600">
        <li>
          <strong>
            <a href="/home-inspection-software" className="text-indigo-600 underline">
              Home inspection companies
            </a>
          </strong>{' '}
          — residential pre-purchase and pre-listing
        </li>
        <li>
          <strong>
            <a href="/building-inspection-software" className="text-indigo-600 underline">
              Building inspection companies
            </a>
          </strong>{' '}
          — commercial, structural, facade, fire safety
        </li>
        <li>
          <strong>
            <a href="/property-inspection-software" className="text-indigo-600 underline">
              Property inspection companies
            </a>
          </strong>{' '}
          — rental move-in/out, periodic, real estate
        </li>
        <li>
          <strong>Construction QA/QC firms</strong> — capital project quality
          and safety
        </li>
        <li>
          <strong>Industrial inspection firms</strong> — oil & gas, utilities,
          telecom
        </li>
        <li>
          <strong>Insurance inspection networks</strong> — claims, risk
          assessments, and underwriting
        </li>
      </ul>

      <ComparisonTable
        title="SpaceCapture vs A Patchwork Of Tools"
        features={[
          {
            feature: 'Tools to manage',
            spaceCapture: '1 platform',
            competitors: '4–6 separate apps',
          },
          {
            feature: 'Onboarding',
            spaceCapture: 'Days, not months',
            competitors: 'Months of integration work',
          },
          {
            feature: 'Mobile field app',
            spaceCapture: 'Native, offline-first',
            competitors: 'Web form or third-party',
          },
          {
            feature: 'Reporting',
            spaceCapture: 'Branded PDF in 60 seconds',
            competitors: 'Manual or generic',
          },
          {
            feature: 'Pricing model',
            spaceCapture: 'Per inspector, predictable',
            competitors: 'Per feature, per user, per form',
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
