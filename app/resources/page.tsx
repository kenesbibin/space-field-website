import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { BookOpen, FileText, Calculator, ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources & Field Operations Guides | SpaceCapture",
  description: "Expert insights, case studies, and tools for modernizing field operations. Learn how to move from reactive paper trails to predictive digital intelligence.",
  alternates: {
    canonical: 'https://spacecapture.ai/resources',
  },
};

const ResourcesPage = () => {
  const resources = [
    {
      category: "Guide",
      title: "ISO 9001 Audit Autopilot",
      description: "Stop panicking before audits. Learn how to make your Quality Management System self-documenting with visual proof.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      link: "/resources/iso-9001-guide",
      color: "bg-blue-50 text-blue-600",
    },
    {
      category: "Case Study",
      title: "Reactive to Predictive",
      description: "How an offshore operator prevented a $250k compressor failure using SpaceCapture's severity-based routing.",
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      link: "/resources/case-study-reactive-to-predictive",
      color: "bg-green-50 text-green-600",
    },
    {
      category: "Tool",
      title: "Switching Cost Calculator",
      description: "Calculate the hidden ROI of switching from paper/manual forms to AI-driven automated inspection.",
      icon: <Calculator className="w-6 h-6 text-indigo-600" />,
      link: "/tools/switching-calculator",
      color: "bg-indigo-50 text-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Header */}
        <section className="pt-32 pb-20 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-4 block">
              Knowledge Hub
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Mastering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                Digital Field.
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Deep dives into asset integrity, compliance automation, and the future of industrial inspections.
            </p>
          </div>
        </section>

        {/* Resource Grid */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${resource.color}`}>
                    {resource.icon}
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {resource.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-indigo-600 transition-colors">
                      {resource.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center text-indigo-600 font-bold text-sm">
                    Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </div>
  );
};

export default ResourcesPage;
