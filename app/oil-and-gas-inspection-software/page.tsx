import React from 'react';
import type { Metadata } from 'next';
import CallToAction from '@/components/CallToAction';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { Flame, ShieldCheck, WifiOff, FileBarChart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import StructuredData from '@/components/seo/StructuredData';
import { getServiceSchema } from '@/components/seo/ServiceSchema';
import {
  buildBreadcrumbsFromPath,
  getBreadcrumbListSchema,
} from '@/components/seo/BreadcrumbListSchema';

export const metadata: Metadata = {
  title: 'Oil and Gas Inspection Software | Hazardous Digital Forms',
  description: 'Specialized Oil and Gas Inspection Software for offshore and refinery operations. intrinsically safe compliant workflows, offline mobile app, and corrosion monitoring.',
  keywords: ['Oil and Gas Inspection Software', 'Pipeline Inspection App', 'Refinery Maintenance Software', 'Explosion Proof Digital Forms'],
  alternates: {
    canonical: 'https://spacecapture.ai/oil-and-gas-inspection-software',
  },
};

const serviceSchema = getServiceSchema({
  name: 'Oil and Gas Inspection Software',
  description:
    'Specialized oil and gas inspection software for offshore and refinery operations. Intrinsically safe compliant workflows, offline mobile app, and corrosion monitoring.',
  url: 'https://spacecapture.ai/oil-and-gas-inspection-software',
  serviceType: 'Oil and Gas Inspection Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/oil-and-gas-inspection-software')
);

export default function OilAndGasSoftwarePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main>
        {/* Header */}
        <section className="bg-slate-950 pt-32 pb-20 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
             {/* Amber/Orange theme for Oil & Gas */}
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-900/20 rounded-full blur-[120px]"></div>
             
             <div className="container mx-auto max-w-[1000px] px-4 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 rounded-full text-orange-400 font-bold uppercase tracking-wider text-xs mb-6">
                    <Flame className="w-4 h-4" /> Heavy Industry Edition
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 leading-tight">
                    Oil & Gas <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Inspection Software</span>
                </h1>
                <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                    Digitize ISO 14224 asset integrity inspections with a mobile app built for Zone 1 hazardous environments.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/request-a-demo" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg shadow-orange-900/20">
                        Request HSE Demo <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
             </div>
        </section>

        {/* Core Value Props */}
        <section className="py-20 bg-slate-900 border-y border-slate-800">
             <div className="container mx-auto max-w-[1100px] px-4">
                 <div className="grid md:grid-cols-3 gap-8">
                     <FeatureCard 
                        icon={ShieldCheck} 
                        title="HSE Compliance" 
                        desc="Automate Permit-to-Work (PTW) digital forms and Job Safety Analyis (JSA) before any shift begins."
                     />
                     <FeatureCard 
                        icon={WifiOff} 
                        title="Offshore Ready" 
                        desc="100% offline functionality. Inspect pipelines and remote platforms and sync when back at the base."
                     />
                     <FeatureCard 
                        icon={FileBarChart} 
                        title="Corrosion Tracking" 
                        desc="Track corrosion rates over time with longitudinal data attached to specific asset tags or GPS coordinates."
                     />
                 </div>
             </div>
        </section>

        {/* Content */}
        <div className="container mx-auto max-w-[900px] px-4 py-20">
             <article className="prose prose-lg prose-invert max-w-none mb-16">
                <h2>Why specialized **Software** matters in O&G</h2>
                <p>
                    Generic construction tools fail in the Oil & Gas sector. You need **Oil and Gas Inspection Software** that understands the difference between a "punch list" and a "critical safety barrier failure."
                </p>
                
                <h3>Built for the Field Operator</h3>
                <p>
                    Our interface is designed to be used with gloved hands. Large buttons, voice-to-text input, and single-tap issue logging ensure that your inspectors spend less time fiddling with screens and more time assessing asset integrity.
                </p>

                <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 my-8">
                    <h4 className="text-orange-400 font-bold mb-4 mt-0">Supported Standards</h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-300 m-0 pl-0 list-none">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> API 570 Piping Inspection</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> ISO 14224 Asset Data</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> NORSOK Standards</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> API 653 Tank Inspection</li>
                    </ul>
                </div>
             </article>

             <div className="mt-16 pt-12 border-t border-slate-800">
                <div className="bg-slate-50 rounded-2xl p-2 text-slate-900">
                    <AuthorBio />
                </div>
             </div>
        </div>

        <CallToAction />
      </main>

      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@graph': [serviceSchema, breadcrumbSchema],
        }}
      />
    </div>
  );
}

const FeatureCard = ({ icon: Icon, title, desc }: any) => (
    <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-colors group">
        <div className="w-12 h-12 bg-orange-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
            <Icon className="w-6 h-6 text-orange-500" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
    </div>
);
