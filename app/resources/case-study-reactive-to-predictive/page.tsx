import React from 'react';
import { ArrowRight, TrendingUp, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* HERO SECTION: Narrative Focus */}
      <section className="relative overflow-hidden bg-slate-900 px-6 py-24 text-white sm:py-32 lg:px-8">
        <div className="absolute inset-0 z-0 opacity-20">
             {/* Abstract tech background */}
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 L100 0 L100 100 Z" fill="#3b82f6" />
            </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl text-center">
            <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20 mb-6">
                CASE STUDY: OFFSHORE ENERGY
            </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Silent Warning</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            How a crucial mechanical failure was nearly missed due to paper delays—and how <strong>Offline AI</strong> caught it instantly.
          </p>
           <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/demo"
              className="rounded-md bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all border border-blue-500"
            >
              See the Tech in Action <ArrowRight className="inline-block ml-2 h-5 w-5"/>
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* SIDEBAR: Client Profile */}
        <aside className="lg:col-span-4 space-y-8 order-2 lg:order-1">
             <div className="bg-white rounded-2xl p-8 shadow-xl ring-1 ring-slate-900/5 border-l-4 border-blue-600">
                <h3 className="text-sm font-semibold leading-7 text-blue-600 uppercase tracking-widest mb-4">Client Profile</h3>
                <dl className="divide-y divide-slate-100">
                    <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-slate-900">Industry</dt>
                        <dd className="mt-1 text-sm leading-6 text-slate-700 sm:col-span-2 sm:mt-0">Offshore Energy</dd>
                    </div>
                    <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-slate-900">Challenge</dt>
                        <dd className="mt-1 text-sm leading-6 text-slate-700 sm:col-span-2 sm:mt-0">Delayed Reporting from Remote Sites</dd>
                    </div>
                     <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-slate-900">Goal</dt>
                        <dd className="mt-1 text-sm leading-6 text-slate-700 sm:col-span-2 sm:mt-0">Real-time Visibility</dd>
                    </div>
                </dl>
             </div>

             <div className="bg-slate-900 rounded-2xl p-8 shadow-xl text-white">
                 <h3 className="text-lg font-bold mb-6">The "Before" State</h3>
                 <ul className="space-y-4">
                     <li className="flex items-start">
                         <AlertTriangle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                         <span className="text-slate-300 text-sm">Critical findings trapped on paper in vans.</span>
                     </li>
                      <li className="flex items-start">
                         <AlertTriangle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                         <span className="text-slate-300 text-sm">Vague descriptions ("loud noise") with no data.</span>
                     </li>
                      <li className="flex items-start">
                         <AlertTriangle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                         <span className="text-slate-300 text-sm">Zero visibility for HQ until days later.</span>
                     </li>
                 </ul>
             </div>
        </aside>

        {/* MAIN CONTENT: The Story & Timeline */}
        <div className="lg:col-span-8 order-1 lg:order-2">
            
            {/* The Plot Hook */}
            <div className="prose prose-lg prose-slate max-w-none mb-16">
                 <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">The "Phantom" Vibration</h2>
                 <p>
                    During a routine walk-around, a technician noted a "strange vibration" on a critical asset. He wrote it down on his clipboard. Because the site had no internet connectivity, that log remained with him as he traveled to the next site.
                 </p>
                 <p>
                    In a traditional workflow, this critical piece of intelligence—a warning sign of imminent bearing failure—would sit in a van for days before being digitized. By then, the damage would often be irreversible.
                 </p>
            </div>

            {/* VISUAL TIMELINE COMPONENT */}
            <div className="relative border-l-4 border-slate-200 ml-4 my-16 space-y-12">
                <div className="relative pl-8">
                     <div className="absolute -left-[14px] top-1 h-6 w-6 rounded-full bg-slate-300 ring-4 ring-white"></div>
                     <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">The Old Way</span>
                     <h4 className="text-xl font-bold text-slate-900 mt-1">Manual Capture</h4>
                     <p className="text-slate-600 mt-2">Technician hears noise. Marks check-sheet. <span className="text-red-600 font-bold">Data remains trapped on paper.</span></p>
                </div>
                 <div className="relative pl-8">
                     <div className="absolute -left-[14px] top-1 h-6 w-6 rounded-full bg-red-500 ring-4 ring-white animate-pulse"></div>
                     <span className="text-xs font-bold text-red-500 uppercase tracking-widest">The Critical Gap</span>
                     <h4 className="text-xl font-bold text-slate-900 mt-1">Risk Escalates</h4>
                     <p className="text-slate-600 mt-2">Asset condition degrades rapidly. HQ is unaware because the paper log hasn't been scanned/uploaded yet.</p>
                </div>
                <div className="relative pl-8">
                     <div className="absolute -left-[14px] top-1 h-6 w-6 rounded-full bg-emerald-500 ring-4 ring-white"></div>
                     <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">The SpaceCapture Way</span>
                     <h4 className="text-xl font-bold text-slate-900 mt-1">Instant Intervention</h4>
                     <p className="text-slate-600 mt-2">
                        Technician points the tablet. <strong>Offline AI</strong> analyzes the sound signature in real-time.
                     </p>
                     <div className="mt-4 bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                        <p className="text-sm text-emerald-800 font-mono">
                           <strong>ALERT:</strong> Frequency Anomaly Detected.<br/>
                           <strong>ANALYSIS:</strong> Potential mechanical wear identified.<br/>
                           <strong>ACTION:</strong> Flagged for immediate review.
                        </p>
                     </div>
                </div>
            </div>

            {/* RESULTS SECTION: Qualitative */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
                 <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-900/5 text-center">
                    <dt className="text-sm font-semibold leading-6 text-slate-500 uppercase">Detection Speed</dt>
                    <dd className="mt-2 text-3xl font-extrabold tracking-tight text-emerald-600">Immediate</dd>
                    <dd className="mt-1 text-xs text-slate-400">vs Days (Manual)</dd>
                 </div>
                 <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-900/5 text-center">
                    <dt className="text-sm font-semibold leading-6 text-slate-500 uppercase">Outcome</dt>
                    <dd className="mt-2 text-3xl font-extrabold tracking-tight text-blue-600">Prevented</dd>
                    <dd className="mt-1 text-xs text-slate-400">Avoided Unplanned Downtime</dd>
                 </div>
                 <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-900/5 text-center">
                    <dt className="text-sm font-semibold leading-6 text-slate-500 uppercase">Field Feedback</dt>
                    <dd className="mt-2 text-3xl font-extrabold tracking-tight text-purple-600">Preferred</dd>
                    <dd className="mt-1 text-xs text-slate-400">"Faster than paper"</dd>
                 </div>
            </div>

            {/* TECH STACK SECTION */}
            <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border-2 border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">The Tech Stack That Saved The Day</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                            <TrendingUp className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                            Edge AI (Audio & Vision)
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                            <p className="flex-auto">Runs locally on the iPad. Analyzed the audio frequency spectrum in real-time without needing 4G/WiFi.</p>
                        </dd>
                    </div>
                     <div className="flex flex-col">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                            <CheckCircle className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                            Offline Logic Engine
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                            <p className="flex-auto">The "If This, Then That" logic for bearing failure was cached on the device, allowing instant triage instructions.</p>
                        </dd>
                    </div>
                     <div className="flex flex-col">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                            <Clock className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                            Visual Form Builder
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                            <p className="flex-auto">The inspection workflow was built in minutes by the head engineer, not hardcoded by IT.</p>
                        </dd>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
