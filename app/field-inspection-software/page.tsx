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
  title: 'Field Inspection Software & App | Mobile Field Inspections',
  description:
    'The #1 field inspection software for construction, utilities, oil & gas, and telecom teams. Run mobile field inspections offline, capture photo evidence, and generate instant reports from any device.',
  keywords: [
    'field inspections',
    'field inspection software',
    'field inspection app',
    'field inspection',
    'field data capture',
    'field data capture software',
    'field operations software',
    'field operations app',
    'field service management software',
    'field service software',
    'field service app',
    'field workforce management',
    'mobile field service apps',
    'site inspection software',
    'site inspection app',
    'offline field inspection app',
    'offline inspection app',
    'remote inspection software',
    'automated field inspections',
    'inspection field',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/field-inspection-software',
  },
  openGraph: {
    type: 'website',
    title: 'Field Inspection Software | SpaceCapture',
    description:
      'Mobile field inspection software for construction, utilities, oil & gas, and telecom teams. Offline-first, photo evidence, instant reports.',
    url: 'https://spacecapture.ai/field-inspection-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is field inspection software?',
    answer:
      'Field inspection software is a mobile-first platform that helps field-based teams — construction, utilities, oil & gas, telecom, facilities — conduct inspections, audits, and data capture on-site. It works offline, attaches photo evidence, and generates reports in real time.',
  },
  {
    question: 'How is field inspection software different from a paper checklist?',
    answer:
      'A paper checklist produces unsearchable, unsynced, and easily lost data. Field inspection software centralizes every inspection in the cloud, geo-tags each finding, attaches photos, requires digital sign-off, and produces analytics dashboards in real time.',
  },
  {
    question: 'Can it work without internet?',
    answer:
      'Yes. SpaceCapture is offline-first. Inspections, photos, and signatures are captured on the device and synchronized to the cloud when connectivity returns — essential for remote job sites, basements, and rural infrastructure.',
  },
  {
    question: 'What industries use field inspection software?',
    answer:
      'Construction, oil & gas, utilities, telecom tower audits, facility management, manufacturing, logistics, real estate, insurance claims, and government inspections.',
  },
  {
    question: 'Can I customize the inspection forms?',
    answer:
      'Yes. Use the visual form builder to create custom checklists with logic, photo requirements, conditional fields, and digital signatures. Templates can be reused across projects and teams.',
  },
  {
    question: 'How quickly can we deploy?',
    answer:
      'Most teams run their first inspection the same day. We provide pre-built templates for the most common inspection types, and our team can help you customize within 24–48 hours for enterprise rollouts.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Field Inspection Software',
  description:
    'Mobile field inspection software for construction, utilities, oil & gas, telecom, and facility teams. Offline-first, photo evidence, instant reports.',
  url: 'https://spacecapture.ai/field-inspection-software',
  serviceType: 'Field Inspection Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/field-inspection-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Field Inspection Software for Any Field Team"
      subtitle="Run mobile field inspections offline, attach photo evidence, and generate signed reports from any device. Built for construction, utilities, oil & gas, telecom, and facilities."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Field Inspection Software?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Field inspection software digitizes the work of inspectors, auditors,
          and field engineers who visit job sites, infrastructure, and
          properties to verify safety, quality, and compliance. It replaces
          paper forms with mobile apps, captures photo evidence, supports
          offline work, and centralizes data in the cloud for real-time
          reporting and analytics.
        </p>
      </div>

      <h2>Why Field Teams Choose SpaceCapture</h2>
      <p>
        Modern field teams operate across multiple sites, often without reliable
        connectivity, and need to share findings with back-office teams in
        real time. SpaceCapture delivers an offline-first mobile experience
        that feels like a paper checklist but produces structured, searchable
        data the moment you reconnect.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Capabilities Designed for the Field
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            '100% offline inspection capture — no Wi-Fi required',
            'Photo, video, and voice-note attachments on every finding',
            'AI-assisted defect detection on site photos',
            'QR code and barcode scanning for asset tracking',
            'Geofencing and geo-tagged findings',
            'Digital signatures on-device',
            'Real-time sync to a centralized cloud dashboard',
            'Pre-built templates for safety, quality, and compliance audits',
            'Custom form builder with logic and conditional fields',
            'Multi-language support for global field teams',
            'Role-based access for inspectors, supervisors, and admins',
            'Export to PDF, CSV, and JSON for downstream systems',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>Field Inspection Workflow</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Plan the inspection:</strong> Schedule a job, assign an
          inspector, and pre-load the site data (assets, drawings, prior
          findings).
        </li>
        <li className="pl-2">
          <strong>Capture on-site:</strong> Walk the site with the mobile app.
          Photos, voice notes, and ratings are captured per finding.
        </li>
        <li className="pl-2">
          <strong>Auto-detect issues:</strong> AI flags likely defects on the
          photos you took — saving review time.
        </li>
        <li className="pl-2">
          <strong>Sync and report:</strong> Once back online, all data syncs
          to the cloud. Generate dashboards and PDF reports in real time.
        </li>
        <li className="pl-2">
          <strong>Close the loop:</strong> Trigger corrective actions,
          notifications, and follow-up inspections automatically.
        </li>
      </ol>

      <ComparisonTable
        title="SpaceCapture vs Paper Field Inspections"
        features={[
          {
            feature: 'Capture time per inspection',
            spaceCapture: 'Up to 50% faster',
            competitors: 'Baseline',
          },
          {
            feature: 'Data accuracy',
            spaceCapture: 'Validated, geo-tagged',
            competitors: 'Handwritten, error-prone',
          },
          {
            feature: 'Reporting',
            spaceCapture: 'Real-time dashboards + PDF',
            competitors: 'Manual retyping, days later',
          },
          {
            feature: 'Offline support',
            spaceCapture: 'Full offline + auto sync',
            competitors: 'None',
          },
        ]}
      />

      <div className="mb-12 mt-12">
        <h2>Industries We Serve</h2>
        <p>
          Construction,{' '}
          <a href="/industries/oil-and-gas" className="text-indigo-600 underline">
            oil & gas
          </a>
          ,{' '}
          <a href="/industries/utilities" className="text-indigo-600 underline">
            utilities
          </a>
          ,{' '}
          <a href="/industries/telecom" className="text-indigo-600 underline">
            telecom
          </a>
          ,{' '}
          <a href="/industries/manufacturing" className="text-indigo-600 underline">
            manufacturing
          </a>
          ,{' '}
          <a href="/industries/real-estate" className="text-indigo-600 underline">
            real estate
          </a>
          ,{' '}
          <a href="/industries/facility-management" className="text-indigo-600 underline">
            facility management
          </a>
          ,{' '}
          <a href="/industries/insurance" className="text-indigo-600 underline">
            insurance
          </a>
          , and{' '}
          <a href="/industries/hvac" className="text-indigo-600 underline">
            HVAC
          </a>
          . See our{' '}
          <a href="/field-data-capture-software" className="text-indigo-600 underline">
            field data capture software
          </a>{' '}
          for related capabilities.
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
