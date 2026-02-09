import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { LOCATION_DATA } from '@/lib/location-data';
import CallToActionSection from '@/components/CallToAction';
import { CheckCircle2, MapPin, Globe2, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const location = LOCATION_DATA[slug];

  if (!location) {
    return {
      title: 'Location Not Found',
    };
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.metaKeywords,
    alternates: {
      canonical: `https://spacecapture.ai/locations/${location.slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `https://spacecapture.ai/locations/${location.slug}`,
      siteName: 'Space Capture',
      images: [
        {
          url: location.image, // Ensure these images exist or use a fallback in the component
          width: 1200,
          height: 630,
          alt: location.heroTitle,
        },
      ],
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return Object.keys(LOCATION_DATA).map((slug) => ({
    slug: slug,
  }));
}

export default function LocationPage({ params }: Props) {
  const { slug } = params;
  const location = LOCATION_DATA[slug];

  if (!location) {
    notFound();
  }

  return (
    <main className="w-full overflow-x-hidden pt-20">
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-30">
             {/* Fallback pattern if image is missing/loading or overlay */}
             <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-slate-950"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
            <MapPin className="w-3 h-3" /> {location.city}, {location.country}
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
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Tailored for {location.city} Operations</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    We understand the local challenges. Space Capture gives you the specific tools you need to succeed in the {location.country} market.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {location.features.map((feature, idx) => (
                    <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                            {idx === 0 ? <ShieldCheck className="w-6 h-6" /> : (idx === 1 ? <CheckCircle2 className="w-6 h-6" /> : <Globe2 className="w-6 h-6" />)}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                        <p className="text-slate-600 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Narrative Content Section */}
      <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
              {location.contentSections.map((section, idx) => (
                  <div key={idx} className={`mb-12 last:mb-0 ${idx % 2 !== 0 ? 'md:text-right' : ''}`}>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                          {section.title}
                      </h2>
                      <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-indigo-500 pl-6 bg-white py-4 pr-4 rounded-r-lg shadow-sm">
                          {section.content}
                      </p>
                  </div>
              ))}
          </div>
      </section>

      {/* Global Trust Section (Reused/Static) */}
      <section className="py-20 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Trusted by Construction Teams Worldwide</h2>
              <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  {/* Placeholders for logos if available, or just text */}
                  <div className="font-bold text-xl text-slate-400">Global Builders</div>
                  <div className="font-bold text-xl text-slate-400">City Infrastructures</div>
                  <div className="font-bold text-xl text-slate-400">SafeSite Co.</div>
                  <div className="font-bold text-xl text-slate-400">Metro Systems</div>
              </div>
          </div>
      </section>

      <CallToActionSection />
    </main>
  );
}
