"use client"

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Factory, Wrench, PackageCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ManufacturingSection = () => {
  const { t } = useLanguage();

  const MANUFACTURING_FEATURES = [
    {
      title: t('manufacturing.features.maintenance.title'),
      icon: Wrench,
      description: t('manufacturing.features.maintenance.desc')
    },
    {
      title: t('manufacturing.features.qualityControl.title'),
      icon: PackageCheck,
      description: t('manufacturing.features.qualityControl.desc')
    },
    {
      title: t('manufacturing.features.shopFloor.title'),
      icon: Factory,
      description: t('manufacturing.features.shopFloor.desc')
    }
  ];

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
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">

      {/* Background: Industrial Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="industrial-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 0 40 L 40 0" stroke="currentColor" strokeWidth="1" className="text-slate-900" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#industrial-grid)" />
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
                <span className="text-sm font-bold text-indigo-700 uppercase tracking-wider">{t('manufacturing.badge')}</span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                {t('manufacturing.title.line1')}<br />
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  {t('manufacturing.title.highlight')}
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                {t('manufacturing.description')}
              </motion.p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {MANUFACTURING_FEATURES.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-[-8px]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
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
              <a href="/book-a-demo" className="inline-flex items-center gap-2 text-indigo-700 font-bold hover:gap-3 transition-all">
                {t('manufacturing.link')} <ArrowRight className="w-5 h-5" />
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
                  src="/images/manufac.jpg" // Using the requested image name
                  alt={t('manufacturing.imageAlt')}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -z-10 top-[-20px] -right-[-20px] w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-[60px] opacity-40"></div>
            <div className="absolute -z-10 -bottom-[-20px] -left-[-20px] w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-[60px] opacity-40"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;