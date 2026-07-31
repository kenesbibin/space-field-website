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
  title: 'Construction Scheduling Software | SpaceCapture',
  description:
    'The complete construction scheduling software for project planning and execution. Create Gantt charts, track dependencies, manage resources, and collaborate in real-time.',
  keywords: [
    'construction scheduling software',
    'construction scheduling',
    'construction schedule software',
    'project scheduling software',
    'construction timeline software',
    'gantt chart software construction',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/construction-scheduling-software',
  },
  openGraph: {
    type: 'website',
    title: 'Construction Scheduling Software | SpaceCapture',
    description:
      'The complete construction scheduling software for project planning and execution. Create Gantt charts, track dependencies, manage resources, and collaborate in real-time.',
    url: 'https://spacecapture.ai/construction-scheduling-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is construction scheduling software?',
    answer:
      'Construction scheduling software is a digital platform that helps construction teams plan, track, and manage project timelines. It includes features for Gantt charts, dependency tracking, resource allocation, milestone management, and critical path analysis.',
  },
  {
    question: 'How does SpaceCapture handle construction scheduling?',
    answer:
      'SpaceCapture provides visual Gantt charts, dependency tracking, and critical path analysis. Teams can update schedules from the field, track progress in real-time, and receive alerts when tasks are delayed.',
  },
  {
    question: 'Can I share schedules with subcontractors?',
    answer:
      'Yes. SpaceCapture allows you to share schedules with subcontractors, who can update their task progress directly from the mobile app. This keeps everyone aligned without back-and-forth.',
  },
  {
    question: 'Does SpaceCapture support resource scheduling?',
    answer:
      'Yes. SpaceCapture includes resource allocation and tracking, helping you assign people, equipment, and materials to tasks and avoid conflicts.',
  },
  {
    question: 'Is there a free version available?',
    answer:
      'Yes. SpaceCapture offers a free tier with core scheduling features. Paid plans unlock advanced Gantt charts, resource management, and multi-project scheduling.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Construction Scheduling Software',
  description:
    'Complete construction scheduling software for project planning and execution. Gantt charts, dependency tracking, resource allocation, and real-time collaboration.',
  url: 'https://spacecapture.ai/construction-scheduling-software',
  serviceType: 'Construction Scheduling Software',
  areaServed: 'Worldwide',
});
const softwareSchema = getSoftwareSchema({
  name: 'SpaceCapture - Construction Scheduling Software',
  description:
    'Construction scheduling software with Gantt charts, dependency tracking, resource allocation, and real-time field updates. Mobile-first with offline support.',
  url: 'https://spacecapture.ai/construction-scheduling-software',
  applicationCategory: 'BusinessApplication',
  featureList: [
    'Gantt chart visualization',
    'Task dependencies and critical path',
    'Milestone tracking',
    'Resource allocation and scheduling',
    'Real-time progress updates from the field',
    'Delay alerts and notifications',
    'Subcontractor schedule sharing',
    'Offline capability',
  ],
  aggregateRating: {
    ratingValue: '4.8',
    reviewCount: '120',
  },
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/construction-scheduling-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Your Construction Schedule is a PDF That's Already Outdated"
      subtitle="SpaceCapture gives you a living schedule that updates from the field in real-time. Gantt charts, dependency tracking, and delay alerts — all in one app."
    >
      {/* Pain Section */}
      <div className="bg-slate-900 rounded-2xl p-8 shadow-xl mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">The Schedule That's Always Wrong</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-4">
            <Link2 className="h-6 w-6 text-red-500 shrink-0 mt-1" />
            <div>
              <span className="font-bold text-white block">You print a schedule on Monday. By Wednesday, it's fiction.</span>
              <span className="text-slate-300 text-sm">Weather, material delays, no-shows. The field changes daily but your schedule doesn't.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <Eye className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
            <div>
              <span className="font-bold text-white block">Your PM finds out about delays at the weekly meeting</span>
              <span className="text-slate-300 text-sm">Three days late. By then, two other trades are affected and you're scrambling.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-red-400 shrink-0 mt-1" />
            <div>
              <span className="font-bold text-white block">Subs don't know what's happening until you call them</span>
              <span className="text-slate-300 text-sm">They show up when they feel like it because they never got a clear schedule.</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Construction Scheduling Software?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Construction scheduling software helps you plan and track project
          timelines — who's doing what, when, and what depends on what. The
          best construction scheduling software updates in real-time from the
          field, so your schedule reflects what's actually happening, not what
          you planned three weeks ago.
        </p>
      </div>

      <h2>A Schedule That Updates Itself</h2>
      <p>
        SpaceCapture connects your office plan to field reality. When your crew
        marks a task complete on their phone, the schedule updates. When a sub
        falls behind, you get an alert. No more weekly meetings where you find
        out you're already behind.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Scheduling That Works in the Field, Not Just the Office
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Visual Gantt charts your team can actually read',
            'Task dependencies that auto-adjust when things change',
            'Critical path analysis — know what matters most',
            "Resource allocation so you don't double-book crews",
            'Real-time progress updates from the field',
            'Delay alerts before they cascade into bigger problems',
            'Share schedules with subs — they see what they need to',
            'What-if scenarios to test schedule changes',
            "Baseline comparison to see how far you've drifted",
            'Dashboards that show project health at a glance',
            'Mobile access on any device',
            'Offline capability for sites with no signal',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>When Scheduling Matters Most</h2>
      <ul className="list-disc pl-6 space-y-2 mb-12 marker:text-indigo-600">
        <li>
          <strong>Pre-Construction</strong> — Master scheduling, phase planning, resource forecasting
        </li>
        <li>
          <strong>Execution</strong> — Daily task tracking, progress updates, delay management
        </li>
        <li>
          <strong>Multi-Trade Coordination</strong> — Trade stacking prevention, interface management
        </li>
        <li>
          <strong>Closeout</strong> — Punch list scheduling, commissioning, handover
        </li>
      </ul>

      <ComparisonTable
        title="SpaceCapture vs MS Project, Primavera, and Spreadsheets"
        features={[
          {
            feature: 'Field updates',
            spaceCapture: 'Real-time from the job site',
            competitors: 'Office-only — field calls to report status',
          },
          {
            feature: 'Field integration',
            spaceCapture: 'Inspections + reporting in one app',
            competitors: 'Separate tools required',
          },
          {
            feature: 'Sub access',
            spaceCapture: 'Built-in portal — subs see their tasks',
            competitors: 'PDFs, emails, or not at all',
          },
          {
            feature: 'Delay alerts',
            spaceCapture: 'Automated — know before it cascades',
            competitors: 'Manual tracking, often too late',
          },
          {
            feature: 'Pricing',
            spaceCapture: 'Per user, no surprises',
            competitors: 'Per seat, often expensive',
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
