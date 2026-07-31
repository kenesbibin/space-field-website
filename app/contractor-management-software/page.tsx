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
  title: 'Contractor Management Software | SpaceCapture',
  description:
    'The complete contractor management software for general contractors and subcontractors. Manage subcontractors, track performance, coordinate schedules, and ensure compliance in one mobile-first platform.',
  keywords: [
    'contractor management software',
    'contractor software',
    'subcontractor management software',
    'general contractor software',
    'contractor management platform',
    'contractor management tools',
    'subcontractor software',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/contractor-management-software',
  },
  openGraph: {
    type: 'website',
    title: 'Contractor Management Software | SpaceCapture',
    description:
      'The complete contractor management software for general contractors and subcontractors. Manage subcontractors, track performance, coordinate schedules, and ensure compliance in one mobile-first platform.',
    url: 'https://spacecapture.ai/contractor-management-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is contractor management software?',
    answer:
      'Contractor management software is a digital platform that helps general contractors manage their subcontractor relationships. It includes features for contractor onboarding, performance tracking, schedule coordination, compliance management, and payment tracking.',
  },
  {
    question: 'How does SpaceCapture help manage subcontractors?',
    answer:
      'SpaceCapture provides a centralized platform to onboard subcontractors, assign tasks, track performance, manage compliance documents, and coordinate schedules. Field teams can log issues and track progress in real-time.',
  },
  {
    question: 'Can subcontractors use SpaceCapture directly?',
    answer:
      'Yes. Subcontractors can use the mobile app to receive assignments, log progress, submit reports, and communicate with the GC. This reduces back-and-forth and keeps everyone aligned.',
  },
  {
    question: 'Does SpaceCapture support compliance tracking?',
    answer:
      'Yes. SpaceCapture tracks insurance certificates, licenses, safety certifications, and other compliance documents. Automated alerts notify you when documents are expiring.',
  },
  {
    question: 'Is there a free version available?',
    answer:
      'Yes. SpaceCapture offers a free tier with core contractor management features. Paid plans unlock advanced scheduling, compliance tracking, and multi-project management.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Contractor Management Software',
  description:
    'Complete contractor management software for general contractors and subcontractors. Subcontractor onboarding, performance tracking, schedule coordination, and compliance management in one mobile-first platform.',
  url: 'https://spacecapture.ai/contractor-management-software',
  serviceType: 'Contractor Management Software',
  areaServed: 'Worldwide',
});
const softwareSchema = getSoftwareSchema({
  name: 'SpaceCapture - Contractor Management Software',
  description:
    'Contractor management software for general contractors. Onboard subs, track performance, manage compliance, and coordinate schedules in one app.',
  url: 'https://spacecapture.ai/contractor-management-software',
  applicationCategory: 'BusinessApplication',
  featureList: [
    'Subcontractor onboarding and prequalification',
    'Performance tracking and scoring',
    'Schedule coordination and tracking',
    'Compliance document management',
    'Insurance and certification tracking',
    'Task assignment and progress tracking',
    'Communication and messaging',
    'Mobile access on any device',
  ],
  aggregateRating: {
    ratingValue: '4.8',
    reviewCount: '120',
  },
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/contractor-management-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Managing Subcontractors via Text Messages Isn't Working"
      subtitle="SpaceCapture gives you one place to onboard subs, track their performance, manage compliance, and coordinate schedules — so nothing falls through the cracks."
    >
      {/* Pain Section */}
      <div className="bg-slate-900 rounded-2xl p-8 shadow-xl mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">The Subcontractor Headache</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-4">
            <Link2 className="h-6 w-6 text-red-500 shrink-0 mt-1" />
            <div>
              <span className="font-bold text-white block">You have 15 subs and 15 different ways they communicate</span>
              <span className="text-slate-300 text-sm">Texts, emails, phone calls, WhatsApp. You spend your day playing telephone instead of managing the project.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <Eye className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
            <div>
              <span className="font-bold text-white block">You find out a sub is behind when it's already a problem</span>
              <span className="text-slate-300 text-sm">No real-time visibility. By the time someone mentions it, you're already weeks behind schedule.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-red-400 shrink-0 mt-1" />
            <div>
              <span className="font-bold text-white block">That sub's insurance expired 3 months ago</span>
              <span className="text-slate-300 text-sm">You didn't know until the audit. Now you're scrambling to get updated certificates from 20 contractors.</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Contractor Management Software?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Contractor management software helps general contractors keep track of
          their subcontractors — who's on board, who's performing, who's
          compliant, and who's behind. Instead of chasing down insurance
          certificates via email and tracking performance in spreadsheets, you
          get one platform that gives you visibility across every sub on every
          project.
        </p>
      </div>

      <h2>Stop Chasing Subs. Start Managing Them.</h2>
      <p>
        SpaceCapture gives you a single source of truth for every subcontractor
        relationship. Onboard them once, track their performance across
        projects, and get alerts before compliance issues become your problem.
        Your subs get a simple app. You get peace of mind.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Control Without the Micromanaging
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Onboard subs once — reuse across every project',
            'Track performance scores so you know who to call back',
            'Coordinate schedules across all subs from one view',
            'Never miss an expiring insurance certificate again',
            'Assign tasks and track completion in real-time',
            'Built-in messaging — no more digging through email threads',
            'Photo and video documentation from the field',
            'Issue tracking tied to specific subs and tasks',
            'Payment tracking alongside performance',
            'Reporting and analytics on sub performance',
            'Mobile access on any device',
            'Subs can self-report progress and compliance docs',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>Who This Is For</h2>
      <ul className="list-disc pl-6 space-y-2 mb-12 marker:text-indigo-600">
        <li>
          <strong>General Contractors</strong> — Manage all subs from one platform, not 15 chat apps
        </li>
        <li>
          <strong>Subcontractors</strong> — Receive assignments, log progress, submit compliance docs in one place
        </li>
        <li>
          <strong>Specialty Contractors</strong> — Electrical, plumbing, HVAC — track your team's work across multiple GCs
        </li>
        <li>
          <strong>Self-Performing GCs</strong> — Manage internal crews and subs with the same tool
        </li>
      </ul>

      <ComparisonTable
        title="SpaceCapture vs Spreadsheets and Phone Calls"
        features={[
          {
            feature: 'Sub communication',
            spaceCapture: 'One platform — tasks, messages, docs',
            competitors: 'Texts, emails, phone calls, WhatsApp',
          },
          {
            feature: 'Performance tracking',
            spaceCapture: 'Automated scores across projects',
            competitors: 'Gut feeling and memory',
          },
          {
            feature: 'Compliance tracking',
            spaceCapture: 'Auto-alerts before docs expire',
            competitors: 'Manual spreadsheets, missed deadlines',
          },
          {
            feature: 'Field integration',
            spaceCapture: 'Inspections + reporting built in',
            competitors: 'Separate tools required',
          },
          {
            feature: 'Pricing',
            spaceCapture: 'Per user, no surprises',
            competitors: 'Per module, hidden costs',
          },
          {
            feature: 'Free tier',
            spaceCapture: 'Yes, forever',
            competitors: 'None',
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
