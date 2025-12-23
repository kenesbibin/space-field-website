import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SwitchingCalculator from "@/components/SwitchingCalculator";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Switching Cost Calculator | SpaceCapture",
  description: "Calculate how much money you are wasting on manual data entry and static forms. See your potential ROI with SpaceCapture AI.",
};

const CalculatorPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Simple Header */}
        <section className="pt-32 pb-16 bg-white text-center">
            <div className="container mx-auto px-4">
                <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">ROI Calculator</span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">
                    The Real Cost of "Cheap" Forms
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Manual typing, error correction, and data syncing adds up. 
                    Use this tool to estimate the hidden operational waste in your current process.
                </p>
            </div>
        </section>

        {/* Calculator Section */}
        <section className="pb-24 bg-white">
            <div className="container mx-auto px-4">
                <SwitchingCalculator />
            </div>
        </section>

        {/* The Hidden Tax Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto max-w-4xl px-4">
                 <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Where is that money going?</h2>
                 <div className="grid md:grid-cols-3 gap-8">
                     <div className="bg-white p-6 rounded-xl shadow-sm">
                         <div className="text-red-500 font-bold mb-2">1. Transcription</div>
                         <p className="text-slate-600 text-sm">
                             Engineers spend 20% of their "field day" sitting in a truck or office typing up notes from a notebook. That's highly paid data entry.
                         </p>
                     </div>
                     <div className="bg-white p-6 rounded-xl shadow-sm">
                         <div className="text-red-500 font-bold mb-2">2. Data Lag</div>
                         <p className="text-slate-600 text-sm">
                             Paper forms take days to process. By the time a critical defect is digitized, it might have already caused downtime.
                         </p>
                     </div>
                     <div className="bg-white p-6 rounded-xl shadow-sm">
                         <div className="text-red-500 font-bold mb-2">3. Rework</div>
                         <p className="text-slate-600 text-sm">
                             "I can't read this handwriting." "Which valve was this?" Callbacks to the field to clarify data waste even more time.
                         </p>
                     </div>
                 </div>
            </div>
        </section>
        
        <CallToAction />
      </main>
    </div>
  );
};

export default CalculatorPage;
