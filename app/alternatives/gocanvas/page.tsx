import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComparisonTable from "@/components/ComparisonTable";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "GoCanvas Alternative | SpaceCapture AI",
  description: "Eliminate form fatigue. SpaceCapture replaces manual typing with AI visual capture. The best GoCanvas alternative for speed and accuracy.",
  alternates: {
    canonical: 'https://spacecapture.ai/alternatives/gocanvas',
  },
};

const GoCanvasPage = () => {
  const comparisonRows = [
    {
      feature: "Data Entry Method",
      competitorValue: "Heavy Typing Required",
      ourValue: "Visual & Voice-to-Text",
      highlight: true,
    },
    {
      feature: "Inspector Experience",
      competitorValue: "Form Fatigue & Burnout",
      ourValue: "Streamlined & Fast",
      highlight: true,
    },
     {
      feature: "Defect Classification",
      competitorValue: "Manual Dropdowns",
      ourValue: "Auto-Detected by AI",
    },
    {
      feature: "Rich Media Support",
      competitorValue: "Photo Attachments only",
      ourValue: "AR Overlays & Measurements",
    },
    {
      feature: "Workflow Logic",
      competitorValue: "Linear If/Then Rules",
      ourValue: "Context-Aware Adaptation",
    },
    {
      feature: "Cost Model",
      competitorValue: "Per user / Per form fees",
      ourValue: "Value-based Pricing",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
             {/* Different gradient blob for visual distinction */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="container mx-auto max-w-6xl px-4 relative z-10 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-semibold mb-6">
                    Better than GoCanvas
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                    Stop Typing Data into GoCanvas. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        Let SpaceCapture See It.
                    </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                    Form fatigue leads to bad data. Remove the keyboard from the equation with 
                    visual first automation that creates records 10x faster.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/request-a-demo" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-all transform hover:scale-105">
                        Start Free Trial
                    </a>
                    <a href="#comparison" className="px-8 py-4 bg-transparent border border-purple-400 text-purple-100 rounded-full font-bold hover:bg-purple-900/30 transition-all">
                        Compare Speed
                    </a>
                </div>
            </div>
        </section>

        {/* Pain Point Section */}
        <section className="py-24 bg-white">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <div className="relative">
                            <div className="absolute inset-0 bg-slate-900 rounded-3xl transform rotate-3 scale-95 opacity-10"></div>
                            <div className="relative bg-slate-50 p-10 rounded-3xl border border-slate-200">
                                <h3 className="text-2xl font-bold text-slate-800 mb-6">The "Form Fatigue" Cycle</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold">1</div>
                                        <p className="text-slate-600">Inspectors start shifting focus from the asset to the screen.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold">2</div>
                                        <p className="text-slate-600">Typing detailed descriptions becomes tedious.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold">3</div>
                                        <p className="text-slate-600">Inspectors begin copy-pasting or entering minimum viable data ("Pencil Whipping").</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold">4</div>
                                        <p className="text-slate-900 font-bold">You lose critical operational visibility.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                            Your Inspectors Aren't Typists. <br/>
                            <span className="text-purple-600">Don't Treat Them Like One.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            GoCanvas improved on paper, but it didn't solve the core problem: Manual data entry is slow, error-prone, and hated by field workers.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            SpaceCapture uses Multimodal AI. Your team can point a camera, speak a description, or simply let the AI auto-fill the form based on what it sees.
                        </p>
                         <a href="/request-a-demo" className="text-purple-600 font-bold hover:text-purple-700 inline-flex items-center">
                            See how it works →
                         </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Comparison Table */}
        <div id="comparison">
            <ComparisonTable 
                competitorName="GoCanvas"
                rows={comparisonRows}
                title="The End of Manual Forms"
                subtitle="Why fast-moving teams are leaving GoCanvas for SpaceCapture."
            />
        </div>

        {/* Switching Section */}
        <section className="py-24 bg-white border-t border-slate-100">
             <div className="container mx-auto max-w-4xl px-4 text-center">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Worried about migration? Don't be.</h2>
                 <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
                     We know you have hundreds of templates in GoCanvas. You don't have to rebuild them from scratch.
                 </p>
                 
                 <div className="grid md:grid-cols-3 gap-8 text-left">
                     <div className="p-6 bg-slate-50 rounded-2xl">
                         <div className="font-bold text-indigo-600 mb-2">Step 1</div>
                         <h4 className="font-bold text-slate-900 mb-2">Export to PDF</h4>
                         <p className="text-sm text-slate-600">Simply give us your blank GoCanvas PDFs.</p>
                     </div>
                     <div className="p-6 bg-slate-50 rounded-2xl">
                         <div className="font-bold text-indigo-600 mb-2">Step 2</div>
                         <h4 className="font-bold text-slate-900 mb-2">AI Ingestion</h4>
                         <p className="text-sm text-slate-600">Our Vision Engine reads your PDF and rebuilds the logic, fields, and tables automatically.</p>
                     </div>
                     <div className="p-6 bg-slate-50 rounded-2xl">
                         <div className="font-bold text-indigo-600 mb-2">Step 3</div>
                         <h4 className="font-bold text-slate-900 mb-2">Go Live</h4>
                         <p className="text-sm text-slate-600">Review the auto-generated templates, tweak if needed, and deploy to your team.</p>
                     </div>
                 </div>
             </div>
        </section>

        {/* CTA */}
        <CallToAction />
      </main>
    </div>
  );
};

export default GoCanvasPage;
