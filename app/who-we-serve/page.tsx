import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Users } from 'lucide-react';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'Industries & Teams We Serve | SpaceCapture Field Software',
  description: 'SpaceCapture is built for general contractors, subcontractors, facility managers, property developers, and architects who need AI-powered field inspections.',
  alternates: {
    canonical: 'https://spacecapture.ai/who-we-serve',
  },
};

const PERSONAS = [
  {
    slug: 'general-contractors',
    title: 'General Contractors',
    excerpt: 'Manage subcontractors, safety, and daily reports from one command center.',
  },
  {
    slug: 'subcontractors',
    title: 'Subcontractors',
    excerpt: 'Prove work quality with visual AI evidence and automated defect logs.',
  },
  {
    slug: 'facility-managers',
    title: 'Facility Managers',
    excerpt: 'Track asset condition, maintenance, and compliance across portfolios.',
  },
  {
    slug: 'property-developers',
    title: 'Property Developers',
    excerpt: 'Monitor progress and quality across multiple projects in real time.',
  },
  {
    slug: 'architects-engineers',
    title: 'Architects & Engineers',
    excerpt: 'Verify as-built conditions against design intent with visual documentation.',
  },
];

export default function WhoWeServeLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Hero */}
        <section className="bg-white pt-12 pb-16 border-b border-slate-200">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6">
              <Users className="w-3 h-3" /> Who We Serve
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Built for Every <span className="text-indigo-600">Field Team</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              SpaceCapture adapts to the way construction, facilities, and property teams work. Discover how AI field inspection software helps your role.
            </p>
          </div>
        </section>

        {/* Cards */}
        <div className="container mx-auto max-w-[1200px] px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERSONAS.map((item) => (
              <Link
                key={item.slug}
                href={`/who-we-serve/${item.slug}`}
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
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
