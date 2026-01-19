import React from "react";
import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import SolarPanelSection from "@/components/SolarPanelSection";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "Solar Panel Inspection AI | Thermal Defect Detection & Drone Audits",
  description: "Automate solar farm inspections with AI. Detect thermal anomalies, track panel degradation, and integrate drone data for utility-scale solar audits.",
};

const SolarPage = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <main>
        <SolarPanelSection />
        
        <div className="bg-white py-24">
             <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    Utility-Scale Solar Intelligence
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Managing megawatts involves millions of data points. Space Capture ingests thermal and visual data to pinpoint underperforming strings and ensure maximum energy generation.
                </p>
             </div>
             <Features />
        </div>

        <CallToAction />
      </main>
    </div>
  );
};

export default SolarPage;
