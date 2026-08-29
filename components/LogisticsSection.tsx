"use client"

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Truck, MapPin, Package, ArrowRight } from 'lucide-react';

const LOGISTICS_FEATURES = [
  {
    title: "Fleet Tracking & Telematics",
    icon: Truck,
    description: "Monitor vehicle locations, fuel usage, and driver behavior in real-time. Reduce idle time and optimize routes to save on operational costs."
  },
  {
    title: "Proof of Delivery (POD)",
    icon: Package,
    description: "Capture digital signatures, photos, and timestamps at every drop-off. Automatically update order status and trigger customer notifications."
  },
  {
    title: "Dynamic Route Optimization",
    icon: MapPin,
    description: "Plan the most efficient delivery sequences instantly. Adjust routes on the fly based on traffic, weather, or urgent pick-up requests."
  }
];

const LogisticsSection = () => {
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
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-zinc-50 to-emerald-50 overflow-hidden">
      
      {/* Background: Road/Route Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="logistic-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 0 30 H 60" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-900"/>
            <circle cx="30" cy="30" r="2" fill="currentColor" className="text-slate-900"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#logistic-grid)" />
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
                 <div className="h-1 w-12 bg-emerald-500 rounded-full"></div>
                 <span className="text-sm font-bold text-emerald-700 uppercase tracking-wider">Logistics & Fleet</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Drive Efficiency at <br/>
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Every Turn
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Space Field transforms logistics operations with end-to-end visibility. From the warehouse dock to the customer's doorstep, ensure every mile is optimized and every delivery is verified.
              </motion.p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {LOGISTICS_FEATURES.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-[-8px]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-emerald-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
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
               <a href="/request-a-demo" className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:gap-3 transition-all">
                  See Logistics Demo <ArrowRight className="w-5 h-5" />
               </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Portrait Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Portrait Container (aspect-[4/5]) */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
               <div className="aspect-[4/5] relative">
                 <Image
                   src="/images/fleet.webp" // Ensure this image exists
                   alt="Logistics Fleet Management and Delivery"
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
            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-slate-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;