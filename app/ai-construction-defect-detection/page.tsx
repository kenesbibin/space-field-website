import React from "react";
import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import DefectAnalysisDemo from "@/components/DefectAnalysisDemo";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "AI Construction Defect Detection | Automated Site Audits",
  description: "Automate construction site audits with AI. Simply take a photo of a defect, and our engine identifies severity and suggests fixes instantly.",
  keywords: ["AI Defect Detection", "Construction AI", "Site Audit Software", "Automated Inspections"],
  alternates: {
    canonical: "https://spacecapture.ai/ai-construction-defect-detection",
  },
};

const AiDefectPage = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <main>
        <DefectAnalysisDemo />
        
        <div className="bg-white py-24">
             <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    Detect, Track, and Resolve. Automatically.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Space Capture doesn't just find defects—it tracks them. Our AI assigns a unique ID to every issue, monitors severity over time, and verifies the fix with a follow-up photo, ensuring complete lifecycle management.
                </p>
             </div>
             <Features />
        </div>

        <CallToAction />
      </main>
    </div>
  );
};

export default AiDefectPage;
