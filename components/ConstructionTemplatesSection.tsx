"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ClipboardCheck, PenTool, Layers3 } from 'lucide-react';

const TEMPLATE_SETS = [
  {
    title: 'Scopes & proposals',
    description:
      'Deliver contractor scope of work templates, construction scope of work templates, project scope of work templates, scope of work template free downloads, and scope of work template PDF packages that clients can sign instantly.',
    icon: FileText,
    items: [
      'Scope of work template free',
      'Scope of work template PDF',
      'Project scope of work template',
      'Construction scope of work template',
    ],
  },
  {
    title: 'Work orders & inspections',
    description:
      'Standardize plumbing work order templates, plumbing work orders, plumbing inspection report templates, plumbing report templates, electrical work order templates, and portable toilet software checklists.',
    icon: ClipboardCheck,
    items: [
      'Plumbing work order template',
      'Plumbing work order',
      'Plumbing inspection report template',
      'Plumbing report template',
      'Electrical work order template',
      'Portable toilet software work orders',
    ],
  },
  {
    title: 'Safety & inspection reports',
    description:
      'Publish safety checklist templates, job hazard analysis software outputs, job safety analysis apps, forklift checklist booklets, roof inspection report template free docs, and property inspection report templates.',
    icon: PenTool,
    items: [
      'Safety checklist template',
      'Job hazard analysis software',
      'Job safety analysis app',
      'Forklift checklist booklet',
      'Roof inspection report template free',
      'Property inspection template',
      'Property inspection report template',
    ],
  },
];

const TEMPLATE_STORIES = [
  {
    title: 'Design-build collaboration',
    detail:
      'Estimators, preconstruction, and operations live in the same template stacks so scope changes ripple through inspection apps, payroll forms, and customer portals instantly.',
    actions: [
      'Mark clauses as “client view” or “internal only”.',
      'Sync highlights to proposal microsites without exporting.',
      'Audit log shows who edited language and why.',
    ],
  },
  {
    title: 'Service + maintenance teams',
    detail:
      'Plumbing work orders, electrical inspection forms, and portable toilet software tickets reuse the same paragraphs so techs stop copying text from old PDFs.',
    actions: [
      'QR codes open the right template for the asset in front of you.',
      'Technicians attach annotated photos that land in the final PDF automatically.',
      'Dispatch can insert surcharge language from a pre-approved library.',
    ],
  },
  {
    title: 'Owner + AHJ handoffs',
    detail:
      'Roof inspection report template free packets, CAPA evidence, and job hazard analysis software snapshots assemble themselves so owners never chase paperwork.',
    actions: [
      'Publish read-only viewers with expiration dates.',
      'Comment back-and-forth without breaking revision control.',
      'Store signed copies next to the originating checklist.',
    ],
  },
];

const PLAYBOOK_STEPS = [
  {
    title: 'Collect specs + uploads',
    description:
      'Import every legacy scope of work template, plumbing work order template, or property inspection report template. Our team tags inputs so estimators, inspectors, and superintendents always grab the right PDF.',
  },
  {
    title: 'Co-brand + automate',
    description:
      'Layer logos, conditional sections, and signature blocks. Outputs sync to inspection apps, construction management software, payroll time clock apps, and customer data collection software instantly.',
  },
  {
    title: 'Launch & measure',
    description:
      'Share templates by trade, region, or subcontractor. Track adoption, download counts, and time saved compared to manual Google Docs formatting.',
  },
];

const RESOURCE_LINKS = [
  { label: 'Download form + template library', href: '/resources/templates' },
  { label: 'Explore inspection software playbooks', href: '/solutions/inspection-software' },
  { label: 'Compare Fulcrum data collection vs SpaceCapture', href: '/compare/fulcrum' },
];

const ConstructionTemplatesSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-orange-50 to-rose-100 overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-100/70 border border-rose-200 px-4 py-1 text-xs font-bold uppercase tracking-widest text-rose-700">
            Templates & Forms
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Templates, reports, and forms for every construction discipline
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Ship contractor-ready PDFs, branded proposals, and inspection kits without formatting headaches. Every template syncs to inspection apps, time tracking software, and customer portals for a modern go paperless experience.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TEMPLATE_SETS.map((set) => (
            <motion.div
              key={set.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <set.icon className="h-10 w-10 text-rose-600" />
                <p className="text-xl font-bold text-slate-900">{set.title}</p>
              </div>
              <p className="mt-3 text-sm text-slate-600">{set.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {set.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
                    <span>{item}</span>
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
          className="mt-16 rounded-3xl border border-rose-200 bg-white/90 p-8"
        >
          <div className="flex items-center gap-2 text-rose-600">
            <Layers3 className="h-6 w-6" />
            <p className="text-sm font-bold uppercase tracking-widest">Story-driven workflows</p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {TEMPLATE_STORIES.map((story) => (
              <div key={story.title} className="rounded-2xl border border-rose-100 bg-rose-50/60 p-4">
                <p className="text-base font-semibold text-slate-900">{story.title}</p>
                <p className="mt-2 text-sm text-slate-600">{story.detail}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {story.actions.map((action) => (
                    <li key={action} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PLAYBOOK_STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm"
            >
              <p className="text-sm font-bold uppercase tracking-widest text-rose-500">Step {index + 1}</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">{step.title}</p>
              <p className="mt-3 text-sm text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border border-dashed border-rose-200 bg-white/80 p-8"
        >
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-rose-500">Need inspiration?</p>
          <p className="mt-3 text-lg font-black text-slate-900">
            Pair templates with inspection software, time tracking software, and restaurant inventory app free workflows so operations teams stay in sync.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {RESOURCE_LINKS.map((resource) => (
              <a
                key={resource.label}
                href={resource.href}
                className="inline-flex items-center gap-2 rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-50"
              >
                {resource.label}
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute -top-24 -right-12 h-80 w-80 rounded-full bg-rose-200 opacity-40 blur-[120px]" />
      <div className="absolute -bottom-24 -left-12 h-80 w-80 rounded-full bg-orange-200 opacity-40 blur-[120px]" />
    </section>
  );
};

export default ConstructionTemplatesSection;
