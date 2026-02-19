"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Mail, MessageSquare } from 'lucide-react';
import { SeoCallToAction } from '@/components/seo/SeoCallToAction';

interface SeoLandingPageProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

export const SeoLandingPage = ({
    title,
    subtitle,
    children,
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
                        <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-indigo-900/50 border border-indigo-700 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-8">
                            <CheckCircle2 className="w-4 h-4" /> Enterprise Grade Solution
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
                                href="https://www.amspace.ai/login?type=Field&moduleId=8b3b6af5-07a3-44b2-b69e-342b61d71718&invite=guest"
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

                            {/* Contact CTO */}
                            <a
                                href="mailto:contact@spacecapture.ai?subject=Technical%20Inquiry%20from%20Website"
                                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 px-8 text-base font-semibold backdrop-blur-sm transition-all hover:bg-slate-800 hover:text-white"
                            >
                                <Mail className="mr-2 w-5 h-5" />
                                Contact CTO
                            </a>
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

                <SeoCallToAction />
            </main>
        </div>
    );
};
