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
  title: 'Software for Home Renovation Contractors | SpaceCapture',
  description:
    'Field software for home renovation, remodel, and renovation contractors. Document work, prove progress, manage change orders, and get paid faster — all from your phone.',
  keywords: [
    'home renovation contractors',
    'house renovation contractors',
    'home remodel contractors',
    'home reno contractors',
    'contractors for home renovations',
    'contractors for home remodeling',
    'home renovations contractors',
    'home improvement contractors',
    'home renovation builder',
    'home renovation software',
    'home renovation experts',
    'top home renovation contractors',
    'general contractor remodeling',
    'general contractor remodeling near me',
    'house renovation builder',
    'residential renovation contractors',
    'house renovation',
    'home remodel',
    'renovation construction',
    'home improvement',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/for-home-renovation-contractors',
  },
  openGraph: {
    type: 'website',
    title: 'Software for Home Renovation Contractors | SpaceCapture',
    description:
      'Field software for home renovation, remodel, and renovation contractors. Document work, prove progress, manage change orders, and get paid faster.',
    url: 'https://spacecapture.ai/for-home-renovation-contractors',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'Why do home renovation contractors need field software?',
    answer:
      'Renovation work is change-order heavy, dispute-prone, and dependent on clear documentation. Field software captures before/after photos, tracks change orders, and produces client-ready daily updates — eliminating 80% of payment disputes.',
  },
  {
    question: 'How does it help with change orders?',
    answer:
      'When a homeowner requests a change, snap a photo, get client signature on-device, and the change order flows into your invoicing. No more paper change orders lost in trucks.',
  },
  {
    question: 'Can clients see the progress?',
    answer:
      'Yes. Send a daily progress update with photos and a short note to your client. They see exactly what was done, in their language, on their phone.',
  },
  {
    question: 'Does it handle estimates?',
    answer:
      'Yes — through integrations with estimating tools, or use the included visual form builder to create your own quote templates. Send estimates for client e-signature.',
  },
  {
    question: 'Can I track multiple jobs at once?',
    answer:
      'Yes. The dashboard shows every active job, status, and key milestones. Filter by phase (kitchen, bathroom, addition) or by client.',
  },
  {
    question: 'Is there a free plan?',
    answer:
      'Yes. The free tier is generous for solo contractors. Paid plans add team features, AI defect detection, and client portal branding.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Home Renovation Contractor Software',
  description:
    'Field software for home renovation and remodel contractors. Document work, prove progress, manage change orders, and get paid faster.',
  url: 'https://spacecapture.ai/for-home-renovation-contractors',
  serviceType: 'Home Renovation Contractor Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/for-home-renovation-contractors')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Software for Home Renovation Contractors"
      subtitle="Document your work, prove progress, manage change orders, and get paid faster. The field-first platform built for kitchen, bathroom, addition, and full-home renovation contractors."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          Built for the Way Renovation Contractors Actually Work
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Renovation projects are not new builds. Conditions are unpredictable,
          change orders are constant, and clients want constant reassurance.
          SpaceCapture gives you a single mobile tool to document every
          decision, capture every change, and keep every client in the loop
          without losing a day to paperwork.
        </p>
      </div>

      <h2>Key Capabilities</h2>
      <ul className="grid md:grid-cols-2 gap-4 my-8">
        {[
          'Before / during / after photo documentation',
          'On-device change order capture with client e-signature',
          'Daily progress updates with photos and notes',
          'Client portal with branded experience',
          'Punch lists with photo evidence and assignment',
          'Subcontractor coordination (plumbers, electricians, tile, etc.)',
          'Material tracking and delivery confirmation',
          'Estimates and quotes with e-signature',
          'Invoicing and payment tracking',
          'Time tracking for hourly work and change orders',
          'AI defect detection on photos (e.g. crack in new drywall)',
          'Offline capture on every job site',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
            <span className="text-slate-700 font-medium">{item}</span>
          </li>
        ))}
      </ul>

      <h2>Common Use Cases</h2>
      <ul className="list-disc pl-6 space-y-2 mb-12 marker:text-indigo-600">
        <li>
          <strong>Kitchen and bathroom remodels</strong> — capture every cabinet,
          fixture, and tile decision in a single project record.
        </li>
        <li>
          <strong>Home additions</strong> — track new construction against
          existing conditions with side-by-side photos.
        </li>
        <li>
          <strong>Whole-home renovations</strong> — coordinate multiple
          trades, document progress, and keep clients informed daily.
        </li>
        <li>
          <strong>Insurance restoration</strong> — capture pre-incident
          condition, work-in-progress, and final condition for fast claims.
        </li>
        <li>
          <strong>Property-flip projects</strong> — centralize the
          before/after photo record that sells the next property.
        </li>
      </ul>

      <ComparisonTable
        title="SpaceCapture vs Texting & Email"
        features={[
          {
            feature: 'Photo organization',
            spaceCapture: 'Per project, per room, per phase',
            competitors: 'Mixed in camera roll',
          },
          {
            feature: 'Change order capture',
            spaceCapture: 'On-device, e-signed',
            competitors: 'Verbal, paper, often lost',
          },
          {
            feature: 'Client updates',
            spaceCapture: 'Branded portal, daily',
            competitors: 'Ad-hoc texts',
          },
          {
            feature: 'Dispute protection',
            spaceCapture: 'Full audit trail',
            competitors: 'He-said-she-said',
          },
          {
            feature: 'Subcontractor coordination',
            spaceCapture: 'Built-in task lists',
            competitors: 'Group texts',
          },
        ]}
      />

      <div className="mb-12 mt-12">
        <h2>Related Solutions</h2>
        <p>
          For full project management, see our{' '}
          <a
            href="/construction-management-software"
            className="text-indigo-600 underline"
          >
            construction management software
          </a>
          . For GCs handling both new builds and renovations, see our{' '}
          <a
            href="/general-contractor-software"
            className="text-indigo-600 underline"
          >
            general contractor software
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
