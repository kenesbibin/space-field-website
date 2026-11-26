import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Cloud,
  Database,
  FileCheck2,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  MessageSquareText,
  Network,
  Server,
  Shield,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Security and Data Protection',
  description:
    'Explore SpaceCapture security and data-handling resources, deployment options, access controls, and ways to request current documentation.',
  alternates: {
    canonical: 'https://spacecapture.ai/security',
  },
};

const securityPillars = [
  {
    title: 'Infrastructure',
    description:
      'Ask our team for current architecture, hosting, and subprocessors information applicable to your deployment.',
    icon: Network,
  },
  {
    title: 'Encryption',
    description:
      'Request current details about encryption in transit and at rest for the services and configuration you use.',
    icon: LockKeyhole,
  },
  {
    title: 'Account security',
    description:
      'Review access-control options and account safeguards with your SpaceCapture representative.',
    icon: KeyRound,
  },
  {
    title: 'Backups and recovery',
    description:
      'Ask about backup scope, recovery objectives, and operational procedures for your deployment.',
    icon: Database,
  },
];

const relatedResources = [
  { title: 'Hosting options', href: '/hosting', icon: Cloud },
  { title: 'Access control', href: '/access-control', icon: Fingerprint },
  { title: 'Privacy policy', href: '/privacy-policy', icon: FileCheck2 },
  { title: 'AI source attribution', href: '/trust/hallucination-free', icon: BookOpenCheck },
];

const faqs = [
  {
    question: 'Where is SpaceCapture customer data hosted?',
    answer:
      'Hosting location can depend on the service and deployment arrangement. Contact us to confirm the region, subprocessors, and contractual terms that apply to your account.',
  },
  {
    question: 'Can SpaceCapture be deployed in a private environment?',
    answer:
      'Private-cloud or on-premise deployment may depend on the use case and current product availability. Our team can confirm architecture, prerequisites, and scope for your organization.',
  },
  {
    question: 'How does SpaceCapture protect project information?',
    answer:
      'The available controls depend on product configuration. Request current technical and organizational security information for the services you plan to use.',
  },
  {
    question: 'Which security certifications or reports are available?',
    answer:
      'Certification status and supporting reports can change. Ask our team for current evidence and applicability rather than relying on an outdated or unverified web claim.',
  },
  {
    question: 'Does SpaceCapture use customer content to train AI models?',
    answer:
      'Review the current Privacy Policy and the terms for your account for details on data processing. Contact us for confirmation of the settings and contractual terms applicable to your use.',
  },
  {
    question: 'Can we request a security review or questionnaire?',
    answer:
      'Yes. Contact our team to discuss your security questionnaire, documentation needs, and any procurement review requirements.',
  },
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative isolate overflow-hidden bg-[#071126] px-4 pb-20 pt-32 text-white sm:px-6 sm:pb-24 sm:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(37,99,235,0.28),transparent_58%),linear-gradient(180deg,#071126_0%,#0b1834_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.16)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
            <ShieldCheck className="h-4 w-4" /> Trust &amp; Compliance Hub
          </span>
          <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Security at SpaceCapture
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            We take the protection of field and project information seriously. Explore the controls and deployment questions that matter to your team, and request current details from us.
          </p>
          <Link
            href="#safeguards"
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-blue-300/60 hover:bg-white/5"
          >
            Explore security practices <ArrowDown className="h-4 w-4" />
          </Link>
          <div className="mt-14 grid w-full max-w-3xl gap-3 sm:grid-cols-3">
            {[
              { icon: Shield, label: 'Security resources' },
              { icon: Server, label: 'Deployment choices' },
              { icon: MessageSquareText, label: 'Direct answers' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200">
                <Icon className="h-4 w-4 text-blue-300" /> {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="safeguards" className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.17em] text-blue-700">Security &amp; data protection</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Safeguarding your data starts with clear choices.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Understand deployment boundaries, access practices, and the documentation available for your SpaceCapture evaluation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="absolute -right-14 -top-14 h-52 w-52 rounded-full bg-blue-100/70 blur-3xl" />
              <div className="relative">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-700">Deployment and data location</span>
                    <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">Know where your data lives.</h3>
                  </div>
                  <span className="rounded-2xl bg-blue-50 p-3 text-blue-700"><Database className="h-6 w-6" /></span>
                </div>
                <p className="mt-4 max-w-xl leading-7 text-slate-600">
                  Hosting region and architecture depend on the deployment arrangement. Confirm the specific data location, subprocessors, and terms for your account with our team.
                </p>
                <div className="mt-8 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-xl bg-white p-3 text-blue-700 shadow-sm"><Cloud className="h-5 w-5" /></span>
                    <div>
                      <h4 className="font-bold text-slate-900">Deployment options</h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600">Discuss cloud, private-environment, or on-premise requirements and current availability.</p>
                    </div>
                  </div>
                  <Link href="/hosting" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-800 hover:text-blue-950">
                    Review hosting options <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <p className="mt-4 text-xs leading-5 text-slate-500">Specific configurations and availability are confirmed for each customer engagement.</p>
              </div>
            </article>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                <span className="inline-flex rounded-xl bg-violet-50 p-3 text-violet-700"><Fingerprint className="h-5 w-5" /></span>
                <h3 className="mt-4 text-xl font-extrabold">Access and identity</h3>
                <p className="mt-2 leading-7 text-slate-600">Explore role-based access and discuss how permissions can be configured for your teams and workflows.</p>
                <Link href="/access-control" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-800 hover:text-blue-950">Access control <ArrowRight className="h-4 w-4" /></Link>
              </article>
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                <span className="inline-flex rounded-xl bg-cyan-50 p-3 text-cyan-700"><BadgeCheck className="h-5 w-5" /></span>
                <h3 className="mt-4 text-xl font-extrabold">Privacy and AI use</h3>
                <p className="mt-2 leading-7 text-slate-600">Review our privacy reference and ask how data processing applies to your selected features and account terms.</p>
                <Link href="/privacy-policy" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-800 hover:text-blue-950">Privacy policy <ArrowRight className="h-4 w-4" /></Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.17em] text-blue-700">Security practices</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">The details your review needs.</h2>
              <p className="mt-4 leading-7 text-slate-600">Request current documentation for the services and configuration you are evaluating.</p>
            </div>
            <Link href="mailto:contact@spacecapture.ai?subject=SpaceCapture%20security%20documentation" className="inline-flex shrink-0 items-center gap-2 font-bold text-blue-800 hover:text-blue-950">
              Request documentation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {securityPillars.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <span className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-700"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500"><MessageSquareText className="h-4 w-4" /> Confirm with our team</span>
              </article>
            ))}
          </div>
          <p className="mt-5 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" /> Security controls, certifications, and technical details should be verified against current documentation for your specific deployment.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3">
            <span className="rounded-xl bg-blue-100 p-3 text-blue-800"><BookOpenCheck className="h-5 w-5" /></span>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.17em] text-blue-700">Explore further</p>
              <h2 className="mt-1 text-2xl font-black sm:text-3xl">Related trust documentation</h2>
            </div>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {relatedResources.map(({ title, href, icon: Icon }) => (
              <Link key={title} href={href} className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-800">
                <span className="flex items-center gap-3"><Icon className="h-5 w-5 text-blue-700" />{title}</span>
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.17em] text-blue-700">Questions &amp; answers</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Security FAQ</h2>
            <p className="mt-4 leading-7 text-slate-600">Common questions to help your team begin a security and procurement review.</p>
            <Link href="mailto:contact@spacecapture.ai?subject=SpaceCapture%20security%20review" className="mt-6 inline-flex items-center gap-2 font-bold text-blue-800 hover:text-blue-950">
              Contact our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-3">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden">
                  {question}<span className="text-xl font-normal text-blue-700 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 pr-7 leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl bg-[#0b1834] p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.17em] text-blue-300">Procurement verification</p>
            <h2 className="mt-3 text-2xl font-black sm:text-3xl">Need security documentation?</h2>
            <p className="mt-3 leading-7 text-slate-300">Contact us to discuss your security questionnaire, architecture questions, and current supporting documents.</p>
          </div>
          <Link href="/request-a-demo" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-500">
            Request security documentation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
