import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import CallToAction from '@/components/CallToAction';
import { BrainCircuit, Eye, ShieldCheck, Activity, BarChart3, AlertTriangle, FileCheck, Layers, Cpu, Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI in Construction: Complete Guide',
  description: 'Explore how Artificial Intelligence, Computer Vision, and Machine Learning are transforming construction field operations, safety, and quality control.',
  alternates: {
    canonical: 'https://spacecapture.ai/blog/ai-in-construction',
  },
};

const ARTICLES = [
  {
    slug: 'computer-vision-risk',
    title: 'How Computer Vision Reduces Jobsite Risk',
    excerpt: 'Cameras are no longer just for surveillance. Learn how AI analyzes site footage to predict accidents before they happen.',
    icon: Eye
  },
  {
    slug: 'end-of-manual-punch-lists',
    title: 'The End of Manual Punch Lists: AI Automation',
    excerpt: 'Stop walking the site with a clipboard. See how AI detects defects and auto-generates your punch list in real-time.',
    icon: FileCheck
  },
  {
    slug: 'predictive-maintenance',
    title: 'Predictive Maintenance for Construction Equipment',
    excerpt: 'Don\'t wait for a breakdown. AI analyzes vibration and telemetry data to schedule repairs during downtime.',
    icon: Activity
  },
  {
    slug: 'drone-defect-detection',
    title: 'Automated Defect Detection with Drone Imagery',
    excerpt: 'Scale your inspections. How drones and AI work together to inspect facades, roofs, and large infrastructure.',
    icon: Camera
  },
  {
    slug: 'subcontractor-safety-ai',
    title: 'AI-Powered Safety Compliance for Subcontractors',
    excerpt: 'Ensure every worker on site is compliant. AI checks for PPE and certification automatically.',
    icon: ShieldCheck
  },
  {
    slug: 'real-time-progress-tracking',
    title: 'Real-Time Progress Tracking vs. Daily Logs',
    excerpt: 'Why manual daily logs are obsolete. AI measures installed quantities and validates schedule progress.',
    icon: BarChart3
  },
  {
    slug: 'bim-reality-comparison',
    title: 'Reducing Rework with BIM-to-Reality AI Comparison',
    excerpt: 'Overlay the model on the real world. Catch deviations early by comparing as-built to as-designed.',
    icon: Layers
  },
  {
    slug: 'ai-insurance-claims',
    title: 'The Role of AI in Construction Insurance Claims',
    excerpt: 'Settle claims faster with irrefutable visual evidence and automated incident reconstruction.',
    icon: AlertTriangle
  },
  {
    slug: 'optimizing-material-usage',
    title: 'Optimizing Material Usage with Field Intelligence',
    excerpt: 'Track waste and usage patterns. How AI helps you buy exactly what you need and use what you buy.',
    icon: Cpu
  },
  {
    slug: 'remote-inspections-360',
    title: 'Enhancing Remote Inspections with 360 AI Capture',
    excerpt: 'Walk the site from your office. 360-degree capture + AI brings the jobsite to stakeholders.',
    icon: BrainCircuit
  }
];

export default function AiInConstructionHub() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        <section className="bg-slate-900 text-white pt-32 pb-20">
            <div className="container mx-auto px-4 text-center">
                 <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-indigo-900/50 border border-indigo-700 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6">
                    <BrainCircuit className="w-4 h-4" /> Operational Intelligence
                 </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">AI in Construction</h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    The definitive resource for construction leaders looking to modernize field operations with practical, results-driven AI.
                </p>
            </div>
        </section>

        <div className="container mx-auto max-w-[1200px] px-4 -mt-8 relative z-10 mb-20">
             <Breadcrumbs 
                items={[
                    { label: 'Blog', href: '/blog' },
                    { label: 'AI in Construction', href: '/blog/ai-in-construction' }
                ]} 
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {ARTICLES.map((article) => (
                    <Link key={article.slug} href={`/blog/${article.slug}`} className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col">
                        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <article.icon className="w-6 h-6" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                            {article.title}
                        </h2>
                        <p className="text-slate-600 mb-6 flex-grow">
                            {article.excerpt}
                        </p>
                        <div className="text-indigo-600 font-semibold text-sm flex items-center gap-2">
                            Read Article <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

        <CallToAction />
      </main>
    </div>
  );
}
