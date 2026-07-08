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
  title: 'Construction Cost Software | Estimating & Cost Tracking',
  description:
    'Field-aware construction cost software. Estimating, bidding, daily cost tracking, and budget alerts in one platform. Integrates with Procore, QuickBooks, Xero, and Sage.',
  keywords: [
    'construction cost',
    'construction cost software',
    'construction cost estimator',
    'construction estimating',
    'construction estimating software',
    'construction estimating and bidding',
    'construction project estimating',
    'construction project costing',
    'construction pricing',
    'building cost',
    'building cost estimator',
    'building estimating',
    'building cost estimating',
    'building cost',
    'construction bids',
    'construction bids near me',
    'contractor bids',
    'contractor bids near me',
    'contractor prices',
    'contractor cost',
    'construction bid',
    'bid on construction projects',
    'find construction projects',
    'construction bids',
    'construction contracts',
    'construction contract',
    'building contract',
    'builders contract',
    'building construction contract',
    'construction rfp',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/construction-cost-software',
  },
  openGraph: {
    type: 'website',
    title: 'Construction Cost Software | SpaceCapture',
    description:
      'Field-aware construction cost software. Estimating, bidding, daily cost tracking, and budget alerts in one platform.',
    url: 'https://spacecapture.ai/construction-cost-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is construction cost software?',
    answer:
      'Construction cost software is a digital platform that helps contractors, estimators, and project managers estimate, bid, and track construction costs. It typically combines a cost database, take-off tools, bid management, daily cost tracking, and budget alerts.',
  },
  {
    question: 'How is SpaceCapture different from standalone estimating software?',
    answer:
      'SpaceCapture combines estimating with the field. Once a project is awarded, the same platform tracks daily costs, change orders, time, and progress — without re-keying estimates into a separate cost-tracking system.',
  },
  {
    question: 'Does it support RSMeans cost data?',
    answer:
      'Yes. We integrate with RSMeans and other cost-data providers. Import unit costs directly into your estimate.',
  },
  {
    question: 'Can I track actual vs budgeted cost in real time?',
    answer:
      'Yes. Field staff log time, materials, and equipment daily. The dashboard shows actual vs budgeted in real time, with alerts when you are trending over budget.',
  },
  {
    question: 'Does it integrate with QuickBooks for invoicing?',
    answer:
      'Yes. Push job costing, vendor bills, and customer invoices to QuickBooks Online. Also integrates with Xero and Sage.',
  },
  {
    question: 'Is there a free estimator tool?',
    answer:
      'Yes. We have a free construction cost calculator that you can use without an account. See our tools section.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Construction Cost Software',
  description:
    'Field-aware construction cost software. Estimating, bidding, daily cost tracking, and budget alerts in one platform.',
  url: 'https://spacecapture.ai/construction-cost-software',
  serviceType: 'Construction Cost Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/construction-cost-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Construction Cost Software for Estimators & GCs"
      subtitle="Estimate, bid, and track construction costs in one platform. Field-aware cost tracking with real-time budget alerts and full QuickBooks / Xero / Sage integration."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Construction Cost Software?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Construction cost software is a digital platform that helps
          contractors, estimators, and project managers estimate, bid, and
          track construction costs. It combines a cost database, take-off
          tools, bid management, daily cost tracking, and budget alerts in
          one platform — connecting the estimating process to the field
          execution.
        </p>
      </div>

      <h2>From Estimate to Field to Invoice</h2>
      <p>
        Most estimating tools stop at the bid. SpaceCapture continues into
        the project: the estimate becomes the budget, the field logs actual
        time and materials daily, and the same system produces invoices
        without re-keying.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Capabilities
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Cost database with RSMeans integration',
            'Take-off tools (area, linear, count)',
            'Bid management and proposal generation',
            'Estimate-to-budget conversion',
            'Daily cost tracking from the field',
            'Time and equipment tracking',
            'Change order capture with cost impact',
            'Real-time budget alerts',
            'Subcontractor invoicing',
            'Customer invoicing with AIA G702/G703',
            'QuickBooks, Xero, Sage integrations',
            'Job-cost reporting and P&L',
            'Multi-project cost rollup',
            'API for custom integrations',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <ComparisonTable
        title="SpaceCapture vs Standalone Estimating Software"
        features={[
          {
            feature: 'Field integration',
            spaceCapture: 'Built in',
            competitors: 'None',
          },
          {
            feature: 'QuickBooks sync',
            spaceCapture: 'Built in',
            competitors: 'Export / import',
          },
          {
            feature: 'Free tools',
            spaceCapture: 'Yes (cost calculator)',
            competitors: 'Rare',
          },
          {
            feature: 'Mobile time tracking',
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
