"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Wifi,
  Zap,
  Code,
  MapPin,
  Calendar,
  AlertTriangle,
  Activity,
  Maximize
} from 'lucide-react';

import { useTranslation } from '@/hooks/useTranslation';

const AiDetectionApiSection = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">

      {/* SECTION 1: AI DETECTION API SHOWCASE */}
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
                <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">{t('aiApi.section1.badge')}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                {t('aiApi.section1.title.prefix')} <br />
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">{t('aiApi.section1.title.highlight')}</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {t('aiApi.section1.description')}
              </p>

              <div className="flex gap-4">
                <Link
                  href="www.amspace.ai/login?type=Legal&moduleId=b20f5bfe-a351-46e7-842a-24a02802fe4f&invite=guest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white text-base font-bold hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  {t('aiApi.section1.button')} <Code className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Right: GIF Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-indigo-200 rounded-full blur-[100px] opacity-50"></div>

              <div className="relative w-full max-w-lg shadow-2xl rounded-2xl overflow-hidden z-10 border-8 border-slate-900">
                <Image
                  src="/images/detection.gif"
                  alt="AI Defect Detection GIF Demonstration"
                  width={600}
                  height={400}
                  layout="responsive"
                  priority
                />
                <div className="absolute top-0 w-full bg-slate-900/70 backdrop-blur-sm p-3 flex items-center justify-center">
                  <span className="text-white text-sm font-medium flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    {t('aiApi.section1.gifOverlay')}
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: STRUCTURED DATA UI REPRESENTATION */}
      <section className="relative py-20 lg:py-32 bg-white/50">
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Data Card UI (Replaced raw JSON with UI) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -top-6 -left-6 w-full h-full bg-indigo-200 rounded-2xl -z-10"></div>

              {/* Main Card Container */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col">

                {/* Card Header */}
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{t('aiApi.card.status')}</h3>
                      <p className="text-xs text-slate-500 font-mono">ID: img-2049-T45</p>
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded uppercase tracking-wide">
                    200 OK
                  </div>
                </div>

                {/* Metadata Row */}
                <div className="px-6 py-4 grid grid-cols-2 gap-4 border-b border-slate-100 bg-white">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-medium">Nov 25, 16:30 UTC</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-medium">34.05, -118.24</span>
                  </div>
                </div>

                {/* Detections List */}
                <div className="p-6 space-y-4 bg-slate-50/50">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t('aiApi.card.detectedObjects')}</p>

                  {/* Detection Item 1 */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:border-indigo-300 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <h4 className="text-sm font-bold text-slate-900">{t('aiApi.card.item1.name')}</h4>
                      </div>
                      <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[10px] font-bold rounded-full border border-red-200">
                        {t('aiApi.card.item1.severity')}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-3 text-xs">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Activity className="w-3.5 h-3.5" />
                        <span>{t('aiApi.card.confidence')} <strong className="text-slate-700">98.5%</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5 text-indigo-600 font-medium">
                        <Maximize className="w-3.5 h-3.5" />
                        <span>{t('aiApi.card.box')} [120, 50...]</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 flex gap-2">
                      <span className="font-semibold text-slate-800">{t('aiApi.card.actionLabel')}</span>
                      {t('aiApi.card.item1.action')}
                    </div>
                  </div>

                  {/* Detection Item 2 */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:border-indigo-300 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        <h4 className="text-sm font-bold text-slate-900">{t('aiApi.card.item2.name')}</h4>
                      </div>
                      <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-full border border-orange-200">
                        {t('aiApi.card.item2.severity')}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-3 text-xs">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Activity className="w-3.5 h-3.5" />
                        <span>{t('aiApi.card.confidence')} <strong className="text-slate-700">82.1%</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5 text-indigo-600 font-medium">
                        <Maximize className="w-3.5 h-3.5" />
                        <span>{t('aiApi.card.box')} [500, 100...]</span>
                      </div>
                    </div>
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
                <span className="text-sm font-bold text-indigo-700 uppercase tracking-wider">{t('aiApi.section2.badge')}</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                {t('aiApi.section2.title.line1')} <br />
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">{t('aiApi.section2.title.highlight')}</span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {t('aiApi.section2.description')}
              </p>

              <ul className="space-y-4">
                {[
                  t('aiApi.section2.list.item1'),
                  t('aiApi.section2.list.item2'),
                  t('aiApi.section2.list.item3')
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

export default AiDetectionApiSection;