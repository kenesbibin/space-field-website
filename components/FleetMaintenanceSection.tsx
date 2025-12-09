"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Gauge, Fuel, ClipboardCheck, Activity, AlertTriangle, Compass } from 'lucide-react';

const FLEET_FEATURES = [
  {
    title: 'Fleet maintenance app + fleet vehicle maintenance app',
    detail:
      'Plan inspections, PM schedules, driver vehicle inspection reports, and fuel logs across light-duty trucks, rail equipment, and service vans.',
    icon: Truck,
  },
  {
    title: 'Fleet inspection app + truck inspection app',
    detail:
      'Collect photos, torque specs, and signatures in seconds. Every truck inspection app submission syncs to compliance dashboards.',
    icon: ClipboardCheck,
  },
  {
    title: 'Heavy equipment maintenance app + equipment tracking app',
    detail:
      'Monitor heavy machinery usage, QR code equipment maintenance, and geofenced asset moves from one equipment inventory app.',
    icon: Gauge,
  },
];

const FLEET_STORIES = [
  {
    title: 'Renewable energy fleets',
    copy:
      'Wind and solar maintenance crews rely on rugged tablets with offline DVIRs, torque spec prompts, and QR-coded toolkits. Supervisors replay every submission like a playlist, making it easy to show auditors where defects were resolved.',
    insights: [
      'Mileage, fuel, and hydraulic data feed a single readiness board.',
      'Crews receive contextual coaching when patterns repeat.',
      'Dispatch can pause unsafe assets with one toggle.',
    ],
  },
  {
    title: 'Heavy civil contractors',
    copy:
      'Pavers, cranes, and lowboys used to live in separate systems. Now the equipment inventory app, fleet mileage tracker, and inspection form builder all show the same custody log so planners know what is safe to move.',
    insights: [
      'Stage-based PM plans roll out by yard or geography.',
      'Mechanics capture photo evidence without retyping asset IDs.',
      'Project managers subscribe to the backlog they care about.',
    ],
  },
  {
    title: 'Municipal services',
    copy:
      'Utilities and public works teams blend driver vehicle inspection report apps with portable generator inspections, hydrant flushing, and snow route prep. Leadership can tell which crews are mission-ready before storms hit.',
    insights: [
      'Offline-first checklists keep responders productive in remote zones.',
      'Notifications mirror union rules and local callout schedules.',
      'GIS links show defect clusters so capital teams prioritize repairs.',
    ],
  },
];

const WORKFLOW_STEPS = [
  {
    title: 'Consolidate data sources',
    text: 'Ingest GPS, telematics, fuel cards, and equipment inspection app history into one fleet maintenance app.',
  },
  {
    title: 'Automate inspections + PM',
    text: 'Schedule truck inspection app tasks, send QR-code driven checklists, and alert supervisors when evidence is missing.',
  },
  {
    title: 'Report on readiness',
    text: 'Publish fleet mileage tracker dashboards, OSHA compliance summaries, and repair backlogs to leadership.',
  },
];

const FLEET_FAQ = [
  {
    q: 'Can mechanics work offline?',
    a: 'Yes. Every fleet inspection app caches torque specs, photos, and signatures so remote yards still log DVIRs.',
  },
  {
    q: 'How do alerts work?',
    a: 'Fuel, odometer, and defect trends trigger automated Slack, Teams, or SMS alerts plus follow-up work orders.',
  },
  {
    q: 'Do you replace our EAM?',
    a: 'We integrate with existing ERPs or CMMS tools; you keep master data while SpaceCapture drives inspections and evidence capture.',
  },
];

const FleetMaintenanceSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-blue-200">
              Fleet Stack
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Fleet maintenance, inspection, and mileage tracking without spreadsheets
            </h1>

            <p className="text-lg text-slate-200 leading-relaxed">
              Replace siloed fleet maintenance apps with a single system. Track fleet mileage trackers, fleet vehicle maintenance apps, fleet inspection apps, heavy equipment maintenance apps, equipment inspection apps, equipment inventory apps, free daily vehicle inspection apps, and QR code equipment maintenance side-by-side. Every tire photo, oil sample, and DVIR instantly updates your construction field report app.
            </p>

            <div className="space-y-4">
              {FLEET_FEATURES.map((feature) => (
                <div key={feature.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-blue-200">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-white">{feature.title}</p>
                    <p className="text-sm text-slate-200 mt-1">{feature.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-slate-200">
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <p className="font-bold text-white">Fleet mileage tracker</p>
                <p className="mt-1">GPS + odometer + telematics in one feed.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <p className="font-bold text-white">Equipment inventory app</p>
                <p className="mt-1">Assign barcodes, QR codes, and custody logs.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <p className="font-bold text-white">Fleet inspection app</p>
                <p className="mt-1">DVIR, truck inspection app, and defect tracking combined.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <p className="font-bold text-white">Vehicle inspection app</p>
                <p className="mt-1">Car inspection app plus driver coaching in one tap.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[32px] border border-white/20 bg-white/5 p-8 shadow-2xl">
              <div className="rounded-2xl border border-white/20 bg-slate-900/60 p-6">
                <div className="flex items-center gap-3 text-blue-200">
                  <Fuel className="h-6 w-6" />
                  <p className="text-lg font-bold">Fleet health snapshot</p>
                </div>
                <p className="mt-4 text-sm text-slate-200">
                  Fuel, mileage, tire depth, torque checks, and inspection forms from mobile crews sync to your construction reporting app, quality inspection software, and maintenance backlog in seconds.
                </p>
                <div className="mt-6 grid gap-3 text-sm">
                  <div className="rounded-xl bg-white/10 px-4 py-3">
                    Fleet maintenance app · fleet vehicle maintenance app · heavy equipment maintenance app
                  </div>
                  <div className="rounded-xl bg-white/10 px-4 py-3">
                    Equipment inspection app · equipment tracking app · equipment inventory app
                  </div>
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
          {FLEET_STORIES.map((story) => (
            <div key={story.title} className="rounded-3xl border border-white/20 bg-white/10 p-6">
              <div className="flex items-center gap-2 text-blue-200">
                <Compass className="h-4 w-4" />
                <p className="text-xs font-bold uppercase tracking-[0.3em]">Field story</p>
              </div>
              <p className="mt-2 text-lg font-semibold text-white">{story.title}</p>
              <p className="mt-2 text-sm text-slate-200">{story.copy}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {story.insights.map((insight) => (
                  <li key={insight} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-200" />
                    <span>{insight}</span>
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
            className="rounded-[32px] border border-white/20 bg-white/5 p-8"
          >
            <div className="flex items-center gap-3 text-blue-200">
              <Activity className="h-6 w-6" />
              <p className="text-sm font-bold uppercase tracking-widest">Operations timeline</p>
            </div>
            <div className="mt-5 space-y-5">
              {WORKFLOW_STEPS.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-200">Phase {index + 1}</p>
                  <p className="mt-1 text-lg font-semibold text-white">{step.title}</p>
                  <p className="mt-2 text-sm text-slate-200">{step.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[32px] border border-white/20 bg-white/10 p-8"
          >
            <div className="flex items-center gap-3 text-blue-200">
              <AlertTriangle className="h-6 w-6" />
              <p className="text-sm font-bold uppercase tracking-widest">Fleet FAQ</p>
            </div>
            <div className="mt-4 space-y-4">
              {FLEET_FAQ.map((item) => (
                <div key={item.q} className="rounded-2xl border border-white/20 bg-white/5 p-4">
                  <p className="text-base font-semibold text-white">{item.q}</p>
                  <p className="mt-2 text-sm text-slate-200">{item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute -top-40 -right-10 h-96 w-96 rounded-full bg-blue-700 opacity-40 blur-[140px]" />
      <div className="absolute -bottom-40 -left-10 h-96 w-96 rounded-full bg-indigo-900 opacity-40 blur-[140px]" />
    </section>
  );
};

export default FleetMaintenanceSection;
