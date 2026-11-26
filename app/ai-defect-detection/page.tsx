import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
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
import { AlertTriangle, Eye, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction AI Defect Detection',
  description: 'Use computer vision to spot construction defects automatically. Our AI Defect Detection software reduces risk and improves quality control efficiency.',
  keywords: ['ai defect detection', 'automated defect recognition', 'construction computer vision', 'automated qa/qc', 'visual inspection ai'],
  alternates: {
    canonical: 'https://spacecapture.ai/ai-defect-detection',
  },
};

const faqs = [
  {
    question: "What types of defects can AI detect?",
    answer: "SpaceCapture's AI can identify a wide range of issues including concrete cracks, water intrusion, missing firestopping, safety hazards like missing guardrails, and PPE compliance."
  },
  {
    question: "How accurate is AI defect detection?",
    answer: "We train our models on millions of construction images, achieving over 90% accuracy in standard conditions. The system continuously learns and improves with your specific project data."
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

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'AI Defect Detection Software',
  description:
    'Use computer vision to spot construction defects automatically. Our AI Defect Detection software reduces risk and improves quality control efficiency.',
  url: 'https://spacecapture.ai/ai-defect-detection',
  serviceType: 'AI Defect Detection Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/ai-defect-detection')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Advanced AI Defect Detection for Construction Sites"
      subtitle="Stop relying on human eyes alone. Use production-ready computer vision to identify quality issues, safety hazards, and deviations from plan in real-time."
    >
      {/* Pain Section */}
      <div className="bg-slate-900 rounded-2xl p-8 shadow-xl mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Why Manual Inspection Falls Short</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-4">
            <Eye className="h-6 w-6 text-red-500 shrink-0 mt-1" />
            <div>
              <span className="font-bold text-white block">Human inspectors miss defects that AI catches instantly</span>
              <span className="text-slate-300 text-sm">Fatigue, distraction, and subjective judgment lead to overlooked defects that computer vision identifies in milliseconds.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <DollarSign className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
            <div>
              <span className="font-bold text-white block">By the time defects are found, rework costs have already ballooned</span>
              <span className="text-slate-300 text-sm">Late detection turns minor fixes into major expenses — rework can cost 5-20x more when caught after installation.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-red-400 shrink-0 mt-1" />
            <div>
              <span className="font-bold text-white block">Inconsistent inspection quality across different team members</span>
              <span className="text-slate-300 text-sm">Every inspector applies different standards, creating gaps in quality assurance and unpredictable outcomes.</span>
            </div>
          </li>
        </ul>
      </div>

      {/* Definition Block */}
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">What is AI Defect Detection?</h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          AI Defect Detection uses <Link href="/glossary/computer-vision" className="text-indigo-600 underline">computer vision</Link> and machine learning algorithms to automatically analyze construction site images for quality issues and safety hazards. It replaces manual visual inspections, providing instant, objective analysis to identify errors before they become costly rework.
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

      <h2>How <Link href="/glossary/ai-defect-analysis" className="text-indigo-600 underline">AI Defect Detection</Link> Works</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Capture Imagery:</strong> Walk the site capturing video or photos using any standard camera or drone.
        </li>
        <li className="pl-2">
          <strong>Upload & Process:</strong> Upload images to the cloud, and our <Link href="/glossary/computer-vision" className="text-indigo-600 underline">computer vision</Link> engine analyzes every pixel.
        </li>
        <li className="pl-2">
          <strong>Defect Identification:</strong> The AI flags potential anomalies, categorizes them by type, and assigns a severity score.
        </li>
        <li className="pl-2">
          <strong>Review & Action:</strong> QA/QC managers review flagged items and convert confirmed <Link href="/glossary/defect-detection" className="text-indigo-600 underline">defects</Link> into actionable punch list tasks.
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
           <strong>SpaceCapture's <Link href="/glossary/ai-defect-analysis" className="text-indigo-600 underline">AI Defect Detection</Link></strong> engine processes site imagery to flag potential issues before they become expensive rework claims. 
          From concrete spalling to missing PPE, our algorithms never blink.
        </p>
         <p>
            Need to spot a specific type of installation error? Our platform allows for custom model tuning to adapt to your specific project needs or specialized equipment.
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
