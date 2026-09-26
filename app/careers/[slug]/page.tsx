import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  HelpCircle,
  Mail,
} from 'lucide-react';
import CallToAction from '@/components/CallToAction';
import CareersAiSummaryCard from '@/components/CareersAiSummaryCard';
import {
  CAREERS_ROLES,
  CAREERS_EMAIL,
  careersApplyUrl,
  getCareerRole,
  APPLICATION_QUESTIONS,
} from '@/lib/careers-data';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Closed set of roles from generateStaticParams — unknown slugs get a real
// HTTP 404 from the router instead of a streamed notFound() (which the root
// loading.tsx would otherwise commit as status 200).
export const dynamicParams = false;

export function generateStaticParams() {
  return CAREERS_ROLES.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const role = getCareerRole(slug);
  if (!role) {
    return { title: 'Role Not Found | SpaceCapture Careers' };
  }
  return {
    title: `${role.title} | SpaceCapture Careers`,
    description: role.summary,
    alternates: {
      canonical: `https://spacecapture.ai/careers/${role.slug}`,
    },
    openGraph: {
      type: 'website',
      title: `${role.title} | SpaceCapture Careers`,
      description: role.summary,
      url: `https://spacecapture.ai/careers/${role.slug}`,
      siteName: 'SpaceCapture',
    },
  };
}

export default async function CareerRolePage({ params }: PageProps) {
  const { slug } = await params;
  const role = getCareerRole(slug);

  if (!role) {
    notFound();
  }

  const jobPostingSchema = {
    '@context': 'https://schema.org',
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
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Header */}
        <section className="pt-32 pb-14 bg-white text-center border-b border-slate-200">
          <div className="container mx-auto max-w-4xl px-4">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Careers
            </Link>
            <div>
              <span className="inline-flex px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold ring-1 ring-inset ring-indigo-600/10">
                {role.badge}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-5 mb-6">
              {role.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm font-medium text-slate-600">
                <Briefcase className="w-4 h-4 text-slate-400" />
                {role.type}
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm font-medium text-slate-600">
                <MapPin className="w-4 h-4 text-slate-400" />
                {role.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm font-medium text-slate-600">
                <Clock className="w-4 h-4 text-slate-400" />
                {role.experienceNote}
              </span>
            </div>
            <a
              href={careersApplyUrl(role.title)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 hover:shadow-lg transition-all"
            >
              Apply for this role
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Detail body */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-3xl px-4 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
              <p className="text-slate-600 leading-relaxed">{role.overview}</p>
            </div>

            {/* Key Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Responsibilities</h2>
              <ul className="space-y-3">
                {role.responsibilities.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Requirements</h2>
              <ul className="space-y-3">
                {role.requirements.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Offer */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Offer</h2>
              <ul className="space-y-3">
                {role.offer.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Application Questions */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
                Application Questions
              </h2>
              <ul className="space-y-4">
                {APPLICATION_QUESTIONS.map((question) => (
                  <li key={question} className="flex gap-3 items-start">
                    <HelpCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">{question}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* General application */}
        <section className="py-16 bg-slate-50 text-center">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Don&apos;t see a position that fits your skills?
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
              Send us your resume
            </a>
          </div>
        </section>

        <CareersAiSummaryCard />
        <CallToAction />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
    </div>
  );
}
