"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plus, X } from 'lucide-react';

const FAQS = [
  {
    q: 'What is VeritasGraph and how does SpaceCapture use it?',
    a: 'VeritasGraph is an open-source GraphRAG knowledge-graph framework for verifiable AI with source attribution. SpaceCapture uses VeritasGraph to ground all search results and AI-generated answers. Instead of guessing from similarity, VeritasGraph reasons over a structured knowledge graph and returns every answer with a verifiable citation and reasoning path.',
  },
  {
    q: 'How does source attribution work in SpaceCapture?',
    a: 'Every AI-generated statement links back to its origin — the exact photo, inspection record, or report it was derived from. VeritasGraph tracks these links through multi-hop traversal of the knowledge graph, so no answer is unattributed.',
  },
  {
    q: 'What is a knowledge graph and why does it matter for inspections?',
    a: 'A knowledge graph stores site data as connected entities — defects, assets, locations, and inspections — instead of isolated files. It turns every capture into structured, citable data, so questions like "which defects are open on this asset?" resolve to precise, sourced answers.',
  },
  {
    q: 'How does SpaceCapture verify AI answers?',
    a: 'Each answer ships with citations back to the original capture and the reasoning path the graph traversed. You can audit any claim by following its links — answers are verifiable, not guessed.',
  },
  {
    q: 'Is VeritasGraph deployed on-premise or in the cloud?',
    a: 'Both. SpaceCapture runs on cloud hosting in the US, EU, and APAC regions, and supports on-premise and air-gapped deployment for defense and critical-infrastructure clients.',
  },
  {
    q: 'What is GraphRAG and how is it different from regular AI search?',
    a: 'Regular AI search retrieves text that resembles your question. GraphRAG reasons over a structured knowledge graph with multi-hop traversal and returns answers with citations and a transparent reasoning path, grounded in your own captured data.',
  },
];

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
