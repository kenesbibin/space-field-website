"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plus, X } from 'lucide-react';
import { VERITASGRAPH_FAQS } from '@/lib/veritasgraph-faqs';

const FAQS = VERITASGRAPH_FAQS;

export default function VeritasGraphSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="relative py-16 lg:py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto max-w-[900px] px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Powered by VeritasGraph
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            AI answers on SpaceCapture are grounded by VeritasGraph — open-source GraphRAG with
            source attribution — so every response links back to its capture.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {FAQS.map((faq, i) => {
            const isOpen = activeIndex === i;
            return (
              <div
                key={faq.q}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-blue-300 bg-blue-50/60 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span
                    className={`text-sm md:text-base font-semibold ${
                      isOpen ? 'text-blue-600' : 'text-slate-900'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                      isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                {/* Always rendered in the DOM so the answer is server-side crawlable */}
                <div className={isOpen ? 'block' : 'hidden'}>
                  <p className="px-5 pb-5 pr-14 text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Learn more */}
        <div className="mt-10 text-center">
          <a
            href="/how-it-works"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
          >
            How SpaceCapture verifies AI answers
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
