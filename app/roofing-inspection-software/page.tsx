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
  title: 'Roofing Inspection Software | AI-Powered Roof Condition Assessments',
  description: 'AI-powered roofing inspection software for contractors and adjusters. Document roof conditions, storm damage, and material assessments with drone and mobile capture.',
  keywords: ['roofing inspection software', 'roof inspection app', 'roof damage assessment'],
  alternates: {
    canonical: 'https://spacecapture.ai/roofing-inspection-software',
  },
};

const faqs = [
  {
    question: "What is roofing inspection software?",
    answer: "Roofing inspection software is a digital platform that enables contractors and insurance adjusters to document roof conditions, assess storm damage, and evaluate material integrity using mobile devices and drone imagery. It replaces paper forms with automated workflows and AI-powered analysis."
  },
  {
    question: "How does AI help in roof inspections?",
    answer: "SpaceCapture's AI analyzes drone and mobile photos to automatically identify missing shingles, hail damage, flashing issues, and other roof defects. It tags issues with location data and severity levels, creating comprehensive damage assessments for insurance claims."
  },
  {
    question: "Can I use the software offline on job sites?",
    answer: "Yes, SpaceCapture works fully offline. You can capture photos, complete inspection checklists, and log issues without internet connectivity. All data automatically syncs to the cloud once you regain connection."
  },
  {
    question: "Does it support insurance claim documentation?",
    answer: "Absolutely. Our templates are designed for insurance adjusters and contractors, with specific fields for damage types, material measurements, and photo evidence that supports claims processing."
  }
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Roofing Inspection Software',
  description:
    'AI-powered roofing inspection software for contractors and adjusters. Document roof conditions, storm damage, and material assessments with drone and mobile capture.',
  url: 'https://spacecapture.ai/roofing-inspection-software',
  serviceType: 'Roofing Inspection Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/roofing-inspection-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="The Ultimate Roofing Inspection Software for Contractors & Adjusters"
      subtitle="Eliminate paper checklists and manual photo organization. Our AI-driven roofing inspection software automates damage detection, streamlines insurance claims, and improves assessment accuracy."
    >
      {/* Definition Block - AEO Optimized */}
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">What is Roofing Inspection Software?</h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Roofing inspection software is a mobile-first digital platform that enables contractors and insurance adjusters to document roof conditions, assess storm damage, and evaluate material integrity in real-time. By integrating drone imagery and AI analysis, it replaces manual inspections to improve accuracy and speed up insurance claims.
        </p>
      </div>

      {/* Pain Points Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Common Challenges in Roof Inspections</h3>
        <ul className="grid md:grid-cols-3 gap-6">
          <li className="p-4 bg-red-50 rounded-lg border border-red-100">
            <div className="font-semibold text-red-800 mb-2">Safety Risks</div>
            <p className="text-sm text-red-700">Manual roof inspections involve climbing ladders and walking on unstable surfaces, creating significant safety hazards for inspectors.</p>
          </li>
          <li className="p-4 bg-red-50 rounded-lg border border-red-100">
            <div className="font-semibold text-red-800 mb-2">Incomplete Documentation</div>
            <p className="text-sm text-red-700">Missing damage details, inconsistent photo documentation, and incomplete measurements lead to denied insurance claims and disputes.</p>
          </li>
          <li className="p-4 bg-red-50 rounded-lg border border-red-100">
            <div className="font-semibold text-red-800 mb-2">Time-Consuming Reports</div>
            <p className="text-sm text-red-700">Creating detailed damage reports with measurements, photos, and material assessments manually takes hours per inspection.</p>
          </li>
        </ul>
      </div>

      {/* Bullet Summary */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Benefits</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "AI-powered damage detection from drone and mobile photos",
            "Instant PDF inspection reports with measurements",
            "Offline capability for remote job sites",
            "Insurance claim-ready documentation"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>How Roofing Inspection Software Works</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Capture Imagery:</strong> Use mobile devices or drones to capture comprehensive photos of roof conditions, including close-ups of damage.
        </li>
        <li className="pl-2">
          <strong>AI Analysis:</strong> The software automatically scans images for damage patterns, missing materials, and structural issues.
        </li>
        <li className="pl-2">
          <strong>Document Details:</strong> Add measurements, material types, and damage severity using intuitive mobile forms.
        </li>
        <li className="pl-2">
          <strong>Generate Claims:</strong> Create insurance-ready reports with photo evidence, measurements, and cost estimates in minutes.
        </li>
      </ol>

      <ComparisonTable 
        title="SpaceCapture vs Traditional Roof Inspections"
        features={[
          { feature: "AI Damage Detection", spaceCapture: true, competitors: false },
          { feature: "Drone Integration", spaceCapture: true, competitors: "Limited" },
          { feature: "Insurance Claim Templates", spaceCapture: "Built-in", competitors: "Manual Creation" },
          { feature: "Photo Organization", spaceCapture: "Automatic", competitors: "Manual" },
          { feature: "Measurement Tools", spaceCapture: "Digital Estimation", competitors: "Manual Tape" },
        ]}
      />

      <div className="mb-12">
        <h3>Modernize Your Roof Inspections</h3>
        <p>
          Traditional roof inspections involve safety risks, incomplete documentation, and time-consuming report creation. 
          Missed damage details, inconsistent measurements, and delayed claims processing lead to disputes and revenue loss. 
          <strong>SpaceCapture</strong> transforms this process by providing a unified digital platform that works with drones and mobile devices.
        </p>

        <p>
          By consolidating drone imagery, damage assessment, and report generation into a single app, roofing professionals can complete inspections in half the time. 
          Focus your expertise on accurate assessments, not administrative tasks.
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