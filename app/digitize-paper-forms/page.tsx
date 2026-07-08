import React from "react";
import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import DigitizePaperSection from "@/components/DigitizePaperSection";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "Convert Excel Checklists to Mobile App | Paperless Construction Forms",
  description: "Transform paper forms and Excel sheets into a digital daily construction report app. The best paperless safety audit software for field teams.",
  alternates: {
    canonical: "https://spacecapture.ai/digitize-paper-forms",
  },
};

const DigitizePaperPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <DigitizePaperSection />
        
        <div className="bg-slate-50 py-24">
             <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    From Clipboard to Cloud in Minutes
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Space Capture replaces clunky spreadsheets and lost paperwork with slick mobile apps. No coding required. Just instant, verifiable field data.
                </p>
             </div>
             <Features />
        </div>

        <CallToAction />
      </main>
    </div>
  );
};

export default DigitizePaperPage;
