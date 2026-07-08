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
  title: 'Prefab Construction Software | Prefabricated Building Tools',
  description:
    'Field software for prefab and prefabricated construction. Track factory production, transport, and site assembly in one platform with AI defect detection.',
  keywords: [
    'prefab',
    'prefab building',
    'prefab construction',
    'prefab building construction',
    'prefab building cost',
    'prefab commercial buildings',
    'prefab construction companies',
    'prefab building contractor',
    'prefab building structure',
    'prefab industries',
    'prefabricated building',
    'prefabricated building construction',
    'prefabricated building structure',
    'prefabricated building cost',
    'prefabricated construction',
    'prefabricated structures',
    'prefabricated modular building',
    'prefabricated modular construction',
    'fabricated buildings',
    'fabricated building construction',
    'fabricated construction',
    'ready made building structures',
    'building structures',
    'pre engineered building',
    'pre engineered building manufacturers',
    'steel prefabrication',
    'prefabricated building contractors',
    'commercial modular construction',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/prefab-construction-software',
  },
  openGraph: {
    type: 'website',
    title: 'Prefab Construction Software | SpaceCapture',
    description:
      'Field software for prefab and prefabricated construction. Track factory production, transport, and site assembly in one platform with AI defect detection.',
    url: 'https://spacecapture.ai/prefab-construction-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is prefab construction software?',
    answer:
      'Prefab (prefabricated) construction software is a digital platform that helps prefab builders manage factory production, transport, and on-site assembly. It includes pre-engineered building (PEB) tracking, structural component QC, and integration with factory MES systems.',
  },
  {
    question: 'How is prefab different from modular?',
    answer:
      'Modular typically refers to whole volumetric units (bathroom pods, hotel rooms, etc.) while prefab often refers to panelized components (walls, floors, roof trusses). Both are forms of off-site construction and SpaceCapture supports both with configurable templates.',
  },
  {
    question: 'Does it work for pre-engineered buildings (PEB)?',
    answer:
      'Yes. Track primary and secondary steel members, connections, finishes, and on-site erection. Generate as-built records for warranty and operations.',
  },
  {
    question: 'Can I track prefab units by serial number?',
    answer:
      'Yes. Each component (panel, beam, pod) can be tracked by serial number with full production, transport, and installation history.',
  },
  {
    question: 'Does it integrate with CNC and BIM systems?',
    answer:
      'Yes. We have a public API and can connect to common CNC controllers and BIM platforms. Talk to us about your specific stack.',
  },
  {
    question: 'What about steel prefab?',
    answer:
      'Steel prefab is a major use case. Track each steel member from fabrication to erection, with QC templates for welds, bolts, coatings, and alignment.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Prefab Construction Software',
  description:
    'Field software for prefab and prefabricated construction. Track factory production, transport, and site assembly in one platform with AI defect detection.',
  url: 'https://spacecapture.ai/prefab-construction-software',
  serviceType: 'Prefab Construction Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/prefab-construction-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Prefab Construction Software for Off-Site & PEB Builders"
      subtitle="Track factory production, transport, and on-site erection in one platform. Built for prefab, panelized, and pre-engineered building (PEB) teams."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Prefab Construction?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Prefab (prefabricated) construction produces building components in
          a factory — walls, floors, roof trusses, bathroom pods, structural
          steel, even entire rooms — and assembles them on site. It is faster,
          safer, more sustainable, and more consistent than traditional
          stick-built construction. The trade-off is a more complex supply
          chain and a stronger need for digital coordination between factory
          and site.
        </p>
      </div>

      <h2>Capabilities for Prefab Builders</h2>
      <ul className="grid md:grid-cols-2 gap-4 my-8">
        {[
          'Factory QC templates per component type',
          'Component serial number tracking',
          'Production-line photo and video capture',
          'AI defect detection on assembly photos',
          'Pre-transport and post-transport inspections',
          'On-site erection QC and structural connections',
          'Multi-trade coordination at site',
          'Owner and PEB inspector portal',
          'Final handover documentation',
          'Warranty tracking by component',
          'Multi-factory support with per-site dashboards',
          'Offline capture in factory and on site',
          'Public API for MES / CNC integration',
          'Steel, timber, and concrete workflows',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
            <span className="text-slate-700 font-medium">{item}</span>
          </li>
        ))}
      </ul>

      <ComparisonTable
        title="SpaceCapture vs General Construction Software"
        features={[
          {
            feature: 'Factory QC templates',
            spaceCapture: 'Built in',
            competitors: 'Manual or none',
          },
          {
            feature: 'Component serial tracking',
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
