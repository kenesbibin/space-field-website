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
  title: 'General Contractor Software | Software for GCs',
  description:
    'All-in-one software for general contractors. Project management, field inspections, subcontractor coordination, safety, and AI defect detection in one mobile-first platform.',
  keywords: [
    'general contractors',
    'general contractor',
    'general construction contractors',
    'general construction companies',
    'general contractor software',
    'general contractor company',
    'general construction',
    'general contractor business',
    'general contractor cost',
    'general contractor estimates',
    'general contractor project manager',
    'general construction firms',
    'general building contractor',
    'general contractor remodeling',
    'general contractor remodeling near me',
    'general contracting services',
    'best general contractors',
    'residential general construction',
    'commercial general contractors',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/general-contractor-software',
  },
  openGraph: {
    type: 'website',
    title: 'General Contractor Software | SpaceCapture',
    description:
        'All-in-one software for general contractors. Project management, field inspections, subcontractor coordination, safety, and AI defect detection in one mobile-first platform.',
    url: 'https://spacecapture.ai/general-contractor-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is general contractor software?',
    answer:
      'General contractor software is a digital platform that helps GCs manage projects, subcontractors, schedules, budgets, inspections, and safety in one system. It replaces the patchwork of email, Excel, paper forms, and disconnected apps that most GCs use today.',
  },
  {
    question: 'How is SpaceCapture different from Procore or Buildertrend?',
    answer:
      'SpaceCapture is mobile-first, field-first, and AI-native. Where Procore is document-heavy and Buildertrend is scheduling-heavy, SpaceCapture was built around the field workflows GCs run every day — inspections, daily reports, and subcontractor coordination — with AI built in for defect detection and progress validation.',
  },
  {
    question: 'Does it work for residential GCs?',
    answer:
      'Yes. Pre-built templates for single-family, multi-family, and custom-home workflows. Free for solo GCs, paid plans for growing teams.',
  },
  {
    question: 'Does it work for commercial GCs?',
    answer:
      'Yes. Multi-project dashboards, role-based access for owners and architects, RFI and submittal workflows, and integrations with major estimating and accounting tools.',
  },
  {
    question: 'Can I invite subcontractors for free?',
    answer:
      'Yes. Subcontractor seats are free — you only pay for GC seats. This is a major cost advantage over Procore, which charges per subcontractor seat.',
  },
  {
    question: 'Does it integrate with QuickBooks?',
    answer:
      'Yes. Push invoices, payments, and job costing to QuickBooks Online automatically. Also integrates with Xero, Sage, and Zapier.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'General Contractor Software',
  description:
    'All-in-one software for general contractors. Project management, field inspections, subcontractor coordination, safety, and AI defect detection in one mobile-first platform.',
  url: 'https://spacecapture.ai/general-contractor-software',
  serviceType: 'General Contractor Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/general-contractor-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="General Contractor Software Built for the Field"
      subtitle="The all-in-one platform for residential and commercial GCs. Manage projects, subcontractors, and inspections from your phone — with AI defect detection built in."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What Does a General Contractor Need From Software?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          GCs juggle dozens of projects, hundreds of subcontractors, and
          thousands of inspections. They need a system that runs from the
          field — not a desktop — and that keeps the entire team aligned.
          SpaceCapture delivers a single mobile platform that replaces
          spreadsheets, paper forms, and disconnected point tools.
        </p>
      </div>

      <h2>What GCs Get With SpaceCapture</h2>
      <ul className="grid md:grid-cols-2 gap-4 my-8">
        {[
          'Multi-project dashboard with status, milestones, and risks',
          'Mobile daily reports with weather, manpower, and progress',
          'AI defect detection on every site photo',
          'Punch lists with photo evidence and assignment',
          'Subcontractor management with free sub seats',
          'Safety observations, toolbox talks, and incident reporting',
          'RFI and submittal workflows',
          'Drawing markup and version control',
          'Change order capture with e-signature',
          'Time tracking and timesheets',
          'Real-time cost tracking and budget alerts',
          'Owner and architect portal access',
          'Mobile-first, offline-first app',
          'Integrations with QuickBooks, Xero, Sage, Procore',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
            <span className="text-slate-700 font-medium">{item}</span>
          </li>
        ))}
      </ul>

      <h2>GC Workflow in SpaceCapture</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Set up the project:</strong> Import drawings, set the
          schedule, invite subcontractors.
        </li>
        <li className="pl-2">
          <strong>Run daily reports:</strong> The superintendent walks the
          site, snaps photos, and produces a signed daily report in minutes.
        </li>
        <li className="pl-2">
          <strong>Inspect work:</strong> Conduct QA/QC, safety, and
          pre-pour / pre-drywall inspections with AI assistance.
        </li>
        <li className="pl-2">
          <strong>Coordinate trades:</strong> Assign punch items, track
          closeouts, and notify subs automatically.
        </li>
        <li className="pl-2">
          <strong>Close out:</strong> Generate final reports, owner punch
          lists, and warranty documentation.
        </li>
      </ol>

      <ComparisonTable
        title="SpaceCapture vs Procore, Buildertrend, CoConstruct"
        features={[
          {
            feature: 'Mobile experience',
            spaceCapture: 'Native, offline-first',
            competitors: 'Web-first, mobile-limited',
          },
          {
            feature: 'AI defect detection',
            spaceCapture: 'Built in',
            competitors: 'Requires add-on',
          },
          {
            feature: 'Subcontractor seats',
            spaceCapture: 'Free',
            competitors: 'Paid per seat',
          },
          {
            feature: 'Free tier',
            spaceCapture: 'Yes',
            competitors: 'No',
          },
          {
            feature: 'Time to first project',
            spaceCapture: 'Same day',
            competitors: '2–4 weeks of setup',
          },
        ]}
      />

      <div className="mb-12 mt-12">
        <h2>Related Software</h2>
        <p>
          For construction-management workflows, see our{' '}
          <a
            href="/construction-management-software"
            className="text-indigo-600 underline"
          >
            construction management software
          </a>
          . For specialty trades, see our{' '}
          <a
            href="/who-we-serve/subcontractors"
            className="text-indigo-600 underline"
          >
            subcontractor persona page
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
