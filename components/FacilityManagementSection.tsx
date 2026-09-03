"use client"

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Building2, ClipboardList, Wrench, ArrowRight } from 'lucide-react';

const FACILITY_FEATURES = [
  {
    title: "Work Order Management",
    icon: ClipboardList,
    description: "Streamline tenant requests and internal repairs. Assign tasks to maintenance staff instantly and track resolution times to ensure service level agreements (SLAs) are met."
  },
  {
    title: "Preventive Maintenance",
    icon: Wrench,
    description: "Schedule recurring inspections for HVAC, elevators, and fire safety systems. Auto-generate checklists to ensure compliance and extend asset lifecycles."
  },
  {
    title: "Space & Asset Tracking",
    icon: Building2,
    description: "Gain visibility into asset location and condition across your portfolio. Monitor occupancy levels and optimize space utilization data for smarter planning."
  }
];

const FacilityManagementSection = () => {
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
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-100 overflow-hidden">
      
      {/* Background: Architectural Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="building-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 0 40 L 40 40 L 40 0" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#building-grid)" />
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
                 <div className="h-1 w-12 bg-cyan-500 rounded-full"></div>
                 <span className="text-sm font-bold text-cyan-700 uppercase tracking-wider">Facility Management</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Smarter Buildings, <br/>
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Superior Operations
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Space Field unifies facility operations into one intuitive platform. Empower your teams to manage maintenance, assets, and tenant satisfaction from anywhere in the building.
              </motion.p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {FACILITY_FEATURES.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-[-8px]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-600 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-cyan-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
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
               <a href="/request-a-demo" className="inline-flex items-center gap-2 text-cyan-700 font-bold hover:gap-3 transition-all">
                  See Facility Demo <ArrowRight className="w-5 h-5" />
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
                   src="/images/facility.webp" // Ensure this image exists
                   alt="Modern Facility Management Operations"
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
            <div className="absolute -z-10 -bottom-[-20px] -left-[-20px] w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-[60px] opacity-40"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FacilityManagementSection;