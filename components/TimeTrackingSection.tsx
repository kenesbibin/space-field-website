"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Smartphone, Users, Target, Activity, ClipboardList, Quote } from 'lucide-react';

const TIME_CAPABILITIES = [
  {
    title: 'Time clock + field tracking',
    description: 'Give crews a fast, GPS-aware punch experience across phone, kiosk, or tablet modes.',
    icon: Clock,
    bullets: [
      'Geofenced clock-ins confirm teams are on the right jobsite.',
      'Crew leads can tag equipment, cost codes, and notes during clock-out.',
      'Offline caching keeps records intact even when service drops.',
    ],
  },
  {
    title: 'Timesheets & payroll approvals',
    description: 'Supervisors approve digital timesheets while payroll exports stay in sync with ERPs.',
    icon: Smartphone,
    bullets: [
      'Daily and weekly approval flows on desktop or mobile.',
      'Rules handle overtime, union requirements, and meal penalties.',
      'Approved hours flow to ADP, Paycom, QuickBooks, CMiC, and more.',
    ],
  },
  {
    title: 'Scheduling & production control',
    description: 'Tie labor plans to actual hours so project managers catch budget drift early.',
    icon: Users,
    bullets: [
      'Push assignments from construction schedules directly to crews.',
      'Compare planned vs. actual hours by phase, cost code, or crew.',
      'Send alerts when spend or utilization crosses thresholds.',
    ],
  },
  {
    title: 'Safety, toolbox talks, reporting',
    description: 'Connect hours to safety programs, toolbox talks, and daily reporting packages.',
    icon: Target,
    bullets: [
      'Attach toolbox agendas and attendee signatures to the daily log.',
      'Link labor to job hazard analysis checklists and observations.',
      'Generate PDF or Excel compliance packets in one click.',
    ],
  },
];

const TIME_STORIES = [
  {
    quote:
      'We no longer screenshot timecards for approvals. Foremen record context, safety notes, and job cost codes in one pass, and payroll sees it minutes later.',
    author: 'Operations lead, mechanical contractor',
  },
  {
    quote:
      'Daily toolbox talks, labor approvals, and change-order notes share the same evidence trail, so clients accept extras faster.',
    author: 'Project executive, industrial builder',
  },
  {
    quote:
      'Finance finally trusts the numbers because the audit pack explains every edit, approval, and export automatically.',
    author: 'Controller, regional GC',
  },
];

const PAIN_POINTS = [
  {
    title: 'Messy spreadsheets',
    detail: 'Replace manual time cards and online time sheet copy/paste with audit-ready exports and approvals.',
  },
  {
    title: 'Crew adoption dips',
    detail: 'Simple clock in and out app workflows in English + Spanish keep compliance above 95%.',
  },
  {
    title: 'Disconnected reports',
    detail: 'Tie hours to job hazard analysis software, construction scheduling app tasks, and cost codes automatically.',
  },
  {
    title: 'Payroll delays',
    detail: 'Push approved timesheets to payroll time clock app integrations without CSV shuffling.',
  },
];

const TIME_FAQ = [
  {
    q: 'Does GPS tracking work offline?',
    a: 'Yes. Employee time clock app entries buffer on-device and sync when coverage returns, including breadcrumb trails.',
  },
  {
    q: 'How granular are cost codes?',
    a: 'Capture cost codes, phases, and equipment hours so project managers forecast confidently.',
  },
  {
    q: 'Can we enforce approvals?',
    a: 'Supervisors receive daily push + email reminders to review hours before payroll locks the period.',
  },
];

const TimeTrackingSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-white via-blue-50 to-slate-100 overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/70 border border-blue-200 px-4 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">
              Time & Payroll Stack
            </div>
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Time tracking software for crews, contractors, and payroll teams
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              SpaceCapture unifies field time capture, scheduling, payroll, and compliance. Crews clock in from any device (even offline), supervisors approve daily logs in minutes, and finance sees live cost codes tied to safety, production, and change-order recovery.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {TIME_CAPABILITIES.map((capability) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <capability.icon className="h-10 w-10 text-blue-600" />
                  <p className="text-xl font-bold text-slate-900">{capability.title}</p>
                </div>
                <p className="mt-3 text-sm text-slate-600">{capability.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {capability.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-dashed border-blue-200 bg-blue-50/70 p-6"
          >
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-blue-500">Integrations</p>
            <p className="mt-2 text-lg font-black text-slate-900">
              Connect to payroll and scheduling stacks like ADP, Paylocity, Paychex, CMiC, Vista, Procore, and Microsoft 365 so labor data flows in real time.
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Approved timecards, cost codes, and compliance notes export automatically—no CSV cleanup, no re-keying, just audit-ready backups.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {TIME_STORIES.map((story) => (
              <div key={story.author} className="rounded-3xl border border-blue-200 bg-white p-6 shadow-sm flex flex-col">
                <Quote className="h-6 w-6 text-blue-500" />
                <p className="mt-3 text-sm text-slate-600 flex-1">{story.quote}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-500">{story.author}</p>
              </div>
            ))}
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[32px] border border-blue-200 bg-white/90 p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-blue-700">
                <Activity className="h-6 w-6" />
                <p className="text-sm font-bold uppercase tracking-widest">Why teams switch</p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {PAIN_POINTS.map((pain) => (
                  <div key={pain.title} className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                    <p className="text-base font-semibold text-slate-900">{pain.title}</p>
                    <p className="mt-2 text-sm text-slate-600">{pain.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[32px] border border-blue-200 bg-blue-50/70 p-8"
            >
              <div className="flex items-center gap-3 text-blue-700">
                <ClipboardList className="h-6 w-6" />
                <p className="text-sm font-bold uppercase tracking-widest">FAQ</p>
              </div>
              <div className="mt-4 space-y-4">
                {TIME_FAQ.map((item) => (
                  <div key={item.q} className="rounded-2xl bg-white/80 p-4 border border-blue-100">
                    <p className="text-base font-semibold text-slate-900">{item.q}</p>
                    <p className="mt-2 text-sm text-slate-600">{item.a}</p>
                  </div>
                ))}
              </div>
              <a
                href="/request-a-demo"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
              >
                Review payroll + scheduling handoff
                <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute -top-32 -right-16 h-96 w-96 rounded-full bg-blue-200 opacity-40 blur-[140px]" />
      <div className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-indigo-200 opacity-40 blur-[140px]" />
    </section>
  );
};

export default TimeTrackingSection;
