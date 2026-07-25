import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Scale } from 'lucide-react';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'SpaceCapture vs Competitors | Field Software Comparison Hub',
  description: 'Compare SpaceCapture side-by-side with Raken, PlanRadar, OpenSpace, and SafetyCulture. See which field inspection platform fits your workflow.',
  alternates: {
    canonical: 'https://spacecapture.ai/compare',
  },
};

const COMPARISONS = [
  {
    slug: 'raken',
    title: 'SpaceCapture vs Raken',
    excerpt: 'Stop typing daily reports. See how AI-automated field logs compare to manual input.',
  },
  {
    slug: 'planradar',
    title: 'SpaceCapture vs PlanRadar',
    excerpt: 'Compare defect tracking, collaboration, and AI-powered quality assurance.',
  },
  {
    slug: 'openspace',
    title: 'SpaceCapture vs OpenSpace',
    excerpt: 'See how computer vision and 360 capture stack up for progress tracking.',
  },
  {
    slug: 'safety-culture',
    title: 'SpaceCapture vs SafetyCulture',
    excerpt: 'Move from static safety checklists to visual AI verification.',
  },
  {
    slug: 'procore',
    title: 'SpaceCapture vs Procore',
    excerpt: 'Compare AI-powered field inspections to Procore\'s project management platform.',
  },
  {
    slug: 'fieldwire',
    title: 'SpaceCapture vs Fieldwire',
    excerpt: 'See how AI defect detection and 360° capture stack up against task management.',
  },
];

export default function CompareLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Hero */}
        <section className="bg-white pt-12 pb-16 border-b border-slate-200">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6">
              <Scale className="w-3 h-3" /> Comparisons
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              SpaceCapture <span className="text-indigo-600">vs Competitors</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Side-by-side comparisons of SpaceCapture and the most popular field operations platforms. Find the right solution for inspections, safety, and project reporting.
            </p>
          </div>
        </section>

        {/* Cards */}
        <div className="container mx-auto max-w-[1200px] px-4 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            {COMPARISONS.map((item) => (
              <Link
                key={item.slug}
                href={`/compare/${item.slug}`}
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
                    See Comparison <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
