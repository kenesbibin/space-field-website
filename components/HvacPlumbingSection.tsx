"use client"

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ThermometerSnowflake, Droplets, ClipboardList, ArrowRight, Route, Briefcase, Wrench, Link as LinkIcon } from 'lucide-react';

const HVAC_FEATURES = [
  {
    title: "Service Call Dispatching",
    icon: ClipboardList,
    description: "Assign jobs to the nearest technician with the right skills. Track job status from 'En Route' to 'Completed' in real-time."
  },
  {
    title: "Equipment History & Audits",
    icon: ThermometerSnowflake,
    description: "Access detailed service history for every HVAC unit. Scan QR codes to instantly retrieve manuals, warranty info, and past repair logs."
  },
  {
    title: "Plumbing Inspection Reports",
    icon: Droplets,
    description: "Generate professional inspection reports on-site. Capture photos of leaks or piping issues and get customer sign-off digitally."
  }
];

const HVAC_JOURNEY = [
  {
    label: 'Call intake',
    copy: 'Capture service calls, maintenance contracts, and emergency requests with photos, floor plans, and preferred time windows.',
    keywords: 'service dispatch · customer portal · SLA timers',
  },
  {
    label: 'Technician workflow',
    copy: 'Technicians follow HVAC inspection forms, plumbing report templates, and safety checklists with offline support and barcode scans.',
    keywords: 'QR codes · parts usage · digital signatures',
  },
  {
    label: 'Invoice + handoff',
    copy: 'Push timesheets, parts, and photos to accounting or customer portals instantly—no clipboards, no double entry.',
    keywords: 'field invoicing · ERP export · customer updates',
  },
];

const HVAC_STORIES = [
  {
    title: 'Healthcare facilities',
    description: 'Hospital maintenance teams rely on offline HVAC inspection forms that document compliance for every AHU and isolation room.',
    bullets: ['Track filter changes with QR stickers', 'Generate reporting for Joint Commission audits', 'Alert staff when thresholds violate setpoints'],
  },
  {
    title: 'Multifamily plumbing',
    description: 'Property managers bundle plumbing work order templates, leak reports, and resident notifications within one timeline.',
    bullets: ['Automated tenant updates via SMS/email', 'Photo-rich reports for insurance claims', 'Batch schedule riser maintenance'],
  },
];

const HVAC_FAQ = [
  {
    question: 'Do techs need connectivity to log HVAC inspections?',
    answer: 'No. Every HVAC inspection form and plumbing report template works offline; sync resumes automatically once devices reconnect.',
  },
  {
    question: 'Can we link to inventory and purchasing?',
    answer: 'SpaceCapture logs labor, equipment, and parts, then exports data to ERPs like CMiC, Vista, or QuickBooks with no CSV cleanup.',
  },
  {
    question: 'How do customers sign off?',
    answer: 'Technicians capture digital signatures, invoices, and photo proof on-site, emailing branded PDFs immediately after completion.',
  },
];

const HVAC_CTAS = [
  { label: 'View inspection playbook', href: '/solutions/inspection-software' },
  { label: 'Secure crews with Azure SSO', href: '/solutions/azure-sso' },
  { label: 'Download service templates', href: '/resources/templates' },
];

const HvacPlumbingSection = () => {
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
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-cyan-50 via-teal-50 to-slate-100 overflow-hidden">
      
      {/* Background: Pipe/Flow Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="flow-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 0 30 Q 15 10 30 30 T 60 30" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-900"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#flow-grid)" />
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
                 <div className="h-1 w-12 bg-teal-500 rounded-full"></div>
                 <span className="text-sm font-bold text-teal-700 uppercase tracking-wider">HVAC & Plumbing</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Master Your Service <br/>
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Workflows
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Space Field helps HVAC and plumbing businesses dispatch faster and fix smarter. Manage recurring maintenance contracts, track parts inventory, and invoice customers right from the job site.
              </motion.p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {HVAC_FEATURES.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-[-8px]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
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
               <a href="/book-a-demo" className="inline-flex items-center gap-2 text-teal-700 font-bold hover:gap-3 transition-all">
                  See HVAC Demo <ArrowRight className="w-5 h-5" />
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
                   src="/images/plumbing.jpg" // Ensure this image exists
                   alt="HVAC Technician and Plumbing Services"
                   fill
                   className="object-cover hover:scale-105 transition-transform duration-700"
                   priority
                 />
                 
                 {/* Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
               </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -z-10 top-[-20px] -right-[-20px] w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-[60px] opacity-40"></div>
            <div className="absolute -z-10 -bottom-[-20px] -left-[-20px] w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-[60px] opacity-40"></div>
          </motion.div>

        </div>
      </div>

      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {HVAC_JOURNEY.map((step) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-teal-700">
                <Route className="h-5 w-5" />
                <p className="text-xs font-bold uppercase tracking-[0.3em]">{step.label}</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">{step.copy}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">{step.keywords}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {HVAC_STORIES.map((story) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-teal-700">
                <Briefcase className="h-6 w-6" />
                <p className="text-sm font-bold uppercase tracking-widest">{story.title}</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">{story.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {story.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-teal-500" />
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
            className="rounded-[32px] border border-teal-200 bg-teal-50/70 p-8"
          >
            <div className="flex items-center gap-3 text-teal-700">
              <Wrench className="h-6 w-6" />
              <p className="text-sm font-bold uppercase tracking-widest">HVAC & plumbing FAQ</p>
            </div>
            <div className="mt-4 space-y-4">
              {HVAC_FAQ.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-teal-100 bg-white/80 p-4">
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
              <p className="text-sm font-bold uppercase tracking-widest">Connect your stack</p>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Keep dispatch, inspection, and security teams aligned by pairing HVAC + plumbing workflows with SpaceCapture solutions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {HVAC_CTAS.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-50"
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

export default HvacPlumbingSection;