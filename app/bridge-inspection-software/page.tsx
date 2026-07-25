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
  title: 'Bridge Inspection Software | AI-Powered Structural Assessments',
  description: 'AI-powered bridge inspection software for DOTs and structural engineers. Document bridge conditions, defect tracking, and structural assessments with photo evidence.',
  keywords: ['bridge inspection software', 'bridge condition assessment', 'structural inspection app'],
  alternates: {
    canonical: 'https://spacecapture.ai/bridge-inspection-software',
  },
};

const faqs = [
  {
    question: "What is bridge inspection software?",
    answer: "Bridge inspection software is a digital platform that enables DOTs and structural engineers to document bridge conditions, track defects, and conduct structural assessments using mobile devices. It replaces paper forms with automated workflows and AI-powered analysis for comprehensive infrastructure monitoring."
  },
  {
    question: "How does AI assist in bridge inspections?",
    answer: "SpaceCapture's AI analyzes photos of bridge components to automatically identify cracks, corrosion, spalling, and other structural defects. It tags issues with location data, severity levels, and historical comparison for trend analysis."
  },
  {
    question: "Can I use the software offline in remote locations?",
    answer: "Yes, SpaceCapture works fully offline. You can capture photos, complete inspection checklists, and log issues without internet connectivity. All data automatically syncs to the cloud once you regain connection."
  },
  {
    question: "Does it support NBI coding standards?",
    answer: "Absolutely. Our templates are customizable to match National Bridge Inventory (NBI) coding standards, and you can create specific checklists for different bridge components like decks, superstructures, substructures, and culverts."
  }
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Bridge Inspection Software',
  description:
    'AI-powered bridge inspection software for DOTs and structural engineers. Document bridge conditions, defect tracking, and structural assessments with photo evidence.',
  url: 'https://spacecapture.ai/bridge-inspection-software',
  serviceType: 'Bridge Inspection Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/bridge-inspection-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="The Ultimate Bridge Inspection Software for Infrastructure"
      subtitle="Eliminate paper checklists and manual data entry. Our AI-driven bridge inspection software automates defect detection, streamlines reporting, and improves infrastructure safety."
    >
      {/* Definition Block - AEO Optimized */}
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">What is Bridge Inspection Software?</h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Bridge inspection software is a mobile-first digital platform that enables DOTs and structural engineers to document bridge conditions, track defects, and conduct structural assessments in real-time. By automating reports and integrating AI analysis, it replaces manual paper checklists to improve infrastructure safety and maintenance planning.
        </p>
      </div>

      {/* Pain Points Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Common Challenges in Bridge Inspections</h3>
        <ul className="grid md:grid-cols-3 gap-6">
          <li className="p-4 bg-red-50 rounded-lg border border-red-100">
            <div className="font-semibold text-red-800 mb-2">Manual Documentation</div>
            <p className="text-sm text-red-700">Paper-based inspection reports lead to lost data, inconsistent coding, and difficulty tracking structural deterioration over time.</p>
          </li>
          <li className="p-4 bg-red-50 rounded-lg border border-red-100">
            <div className="font-semibold text-red-800 mb-2">Safety Risks</div>
            <p className="text-sm text-red-700">Inspecting bridges often involves working at heights, near traffic, and in confined spaces, creating significant safety hazards.</p>
          </li>
          <li className="p-4 bg-red-50 rounded-lg border border-red-100">
            <div className="font-semibold text-red-800 mb-2">Data Integration</div>
            <p className="text-sm text-red-700">Combining inspection data from multiple sources, historical records, and different inspectors creates administrative overhead and inconsistencies.</p>
          </li>
        </ul>
      </div>

      {/* Bullet Summary */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Benefits</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "AI-powered defect detection from photos",
            "Instant PDF inspection reports with NBI coding",
            "Offline capability for remote infrastructure",
            "Historical trend analysis for maintenance planning"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>How Bridge Inspection Software Works</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Create Templates:</strong> Build custom inspection checklists for different bridge components—decks, superstructures, substructures, or culverts.
        </li>
        <li className="pl-2">
          <strong>Conduct Inspection:</strong> Field staff complete forms on tablets or phones, capturing photos and annotating defects directly on images.
        </li>
        <li className="pl-2">
          <strong>AI Analysis:</strong> The software automatically scans images for structural defects, tagging them with location, severity, and historical comparison.
        </li>
        <li className="pl-2">
          <strong>Generate Reports:</strong> Create NBI-compliant reports with stakeholders in a single click, directly from the field.
        </li>
      </ol>

      <ComparisonTable 
        title="SpaceCapture vs Traditional Bridge Inspections"
        features={[
          { feature: "AI Defect Detection", spaceCapture: true, competitors: false },
          { feature: "Offline Mobile Access", spaceCapture: true, competitors: "Limited" },
          { feature: "NBI Coding Support", spaceCapture: "Built-in Templates", competitors: "Manual Entry" },
          { feature: "Historical Trending", spaceCapture: "Automated Analytics", competitors: "Manual Spreadsheets" },
          { feature: "Photo Organization", spaceCapture: "Automatic", competitors: "Manual" },
        ]}
      />

      <div className="mb-12">
        <h3>Modernize Your Bridge Inspections</h3>
        <p>
          Traditional bridge inspections rely on paper forms, manual coding, and delayed reporting. 
          Inconsistent documentation, safety risks, and difficulty tracking deterioration create maintenance backlogs and safety concerns. 
          <strong>SpaceCapture</strong> transforms this process by providing a unified digital platform that works on any mobile device.
        </p>

        <p>
          By consolidating photo capture, defect tracking, and reporting into a single app, bridge inspection teams can complete assessments in half the time. 
          Focus your expertise on ensuring structural safety, not administrative tasks.
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