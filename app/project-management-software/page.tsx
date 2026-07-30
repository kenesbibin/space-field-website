import React from 'react';
import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/seo/SeoLandingPage';
import { ComparisonTable } from '@/components/seo/ComparisonTable';
import { FaqSection } from '@/components/seo/FaqSection';
import StructuredData from '@/components/seo/StructuredData';
import { getServiceSchema } from '@/components/seo/ServiceSchema';
import { getSoftwareSchema } from '@/components/seo/SoftwareSchema';
import { getFaqSchema } from '@/components/seo/FaqSchema';
import {
  buildBreadcrumbsFromPath,
  getBreadcrumbListSchema,
} from '@/components/seo/BreadcrumbListSchema';
import { AlertTriangle, Link2, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Project Management Software for Construction | SpaceCapture',
  description:
    'The complete project management software for construction teams. Plan projects, track progress, manage resources, and collaborate in real-time with one mobile-first platform.',
  keywords: [
    'project management software',
    'construction project management software',
    'project management software for construction',
    'project management tools',
    'project tracking software',
    'project planning software',
    'project scheduling software',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/project-management-software',
  },
  openGraph: {
    type: 'website',
    title: 'Project Management Software for Construction | SpaceCapture',
    description:
      'The complete project management software for construction teams. Plan projects, track progress, manage resources, and collaborate in real-time with one mobile-first platform.',
    url: 'https://spacecapture.ai/project-management-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is construction project management software?',
    answer:
      'Construction project management software is a digital platform that helps construction teams plan, execute, and close projects. It includes features for scheduling, resource management, budget tracking, document control, and team communication.',
  },
  {
    question: 'How is SpaceCapture different from generic project management tools?',
    answer:
      'Generic project management tools like Asana or Monday.com are designed for office work. SpaceCapture is built specifically for construction, with field inspections, daily reports, AI defect detection, and offline-capable mobile apps.',
  },
  {
    question: 'Can I manage multiple projects with SpaceCapture?',
    answer:
      'Yes. SpaceCapture supports multi-project management with centralized dashboards, cross-project reporting, and resource allocation across projects.',
  },
  {
    question: 'Does SpaceCapture support Gantt charts and critical path?',
    answer:
      'Yes. SpaceCapture includes Gantt chart visualization, critical path analysis, and dependency tracking for construction project scheduling.',
  },
  {
    question: 'Is there a free version available?',
    answer:
      'Yes. SpaceCapture offers a free tier with core project management features. Paid plans unlock advanced scheduling, resource management, and AI features.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Project Management Software for Construction',
  description:
    'Complete project management software for construction teams. Scheduling, resource management, budget tracking, and real-time collaboration in one mobile-first platform.',
  url: 'https://spacecapture.ai/project-management-software',
  serviceType: 'Project Management Software',
  areaServed: 'Worldwide',
});
const softwareSchema = getSoftwareSchema({
  name: 'SpaceCapture - Construction Project Management Software',
  description:
    'Project management software built for construction. Gantt charts, resource tracking, field inspections, and daily reports in one app.',
  url: 'https://spacecapture.ai/project-management-software',
  applicationCategory: 'BusinessApplication',
  featureList: [
    'Gantt charts and critical path',
    'Task management and dependencies',
    'Resource allocation and tracking',
    'Budget tracking and cost management',
    'Daily reports auto-generated from field data',
    'Field inspections built-in',
    'Mobile access on any device',
    'Offline capability',
  ],
  aggregateRating: {
    ratingValue: '4.8',
    reviewCount: '120',
  },
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/project-management-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Your Project Management Tool Wasn't Built for Construction"
      subtitle="SpaceCapture combines project planning with field execution. Gantt charts, resource tracking, inspections, and daily reports — all in one app your team will actually use."
    >
      {/* Pain Section */}
      <div className="bg-slate-900 rounded-2xl p-8 shadow-xl mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Asana Doesn't Work on a Job Site</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-4">
            <Link2 className="h-6 w-6 text-red-500 shrink-0 mt-1" />
            <div>
              <span className="font-bold text-white block">Your field team can't access the project plan from the site</span>
              <span className="text-slate-300 text-sm">They're calling the office to ask "what's next?" instead of checking an app.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <Eye className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
            <div>
              <span className="font-bold text-white block">You're using one tool for planning and another for field work</span>
              <span className="text-slate-300 text-sm">Data lives in two places. Nothing syncs. Reports take hours to compile.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-red-400 shrink-0 mt-1" />
            <div>
              <span className="font-bold text-white block">Daily reports are still being written in Word docs</span>
              <span className="text-slate-300 text-sm">Your PM spends 2 hours every evening compiling what happened today. If they remember.</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Construction Project Management Software?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Construction project management software helps you plan, track, and
          deliver projects without the spreadsheet gymnastics. It covers
          scheduling, resource allocation, budget tracking, and team
          communication. The best construction PM software also handles field
          work — inspections, daily reports, and punch lists — because that's
          where projects actually happen.
        </p>
      </div>

      <h2>Plan in the Office. Execute in the Field. Close Out with Confidence.</h2>
      <p>
        SpaceCapture gives you the visibility to know what's happening across
        all your projects — without chasing people for updates. Your field team
        logs progress on their phone. Your office team sees it in real-time.
        Nobody has to compile anything.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Everything Your PM Needs, Nothing Your Field Team Hates
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Gantt charts and critical path — without the complexity',
            'Task management with dependencies your team actually follows',
            'Resource allocation across multiple projects',
            'Budget tracking that updates in real-time',
            'Document management your field team will use',
            'Daily reports generated automatically from field data',
            'Time tracking and timesheets built in',
            'Milestone tracking with real-time status',
            "Risk management that doesn't require a spreadsheet",
            'Dashboards that show project health at a glance',
            'Mobile access on any device',
            'Offline capability for sites with no signal',
            'Integration with QuickBooks, Xero, Sage',
            'Public API for custom integrations',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>Built for How Construction Actually Works</h2>
      <ul className="list-disc pl-6 space-y-2 mb-12 marker:text-indigo-600">
        <li>
          <a href="/residential-construction-software" className="text-indigo-600 underline">Residential Construction</a> — single-family, multi-family, renovations
        </li>
        <li>
          <a href="/building-construction-software" className="text-indigo-600 underline">Commercial Construction</a> — offices, retail, hospitality
        </li>
        <li>
          <a href="/civil-construction-software" className="text-indigo-600 underline">Civil Infrastructure</a> — roads, bridges, utilities
        </li>
        <li>
          <a href="/industries/oil-and-gas" className="text-indigo-600 underline">Industrial / Oil & Gas</a>
        </li>
        <li>
          <a href="/modular-construction-software" className="text-indigo-600 underline">Modular and Prefab</a>
        </li>
      </ul>

      <ComparisonTable
        title="SpaceCapture vs Generic PM Tools (Asana, Monday, MS Project)"
        features={[
          {
            feature: 'Built for construction',
            spaceCapture: 'Yes — field inspections, daily reports, punch lists',
            competitors: 'No — requires customization and add-ons',
          },
          {
            feature: 'Mobile experience',
            spaceCapture: 'Native app, works offline',
            competitors: 'Web-first, limited offline',
          },
          {
            feature: 'Daily reports',
            spaceCapture: 'Auto-generated from field data',
            competitors: 'Manual — your PM writes them nightly',
          },
          {
            feature: 'Field inspections',
            spaceCapture: 'Built-in, 5-minute inspections',
            competitors: 'Not available',
          },
          {
            feature: 'Pricing',
            spaceCapture: 'Per user, no surprises',
            competitors: 'Per user, often expensive',
          },
          {
            feature: 'Free tier',
            spaceCapture: 'Yes, forever',
            competitors: '14-day trials only',
          },
        ]}
      />

      <FaqSection items={faqs} />

      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@graph': [serviceSchema, softwareSchema, faqSchema, breadcrumbSchema],
        }}
      />
    </SeoLandingPage>
  );
}
