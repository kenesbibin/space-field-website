"use client"

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Zap, Activity, Map, ArrowRight, Route, ShieldCheck, Cpu, Link as LinkIcon } from 'lucide-react';

const UTILITIES_FEATURES = [
  {
    title: "Grid Maintenance & Inspections",
    icon: Activity,
    description: "Digitize substation inspections and line patrols. Capture thermal imagery and equipment readings directly in the field to prevent failures."
  },
  {
    title: "Smart Meter Deployment",
    icon: Zap,
    description: "Streamline rollout projects for smart infrastructure. Track installation progress, verify connectivity, and manage inventory in real-time."
  },
  {
    title: "Outage Response & Dispatch",
    icon: Map,
    description: "Coordinate storm response teams instantly. Visualize outages on a live map and dispatch the nearest qualified crew to restore power faster."
  }
];

const UTILITIES_TIMELINE = [
  {
    label: 'Grid planning',
    copy: 'Line engineers capture LiDAR, vegetation, and asset risk scores to prioritize patrols before storm season hits.',
    keywords: 'risk scoring · GIS layers · vegetation',
  },
  {
    label: 'Field execution',
    copy: 'Crews run substation, pole, and meter checklists offline with barcode scans, torque specs, and thermal photos.',
    keywords: 'barcode scans · IR uploads · offline ready',
  },
  {
    label: 'Customer restoration',
    copy: 'Outage findings sync to OMS/CIS platforms so customer teams push updates and invoices without copying data.',
    keywords: 'OMS sync · CIS notes · automated comms',
  },
];

const UTILITIES_STORIES = [
  {
    title: 'Investor-owned utilities',
    description: 'IOUs roll out wildfire mitigation programs, documenting every patrol, trim, and equipment upgrade for regulators.',
    bullets: ['Attach CPUC-ready forms to each patrol', 'Alert contractors when hazards surface', 'Track PSPS readiness milestones'],
  },
  {
    title: 'Municipal + co-op utilities',
    description: 'City and cooperative utilities manage AMI rollouts, water meter swaps, and customer appointments from one view.',
    bullets: ['Blend electric + water workflows', 'Auto-remind residents of appointments', 'Share status dashboards with city councils'],
  },
];

const UTILITIES_FAQ = [
  {
    question: 'Does Space Field connect to OMS/SCADA tools?',
    answer: 'Yes. We integrate with platforms like Oracle, Milsoft, and Survalent so outages, crews, and assets stay in sync.',
  },
  {
    question: 'How do inspectors work during storms?',
    answer: 'Crews run damage assessments offline, capture GPS + photos, and sync automatically when cell coverage returns.',
  },
  {
    question: 'Can we enforce safety + compliance?',
    answer: 'Role-based workflows require PPE checks, switching orders, and supervisor approvals before risky steps proceed.',
  },
];

const UTILITIES_CTAS = [
  { label: 'Download utility templates', href: '/resources/templates' },
  { label: 'Digitize inspections + switching', href: '/solutions/inspection-software' },
  { label: 'Secure crews with Azure SSO', href: '/solutions/azure-sso' },
];

const UtilitiesSection = () => {
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
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-100 overflow-hidden">
      
      {/* Background: Circuit/Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="circuit-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 10 10 H 40 V 40 H 10 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-900"/>
            <circle cx="25" cy="25" r="2" fill="currentColor" className="text-purple-900"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-grid)" />
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
                 <div className="h-1 w-12 bg-purple-500 rounded-full"></div>
                 <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">Utilities & Energy</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Empower the Grid with <br/>
                <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Smart Field Ops
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Space Field modernizes utility operations. From routine line maintenance to emergency storm response, ensure your infrastructure stays resilient and your workforce stays safe.
              </motion.p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {UTILITIES_FEATURES.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-[-8px]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
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
               <a href="/book-a-demo" className="inline-flex items-center gap-2 text-purple-700 font-bold hover:gap-3 transition-all">
                  See Utility Solutions <ArrowRight className="w-5 h-5" />
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
                   src="/images/utilities.jpg" // Ensure this image exists
                   alt="Utility Field Operations and Grid Maintenance"
                   fill
                   className="object-cover hover:scale-105 transition-transform duration-700"
                   priority
                 />
                 
                 {/* Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
               </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -z-10 top-[-20px] -right-[-20px] w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-[60px] opacity-40"></div>
            <div className="absolute -z-10 -bottom-[-20px] -left-[-20px] w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-[60px] opacity-40"></div>
          </motion.div>

        </div>
      </div>

      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {UTILITIES_TIMELINE.map((step) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-purple-700">
                <Route className="h-5 w-5" />
                <p className="text-xs font-bold uppercase tracking-[0.3em]">{step.label}</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">{step.copy}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">{step.keywords}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {UTILITIES_STORIES.map((story) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-purple-700">
                <ShieldCheck className="h-6 w-6" />
                <p className="text-sm font-bold uppercase tracking-widest">{story.title}</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">{story.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {story.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-500" />
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
            className="rounded-[32px] border border-purple-200 bg-purple-50/70 p-8"
          >
            <div className="flex items-center gap-3 text-purple-700">
              <Cpu className="h-6 w-6" />
              <p className="text-sm font-bold uppercase tracking-widest">Utilities FAQ</p>
            </div>
            <div className="mt-4 space-y-4">
              {UTILITIES_FAQ.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-purple-100 bg-white/80 p-4">
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
              <p className="text-sm font-bold uppercase tracking-widest">Connect grid + IT</p>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Link OMS, CIS, and security tooling with Space Field so dispatch, engineering, and customer teams see the same source of truth.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {UTILITIES_CTAS.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-purple-700 hover:bg-purple-50"
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

export default UtilitiesSection;