import React from "react";
import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import InsuranceSection from "@/components/InsuranceSection";
import { IndustryDetails } from "@/components/templates/IndustryDetails";
import { INDUSTRIES_DATA } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "AI Insurance Inspection Software | SpaceCapture",
  description: "Accelerate claims and risk assessment with AI-powered field inspection software. Offline mobile app for adjusters and inspectors.",
};

const InsurancePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        <InsuranceSection />
        <IndustryDetails data={INDUSTRIES_DATA['insurance']} />
        <CallToAction />
      </main>
    </div>
  );
};

export default InsurancePage;
