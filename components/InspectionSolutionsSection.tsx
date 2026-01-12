"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Building2, Flame, Shield, Gauge, CheckCircle2, Sparkles } from 'lucide-react';

const INSPECTION_PILLARS = [
  {
    title: 'Construction & Building Inspection Software',
    body:
      'Deploy construction inspection software, building inspection software, construction site inspection software, building inspection apps Australia, and roof inspection software with offline-first checklists.',
    icon: Building2,
  },
  {
    title: 'Fire, Safety & Equipment Apps',
    body:
      'Standardize fire extinguisher inspection software, fire alarm inspection apps, fire protection inspection software, equipment inspection software, forklift checklist booklets, and safety checklist templates in one audit trail.',
    icon: Flame,
  },
  {
    title: 'Vehicle & Property Inspection Forms',
    body:
      'Launch driver vehicle inspection report apps, car inspection apps, truck inspection apps, property inspection templates, and property inspection report templates that sync directly to dashboards.',
    icon: ClipboardList,
  },
];

const INSPECTION_VALUE_POINTS = [
  'Pre-load SOPs, inspection forms, and safety checklists so every crew follows the same playbook.',
  'Escalate failed steps into work orders, facility tickets, or fleet maintenance tasks with photos and signatures.',
  'Deliver branded PDF reports and live dashboards to owners, AHJs, and insurance partners without extra formatting.',
];

const INSPECTION_STORIES = [
  {
    badge: 'Fire protection',
    title: 'Rolling up extinguisher, alarm, and sprinkler crews',
    body:
      'A regional fire firm merged three aging inspection apps into SpaceCapture so extinguisher tags, alarm resets, and sprinkler walkthroughs land in one chain of custody. Supervisors see photos, signatures, and CAPA evidence as soon as trucks leave a site.',
    takeaways: [
      'Technicians capture NFPA fields with built-in rules.',
      'Failed steps auto-create follow-up work with deadlines.',
      'Archive-ready PDFs trigger instantly for AHJ review.',
    ],
  },
  {
    badge: 'Fleet & DOT',
    title: 'Daily DVIR and property inspections from the same workspace',
    body:
      'Driver vehicle inspection report app flows sit next to facility walkthroughs and property inspection template libraries. Leads monitor defect recovery while property teams schedule re-inspections without touching spreadsheets.',
    takeaways: [
      'Shared evidence library keeps photo context intact.',
      'Approvals route to fleet or facilities automatically.',
      'Guest links let owners and insurers watch remediation.',
    ],
  },
  {
    badge: 'Industrial QA',
    title: 'Roofing, manufacturing, and warehouse audits in sync',
    body:
      'Quality teams pulled roof inspection report template free docs, forklift checklist booklets, and job hazard analysis software steps into one playbook. Local crews still work offline; HQ gets live dashboards.',
    takeaways: [
      'Templates adapt per trade without duplicating data sets.',
      'Visual diff views show when SOPs change and why.',
      'Stakeholders receive narrative recap emails instead of spreadsheets.',
    ],
  },
];

const INSPECTION_WORKFLOW = [
  {
    title: 'Blueprint + templates',
    copy: 'Load inspection forms, safety checklist templates, forklift checklist booklets, and property inspection report templates into your workspace.',
  },
  {
    title: 'Automation + routing',
    copy: 'Trigger work orders, restaurant inventory app free replenishments, and facility notifications when defects are logged.',
  },
  {
    title: 'Analytics + proof',
    copy: 'Push evidence to Google Sheets dashboards, BI tools, and customer portals for auditors and insurance partners.',
  },
];

const INSPECTION_FAQ = [
  {
    q: 'Do you integrate with Fulcrum data collection projects?',
    a: 'Yes. We import Fulcrum app schemas, sync data to new inspection apps, and maintain offline support while adding Azure AD SSO.',
  },
  {
    q: 'Can crews stay offline?',
    a: 'All inspection forms cache photos, annotations, and signatures. Sync resumes the moment service returns.',
  },
  {
    q: 'How do you track CAPA follow-ups?',
    a: 'Every failed inspection step triggers automated tasks, reminders, and templated reports so leadership sees closure proof.',
  },
];

const InspectionSolutionsSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-100 overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100/60 border border-purple-200 px-4 py-1 text-xs font-bold uppercase tracking-widest text-purple-700">
              <Shield className="h-4 w-4" />
              Inspection Stack
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Inspection software for construction, fire protection, vehicles, and property portfolios
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              Replace siloed inspection apps with a unified platform. SpaceCapture combines site inspection software, inspection form builders, quality inspection apps, offline forms apps, and data collection programs so every roof inspection report template, safety checklist app, or equipment inspection app shares the same workflow, photos, and signatures.
            </p>

            <div className="space-y-4">
              {INSPECTION_PILLARS.map((pillar) => (
                <div key={pillar.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900">{pillar.title}</p>
                    <p className="text-sm text-slate-600 mt-1">{pillar.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-purple-200 bg-white/80 p-5">
              <p className="text-sm font-bold uppercase tracking-widest text-purple-600">What teams ship</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {INSPECTION_VALUE_POINTS.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[32px] border border-white/60 bg-white/90 shadow-2xl p-8">
              <div className="grid gap-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Fire & Safety</p>
                  <p className="mt-2 text-lg font-black text-slate-900">Fire extinguisher inspection software + fire alarm inspection app ready</p>
                  <p className="mt-2 text-sm text-slate-600">Push recurring maintenance, QR code scans, and instant PDF exports.</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Vehicle & Fleet</p>
                  <p className="mt-2 text-lg font-black text-slate-900">Driver vehicle inspection report app + truck inspection app in sync</p>
                  <p className="mt-2 text-sm text-slate-600">Attach tire, mileage, and defect evidence directly to fleet dashboards.</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Property & Roofing</p>
                  <p className="mt-2 text-lg font-black text-slate-900">Roof inspection report template free + property inspection template library</p>
                  <p className="mt-2 text-sm text-slate-600">Export branded PDFs, share Google Sheets dashboards, and keep building inspection software evidence accessible.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {INSPECTION_STORIES.map((story) => (
            <div key={story.title} className="rounded-3xl border border-purple-200 bg-white/95 p-6 shadow-sm flex flex-col">
              <div className="flex items-center gap-2 text-purple-600">
                <Sparkles className="h-4 w-4" />
                <p className="text-xs font-bold uppercase tracking-[0.3em]">{story.badge}</p>
              </div>
              <p className="mt-2 text-lg font-semibold text-slate-900">{story.title}</p>
              <p className="mt-2 text-sm text-slate-600 flex-1">{story.body}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {story.takeaways.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] border border-purple-200 bg-white/80 p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 text-purple-700">
              <Gauge className="h-6 w-6" />
              <p className="text-sm font-bold uppercase tracking-widest">Workflow timeline</p>
            </div>
            <div className="mt-5 space-y-5">
              {INSPECTION_WORKFLOW.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-purple-100 bg-purple-50/70 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-500">Stage {index + 1}</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{step.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{step.copy}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[32px] border border-purple-200 bg-purple-50/70 p-8"
          >
            <div className="flex items-center gap-3 text-purple-700">
              <CheckCircle2 className="h-6 w-6" />
              <p className="text-sm font-bold uppercase tracking-widest">FAQ</p>
            </div>
            <div className="mt-4 space-y-4">
              {INSPECTION_FAQ.map((item) => (
                <div key={item.q} className="rounded-2xl bg-white/80 p-4 border border-purple-100">
                  <p className="text-base font-semibold text-slate-900">{item.q}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.a}</p>
                </div>
              ))}
            </div>
            <a
              href="/solutions/inspection-software"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-purple-700"
            >
              See inspection templates
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute -top-32 -right-10 h-80 w-80 rounded-full bg-purple-200 opacity-40 blur-[120px]" />
      <div className="absolute -bottom-32 -left-10 h-80 w-80 rounded-full bg-blue-200 opacity-40 blur-[120px]" />
    </section>
  );
};

export default InspectionSolutionsSection;
