"use client"

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion'; // 1. Import Variants
import {
  FileEdit,
  BrainCircuit,
  GitBranch,
  ShieldCheck,
  BarChart3,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const CoreFunctionsSection = () => {
  const { t } = useLanguage();

  const CORE_FUNCTIONS = [
    {
      title: t('coreFunctions.items.visualFormBuilder.title'),
      path: "/visual-form-builder",
      icon: FileEdit,
      description: t('coreFunctions.items.visualFormBuilder.desc'),
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: t('coreFunctions.items.aiDetection.title'),
      path: "/ai-detection",
      icon: BrainCircuit,
      description: t('coreFunctions.items.aiDetection.desc'),
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: t('coreFunctions.items.engagementFlows.title'),
      path: "/engagement-flows",
      icon: GitBranch,
      description: t('coreFunctions.items.engagementFlows.desc'),
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: t('coreFunctions.items.accessControl.title'),
      path: "/access-control",
      icon: ShieldCheck,
      description: t('coreFunctions.items.accessControl.desc'),
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: t('coreFunctions.items.deepInsights.title'),
      path: "/reports",
      icon: BarChart3,
      description: t('coreFunctions.items.deepInsights.desc'),
      color: "bg-amber-100 text-amber-600"
    }
  ];

  // 2. Add type annotation ': Variants'
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // 3. Add type annotation ': Variants'
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden lg:min-h-screen lg:flex lg:items-center">

      {/* Background: Abstract Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="url(#grad1)" opacity="0.1" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE: Header & Introduction */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-indigo-600 rounded-full"></div>
              <span className="text-sm font-bold text-indigo-700 uppercase tracking-wider">{t('coreFunctions.badge')}</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              {t('coreFunctions.title.line1')}<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('coreFunctions.title.highlight')}
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed mb-8">
              {t('coreFunctions.description')}
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="/book-a-demo"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white text-base font-bold hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {t('coreFunctions.cta')} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Functional Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 sm:grid-cols-2 lg:auto-rows-fr"
          >
            {CORE_FUNCTIONS.map((func, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col ${index === 4 ? 'sm:col-span-2 sm:w-full lg:col-span-1 lg:w-auto' : ''}`}
              >
                <Link href={func.path} className="block h-full flex flex-col font-sans">
                  <div className="flex items-start justify-between mb-4 flex-shrink-0">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${func.color}`}>
                      <func.icon className="w-6 h-6" />
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-5 h-5 text-slate-400" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex-shrink-0 break-words line-clamp-2">
                    {func.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-grow break-words">
                    {func.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CoreFunctionsSection;