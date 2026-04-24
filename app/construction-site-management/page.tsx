import React from 'react';
import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/seo/SeoLandingPage';
import { ComparisonTable } from '@/components/seo/ComparisonTable';
import { FaqSection } from '@/components/seo/FaqSection';

export const metadata: Metadata = {
  title: 'Construction Site Management & Monitoring Software | SpaceCapture',
  description: 'All-in-one construction site management and monitoring platform. Real-time dashboards, AI safety monitoring, drone integration, workforce tracking, and 360° site documentation.',
  keywords: [
    'construction site management',
    'construction site monitoring',
    'construction site monitoring software',
    'construction site management software',
    'jobsite monitoring system',
    'construction site surveillance',
    'AI construction site monitoring',
    'construction site camera system',
    'jobsite control software',
    'project management software construction',
    'site coordination software',
    'construction workforce tracking',
    'construction safety monitoring',
    'real-time construction site tracking',
    'construction site dashboard',
  ],
  alternates: {
    canonical: '/construction-site-management',
  },
};

export default function Page() {
  const faqs = [
    {
      question: "What is construction site monitoring software?",
      answer: "Construction site monitoring software uses cameras, sensors, AI analytics, and mobile apps to track activity, safety, progress, and security on construction jobsites in real time. It replaces manual checks with automated, always-on oversight."
    },
    {
      question: "What features are included in site management?",
      answer: "The platform includes modules for daily logs, workforce tracking, asset management, safety compliance, visitor management, progress photo documentation, AI defect detection, and automated reporting."
    },
    {
      question: "How does AI improve construction site monitoring?",
      answer: "AI analyzes site photos and video to automatically detect safety hazards (missing PPE, fall risks), quality defects (cracks, misalignments), and progress deviations. This eliminates human error and provides 24/7 monitoring capabilities."
    },
    {
      question: "How does it help with safety?",
      answer: "We offer digital safety orientations, toolbox talk tracking, AI-powered PPE compliance monitoring, automated hazard detection, and OSHA-format safety reports to ensure a safe jobsite environment."
    },
    {
      question: "Can I monitor multiple construction sites from one dashboard?",
      answer: "Yes. SpaceCapture's portfolio dashboard lets you monitor 5, 10, or 50+ jobsites simultaneously. Each site streams live data including photos, inspection results, safety logs, and progress percentages into a unified command center."
    },
    {
      question: "Can I track equipment usage?",
      answer: "Yes, you can log equipment hours, track maintenance schedules, and monitor utilization rates directly from the field app."
    },
    {
      question: "Does the system work offline on construction sites?",
      answer: "Yes. SpaceCapture's mobile app works fully offline with Delta-Sync protocol. Field teams can capture data, fill forms, and take photos without internet. Data syncs automatically when connectivity returns."
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
          { feature: "Site Monitoring", spaceCapture: "AI + 360° + Drone", competitors: "Manual Walk-Throughs Only" },
          { feature: "Offline Mode", spaceCapture: "Full Offline + Delta-Sync", competitors: "Requires Internet" },
        ]}
      />

      {/* NEW: Site Monitoring Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Construction Site Monitoring: From Reactive to Proactive</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Traditional construction site monitoring relies on periodic walkthroughs and manual observation — meaning problems are often discovered days or weeks after they occur. Modern <strong>construction site monitoring software</strong> provides continuous, AI-powered oversight that catches issues in real time.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mb-3">What Modern Site Monitoring Includes</h3>
        <ul className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "360° camera captures for virtual site walks",
            "AI-powered safety hazard detection (PPE, fall risks)",
            "Drone aerial surveys with orthomosaic mapping",
            "Fixed time-lapse cameras for daily progress",
            "Real-time dashboards with multi-site portfolio view",
            "Automated alerts for critical events and SLA breaches",
            "Computer vision defect detection on every photo",
            "GPS-tagged, timestamped documentation for audit trails",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mb-3">ROI of AI-Powered Site Monitoring</h3>
        <p className="text-slate-700 leading-relaxed mb-6">
          Construction firms using comprehensive monitoring report 50–70% reduction in site travel, 40% fewer safety incidents, and 30% faster defect resolution. The ROI typically materializes within the first quarter of deployment.
        </p>
      </div>

      <div className="mb-12">
        <h3>Orchestrate Your Operations</h3>
         <p>
        Managing a complex construction site requires real-time coordination. 
        <strong>SpaceCapture</strong> provides a central command center for all your site activities. 
        Know who is on site, what equipment is running, and where materials are stored—all at a glance.
        </p>
      </div>

      <FaqSection items={faqs} />

      {/* Internal Links */}
      <div className="mt-12 pt-8 border-t border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Related Solutions</h3>
        <ul className="grid md:grid-cols-2 gap-3">
          <li><a href="/real-time-construction-monitoring" className="text-blue-600 hover:underline font-medium block p-3 bg-slate-50 rounded-lg">Real-Time Construction Monitoring</a></li>
          <li><a href="/ai-defect-detection" className="text-blue-600 hover:underline font-medium block p-3 bg-slate-50 rounded-lg">AI Defect Detection</a></li>
          <li><a href="/site-inspection-software" className="text-blue-600 hover:underline font-medium block p-3 bg-slate-50 rounded-lg">Site Inspection Software</a></li>
          <li><a href="/blog/remote-site-monitoring-guide" className="text-blue-600 hover:underline font-medium block p-3 bg-slate-50 rounded-lg">Remote Site Monitoring Guide</a></li>
          <li><a href="/blog/subcontractor-safety-ai" className="text-blue-600 hover:underline font-medium block p-3 bg-slate-50 rounded-lg">AI Safety Monitoring for Subcontractors</a></li>
          <li><a href="/trust" className="text-blue-600 hover:underline font-medium block p-3 bg-slate-50 rounded-lg">Trust & Security Center</a></li>
        </ul>
      </div>
    </SeoLandingPage>
  );
}
