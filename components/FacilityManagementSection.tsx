"use client"

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Building2, ClipboardList, Wrench, ArrowRight, CalendarRange, ShieldCheck, Users, Link as LinkIcon } from 'lucide-react';

const FACILITY_FEATURES = [
  {
    title: "Work Order Management",
    icon: ClipboardList,
    description: "Streamline tenant requests, plumbing work order templates, electrical work order templates, portable toilet software requests, and HOA app escalations in one console. Assign tasks instantly and track SLAs with digital signatures."
  },
  {
    title: "Preventive Maintenance",
    icon: Wrench,
    description: "Schedule HVAC, elevator, fire extinguisher inspection software runs, QR code equipment maintenance, and heavy equipment maintenance app routines. Auto-generate inspection forms and job safety analysis steps to extend asset lifecycles."
  },
  {
    title: "Space & Asset Tracking",
    icon: Building2,
    description: "Gain visibility into every equipment tracking app record, equipment inventory app audit, property inspection report template, and building inspection software checklist across your portfolio."
  }
];

const FACILITY_TIMELINE = [
  {
    phase: 'Intake & triage',
    detail: 'Capture tenant requests, restaurant inventory app free submissions, and HOA app escalations with photos, labels, and SLA timers.',
    keywords: 'work order software · tenant portal · KPI-ready data',
  },
  {
    phase: 'Dispatch & inspect',
    detail: 'Trigger building inspection software flows, property inspection template checklists, and equipment inspection software runs per asset tag.',
    keywords: 'inspection forms · QR codes · preventive maintenance',
  },
  {
    phase: 'Report & handoff',
    detail: 'Compile branded property inspection report templates and customer data collection software exports for compliance or billing.',
    keywords: 'PDF packets · BI dashboards · owner portals',
  },
];

const FACILITY_PROOFS = [
  {
    title: 'Compliance + sustainability',
    description: 'Fire extinguisher inspection software, job hazard analysis steps, and ESG checklists stay versioned so audits never stall.',
    bullets: ['Automatic NFPA and OSHA evidence exports', 'Attach permits and test results to each building record', 'Share proof with insurers or AHJs in one click'],
  },
  {
    title: 'Vendor + contractor alignment',
    description: 'Vendors log work through guest links, while facility managers monitor turnaround, cost, and SLA breach risk in real time.',
    bullets: ['Invite unlimited subcontractors via Access Control', 'Track plumbing work order template status per trade', 'Push updates to Teams, email, or SMS instantly'],
  },
];

const FACILITY_FAQ = [
  {
    question: 'Can we customize building inspection software checklists?',
    answer: 'Yes. Drag-and-drop fields, conditional logic, photo markups, and signatures live inside every inspection template—no code required.',
  },
  {
    question: 'Do offline facilities lose data?',
    answer: 'No. Equipment tracking app entries, property inspection report templates, and QR scans buffer on device until connectivity returns.',
  },
  {
    question: 'How do we onboard new vendors securely?',
    answer: 'Leverage Azure AD SSO or time-boxed guest links so contractors authenticate once and inherit the right facility scopes automatically.',
  },
];

const FACILITY_CTAS = [
  { label: 'Download facility templates', href: '/resources/templates' },
  { label: 'Explore inspection software', href: '/solutions/inspection-software' },
  { label: 'Secure vendors with Azure SSO', href: '/solutions/azure-sso' },
];

const FacilityManagementSection = () => {
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
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-100 overflow-hidden">
      
      {/* Background: Architectural Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="building-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 0 40 L 40 40 L 40 0" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#building-grid)" />
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
                 <div className="h-1 w-12 bg-cyan-500 rounded-full"></div>
                 <span className="text-sm font-bold text-cyan-700 uppercase tracking-wider">Facility Management</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Smarter Buildings & Inspection Software, <br/>
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Superior Operations
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Space Field unifies facility operations into one intuitive platform. Empower your teams to manage building inspection software, property inspection templates, equipment inspection apps, facility inspection forms, restaurant food inventory apps, and customer data collection software from anywhere.
              </motion.p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {FACILITY_FEATURES.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-[-8px]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-600 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-cyan-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
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
              <a href="/book-a-demo" className="inline-flex items-center gap-2 text-cyan-700 font-bold hover:gap-3 transition-all">
                See Facility & Inspection Demo <ArrowRight className="w-5 h-5" />
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
                   src="/images/facility.jpg" // Ensure this image exists
                   alt="Modern Facility Management Operations"
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
            <div className="absolute -z-10 -bottom-[-20px] -left-[-20px] w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-[60px] opacity-40"></div>
          </motion.div>

        </div>
      </div>

      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {FACILITY_TIMELINE.map((step) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-cyan-700">
                <CalendarRange className="h-5 w-5" />
                <p className="text-xs font-bold uppercase tracking-[0.3em]">{step.phase}</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">{step.detail}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">{step.keywords}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {FACILITY_PROOFS.map((proof) => (
            <motion.div
              key={proof.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-cyan-700">
                <ShieldCheck className="h-6 w-6" />
                <p className="text-sm font-bold uppercase tracking-widest">{proof.title}</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">{proof.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {proof.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-cyan-500" />
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
            className="rounded-[32px] border border-cyan-200 bg-cyan-50/70 p-8"
          >
            <div className="flex items-center gap-3 text-cyan-700">
              <Users className="h-6 w-6" />
              <p className="text-sm font-bold uppercase tracking-widest">Facility FAQ</p>
            </div>
            <div className="mt-4 space-y-4">
              {FACILITY_FAQ.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-cyan-100 bg-white/80 p-4">
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
              <p className="text-sm font-bold uppercase tracking-widest">Connect the stack</p>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Pair facility operations with inspection workflows, Azure AD SSO security, and data collection programs to keep every location in sync.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {FACILITY_CTAS.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-cyan-700 hover:bg-cyan-50"
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

export default FacilityManagementSection;