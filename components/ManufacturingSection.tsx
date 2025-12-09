"use client"

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Factory, Wrench, PackageCheck, ArrowRight, Workflow, ShieldCheck, CircuitBoard, Link as LinkIcon } from 'lucide-react';

const MANUFACTURING_FEATURES = [
  {
    title: "Equipment Maintenance & Repairs",
    icon: Wrench,
    description: "Shift from reactive to preventive maintenance. Schedule automated work orders for machinery service to minimize costly downtime."
  },
  {
    title: "Production Line Quality Control",
    icon: PackageCheck,
    description: "Digitize QA inspections on the factory floor. Capture defect data instantly and generate compliance reports for ISO standards."
  },
  {
    title: "Real-Time Shop Floor Visibility",
    icon: Factory,
    description: "Monitor workflow status and labor allocation in real-time. Connect floor supervisors with management for faster decision-making."
  }
];

const MANUFACTURING_TIMELINE = [
  {
    label: 'Daily start-up',
    copy: 'Operators complete machine warm-up checklists, log torque settings, and document safety gates before the first unit rolls.',
    keywords: 'digital work orders · torque specs · safety attestations',
  },
  {
    label: 'In-line quality',
    copy: 'Inline inspectors capture photos, defects, and SPC readings that instantly notify supervisors and feed quality dashboards.',
    keywords: 'SPC sampling · defect tagging · escalation rules',
  },
  {
    label: 'Shift handoff',
    copy: 'Space Field compiles downtime reasons, maintenance tickets, and finished goods counts so the next crew starts with context.',
    keywords: 'downtime codes · MTTR tracking · shift notes',
  },
];

const MANUFACTURING_STORIES = [
  {
    title: 'Automotive suppliers',
    description: 'Tier 1 suppliers sync torque audits, battery pack inspections, and containment actions directly back to plant leadership.',
    bullets: ['Launch containment plans in minutes', 'Share PPAP-ready evidence packs', 'Sync with PLM + MES change notices'],
  },
  {
    title: 'Consumer packaged goods',
    description: 'CPG plants digitize sanitation, allergen changeover, and packaging verification to keep audit trails airtight.',
    bullets: ['Color-coded allergen verification', 'Photo proof for label compliance', 'Instant alerts when CCPs drift'],
  },
];

const MANUFACTURING_FAQ = [
  {
    question: 'Does Space Field integrate with CMMS or MES tools?',
    answer: 'Yes. We push and pull data from systems like Fiix, Infor, and SAP so technicians never re-key tasks or downtime codes.',
  },
  {
    question: 'How are operators trained on mobile checklists?',
    answer: 'Create role-based playlists with video, QR codes at each cell, and multilingual prompts so teams adopt the process in days.',
  },
  {
    question: 'Can we prove compliance to auditors?',
    answer: 'Every action is timestamped with user, machine, and lot details—exportable to ISO, FDA, or customer-ready packets instantly.',
  },
];

const MANUFACTURING_CTAS = [
  { label: 'Browse inspection templates', href: '/resources/templates' },
  { label: 'Connect to maintenance stack', href: '/solutions/inspection-software' },
  { label: 'Secure plants with Azure SSO', href: '/solutions/azure-sso' },
];

const ManufacturingSection = () => {
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
            <path d="M 0 40 L 40 0" stroke="currentColor" strokeWidth="1" className="text-slate-900"/>
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
                 <span className="text-sm font-bold text-indigo-700 uppercase tracking-wider">Manufacturing Industry</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Optimize Operations with <br/>
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  Intelligent Workflows
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Space Field streamlines manufacturing logistics and maintenance. Empower your workforce with mobile tools to track assets, report hazards, and ensure production targets are met safely.
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
                  See Manufacturing Demo <ArrowRight className="w-5 h-5" />
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
                   src="/images/manufac.jpg"
                   alt="Manufacturing Plant Operations with Space Field"
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

      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {MANUFACTURING_TIMELINE.map((step) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-indigo-700">
                <Workflow className="h-5 w-5" />
                <p className="text-xs font-bold uppercase tracking-[0.3em]">{step.label}</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">{step.copy}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">{step.keywords}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {MANUFACTURING_STORIES.map((story) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-indigo-700">
                <ShieldCheck className="h-6 w-6" />
                <p className="text-sm font-bold uppercase tracking-widest">{story.title}</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">{story.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {story.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-indigo-500" />
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
            className="rounded-[32px] border border-indigo-200 bg-indigo-50/70 p-8"
          >
            <div className="flex items-center gap-3 text-indigo-700">
              <CircuitBoard className="h-6 w-6" />
              <p className="text-sm font-bold uppercase tracking-widest">Manufacturing FAQ</p>
            </div>
            <div className="mt-4 space-y-4">
              {MANUFACTURING_FAQ.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-indigo-100 bg-white/80 p-4">
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
              <p className="text-sm font-bold uppercase tracking-widest">Connect your plants</p>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Give maintenance, quality, and IT teams a unified workspace that ties inspection data to enterprise systems with zero duplicate entry.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {MANUFACTURING_CTAS.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
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

export default ManufacturingSection;