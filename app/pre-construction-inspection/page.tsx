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
  title: 'Pre-Construction Inspection Software | Pre-Build Site Audits',
  description:
    'Field software for pre-construction, pre-building, and pre-site inspections. Document existing conditions, identify risks, and create a baseline before work begins.',
  keywords: [
    'pre construction inspection',
    'pre building inspection',
    'pre site inspection',
    'pre construction',
    'pre construction services',
    'pre construction steps',
    'pre construction planning',
    'pre construction project manager',
    'pre construction contract',
    'pre built construction',
    'pre construction services',
    'pre construction planning',
    'preconstruction planning',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/pre-construction-inspection',
  },
  openGraph: {
    type: 'website',
    title: 'Pre-Construction Inspection Software | SpaceCapture',
    description:
      'Field software for pre-construction, pre-building, and pre-site inspections. Document existing conditions, identify risks, and create a baseline before work begins.',
    url: 'https://spacecapture.ai/pre-construction-inspection',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is a pre-construction inspection?',
    answer:
      'A pre-construction inspection (also called a pre-building or pre-site inspection) is a documented survey of the existing conditions at a site before construction begins. It captures photos, measurements, and observations of adjacent properties, utilities, vegetation, and access — establishing a baseline that protects all parties from damage claims.',
  },
  {
    question: 'Who performs a pre-construction inspection?',
    answer:
      'Typically the GC, a third-party inspector, or a consulting engineer. The report is shared with the owner, neighbours, and the insurer to establish a baseline.',
  },
  {
    question: 'How does SpaceCapture help?',
    answer:
      'The mobile app lets an inspector walk the site with a structured checklist, capture geo-tagged photos, and produce a signed PDF report in under an hour — replacing the multi-day paper-based process.',
  },
  {
    question: 'What does a pre-construction inspection cover?',
    answer:
      'Adjacent structures (for crack / damage baseline), sidewalks and curbs, utilities (manholes, hydrants, poles), vegetation (trees of concern), access points, drainage, and any pre-existing hazards.',
  },
  {
    question: 'Can I compare pre- and post-construction conditions?',
    answer:
      'Yes. Run a post-construction inspection using the same template, and SpaceCapture will diff the two — highlighting any new defects that may be construction-related.',
  },
  {
    question: 'Is the report legally defensible?',
    answer:
      'Yes. Every photo and observation is timestamped, geo-tagged, and digitally signed. Reports are tamper-evident and accepted by most insurers and dispute-resolution bodies.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Pre-Construction Inspection Software',
  description:
    'Field software for pre-construction, pre-building, and pre-site inspections. Document existing conditions, identify risks, and create a baseline before work begins.',
  url: 'https://spacecapture.ai/pre-construction-inspection',
  serviceType: 'Pre-Construction Inspection Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/pre-construction-inspection')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Pre-Construction Inspection Software"
      subtitle="Document existing conditions, identify risks, and create a baseline before work begins. Geo-tagged photos, structured checklists, and signed PDF reports in under an hour."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is a Pre-Construction Inspection?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          A pre-construction inspection (also called a pre-building or
          pre-site inspection) is a documented survey of existing site
          conditions before construction begins. It captures photos,
          measurements, and observations of adjacent structures, utilities,
          vegetation, drainage, and access — establishing a baseline that
          protects all parties from spurious damage claims during and after
          construction.
        </p>
      </div>

      <h2>Why Pre-Construction Inspections Matter</h2>
      <p>
        Without a documented baseline, owners and contractors are exposed
        to claims from neighbours, insurers, and regulators. A
        pre-construction inspection creates a clear, photo-anchored
        record of the site as it exists before the work starts — and
        provides a basis for comparison when the project is complete.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          What a Pre-Construction Inspection Covers
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Adjacent structures (crack / damage baseline)',
            'Sidewalks, curbs, and paving',
            'Utilities (manholes, hydrants, poles, signs)',
            'Vegetation (trees of concern, root zones)',
            'Access points and traffic routes',
            'Drainage patterns and outfalls',
            'Pre-existing hazards (asbestos, lead, mould)',
            'Site topography and access',
            'Neighbouring property boundaries',
            'Photo evidence of every façade within the zone of influence',
            'GPS-tagged map of findings',
            'Sign-off from inspector and owner',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <ComparisonTable
        title="SpaceCapture vs Paper Pre-Construction Surveys"
        features={[
          {
            feature: 'Survey time',
            spaceCapture: '1–2 hours',
            competitors: '1–2 days',
          },
          {
            feature: 'Photo evidence',
            spaceCapture: 'Geo-tagged, organized',
            competitors: 'Camera roll, unorganized',
          },
          {
            feature: 'Defensibility',
            spaceCapture: 'Tamper-evident',
            competitors: 'Easy to challenge',
          },
          {
            feature: 'Comparison with post-construction',
            spaceCapture: 'Built in',
            competitors: 'Manual',
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
