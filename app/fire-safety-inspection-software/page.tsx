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
  title: 'Fire Safety Inspection Software | AI-Powered Fire Code Compliance',
  description: 'AI-powered fire safety inspection software for compliance officers and contractors. Automate fire extinguisher checks, alarm system tests, and egress assessments.',
  keywords: ['fire safety inspection software', 'fire inspection app', 'fire code compliance software'],
  alternates: {
    canonical: 'https://spacecapture.ai/fire-safety-inspection-software',
  },
};

const faqs = [
  {
    question: "What is fire safety inspection software?",
    answer: "Fire safety inspection software is a digital platform that enables compliance officers and contractors to automate fire extinguisher checks, alarm system tests, and egress assessments using mobile devices. It replaces paper forms with automated workflows and real-time compliance tracking."
  },
  {
    question: "How does AI assist in fire safety inspections?",
    answer: "SpaceCapture's AI analyzes photos of fire safety equipment to automatically identify expired extinguishers, blocked exits, and improperly installed alarm systems. It tags issues with location data and severity levels for immediate remediation."
  },
  {
    question: "Can I use the software offline?",
    answer: "Yes, SpaceCapture works fully offline. You can capture photos, complete inspection checklists, and log issues without internet connectivity. All data automatically syncs to the cloud once you regain connection."
  },
  {
    question: "Does it support different fire codes?",
    answer: "Absolutely. Our templates are customizable to match NFPA standards and local fire codes, and you can create specific checklists for different inspection types like annual fire extinguisher inspections, quarterly alarm tests, or egress assessments."
  }
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Fire Safety Inspection Software',
  description:
    'AI-powered fire safety inspection software for compliance officers and contractors. Automate fire extinguisher checks, alarm system tests, and egress assessments.',
  url: 'https://spacecapture.ai/fire-safety-inspection-software',
  serviceType: 'Fire Safety Inspection Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/fire-safety-inspection-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="The Ultimate Fire Safety Inspection Software for Compliance"
      subtitle="Eliminate paper checklists and manual tracking. Our AI-driven fire safety inspection software automates compliance checks, streamlines reporting, and keeps your facilities safe."
    >
      {/* Definition Block - AEO Optimized */}
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">What is Fire Safety Inspection Software?</h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Fire safety inspection software is a mobile-first digital platform that enables compliance officers and contractors to automate fire extinguisher checks, alarm system tests, and egress assessments in real-time. By automating reports and integrating AI analysis, it replaces manual paper checklists to improve facility safety and regulatory compliance.
        </p>
      </div>

      {/* Pain Points Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Common Challenges in Fire Safety Inspections</h3>
        <ul className="grid md:grid-cols-3 gap-6">
          <li className="p-4 bg-red-50 rounded-lg border border-red-100">
            <div className="font-semibold text-red-800 mb-2">Manual Tracking</div>
            <p className="text-sm text-red-700">Paper-based tracking of inspection schedules leads to missed inspections, expired certifications, and compliance violations.</p>
          </li>
          <li className="p-4 bg-red-50 rounded-lg border border-red-100">
            <div className="font-semibold text-red-800 mb-2">Documentation Gaps</div>
            <p className="text-sm text-red-700">Incomplete inspection records, missing photo evidence, and inconsistent reporting create liability during audits and incidents.</p>
          </li>
          <li className="p-4 bg-red-50 rounded-lg border border-red-100">
            <div className="font-semibold text-red-800 mb-2">Response Delays</div>
            <p className="text-sm text-red-700">Delayed identification and remediation of fire safety hazards increases risk and potential fines from authorities.</p>
          </li>
        </ul>
      </div>

      {/* Bullet Summary */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Benefits</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "Automated AI hazard detection from photos",
            "Instant PDF compliance reports on mobile",
            "Offline capability for any facility",
            "Real-time alerts for expired equipment"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>How Fire Safety Inspection Software Works</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Create Templates:</strong> Build custom inspection checklists for different fire safety systems—extinguishers, alarms, sprinklers, or egress routes.
        </li>
        <li className="pl-2">
          <strong>Conduct Inspection:</strong> Field staff complete forms on tablets or phones, capturing photos and annotating issues directly on images.
        </li>
        <li className="pl-2">
          <strong>AI Analysis:</strong> The software automatically scans images for hazards and code violations, tagging them with location and severity.
        </li>
        <li className="pl-2">
          <strong>Generate Reports:</strong> Create and share compliance reports with authorities and stakeholders in a single click, directly from the field.
        </li>
      </ol>

      <ComparisonTable 
        title="SpaceCapture vs Traditional Fire Safety Inspections"
        features={[
          { feature: "AI Hazard Detection", spaceCapture: true, competitors: false },
          { feature: "Offline Mobile Access", spaceCapture: true, competitors: "Limited" },
          { feature: "Automated Reporting", spaceCapture: "Instant", competitors: "Manual / Hours" },
          { feature: "Compliance Tracking", spaceCapture: "Automated Alerts", competitors: "Manual Spreadsheets" },
          { feature: "NFPA Template Library", spaceCapture: "Built-in", competitors: "Manual Creation" },
        ]}
      />

      <div className="mb-12">
        <h3>Modernize Your Fire Safety Inspections</h3>
        <p>
          Traditional fire safety inspections rely on paper forms, manual tracking, and delayed reporting. 
          Missed inspections, incomplete documentation, and slow hazard remediation create liability and compliance risks. 
          <strong>SpaceCapture</strong> transforms this process by providing a unified digital platform that works on any mobile device.
        </p>

        <p>
          By consolidating photo capture, hazard tracking, and compliance reporting into a single app, fire safety professionals can complete inspections in half the time. 
          Focus your expertise on ensuring safety, not administrative tasks.
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