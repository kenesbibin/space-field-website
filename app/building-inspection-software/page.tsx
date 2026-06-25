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
  title: 'Building Inspection Software & App | Structural Inspection Tools',
  description:
    'Mobile building inspection software for structural, facade, and commercial building inspections. Digital checklists, photo evidence, and instant reports for inspectors, engineers, and facility teams.',
  keywords: [
    'building inspection',
    'building inspections',
    'building inspection software',
    'building inspection services',
    'building inspection services software',
    'building checks',
    'building inspection reports',
    'building inspector',
    'building construction inspector',
    'construction and building inspector',
    'building safety inspection',
    'building and safety inspection',
    'structural inspection',
    'structural survey',
    'building condition report',
    'building condition assessment',
    'building condition survey',
    'facade inspection',
    'cladding inspection',
    'cladding inspections',
    'dilapidation inspection',
    'dilapidation inspections',
    'dilapidation reports',
    'fire safety inspection',
    'building permit inspection',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/building-inspection-software',
  },
  openGraph: {
    type: 'website',
    title: 'Building Inspection Software | SpaceCapture',
    description:
      'Mobile building inspection software for structural, facade, and commercial buildings. Digital checklists, photo evidence, instant reports.',
    url: 'https://spacecapture.ai/building-inspection-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is building inspection software?',
    answer:
      'Building inspection software is a mobile platform that helps structural engineers, building inspectors, and facility teams document the condition of a building. It supports structural surveys, facade inspections, fire safety checks, dilapidation reports, and ongoing maintenance inspections with digital checklists, photo evidence, and signed PDF reports.',
  },
  {
    question: 'How is it different from construction inspection software?',
    answer:
      'Construction inspection software focuses on the build phase (pre-pour, pre-drywall, QA/QC) while building inspection software targets the operational phase of an existing structure (annual condition surveys, facade, fire safety, dilapidation). SpaceCapture supports both with role-based templates.',
  },
  {
    question: 'Can I attach photos to specific rooms or zones?',
    answer:
      'Yes. Each inspection can be organized by floor, wing, room, or zone. Photos are auto-tagged to the relevant area and re-orderable in the final report.',
  },
  {
    question: 'Does it support fire safety inspections?',
    answer:
      'Yes. Pre-built templates for fire door, extinguisher, alarm, and means-of-escape inspections are included. The same checklist engine supports custom fire-safety workflows for AHJ compliance.',
  },
  {
    question: 'Can engineers and architects co-sign a report?',
    answer:
      'Yes. Multi-party digital signatures are built in. Add the structural engineer, the building owner, and any other required signatory — each signs in sequence or in parallel.',
  },
  {
    question: 'Does it support drone-captured imagery?',
    answer:
      'Yes. Drone photos, 360° captures, and standard smartphone photos can all be imported into a single inspection record. AI-assisted defect detection works on any of these sources.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Building Inspection Software',
  description:
    'Mobile building inspection software for structural engineers, inspectors, and facility teams. Digital checklists, photo evidence, instant reports.',
  url: 'https://spacecapture.ai/building-inspection-software',
  serviceType: 'Building Inspection Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/building-inspection-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Building Inspection Software for Engineers, Inspectors & Facility Teams"
      subtitle="Inspect commercial, residential, and industrial buildings faster. Capture photo evidence, generate signed reports, and stay compliant with structural, fire safety, and dilapidation standards."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Building Inspection Software?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Building inspection software is a digital platform used by structural
          engineers, building inspectors, and facility management teams to
          document the condition of existing buildings. It standardizes
          structural surveys, facade and cladding inspections, fire-safety
          checks, dilapidation reports, and ongoing maintenance inspections —
          replacing paper forms and Excel trackers with a single mobile-first
          system.
        </p>
      </div>

      <h2>Built for the Realities of Building Inspection</h2>
      <p>
        Whether you are inspecting a high-rise facade, a single-family home
        before sale, or a fire-safety system on a quarterly cadence,
        SpaceCapture adapts to your workflow. The platform supports
        multi-inspector teams, geo-tagged photo evidence, AI-assisted defect
        detection on photos, and signed PDF reports in under a minute.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Inspection Types Supported
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Structural condition surveys',
            'Facade and cladding inspections (incl. high-rise)',
            'Fire door, alarm, and extinguisher checks',
            'Dilapidation surveys (pre- and post-construction)',
            'Roof and waterproofing inspections',
            'Electrical and mechanical compliance audits',
            'HVAC and plumbing condition reports',
            'Annual / quarterly maintenance inspections',
            'Pre-purchase and pre-lease building inspections',
            'Insurance risk assessments',
            'Asbestos and hazardous material surveys',
            'Energy performance and sustainability audits',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>How It Works</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Pick a template:</strong> Choose from structural, facade,
          fire-safety, dilapidation, or build your own with the visual form
          builder.
        </li>
        <li className="pl-2">
          <strong>Inspect on-site:</strong> Walk the building with the mobile
          app, attaching photos, voice notes, and condition ratings as you go.
        </li>
        <li className="pl-2">
          <strong>Auto-detect defects:</strong> AI flags cracks, corrosion,
          moisture, and other common defects from your photos — accelerating
          the review.
        </li>
        <li className="pl-2">
          <strong>Generate signed reports:</strong> Output a branded, signed
          PDF report in minutes. Multi-party e-signature included.
        </li>
      </ol>

      <ComparisonTable
        title="SpaceCapture vs Paper Building Inspections"
        features={[
          {
            feature: 'Inspection time per building',
            spaceCapture: 'Up to 40% faster',
            competitors: 'Baseline',
          },
          {
            feature: 'Report turnaround',
            spaceCapture: 'Same day',
            competitors: '1–2 weeks',
          },
          {
            feature: 'Defect detection on photos',
            spaceCapture: 'AI-assisted',
            competitors: 'Manual review only',
          },
          {
            feature: 'Multi-party signatures',
            spaceCapture: 'Built-in',
            competitors: 'Requires DocuSign or similar',
          },
        ]}
      />

      <div className="mb-12 mt-12">
        <h2>Related Solutions</h2>
        <p>
          For construction-phase QA/QC, see our{' '}
          <a href="/construction-inspection-software" className="text-indigo-600 underline">
            construction inspection software
          </a>
          . For facility management teams, see our{' '}
          <a href="/industries/facility-management" className="text-indigo-600 underline">
            facility management solution
          </a>
          . For high-rise cladding specifically, see our{' '}
          <a href="/cladding-inspection-software" className="text-indigo-600 underline">
            cladding inspection software
          </a>
          .
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
