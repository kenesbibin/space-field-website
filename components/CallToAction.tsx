"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LayoutGrid, Check, Plus } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden flex items-center">
      
      {/* Background: Minimal Wavy Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M0 300 C 300 200 600 400 900 350 C 1200 300 1440 400 1440 400" stroke="url(#lineGradient1)" strokeWidth="2" fill="none" opacity="0.5" />
           <defs>
             <linearGradient id="lineGradient1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
               <stop stopColor="#60A5FA" />
               <stop offset="1" stopColor="#A78BFA" />
             </linearGradient>
           </defs>
        </svg>
      </div>

      <div className="container mx-auto max-w-[1400px] px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Launch Azure-Ready <br/>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Construction & Inspection Software</span> Today.
            </h2>
            
            <p className="mt-6 text-slate-600 text-lg font-medium leading-relaxed">
              Stop chasing paper trails. Sync your office and field teams instantly with the best construction management software for small business, construction project management software, job hazard analysis software, restaurant inventory app workflows, HOA apps, portable toilet software, process server apps, and time tracking software for employees.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://www.amspace.ai/login?type=Legal&moduleId=b20f5bfe-a351-46e7-842a-24a02802fe4f&invite=guest" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white text-base font-bold hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Try for Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="/book-a-demo" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-bold hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                Book a Demo
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-400 font-medium">
              Available on iOS, Android, Web, and offline inspection form builders
            </p>
          </motion.div>

          {/* RIGHT: High Quality Phone & Tablet Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] sm:h-[500px] w-full flex items-center justify-center lg:justify-end"
          >
             {/* Mockup Container */}
             <div className="relative w-[90%] max-w-[500px] aspect-square flex items-center justify-center">
                
                {/* 1. BACK LAYER: Tablet / Dashboard View */}
                <div className="absolute top-[10%] left-0 w-[85%] h-[65%] bg-white border-[6px] border-slate-900 rounded-2xl shadow-2xl overflow-hidden z-10">
                    {/* Browser Dots */}
                    <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-3 gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    {/* UI Skeleton */}
                    <div className="p-4 flex gap-4 h-full bg-slate-50/50">
                        {/* Sidebar */}
                        <div className="w-12 h-full bg-white border border-slate-200 rounded-lg flex flex-col items-center pt-4 gap-3">
                             <div className="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center"><LayoutGrid className="w-3 h-3 text-blue-600"/></div>
                             <div className="w-6 h-6 bg-slate-50 rounded-md"></div>
                             <div className="w-6 h-6 bg-slate-50 rounded-md"></div>
                        </div>
                        {/* Main Grid */}
                        <div className="flex-1 grid grid-cols-2 gap-3 content-start">
                             <div className="h-20 bg-white border border-slate-200 rounded-xl p-2 flex flex-col justify-between">
                                 <div className="w-6 h-6 rounded-full bg-indigo-100"></div>
                                 <div className="w-16 h-1.5 bg-slate-200 rounded-full"></div>
                             </div>
                             <div className="h-20 bg-white border border-slate-200 rounded-xl p-2 flex flex-col justify-between">
                                 <div className="w-6 h-6 rounded-full bg-purple-100"></div>
                                 <div className="w-16 h-1.5 bg-slate-200 rounded-full"></div>
                             </div>
                             <div className="col-span-2 h-24 bg-white border border-slate-200 rounded-xl p-2">
                                 <div className="w-24 h-2 bg-slate-200 rounded-full mb-3"></div>
                                 <div className="w-full h-1.5 bg-slate-100 rounded-full mb-1.5"></div>
                                 <div className="w-full h-1.5 bg-slate-100 rounded-full mb-1.5"></div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* 2. FRONT LAYER: Mobile Phone (Enhanced Version) */}
                <div className="absolute bottom-[5%] right-[5%] w-[180px] sm:w-[200px] h-[360px] sm:h-[400px] bg-white border-[8px] border-slate-900 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] z-20 overflow-hidden">
                    {/* Dynamic Island / Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-900 rounded-b-xl z-30"></div>
                    
                    {/* Screen UI */}
                    <div className="flex-1 h-full bg-slate-50 pt-8 px-3 pb-3 flex flex-col">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                             <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                             <div className="w-16 h-2 bg-slate-200 rounded-full"></div>
                        </div>

                        {/* Task List */}
                        <div className="space-y-2.5">
                             {[1, 2, 3].map((i) => (
                                 <div key={i} className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm flex items-center gap-2">
                                     <div className={`w-5 h-5 rounded-full flex items-center justify-center ${i===1 ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-300'}`}>
                                         <Check className="w-2.5 h-2.5" />
                                     </div>
                                     <div className="flex-1">
                                         <div className="w-16 h-1.5 bg-slate-200 rounded-full mb-1"></div>
                                         <div className="w-10 h-1 bg-slate-100 rounded-full"></div>
                                     </div>
                                 </div>
                             ))}
                             <div className="bg-slate-100/50 p-2 rounded-lg border border-dashed border-slate-200 h-10"></div>
                        </div>

                        {/* FAB Button */}
                        <div className="mt-auto mx-auto w-10 h-10 bg-blue-600 rounded-full shadow-lg shadow-blue-200 flex items-center justify-center text-white">
                            <Plus className="w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* Decorative Blobs */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-[60px] opacity-40 animate-blob"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-[60px] opacity-40 animate-blob animation-delay-2000"></div>

             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;


