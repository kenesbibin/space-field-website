import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComparisonTable from "@/components/ComparisonTable";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Best Alternatives to SafetyCulture | SpaceCapture AI",
  description: "Stop manually filling specialized forms. Switch to SpaceCapture for automated defect detection, real-time risk quantification, and generative checklists.",
  keywords: "SafetyCulture alternative, iAuditor alternative, best inspection app, automated checklist, spacecapture vs safetyculture",
};

const SafetyCulturePage = () => {
  const comparisonRows = [
    {
      feature: "Data Capture Method",
      competitorValue: "Manual Typing & tapping",
      ourValue: "Visual AI Automation",
      highlight: true,
    },
    {
      feature: "Checklist Type",
      competitorValue: "Static Templates",
      ourValue: "Generative & Context-Aware",
      highlight: true,
    },
    {
      feature: "Defect Detection",
      competitorValue: "Human Eye Dependent",
      ourValue: "Computer Vision Verification",
    },
    {
      feature: "Severity Grading",
      competitorValue: "Subjective Opinion",
      ourValue: "ISO Standard Quantification",
    },
    {
      feature: "Offline Capability",
      competitorValue: "Basic Form Caching",
      ourValue: "Full Edge AI Processing",
    },
    {
      feature: "Setup Time",
      competitorValue: "Weeks of Template Building",
      ourValue: "Instant via PDF Import",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/30 blur-[120px] rounded-full"></div>
            
            <div className="container mx-auto max-w-6xl px-4 relative z-10 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-semibold mb-6">
                    The Modern Alternative to iAuditor / SafetyCulture
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                    SafetyCulture Digitized Your Forms. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                        We Automate Your Decisions.
                    </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                    Stop paying for static digital paper. Upgrade to Active AI that sees defects, 
                    quantifies risks, and prevents failures before they happen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/book-a-demo" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-all transform hover:scale-105">
                        Import Your Templates
                    </a>
                    <a href="#comparison" className="px-8 py-4 bg-transparent border border-indigo-400 text-indigo-100 rounded-full font-bold hover:bg-indigo-900/30 transition-all">
                        See the Difference
                    </a>
                </div>
            </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-white">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Why Move Beyond Static Forms?</h2>
                    <p className="mt-4 text-slate-600">The world has changed. Your inspection software hasn't.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                   <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-400 mb-4">The Old Way (Static)</h3>
                        <p className="text-slate-600 mb-6">
                            Digital forms are just paper on a screen. They rely entirely on the worker's diligence. 
                            If a worker is tired, rushing, or inexperienced, a checklist on a screen won't stop a mistake.
                        </p>
                        <ul className="space-y-3 text-slate-500">
                            <li className="flex items-center gap-2">❌ Subjective severity grading</li>
                            <li className="flex items-center gap-2">❌ "Pencil-whipping" is easy</li>
                            <li className="flex items-center gap-2">❌ Data is trapped in PDFs</li>
                        </ul>
                   </div>
                   <div className="p-8 rounded-3xl bg-indigo-50 border border-indigo-100 ring-1 ring-indigo-200">
                        <h3 className="text-2xl font-bold text-indigo-700 mb-4">The New Way (Active)</h3>
                        <p className="text-slate-700 mb-6">
                            SpaceCapture uses Computer Vision to validate reality. It sees what your workers see. 
                            It doesn't just ask "Is this safe?", it measures the corrosion, checks the PPE, and verifies the extensive protocols.
                        </p>
                         <ul className="space-y-3 text-slate-700 font-medium">
                            <li className="flex items-center gap-2">✅ ISO 4628 Standard Grading</li>
                            <li className="flex items-center gap-2">✅ Visual proof required for completion</li>
                            <li className="flex items-center gap-2">✅ Predictive insights from day one</li>
                        </ul>
                   </div>
                </div>
            </div>
        </section>

        {/* Comparison Table */}
        <div id="comparison">
            <ComparisonTable 
                competitorName="SafetyCulture / iAuditor"
                rows={comparisonRows}
                title="Don't Just Digitize. Automate."
                subtitle="See how SpaceCapture outperforms legacy form tools."
            />
        </div>

        {/* CTA */}
        <CallToAction />
      </main>
    </div>
  );
};

export default SafetyCulturePage;
