"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Cloud,
  Server,
  ShieldCheck,
  Globe,
  Lock,
  Database,
  Cpu
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const HostingSection = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">

      {/* SECTION 1: HOSTING OPTIONS */}
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
                <div className="h-1 w-12 bg-indigo-600 rounded-full"></div>
                <span className="text-sm font-bold text-indigo-700 uppercase tracking-wider">{t('hostingPage.hero.badge')}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                {t('hostingPage.hero.title.line1')} <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{t('hostingPage.hero.title.highlight')}</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {t('hostingPage.hero.description')}
              </p>

              <div className="flex gap-4">
                <Link
                  href="/book-a-demo"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white text-base font-bold hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  {t('hostingPage.hero.cta')} <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Right: HOSTING ARCHITECTURE MOCKUP */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-lg">

                {/* Central Hub (Space Capture Core) */}
                <div className="relative z-20 bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{t('hostingPage.mockup.core')}</h3>
                      <p className="text-xs text-slate-500">{t('hostingPage.mockup.environment')}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
                      <Cloud className="w-5 h-5 text-blue-600" />
                      <div>
                        <span className="text-sm font-bold text-slate-800 block">{t('hostingPage.mockup.saas')}</span>
                        <span className="text-[10px] text-slate-500">{t('hostingPage.mockup.saasDesc')}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 border border-purple-100">
                      <Lock className="w-5 h-5 text-purple-600" />
                      <div>
                        <span className="text-sm font-bold text-slate-800 block">{t('hostingPage.mockup.private')}</span>
                        <span className="text-[10px] text-slate-500">{t('hostingPage.mockup.privateDesc')}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-100 border border-slate-200">
                      <Server className="w-5 h-5 text-slate-600" />
                      <div>
                        <span className="text-sm font-bold text-slate-800 block">{t('hostingPage.mockup.onPremise')}</span>
                        <span className="text-[10px] text-slate-500">{t('hostingPage.mockup.onPremiseDesc')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements (Security/Data) */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 -right-4 md:-right-12 bg-white p-4 rounded-xl shadow-xl border border-emerald-100 z-30 max-w-[180px]"
                >
                  <div className="flex items-center gap-2 mb-2 text-emerald-600">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase">{t('hostingPage.mockup.security')}</span>
                  </div>
                  <p className="text-[10px] text-slate-500">{t('hostingPage.mockup.securityDesc')}</p>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 md:-left-12 bg-white p-4 rounded-xl shadow-xl border border-amber-100 z-30 max-w-[180px]"
                >
                  <div className="flex items-center gap-2 mb-2 text-amber-600">
                    <Database className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase">{t('hostingPage.mockup.residency')}</span>
                  </div>
                  <p className="text-[10px] text-slate-500">{t('hostingPage.mockup.residencyDesc')}</p>
                </motion.div>

                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-200/30 rounded-full blur-[80px] -z-10"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: COMPARISON TABLE (Optional but good for SEO content) */}
      <section className="relative py-20 bg-white/50">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">{t('hostingPage.comparison.title')}</h2>
            <p className="text-slate-600">{t('hostingPage.comparison.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SaaS Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:border-blue-300 transition-colors">
              <Cloud className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('hostingPage.comparison.saas.title')}</h3>
              <p className="text-sm text-slate-500 mb-6">{t('hostingPage.comparison.saas.desc')}</p>
              <ul className="space-y-3">
                {[
                  t('hostingPage.comparison.saas.list.item1'),
                  t('hostingPage.comparison.saas.list.item2'),
                  t('hostingPage.comparison.saas.list.item3'),
                  t('hostingPage.comparison.saas.list.item4')
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Private Cloud Card */}
            <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-800 transform md:-translate-y-4">
              <Lock className="w-12 h-12 text-indigo-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">{t('hostingPage.comparison.private.title')}</h3>
              <p className="text-sm text-slate-400 mb-6">{t('hostingPage.comparison.private.desc')}</p>
              <ul className="space-y-3">
                {[
                  t('hostingPage.comparison.private.list.item1'),
                  t('hostingPage.comparison.private.list.item2'),
                  t('hostingPage.comparison.private.list.item3'),
                  t('hostingPage.comparison.private.list.item4')
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* On-Premise Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:border-slate-400 transition-colors">
              <Server className="w-12 h-12 text-slate-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('hostingPage.comparison.onPremise.title')}</h3>
              <p className="text-sm text-slate-500 mb-6">{t('hostingPage.comparison.onPremise.desc')}</p>
              <ul className="space-y-3">
                {[
                  t('hostingPage.comparison.onPremise.list.item1'),
                  t('hostingPage.comparison.onPremise.list.item2'),
                  t('hostingPage.comparison.onPremise.list.item3'),
                  t('hostingPage.comparison.onPremise.list.item4')
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HostingSection;