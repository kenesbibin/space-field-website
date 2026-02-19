"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function HeroSection() {
  // 1. Typed Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // 2. FIX: Separate the transition and use 'as const' for the ease property
  // This fixes the "Type string is not assignable to type Easing" error
  const blobTransition = {
    duration: 7,
    repeat: Infinity,
    ease: "linear" as const
  };

  const blobAnimation = {
    animate: {
      transform: [
        "translate(0px, 0px) scale(1)",
        "translate(30px, -50px) scale(1.1)",
        "translate(-20px, 20px) scale(0.9)",
        "translate(0px, 0px) scale(1)"
      ]
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-slate-50 pt-32 pb-20 lg:pt-40 overflow-hidden flex items-center">

      {/* Background decoration using Framer Motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <motion.div
          variants={blobAnimation}
          animate="animate"
          transition={blobTransition}
          className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          variants={blobAnimation}
          animate="animate"
          transition={{ ...blobTransition, delay: 2 }}
          className="absolute top-40 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          variants={blobAnimation}
          animate="animate"
          transition={{ ...blobTransition, delay: 4 }}
          className="absolute -bottom-8 left-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
      </div>

      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content - Text */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 tracking-tight"
              >
                Field Management App for <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Construction Teams
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium"
              >
                Streamline your entire project lifecycle with the ultimate field management app. From automated AI defect detection to instant daily reports, SpaceCapture empowers construction teams to build safer and faster.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
            >
              <a
                href="https://www.amspace.ai/login?type=Field&moduleId=8b3b6af5-07a3-44b2-b69e-342b61d71718&invite=guest"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href="/request-a-demo"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-full text-lg font-semibold border border-slate-200 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 active:scale-95 shadow-sm"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Mobile Video Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative w-full flex justify-center lg:justify-end"
          >
<<<<<<< Updated upstream
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2">
               <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/hero.webp"
                    alt="SPACE CAPTURE App Dashboard Interface"
                    width={1200}
                    height={900} 
                    quality={100}
                    className="w-full h-auto object-cover"
                    priority
=======
            {/* Realistic Mobile Device Frame */}
            <div className="relative mx-auto w-[280px] sm:w-[300px] md:w-[320px]">
              {/* Outer Frame / Bezel */}
              <div className="relative rounded-[3rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden aspect-[9/19.5]">
                {/* Speaker Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20 flex items-center justify-center">
                  <div className="w-10 h-1 bg-slate-800 rounded-full"></div>
                </div>

                {/* Video Content */}
                <div className="absolute inset-0 bg-black">
                  <video
                    src="/videos/app-demo-video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
>>>>>>> Stashed changes
                  />
                </div>
              </div>

              {/* Side Buttons (Visual Details) */}
              <div className="absolute -left-[10px] top-24 w-[2px] h-12 bg-slate-800 rounded-l-md"></div>
              <div className="absolute -left-[10px] top-40 w-[2px] h-20 bg-slate-800 rounded-l-md"></div>
              <div className="absolute -right-[10px] top-32 w-[2px] h-24 bg-slate-800 rounded-r-md"></div>

              {/* Status Bar Over Video */}
              <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10 text-white/90">
                <span className="text-[10px] font-bold">9:41</span>
                <div className="flex gap-1 items-center">
                  <div className="w-3 h-3 rounded-full border border-white/40"></div>
                  <div className="w-3 h-3 rounded-full border border-white/40"></div>
                </div>
              </div>

              {/* Floating Badge (Repositioned for Mobile Frame) */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -right-12 sm:-right-20 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-blue-100 hidden sm:flex gap-3 items-center z-20 max-w-[180px]"
              >
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Site Inspection</p>
                  <p className="text-[10px] text-green-600 font-medium">Completed</p>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements behind device */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


