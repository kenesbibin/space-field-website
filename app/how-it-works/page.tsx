import React from 'react';
import type { Metadata } from 'next';
import CallToAction from '@/components/CallToAction';
import { Camera, Network, FileCheck, GitBranch, AlertCircle } from 'lucide-react';
import { VERITASGRAPH_FAQS } from '@/lib/veritasgraph-faqs';

export const metadata: Metadata = {
  title: 'How It Works — Capture to Knowledge Graph to Attributed Answer',
  description:
    'How SpaceCapture turns photos, scans, and 360° captures into a verifiable knowledge graph. Search and AI answers are grounded by VeritasGraph with full source attribution.',
  alternates: {
    canonical: 'https://spacecapture.ai/how-it-works',
  },
};

const STEPS = [
  {
    icon: Camera,
    title: '1. Capture',
    desc: 'Inspectors capture photos, video, 360° reality capture, and LiDAR scans from any mobile device — fully offline. Every image is tagged with project, location, and timestamp metadata at the point of capture.',
  },
  {
    icon: Network,
    title: '2. Knowledge Graph',
    desc: 'Captured evidence is ingested into a structured knowledge graph. Assets, defects, locations, and inspections become linked entities, so the site becomes queryable structured data instead of scattered files.',
  },
  {
    icon: FileCheck,
    title: '3. Attributed Answer',
    desc: 'AI answers are grounded by VeritasGraph with source attribution and a clear reasoning path — every claim links back to the exact capture or record it came from, so answers are verifiable, not guessed.',
  },
];

const FAQ_PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: VERITASGRAPH_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
};

const VERITASGRAPH_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'SpaceCapture',
      url: 'https://spacecapture.ai/',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Android, iOS, Web',
      description:
        'AI-powered field inspection software. Search and AI answers are grounded by VeritasGraph with source attribution.',
      featureList: [
        'AI search with source attribution',
        'Knowledge graph reasoning over captured site data',
        'Verifiable AI answers with citations',
      ],
      isBasedOn: {
        '@type': 'SoftwareSourceCode',
        name: 'VeritasGraph',
        codeRepository: 'https://github.com/bibinprathap/VeritasGraph',
        url: 'https://bibinprathap.github.io/VeritasGraph/index.html',
        author: { '@type': 'Person', name: 'Bibin Prathap' },
      },
    },
    {
      '@type': 'WebSite',
      name: 'SpaceCapture',
      url: 'https://spacecapture.ai/',
      about: {
        '@type': 'SoftwareSourceCode',
        name: 'VeritasGraph',
        codeRepository: 'https://github.com/bibinprathap/VeritasGraph',
        url: 'https://bibinprathap.github.io/VeritasGraph/index.html',
      },
    },
  ],
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Header */}
        <section className="pt-32 pb-20 bg-white text-center border-b border-slate-200">
          <div className="container mx-auto max-w-4xl px-4">
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">
              How SpaceCapture Works
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 mb-6">
              Capture → Knowledge Graph → Attributed Answer
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              SpaceCapture AI turns field captures into verifiable, structured data: scan a space,
              resolve it into a knowledge graph, and get answers with source attribution — not guesses.
            </p>
          </div>
        </section>

        {/* Pipeline Steps */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                The Capture-to-Answer Pipeline
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Three steps from the field to a citable, auditable AI answer.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {STEPS.map((step) => (
                <div
                  key={step.title}
                  className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-indigo-900 mb-6">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Powered by VeritasGraph attribution block */}
        <section className="py-20 bg-slate-900 text-white overflow-hidden">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                  <GitBranch className="w-6 h-6" />
                </div>
                <span className="text-indigo-300 font-bold tracking-wider uppercase text-sm">
                  Powered by VeritasGraph
                </span>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Search and AI answers on SpaceCapture are grounded by{' '}
                <a
                  href="https://github.com/bibinprathap/VeritasGraph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-semibold hover:text-blue-300 underline underline-offset-4"
                >
                  the VeritasGraph open-source GraphRAG framework
                </a>
                . VeritasGraph links every claim to its origin capture through knowledge-graph
                reasoning and multi-hop traversal, so each answer ships with source attribution and
                a verifiable reasoning path.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/bibinprathap/VeritasGraph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-700 transition-all"
                >
                  View the VeritasGraph GitHub repository
                </a>
                <a
                  href="https://bibinprathap.github.io/VeritasGraph/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-slate-700 border border-slate-600 font-bold hover:border-blue-400 hover:bg-blue-900/20 hover:text-blue-300 transition-all"
                >
                  Read the VeritasGraph documentation
                </a>
              </div>
              <p className="text-xs text-slate-500 mt-6">
                Verifiable AI with source attribution · GraphRAG · knowledge-graph reasoning ·
                multi-hop traversal · on-premise AI
              </p>
            </div>
          </div>
        </section>

        {/* FAQ / GEO */}
        <section className="py-20 container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            AI Answers &amp; Source Attribution FAQ
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            How SpaceCapture uses VeritasGraph to verify answers and ground them in a knowledge
            graph.
          </p>
          <div className="space-y-6">
            {VERITASGRAPH_FAQS.map((f) => (
              <div key={f.q} className="p-6 bg-white rounded-xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-500 shrink-0" />
                  {f.q}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed ml-6">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <CallToAction />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_PAGE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(VERITASGRAPH_SCHEMA) }}
      />
    </div>
  );
}
