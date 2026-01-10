"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, MessageCircle, ArrowRight } from 'lucide-react';
import { faqData, FaqCategory } from './faq-data';
import Link from 'next/link';

interface FaqSectionProps {
  isFullPage?: boolean;
}

const FaqSection = ({ isFullPage = false }: FaqSectionProps) => {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<FaqCategory | 'All'>('All');

  // Categories for Tabs
  const categories: (FaqCategory | 'All')[] = ['All', 'General', 'AI Intelligence', 'Field Tasks', 'Technical', 'Security & Compliance'];

  // Filter Data
  const filteredData = useMemo(() => {
    let data = faqData;

    if (!isFullPage) {
      // On Home page, just show top 8 mixed items, mostly General and AI
      return data.slice(0, 8);
    }

    if (activeCategory !== 'All') {
      data = data.filter(item => item.category === activeCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      data = data.filter(item => 
        item.question.toLowerCase().includes(q) || 
        item.answer.toLowerCase().includes(q)
      );
    }

    return data;
  }, [isFullPage, activeCategory, searchQuery]);

  return (
    <section className={`relative ${isFullPage ? 'pt-32 pb-20' : 'py-20'} bg-slate-50`}>
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* HEADER */}
        <div className="text-center mb-12 space-y-4">
          {!isFullPage && (
             <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase">
               Support Center
             </span>
          )}
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            {isFullPage ? 'Help & Frequently Asked Questions' : 'Everything You Need to Know'}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {isFullPage 
              ? 'Find answers about our AI technology, field workflows, data security, and implementation process.' 
              : 'Quick answers to common questions about Space Capture\'s AI reliability and field capabilities.'}
          </p>
        </div>

        {/* CONTROLS (Full Page Only) */}
        {isFullPage && (
          <div className="mb-12 space-y-6">
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <input 
                type="text" 
                placeholder="Search for answers (e.g., 'offline', 'accuracy')..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ACCORDION GRID */}
        <div className={`grid ${isFullPage ? 'gap-4' : 'lg:grid-cols-2 gap-6'}`}>
           {filteredData.map((item, idx) => (
             <div 
                key={item.question}
                className={`bg-white rounded-2xl border border-slate-100 overflow-hidden transition-shadow ${
                    activeQuestion === item.question ? 'shadow-lg ring-1 ring-blue-100' : 'shadow-sm hover:shadow-md'
                }`}
             >
                <button 
                  onClick={() => setActiveQuestion(activeQuestion === item.question ? null : item.question)}
                  className="w-full text-left p-6 flex justify-between items-start gap-4"
                >
                  <span className={`font-bold text-lg ${activeQuestion === item.question ? 'text-blue-700' : 'text-slate-900'}`}>
                    {item.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${activeQuestion === item.question ? 'rotate-180 text-blue-500' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeQuestion === item.question && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
           ))}
        </div>

        {/* EMPTY STATE */}
        {filteredData.length === 0 && (
          <div className="text-center py-20">
            <MessageCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900">No results found</h3>
            <p className="text-slate-500">Try searching for something else or browse categories.</p>
          </div>
        )}

        {/* HOME PAGE FOOTER LINK */}
        {!isFullPage && (
           <div className="mt-12 text-center">
             <Link href="/faq" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline text-lg">
                View all 40+ Questions <ArrowRight className="w-5 h-5" />
             </Link>
           </div>
        )}

      </div>

      {/* JSON-LD SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": filteredData.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
    </section>
  );
};

export default FaqSection;
