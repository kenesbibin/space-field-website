"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, KeyRound, GitBranch, CheckCircle2, Shield, Layers, FileText, Radio } from 'lucide-react';

const SSO_FEATURES = [
  {
    title: "Azure AD SSO & Microsoft SSO",
    description:
      "Authenticate every inspection app, fleet maintenance workflow, and dashboard with Azure SSO, Azure AD SSO, Azure Active Directory SSO, Microsoft single sign on, and Microsoft Azure single sign on without extra engineering.",
    icon: ShieldCheck,
  },
  {
    title: "Azure AD SSO Setup + Integration",
    description:
      "Guided Azure AD SSO setup, Azure AD single sign on mapping, Azure SSO integration, and Azure SSO integration with custom claims so contractors inherit the right scopes instantly.",
    icon: Lock,
  },
  {
    title: "Okta + Azure AD Federation",
    description:
      "Run Okta Azure AD integration, Okta Azure, and Okta and Azure AD sync for partner companies while honoring SCIM, conditional access, and enforcement across mobile and offline forms apps.",
    icon: GitBranch,
  },
];

const TRUST_BADGES = [
  'Azure AD SSO',
  'Azure Single Sign On',
  'Azure AD Single Sign On',
  'Azure AD SSO Setup',
  'Azure SSO Integration',
  'Azure Active Directory SSO',
  'Microsoft Azure SSO',
  'Microsoft Single Sign On',
  'Okta Azure AD Integration',
];

const SECURITY_STORIES = [
  {
    badge: 'Utility build-out',
    title: 'Rotating JV contractors on a single login policy',
    copy:
      'We layered Azure AD SSO, Okta Azure connections, and SCIM provisioning over a utility contractor program so every inspector, estimator, and fleet mechanic inherited the right scopes without juggling extra apps.',
    highlights: [
      'Blueprinted guest access and MFA posture for crews that change weekly.',
      'Mirrored conditional access for rugged tablets, kiosk stations, and offline sync.',
      'Handed auditors a narrative report with control IDs mapped to Azure logs.',
    ],
  },
  {
    badge: 'National GC playbook',
    title: 'From legacy form builders to a single trust layer',
    copy:
      'A national GC rolled inspection apps, fleet trackers, and mobile data capture tools into SpaceCapture while our team rewired Azure single sign on, Microsoft single sign on, and Okta federation in parallel.',
    highlights: [
      'Lifted existing Fulcrum projects without forcing a re-platform.',
      'Documented approvals, SCIM mappings, and backup policies for every business unit.',
      'Enabled staged cutovers so leaders could review login health in real time.',
    ],
  },
];

const EVIDENCE_PACK = {
  title: 'Control center dossier',
  detail:
    'Exportable evidence packs link Azure AD SSO setup decisions to runbooks, incident response steps, and SCIM change logs so compliance teams skip screenshot hunting.',
};

const SECURITY_PROOFS = [
  {
    title: 'Live posture radio',
    detail:
      'Executives watch conditional access drift, MFA enrollment, and offline inspection form sync from a single feed rather than parsing separate dashboards.',
  },
  {
    title: 'Contractor governance',
    detail:
      'Guest users, seasonal inspectors, and partner mechanics inherit the same revocation standards with signed playbacks for owner-operators.',
  },
  {
    title: 'Embedded change reviews',
    detail:
      'Program managers annotate every Azure SSO integration update so handoffs between IT and operations teams stay documented.',
  },
];

const WORKFLOW_STEPS = [
  {
    title: 'Discovery + posture review',
    text: 'Map Azure single sign on policies, guest access, and contractor identity lifecycles so inspection forms, feature request software, and fleet maintenance apps stay aligned.',
  },
  {
    title: 'Pilot + federation',
    text: 'Configure Azure SSO integration, Azure AD single sign on, Okta Azure AD integration, and SCIM construction groups with real data.',
  },
  {
    title: 'Rollout + monitoring',
    text: 'Ship dashboards for login health, MFA adoption, and audit-ready exports for Microsoft single sign on stakeholders.',
  },
];

const FAQS = [
  {
    question: 'Do you support hybrid Azure AD / Okta stacks?',
    answer:
      'Yes. We federate Azure AD SSO tenants with Okta Azure for partners or subcontractors, enforce SCIM, and keep custom field claims synced to inspection software and fleet maintenance workflows.',
  },
  {
    question: 'How fast can we ship Azure AD SSO setup?',
    answer:
      'Most construction owners see Azure SSO integration in less than two weeks, including QA sandboxes, conditional access testing, and Microsoft Azure SSO documentation for auditors.',
  },
  {
    question: 'What about legacy form builders?',
    answer:
      'We wrap older inspection form builders, Fulcrum data collection projects, and offline apps with Azure AD SSO setup and token refresh flows so teams avoid replatforming.',
  },
];

const AzureSsoSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/60 border border-blue-200 px-4 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">
              <KeyRound className="h-4 w-4" />
              Azure Identity Control
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Azure AD SSO + Okta integration for field, fleet, and inspection software
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              Launch Azure SSO, Azure AD SSO, Azure single sign on, Azure AD single sign on, Azure Active Directory SSO, Microsoft single sign on, and Microsoft Azure SSO in one certified workflow. Our team hardens every inspection form builder, fleet maintenance app, or construction reporting tool with Azure SSO integration, Azure AD SSO setup, and Okta Azure AD federation so auditors see a consistent chain of custody.
            </p>

            <div className="grid gap-4">
              {SSO_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900">{feature.title}</p>
                    <p className="text-sm text-slate-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-semibold uppercase tracking-wide rounded-full border border-blue-200 bg-white px-3 py-1 text-blue-700"
                >
                  {badge}
                </span>
              ))}
            </div>

            <a
              href="/request-a-demo"
              className="inline-flex items-center gap-2 text-blue-700 font-bold hover:gap-3 transition-all"
            >
              Book an Azure SSO Demo
              <ArrowRightIcon />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[32px] border border-white/60 bg-white/80 shadow-2xl p-6">
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-white shadow-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6" />
                  <p className="text-lg font-bold">Azure AD SSO Verified</p>
                </div>
                <p className="mt-4 text-sm text-blue-50">
                  SpaceCapture ships with conditional access policies, SCIM provisioning, multi-tenant Azure AD apps, and Okta Azure AD integration blueprints tailored for inspection forms, fleet mileage trackers, and field data capture apps.
                </p>
                <div className="mt-6 grid gap-3 text-sm">
                  <div className="rounded-xl bg-white/10 px-4 py-3">
                    Azure AD SSO setup · Azure SSO integration · Azure AD single sign on
                  </div>
                  <div className="rounded-xl bg-white/10 px-4 py-3">
                    Okta Azure · Okta Azure AD integration · Okta and Azure AD trust
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
          className="grid gap-6 lg:grid-cols-2"
        >
          {SECURITY_STORIES.map((story) => (
            <div key={story.title} className="rounded-[30px] border border-blue-200 bg-white/95 p-6 shadow-sm">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">{story.badge}</span>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{story.title}</p>
              <p className="mt-3 text-sm text-slate-600">{story.copy}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {story.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
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
            className="rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 text-blue-700">
              <Layers className="h-6 w-6" />
              <p className="text-sm font-bold uppercase tracking-widest">Azure rollout playbook</p>
            </div>
            <div className="mt-5 space-y-5">
              {WORKFLOW_STEPS.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">Phase {index + 1}</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{step.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[32px] border border-blue-200 bg-blue-50/70 p-8 space-y-6"
          >
            <div className="flex items-center gap-3 text-blue-700">
              <Shield className="h-6 w-6" />
              <p className="text-sm font-bold uppercase tracking-widest">Security FAQ</p>
            </div>
            <div className="mt-4 space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.question} className="rounded-2xl bg-white/80 p-4 border border-blue-100">
                  <p className="text-base font-semibold text-slate-900">{faq.question}</p>
                  <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-blue-100 bg-white/90 p-4">
              <div className="flex items-center gap-2 text-blue-600">
                <FileText className="h-5 w-5" />
                <p className="text-sm font-bold uppercase tracking-widest">{EVIDENCE_PACK.title}</p>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                {EVIDENCE_PACK.detail}
              </p>
            </div>
            <a
              href="/request-a-demo"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
            >
              Talk through Azure AD SSO rollout
              <ArrowRightIcon />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mt-12 rounded-[32px] border border-blue-200 bg-white/80 p-8 grid gap-6 md:grid-cols-3"
        >
          {SECURITY_PROOFS.map((proof) => (
            <div key={proof.title} className="rounded-2xl border border-blue-100 bg-blue-50/50 p-4">
              <div className="flex items-center gap-2 text-blue-600">
                <Radio className="h-5 w-5" />
                <p className="text-xs font-bold uppercase tracking-[0.3em]">{proof.title}</p>
              </div>
              <p className="mt-2 text-sm text-slate-600">{proof.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-blue-200 opacity-40 blur-[120px]" />
      <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-indigo-200 opacity-40 blur-[120px]" />
    </section>
  );
};

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default AzureSsoSection;
