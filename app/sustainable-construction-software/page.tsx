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
  title: 'Sustainable Construction Software for Green Builders',
  description:
    'Field software for sustainable, green, and eco-friendly construction. Track LEED, BREEAM, and net-zero compliance from your phone with AI-powered verification.',
  keywords: [
    'sustainable construction',
    'sustainability in the construction industry',
    'construction and sustainability',
    'environmental sustainability in construction',
    'environmental sustainability in construction industry',
    'sustainability of a building',
    'sustainability in design and construction',
    'sustainable design in construction',
    'sustainable development in construction',
    'sustainable development in construction industry',
    'cost of sustainable construction',
    'sustainable construction companies',
    'sustainable construction projects',
    'sustainable construction technology',
    'sustainable construction site',
    'sustainable house construction',
    'sustainable home construction',
    'sustainable home builder',
    'sustainable building companies',
    'sustainable building development',
    'sustainable building construction',
    'sustainable building projects',
    'sustainable building technologies',
    'sustainable building technology',
    'sustainable building',
    'eco friendly construction',
    'eco friendly buildings',
    'eco friendly builders',
    'eco friendly home builders',
    'eco friendly home construction',
    'eco friendly building construction',
    'eco home construction',
    'environmentally friendly buildings',
    'environmentally friendly construction',
    'green building contractors',
    'green building construction companies',
    'green building consultancy',
    'zero carbon construction',
    'leed certification',
    'breeam',
    'net zero construction',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/sustainable-construction-software',
  },
  openGraph: {
    type: 'website',
    title: 'Sustainable Construction Software | SpaceCapture',
    description:
      'Field software for sustainable, green, and eco-friendly construction. Track LEED, BREEAM, and net-zero compliance from your phone with AI-powered verification.',
    url: 'https://spacecapture.ai/sustainable-construction-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is sustainable construction software?',
    answer:
      'Sustainable construction software is a digital platform that helps builders, developers, and owners design, build, and certify projects to green-building standards such as LEED, BREEAM, WELL, Passive House, and net-zero. It tracks materials, energy performance, waste, water use, and certification evidence.',
  },
  {
    question: 'Does SpaceCapture support LEED certification?',
    answer:
      'Yes. Pre-built templates for the most common LEED v4 BD+C credits, with photo evidence and signed checklists per credit. Export evidence packages for GBCI submission.',
  },
  {
    question: 'Does it work for BREEAM, WELL, or Passive House?',
    answer:
      'Yes. Templates are configurable — adapt the same platform to any certification standard.',
  },
  {
    question: 'Can I track embodied carbon?',
    answer:
      'Yes. Track material quantities, supplier EPDs (Environmental Product Declarations), and total embodied carbon per project. Generate reports for investor or regulatory disclosure.',
  },
  {
    question: 'Does it work for net-zero projects?',
    answer:
      'Yes. Track on-site renewables, energy modeling inputs, and operational performance against net-zero targets.',
  },
  {
    question: 'Can I track waste and recycling?',
    answer:
      'Yes. Log waste streams, weights, and diversion rates. Generate reports for TRUE Zero Waste certification or local regulations.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Sustainable Construction Software',
  description:
    'Field software for sustainable, green, and eco-friendly construction. Track LEED, BREEAM, and net-zero compliance from your phone with AI-powered verification.',
  url: 'https://spacecapture.ai/sustainable-construction-software',
  serviceType: 'Sustainable Construction Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/sustainable-construction-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Sustainable Construction Software for Green Builders"
      subtitle="Track LEED, BREEAM, and net-zero compliance from the field. AI-powered verification, embodied-carbon tracking, and certification-ready evidence packages."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Sustainable Construction?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Sustainable construction is the practice of designing and building
          in ways that reduce environmental impact — through energy
          efficiency, water conservation, material selection, waste
          reduction, and indoor environmental quality. Programs like LEED,
          BREEAM, WELL, and Passive House certify buildings against these
          standards.
        </p>
      </div>

      <h2>Why Green Builders Choose SpaceCapture</h2>
      <p>
        Green-building certification requires evidence at every step — from
        material sourcing to final commissioning. SpaceCapture makes that
        evidence capture fast, consistent, and audit-ready, with AI
        assistance to catch gaps before submission.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Capabilities for Sustainable Construction
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Pre-built templates for LEED v4 BD+C credits',
            'Configurable for BREEAM, WELL, Passive House, net-zero',
            'Material tracking with EPD capture',
            'Embodied-carbon calculation and reporting',
            'On-site renewables and energy performance tracking',
            'Waste and recycling logs with diversion rates',
            'Indoor air quality and thermal comfort checks',
            'Stormwater and erosion control inspections',
            'Commissioning checklists with photo evidence',
            'Owner and tenant green-building handover package',
            'Photo evidence auto-tagged to certification credits',
            'Export evidence packages for GBCI / BREEAM submission',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <ComparisonTable
        title="SpaceCapture vs General Project Software for Green Building"
        features={[
          {
            feature: 'LEED / BREEAM templates',
            spaceCapture: 'Built in',
            competitors: 'Build your own',
          },
          {
            feature: 'Embodied carbon tracking',
            spaceCapture: 'Built in',
            competitors: 'Spreadsheet',
          },
          {
            feature: 'EPD capture',
            spaceCapture: 'Photo + metadata',
            competitors: 'Manual file storage',
          },
          {
            feature: 'Certification evidence export',
            spaceCapture: 'One-click package',
            competitors: 'Manual assembly',
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
