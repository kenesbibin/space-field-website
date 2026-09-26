import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import CallToAction from '@/components/CallToAction';
import CareersAiSummaryCard from '@/components/CareersAiSummaryCard';
import {
  Globe,
  TrendingUp,
  Cpu,
  Wallet,
  MapPin,
  Mail,
  ArrowRight,
  Briefcase,
  ChevronRight,
  Code,
  FileText,
  Lightbulb,
} from 'lucide-react';
import { CAREERS_ROLES, CAREERS_EMAIL, CareerIcon } from '@/lib/careers-data';

export const metadata: Metadata = {
  title: 'Careers | Work at SpaceCapture',
  description:
    'Join SpaceCapture and build AI-powered field inspection software for construction. Remote-first roles for full-stack and AI engineers — see open positions and apply.',
  alternates: {
    canonical: 'https://spacecapture.ai/careers',
  },
};

const BENEFITS = [
  {
    icon: Globe,
    title: 'Remote-First Culture',
    desc: 'Work from anywhere in the world with flexible hours that fit your lifestyle and your best working time.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    desc: 'Clear career progression, hands-on ownership, and mentorship from people shipping AI products in the field.',
  },
  {
    icon: Cpu,
    title: 'Cutting-Edge Tech',
    desc: 'Work with computer vision, knowledge graphs, and VeritasGraph — real AI infrastructure, not wrappers.',
  },
  {
    icon: Wallet,
    title: 'Competitive Compensation',
    desc: 'Attractive salary packages, equity options, and comprehensive benefits for every full-time role.',
  },
];

const JOB_POSTINGS_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': CAREERS_ROLES.map((role) => ({
    '@type': 'JobPosting',
    title: role.title,
    description: role.summary,
    datePosted: '2026-09-25',
    employmentType: 'FULL_TIME',
    jobLocationType: 'TELECOMMUTE',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'SpaceCapture',
      sameAs: 'https://spacecapture.ai/',
    },
    applicationContact: {
      '@type': 'ContactPoint',
      email: CAREERS_EMAIL,
    },
    url: `https://spacecapture.ai/careers/${role.slug}`,
  })),
};

/** Colored icon tiles for each role card, matching the reference layout. */
const ROLE_ICONS: Record<CareerIcon, React.ComponentType<{ className?: string }>> = {
  code: Code,
  file: FileText,
  bulb: Lightbulb,
};

const ROLE_ICON_COLORS: Record<CareerIcon, string> = {
  code: 'bg-blue-500',
  file: 'bg-purple-500',
  bulb: 'bg-green-500',
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-white text-center border-b border-slate-200">
          <div className="container mx-auto max-w-4xl px-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider ring-1 ring-inset ring-emerald-600/20">
              <Briefcase className="w-3.5 h-3.5" />
              We are hiring
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-6 mb-6">
              Careers at SpaceCapture
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Join our team and help shape the future of AI-powered field inspections — offline
              capture, computer vision, and verifiable AI answers for the people who build things.
            </p>
            <a
              href="#openings"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 hover:shadow-lg transition-all"
            >
              View Open Positions
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Why SpaceCapture */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Why you&apos;ll love working here
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We believe in giving our team the tools, flexibility, and culture they need to do
                their best work.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {BENEFITS.map((b) => (
                <div
                  key={b.title}
                  className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                    <b.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="openings" className="py-20 bg-white border-y border-slate-100 scroll-mt-24">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="text-center mb-14">
              <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">
                Open Positions
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mt-3 mb-4">
                Join our growing team
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We are always looking for talented people who are passionate about building
                products that matter.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {CAREERS_ROLES.map((role) => {
                const Icon = ROLE_ICONS[role.icon];
                return (
                  <Link
                    key={role.slug}
                    href={`/careers/${role.slug}`}
                    className="group flex flex-col p-7 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0 ${ROLE_ICON_COLORS[role.icon]}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold whitespace-nowrap">
                        {role.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{role.summary}</p>
                    <div className="border-t border-slate-100 pt-4 mt-auto">
                      <div className="flex items-center gap-5 mb-4 text-sm text-slate-500">
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4 text-slate-400" />
                          {role.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-slate-400" />
                          {role.location}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                        View job details
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* General application */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Don&apos;t see a role that fits?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Send us your resume anyway. We are always open to connecting with talented people
              who share our vision.
            </p>
            <a
              href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent('General application — SpaceCapture')}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-500 hover:shadow-lg transition-all"
            >
              <Mail className="w-4 h-4" />
              Send Your Resume
            </a>
          </div>
        </section>

        {/* Ask for a Summary — GEO block */}
        <CareersAiSummaryCard />

        <CallToAction />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JOB_POSTINGS_SCHEMA) }}
      />
    </div>
  );
}
