import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Globe } from 'lucide-react';
import CallToAction from '@/components/CallToAction';
import { LOCATION_DATA } from '@/lib/location-data';

export const metadata: Metadata = {
  title: 'Field Inspection Software by Location | SpaceCapture',
  description: 'Find AI-powered field inspection software for your region. SpaceCapture supports construction teams across the US, UK, UAE, Canada, Australia, India, and more.',
  alternates: {
    canonical: 'https://spacecapture.ai/locations',
  },
};

interface LocationSummary {
  slug: string;
  city: string;
  state?: string;
  country: string;
  countryCode: string;
  subtitle: string;
}

const LOCATIONS: LocationSummary[] = Object.values(LOCATION_DATA).map((location) => ({
  slug: location.slug,
  city: location.city,
  state: location.state,
  country: location.country,
  countryCode: location.countryCode,
  subtitle: location.heroSubtitle,
}));

const COUNTRY_ORDER = ['USA', 'UK', 'Canada', 'Australia', 'UAE', 'India', 'Saudi Arabia', 'Qatar', 'Hong Kong SAR'];

const grouped = LOCATIONS.reduce<Record<string, LocationSummary[]>>((acc, location) => {
  const group = location.country;
  if (!acc[group]) acc[group] = [];
  acc[group].push(location);
  return acc;
}, {});

const sortedCountries = Object.keys(grouped).sort((a, b) => {
  const indexA = COUNTRY_ORDER.indexOf(a);
  const indexB = COUNTRY_ORDER.indexOf(b);
  if (indexA === -1 && indexB === -1) return a.localeCompare(b);
  if (indexA === -1) return 1;
  if (indexB === -1) return -1;
  return indexA - indexB;
});

export default function LocationsLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Hero */}
        <section className="bg-white pt-12 pb-16 border-b border-slate-200">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6">
              <Globe className="w-3 h-3" /> Locations
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              SpaceCapture <span className="text-indigo-600">by Location</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              AI-powered field inspection software built for local regulations, compliance, and workflows. Find your region below.
            </p>
          </div>
        </section>

        {/* Location Cards */}
        <div className="container mx-auto max-w-[1200px] px-4 py-12">
          {sortedCountries.map((country) => (
            <section key={country} className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-indigo-600" /> {country}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {grouped[country].map((location) => (
                  <Link
                    key={location.slug}
                    href={`/locations/${location.slug}`}
                    className="group flex flex-col bg-white rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
                  >
                    <div className="p-8 flex flex-col h-full">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-snug">
                        {location.state ? `${location.city}, ${location.state}` : location.city}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                        {location.subtitle}
                      </p>
                      <div className="mt-auto border-t border-slate-100 pt-4 flex items-center text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        View Local Page <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <CallToAction />
      </main>
    </div>
  );
}
