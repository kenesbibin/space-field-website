"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, X, Sparkles, ChevronsRight } from 'lucide-react';

interface AlternativesTemplateProps {
  competitor: string;
  tagline: string;
  intro: string;
  heroBadge: string;
  pains: { title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  comparisons: {
    feature: string;
    competitor: string;
    spacecapture: string;
  }[];
  faqs: { q: string; a: string }[];
  related?: { label: string; href: string }[];
}

export const AlternativesTemplate: React.FC<AlternativesTemplateProps> = ({
  competitor,
  tagline,
  intro,
  heroBadge,
  pains,
  benefits,
  comparisons,
  faqs,
  related,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const check = () => {
      const hasOverflow = el.scrollWidth > el.clientWidth + 1;
      const nearEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
      setShowHint(hasOverflow && !nearEnd);
    };

    check();
    el.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);

    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [comparisons]);

  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04]"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-indigo-900/50 border border-indigo-700 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-3 h-3" /> {heroBadge}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight max-w-5xl mx-auto break-words">
              The Best {competitor} Alternative for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                AI-Powered Field Inspections
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              {tagline}
            </p>
            <p className="text-base text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              {intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-a-demo"
                className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-all inline-flex items-center justify-center gap-2"
              >
                Try SpaceCapture Free <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 bg-transparent border border-slate-600 text-white rounded-full font-bold hover:bg-slate-800 transition-all inline-flex items-center justify-center"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 text-center">
              Why Teams Switch from {competitor}
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Common pain points we hear from teams moving to SpaceCapture.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {pains.map((p: { title: string; desc: string }, i: number) => (
                <div
                  key={i}
                  className="bg-red-50 p-6 rounded-2xl border border-red-100"
                >
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">
                        {p.title}
                      </h3>
                      <p className="text-sm text-slate-600">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                What You Get with SpaceCapture
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((b: { title: string; desc: string }, i: number) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">
                        {b.title}
                      </h3>
                      <p className="text-sm text-slate-600">{b.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 text-center break-words">
              {competitor} vs SpaceCapture
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Side-by-side comparison on the features that matter most to
              field teams.
            </p>
            <div className="relative">
              <div ref={scrollRef} className="overflow-x-auto">
                <table className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-left p-4 font-semibold">{competitor}</th>
                    <th className="text-left p-4 font-semibold bg-indigo-600">
                      SpaceCapture
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((c, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}
                    >
                      <td className="p-4 font-medium text-slate-900">
                        {c.feature}
                      </td>
                      <td className="p-4 text-slate-600">{c.competitor}</td>
                      <td className="p-4 text-slate-900 font-semibold bg-indigo-50/50">
                        {c.spacecapture}
                      </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {showHint && (
            <>
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white/90 to-transparent"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-2 flex items-center"
                aria-hidden="true"
              >
                <ChevronsRight className="w-5 h-5 text-slate-400 animate-pulse" />
              </div>
            </>
          )}
        </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center break-words">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details
                  key={i}
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-900 hover:text-indigo-600 list-none gap-3">
                    <span className="break-words">{f.q}</span>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {related && related.length > 0 && (
          <section className="py-20 bg-white">
            <div className="container mx-auto max-w-5xl px-4 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Related Comparisons
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {related.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-700 hover:border-indigo-300 hover:text-indigo-600 transition text-sm font-medium"
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
