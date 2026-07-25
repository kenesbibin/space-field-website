import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import CallToAction from '@/components/CallToAction';
import { BLOG_ARTICLES } from '@/lib/blog-data';
import { ArrowRight, BookOpen, Calendar, User, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Field Operations Blog | SpaceCapture',
  description: 'Insights, guides, and industry news on construction AI, field inspections, and digital transformation.',
  alternates: {
    canonical: 'https://spacecapture.ai/blog',
  },
};

const ARTICLES = BLOG_ARTICLES;

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Simple Text Hero */}
        <section className="bg-white pt-12 pb-16 border-b border-slate-200">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
              <BookOpen className="w-3 h-3" /> Field Software Engineering
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Field Module Software <br /> <span className="text-blue-600">& AI Features</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Explore SpaceCapture's suite of AI Field Modules. Guides on Defect Detection, Maintenance, and Mobile Inspection Software.
            </p>
          </div>
        </section>

        <div className="container mx-auto max-w-[1200px] px-4 py-12">


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {ARTICLES.map((article, idx) => (
              <BlogCard key={article.slug} article={article} index={idx} />
            ))}
          </div>
        </div>

        <CallToAction />
      </main>
    </div>
  );
}

function BlogCard({ article, index }: { article: any, index: number }) {
  // Add prefix /blog/ unless it's the main AI hub which might be linked differently, 
  // but assuming structure is /blog/[slug] based on file listing.
  // The main hub is /blog/ai-in-construction so that works.
  const href = `/blog/${article.slug}`;

  return (
    <Link href={href} className="group flex flex-col bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
      <div className="p-8 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] uppercase tracking-wider font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {article.category}
          </span>
          <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
            <Calendar className="w-3 h-3" /> {article.date}
          </span>
        </div>

        <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
          {article.title}
        </h2>

        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {article.excerpt}
        </p>

        <div className="mt-auto border-t border-slate-100 pt-4 flex items-center text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
          Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
