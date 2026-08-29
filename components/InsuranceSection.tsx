"use client"

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ShieldCheck, FileText, Zap, ArrowRight } from 'lucide-react';

const INSURANCE_FEATURES = [
  {
    title: "Accelerated Claims",
    icon: Zap,
    description: "Speed up claim lifecycles with instant field data sync. Adjusters capture and submit evidence on-site, reducing processing time from days to hours."
  },
  {
    title: "Fraud Prevention",
    icon: ShieldCheck,
    description: "Verify claims with unalterable, geo-tagged photos and videos. AI analysis helps detect inconsistent reporting and prevents fraudulent payouts."
  },
  {
    title: "Digital Risk Assessment",
    icon: FileText,
    description: "Standardize underwriting inspections. Capture structured data on property conditions to price risk accurately and improve portfolio health."
  }
];

const InsuranceSection = () => {
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
    <section className="relative py-12 lg:py-20 bg-gradient-to-br from-indigo-50 via-slate-50 to-blue-50 overflow-hidden">
      
      {/* Background: Geometric Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="ins-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
             <circle cx="2" cy="2" r="1" className="text-indigo-900" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#ins-grid)" />
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
                 <div className="h-1 w-12 bg-indigo-500 rounded-full"></div>
                 <span className="text-sm font-bold text-indigo-700 uppercase tracking-wider">Insurance Industry</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Smarter Inspection <br/>
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  Faster Claims
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Space Field equips insurers and adjusters with AI-powered tools to validate claims, assess risk, and close cases faster. From field to finish, digital confidence.
              </motion.p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {INSURANCE_FEATURES.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-[-8px]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-indigo-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
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
               <a href="/request-a-demo" className="inline-flex items-center gap-2 text-indigo-700 font-bold hover:gap-3 transition-all">
                  See Insurance Solutions <ArrowRight className="w-5 h-5" />
               </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Image */}
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
                   src="/images/utilities.webp" 
                   alt="Insurance Field Inspections with Space Field"
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
            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
