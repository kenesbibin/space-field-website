"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

export const SeoCallToAction = () => {
  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Ready to Streamline Your Operations?
        </h2>
        
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of construction professionals using SpaceCapture to automate inspections, ensure safety, and deliver higher quality projects.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://www.amspace.ai/login?type=Legal&moduleId=b20f5bfe-a351-46e7-842a-24a02802fe4f&invite=guest" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-indigo-600 px-8 text-lg font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-500 hover:scale-105"
          >
            Try for Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          
          <a 
            href="/request-a-demo" 
            className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-white text-slate-900 border border-slate-200 px-8 text-lg font-bold shadow transition-all hover:bg-slate-100 hover:scale-105"
          >
            Book a Demo
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-500 font-medium">
          No credit card required • Unlimited support • Cancel anytime
        </p>
      </div>
    </section>
  );
};
