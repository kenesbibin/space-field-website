"use client"

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { RadioTower, Network, Activity, ArrowRight, Route, ShieldCheck, Server, Link as LinkIcon } from 'lucide-react';

const TELECOM_FEATURES = [
  {
    title: "Network Rollout & Maintenance",
    icon: Network,
    description: "Accelerate fiber and 5G deployment. Manage site surveys, installation tracking, and preventative maintenance schedules in real-time."
  },
  {
    title: "Tower & Infrastructure Audits",
    icon: RadioTower,
    description: "Conduct rigorous structural inspections. Capture geotagged evidence of tower conditions and automate compliance reporting."
  },
  {
    title: "Field Technician Dispatch",
    icon: Activity,
    description: "Optimize route planning for widespread teams. Reduce response times for outages and ensure the right tech arrives with the right parts."
  }
];

const TELECOM_TIMELINE = [
  {
    label: 'Site acquisition',
    copy: 'Capture RF studies, lease milestones, and zoning approvals with photos and municipal documents in one workspace.',
    keywords: 'RF surveys · permitting · lease trackers',
  },
  {
    label: 'Build & integrate',
    copy: 'Coordinate tower climbs, fiber splicing, and power turn-ups with checklists that sync back to NOC + construction managers.',
    keywords: 'method of procedure · punch lists · crew safety',
  },
  {
    label: 'Optimize & assure',
    copy: 'Feed drive-test notes, outage inspections, and SLAs into dashboards so ops can respond before customers notice.',
    keywords: 'drive tests · SLA triggers · customer comms',
  },
];

const TELECOM_STORIES = [
  {
    title: 'Rural broadband cooperatives',
    description: 'Co-ops digitize pole surveys, make-ready work, and fiber drops to keep grant milestones green.',
    bullets: ['Attach GIS layers to every survey', 'Auto-notify residents before crews arrive', 'Generate progress packets for funders'],
  },
  {
    title: 'National tower companies',
    description: 'Towercos manage inspections, tenant upgrades, and safety audits with centralized evidence for carriers.',
    bullets: ['Store RF compliance reports', 'Track climb certifications by crew', 'Share punch lists with carriers in real time'],
  },
];

const TELECOM_FAQ = [
  {
    question: 'Can we integrate alarms from our NOC tools?',
    answer: 'Yes. Space Field ingests OSS/NOC tickets and spins up field tasks so technicians see full context before rolling trucks.',
  },
  {
    question: 'How do techs work in low-signal regions?',
    answer: 'Technicians can run checklists, capture media, and close jobs offline; everything syncs automatically when connectivity returns.',
  },
  {
    question: 'Is data secure for carrier requirements?',
    answer: 'We offer SSO, role-based permissions, and audit logs aligned with carrier security policies and ISO standards.',
  },
];

const TELECOM_CTAS = [
  { label: 'Download telecom templates', href: '/resources/templates' },
  { label: 'Automate tower inspections', href: '/solutions/inspection-software' },
  { label: 'Secure crews with Azure SSO', href: '/solutions/azure-sso' },
];

const TelecommunicationSection = () => {
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
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 overflow-hidden">
      
      {/* Background: Digital Network Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="tech-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" className="text-indigo-900" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
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
                 <span className="text-sm font-bold text-cyan-700 uppercase tracking-wider">Telecommunications</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Connect the World with <br/>
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Seamless Operations
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Space Field empowers telecom operators to manage vast infrastructure networks with ease. From tower climbs to fiber splicing, keep your field teams synced and your network online.
              </motion.p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {TELECOM_FEATURES.map((feature, index) => (
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
                  See Telecom Demo <ArrowRight className="w-5 h-5" />
               </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Image with Landscape Styling (Clean, No Popup) */}
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
                   src="/images/tele.jpg" // Ensure this image exists
                   alt="Telecommunications Infrastructure Management"
                   fill
                   className="object-cover hover:scale-105 transition-transform duration-700"
                   priority
                 />
                 
                 {/* Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
               </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -z-10 top-[-20px] -right-[-20px] w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-[60px] opacity-40"></div>
            <div className="absolute -z-10 -bottom-[-20px] -left-[-20px] w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-[60px] opacity-40"></div>
          </motion.div>

        </div>
      </div>

      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TELECOM_TIMELINE.map((step) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-cyan-700">
                <Route className="h-5 w-5" />
                <p className="text-xs font-bold uppercase tracking-[0.3em]">{step.label}</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">{step.copy}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">{step.keywords}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {TELECOM_STORIES.map((story) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-cyan-700">
                <ShieldCheck className="h-6 w-6" />
                <p className="text-sm font-bold uppercase tracking-widest">{story.title}</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">{story.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {story.bullets.map((bullet) => (
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
              <Server className="h-6 w-6" />
              <p className="text-sm font-bold uppercase tracking-widest">Telecom FAQ</p>
            </div>
            <div className="mt-4 space-y-4">
              {TELECOM_FAQ.map((faq) => (
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
              <p className="text-sm font-bold uppercase tracking-widest">Connect ops + IT</p>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Tie field data to OSS/BSS stacks, identity, and reporting so NOC, engineering, and vendor crews share one source of truth.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {TELECOM_CTAS.map((cta) => (
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

export default TelecommunicationSection;