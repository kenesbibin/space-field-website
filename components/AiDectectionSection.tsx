"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  CloudUpload,
  AlertCircle,
  Wifi,
  AlertTriangle,
  Zap,
  Hammer
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const AiDetectionSection = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">

      {/* SECTION 1: AI MOBILE CAPTURE */}
      <section className="relative pt-32 pb-20 lg:py-32">
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-12 bg-purple-600 rounded-full"></div>
                <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">{t('aiDetectionPage.hero.badge')}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                {t('aiDetectionPage.hero.title.line1')} <br />
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">{t('aiDetectionPage.hero.title.highlight')}</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {t('aiDetectionPage.hero.description')}
              </p>

              <div className="flex gap-4">
                <Link
                  href="/book-a-demo"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white text-base font-bold hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  {t('aiDetectionPage.hero.cta')} <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Right: SIMPLIFIED AI RESULT CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              {/* Decorative background blobs */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-indigo-200 rounded-full blur-[100px] opacity-50"></div>

              {/* The Simplified Phone/Card Interface */}
              <div className="relative bg-white border-8 border-slate-900 rounded-[2.5rem] w-[320px] shadow-2xl overflow-hidden z-10">

                {/* Status Bar */}
                <div className="bg-slate-900 h-8 w-full flex justify-center items-center">
                  <div className="w-16 h-4 bg-black rounded-b-xl"></div>
                </div>

                {/* Header */}
                <div className="px-6 pt-8 pb-4 bg-slate-50 border-b border-slate-100">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t('aiDetectionPage.analysis.status')}</p>
                      <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                        {t('aiDetectionPage.analysis.title')} <Sparkles className="w-5 h-5 text-purple-600 fill-purple-100" />
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Body: List of Detections */}
                <div className="p-5 space-y-4 bg-white min-h-[400px]">

                  {/* Item 1: High Severity */}
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-4 p-4 rounded-xl bg-red-50 border border-red-100 items-start"
                  >
                    <div className="mt-1 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{t('aiDetectionPage.analysis.item1.name')}</h4>
                      <p className="text-xs text-slate-500 mt-1">{t('aiDetectionPage.analysis.item1.desc')}</p>
                      <div className="mt-2 inline-flex items-center px-2 py-1 rounded bg-red-200 text-red-800 text-[10px] font-bold uppercase">
                        {t('aiDetectionPage.analysis.item1.severity')}
                      </div>
                    </div>
                  </motion.div>

                  {/* Item 2: Medium Severity */}
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex gap-4 p-4 rounded-xl bg-orange-50 border border-orange-100 items-start"
                  >
                    <div className="mt-1 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{t('aiDetectionPage.analysis.item2.name')}</h4>
                      <p className="text-xs text-slate-500 mt-1">{t('aiDetectionPage.analysis.item2.desc')}</p>
                      <div className="mt-2 inline-flex items-center px-2 py-1 rounded bg-orange-200 text-orange-800 text-[10px] font-bold uppercase">
                        {t('aiDetectionPage.analysis.item2.severity')}
                      </div>
                    </div>
                  </motion.div>

                  {/* Item 3: Low Severity */}
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="flex gap-4 p-4 rounded-xl bg-yellow-50 border border-yellow-100 items-start"
                  >
                    <div className="mt-1 w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 shrink-0">
                      <Hammer className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{t('aiDetectionPage.analysis.item3.name')}</h4>
                      <div className="mt-2 inline-flex items-center px-2 py-1 rounded bg-yellow-200 text-yellow-800 text-[10px] font-bold uppercase">
                        {t('aiDetectionPage.analysis.item3.severity')}
                      </div>
                    </div>
                  </motion.div>

                </div>

                {/* Footer: Syncing Animation */}
                <div className="absolute bottom-0 w-full bg-slate-50 border-t border-slate-100 p-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1">
                        <span>{t('aiDetectionPage.analysis.syncing')}</span>
                        <span>100%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-purple-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: STRUCTURED DATA */}
      <section className="relative py-20 lg:py-32 bg-white/50">
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Data Card Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -top-6 -left-6 w-full h-full bg-indigo-200 rounded-2xl -z-10"></div>

              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden p-8">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Inspection Report #2049</h3>
                    <p className="text-xs text-slate-500">Generated automatically by Space AI</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{t('aiDetectionPage.reporting.assetType')}</span>
                      <p className="text-sm font-semibold text-slate-800">Concrete Wall</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{t('aiDetectionPage.reporting.confidence')}</span>
                      <p className="text-sm font-semibold text-green-600">98.5%</p>
                    </div>
                  </div>

                  <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                    <span className="text-[10px] font-bold text-red-400 uppercase">{t('aiDetectionPage.reporting.defectFound')}</span>
                    <p className="text-sm font-semibold text-red-800">Structural Crack - Severity High</p>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xs text-slate-400">{t('aiDetectionPage.reporting.synced')}</span>
                    <Wifi className="w-4 h-4 text-indigo-500" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 max-w-xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-12 bg-indigo-600 rounded-full"></div>
                <span className="text-sm font-bold text-indigo-700 uppercase tracking-wider">{t('aiDetectionPage.reporting.badge')}</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                {t('aiDetectionPage.reporting.title.line1')} <br />
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">{t('aiDetectionPage.reporting.title.highlight')}</span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {t('aiDetectionPage.reporting.description')}
              </p>

              <ul className="space-y-4">
                {[
                  t('aiDetectionPage.reporting.list.item1'),
                  t('aiDetectionPage.reporting.list.item2'),
                  t('aiDetectionPage.reporting.list.item3')
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <Zap className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AiDetectionSection;