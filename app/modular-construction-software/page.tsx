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
  title: 'Modular Construction Software for Off-Site Builders',
  description:
    'Field software for modular and prefab construction. Track factory production, site delivery, and on-site assembly in one mobile platform with AI defect detection.',
  keywords: [
    'modular construction',
    'modular construction software',
    'modular buildings',
    'modular building',
    'modular building construction',
    'modular housing construction',
    'modular building companies',
    'modular building contractors',
    'modular building construction',
    'modular construction companies',
    'modular construction architecture',
    'modular construction projects',
    'modular construction industry',
    'modular design and construction',
    'modular and prefabricated construction',
    'modular building industry',
    'modular building design',
    'residential modular buildings',
    'commercial modular construction',
    'concrete modular construction',
    'timber modular construction',
    'modular high rise',
    'modular high rise construction',
    'offsite construction',
    'offsite modular construction',
    'offsite building',
    'offsite manufacturing construction',
    'offsite manufacturing',
    'top modular construction companies',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/modular-construction-software',
  },
  openGraph: {
    type: 'website',
    title: 'Modular Construction Software | SpaceCapture',
    description:
      'Field software for modular and prefab construction. Track factory production, site delivery, and on-site assembly in one mobile platform with AI defect detection.',
    url: 'https://spacecapture.ai/modular-construction-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is modular construction software?',
    answer:
      'Modular construction software is a digital platform that helps modular and off-site builders manage the full lifecycle — from factory production and quality control, through transport, to on-site assembly and final handover. It tracks production, defects, deliveries, and installation as a unified workflow.',
  },
  {
    question: 'How is it different from traditional construction software?',
    answer:
      'Modular workflows have a factory stage that traditional software does not model. SpaceCapture includes production-line QC templates, transport checklists, and on-site assembly inspections within the same platform.',
  },
  {
    question: 'Does it support both volumetric and panelized modular?',
    answer:
      'Yes. Customize templates for your specific module type — bathroom pods, structural panels, volumetric units, or hybrid assemblies.',
  },
  {
    question: 'Can I track modules by serial number?',
    answer:
      'Yes. Each module can be tracked by serial number, with full production history, QC results, transport records, and installation sign-off.',
  },
  {
    question: 'Does it integrate with factory MES systems?',
    answer:
      'Yes. We have a public API and pre-built connectors for common MES systems. Talk to us about a custom integration.',
  },
  {
    question: 'Can I use it for high-rise modular?',
    answer:
      'Yes. Pre-built templates for multi-story modular projects including lift sequencing, inter-module connections, and structural QA/QC.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Modular Construction Software',
  description:
    'Field software for modular and prefab construction. Track factory production, site delivery, and on-site assembly in one mobile platform with AI defect detection.',
  url: 'https://spacecapture.ai/modular-construction-software',
  serviceType: 'Modular Construction Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/modular-construction-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Modular Construction Software for Off-Site Builders"
      subtitle="Track factory production, transport, and on-site assembly in one mobile platform. Built for modular, prefab, and off-site construction teams."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Modular Construction?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Modular construction is a method where buildings are produced as
          prefabricated modules in a factory, then transported to the site for
          assembly. It is faster, more sustainable, and more consistent than
          traditional stick-built construction — but it requires a different
          set of quality-control processes and digital tooling.
        </p>
      </div>

      <h2>Why Modular Builders Choose SpaceCapture</h2>
      <p>
        Modular builders need to track quality at every stage — factory
        production, transport, and on-site assembly. SpaceCapture gives you a
        single mobile platform to do all three, with module-level tracking and
        AI defect detection.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Capabilities for Modular Builders
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Factory QC templates per module type',
            'Module serial number tracking',
            'Production-line photo and video capture',
            'AI defect detection on assembly photos',
            'Pre-transport and post-transport inspections',
            'Crane lift sequencing and safety checklists',
            'On-site assembly QC and structural connections',
            'Multi-trade coordination at assembly site',
            'Owner and modular inspector portal',
            'Final handover documentation',
            'Warranty tracking by module',
            'Multi-factory support with per-site dashboards',
            'Offline capture in factory and on site',
            'Public API for MES integration',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <ComparisonTable
        title="SpaceCapture vs General Construction Software"
        features={[
          {
            feature: 'Factory QC templates',
            spaceCapture: 'Built in',
            competitors: 'Manual or none',
          },
          {
            feature: 'Module serial tracking',
            spaceCapture: 'Built in',
            competitors: 'Custom spreadsheets',
          },
          {
            feature: 'Pre-/post-transport checks',
            spaceCapture: 'Built in',
            competitors: 'Manual',
          },
          {
            feature: 'AI defect detection',
            spaceCapture: 'Built in',
            competitors: 'Add-on or none',
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
