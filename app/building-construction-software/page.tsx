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
  title: 'Building Construction Software | Build Smarter, Faster',
  description:
    'The #1 building construction software for residential, commercial, and industrial builders. AI-powered inspections, project management, daily reports, and safety compliance in one mobile-first platform.',
  keywords: [
    'building construction',
    'building construction software',
    'building construction contractors',
    'buildings contractors',
    'constructions contractors',
    'contractors building',
    'building and construction',
    'construction & building',
    'construction and building',
    'building construction contractor',
    'building contractor',
    'general building contractor',
    'general building contractors',
    'building services',
    'building service',
    'building projects',
    'building project manager',
    'building cost',
    'building cost estimator',
    'building estimating',
    'building contractor services',
    'building renovation',
    'building renovations',
    'building renovation contractors',
    'renovate building',
    'building construction companies',
    'building construction management',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/building-construction-software',
  },
  openGraph: {
    type: 'website',
    title: 'Building Construction Software | SpaceCapture',
    description:
      'The #1 building construction software for residential, commercial, and industrial builders. AI-powered inspections, project management, daily reports, and safety compliance in one mobile-first platform.',
    url: 'https://spacecapture.ai/building-construction-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is building construction software?',
    answer:
      'Building construction software is a digital platform that helps builders, contractors, and owners plan, manage, and document the construction of buildings. It typically combines field inspections, project scheduling, daily reports, safety compliance, subcontractor coordination, and progress tracking in one system.',
  },
  {
    question: 'What types of building projects does SpaceCapture support?',
    answer:
      'Single-family homes, multi-family developments, custom homes, commercial offices, retail, hospitality, industrial warehouses, mixed-use, modular and prefab, and renovations / additions.',
  },
  {
    question: 'Can I run my entire company on SpaceCapture?',
    answer:
      'Yes. From pre-construction bidding through warranty, SpaceCapture covers the full lifecycle. Most customers replace 4–6 separate tools with SpaceCapture.',
  },
  {
    question: 'How is it different from a project management tool?',
    answer:
      'Most project management tools are document- and admin-focused. SpaceCapture is mobile-first and field-first, with AI defect detection built in. The workflows that GCs, owners, and inspectors run every day are the workflows the platform is built around.',
  },
  {
    question: 'Does it work for renovation projects?',
    answer:
      'Yes. Use SpaceCapture for change-order capture, before/after photos, daily progress updates, and client sign-off on renovation work. See our home renovation contractor page for details.',
  },
  {
    question: 'How quickly can we get started?',
    answer:
      'Most teams run their first inspection the same day. The free tier is fully featured for solo users; paid plans scale with team size and project count.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Building Construction Software',
  description:
    'The #1 building construction software for residential, commercial, and industrial builders. AI-powered inspections, project management, daily reports, and safety compliance in one mobile-first platform.',
  url: 'https://spacecapture.ai/building-construction-software',
  serviceType: 'Building Construction Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/building-construction-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Building Construction Software for Every Type of Build"
      subtitle="From single-family homes to high-rise commercial — run your entire building project from one mobile-first platform. AI-powered inspections, project management, daily reports, and safety compliance included."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Building Construction Software?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Building construction software is a digital platform that helps
          builders, contractors, and owners plan, manage, and document the
          construction of buildings. It combines field inspections, project
          scheduling, daily reports, safety compliance, subcontractor
          coordination, drawing markup, change orders, and progress tracking
          in one mobile-first platform — replacing spreadsheets, email, and
          disconnected point tools.
        </p>
      </div>

      <h2>Why Building Contractors Choose SpaceCapture</h2>
      <p>
        Building projects are time-sensitive, change-prone, and dependent on
        tight coordination across many trades. SpaceCapture gives your team —
        in the office and in the field — a single source of truth, with
        AI-powered assistance on every photo, every inspection, and every
        daily report.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          What's Included
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Mobile field inspections (QA/QC, safety, snagging)',
            'AI defect detection on every site photo',
            'Daily reports with weather, manpower, and progress',
            'Project management and planning',
            'Subcontractor management with free sub seats',
            'Safety observations and incident reporting',
            'Drawing markup and version control',
            'Punch lists with photo evidence',
            'Change order capture with e-signature',
            'Time tracking and timesheets',
            'Customer selections and approval',
            'Warranty tracking and service scheduling',
            'Owner and architect portal access',
            'Offline-first mobile app',
            'Integrations with QuickBooks, Xero, Sage, Procore',
            'Public API for custom integrations',
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
            href="/residential-construction-software"
            className="text-indigo-600 underline"
          >
            Residential construction
          </a>{' '}
          — single-family, multi-family, custom homes
        </li>
        <li>
          Commercial — offices, retail, hospitality, mixed-use
        </li>
        <li>Industrial — warehouses, manufacturing, logistics</li>
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
            href="/civil-construction-software"
            className="text-indigo-600 underline"
          >
            Civil and infrastructure
          </a>
        </li>
        <li>
          <a
            href="/for-home-renovation-contractors"
            className="text-indigo-600 underline"
          >
            Renovations and additions
          </a>
        </li>
      </ul>

      <ComparisonTable
        title="SpaceCapture vs Single-Purpose Building Software"
        features={[
          {
            feature: 'Modules',
            spaceCapture: 'All-in-one',
            competitors: 'Single purpose or expensive bundle',
          },
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
            feature: 'Free tier',
            spaceCapture: 'Yes',
            competitors: 'Rare',
          },
          {
            feature: 'Subcontractor seats',
            spaceCapture: 'Free',
            competitors: 'Paid per seat',
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
