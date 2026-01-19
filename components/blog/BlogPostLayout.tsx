import React from 'react';

import CallToAction from '@/components/CallToAction';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import Link from 'next/link';

interface BlogPostLayoutProps {
  title: string;
  subtitle?: string;
  publishDate?: string;
  readTime?: string;
  author?: string;
  category?: string;
  children: React.ReactNode;
}

export const BlogPostLayout = ({
  title,
  subtitle,
  publishDate = 'Jan 24, 2026', // Future date for "fresh" content
  readTime = '5 min read',
  author = 'SpaceCapture Editorial',
  category = 'AI in Construction',
  children
}: BlogPostLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Post Header */}
        <section className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
             <div className="container mx-auto max-w-[900px] px-4 relative z-10">
                <div className="flex items-center gap-4 text-sm text-indigo-300 font-semibold uppercase tracking-wider mb-6">
                    <span>{category}</span>
                    <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                    <span>{readTime}</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl font-light leading-relaxed">
                        {subtitle}
                    </p>
                )}
                
                <div className="flex items-center gap-6 text-sm text-slate-400 border-t border-slate-800 pt-8">
                    <div className="flex items-center gap-2">
                        <User className="w-4 h-4" /> {author}
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {publishDate}
                    </div>
                </div>
             </div>
        </section>

        {/* Post Content */}
        <div className="container mx-auto max-w-[900px] px-4 -mt-8 relative z-20">
             <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20 border border-slate-100">
                
                {/* Back Link */}
                <div className="mb-8">
                     <Link href="/blog" className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:underline text-sm">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                     </Link>
                </div>

                <article className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:leading-relaxed prose-a:text-indigo-600 hover:prose-a:text-indigo-700">
                    {children}
                </article>

                {/* Article Footer CTA - Contextual */}
                <div className="mt-16 bg-slate-50 rounded-xl p-8 border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to see this in action?</h3>
                    <p className="text-slate-600 mb-6">
                        SpaceCapture's AI engine is already helping construction teams automate what you just read about.
                    </p>
                    <a href="/request-a-demo" className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-600 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-700 disabled:pointer-events-none disabled:opacity-50">
                        Get a Free Demo
                    </a>
                </div>

             </div>
        </div>
      </main>
    </div>
  );
};
