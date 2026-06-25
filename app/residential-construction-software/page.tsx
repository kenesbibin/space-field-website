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
  title: 'Residential Construction Software for Home Builders',
  description:
    'Field software for residential construction. Manage single-family, multi-family, and custom home builds from your phone. Inspections, daily reports, and warranty tracking in one platform.',
  keywords: [
    'residential construction',
    'residential construction software',
    'residential constructions',
    'residential general construction',
    'residential construction manager',
    'residential construction project manager',
    'residential construction industry',
    'residential construction contract',
    'residential building contractor',
    'house building contractor',
    'home building contractor',
    'house builder',
    'home construction',
    'house construction',
    'home construction cost',
    'home building contractor',
    'home builders',
    'home build',
    'home construction and remodeling',
    'home renovations and remodeling',
    'residential real estate appraisers',
    'house building',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/residential-construction-software',
  },
  openGraph: {
    type: 'website',
    title: 'Residential Construction Software | SpaceCapture',
    description:
      'Field software for residential construction. Manage single-family, multi-family, and custom home builds from your phone.',
    url: 'https://spacecapture.ai/residential-construction-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is residential construction software?',
    answer:
      'Residential construction software is a digital platform that helps home builders, custom-home contractors, and multi-family developers plan, build, and deliver homes. It includes pre-construction bidding, daily field reports, QA/QC inspections, customer selections, and warranty management.',
  },
  {
    question: 'How is it different from commercial construction software?',
    answer:
      'Residential workflows include customer-selections management, model-home marketing, and warranty tracking that commercial projects do not require. SpaceCapture includes pre-built templates for each of these.',
  },
  {
    question: 'Does it support custom home builders?',
    answer:
      'Yes. Track selections, allowances, change orders, and client sign-off from one mobile app. The customer portal lets buyers track progress and approve selections remotely.',
  },
  {
    question: 'Does it support production home builders?',
    answer:
      'Yes. Multi-community, multi-plan workflows with per-community templates. Track cycle time, defect rates, and customer satisfaction by community.',
  },
  {
    question: 'Can I manage multiple subdivisions at once?',
    answer:
      'Yes. The dashboard shows every active community with status, current phase, and key milestones. Switch between communities in one tap.',
  },
  {
    question: 'Does it handle warranty?',
    answer:
      'Yes. After homeowner handover, the same platform tracks warranty claims, schedules service, and runs 30-day / 11-month inspections automatically.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Residential Construction Software',
  description:
    'Field software for residential construction. Manage single-family, multi-family, and custom home builds from your phone. Inspections, daily reports, and warranty tracking in one platform.',
  url: 'https://spacecapture.ai/residential-construction-software',
  serviceType: 'Residential Construction Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/residential-construction-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Residential Construction Software for Home Builders"
      subtitle="Manage single-family, multi-family, and custom home builds from your phone. Inspections, daily reports, customer selections, and warranty tracking — all in one platform."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Residential Construction Software?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Residential construction software is a digital platform that helps
          home builders, custom-home contractors, and multi-family developers
          plan, build, and deliver homes. It combines pre-construction
          bidding, daily field reports, QA/QC inspections, customer
          selections, change orders, and warranty management in one mobile
          platform.
        </p>
      </div>

      <h2>Capabilities for Home Builders</h2>
      <ul className="grid md:grid-cols-2 gap-4 my-8">
        {[
          'Pre-construction bidding and estimating',
          'Customer selections and approval workflows',
          'Mobile daily reports (weather, manpower, progress)',
          'Pre-pour, pre-drywall, and final inspections',
          'AI defect detection on framing, drywall, and finish photos',
          'Punch lists with photo evidence and assignment',
          'Change orders with client e-signature',
          'Warranty tracking and service scheduling',
          '30-day and 11-month warranty inspections',
          'Multi-community / multi-plan production tracking',
          'Subcontractor management with free sub seats',
          'Customer portal for selections, photos, and progress',
          'Mobile-first, offline-first app',
          'Integrations with QuickBooks, Xero, and Buildertrend',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
            <span className="text-slate-700 font-medium">{item}</span>
          </li>
        ))}
      </ul>

      <h2>Who Is This For?</h2>
      <ul className="list-disc pl-6 space-y-2 mb-12 marker:text-indigo-600">
        <li>Custom and semi-custom home builders</li>
        <li>Production home builders (multi-community)</li>
        <li>Multi-family developers (townhomes, condos, apartments)</li>
        <li>Remodeling contractors expanding into new builds</li>
        <li>Real estate developers building portfolio properties</li>
        <li>Design-build firms</li>
      </ul>

      <ComparisonTable
        title="SpaceCapture vs Buildertrend, CoConstruct"
        features={[
          {
            feature: 'Mobile experience',
            spaceCapture: 'Native, offline-first',
            competitors: 'Web-first, mobile-limited',
          },
          {
            feature: 'AI defect detection',
            spaceCapture: 'Built in',
            competitors: 'No AI',
          },
          {
            feature: 'Free tier',
            spaceCapture: 'Yes',
            competitors: 'No',
          },
          {
            feature: 'Warranty tracking',
            spaceCapture: 'Built in',
            competitors: 'Add-on or manual',
          },
          {
            feature: 'Customer portal',
            spaceCapture: 'Built in',
            competitors: 'Add-on',
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
