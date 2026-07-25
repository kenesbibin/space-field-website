import React from 'react';
import Link from 'next/link';
import { ArrowRight, Home, Search } from 'lucide-react';

const popularPages = [
  { label: 'Request a Demo', href: '/request-a-demo' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Field Inspection Software', href: '/field-inspection-software' },
  { label: 'AI Defect Detection', href: '/ai-defect-detection' },
  { label: 'Construction Software', href: '/construction-software' },
  { label: 'Blog', href: '/blog' },
  { label: 'Glossary', href: '/glossary' },
  { label: 'Compare Alternatives', href: '/compare' },
];

const industries = [
  { label: 'Construction', href: '/industries/construction' },
  { label: 'Facility Management', href: '/industries/facility-management' },
  { label: 'HVAC', href: '/industries/hvac' },
  { label: 'Insurance', href: '/industries/insurance' },
  { label: 'Manufacturing', href: '/industries/manufacturing' },
  { label: 'Oil & Gas', href: '/industries/oil-and-gas' },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <span className="text-8xl font-extrabold text-slate-200">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-slate-600 mb-12">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition"
          >
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <Link
            href="/request-a-demo"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-300 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition"
          >
            Request a Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="text-left">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
            Popular Pages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {popularPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-600 transition text-center"
              >
                {page.label}
              </Link>
            ))}
          </div>

          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
            Industries
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-600 transition text-center"
              >
                {industry.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
