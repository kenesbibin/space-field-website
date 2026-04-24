import React from 'react';
import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/seo/SeoLandingPage';
import { ComparisonTable } from '@/components/seo/ComparisonTable';
import { FaqSection } from '@/components/seo/FaqSection';

export const metadata: Metadata = {
  title: 'AI Defect Detection for Construction | Automated QA/QC — SpaceCapture',
  description: 'Catch cracks, corrosion & safety hazards automatically. SpaceCapture\'s AI defect detection scans site photos with 94.5% accuracy — replacing manual punch walks. Free trial.',
  keywords: [
    'ai defect detection',
    'ai defect detection construction',
    'construction defect detection',
    'construction defect detection software',
    'automated defect detection',
    'defect detection ai',
    'ai construction defect detection',
    'automated defect recognition',
    'construction computer vision',
    'automated qa/qc',
    'visual inspection ai',
    'construction quality control software',
    'AI crack detection',
    'construction punch list automation',
  ],
  alternates: {
    canonical: '/ai-defect-detection',
  },
};

export default function Page() {
  const faqs = [
    {
      question: "What types of defects can AI detect?",
      answer: "SpaceCapture's AI can identify a wide range of issues including concrete cracks, water intrusion, missing firestopping, safety hazards like missing guardrails, and PPE compliance."
    },
    {
      question: "How accurate is AI defect detection?",
      answer: "Our models are trained on millions of construction images, achieving over 90% accuracy in standard conditions. The system continuously learns and improves with your specific project data."
    },
    {
      question: "Do I need special cameras?",
      answer: "No. You can use standard smartphone cameras, 360-degree cameras, or drones. The platform is hardware-agnostic."
    },
    {
      question: "Can I train the AI for custom defects?",
      answer: "Yes, our 'AI Tuning Station' allows you to tag custom objects or defects specific to your project, training the model to recognize specialized installation requirements."
    },
    {
      question: "Does it integrate with Procore or Autodesk?",
      answer: "Yes, detected defects can be automatically pushed as observations or punch list items to major project management platforms via our API integrations."
    }
  ];

  return (
    <SeoLandingPage
      title="Advanced AI Defect Detection for Construction Sites"
      subtitle="Stop relying on human eyes alone. Use enterprise-grade computer vision to identify quality issues, safety hazards, and deviations from plan in real-time."
    >
      {/* Definition Block */}
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">What is AI Defect Detection?</h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          AI Defect Detection uses computer vision and machine learning algorithms to automatically analyze construction site images for quality issues and safety hazards. It replaces manual visual inspections, providing instant, objective analysis to identify errors before they become costly rework.
        </p>
      </div>

       {/* Bullet Summary */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Core Capabilities</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "Real-time identification of cracks and leaks",
            "Automated PPE and safety hazard alerts",
            "Hardware-agnostic (Phone, Drone, 360 Camera)",
            "Integration with existing PM software"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>How AI Defect Detection Works</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Capture Imagery:</strong> Walk the site capturing video or photos using any standard camera or drone.
        </li>
        <li className="pl-2">
          <strong>Upload & Process:</strong> Images are uploaded to the cloud where our computer vision engine analyzes every pixel.
        </li>
        <li className="pl-2">
          <strong>Defect Identification:</strong> The AI flags potential anomalies, categorizes them by type, and assigns a severity score.
        </li>
        <li className="pl-2">
          <strong>Review & Action:</strong> QA/QC managers review flagged items and convert confirmed defects into actionable punch list tasks.
        </li>
      </ol>

      <ComparisonTable 
        title="AI Detection vs Manual Inspection"
        features={[
          { feature: "Inspection Speed", spaceCapture: "Instant Analysis", competitors: "Slow Manual Walk" },
          { feature: "Coverage", spaceCapture: "100% of Captured Area", competitors: "Spot Checks Only" },
          { feature: "Objectivity", spaceCapture: "Consistent Criteria", competitors: "Subjective / Varies" },
          { feature: "Data Retrieval", spaceCapture: "Searchable / Tagged", competitors: "Disorganized Files" },
        ]}
      />

      <div className="mb-12">
        <h3>The Future of Quality Control is AI</h3>
        <p>
          Manual visual inspections are prone to human error and fatigue. 
          <strong>SpaceCapture's AI Defect Detection</strong> engine processes site imagery to flag potential issues before they become expensive rework claims. 
          From concrete spalling to missing PPE, our algorithms never blink.
        </p>
         <p>
            Need to spot a specific type of installation error? Our platform allows for custom model tuning to adapt to your specific project needs or specialized equipment.
        </p>
      </div>

      <FaqSection items={faqs} />

      {/* Server-rendered FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": { "@type": "Answer", "text": f.answer }
            }))
          })
        }}
      />
    </SeoLandingPage>
  );
}
