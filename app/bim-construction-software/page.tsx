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
  title: 'BIM Construction Software',
  description:
    'Manage BIM models, coordinate clashes, track issues, and collaborate in real time with mobile tools for AEC teams.',
  keywords: [
    'bim software',
    'bim construction software',
    'bim building information modeling',
    'bim software for construction',
    'bim coordination software',
    'bim management software',
    'bim modeling software',
    'building information modeling software',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/bim-construction-software',
  },
  openGraph: {
    type: 'website',
    title: 'BIM Construction Software | SpaceCapture',
    description:
      'The complete BIM construction software for architecture, engineering, and construction teams. Manage BIM models, coordinate clashes, track issues, and collaborate in real-time.',
    url: 'https://spacecapture.ai/bim-construction-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is BIM construction software?',
    answer:
      'BIM (Building Information Modeling) construction software is a digital platform that helps architecture, engineering, and construction (AEC) teams create, manage, and collaborate on 3D building models. It includes features for model viewing, clash detection, issue tracking, and coordination across disciplines.',
  },
  {
    question: 'How does SpaceCapture support BIM workflows?',
    answer:
      'SpaceCapture integrates BIM model viewing with field inspections and issue tracking. Teams can view BIM models on-site, log issues directly from the field, and sync updates back to the office. This bridges the gap between the BIM model and actual construction progress.',
  },
  {
    question: 'What BIM file formats does SpaceCapture support?',
    answer:
      'SpaceCapture supports IFC, Revit, and other common BIM file formats. You can upload models directly from your BIM software and view them on any device without special software.',
  },
  {
    question: 'Is SpaceCapture suitable for small construction firms?',
    answer:
      'Yes. SpaceCapture scales from solo contractors to large AEC firms. The mobile-first design means you don\'t need expensive hardware or IT infrastructure to use BIM on-site.',
  },
  {
    question: 'How does BIM help reduce construction costs?',
    answer:
      'BIM helps identify design conflicts before construction begins, reducing costly change orders. It improves coordination between disciplines, reduces rework, and provides accurate quantity takeoffs for better budgeting.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'BIM Construction Software',
  description:
    'Complete BIM construction software for architecture, engineering, and construction teams. Model viewing, clash detection, issue tracking, and real-time collaboration.',
  url: 'https://spacecapture.ai/bim-construction-software',
  serviceType: 'BIM Software',
  areaServed: 'Worldwide',
});
const softwareSchema = getSoftwareSchema({
  name: 'SpaceCapture - BIM Construction Software',
  description:
    'BIM construction software for viewing models on-site, tracking issues, and coordinating across disciplines. Mobile-first with offline support.',
  url: 'https://spacecapture.ai/bim-construction-software',
  applicationCategory: 'BusinessApplication',
  featureList: [
    'IFC and Revit model viewing',
    'Cloud-based model hosting',
    'Issue tracking from field to office',
    'Photo-linked issue reporting',
    'Discipline coordination',
    'Clash detection and resolution',
    'Version control for models',
    'Offline model viewing',
  ],
  aggregateRating: {
    ratingValue: '4.8',
    reviewCount: '120',
  },
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/bim-construction-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Your BIM Model is Beautiful. Too Bad Nobody On-Site Can See It."
      subtitle="SpaceCapture puts BIM models in your field team's pocket. View models on-site, log issues with photos, and sync back to the office — all from one app."
    >
      {/* Pain Section */}
      <div className="bg-slate-900 rounded-2xl p-8 shadow-xl mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">The BIM Field Problem</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-4">
            <Link2 className="h-6 w-6 text-red-500 shrink-0 mt-1" />
            <div>
              <span className="font-bold text-white block">Your field team is building from 2D prints while you spent weeks on a 3D model</span>
              <span className="text-slate-300 text-sm">The model sits on a desktop in the office. On-site, your team is guessing based on outdated PDFs.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <Eye className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
            <div>
              <span className="font-bold text-white block">Clashes get discovered during construction, not during design</span>
              <span className="text-slate-300 text-sm">That HVAC duct running through a beam? You find out when the contractor calls — after it's built.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-red-400 shrink-0 mt-1" />
            <div>
              <span className="font-bold text-white block">Issues get lost in email chains between disciplines</span>
              <span className="text-slate-300 text-sm">Architect emails structural. Structural emails MEP. Nobody tracks resolution. Problems compound.</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is BIM Construction Software?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          BIM (Building Information Modeling) software lets you design, visualize,
          and coordinate buildings in 3D before a single brick is laid. The
          problem? Most BIM software stays on desktops in the office. The best
          BIM construction software brings those models to the field — so your
          team can actually use them on-site, on their phone, without special
          hardware.
        </p>
      </div>

      <h2>Your BIM Model, Finally in the Field</h2>
      <p>
        SpaceCapture lets your field team view BIM models on any device — no
        expensive hardware, no training. When they spot a clash or issue, they
        snap a photo, log it, and it syncs back to the office. No more
        "I'll email you about it later."
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          BIM That Works On-Site, Not Just In the Office
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'View IFC and Revit models on your phone — no special software',
            'Log issues with photos tied directly to model locations',
            'Track clashes from discovery to resolution',
            'Offline model viewing for sites with no signal',
            'Real-time sync between field and office teams',
            'Version control so you never build from the wrong model',
            'Discipline coordination without the email chains',
            'Cloud hosting so everyone sees the latest version',
            'Integration with Autodesk and BIM 360',
            'Progress documentation tied to the 3D model',
            'Mobile access on any device',
            'Real-time collaboration across disciplines',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>Where BIM Actually Pays Off</h2>
      <ul className="list-disc pl-6 space-y-2 mb-12 marker:text-indigo-600">
        <li>
          <strong>Architecture</strong> — Client presentations, design review, material coordination
        </li>
        <li>
          <strong>Structural Engineering</strong> — Clash detection before rebar is placed, connection details in the field
        </li>
        <li>
          <strong>MEP Engineering</strong> — Systems coordination, routing optimization, installation verification
        </li>
        <li>
          <strong>Construction</strong> — Field coordination, issue tracking, progress documentation
        </li>
        <li>
          <strong>Facility Management</strong> — As-built documentation, maintenance planning, asset tracking
        </li>
      </ul>

      <ComparisonTable
        title="SpaceCapture vs Traditional BIM Software"
        features={[
          {
            feature: 'Mobile access',
            spaceCapture: 'Native app, works offline',
            competitors: 'Desktop or web-only',
          },
          {
            feature: 'Field integration',
            spaceCapture: 'Built-in inspections, 5-minute setup',
            competitors: 'Separate tools required',
          },
          {
            feature: 'Issue tracking',
            spaceCapture: 'Photo-linked, real-time sync',
            competitors: 'Manual, spreadsheet-based',
          },
          {
            feature: 'Pricing',
            spaceCapture: 'Per user, no surprises',
            competitors: 'Per seat, often expensive',
          },
          {
            feature: 'Learning curve',
            spaceCapture: 'Minimal — your field team will actually use it',
            competitors: 'Steep — requires training',
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
