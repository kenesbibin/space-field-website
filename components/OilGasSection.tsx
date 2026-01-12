"use client"

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Flame, ShieldAlert, Gauge, ArrowRight, Route, ShieldCheck, Radio, Link as LinkIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const OIL_GAS_TIMELINE = [
  {
    label: 'Permit issued',
    copy: 'Supervisors trigger digital permit-to-work templates, gas tests, and isolation plans that crews sign before entering the pad.',
    keywords: 'PTW workflows · LOTO · gas readings',
  },
  {
    label: 'Field execution',
    copy: 'Technicians document inspections, corrosion readings, and photo proof offline, automatically routing issues to maintenance planners.',
    keywords: 'offline sync · anomaly tagging · auto assignments',
  },
  {
    label: 'Control room handoff',
    copy: 'Completed forms push into SCADA/MMS notes, notify HSE, and archive into regulatory-ready packets within minutes.',
    keywords: 'SCADA context · audit export · instant alerts',
  },
];

const OIL_GAS_STORIES = [
  {
    title: 'Offshore production',
    description: 'Deepwater operators coordinate daily rig walkdowns, safety drills, and BOP inspections even with limited connectivity.',
    bullets: ['Sync checklists when helideck lands', 'Auto-compile daily production reports', 'Track corrective actions to closure'],
  },
  {
    title: 'Midstream pipelines',
    description: 'Pipeline integrity teams log CP readings, leak surveys, and excavation monitors with GIS context for regulators.',
    bullets: ['Embed GPS + milepost in every form', 'Share PHMSA-ready evidence instantly', 'Trigger dig alerts to landowners'],
  },
];

const OIL_GAS_FAQ = [
  {
    question: 'Does Space Field work in remote basins?',
    answer: 'Yes. Crews complete inspections, take photos, and capture signatures offline. Data syncs once the device reconnects via satcom or Wi-Fi.',
  },
  {
    question: 'Can we integrate with SCADA or MMS data?',
    answer: 'We push events, readings, and work orders into systems like Honeywell, Aveva, or SAP PM using secure APIs and webhooks.',
  },
  {
    question: 'How do we prove compliance to regulators?',
    answer: 'Each activity is timestamped with user, GPS, and permit numbers, then exportable to BSEE, PHMSA, or EPA-friendly packets.',
  },
];

const OIL_GAS_CTAS = [
  { label: 'Download safety templates', href: '/resources/templates' },
  { label: 'Digitize field inspections', href: '/solutions/inspection-software' },
  { label: 'Secure crews with Azure SSO', href: '/solutions/azure-sso' },
];

const OilGasSection = () => {
  const { t } = useLanguage();

  const OIL_GAS_FEATURES = [
    {
      title: t('oilGas.features.hse.title'),
      icon: ShieldAlert,
      description: t('oilGas.features.hse.desc')
    },
    {
      title: t('oilGas.features.assetIntegrity.title'),
      icon: Gauge,
      description: t('oilGas.features.assetIntegrity.desc')
    },
    {
      title: t('oilGas.features.remoteOps.title'),
      icon: Flame,
      description: t('oilGas.features.remoteOps.desc')
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
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-zinc-50 to-amber-50 overflow-hidden">

      {/* Background: Topographic/Geological Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="geo-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 0 20 Q 20 0 40 20 T 80 20" stroke="currentColor" strokeWidth="1" fill="none" className="text-slate-900" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#geo-grid)" />
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
                <div className="h-1 w-12 bg-amber-500 rounded-full"></div>
                <span className="text-sm font-bold text-amber-700 uppercase tracking-wider">{t('oilGas.badge')}</span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                {t('oilGas.title.line1')}<br />
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  {t('oilGas.title.highlight')}
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                {t('oilGas.description')}
              </motion.p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {OIL_GAS_FEATURES.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-[-8px]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-amber-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
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
              <a href="/book-a-demo" className="inline-flex items-center gap-2 text-amber-700 font-bold hover:gap-3 transition-all">
                {t('oilGas.link')} <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Landscape Image (Clean, No Popup) */}
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
                  src="/images/oilgas.jpg" // Ensure this image exists
                  alt={t('oilGas.imageAlt')}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -z-10 top-[-20px] -right-[-20px] w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-[60px] opacity-40"></div>
            <div className="absolute -z-10 -bottom-[-20px] -left-[-20px] w-64 h-64 bg-slate-300 rounded-full mix-blend-multiply filter blur-[60px] opacity-40"></div>
          </motion.div>

        </div>
      </div>

      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {OIL_GAS_TIMELINE.map((step) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-amber-700">
                <Route className="h-5 w-5" />
                <p className="text-xs font-bold uppercase tracking-[0.3em]">{step.label}</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">{step.copy}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">{step.keywords}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {OIL_GAS_STORIES.map((story) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-amber-700">
                <ShieldCheck className="h-6 w-6" />
                <p className="text-sm font-bold uppercase tracking-widest">{story.title}</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">{story.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {story.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-amber-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[32px] border border-amber-200 bg-amber-50/70 p-8"
          >
            <div className="flex items-center gap-3 text-amber-700">
              <Radio className="h-6 w-6" />
              <p className="text-sm font-bold uppercase tracking-widest">Oil & Gas FAQ</p>
            </div>
            <div className="mt-4 space-y-4">
              {OIL_GAS_FAQ.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-amber-100 bg-white/80 p-4">
                  <p className="text-base font-semibold text-slate-900">{faq.question}</p>
                  <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[32px] border border-slate-200 bg-white/90 p-8"
          >
            <div className="flex items-center gap-3 text-slate-800">
              <LinkIcon className="h-6 w-6" />
              <p className="text-sm font-bold uppercase tracking-widest">Connect HSE + IT</p>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Unite drilling, production, and security teams with Space Field integrations that link inspection data to SCADA, MMS, and enterprise identity.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {OIL_GAS_CTAS.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-50"
                >
                  {cta.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OilGasSection;