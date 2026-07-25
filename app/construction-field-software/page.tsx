import React from 'react';
import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/seo/SeoLandingPage';
import { ComparisonTable } from '@/components/seo/ComparisonTable';
import { FaqSection } from '@/components/seo/FaqSection';

export const metadata: Metadata = {
  title: 'Construction Field Software | Mobile Jobsite Management',
  description: 'Empower your field teams with AI-powered construction field software. Manage daily logs, safety, and progress tracking from a single mobile app.',
  keywords: ['construction field software', 'field management app', 'mobile construction app', 'daily log software', 'jobsite management'],
  alternates: {
    canonical: 'https://spacecapture.ai/construction-field-software',
  },
};

export default function Page() {
  const faqs = [
    {
      question: "What is construction field software?",
      answer: "Construction field software is a digital solution designed to help field teams manage daily operations, including reporting, safety compliance, and direct communication with the office from mobile devices."
    },
    {
      question: "Does it work on Android and iOS?",
      answer: "Yes, SpaceCapture is fully native and available for download on both the Apple App Store for iOS devices and Google Play Store for Android."
    },
    {
      question: "Can I manage subcontractors with this?",
      answer: "Yes, you can invite unlimited subcontractors to the platform to collaborate on tasks, submit daily logs, and resolve punch list items."
    },
    {
      question: "Is training required?",
      answer: "Our app is designed with a 'zero-training' interface, similar to popular consumer apps. Most field users are up and running within minutes of installation."
    },
    {
      question: "How does it improve productivity?",
      answer: "By automating administrative tasks like daily reporting and photo organization, field supervisors save 1-2 hours per day, allowing them to focus on managing the build."
    }
  ];

  return (
    <SeoLandingPage
      title="All-in-One Construction Field Software"
      subtitle="Connect your field teams to the office with a unified mobile platform. Manage daily logs, RFIs, safety audits, and task assignments in real-time."
    >
      {/* Definition Block */}
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">What is Construction Field Software?</h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Construction field software refers to mobile applications used by on-site teams to document project progress, manage safety, and communicate with the back office. It replaces paper-based workflows, ensuring that critical data like daily logs and RFIs are captured accurately and shared instantly.
        </p>
      </div>

       {/* Bullet Summary */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Field Teams Love It</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "Intuitive mobile interface for ease of use",
            "Automatic weather and location tagging",
            "Voice-to-text for quick note taking",
            "Instant access to latest drawings"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>How It Connects Field to Office</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Daily Input:</strong> Superintendents and foremen enter logs, photos, and safety checks on their phones throughout the day.
        </li>
        <li className="pl-2">
          <strong>Instant Sync:</strong> Data is uploaded to the cloud immediately, giving Project Managers in the office real-time visibility.
        </li>
        <li className="pl-2">
          <strong>Automated Dashboards:</strong> The system aggregates field data into progress dashboards, highlighting risks or delays.
        </li>
        <li className="pl-2">
          <strong>Archival:</strong> All data is permanently stored and searchable, creating an indisputable record of the project.
        </li>
      </ol>

      <ComparisonTable 
        title="Digital Field Management vs Paper"
        features={[
          { feature: "Information Latency", spaceCapture: "Real-Time", competitors: "Days / Weeks" },
          { feature: "Data Accuracy", spaceCapture: "High (Validated)", competitors: "Low (Illegible)" },
          { feature: "Searchability", spaceCapture: "Instant Search", competitors: "None (Physical Files)" },
          { feature: "Rich Media", spaceCapture: "Photos / Video", competitors: "Text Only" },
        ]}
      />

       <div className="mb-12">
        <h3>Built for the Field, Trusted by the Office</h3>
         <p>
        Construction happens on the job site, not behind a desk. 
        <strong>SpaceCapture</strong> gives your superintendents and foremen the tools they need to document progress and resolve issues without slowing down production.
        </p>
      </div>

      <FaqSection items={faqs} />
    </SeoLandingPage>
  );
}
