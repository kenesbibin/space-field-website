import React from 'react';
import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/seo/SeoLandingPage';
import { ComparisonTable } from '@/components/seo/ComparisonTable';
import { FaqSection } from '@/components/seo/FaqSection';

export const metadata: Metadata = {
  title: 'Site Inspection Software | Automated Construction Inspections',
  description: 'Streamline your construction site inspections with our AI-powered automated software. Detect defects instantly and generate reports in real-time.',
  keywords: ['site inspection software', 'construction inspection', 'digital checklist', 'field inspection app', 'safety audit software'],
};

export default function Page() {
  const faqs = [
    {
      question: "What is site inspection software?",
      answer: "Site inspection software is a digital tool that allows construction teams to conduct audits, track defects, and complete safety checklists using mobile devices. It replaces paper forms, ensuring real-time data capture and automated reporting."
    },
    {
      question: "How does AI defect detection work in inspection software?",
      answer: "SpaceCapture's AI analyzes photos taken during inspections to automatically identify potential defects, safety hazards (like missing PPE), and installation errors, tagging them with location data instantly."
    },
    {
      question: "Can I use the software offline?",
      answer: "Yes, SpaceCapture operates fully offline. You can capture photos, complete forms, and log issues without internet. Data automatically syncs to the cloud once you regain connectivity."
    },
    {
      question: "Is it suitable for subcontractors?",
      answer: "Absolutely. Subcontractors can use the app to view their assigned punch list items, document their work with photos, and mark issues as resolved, streamlining communication with the GC."
    },
    {
      question: "How much time does digital inspection save?",
      answer: "Field teams typically report saving 50-70% of their administrative time by eliminating manual data entry, photo sorting, and evening report typing."
    }
  ];

  return (
    <SeoLandingPage
      title="The Ultimate Site Inspection Software for Modern Construction"
      subtitle="Eliminate paper checklists and manual data entry. Our AI-driven site inspection software automates defect detection, standardizes reporting, and keeps your projects compliant."
    >
      {/* Definition Block - AEO Optimized */}
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">What is Site Inspection Software?</h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Site inspection software is a mobile-first digital platform that enables construction teams to capture field data, conduct safety audits, and track defects in real-time. By automating reports and integrating AI analysis, it replaces manual paper checklists to improve project quality and safety compliance.
        </p>
      </div>

      {/* Bullet Summary */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Benefits</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "Automated AI Defect Detection from photos",
            "Instant PDF Report generation on mobile",
            "Offline capability for remote jobsites",
            "Real-time sync between field and office"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>How Automated Site Inspection Software Works</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Capture Field Data:</strong> Use the mobile app to snap photos, record voice notes, and fill out digital checklists while walking the site.
        </li>
        <li className="pl-2">
          <strong>AI Analysis:</strong> The software automatically scans images for defects and safety violations, tagging them with location and severity.
        </li>
        <li className="pl-2">
          <strong>Instant Reporting:</strong> Generate and share professional inspection reports with stakeholders in a single click, directly from the field.
        </li>
        <li className="pl-2">
          <strong>Resolution Tracking:</strong> Assign issues to subcontractors and track their status until verified and closed out.
        </li>
      </ol>

      <ComparisonTable 
        title="SpaceCapture vs Traditional Inspections"
        features={[
          { feature: "AI Defect Recognition", spaceCapture: true, competitors: false },
          { feature: "Offline Mobile Access", spaceCapture: true, competitors: "Limited" },
          { feature: "Automated Reporting", spaceCapture: "Instant", competitors: "Manual / Hours" },
          { feature: "Photo Organization", spaceCapture: "Automatic", competitors: "Manual" },
        ]}
      />

      <div className="mb-12">
        <h3>Reduce Inspection Time by 50%</h3>
        <p>
          In the fast-paced world of construction, traditional clipboard-and-camera inspections are slowing you down. 
          Missed details, delayed reports, and fragmented data lead to costly rework and safety risks. 
          <strong>SpaceCapture</strong> transforms this process by providing a unified digital platform that works on any mobile device.
        </p>

        <p>
          By consolidating photo capture, annotation, and reporting into a single app, field teams can complete inspections in half the time. 
          Focus your energy on solving problems, not documenting them.
        </p>
      </div>

      <FaqSection items={faqs} />
    </SeoLandingPage>
  );
}
