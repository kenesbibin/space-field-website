"use client"

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, BarChart3, ClipboardList, Layers } from 'lucide-react';
import { motion, Variants } from 'framer-motion'; // 1. Added Variants import

const GuideSection = () => {
  // 2. Explicitly typed the variants to fix the "ease" string error
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

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, x: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content - Text & Features */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-1.5 shadow-sm">
                <Layers className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  Total Workflow Control
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900"
            >
              Orchestrate Your Field Projects With{' '}
              <span className="text-blue-600">Efficiency</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed max-w-xl"
            >
              SPACE CAPTURE isn&apos;t just about knowing where you are—it&apos;s about knowing <strong>where your project stands.</strong> Replace chaotic paper trails with digital precision. Assign tasks, log inspections, and visualize progress in one unified ecosystem.
            </motion.p>

            {/* Features List */}
            <motion.div 
              variants={itemVariants}
              className="space-y-6 pt-2"
            >
              {/* Feature 1 */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <ClipboardList className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Digital Task Management</h4>
                  <p className="text-slate-600 mt-1">Assign duties instantly and track completion status without the paperwork.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                  <BarChart3 className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Real-Time Site Analytics</h4>
                  <p className="text-slate-600 mt-1">Get live insights on workforce productivity and project milestones.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Automated Compliance</h4>
                  <p className="text-slate-600 mt-1">Ensure every safety protocol is checked, logged, and synced to the cloud.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Clean Image */}
          <motion.div 
            className="relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 ring-1 ring-black/5">
              <Image
                src="/images/landscapeconstruction.png"
                alt="Construction site management with SPACE CAPTURE"
                width={800}
                height={600}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              
              {/* Subtle Gradient Overlay for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>

              {/* Live Status Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg border border-white/20 flex items-center gap-3 z-10"
              >
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900 uppercase tracking-wide">System Online</span>
                  <span className="block text-[10px] text-slate-500 font-medium">Data Synced Just Now</span>
                </div>
              </motion.div>
            </div>

            {/* Decorative Background Blurs */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2] 
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-[64px] opacity-20"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2] 
              }}
              transition={{ duration: 7, repeat: Infinity, delay: 1 }}
              className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-[64px] opacity-20"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GuideSection;


