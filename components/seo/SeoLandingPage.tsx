"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { SeoCallToAction } from '@/components/seo/SeoCallToAction';

interface SeoLandingPageProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
    tryForFreeHref?: string;
}

const DEFAULT_TRY_FREE_URL =
    "https://app.pmspace.ai/login?type=SpaceCapture&moduleId=7a36674e-f8d6-4962-a0dc-105b50b4849c&invite=guest/login";

export const SeoLandingPage = ({
    title,
    subtitle,
    children,
    tryForFreeHref = DEFAULT_TRY_FREE_URL,
}: SeoLandingPageProps) => {
    return (
        <div className="min-h-screen bg-slate-50">
            <main>
                {/* SEO Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900">
                    {/* Background Effects */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        {/* Trust Signal */}
                        <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-indigo-900/50 border border-indigo-700 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-8">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <span className="mx-1">|</span>
                            <CheckCircle2 className="w-4 h-4" /> 4.8 stars from 120+ teams
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight max-w-5xl mx-auto">
                            {title}
                        </h1>

                        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
                            {subtitle}
                        </p>

                        {/* Main Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            {/* Try for Free */}
                            <a
                                href={tryForFreeHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-indigo-600 px-8 text-base font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-500 hover:scale-105"
                            >
                                Try for Free
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>

                            {/* Book a Demo */}
                            <Link
                                href="/request-a-demo"
                                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-white text-slate-900 px-8 text-base font-bold shadow transition-all hover:bg-slate-100 hover:scale-105"
                            >
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SEO Content Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
                            {children}
                        </div>
                    </div>
                </section>

                <SeoCallToAction tryForFreeHref={tryForFreeHref} />
            </main>
        </div>
    );
};
