import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import OilGasSection from "@/components/OilGasSection";
import { IndustryDetails } from "@/components/templates/IndustryDetails";
import { INDUSTRIES_DATA } from "@/lib/seo-data";
import { main } from "framer-motion/client";

export const metadata: Metadata = {
  title: "Explosion-Proof Digital Inspection for Oil & Gas | SpaceCapture",
  description: "Deploy AI inspection software in Zone 1/Zone 2 environments. Automate ISO 4628 corrosion quantification and streamline asset integrity management.",
};

const OilGasPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        <OilGasSection />
        <IndustryDetails data={INDUSTRIES_DATA['oil-gas']} />
        <CallToAction />
      </main>
    </div>
  );
};

export default OilGasPage;
