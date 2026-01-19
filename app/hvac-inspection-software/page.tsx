import React from "react";
import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import HvacPlumbingSection from "@/components/HvacPlumbingSection";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "HVAC Inspection Software | Digital Service Forms & Asset History",
  description: "The #1 HVAC Inspection Software. Track asset history, streamline service calls, and eliminate paper forms for heating and cooling systems.",
};

const HvacPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HvacPlumbingSection />
        
        <div className="bg-slate-50 py-24">
             <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    Optimized for HVAC Service Workflow
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    From residential installs to commercial rooftop units, Space Capture helps your technicians log preventative maintenance, capture equipment readings, and close tickets faster.
                </p>
             </div>
             <Features />
        </div>

        <CallToAction />
      </main>
    </div>
  );
};

export default HvacPage;
