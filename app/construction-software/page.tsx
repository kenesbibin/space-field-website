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
  title: 'Construction Software for Every Trade & Project Type',
  description:
    'The complete construction software platform for residential, commercial, civil, and industrial projects. Field inspections, project management, daily reports, and AI defect detection in one mobile-first app.',
  keywords: [
    'construction software',
    'construction',
    'construction services',
    'construction industry',
    'construction business',
    'construction companies',
    'construction contractors',
    'construction field',
    'construction field software',
    'construction & building',
    'construction and building',
    'construction and field inspections',
    'building construction',
    'building construction software',
    'building construction contractors',
    'buildings contractors',
    'constructions contractors',
    'contractors building',
    'civil construction software',
    'residential construction software',
    'general contractor software',
    'home renovation software',
    'prefab construction software',
    'modular construction software',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/construction-software',
  },
  openGraph: {
    type: 'website',
    title: 'Construction Software | SpaceCapture',
    description:
      'The complete construction software platform for residential, commercial, civil, and industrial projects. Field inspections, project management, daily reports, and AI defect detection in one mobile-first app.',
    url: 'https://spacecapture.ai/construction-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is construction software?',
    answer:
      'Construction software is a broad category of digital tools that help construction professionals plan, manage, and execute building projects. It includes field inspection apps, project management platforms, daily reporting tools, estimating and bidding software, safety compliance tools, and full-suite platforms that combine several of these.',
  },
  {
    question: 'What types of projects does SpaceCapture support?',
    answer:
      'Residential (single-family and multi-family), commercial (offices, retail, hospitality), industrial, civil (roads, bridges, utilities), modular and prefab, oil & gas, telecom, and capital improvements.',
  },
  {
    question: 'How is SpaceCapture different from a project management tool?',
    answer:
      'Most construction project management tools (Procore, Buildertrend) are document- and admin-focused and require a desktop. SpaceCapture is mobile-first and field-first — designed for the people actually doing the work on-site, with AI defect detection built in.',
  },
  {
    question: 'Does it integrate with my accounting or ERP system?',
    answer:
      'Yes. Out-of-the-box integrations with QuickBooks, Xero, Sage, Procore, and Zapier. We also have a public API for custom integrations.',
  },
  {
    question: 'Is there a free version?',
    answer:
      'Yes. You can use the core inspection and reporting features for free, forever. Paid plans unlock multi-project dashboards, AI features, and team management.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Sign up at the pricing page, download the mobile app, and run your first inspection in under 5 minutes. No training required.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Construction Software',
  description:
    'Complete construction software platform for residential, commercial, civil, and industrial projects. Field inspections, project management, daily reports, and AI defect detection in one mobile-first app.',
  url: 'https://spacecapture.ai/construction-software',
  serviceType: 'Construction Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/construction-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Construction Software for Every Project Type"
      subtitle="The complete platform for residential, commercial, civil, and industrial construction. Field inspections, project management, daily reports, and AI defect detection — all in one mobile-first app."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Construction Software?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Construction software is a broad category of digital tools that help
          construction professionals plan, manage, and execute building
          projects. It includes field inspection apps, project management
          platforms, daily reporting tools, estimating and bidding software,
          safety compliance tools, and full-suite platforms that combine
          several of these. The best modern construction software is
          mobile-first, AI-powered, and built around the field.
        </p>
      </div>

      <h2>One Platform, Every Phase</h2>
      <p>
        SpaceCapture covers the full lifecycle of a construction project — from
        pre-construction bidding to final handover. Whether you are a solo
        residential contractor, a multi-trade GC, or a civil infrastructure
        firm, the platform scales to your workflow.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Modules & Capabilities
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Field inspections (QA/QC, safety, snagging)',
            'AI defect detection on photos',
            'Project management and planning',
            'Daily reports (weather, manpower, progress)',
            'Punch lists with photo evidence',
            'Subcontractor management',
            'Safety observations and incident reporting',
            'Drawing markup and version control',
            'Estimating and bidding (with integrations)',
            'Time tracking and timesheets',
            'Asset and equipment tracking',
            'Real-time dashboards and reports',
            'Multi-language and multi-region support',
            'Offline-first mobile app',
            'Public API and webhooks',
            'Integrations with QuickBooks, Xero, Sage, Procore',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>Project Types We Support</h2>
      <ul className="list-disc pl-6 space-y-2 mb-12 marker:text-indigo-600">
        <li>
          <a
            href="/building-construction-software"
            className="text-indigo-600 underline"
          >
            Building construction
          </a>{' '}
          — residential, commercial, mixed-use
        </li>
        <li>
          <a
            href="/civil-construction-software"
            className="text-indigo-600 underline"
          >
            Civil construction
          </a>{' '}
          — roads, bridges, utilities
        </li>
        <li>
          <a
            href="/industries/oil-and-gas"
            className="text-indigo-600 underline"
          >
            Industrial / oil & gas
          </a>
        </li>
        <li>
          <a
            href="/modular-construction-software"
            className="text-indigo-600 underline"
          >
            Modular and prefab
          </a>
        </li>
        <li>
          <a
            href="/residential-construction-software"
            className="text-indigo-600 underline"
          >
            Residential
          </a>
        </li>
        <li>
          <a
            href="/industries/real-estate"
            className="text-indigo-600 underline"
          >
            Real estate development
          </a>
        </li>
        <li>
          <a
            href="/industries/facility-management"
            className="text-indigo-600 underline"
          >
            Facility capital projects
          </a>
        </li>
      </ul>

      <ComparisonTable
        title="SpaceCapture vs Single-Purpose Construction Software"
        features={[
          {
            feature: 'Modules',
            spaceCapture: 'All-in-one',
            competitors: 'Single purpose (or expensive bundle)',
          },
          {
            feature: 'Mobile experience',
            spaceCapture: 'Native, offline-first',
            competitors: 'Web-first or limited mobile',
          },
          {
            feature: 'AI defect detection',
            spaceCapture: 'Built in',
            competitors: 'Requires add-on',
          },
          {
            feature: 'Pricing',
            spaceCapture: 'Per user, transparent',
            competitors: 'Per module, often opaque',
          },
          {
            feature: 'Free tier',
            spaceCapture: 'Yes',
            competitors: 'Rare',
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
