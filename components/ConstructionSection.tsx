"use client"

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { HardHat, ClipboardCheck, Truck, ArrowRight, Ruler, Building2, Layers, CheckCircle2, Link as LinkIcon } from 'lucide-react';

const CONSTRUCTION_FEATURES = [
  {
    title: "Real-Time Site Progress",
    icon: HardHat,
    description: "Track daily logs, labor hours, and material usage instantly. Keep stakeholders aligned with live updates from the ground."
  },
  {
    title: "Digital QC & Safety Inspections",
    icon: ClipboardCheck,
    description: "Digitize your snag lists and safety audits. Capture photos, annotate issues, and assign fixes directly to subcontractors."
  },
  {
    title: "Fleet & Asset Management",
    icon: Truck,
    description: "Monitor heavy equipment usage and location. Prevent theft and optimize deployment schedules to reduce downtime."
  }
];

const DELIVERY_STEPS = [
  {
    stage: 'Bid & Preconstruction',
    focus: 'Import scope of work templates, site inspection software checklists, and subcontractor bids into one command center.',
    keywords: 'construction inspection software · takeoff evidence · scope approvals',
  },
  {
    stage: 'Build & Monitor',
    focus: 'Issue daily reports, building inspection software tasks, and safety observations from tablets even when jobsites are offline.',
    keywords: 'site inspection app · daily log automation · contractor QA proofs',
  },
  {
    stage: 'Closeout & Warranty',
    focus: 'Hand over punch list photos, equipment tracking app histories, and warranty forms without chasing PDFs across systems.',
    keywords: 'punch list evidence · asset turnover · owner portals',
  },
];

const PROOF_POINTS = [
  {
    title: 'Compliance vault',
    detail: 'Store OSHA observations, NFPA safety checklists, and inspection signatures next to each project so auditors see the full chain of custody.',
    bullets: ['Fire extinguisher inspection software exports', 'Job hazard analysis attachments', 'E-signature capture for closeouts'],
  },
  {
    title: 'Subcontractor coordination',
    detail: 'Trade partners log time, equipment, and RFIs directly in SpaceCapture, keeping GC leadership informed without stitching spreadsheets.',
    bullets: ['Invite unlimited subcontractor viewers', 'Assign tasks via construction field app links', 'Track turnaround per trade package'],
  },
];

const CONSTRUCTION_FAQ = [
  {
    question: 'Can we run construction inspection software offline?',
    answer: 'Yes. Daily reports, safety checklists, photo markups, and signatures buffer on device and sync once coverage returns, so remote sites keep moving.',
  },
  {
    question: 'How do you handle owner-ready documentation?',
    answer: 'Every site inspection app submission feeds a live dashboard and branded PDF kits, eliminating copy/paste between route sheets, Google Drive, or plan rooms.',
  },
  {
    question: 'Can subcontractors use existing credentials?',
    answer: 'SpaceCapture supports Azure AD SSO, Okta, and guest access links so subcontractors log in with the same identity they already use for other GC systems.',
  },
];

const CTA_LINKS = [
  { label: 'Inspection software playbook', href: '/solutions/inspection-software' },
  { label: 'Construction template kits', href: '/resources/templates' },
  { label: 'Azure AD SSO rollout guide', href: '/solutions/azure-sso' },
];

const ConstructionSection = () => {
  // 2. Add ': Variants' type here
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // 3. Add ': Variants' type here
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">
      
      {/* Background: Subtle Blueprint Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="blueprint-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-900"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
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
                 <div className="h-1 w-12 bg-orange-500 rounded-full"></div>
                 <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">Construction Industry</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Build Smarter with <br/>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Digital Precision
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Space Field bridges the gap between the construction site and the boardroom. Eliminate paperwork, reduce rework, and deliver projects on schedule with our specialized construction module.
              </motion.p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {CONSTRUCTION_FEATURES.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-[-8px]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
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
               <a href="/book-a-demo" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:gap-3 transition-all">
                  See Construction Demo <ArrowRight className="w-5 h-5" />
               </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Image with Professional Frame (Clean, No Popup) */}
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
                   src="/images/construction.jpg" // Ensure this image exists in your public/images folder
                   alt="Construction Site Management with Space Field"
                   fill
                   className="object-cover hover:scale-105 transition-transform duration-700"
                   priority
                 />
                 
                 {/* Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
               </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
          </motion.div>

        </div>
      </div>
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {DELIVERY_STEPS.map((step) => (
            <motion.div
              key={step.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-blue-700">
                <Ruler className="h-5 w-5" />
                <p className="text-xs font-bold uppercase tracking-[0.3em]">{step.stage}</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">{step.focus}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">{step.keywords}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {PROOF_POINTS.map((proof) => (
            <motion.div
              key={proof.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-blue-700">
                <Building2 className="h-6 w-6" />
                <p className="text-sm font-bold uppercase tracking-widest">{proof.title}</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">{proof.detail}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {proof.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
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
            className="rounded-[32px] border border-blue-200 bg-blue-50/70 p-8"
          >
            <div className="flex items-center gap-3 text-blue-700">
              <Layers className="h-6 w-6" />
              <p className="text-sm font-bold uppercase tracking-widest">Construction FAQ</p>
            </div>
            <div className="mt-4 space-y-4">
              {CONSTRUCTION_FAQ.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-blue-100 bg-white/80 p-4">
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
              <p className="text-sm font-bold uppercase tracking-widest">Connected playbooks</p>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Keep estimators, supers, and owners aligned by pairing this industry kit with the rest of the SpaceCapture stack.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {CTA_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50"
                >
                  {link.label}
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

export default ConstructionSection;