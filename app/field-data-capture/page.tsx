import React from 'react';
import type { Metadata } from 'next';
import CallToAction from '@/components/CallToAction';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { TabletSmartphone, WifiOff, RefreshCw, PenTool, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Field Data Capture Software & Mobile App | SpaceCapture',
  description: 'The ultimate Field Management App for construction. Capture photos, daily logs, and inspection forms offline on iOS and Android.',
  keywords: ['Field Data Capture Software', 'Field Management App', 'Construction Field Software', 'Mobile Construction App'],
  alternates: {
    canonical: 'https://spacecapture.ai/field-data-capture',
  },
};

export default function FieldDataCapturePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Header */}
        <section className="bg-slate-50 pt-32 pb-20 relative overflow-hidden border-b border-slate-200">
             <div className="container mx-auto max-w-[1100px] px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-blue-600 font-bold uppercase tracking-wider text-xs mb-6 border border-blue-100 shadow-sm">
                        <TabletSmartphone className="w-4 h-4" /> Best-in-Class Mobile App
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Built for the <span className="text-blue-600">Field</span>, <br/>
                        Trusted by the <span className="text-slate-600">Office</span>.
                    </h1>
                    <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                        The easiest **Field Data Capture Software** your crews will ever use. Zero training required.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link href="/app-download" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center gap-2">
                             Download App <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/request-a-demo" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center justify-center">
                            Request Demo
                        </Link>
                    </div>
                </div>
                {/* Visual Placeholder for App Mockup */}
                <div className="flex-1 w-full max-w-md mx-auto">
                    <div className="relative aspect-[9/16] bg-slate-900 rounded-[2.5rem] shadow-2xl border-8 border-slate-200 overflow-hidden flex items-center justify-center group">
                         <div className="absolute inset-x-8 top-8 bottom-8 bg-slate-800 rounded-2xl flex flex-col p-6">
                            <div className="h-8 w-3/4 bg-slate-700 rounded-lg mb-6"></div>
                            <div className="space-y-4">
                                <div className="h-24 w-full bg-slate-700/50 rounded-xl border border-dashed border-slate-600 flex items-center justify-center text-slate-500 text-sm">
                                    Tap to Add Photo
                                </div>
                                <div className="h-12 w-full bg-slate-700/50 rounded-lg"></div>
                                <div className="h-12 w-full bg-slate-700/50 rounded-lg"></div>
                                <div className="h-32 w-full bg-slate-700/50 rounded-lg translate-y-4"></div>
                            </div>
                         </div>
                    </div>
                </div>
             </div>
        </section>

        {/* Content */}
        <div className="container mx-auto max-w-[900px] px-4 py-20">
             
             <div className="prose prose-lg prose-slate max-w-none mb-16">
                 <h2 className="text-center">Why simple **Field Data Capture** wins.</h2>
                 <p className="text-center lead">
                     Complex apps get ignored. SpaceCapture is designed with big buttons, high contrast, and simple workflows so your superintendents spend less time typing and more time building.
                 </p>
             </div>

             <div className="grid md:grid-cols-2 gap-8 mb-20">
                <FeatureCard 
                    icon={WifiOff} 
                    title="100% Offline Capable" 
                    desc="Captures data in dead zones, basements, and remote sites. Sync happens automatically when connectivity is restored."
                />
                <FeatureCard 
                    icon={PenTool} 
                    title="Digital Daily Logs" 
                    desc="Pre-fill weather data and copy logs from the previous day. Crews can sign off directly on the glass."
                />
                <FeatureCard 
                    icon={RefreshCw} 
                    title="Real-Time Sync" 
                    desc="Data captured in the field appears in the office dashboard instantly (with internet), enabling same-day decisions."
                />
                <FeatureCard 
                    icon={CheckCircle} 
                    title="Photo-First Workflow" 
                    desc="A picture is worth a thousand words. Our workflow prioritizes visual evidence over long text descriptions."
                />
             </div>

             <article className="prose prose-lg prose-slate max-w-none">
                <h3>From Paper to Pixel</h3>
                <p>
                    Transitioning to **Construction Field Software** shouldn't be painful. Our onboarding team helps you digitize your existing paper forms—safety checklists, RFI templates, and time cards—so the app looks familiar to your team from Day 1.
                </p>
                
                <div className="my-12 p-8 bg-blue-50 rounded-2xl border border-blue-100 flex gap-6 items-start not-prose">
                    <div className="bg-white p-3 rounded-full shadow-sm text-blue-600 font-bold text-xl">
                        "
                    </div>
                    <div>
                        <p className="text-lg font-medium text-slate-900 bg-transparent italic mb-4">
                            Usually, the guys in the field hate new software. With SpaceCapture, they actually thanked us because it saved them an hour of paperwork every day.
                        </p>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                            — Operations Director, Mid-Size GC
                        </p>
                    </div>
                </div>
             </article>

             <div className="mt-16">
                <AuthorBio />
             </div>
        </div>

        <CallToAction />
      </main>
    </div>
  );
}

const FeatureCard = ({ icon: Icon, title, desc }: any) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
            <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
);
