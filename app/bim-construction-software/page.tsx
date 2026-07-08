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
  title: 'BIM Construction Software | AI-Powered BIM for the Field',
  description:
    'BIM construction software for the field. Compare BIM models to as-built reality with AI-powered mobile capture. Detect deviations, validate installations, and sync back to the model.',
  keywords: [
    'bim',
    'bim construction',
    'bim construction software',
    'bim building',
    'building bim',
    'bim in construction industry',
    'bim and construction',
    'bim 4d',
    '4d bim',
    'use of bim',
    'use of bim in construction',
    'bim cost',
    'bim planning',
    'bim for contractors',
    'construction project management',
    'bim companies',
    'bim consultancy',
    'bim services',
    'bim coordination',
    'bim modeling',
    'bim software',
    'building information modeling',
    'autodesk bim 360 alternative',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/bim-construction-software',
  },
  openGraph: {
    type: 'website',
    title: 'BIM Construction Software | SpaceCapture',
    description:
      'BIM construction software for the field. Compare BIM models to as-built reality with AI-powered mobile capture. Detect deviations, validate installations, and sync back to the model.',
    url: 'https://spacecapture.ai/bim-construction-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is BIM construction software?',
    answer:
      'BIM (Building Information Modeling) construction software helps teams design, coordinate, and construct buildings using a 3D digital model. The best modern BIM tools extend that model into the field — letting inspectors compare as-built reality to the design and capture deviations in real time.',
  },
  {
    question: 'How does SpaceCapture integrate with BIM?',
    answer:
      'SpaceCapture imports your BIM model (IFC, Revit, etc.), lets you pin field photos and notes to specific elements, and uses AI to detect deviations between the as-built and the design. Findings flow back to the model as RFIs or change requests.',
  },
  {
    question: 'Does it work with Revit and IFC files?',
    answer:
      'Yes. We support both Revit (.rvt) and IFC formats. Export back to Revit or IFC after field capture.',
  },
  {
    question: 'Can I run clash detection on site?',
    answer:
      'Yes. Pin the clash to a specific element in the model, attach a photo, and create an RFI for the design team — all from the field app.',
  },
  {
    question: 'Is this an alternative to Autodesk BIM 360?',
    answer:
      'Yes. SpaceCapture is built for the field, while BIM 360 is built for the office. Many customers use both: BIM 360 for design coordination and SpaceCapture for field capture, photo documentation, and AI defect detection.',
  },
  {
    question: 'Does it support 4D BIM (schedule-linked)?',
    answer:
      'Yes. Link model elements to schedule activities, and SpaceCapture can validate progress by comparing site photos to expected state at a given date.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'BIM Construction Software',
  description:
    'BIM construction software for the field. Compare BIM models to as-built reality with AI-powered mobile capture.',
  url: 'https://spacecapture.ai/bim-construction-software',
  serviceType: 'BIM Construction Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/bim-construction-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="BIM Construction Software That Goes to the Field"
      subtitle="Connect your BIM model to the field. AI-powered mobile capture compares as-built reality to the design, flags deviations, and syncs findings back to the model."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is BIM?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          BIM (Building Information Modeling) is a 3D digital representation
          of a building's physical and functional characteristics. It is used
          by architects, engineers, contractors, and owners to design,
          coordinate, construct, and operate buildings. The best modern BIM
          tools extend the model into the field — letting inspectors
          compare as-built reality to the design and capture deviations in
          real time.
        </p>
      </div>

      <h2>From Office Model to Field Reality</h2>
      <p>
        Most BIM workflows stop at the office. SpaceCapture takes the model
        into the field: every photo, every finding, every deviation is
        captured against a specific BIM element, with AI flagging issues
        before they become RFIs.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Capabilities
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Import IFC and Revit models',
            'Pin photos and notes to specific BIM elements',
            'AI deviation detection between model and as-built',
            'Auto-generate RFIs from field findings',
            '4D BIM progress validation',
            'Clash detection capture in the field',
            'As-built model export with annotations',
            'Multi-trade coordination around the model',
            'Offline model viewing on site',
            'Integration with BIM 360, Revit, Navisworks',
            'Integration with Procore, Autodesk Construction Cloud',
            'Public API for custom integrations',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <ComparisonTable
        title="SpaceCapture vs Autodesk BIM 360"
        features={[
          {
            feature: 'Field-first design',
            spaceCapture: 'Yes',
            competitors: 'Office-first',
          },
          {
            feature: 'AI defect detection',
            spaceCapture: 'Built in',
            competitors: 'Add-on or none',
          },
          {
            feature: 'Offline model viewing',
            spaceCapture: 'Yes',
            competitors: 'Limited',
          },
          {
            feature: 'Mobile-first',
            spaceCapture: 'Native iOS/Android',
            competitors: 'Web-first',
          },
          {
            feature: 'Pricing',
            spaceCapture: 'Per user, transparent',
            competitors: 'Per seat, complex tiers',
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
