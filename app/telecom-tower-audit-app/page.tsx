import React from "react";
import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import TelecommunicationSection from "@/components/TelecommunicationSection";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "Telecom Tower Audit App | 5G Site Inspections & Asset Closeouts",
  description: "Accelerate 5G tower rollouts with the best Telecom Tower Audit App. Capture high-res photos, verify mount installation, and close out sites in record time.",
};

const TelecomPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <TelecommunicationSection />
        
        <div className="bg-slate-50 py-24">
             <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    Close Out Tower Sites 50% Faster
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Designed for tower climbers and ground crews. Capture standardized closeout packages, verify antenna azimuths, and ensure safety compliance on every climb.
                </p>
             </div>
             <Features />
        </div>

        <CallToAction />
      </main>
    </div>
  );
};

export default TelecomPage;
