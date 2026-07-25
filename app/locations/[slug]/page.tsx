import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { LOCATION_DATA } from '@/lib/location-data';
import { INDEXED_LOCATIONS } from '@/lib/indexed-locations';
import CallToActionSection from '@/components/CallToAction';
import {
  CheckCircle2,
  MapPin,
  Globe2,
  ShieldCheck,
  ArrowRight,
  Building2,
  FileText,
} from 'lucide-react';
import Link from 'next/link';
import StructuredData from '@/components/seo/StructuredData';
import { getLocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { getServiceSchema } from '@/components/seo/ServiceSchema';
import {
  buildBreadcrumbsFromPath,
  getBreadcrumbListSchema,
} from '@/components/seo/BreadcrumbListSchema';



interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = LOCATION_DATA[slug];

  if (!location) {
    return {
      title: 'Location Not Found',
    };
  }

  const isIndexed = INDEXED_LOCATIONS.has(location.slug);

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.metaKeywords,
    alternates: {
      canonical: `https://spacecapture.ai/locations/${location.slug}`,
    },
    robots: {
      index: isIndexed,
      follow: true,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `https://spacecapture.ai/locations/${location.slug}`,
      siteName: 'SpaceCapture',
      images: [
        {
          url: location.image,
          width: 1200,
          height: 630,
          alt: location.heroTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return Object.keys(LOCATION_DATA).map((slug) => ({
    slug: slug,
  }));
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = LOCATION_DATA[slug];

  if (!location) {
    notFound();
  }

  const regionLabel = location.state
    ? `${location.city}, ${location.state}`
    : location.city;

  const localBusinessSchema = getLocalBusinessSchema({
    name: `SpaceCapture — ${location.city}`,
    description: location.metaDescription,
    url: `https://spacecapture.ai/locations/${location.slug}`,
    city: location.city,
    region: location.state,
    country: location.country,
    countryCode: location.countryCode,
    latitude: location.latitude,
    longitude: location.longitude,
    areaServed: location.state ?? location.city,
  });

  const serviceSchema = getServiceSchema({
    name: `Field Inspection Software in ${location.city}`,
    description: location.metaDescription,
    url: `https://spacecapture.ai/locations/${location.slug}`,
    serviceType: 'Field Inspection Software',
    areaServed: `${location.city}, ${location.country}`,
  });

  const breadcrumbSchema = getBreadcrumbListSchema(
    buildBreadcrumbsFromPath(`/locations/${location.slug}`)
  );

  return (
    <main className="w-full overflow-x-hidden pt-20">
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@graph': [localBusinessSchema, serviceSchema, breadcrumbSchema],
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-slate-950"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
            <MapPin className="w-3 h-3" /> {regionLabel}, {location.country}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto">
            {location.heroTitle}
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            {location.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/request-a-demo"
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25"
            >
              Start in {location.city} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/app-download"
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-full transition-all border border-slate-700"
            >
              Download App
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why SpaceCapture in {location.city}?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {location.features.length} purpose-built capabilities for{' '}
              {regionLabel} field teams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {location.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                  {idx === 0 ? (
                    <ShieldCheck className="w-6 h-6" />
                  ) : idx === 1 ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <Globe2 className="w-6 h-6" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Industry Callouts */}
      {(location.compliance?.length || location.industryCallouts?.length) && (
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              {location.compliance && location.compliance.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-indigo-600" />
                    Local Compliance
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Pre-built inspection templates aligned with{' '}
                    {location.country} regulatory frameworks.
                  </p>
                  <ul className="space-y-3">
                    {location.compliance.map((c, i) => (
                      <li
                        key={i}
                        className="bg-white p-4 rounded-lg border border-slate-200"
                      >
                        <p className="font-bold text-slate-900">{c.name}</p>
                        <p className="text-sm text-slate-600 mt-1">
                          {c.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {location.industryCallouts &&
                location.industryCallouts.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <Building2 className="w-6 h-6 text-indigo-600" />
                      {location.country === 'USA'
                        ? `${location.state} Industry Focus`
                        : `${location.city} Industry Focus`}
                    </h2>
                    <p className="text-slate-600 mb-6">
                      Sectors we serve in {regionLabel}.
                    </p>
                    <ul className="space-y-3">
                      {location.industryCallouts.map((c, i) => (
                        <li
                          key={i}
                          className="bg-white p-4 rounded-lg border border-slate-200"
                        >
                          <p className="font-bold text-slate-900">{c.name}</p>
                          <p className="text-sm text-slate-600 mt-1">
                            {c.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </div>
        </section>
      )}

      {/* Narrative Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {location.contentSections.map((section, idx) => (
            <div
              key={idx}
              className={`mb-12 last:mb-0 ${idx % 2 !== 0 ? 'md:text-right' : ''}`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {section.title}
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-indigo-500 pl-6 bg-slate-50 py-4 pr-4 rounded-r-lg shadow-sm">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Related solutions */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Solutions for {location.city} Field Teams
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Explore the SpaceCapture platform for the workflows that matter
            to {regionLabel}.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/field-inspection-software', label: 'Field inspection software' },
              { href: '/construction-inspection-software', label: 'Construction inspection' },
              { href: '/construction-management-software', label: 'Construction management' },
              { href: '/site-inspection-software', label: 'Site inspection' },
              { href: '/home-inspection-software', label: 'Home inspection' },
              { href: '/building-inspection-software', label: 'Building inspection' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 hover:border-indigo-300 hover:text-indigo-600 transition text-sm font-medium"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToActionSection />
    </main>
  );
}
