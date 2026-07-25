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
  title: 'Plumbing Inspection Software | AI-Powered Plumbing Site Inspections',
  description: 'AI-powered plumbing inspection software for contractors. Document pipe installations, pressure tests, and code compliance with photos and automated reports.',
  keywords: ['plumbing inspection software', 'plumbing inspection app', 'plumbing contractor software'],
  alternates: {
    canonical: 'https://spacecapture.ai/plumbing-inspection-software',
  },
};

const faqs = [
  {
    question: "What is plumbing inspection software?",
    answer: "Plumbing inspection software is a digital platform that enables plumbing contractors to document pipe installations, conduct pressure tests, and verify code compliance using mobile devices. It replaces paper forms with automated workflows and real-time reporting."
  },
  {
    question: "How does AI assist in plumbing inspections?",
    answer: "SpaceCapture's AI analyzes photos of plumbing installations to automatically identify potential code violations, improper fittings, and installation errors. It tags issues with location data and severity levels for immediate attention."
  },
  {
    question: "Can I use the software offline?",
    answer: "Yes, SpaceCapture works fully offline. You can capture photos, complete inspection checklists, and log issues without internet connectivity. All data automatically syncs to the cloud once you regain connection."
  },
  {
    question: "Does it support different plumbing codes?",
    answer: "Absolutely. Our templates are customizable to match local plumbing codes (IPC, UPC, etc.), and you can create specific checklists for different inspection types like rough-in, final, or sewer inspections."
  }
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Plumbing Inspection Software',
  description:
    'AI-powered plumbing inspection software for contractors. Document pipe installations, pressure tests, and code compliance with photos and automated reports.',
  url: 'https://spacecapture.ai/plumbing-inspection-software',
  serviceType: 'Plumbing Inspection Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/plumbing-inspection-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="The Ultimate Plumbing Inspection Software for Contractors"
      subtitle="Eliminate paper checklists and manual data entry. Our AI-driven plumbing inspection software automates code compliance, streamlines reporting, and keeps your projects on schedule."
    >
      {/* Definition Block - AEO Optimized */}
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">What is Plumbing Inspection Software?</h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Plumbing inspection software is a mobile-first digital platform that enables plumbing contractors to document pipe installations, conduct pressure tests, and verify code compliance in real-time. By automating reports and integrating AI analysis, it replaces manual paper checklists to improve installation quality and compliance.
        </p>
      </div>

      {/* Pain Points Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Common Challenges in Plumbing Inspections</h3>
        <ul className="grid md:grid-cols-3 gap-6">
          <li className="p-4 bg-red-50 rounded-lg border border-red-100">
            <div className="font-semibold text-red-800 mb-2">Manual Documentation</div>
            <p className="text-sm text-red-700">Paper-based inspection reports lead to lost data, delayed approvals, and difficulty tracking installation history across projects.</p>
          </li>
          <li className="p-4 bg-red-50 rounded-lg border border-red-100">
            <div className="font-semibold text-red-800 mb-2">Code Compliance Complexity</div>
            <p className="text-sm text-red-700">Keeping up with local plumbing codes (IPC, UPC) and ensuring all installations meet current standards is time-consuming with manual processes.</p>
          </li>
          <li className="p-4 bg-red-50 rounded-lg border border-red-100">
            <div className="font-semibold text-red-800 mb-2">Photo Organization</div>
            <p className="text-sm text-red-700">Managing hundreds of inspection photos manually, matching them to specific locations and issues, creates administrative overhead.</p>
          </li>
        </ul>
      </div>

      {/* Bullet Summary */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Benefits</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "Automated AI code violation detection from photos",
            "Instant PDF inspection reports on mobile",
            "Offline capability for remote job sites",
            "Real-time sync between field and office"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>How Plumbing Inspection Software Works</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Create Templates:</strong> Build custom inspection checklists for different plumbing systems—water supply, drainage, venting, or gas lines.
        </li>
        <li className="pl-2">
          <strong>Conduct Inspection:</strong> Field staff complete forms on tablets or phones, capturing photos and annotating issues directly on images.
        </li>
        <li className="pl-2">
          <strong>AI Analysis:</strong> The software automatically scans images for code violations and installation errors, tagging them with location and severity.
        </li>
        <li className="pl-2">
          <strong>Generate Reports:</strong> Create and share professional inspection reports with stakeholders in a single click, directly from the field.
        </li>
      </ol>

      <ComparisonTable 
        title="SpaceCapture vs Traditional Plumbing Inspections"
        features={[
          { feature: "AI Code Violation Detection", spaceCapture: true, competitors: false },
          { feature: "Offline Mobile Access", spaceCapture: true, competitors: "Limited" },
          { feature: "Automated Reporting", spaceCapture: "Instant", competitors: "Manual / Hours" },
          { feature: "Photo Organization", spaceCapture: "Automatic", competitors: "Manual" },
          { feature: "Multi-Code Support", spaceCapture: "IPC, UPC, Custom", competitors: "Manual Checklists" },
        ]}
      />

      <div className="mb-12">
        <h3>Streamline Your Plumbing Inspections</h3>
        <p>
          Traditional plumbing inspections rely on paper forms, manual photo organization, and delayed reporting. 
          Missed code violations, fragmented documentation, and communication gaps lead to costly rework and project delays. 
          <strong>SpaceCapture</strong> transforms this process by providing a unified digital platform that works on any mobile device.
        </p>

        <p>
          By consolidating photo capture, annotation, and reporting into a single app, plumbing contractors can complete inspections in half the time. 
          Focus your expertise on ensuring proper installations, not administrative tasks.
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