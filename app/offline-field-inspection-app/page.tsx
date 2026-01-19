import React from "react";
import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import OfflineModeSection from "@/components/OfflineModeSection";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "Offline Field Inspection App for Construction & Remote Sites | Space Capture",
  description: "The #1 Offline Field App. Capture inspection data in basements, tunnels, or remote sites without WiFi. Auto-sync when online. No data loss.",
};

const OfflineAppPage = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <main>
        <OfflineModeSection />
        
        {/* Supporting Content */}
        <div className="bg-slate-50 py-24">
             <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    Why Construction Teams Choose Offline-First
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Field work doesn't stop when the connection drops. Space Capture is engineered to perform 100% of its core functions without an internet connection, ensuring your team stays productive anywhere on the map.
                </p>
             </div>
             <Features />
        </div>

        <CallToAction />
      </main>
    </div>
  );
};

export default OfflineAppPage;
