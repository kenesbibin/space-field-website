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
  title: 'Construction Management Software | SpaceCapture',
  description:
    'The complete construction management software for residential, commercial, and civil projects. Manage field inspections, project tracking, daily reports, and team collaboration in one mobile-first platform.',
  keywords: [
    'construction management software',
    'construction management',
    'construction project management',
    'construction management app',
    'construction management system',
    'construction management platform',
    'construction management tools',
    'construction management solution',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/construction-management-software',
  },
  openGraph: {
    type: 'website',
    title: 'Construction Management Software | SpaceCapture',
    description:
      'The complete construction management software for residential, commercial, and civil projects. Manage field inspections, project tracking, daily reports, and team collaboration in one mobile-first platform.',
    url: 'https://spacecapture.ai/construction-management-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is construction management software?',
    answer:
      'Construction management software is a digital platform that helps construction teams plan, coordinate, and control projects from pre-construction to closeout. It typically includes features for project scheduling, document management, field inspections, daily reporting, budget tracking, and team communication.',
  },
  {
    question: 'How is SpaceCapture different from other construction management tools?',
    answer:
      'Unlike traditional construction management software that focuses on office-based project management, SpaceCapture is mobile-first and field-first. It combines project management with AI-powered defect detection, offline-capable field inspections, and real-time collaboration between field and office teams.',
  },
  {
    question: 'What construction project types does SpaceCapture support?',
    answer:
      'SpaceCapture supports residential, commercial, civil, industrial, modular/prefab, oil & gas, and telecom projects. The platform scales from solo contractors to multi-trade general contractors and large construction firms.',
  },
  {
    question: 'Does SpaceCapture integrate with other construction tools?',
    answer:
      'Yes. SpaceCapture integrates with QuickBooks, Xero, Sage, Procore, and Zapier. It also has a public API for custom integrations with your existing construction management workflow.',
  },
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes. SpaceCapture offers a free tier with core inspection and reporting features. Paid plans unlock multi-project dashboards, AI features, team management, and advanced analytics.',
  },
  {
    question: 'How long does it take to set up SpaceCapture?',
    answer:
      'Most teams are up and running within 5 minutes. Download the mobile app, create a project, and run your first inspection. No training or onboarding required.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Construction Management Software',
  description:
    'Complete construction management software for residential, commercial, and civil projects. Field inspections, project tracking, daily reports, and team collaboration in one mobile-first platform.',
  url: 'https://spacecapture.ai/construction-management-software',
  serviceType: 'Construction Management Software',
  areaServed: 'Worldwide',
});
const softwareSchema = getSoftwareSchema({
  name: 'SpaceCapture - Construction Management Software',
  description:
    'AI-powered construction management software for field inspections, project tracking, daily reports, and team collaboration. Mobile-first with offline support.',
  url: 'https://spacecapture.ai/construction-management-software',
  applicationCategory: 'BusinessApplication',
  featureList: [
    'Field Inspections (QA/QC, safety, snagging)',
    'AI Defect Detection on photos',
    'Daily Reports (weather, manpower, progress)',
    'Punch Lists with photo evidence',
    'Real-time dashboards',
    'Offline mobile app',
    'Subcontractor management',
    'Safety incident reporting',
  ],
  aggregateRating: {
    ratingValue: '4.8',
    reviewCount: '120',
  },
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/construction-management-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Stop Juggling 5 Tools to Manage One Construction Project"
      subtitle="SpaceCapture puts field inspections, project tracking, daily reports, and AI defect detection in one mobile app. Set up in 5 minutes. No training required."
    >
      {/* Pain Section */}
      <div className="bg-slate-900 rounded-2xl p-8 shadow-xl mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Sound Familiar?</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-4">
            <Link2 className="h-6 w-6 text-red-500 shrink-0 mt-1" />
            <div>
              <span className="font-bold text-white block">You're switching between Procore, Excel, and WhatsApp to manage one project</span>
              <span className="text-slate-300 text-sm">Every tool has different logins, different data, and different formats. Your team wastes 2+ hours daily just re-entering information.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <Eye className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
            <div>
              <span className="font-bold text-white block">Your field team finds problems that office staff never see until it's too late</span>
              <span className="text-slate-300 text-sm">A cracked foundation gets logged on paper. By the time it reaches the PM, it's a $50,000 change order.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-red-400 shrink-0 mt-1" />
            <div>
              <span className="font-bold text-white block">You're flying blind without real-time project data</span>
              <span className="text-slate-300 text-sm">You find out about delays in the weekly meeting — after they've already cascaded into schedule overruns.</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Construction Management Software?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Construction management software helps you plan, track, and deliver
          projects without the chaos of disconnected tools. Instead of juggling
          spreadsheets, paper forms, and multiple apps, you get one platform
          that your field and office teams actually use. The best construction
          management software is mobile-first — because that's where your team
          actually works.
        </p>
      </div>

      <h2>One Platform. Every Phase. Zero Chaos.</h2>
      <p>
        SpaceCapture replaces your patchwork of tools with one platform that
        works the way construction actually works — in the field, on your
        phone, even when you're offline. Whether you're a solo contractor or a
        multi-trade GC, you get the visibility you need without the complexity
        you don't.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Everything You Need, Nothing You Don't
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Field inspections that take 5 minutes, not 50',
            'AI defect detection that catches what humans miss',
            'Daily reports generated automatically from field data',
            'Punch lists with photo evidence — no more "he said, she said"',
            'Real-time dashboards so you always know project status',
            'Offline mode that syncs when you get signal',
            'Subcontractor management without the phone tag',
            'Safety incident reporting that actually gets done',
            'Document management your field team will actually use',
            'Budget tracking that updates in real-time',
            'Multi-language support for diverse crews',
            'Integrations with QuickBooks, Xero, Sage, and Procore',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>Built for How You Actually Work</h2>
      <ul className="list-disc pl-6 space-y-2 mb-12 marker:text-indigo-600">
        <li>
          <a
            href="/residential-construction-software"
            className="text-indigo-600 underline"
          >
            Residential
          </a>{' '}
          — single-family, multi-family, renovations, custom homes
        </li>
        <li>
          <a
            href="/building-construction-software"
            className="text-indigo-600 underline"
          >
            Commercial
          </a>{' '}
          — offices, retail, hospitality, healthcare
        </li>
        <li>
          <a
            href="/civil-construction-software"
            className="text-indigo-600 underline"
          >
            Civil
          </a>{' '}
          — roads, bridges, utilities, infrastructure
        </li>
        <li>
          <a
            href="/industries/oil-and-gas"
            className="text-indigo-600 underline"
          >
            Industrial / Oil & Gas
          </a>
        </li>
        <li>
          <a
            href="/modular-construction-software"
            className="text-indigo-600 underline"
          >
            Modular and Prefab
          </a>
        </li>
      </ul>

      <ComparisonTable
        title="Why Construction Teams Choose SpaceCapture"
        features={[
          {
            feature: 'Setup time',
            spaceCapture: '5 minutes, no training',
            competitors: 'Weeks or months of onboarding',
          },
          {
            feature: 'Mobile experience',
            spaceCapture: 'Native app, works offline',
            competitors: 'Desktop-first, poor mobile',
          },
          {
            feature: 'AI defect detection',
            spaceCapture: 'Built in, catches what humans miss',
            competitors: 'Not available or expensive add-on',
          },
          {
            feature: 'Field inspections',
            spaceCapture: '5-minute inspections, not 50',
            competitors: 'Complex forms, low adoption',
          },
          {
            feature: 'Pricing',
            spaceCapture: 'Per user, no surprises',
            competitors: 'Per module, hidden costs',
          },
          {
            feature: 'Free tier',
            spaceCapture: 'Yes, forever',
            competitors: '14-day trial, then pay',
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
