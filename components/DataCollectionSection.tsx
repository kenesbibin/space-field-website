"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileSpreadsheet, MessageSquare, Share2, ArrowUpRight, Globe2 } from 'lucide-react';

const CARDS = [
  {
    title: 'Field data collection apps',
    description:
      'Launch field data collection apps, data capture apps, data entry apps, data collection programs, inspection form builders, offline forms apps, and software to collect data that sync even when bandwidth disappears.',
    icon: Database,
    bullets: [
      'Fulcrum app alternative + fulcrum data collection compatibility',
      'Create a dashboard in Google Sheets & Google Sheets dashboard automations',
      'Go paperless with inspection forms, safety checklist apps, and QR code audits',
      'Construction job estimator app + estimation app submissions synced instantly',
    ],
  },
  {
    title: 'Industry-ready libraries',
    description:
      'Deliver customer data collection software, restaurant inventory app free flows, restaurant food inventory apps, free restaurant inventory app deployments, HOA apps, portable toilet software, and process server apps from one console.',
    icon: FileSpreadsheet,
    bullets: [
      'Property inspection template + property inspection report template',
      'Restaurant inventory app free + restaurant food inventory app for franchise groups',
      'HOA app + customer data collection software + portable toilet software service requests',
    ],
  },
  {
    title: 'Feature request management',
    description:
      'Collect structured feedback with feature request software, feature request tools, feature request management software, and feature request management workflows that tie straight into engineering backlogs.',
    icon: MessageSquare,
    bullets: [
      'Centralize feature request software + feature request tool submissions',
      'Route feature request management to tickets, change logs, and release notes',
      'Show leadership the ROI with templates and dashboards',
    ],
  },
];

const DATA_STORIES = [
  {
    headline: 'Restaurant and hospitality groups',
    body:
      'Inventory counts, temperature logs, and feature request software now share the same data capture layer. Operators see which sites need coaching without digging through attachments.',
    bullets: [
      'Menu changes trigger automatic data schema updates.',
      'Vendors submit requests through branded forms tied to contracts.',
      'Finance reviews exception reports with photo evidence inline.',
    ],
  },
  {
    headline: 'Field services networks',
    body:
      'Portable toilet software orders, HOA apps, and process server apps inherit the same routing rules so dispatch can keep SLAs without stacking point tools.',
    bullets: [
      'Customer updates sync to GIS views and crew calendars.',
      'Offline-ready inspection playgrounds keep proof attached to every task.',
      'Leaders replay journeys to see where approvals stalled.',
    ],
  },
  {
    headline: 'Construction + facilities',
    body:
      'Property inspection report templates, Fulcrum data collection replacements, and feature request management boards align under Azure AD SSO so IT and operations finally share context.',
    bullets: [
      'Every template references a single source-of-truth schema.',
      'Share read-only views with owners, AHJs, and insurers.',
      'Automations drop results into BI tools and Copilot prompts.',
    ],
  },
];

const WORKFLOW = [
  {
    title: 'Model your schema',
    detail: 'Mirror Fulcrum data collection projects, inspection forms, and restaurant inventory app free SKUs so migrations stay painless.',
  },
  {
    title: 'Deploy offline-first apps',
    detail: 'Publish field data collection apps, feature request software, and HOA apps with QR codes, validation, and conditional logic.',
  },
  {
    title: 'Sync to BI + automations',
    detail: 'Create dashboards in Google Sheets, pipe events into Snowflake, and push alerts to Teams or Slack instantly.',
  },
];

const CTA_LINKS = [
  { label: 'See template kits', href: '/resources/templates' },
  { label: 'Compare Fulcrum pricing', href: '/compare/fulcrum' },
  { label: 'Explore inspection software', href: '/solutions/inspection-software' },
];

const DataCollectionSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-100 overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/70 border border-emerald-200 px-4 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700">
            Data Collection Suite
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Data collection, Fulcrum app alternatives, and feature requests in one platform
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Replace spreadsheets with offline-ready forms. Whether you are comparing Fulcrum pricing, deploying customer data collection software, or routing feature request management, SpaceCapture keeps everything synced to Google Sheets dashboards and BI tools.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <card.icon className="h-10 w-10 text-emerald-600" />
                <p className="text-xl font-bold text-slate-900">{card.title}</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">{card.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
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
          className="mt-12 rounded-3xl border border-dashed border-emerald-300 bg-white/80 p-6"
        >
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-emerald-600">Automations</p>
          <p className="mt-2 text-base text-slate-700">
            Push field data to create dashboards in Google Sheets, sync to BI stacks, or feed restaurant inventory app free SKUs. Every offline form, feature request software submission, and process server app workflow stays in one audit trail.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-[32px] border border-emerald-200 bg-white/90 p-8"
        >
          <div className="flex items-center gap-3 text-emerald-600">
            <Globe2 className="h-6 w-6" />
            <p className="text-sm font-bold uppercase tracking-widest">Field storybook</p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {DATA_STORIES.map((story) => (
              <div key={story.headline} className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
                <p className="text-base font-semibold text-slate-900">{story.headline}</p>
                <p className="mt-2 text-sm text-slate-600">{story.body}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {story.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
            className="rounded-[32px] border border-emerald-200 bg-white/80 p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 text-emerald-700">
              <Share2 className="h-6 w-6" />
              <p className="text-sm font-bold uppercase tracking-widest">Migration workflow</p>
            </div>
            <div className="mt-5 space-y-5">
              {WORKFLOW.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">Step {index + 1}</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{step.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{step.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[32px] border border-emerald-200 bg-white/90 p-8 shadow-sm"
          >
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-emerald-600">Next steps</p>
            <p className="mt-3 text-lg font-black text-slate-900">
              Connect data collection programs with Azure AD SSO, inspection templates, and fleet maintenance dashboards in minutes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {CTA_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-emerald-200 opacity-40 blur-[120px]" />
      <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-cyan-200 opacity-40 blur-[120px]" />
    </section>
  );
};

export default DataCollectionSection;
