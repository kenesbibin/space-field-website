import React from 'react';
import type { Metadata } from 'next';
import CallToAction from '@/components/CallToAction';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { Users, HardHat, ArrowRight } from 'lucide-react';
import Link from 'next/link';




export const metadata: Metadata = {
  title: 'Field Workforce Management for Construction Teams | SpaceCapture',
  description: 'Optimize your construction workforce with advanced management tools. Verify attendance, track productivity, and streamline payroll.',
  keywords: ['Field Workforce Management', 'Construction Teams', 'Labor Tracking', 'Workforce Productivity'],
  alternates: {
    canonical: 'https://spacecapture.ai/field-workforce-management',
  },
};

export default function FieldWorkforceManagementPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Header */}
        <section className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
             <div className="container mx-auto max-w-[900px] px-4 relative z-10">
                <div className="flex items-center gap-2 text-green-400 font-bold uppercase tracking-wider text-xs mb-6">
                    <Users className="w-4 h-4" /> Labor Management
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
                    Field Workforce Management <br/>
                    <span className="text-green-500">for Construction Teams</span>
                </h1>
                <p className="text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
                    Ensure the right people are on the right job with geofenced tracking and skill-based assignment.
                </p>
             </div>
        </section>

        {/* Content */}
        <div className="container mx-auto max-w-[900px] px-4 -mt-10 relative z-20 mb-20">
             <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
                <article className="prose prose-lg prose-slate max-w-none">

                    {/* AEO Definition Block */}
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-10 not-prose rounded-r-xl">
                        <h3 className="text-green-900 font-bold text-lg mb-2">What is Construction Workforce Management?</h3>
                        <p className="text-green-800 m-0">
                            Construction Workforce Management refers to the digital systems and processes used to track labor hours, productivity, and site attendance. It utilizes tools like geofencing and biometric verification to ensure accurate payroll and enhance workforce accountability on distributed job sites.
                        </p>
                    </div>

                    {/* Key Takeaways */}
                    <div className="mb-12">
                        <h3 className="font-bold text-slate-900 text-xl mb-4">Key Takeaways</h3>
                        <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0 mt-0">
                            {[
                                "Eliminates time theft with geofenced clock-ins.",
                                "Digital timesheets export directly to payroll.",
                                "Tracks worker certifications and safety compliance.",
                                "Provides live visibility into labor costs vs. budget."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-100 text-sm m-0">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="lead text-xl text-slate-700 font-medium mb-8">
                        Field Workforce Management for Construction Teams is about more than just time clocks; it's about verified presence and productivity. Managing a distributed workforce across multiple job sites requires precision tools that go beyond simple check-ins.
                    </p>
                    <p>
                        This article delves into geofenced attendance, biometric verification, and skill-based task categorization to ensure the right people are on the right job. Learn how modern workforce management platforms unify payroll, compliance, and performance tracking, giving project managers a live view of labor costs and helping to prevent the budget overruns that plague complex construction projects.
                    </p>

                    {/* Comparison Table */}
                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Why switch from Paper Timesheets to Digital Tools?</h2>
                    <div className="not-prose overflow-x-auto mb-12 rounded-xl border border-slate-200 shadow-sm">
                        <table className="w-full text-left bg-white text-sm">
                            <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                                <tr>
                                    <th className="p-4">Feature</th>
                                    <th className="p-4 text-slate-500">Paper Timesheets</th>
                                    <th className="p-4 text-green-600">Digital WFM Platform</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="p-4 font-medium text-slate-900">Accuracy</td>
                                    <td className="p-4 text-slate-600">Low (rounding errors, "buddy punching")</td>
                                    <td className="p-4 text-slate-600">High (GPS & Biometric verification)</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-slate-900">Payroll Processing</td>
                                    <td className="p-4 text-slate-600">Days of manual data entry</td>
                                    <td className="p-4 text-slate-600">Instant export to payroll software</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-slate-900">Compliance</td>
                                    <td className="p-4 text-slate-600">Physical binders, often outdated</td>
                                    <td className="p-4 text-slate-600">Digital alerts for expiring certificates</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-slate-900">Cost Tracking</td>
                                    <td className="p-4 text-slate-600">Delayed visibility (end of month)</td>
                                    <td className="p-4 text-slate-600">Real-time daily burn rate analysis</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    {/* FAQ Section with Schema */}
                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Frequently Asked Questions</h2>
                    <div className="not-prose space-y-4 mb-12">
                        {[
                            {
                                q: "What is geofencing in construction?",
                                a: "Geofencing creates a virtual perimeter around a job site. The app only allows workers to clock in or out when their GPS location is physically inside this boundary."
                            },
                            {
                                q: "Can it work without internet?",
                                a: "Yes. Most field apps have an offline mode that stores clock-in data locally and syncs it to the cloud once a connection is re-established."
                            },
                            {
                                q: "How does it help with safety?",
                                a: "Digital profiles store safety certifications (OSHA, CSCS). The system can block a worker from clocking in if their required safety cards have expired."
                            },
                            {
                                q: "Is it difficult for workers to use?",
                                a: "Modern apps are designed with a 'consumer-grade' UX, similar to social media apps, requiring minimal training—usually just one tap to start work."
                            },
                            {
                                q: "Does it integrate with my payroll system?",
                                a: "Yes, SpaceCapture and similar tools export timesheet data in formats compatible with Sage, QuickBooks, ADP, and other major payroll providers."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                                <p className="text-slate-600 text-sm m-0">{faq.a}</p>
                            </div>
                        ))}
                        
                        {/* JSON-LD Schema */}
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify({
                                    "@context": "https://schema.org",
                                    "@type": "FAQPage",
                                    "mainEntity": [
                                        {
                                            "@type": "Question",
                                            "name": "What is geofencing in construction?",
                                            "acceptedAnswer": { "@type": "Answer", "text": "Geofencing creates a virtual perimeter around a job site. The app only allows workers to clock in or out when their GPS location is physically inside this boundary." }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "Can it work without internet?",
                                            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most field apps have an offline mode that stores clock-in data locally and syncs it to the cloud once a connection is re-established." }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "How does it help with safety?",
                                            "acceptedAnswer": { "@type": "Answer", "text": "Digital profiles store safety certifications (OSHA, CSCS). The system can block a worker from clocking in if their required safety cards have expired." }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "Is it difficult for workers to use?",
                                            "acceptedAnswer": { "@type": "Answer", "text": "Modern apps are designed with a 'consumer-grade' UX, similar to social media apps, requiring minimal training—usually just one tap to start work." }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "Does it integrate with my payroll system?",
                                            "acceptedAnswer": { "@type": "Answer", "text": "Yes, SpaceCapture and similar tools export timesheet data in formats compatible with Sage, QuickBooks, ADP, and other major payroll providers." }
                                        }
                                    ]
                                })
                            }}
                        />
                    </div>
                </article>

                <AuthorBio />

                <div className="mt-8 text-center text-sm text-slate-400">
                    Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100">
                    <Link href="/request-a-demo" className="inline-flex items-center gap-2 text-green-600 font-bold hover:gap-3 transition-all">
                        Schedule Workforce Demo <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
             </div>
        </div>

        <CallToAction />
      </main>
    </div>
  );
}
