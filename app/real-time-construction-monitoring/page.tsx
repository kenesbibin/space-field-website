import React from 'react';
import type { Metadata } from 'next';
import CallToAction from '@/components/CallToAction';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { Activity, Radio, BarChart3, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Real-Time Construction Monitoring & Site Management | SpaceCapture',
  description: 'Gain instant visibility into your jobsites with Real-Time Construction Monitoring. Track progress live, automate daily reports, and manage sites remotely.',
  keywords: ['Real Time Construction Monitoring', 'Construction Site Management', 'Remote Site Monitoring', 'Construction Progress Tracking'],
  alternates: {
    canonical: 'https://spacecapture.ai/real-time-construction-monitoring',
  },
};

export default function RealTimeMonitoringPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Header */}
        <section className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
             <div className="absolute top-20 right-20 w-72 h-72 bg-orange-600 rounded-full blur-[120px] opacity-20"></div>
             
             <div className="container mx-auto max-w-[900px] px-4 relative z-10">
                <div className="flex items-center gap-2 text-orange-400 font-bold uppercase tracking-wider text-xs mb-6">
                    <Activity className="w-4 h-4" /> Live Site Visibility
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
                    Real-Time Construction <br/>
                    <span className="text-orange-500">Monitoring System</span>
                </h1>
                <p className="text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
                    Stop waiting for weekly reports. See exactly what's happening on your jobsite, the moment it happens.
                </p>
             </div>
        </section>

        {/* Content */}
        <div className="container mx-auto max-w-[900px] px-4 -mt-10 relative z-20 mb-20">
             <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
                <article className="prose prose-lg prose-slate max-w-none">
                    
                    {/* AEO Definition Block */}
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-10 not-prose rounded-r-xl">
                        <h3 className="text-orange-900 font-bold text-lg mb-2">What is Real-Time Construction Monitoring?</h3>
                        <p className="text-orange-800 m-0">
                            Real-Time Construction Monitoring uses IoT sensors, 360° cameras, and mobile app data to provide a live feed of project activity. It allows project managers to track workforce attendance, safety compliance, and physical progress instantly from a remote dashboard, replacing lagged paper reporting.
                        </p>
                    </div>

                    <p className="lead text-xl text-slate-700 font-medium mb-8">
                        The gap between what's happening on-site and what the office *thinks* is happening is where profit is lost. Real-time monitoring bridges that gap, giving you a digital pulse of your project effectively 24/7.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Key Components of Live Site Management</h2>
                    <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <Radio className="w-8 h-8 text-orange-600 mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Live Workforce Tracking</h3>
                            <p className="text-slate-600 text-sm">Know exactly who is on site with geofenced clock-ins. See heatmaps of activity to ensure labor is allocated correctly.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <BarChart3 className="w-8 h-8 text-blue-600 mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Instant Progress Updates</h3>
                            <p className="text-slate-600 text-sm">Photos uploaded by field crews sync instantly to the cloud, allowing you to catch installation errors hours after they happen, not weeks.</p>
                        </div>
                    </div>

                    <h3>Why Shift to Real-Time?</h3>
                    <p>
                        Traditional construction management is reactive. You find out a deadline was missed on Friday afternoon. With **Construction Site Management** software that tracks in real-time, you are alerted on Tuesday morning that the pace is slipping, giving you three days to correct course.
                    </p>

                    <ul className="space-y-2">
                        <li><strong>Reduce Travel Costs:</strong> Fewer site visits needed when you have a "Digital Twin" view.</li>
                        <li><strong>Improve Safety:</strong> Get immediate alerts if a safety inspection fails or a hazard is logged.</li>
                        <li><strong>Dispute Resolution:</strong> An immutable timeline of site conditions prevents "he-said, she-said" arguments.</li>
                    </ul>

                    {/* FAQ Section */}
                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Common Questions</h2>
                    <div className="not-prose space-y-4 mb-12">
                        {[
                            {
                                q: "Does real-time monitoring require internet?",
                                a: "For the 'Real-Time' aspect, yes. However, SpaceCapture stores data offline and uploads it the second a connection is available, ensuring no data is ever lost."
                            },
                            {
                                q: "Is it an invasion of privacy?",
                                a: "No. We track tasks and locations within the geofenced jobsite only during working hours. Privacy is a core architectural principle."
                            },
                            {
                                q: "How complex is the setup?",
                                a: "Zero hardware installation is required if you use the mobile app. For advanced sensor setups, deployment takes less than 1 day."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                                <p className="text-slate-600 text-sm m-0">{faq.a}</p>
                            </div>
                        ))}
                    </div>

                </article>

                <AuthorBio />

                <div className="mt-12 pt-8 border-t border-slate-100 text-center">
                    <Link href="/request-a-demo" className="inline-flex items-center gap-2 text-white bg-orange-600 px-8 py-4 rounded-full font-bold hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-200">
                        Start Real-Time Monitoring <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
             </div>
        </div>

        <CallToAction />
      </main>
    </div>
  );
}
