import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { ShieldCheck, Flame, Gauge, CheckCircle2, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Explosion-Proof Digital Inspection for Oil & Gas | SpaceCapture",
  description: "Deploy AI inspection software in Zone 1/Zone 2 environments. Automate ISO 4628 corrosion quantification and streamline asset integrity management.",
};

const OilGasPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
           {/* Amber/Orange theme for O&G */}
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/20 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-semibold mb-6">
                <Flame className="w-4 h-4" /> Oil, Gas & Energy
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Explosion-Proof <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
                  Digital Inspection.
                </span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Bring Computer Vision to Zone 1 & 2 environments. 
                Automate corrosion quantification (ISO 4628) and ensure asset integrity without the paperwork.
              </p>
              <div className="flex gap-4">
                 <a href="/book-a-demo" className="px-8 py-4 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
                    Get ATEX Compliant Demo
                 </a>
              </div>
            </div>
            {/* Visual Placeholder for Rig/Tablet */}
            <div className="relative h-[400px] bg-slate-800 rounded-2xl border border-slate-700 p-4 shadow-2xl overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 z-0"></div>
                 {/* Mock UI for Corrosion Detection */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full"> 
                    <div className="w-64 h-64 border-2 border-orange-500 rounded-lg relative overflow-hidden">
                        {/* Simulated Camera View */}
                        <div className="absolute inset-0 bg-slate-700 opacity-50"></div>
                        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">ISO 4628-3: Ri4</div>
                        
                        {/* Bounding Box Animation */}
                        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-dashed border-red-500 rounded animate-pulse">
                             <div className="absolute -top-3 left-0 bg-red-500 text-[10px] text-white px-1">Deep Pitting</div>
                        </div>
                    </div>
                    <p className="mt-4 text-slate-400 text-sm font-mono typewriter">Detecting Surface Rust... 85% Confidence</p>
                </div>
            </div>
          </div>
        </section>

        {/* Features / Deep Dive */}
        <section className="py-24 bg-white">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Built for the Toughest Jobs</h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="p-8 rounded-2xl bg-orange-50 border border-orange-100 hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Zone 1/2 Ready</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Designed for intrinsic safety workflows. Our offline-first architecture ensures reliable data capture even in shielded environments and offshore rigs.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                         <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                            <Gauge className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">ISO 4628 Auto-Grading</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Remove subjectivity. Our AI measures rusting, blistering, and cracking against ISO standards, giving you a quantified degradation score instantly.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                         <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Integrity Management</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Feed data directly into your APM (Asset Performance Management) software. Predict failures before they cause shutdowns.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Benefit Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
             <div className="container mx-auto max-w-4xl px-4 text-center">
                 <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Majors Switch from Paper</h2>
                 <div className="grid md:grid-cols-2 gap-4 text-left">
                    {[
                        "Standardized corrosion reporting across 50+ sites",
                        "Reduced inspection time by 40% on offshore rigs",
                        "Eliminated data entry errors in SAP integration",
                        "Real-time visibility into safety critical barriers"
                    ].map((item,i) => (
                        <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                            <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                            <span className="text-slate-700 font-medium">{item}</span>
                        </div>
                    ))}
                 </div>
             </div>
        </section>

        <CallToAction />
      </main>
    </div>
  );
};

export default OilGasPage;
