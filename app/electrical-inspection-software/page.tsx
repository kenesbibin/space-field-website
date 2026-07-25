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
  title: 'Electrical Inspection Software | AI-Powered Electrical Site Inspections',
  description: 'AI-powered electrical inspection software for contractors and inspectors. Automate panel inspections, wiring assessments, and code compliance checks from any mobile device.',
  keywords: ['electrical inspection software', 'electrical inspection app', 'electrical contractor software', 'panel inspection app'],
  alternates: {
    canonical: 'https://spacecapture.ai/electrical-inspection-software',
  },
};

const faqs = [
  {
    question: "What is electrical inspection software?",
    answer: "Electrical inspection software is a digital platform that enables electrical contractors and inspectors to conduct panel inspections, wiring assessments, and code compliance checks using mobile devices. It replaces paper forms and manual data entry with automated workflows and real-time reporting."
  },
  {
    question: "How does AI help in electrical inspections?",
    answer: "SpaceCapture's AI analyzes photos of electrical panels, wiring, and installations to automatically identify potential code violations, safety hazards, and installation errors. It tags issues with location data and severity levels for immediate attention."
  },
  {
    question: "Can I use the software offline at job sites?",
    answer: "Yes, SpaceCapture works fully offline. You can capture photos, complete inspection checklists, and log issues without internet connectivity. All data automatically syncs to the cloud once you regain connection."
  },
  {
    question: "Does it support NEC code compliance?",
    answer: "Absolutely. Our templates are customizable to match NEC (National Electrical Code) requirements, and you can create specific checklists for different inspection types like rough-in, final, or service entrance inspections."
  }
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Electrical Inspection Software',
  description:
    'AI-powered electrical inspection software for contractors and inspectors. Automate panel inspections, wiring assessments, and code compliance checks from any mobile device.',
  url: 'https://spacecapture.ai/electrical-inspection-software',
  serviceType: 'Electrical Inspection Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/electrical-inspection-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="The Ultimate Electrical Inspection Software for Contractors"
      subtitle="Eliminate paper checklists and manual data entry. Our AI-driven electrical inspection software automates code compliance, streamlines reporting, and keeps your projects safe."
    >
      {/* Definition Block - AEO Optimized */}
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">What is Electrical Inspection Software?</h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Electrical inspection software is a mobile-first digital platform that enables electrical contractors and inspectors to conduct panel inspections, wiring assessments, and code compliance checks in real-time. By automating reports and integrating AI analysis, it replaces manual paper checklists to improve safety and compliance.
        </p>
      </div>

      {/* Pain Points Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Common Challenges in Electrical Inspections</h3>
        <ul className="grid md:grid-cols-3 gap-6">
          <li className="p-4 bg-red-50 rounded-lg border border-red-100">
            <div className="font-semibold text-red-800 mb-2">Paper-Based Documentation</div>
            <p className="text-sm text-red-700">Manual paperwork leads to lost inspection reports, delayed approvals, and difficulty tracking code compliance history across projects.</p>
          </li>
          <li className="p-4 bg-red-50 rounded-lg border border-red-100">
            <div className="font-semibold text-red-800 mb-2">Code Compliance Complexity</div>
            <p className="text-sm text-red-700">Keeping up with NEC code changes and ensuring all inspections meet current standards is time-consuming and error-prone with manual processes.</p>
          </li>
          <li className="p-4 bg-red-50 rounded-lg border border-red-100">
            <div className="font-semibold text-red-800 mb-2">Communication Gaps</div>
            <p className="text-sm text-red-700">Delayed reporting between field inspectors and office staff creates bottlenecks, rework, and missed inspection deadlines.</p>
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

      <h2>How Electrical Inspection Software Works</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Create Templates:</strong> Build custom inspection checklists for different electrical systems—panels, wiring, service entrances, or EV charger installations.
        </li>
        <li className="pl-2">
          <strong>Conduct Inspection:</strong> Field staff complete forms on tablets or phones, capturing photos and annotating issues directly on images.
        </li>
        <li className="pl-2">
          <strong>AI Analysis:</strong> The software automatically scans images for code violations and safety hazards, tagging them with location and severity.
        </li>
        <li className="pl-2">
          <strong>Generate Reports:</strong> Create and share professional inspection reports with stakeholders in a single click, directly from the field.
        </li>
      </ol>

      <ComparisonTable 
        title="SpaceCapture vs Traditional Electrical Inspections"
        features={[
          { feature: "AI Code Violation Detection", spaceCapture: true, competitors: false },
          { feature: "Offline Mobile Access", spaceCapture: true, competitors: "Limited" },
          { feature: "Automated Reporting", spaceCapture: "Instant", competitors: "Manual / Hours" },
          { feature: "Photo Organization", spaceCapture: "Automatic", competitors: "Manual" },
          { feature: "NEC Compliance Tracking", spaceCapture: "Built-in Templates", competitors: "Manual Checklists" },
        ]}
      />

      <div className="mb-12">
        <h3>Streamline Your Electrical Inspections</h3>
        <p>
          Traditional electrical inspections rely on paper forms, manual photo organization, and delayed reporting. 
          Missed code violations, fragmented documentation, and communication gaps lead to costly rework and safety risks. 
          <strong>SpaceCapture</strong> transforms this process by providing a unified digital platform that works on any mobile device.
        </p>

        <p>
          By consolidating photo capture, annotation, and reporting into a single app, electrical contractors can complete inspections in half the time. 
          Focus your expertise on ensuring safety and compliance, not administrative tasks.
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