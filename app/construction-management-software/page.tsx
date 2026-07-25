import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
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
  title: 'Construction Management Software for GCs, Subs & Owners',
  description:
    'AI-powered construction management software for general contractors, owners, and specialty trades. Project planning, field inspections, daily reports, and safety compliance in one AI-powered platform.',
  keywords: [
    'construction management software',
    'construction management',
    'construction project management',
    'construction project management software',
    'construction management software for small business',
    'construction management company',
    'construction management services',
    'construction project manager',
    'construction field management',
    'construction field management software',
    'construction field software',
    'construction field service',
    'construction field service software',
    'construction management consulting',
    'construction management consulting firms',
    'construction project planning',
    'construction project planning and scheduling',
    'construction project scheduling',
    'construction project planning steps',
    'construction project estimating',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/construction-management-software',
  },
  openGraph: {
    type: 'website',
    title: 'Construction Management Software | SpaceCapture',
    description:
      'AI-powered construction management software for GCs, owners, and specialty trades. Planning, field inspections, daily reports, and safety compliance in one platform.',
    url: 'https://spacecapture.ai/construction-management-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is construction management software?',
    answer:
      'Construction management software is a digital platform that helps general contractors, project managers, owners, and specialty trades plan, execute, and report on construction projects. It typically includes scheduling, document management, daily reports, safety inspections, and subcontractor coordination.',
  },
  {
    question: 'How is SpaceCapture different from Procore, Buildertrend, or CoConstruct?',
    answer:
      'SpaceCapture is mobile-first and field-centric. While Procore and similar tools are document-management heavy and require a desktop for most workflows, SpaceCapture was built for the field — every workflow runs from a phone, including offline, with AI-powered defect detection and inspection built in.',
  },
  {
    question: 'Can I manage multiple projects at once?',
    answer:
      'Yes. The dashboard shows all active projects with status, upcoming milestones, open punch items, and safety metrics. Switch between projects in one tap.',
  },
  {
    question: 'Does it work for small contractors?',
    answer:
      'Absolutely. We have a free tier for solo contractors and affordable plans for growing teams. The mobile app is the same on every plan — only the dashboard features scale with you.',
  },
  {
    question: 'Does it support subcontractor coordination?',
    answer:
      'Yes. Invite subcontractors to specific projects, assign them tasks, share drawings, and track their work. Subcontractors only see what you share with them — keeping your project structure clean.',
  },
  {
    question: 'How does the AI defect detection work?',
    answer:
      'When an inspector uploads a photo of a wall, slab, or facade, the AI engine flags likely defects (cracks, corrosion, moisture, missing PPE) and rates severity. This accelerates review and reduces missed issues.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes. You can run your first inspection in under 5 minutes with no credit card. See our pricing page for details.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Construction Management Software',
  description:
    'AI-powered construction management software for GCs, owners, and specialty trades. Project planning, field inspections, daily reports, and safety compliance in one platform.',
  url: 'https://spacecapture.ai/construction-management-software',
  serviceType: 'Construction Management Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/construction-management-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Construction Management Software Built Around the Field"
      subtitle="Run your projects from a phone, tablet, or desktop. AI-powered inspections, daily reports, scheduling, and safety compliance in one platform — purpose-built for general contractors, owners, and specialty trades."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Construction Management Software?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Construction management software is a digital platform that helps
          general contractors, project managers, owners, and specialty trades
          plan, execute, and report on construction projects. It typically
          combines scheduling, document management, daily reports, safety
          inspections, subcontractor coordination, and progress tracking in one
          system — replacing spreadsheets, email, and disconnected point tools.
        </p>
      </div>

      <h2>Why Construction Teams Choose SpaceCapture</h2>
      <p>
        Modern construction projects involve dozens of subcontractors, hundreds
        of inspections, and thousands of photos. SpaceCapture centralizes all of
        it in one mobile-first platform so your team can spend less time
        chasing paperwork and more time building.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          What's Included
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            <>Project planning with milestones, dependencies, and <Link href="/glossary/gantt-chart" className="text-indigo-600 underline">Gantt</Link> views</>,
            'Mobile daily reports with weather, manpower, and progress',
            'Inspection checklists for QA/QC, safety, and compliance',
            'AI-powered defect detection on every photo',
            'Punch lists with photo evidence and assignment',
            'Subcontractor management with role-based access',
            'Drawing version control and markup',
            'Safety observations, toolbox talks, and incident reporting',
            <><Link href="/glossary/rfi" className="text-indigo-600 underline">RFI</Link> and submittal workflows</>,
            'Real-time dashboards for owners and project executives',
            'Offline-first mobile app (iOS, Android, web)',
            'Integrations with Procore, QuickBooks, Xero, and Sage',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>Who Uses Construction Management Software?</h2>
      <ul className="list-disc pl-6 space-y-2 mb-12 marker:text-indigo-600">
        <li>
          <a
            href="/who-we-serve/general-contractors"
            className="text-indigo-600 underline"
          >
            General contractors
          </a>{' '}
          managing multiple projects and subcontractors
        </li>
        <li>
          <a
            href="/who-we-serve/subcontractors"
            className="text-indigo-600 underline"
          >
            Specialty subcontractors
          </a>{' '}
          (electrical, mechanical, plumbing, framing)
        </li>
        <li>
          <a
            href="/who-we-serve/property-developers"
            className="text-indigo-600 underline"
          >
            Property developers and owners
          </a>{' '}
          overseeing portfolio projects
        </li>
        <li>
          <a
            href="/who-we-serve/architects-engineers"
            className="text-indigo-600 underline"
          >
            Architects and engineers
          </a>{' '}
          coordinating RFIs and site visits
        </li>
        <li>
          <a
            href="/who-we-serve/facility-managers"
            className="text-indigo-600 underline"
          >
            Facility management teams
          </a>{' '}
          doing capital improvements
        </li>
      </ul>

      <ComparisonTable
        title="SpaceCapture vs Traditional Construction Management"
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
            feature: 'Time to first inspection',
            spaceCapture: 'Same day',
            competitors: '2–4 weeks of setup',
          },
          {
            feature: 'Pricing',
            spaceCapture: 'Per user, transparent',
            competitors: 'Per module, often opaque',
          },
          {
            feature: 'Subcontractor onboarding',
            spaceCapture: 'Free, self-serve',
            competitors: 'Paid seats per sub',
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
          </a>
          . For a full platform overview, see{' '}
          <a href="/construction-software" className="text-indigo-600 underline">
            construction software
          </a>
          . For modular and prefab workflows, see{' '}
          <a
            href="/modular-construction-software"
            className="text-indigo-600 underline"
          >
            modular construction software
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
