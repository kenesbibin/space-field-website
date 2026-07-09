import React from 'react';
import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/seo/SeoLandingPage';
import { ComparisonTable } from '@/components/seo/ComparisonTable';
import { FaqSection } from '@/components/seo/FaqSection';

export const metadata: Metadata = {
  title: 'Construction Site Management Software | Total Project Control',
  description: 'Take control of your job site with our comprehensive management software. Coordinate crews, track assets, and ensure safety compliance from one dashboard.',
  keywords: ['construction site management', 'jobsite control', 'project management software', 'resource tracking', 'site coordination'],
  alternates: {
    canonical: 'https://spacecapture.ai/construction-site-management',
  },
};

export default function Page() {
  const faqs = [
    {
      question: "What features are included in site management?",
      answer: "The platform includes modules for daily logs, workforce tracking, asset management, safety compliance, visitor management, and progress photo documentation."
    },
    {
      question: "How does it help with safety?",
      answer: "We offer digital safety orientations, toolbox talk tracking, and automated hazard detection to ensure a safe jobsite environment."
    },
    {
      question: "Can I track equipment usage?",
      answer: "Yes, you can log equipment hours, track maintenance schedules, and monitor utilization rates directly from the field app."
    },
    {
      question: "Is there a limit on users or projects?",
      answer: "Our enterprise plans offer unlimited users and projects, allowing you to scale operations without worrying about seat licenses."
    },
    {
      question: "How quickly can we implement this?",
      answer: "Implementation typically takes 1-2 weeks depending on your size. We provide dedicated onboarding specialists to help set up your projects and train your teams."
    }
  ];

  return (
    <SeoLandingPage
      title="Total Control with Construction Site Management Software"
      subtitle="Master the chaos of the job site. Coordinate labor, equipment, and materials efficiently while maintaining the highest safety standards."
    >
      {/* Definition Block */}
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">What is Construction Site Management Software?</h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Construction site management software is a centralized platform that helps superintendents and project managers oversee daily jobsite activities. It integrates labor tracking, safety compliance, equipment logs, and progress reporting into a single system to ensure projects stay on schedule and budget.
        </p>
      </div>

       {/* Bullet Summary */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Command Center Features</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "Real-time labor and workforce tracking",
            "Digital safety & toolbox talk management",
            "Equipment and asset utilization logs",
            "Centralized progress documentation"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>How We Streamline Site Operations</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Plan & Schedule:</strong> Upload your schedule and assign daily tasks to crews and machines.
        </li>
        <li className="pl-2">
          <strong>Execute & Track:</strong> Crews check in via mobile, logging hours and completing safety checks before starting work.
        </li>
        <li className="pl-2">
          <strong>Monitor Progress:</strong> View real-time feeds of site activity, photos, and potential bottlenecks on the dashboard.
        </li>
        <li className="pl-2">
          <strong>Report & Improve:</strong> Analyze daily production rates and safety data to optimize future performance.
        </li>
      </ol>

      <ComparisonTable 
        title="SpaceCapture vs Fragmented Tools"
        features={[
          { feature: "Integration", spaceCapture: "All-in-One Platform", competitors: "Multiple Disconnected Apps" },
          { feature: "User Experience", spaceCapture: "Unified Mobile App", competitors: "Fragmented / Confusing" },
          { feature: "Data Insights", spaceCapture: "Cross-Module Analytics", competitors: "Siloed Data" },
          { feature: "Admin Burden", spaceCapture: "Low (Automated)", competitors: "High (Manual Entry)" },
        ]}
      />

       <div className="mb-12">
        <h3>Orchestrate Your Operations</h3>
         <p>
        Managing a complex construction site requires real-time coordination. 
        <strong>SpaceCapture</strong> provides a central command center for all your site activities. 
        Know who is on site, what equipment is running, and where materials are stored—all at a glance.
        </p>
      </div>

      <FaqSection items={faqs} />
    </SeoLandingPage>
  );
}
