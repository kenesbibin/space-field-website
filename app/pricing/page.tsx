import React from 'react';
import type { Metadata } from 'next';
import CallToAction from '@/components/CallToAction';
import { Check, MessageSquare, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing — Free Starter & Enterprise Plans',
  description: 'Start with a powerful free tier for individual inspectors. Upgrade to Enterprise for full AI defect detection, SSO, API access, and dedicated support. No hidden fees.',
  alternates: {
    canonical: 'https://spacecapture.ai/pricing',
  },
};

const pricingSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      name: 'SpaceCapture Enterprise',
      description: 'Full AI-powered field inspection platform with unlimited defect detection, SSO, API access, granular permissions, and dedicated 24/7 support.',
      url: 'https://spacecapture.ai/pricing',
      brand: { '@type': 'Brand', name: 'SpaceCapture' },
      category: 'Construction Management Software',
      image: 'https://spacecapture.ai/images/og-image.jpg',
    },
    {
      '@type': 'Product',
      name: 'SpaceCapture Starter',
      description: 'Free plan for individual inspectors and small subcontractors. Includes visual form builder, 5 active projects, and 500MB storage.',
      url: 'https://spacecapture.ai/pricing',
      brand: { '@type': 'Brand', name: 'SpaceCapture' },
      category: 'Construction Management Software',
      image: 'https://spacecapture.ai/images/og-image.jpg',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://spacecapture.ai/pricing',
      },
    },
  ],
};

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
            />

            {/* Hero */}
            <section className="bg-slate-900 text-white pt-40 pb-20 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-purple-600/10 blur-[100px]"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Simple, Transparent Pricing</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Start with a powerful free tier. Upgrade as you scale your field operations.
                    </p>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="container mx-auto px-6 -mt-10 relative z-20 mb-20">
                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">

                    {/* Enterprise Tier (Main Focus) */}
                    <div className="rounded-3xl p-6 md:p-10 border bg-white border-blue-500 shadow-2xl relative order-1 lg:order-1">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                            Most Popular for Teams
                        </div>
                        <div className="mb-8 text-center lg:text-left">
                            <h2 className="text-2xl font-bold uppercase tracking-wider mb-2 text-blue-600">Enterprise</h2>
                            <div className="flex items-baseline gap-1 justify-center lg:justify-start">
                                <span className="text-5xl font-extrabold text-slate-900">Custom</span>
                            </div>
                            <p className="text-slate-500 text-base mt-4">
                                The complete platform for large organizations requiring full automation, security, and dedicated success.
                            </p>
                        </div>

                        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-10 list-none p-0 m-0">
                            {[
                                "Mobile App Access (iOS/Android)",
                                "Offline Mode Sync",
                                "Unlimited Photos & Videos",
                                "Custom Visual Form Builder",
                                "Unlimited AI Defect Detection",
                                "Voice-to-Text Logs",
                                "Privacy Shield (Faces/Plates)",
                                "AI Risk Scoring",
                                "Granular Roles & Permissions",
                                "SSO (Okta, Azure AD)",
                                "Full API Access",
                                "Unlimited Audit Logs",
                                "Dedicated 24/7 Support",
                                "Onboarding Training"
                            ].map((feat, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                    <Check className="w-5 h-5 flex-shrink-0 text-blue-500" />
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/request-a-demo"
                                className="flex-1 text-center py-4 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
                            >
                                Contact Sales
                            </a>
                            <a
                                href="https://wa.me/17652713686"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center py-4 rounded-xl font-bold bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors shadow-lg flex items-center justify-center gap-2"
                            >
                                <MessageSquare className="w-5 h-5" /> WhatsApp Chat
                            </a>
                        </div>
                    </div>

                    {/* Try For Free Card (Secondary) */}
                    <div className="rounded-3xl p-6 md:p-8 border bg-slate-50 border-slate-200 lg:sticky lg:top-24 order-2 lg:order-2">
                        <div className="mb-6">
                            <h2 className="text-lg font-bold uppercase tracking-wider mb-2 text-slate-500">Starter</h2>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-extrabold text-slate-900">$0</span>
                            </div>
                            <p className="text-slate-500 text-sm mt-4">
                                Perfect for individual inspectors and small subcontractors to get started.
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Visual Form Builder (Basic)",
                                "5 Active Projects",
                                "500MB Storage",
                                "Standard Community Support",
                                "Web & Mobile Access"
                            ].map((feat, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                     <Check className="w-5 h-5 flex-shrink-0 text-slate-500" />
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://app.pmspace.ai/login?type=SpaceCapture&moduleId=7a36674e-f8d6-4962-a0dc-105b50b4849c&invite=guest/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-3 rounded-xl font-bold bg-white border border-slate-300 text-slate-900 hover:bg-slate-50 transition-colors"
                        >
                            Try For Free
                        </a>
                    </div>
                </div>
            </section>

            {/* Simplified Footer / CTA Section */}
            <section className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Need a custom walkthrough?</h2>
                <a
                    href="/request-a-demo"
                    className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
                >
                    Request a Personal Demo <ArrowRight className="w-4 h-4" />
                </a>
            </section>

            <CallToAction />
        </div>
    );
}

