"use client";

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const DEFAULT_TRY_FREE_URL =
  "https://app.pmspace.ai/login?type=SpaceCapture&moduleId=7a36674e-f8d6-4962-a0dc-105b50b4849c&invite=guest/login";

export const SeoCallToAction = ({
  tryForFreeHref = DEFAULT_TRY_FREE_URL,
}: {
  tryForFreeHref?: string;
}) => {
  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Social Proof Near CTA */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-white font-bold">4.8</span>
          <span className="text-slate-400">from 120+ construction teams</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Ready to Streamline Your Operations?
        </h2>

        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of construction professionals using SpaceCapture to automate inspections, ensure safety, and deliver higher quality projects.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={tryForFreeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-indigo-600 px-8 text-lg font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-500 hover:scale-105"
          >
            Start Free — No Credit Card
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
