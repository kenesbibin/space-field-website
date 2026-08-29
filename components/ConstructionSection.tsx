"use client"

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion'; // 1. Import Variants
import { HardHat, ClipboardCheck, Truck, ArrowRight } from 'lucide-react';

const CONSTRUCTION_FEATURES = [
  {
    title: "Real-Time Site Progress",
    icon: HardHat,
    description: "Track daily logs, labor hours, and material usage instantly. Keep stakeholders aligned with live updates from the ground."
  },
  {
    title: "Digital QC & Safety Inspections",
    icon: ClipboardCheck,
    description: "Digitize your snag lists and safety audits. Capture photos, annotate issues, and assign fixes directly to subcontractors."
  },
  {
    title: "Fleet & Asset Management",
    icon: Truck,
    description: "Monitor heavy equipment usage and location. Prevent theft and optimize deployment schedules to reduce downtime."
  }
];

const ConstructionSection = () => {
  // 2. Add ': Variants' type here
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // 3. Add ': Variants' type here
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative py-12 lg:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">
      
      {/* Background: Subtle Blueprint Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="blueprint-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-900"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Content & Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              {/* Header / Eyebrow Text */}
              <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
                 <div className="h-1 w-12 bg-orange-500 rounded-full"></div>
                 <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">Construction Industry</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Construction Field <br/>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Management Software
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                AI-powered construction field management software. Eliminate paperwork, automate punch lists, and deliver projects on schedule with real-time site monitoring.
              </motion.p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {CONSTRUCTION_FEATURES.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-[-8px]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="pt-4">
               <a href="/request-a-demo" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:gap-3 transition-all">
                  See Construction Demo <ArrowRight className="w-5 h-5" />
               </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Image with Professional Frame (Clean, No Popup) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
               <div className="aspect-[4/5] relative">
                 <Image
                   src="/images/construction.webp" // Ensure this image exists in your public/images folder
                   alt="Construction Site Management with Space Field"
                   fill
                   className="object-cover hover:scale-105 transition-transform duration-700"
                   sizes="(max-width: 1024px) 100vw, 50vw"

                   loading="lazy"
                 />
                 
                 {/* Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
               </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ConstructionSection;