import React from 'react';
import { Star, ArrowRight, Building2, TrendingUp, Clock, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers - SpaceCapture',
  description: 'See how leading construction teams use SpaceCapture to deliver projects faster, reduce rework costs, and improve site safety.',
  alternates: {
    canonical: 'https://spacecapture.ai/customers',
  },
};

export default function CustomersPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      
      {/* HERO SECTION */}
      <section className="bg-slate-900 text-white pt-32 pb-24 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-purple-600/10 blur-[100px]"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
           <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Powering the World&apos;s <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                 Most Complex Projects.
              </span>
           </h1>
           <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
              From 100-story skyscrapers to sprawling data centers, SpaceCapture provides the ground truth for over $50B in active construction.
           </p>
           
           {/* LOGO CLOUD (Mock) */}
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <MockLogo name="MegaBuild Corp" />
              <MockLogo name="SkyHigh Developers" />
              <MockLogo name="Urban Infrastructure" />
              <MockLogo name="Global Energy" />
              <MockLogo name="TechSpace Construct" />
           </div>
        </div>
      </section>

      {/* CASE STUDY GRID */}
      <section className="container mx-auto px-6 py-20">
         <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Real Results. Documented ROI.</h2>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            <CaseStudyCard 
                category="Commercial High-Rise"
               title="Accelerating the Skyline Tower by 4 Weeks"
               stat="30% Faster"
               statLabel="Inspection Cycles"
               challenge="1,200 luxury units needed individual punch lists. Manual entry was causing a 2-week lag between inspection and trade mobilization."
               solution="MegaBuild deployed SpaceCapture's AI to auto-generate deficiency reports from 360-degree video walks."
               result="Punch lists were distributed within minutes of the walk, accelerating trade fix-time by 60%."
               color="blue"
            />
            <CaseStudyCard 
               category="Infrastructure"
               title="Mapping the City Metro Expansion"
               stat="$2.5M Saved"
               statLabel="in Rework Costs"
               challenge="Tunnel alignment deviations were being missed by manual surveying, leading to costly concrete rework."
               solution="Daily drone and laser scanning with SpaceCapture's BIM Comparison engine caught deviations as small as 2mm."
               result="Identified 3 major misalignments early, saving $2.5M in retrofitting and ensuring on-time delivery."
               color="purple"
            />
            <CaseStudyCard 
               category="Industrial"
               title="Secure Updates for Hyperscale Data Centers"
               stat="100% Secure"
               statLabel="Data Compliance"
               challenge="Documentation was critical, but photography was banned due to security risks regarding server configurations."
               solution="TechSpace used our Privacy Scrubbing AI to automatically blur sensitive server racks while capturing cable tray progress."
               result="Achieved full stakeholder visibility without a single security violation, winning the client's trust for Phase 2."
               color="emerald"
            />
         </div>
      </section>

      {/* TESTIMONIAL BLOCK */}
      <section className="bg-white border-y border-slate-100 py-24">
         <div className="container mx-auto px-6 max-w-4xl relative">
            <div className="absolute top-0 left-0 -mt-10 text-9xl text-slate-100 font-serif opacity-50">“</div>
            
            <div className="text-center relative z-10">
                <div className="flex justify-center gap-1 mb-8">
                   {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />)}
                </div>
                <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 leading-normal mb-8">
                   "Before SpaceCapture, we were drowning in thousands of unorganized site photos. Now, every pixel has a coordinate, and every issue has an owner. It&apos;s not just software; it&apos;s our daily source of truth."
                </blockquote>
                <cite className="not-italic">
                   <div className="font-bold text-slate-900 text-lg">Sarah Jenkins</div>
                   <div className="text-slate-500">VP of Operations, MegaBuild Corp</div>
                </cite>
            </div>
         </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="container mx-auto px-6 py-24 text-center">
         <div className="bg-blue-600 rounded-3xl p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to write your success story?</h2>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10 relative z-10">
               Join 500+ innovative construction teams delivering projects faster and safer.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
               <Link href="/request-a-demo" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                  Request a Demo
               </Link>
               <Link href="/lab" className="px-8 py-4 bg-blue-700/50 border border-white/30 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors backdrop-blur-sm">
                  Explore the Tech
               </Link>
            </div>
         </div>
      </section>

    </main>
  );
}

// --- SUB-COMPONENTS ---

const MockLogo = ({ name }: { name: string }) => (
   <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
      <div className="w-8 h-8 bg-slate-700 rounded-md"></div>
      {name}
   </div>
);

const CaseStudyCard = ({ category, title, stat, statLabel, challenge, solution, result, color }: any) => {
   const colorClasses: Record<string, string> = {
      blue: "bg-blue-50 text-blue-600",
      purple: "bg-purple-50 text-purple-600",
      emerald: "bg-emerald-50 text-emerald-600"
   };

   return (
      <div 
         className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
      >
         <div className={`self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6 ${colorClasses[color]}`}>
            {category}
         </div>
         
         <div className="mb-6">
            <div className={`text-4xl font-black mb-1 ${colorClasses[color].replace('bg-', 'text-').split(' ')[1]}`}>
               {stat}
            </div>
            <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">{statLabel}</div>
         </div>

         <h3 className="text-2xl font-bold text-slate-900 mb-6">{title}</h3>
         
         <div className="space-y-4 mb-8 flex-grow">
             <div>
                 <strong className="text-slate-900 text-sm uppercase tracking-wide block mb-1">Challenge</strong>
                 <p className="text-slate-600 text-sm leading-relaxed">{challenge}</p>
             </div>
             <div>
                 <strong className="text-blue-600 text-sm uppercase tracking-wide block mb-1">Solution</strong>
                 <p className="text-slate-600 text-sm leading-relaxed">{solution}</p>
             </div>
             <div>
                 <strong className="text-emerald-600 text-sm uppercase tracking-wide block mb-1">Result</strong>
                 <p className="text-slate-600 text-sm leading-relaxed">{result}</p>
             </div>
         </div>

          <button className="flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 transition-colors group mt-auto">
             Read Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
      </div>
   );
}
