import React from 'react';
import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/seo/SeoLandingPage';
import { ComparisonTable } from '@/components/seo/ComparisonTable';
import { FaqSection } from '@/components/seo/FaqSection';

export const metadata: Metadata = {
  title: 'Defect Detection AI | Automated Construction Quality Analysis',
  description: 'Automate your defect detection process with AI. Identify construction issues faster and more accurately than manual inspections.',
  keywords: ['defect detection ai', 'automated defect detection', 'ai quality control', 'construction ai', 'visual analysis'],
};

export default function Page() {
  const faqs = [
    {
      question: "How does Defect Detection AI save money?",
      answer: "By catching defects early, AI prevents costly rework. Fixing an issue during installation is 10x cheaper than fixing it after inspection, and 100x cheaper than post-handover repairs."
    },
    {
      question: "What is the false positive rate?",
      answer: "Our system allows you to adjust sensitivity thresholds. With proper tuning, false positives are minimized, and users can quickly dismiss incorrect tags to further train the model."
    },
    {
      question: "Does it work for interior fit-outs?",
      answer: "Yes, it detects issues like missing outlets, paint defects, damaged drywall, and ceiling grid misalignments, making it ideal for interiors."
    },
    {
      question: "Who owns the data?",
      answer: "You own all your data. SpaceCapture processes the images for you, but the photos and the metadata belong to your company."
    },
    {
      question: "Can we export the reports?",
      answer: "Yes, reports can be exported as PDF, Excel, or pushed directly to Procore, Autodesk Build, or other CDEs."
    }
  ];

  return (
    <SeoLandingPage
      title="Revolutionize Quality with Defect Detection AI"
      subtitle="Catch errors before they are covered up. Our Defect Detection AI analyzes site imagery to automatically identify quality issues, saving time and money."
    >
      {/* Definition Block */}
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">What is Defect Detection AI?</h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Defect Detection AI is a subset of artificial intelligence that utilizes computer vision to identify imperfections, damages, or non-compliance in construction work. It analyzes images or video feeds to spot issues like cracks, leaks, or installation errors with speed and consistency that exceeds human capability.
        </p>
      </div>

       {/* Bullet Summary */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Use AI for Quality?</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "100% inspection coverage of captured areas",
            "Eliminates human fatigue and subjectivity",
            "Detects subtle defects invisible to the naked eye",
            "Reduces rework costs by up to 30%"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>How the AI Process Works</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Data Ingestion:</strong> Photos are collected via 360-degree cameras, drones, or manually via mobile app.
        </li>
        <li className="pl-2">
          <strong>AI Analysis:</strong> Deep learning models process the images, comparing them against millions of examples of known good and bad work.
        </li>
        <li className="pl-2">
          <strong>Visualization:</strong> Defects are highlighted on the image and pinned to the project floor plan for context.
        </li>
         <li className="pl-2">
          <strong>Reporting:</strong> An automated report is generated, prioritizing critical issues for immediate resolution.
        </li>
      </ol>

      <ComparisonTable 
        title="AI vs Traditional Quality Control"
        features={[
          { feature: "Consistency", spaceCapture: "100% Consistent", competitors: "Varies by Inspector" },
          { feature: "Scalability", spaceCapture: "Unlimited", competitors: "Limited by Headcount" },
          { feature: "Speed", spaceCapture: "Milliseconds", competitors: "Hours / Days" },
          { feature: "ROI", spaceCapture: "High (Preventative)", competitors: "Lower (Reactive)" },
        ]}
      />

       <div className="mb-12">
        <h3>Proactive Quality Management</h3>
         <p>
        Rework accounts for a significant portion of construction costs. 
        <strong>SpaceCapture's Defect Detection AI</strong> helps you shift from reactive fixes to proactive prevention. 
        </p>
      </div>

      <FaqSection items={faqs} />
    </SeoLandingPage>
  );
}
