import React from "react";
import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata: Metadata = {
  title: "Fieldwire Alternative for Small Teams | SpaceCapture",
  description: "The best Fieldwire alternative for small construction teams. Simple pricing, zero learning curve, and powerful AI features without the enterprise bloat.",
};

const FieldwirePage = () => {
  const comparisonRows = [
    {
      feature: "Target Audience",
      competitorValue: "Enterprise / Large GCs",
      ourValue: "Small Teams & Subs",
      highlight: true,
    },
    {
      feature: "Setup Time",
      competitorValue: "Complex (Plans Required)",
      ourValue: "Instant (Start Scanning)",
      highlight: true,
    },
    {
      feature: "Pricing Model",
      competitorValue: "Per User / Tiered Features",
      ourValue: "Simple Flat Rate",
    },
    {
      feature: "Plan Views",
      competitorValue: "Heavy PDF Rendering",
      ourValue: "Fast Mobile-First View",
    },
    {
      feature: "Task Management",
      competitorValue: "Ticket-Based",
      ourValue: "Visual & AI-Driven",
    },
    {
      feature: "Support",
      competitorValue: "Ticket System",
      ourValue: "Direct WhatsApp Support",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
            <div className="container mx-auto max-w-6xl px-4 relative z-10 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold mb-6">
                    Better Than Fieldwire for  Small Teams
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                    Big Tech Power<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                        Small Team Agility.
                    </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                    Fieldwire is great for skyscrapers. But if you're a specialty sub or a small general contractor, you need speed, not complex plan management.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/request-a-demo" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-all transform hover:scale-105">
                        Start for Free
                    </a>
                </div>
            </div>
        </section>

        {/* Feature Comparison */}
        <div className="py-24">
            <ComparisonTable 
                competitorName="Fieldwire"
                rows={comparisonRows}
                title="Why Small Teams Switch"
                subtitle="Stop paying for features you never use."
            />
        </div>

        <CallToAction />
      </main>
    </div>
  );
};

export default FieldwirePage;
