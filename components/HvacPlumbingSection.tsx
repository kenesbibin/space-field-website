"use client"

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ThermometerSnowflake, Droplets, ClipboardList, ArrowRight } from 'lucide-react';

const HVAC_FEATURES = [
  {
    title: "Service Call Dispatching",
    icon: ClipboardList,
    description: "Assign jobs to the nearest technician with the right skills. Track job status from 'En Route' to 'Completed' in real-time."
  },
  {
    title: "Equipment History & Audits",
    icon: ThermometerSnowflake,
    description: "Access detailed service history for every HVAC unit. Scan QR codes to instantly retrieve manuals, warranty info, and past repair logs."
  },
  {
    title: "Plumbing Inspection Reports",
    icon: Droplets,
    description: "Generate professional inspection reports on-site. Capture photos of leaks or piping issues and get customer sign-off digitally."
  }
];

const HvacPlumbingSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-cyan-50 via-teal-50 to-slate-100 overflow-hidden">
      
      {/* Background: Pipe/Flow Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="flow-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 0 30 Q 15 10 30 30 T 60 30" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-900"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#flow-grid)" />
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
                 <div className="h-1 w-12 bg-teal-500 rounded-full"></div>
                 <span className="text-sm font-bold text-teal-700 uppercase tracking-wider">HVAC & Plumbing</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Master Your Service <br/>
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Workflows
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Space Field helps HVAC and plumbing businesses dispatch faster and fix smarter. Manage recurring maintenance contracts, track parts inventory, and invoice customers right from the job site.
              </motion.p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {HVAC_FEATURES.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-[-8px]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
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
               <a href="/request-a-demo" className="inline-flex items-center gap-2 text-teal-700 font-bold hover:gap-3 transition-all">
                  See HVAC Demo <ArrowRight className="w-5 h-5" />
               </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Landscape Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Landscape Container (aspect-video) */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
               <div className="aspect-video relative">
                 <Image
                   src="/images/plumbing.webp" // Ensure this image exists
                   alt="HVAC Technician and Plumbing Services"
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
            <div className="absolute -z-10 top-[-20px] -right-[-20px] w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-[60px] opacity-40"></div>
            <div className="absolute -z-10 -bottom-[-20px] -left-[-20px] w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-[60px] opacity-40"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HvacPlumbingSection;