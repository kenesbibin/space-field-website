import React from 'react';
import type { Metadata } from 'next';
import { HelpCircle, ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';
import CallToAction from '@/components/CallToAction';
import { faqData, FaqCategory } from '@/components/faq-data';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | SpaceCapture',
  description: 'Find answers to common questions about SpaceCapture, from pricing and support to technical integrations and security.',
};

// Group FAQs by category
const groupedFaqs = faqData.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = [];
  }
  acc[item.category].push(item);
  return acc;
}, {} as Record<FaqCategory, typeof faqData>);

const CATEGORY_ORDER: FaqCategory[] = [
  'General',
  'Field Tasks',
  'AI Intelligence',
  'Technical',
  'Security & Compliance'
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Header */}
        <section className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
             <div className="container mx-auto max-w-[900px] px-4 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 bg-slate-800 px-4 py-1.5 rounded-full text-blue-400 font-bold uppercase tracking-wider text-xs mb-6 border border-slate-700">
                    <HelpCircle className="w-4 h-4" /> Help Center
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                    Frequently Asked <span className="text-blue-500">Questions</span>
                </h1>
                <div className="max-w-xl mx-auto relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                    <input 
                        type="text" 
                        placeholder="Search for answers..." 
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all shadow-lg"
                    />
                </div>
             </div>
        </section>

        {/* Categories */}
        <section className="py-20">
            <div className="container mx-auto max-w-[1000px] px-4">
                <div className="grid gap-12">
                    {CATEGORY_ORDER.map((category, idx) => {
                        const questions = groupedFaqs[category];
                        if (!questions) return null;

                        return (
                            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    {category}
                                </h2>
                                <div className="grid gap-6">
                                    {questions.map((item, qIdx) => (
                                        <details key={qIdx} className="group border border-slate-100 rounded-xl overflow-hidden open:border-blue-100 open:bg-blue-50/50 transition-all">
                                            <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-slate-800 hover:text-blue-600 transition-colors list-none outline-none">
                                                <span className="flex items-start gap-3">
                                                    <span className="text-blue-500 font-bold mt-0.5">Q.</span>
                                                    {item.question}
                                                </span>
                                                <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
                                            </summary>
                                            <div className="px-5 pb-5 pt-0 text-slate-600 pl-12 leading-relaxed">
                                                {item.answer}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-slate-500 mb-4">Can't find the answer you're looking for?</p>
                    <Link href="/request-a-demo" className="text-blue-600 font-bold hover:underline">
                        Contact our support team &rarr;
                    </Link>
                </div>
            </div>
        </section>

        <CallToAction />
        
        {/* Schema for Voice Search */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqData.map(q => ({
                        "@type": "Question",
                        "name": q.question,
                        "acceptedAnswer": { "@type": "Answer", "text": q.answer }
                    }))
                })
            }}
        />
      </main>
    </div>
  );
}
