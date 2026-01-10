import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import ConstructionSection from "@/components/ConstructionSection";
import { div } from "framer-motion/client";
import { IndustryDetails } from "@/components/templates/IndustryDetails";
import { INDUSTRIES_DATA } from "@/lib/seo-data";


export const metadata: Metadata = {
  title: "Automated Construction Punch Lists | SpaceCapture",
  description: "Close out projects faster. Turn site walks into automated punch lists using video capture. Reduce rework and subcontractor disputes.",
};

const ConstructionPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Add Breadcrumbs at the top, with some padding for the fixed navbar */}
        <div className="container mx-auto max-w-[1400px] px-4 pt-24 pb-2">
            <Breadcrumbs 
                items={[
                    { label: 'Industries', href: '#' },
                    { label: 'Construction', href: '/industries/construction' }
                ]} 
            />
        </div>
        <ConstructionSection />

        <IndustryDetails data={INDUSTRIES_DATA['construction']} />

        <CallToAction />
      </main>
    </div>
  );
};

export default ConstructionPage;