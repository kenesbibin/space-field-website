import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComparisonTable from "@/components/ComparisonTable";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Procore Alternative | SpaceCapture AI",
  description: "Procore handles the office. SpaceCapture handles the field. Switch to the specialized tool for field data capture, visual automation, and defects.",
  keywords: "Procore alternative, field management software, construction punch list app, best alternative to Procore, spacecapture vs procore",
};

const ProcorePage = () => {
  const comparisonRows = [
    {
      feature: "Core Focus",
      competitorValue: "Office & Project Mgmt",
      ourValue: "Field Execution & Capture",
      highlight: true,
    },
    {
      feature: "Data Entry Speed",
      competitorValue: "Slow (Forms & Menus)",
      ourValue: "Instant (Visual AI)",
      highlight: true,
    },
    {
      feature: "Defect Detection",
      competitorValue: "Manual Photos Only",
      ourValue: "AI Auto-Detection",
    },
    {
      feature: "Implementation Time",
      competitorValue: "Months (Heavy Config)",
      ourValue: "Days (Plug & Play)",
    },
    {
      feature: "Cost Model",
      competitorValue: "% of Construction Vol.",
      ourValue: "Simple User/Site Lic.",
    },
    {
      feature: "Offline Capabilities",
      competitorValue: "Limited Sync",
      ourValue: "Full Edge Processing",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            {/* Orange/Red gradient blob for Procore contrast */}
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-orange-600/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="container mx-auto max-w-6xl px-4 relative z-10 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-semibold mb-6">
                    The Field-First Alternative to Procore
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                    Procore Wins the Office. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                        We Win the Field.
                    </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                    Don't force a Project Management tool to do Field Management work. 
                    Give your inspectors the specialized AI tool they need to capture reality fast.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/book-a-demo" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-all transform hover:scale-105">
                        Get Field Specific
                    </a>
                    <a href="#comparison" className="px-8 py-4 bg-transparent border border-orange-400 text-orange-100 rounded-full font-bold hover:bg-orange-900/30 transition-all">
                        Compare Features
                    </a>
                </div>
            </div>
        </section>

        {/* Philosophy/Pain Point Section */}
        <section className="py-24 bg-white">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <div className="relative">
                            <div className="absolute inset-0 bg-slate-900 rounded-3xl transform -rotate-2 scale-95 opacity-5"></div>
                            <div className="relative bg-white p-10 rounded-3xl border border-slate-200 shadow-xl">
                                <h3 className="text-2xl font-bold text-slate-800 mb-6">The "ERP Trap"</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                                            🏢
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Great for Executives</h4>
                                            <p className="text-sm text-slate-600 mt-1">Dashboards, budgets, and schedules look great from the office.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                                            🚧
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Bad for Inspectors</h4>
                                            <p className="text-sm text-slate-600 mt-1">Complex menus, endless tapping, and slow syncing kill field productivity.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-red-50 rounded-xl border border-red-100 text-sm text-red-800 font-medium">
                                        Result: Field teams stop reporting minor issues to avoid the hassle.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                            Complement Procore, <br/>
                            <span className="text-indigo-600">Don't Replace It.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            We aren't an ERP. We are a dedicated Field Intelligence layer that feeds clean, visual data <i>into</i> your management systems.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Procore manages the contract. SpaceCapture verifies the physical reality of the asset using Computer Vision and AI.
                        </p>
                         <ul className="space-y-3 text-slate-700 font-medium mb-8">
                            <li className="flex items-center gap-2">✅ specialized UI for heavy gloves/sunlight</li>
                            <li className="flex items-center gap-2">✅ Works 100% offline in deep tunnels</li>
                            <li className="flex items-center gap-2">✅ Automates the "boring stuff" with AI</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Comparison Table */}
        <div id="comparison">
            <ComparisonTable 
                competitorName="Procore"
                rows={comparisonRows}
                title="Office Management vs Field Intelligence"
                subtitle="Why leading GCs use SpaceCapture alongside Procore."
            />
        </div>

        {/* CTA */}
        <CallToAction />
      </main>
    </div>
  );
};

export default ProcorePage;
