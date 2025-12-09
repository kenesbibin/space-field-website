"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { GitCompare, CheckCircle2, Sparkles, Table, ClipboardList, Workflow } from 'lucide-react';

const DIFFERENCES = [
  {
    title: 'Fulcrum app alternative',
    detail: 'SpaceCapture mirrors your Fulcrum app schema, syncs historical Fulcrum data collection projects, and layers Azure AD SSO for enterprise rollouts.',
  },
  {
    title: 'Pricing clarity',
    detail: 'Move from Fulcrum pricing tiers to predictable per-seat billing with unlimited inspection forms, fleet maintenance apps, and offline form submissions.',
  },
  {
    title: 'Workflow breadth',
    detail: 'Go beyond Fulcrum data collection by adding feature request software, time tracking, construction reporting apps, and fleet maintenance dashboards in one login.',
  },
];

const TRANSITION_PLAYLIST = [
  {
    title: 'Catalogue & sync',
    detail:
      'We mirror Fulcrum app schemas, choice lists, automation hooks, and map layers so users do not touch a blank slate.',
  },
  {
    title: 'Layer identity + routing',
    detail:
      'Azure AD SSO, Okta federation, and SCIM policies wrap every inspection app, feature request workflow, and fleet dashboard before go-live.',
  },
  {
    title: 'Pilot + expand',
    detail:
      'Trades run side-by-side pilots, validate exports, and then cut over region by region with live coaching from our engineers.',
  },
];

const COMPARISON_TABLE = [
  {
    category: 'Identity & security',
    fulcrum: 'OAuth + API keys',
    spacecapture: 'Azure AD SSO, Okta federation, SCIM, conditional access reporting.',
  },
  {
    category: 'Workflows',
    fulcrum: 'Data collection apps + maps',
    spacecapture:
      'Inspection apps, feature request software, time tracking software, fleet maintenance dashboards, restaurant inventory app free flows.',
  },
  {
    category: 'Templates + reporting',
    fulcrum: 'Form builder + CSV exports',
    spacecapture: 'Property inspection template libraries, scope of work template PDFs, Google Sheets dashboards, BI connectors.',
  },
  {
    category: 'Pricing',
    fulcrum: 'Per app/per project tiers',
    spacecapture: 'Predictable per-seat pricing with unlimited offline forms + storage.',
  },
];

const MIGRATION_STEPS = [
  'Snapshot Fulcrum app schemas, data, and automation rules.',
  'Rebuild forms with Azure AD SSO, inspection form builders, and workflow routing.',
  'Run parallel pilots, validate exports, and cut over by trade or geography.',
];

const COMPARISON_FAQ = [
  {
    q: 'Can we keep existing Fulcrum projects online during migration?',
    a: 'Yes. We sync Fulcrum data collection updates until SpaceCapture is fully validated, so there is zero downtime.',
  },
  {
    q: 'How do you price enterprise rollouts?',
    a: 'License by active user with unlimited apps, templates, and storage. Optional managed services cover migration and admin training.',
  },
  {
    q: 'What analytics do we gain?',
    a: 'Out-of-the-box dashboards for inspection pass rates, fleet readiness, time tracking adoption, and feature request backlog health.',
  },
];

const FulcrumComparisonSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-100 overflow-hidden">
      <div className="container mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/70 border border-blue-200 px-4 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">
            Fulcrum vs SpaceCapture
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            A modern Fulcrum data collection alternative built for Azure SSO
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Carry over Fulcrum app projects, Fulcrum data collection schemas, and Fulcrum pricing expectations. Then extend into inspection apps, feature request management, fleet maintenance apps, and construction management software without juggling tools.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {DIFFERENCES.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 text-blue-600">
                <CheckCircle2 className="h-6 w-6" />
                <p className="text-lg font-bold text-slate-900">{item.title}</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-blue-200 bg-white/90 p-6"
        >
          <div className="flex items-center gap-3 text-blue-700">
            <Workflow className="h-6 w-6" />
            <p className="text-sm font-bold uppercase tracking-widest">Transition playlist</p>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {TRANSITION_PLAYLIST.map((stage, index) => (
              <div key={stage.title} className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">Stage {index + 1}</p>
                <p className="mt-1 text-base font-semibold text-slate-900">{stage.title}</p>
                <p className="mt-2 text-sm text-slate-600">{stage.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-dashed border-blue-200 bg-white/80 p-6"
        >
          <div className="flex flex-col gap-4 text-sm text-slate-600">
            <div className="flex gap-3 items-center">
              <GitCompare className="h-5 w-5 text-blue-600" />
              <span>Import Fulcrum data collection projects, share links, and repeatable templates instantly.</span>
            </div>
            <div className="flex gap-3 items-center">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <span>Bundle inspection app workflows with Azure AD SSO, feature request software, time tracking apps, and fleet maintenance dashboards.</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-blue-200 bg-white p-6 shadow-sm"
        >
          <div className="flex items-center gap-3 text-blue-700">
            <Table className="h-6 w-6" />
            <p className="text-sm font-bold uppercase tracking-widest">Side-by-side comparison</p>
          </div>
          <div className="mt-4 divide-y divide-slate-200">
            {COMPARISON_TABLE.map((row) => (
              <div key={row.category} className="grid gap-4 py-4 lg:grid-cols-3">
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">{row.category}</p>
                <p className="text-sm text-slate-600">{row.fulcrum}</p>
                <p className="text-sm text-slate-900 font-semibold">{row.spacecapture}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] border border-blue-200 bg-blue-50/70 p-8"
          >
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-blue-500">Migration plan</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {MIGRATION_STEPS.map((step) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[32px] border border-blue-200 bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 text-blue-700">
              <ClipboardList className="h-6 w-6" />
              <p className="text-sm font-bold uppercase tracking-widest">FAQ</p>
            </div>
            <div className="mt-4 space-y-4">
              {COMPARISON_FAQ.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                  <p className="text-base font-semibold text-slate-900">{faq.q}</p>
                  <p className="mt-2 text-sm text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
            <a
              href="/request-a-demo"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
            >
              Plan your Fulcrum migration
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute -top-24 -right-12 h-72 w-72 rounded-full bg-blue-200 opacity-40 blur-[120px]" />
      <div className="absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-gray-200 opacity-40 blur-[120px]" />
    </section>
  );
};

export default FulcrumComparisonSection;
