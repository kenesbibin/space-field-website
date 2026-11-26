import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Boxes } from 'lucide-react';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'Field Inspection Software Alternatives',
  description: 'Compare SpaceCapture to leading field inspection, safety, and construction management alternatives. Find the right fit for your team.',
  alternates: {
    canonical: 'https://spacecapture.ai/alternatives',
  },
};

const ALTERNATIVES = [
  {
    slug: 'safetyculture',
    title: 'SafetyCulture / iAuditor',
    excerpt: 'Move beyond static digital checklists to AI-powered visual verification.',
  },
  {
    slug: 'procore',
    title: 'Procore',
    excerpt: 'Add autonomous field intelligence to your construction workflows.',
  },
  {
    slug: 'fieldwire',
    title: 'Fieldwire',
    excerpt: 'Replace manual task tracking with computer-vision verified field reports.',
  },
  {
    slug: 'gocanvas',
    title: 'GoCanvas',
    excerpt: 'Upgrade from form-based data capture to AI-driven defect detection.',
  },
  {
    slug: 'ai-detection-api',
    title: 'AI Detection API',
    excerpt: 'Integrate SpaceCapture computer vision into your own applications.',
  },
];

export default function AlternativesLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Hero */}
        <section className="bg-white pt-12 pb-16 border-b border-slate-200">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6">
              <Boxes className="w-3 h-3" /> Alternatives
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              SpaceCapture <span className="text-indigo-600">Alternatives</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              See how SpaceCapture compares to the leading field inspection, safety, and construction management platforms — and why teams switch to AI-powered field operations.
            </p>
          </div>
        </section>

        {/* Cards */}
        <div className="container mx-auto max-w-[1200px] px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALTERNATIVES.map((item) => (
              <Link
                key={item.slug}
                href={`/alternatives/${item.slug}`}
                className="group flex flex-col bg-white rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
              >
                <div className="p-8 flex flex-col h-full">
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                    {item.excerpt}
                  </p>
                  <div className="mt-auto border-t border-slate-100 pt-4 flex items-center text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    Read Comparison <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <CallToAction />
      </main>
    </div>
  );
}
