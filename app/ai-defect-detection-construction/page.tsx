import React from 'react';
import type { Metadata } from 'next';
import CallToAction from '@/components/CallToAction';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { Eye, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';




export const metadata: Metadata = {
    title: 'How AI Detects Construction Defects',
  description: 'Discover how AI Defect Detection revolutionizes construction quality control. Automated analysis reduces rework and ensures safety compliance.',
  keywords: ['AI Defect Detection', 'Construction AI', 'Quality Control Software', 'Automated Inspection'],
  alternates: {
    canonical: 'https://spacecapture.ai/ai-defect-detection-construction',
  },
};

export default function AiDefectDetectionPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Header */}
        <section className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
             <div className="container mx-auto max-w-[900px] px-4 relative z-10">
                <div className="flex items-center gap-2 text-purple-400 font-bold uppercase tracking-wider text-xs mb-6">
                    <Eye className="w-4 h-4" /> AI Technology
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
                    AI Defect Detection in Construction: <br/>
                    <span className="text-purple-500">How It Works</span>
                </h1>
                <p className="text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
                    Turning standard site photos into actionable safety and quality data with computer vision.
                </p>
             </div>
        </section>

        {/* Content */}
        <div className="container mx-auto max-w-[900px] px-4 -mt-10 relative z-20 mb-20">
             <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
                <article className="prose prose-lg prose-slate max-w-none">


                    {/* AEO Definition Block */}
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-10 not-prose rounded-r-xl">
                        <h2 className="text-purple-900 font-bold text-lg mb-2">What is AI Defect Detection in Construction?</h2>
                        <p className="text-purple-800 m-0">
                            AI Defect Detection uses computer vision and deep learning algorithms to automatically identify structural flaws, safety hazards, and workmanship errors in construction site photos. It processes visual data in real-time to generate instant snag lists, reducing manual inspection time by up to 50%.
                        </p>
                    </div>

                    {/* Key Takeaways */}
                    <div className="mb-12">
                        <h2 className="font-bold text-slate-900 text-xl mb-4">Key Takeaways</h2>
                        <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0 mt-0">
                            {[
                                "Automatically identifies cracks, leaks, and safety violations.",
                                "Reduces human error and inspection fatigue.",
                                "Creates an immutable digital record of site quality.",
                                "Integrates with BIM models for contextual analysis."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-100 text-sm m-0">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="lead text-xl text-slate-700 font-medium mb-8">
                        AI Defect Detection in Construction is revolutionizing quality control by turning standard site photos into actionable data. Leveraging advanced computer vision and machine learning algorithms, this technology automatically identifies cracks, leaks, and safety hazards that the human eye might miss.
                    </p>
                    <p>
                        By integrating AI into your daily site walks, you can instantly categorize defects, assess severity, and assign rectification tasks to subcontractors. This guide breaks down the mechanics of AI visual analysis, explaining how it reduces rework costs, accelerates project closeout, and creates an immutable digital record of quality for every square foot of your build.
                    </p>

                    {/* Comparison Table */}
                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">How does AI Inspection compare to Manual methods?</h2>
                    <div className="not-prose overflow-x-auto mb-12 rounded-xl border border-slate-200 shadow-sm">
                        <table className="w-full text-left bg-white text-sm">
                            <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                                <tr>
                                    <th className="p-4">Feature</th>
                                    <th className="p-4 text-slate-500">Manual Inspection</th>
                                    <th className="p-4 text-purple-600">AI-Powered Inspection</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="p-4 font-medium text-slate-900">Speed</td>
                                    <td className="p-4 text-slate-600">Slow, prone to fatigue</td>
                                    <td className="p-4 text-slate-600">Instant analysis of hundreds of photos</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-slate-900">Accuracy</td>
                                    <td className="p-4 text-slate-600">Inconsistent, subjective</td>
                                    <td className="p-4 text-slate-600">Consistent, objective, pixel-perfect</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-slate-900">Data Entry</td>
                                    <td className="p-4 text-slate-600">Manual typing, uploading</td>
                                    <td className="p-4 text-slate-600">Automated tagging and categorization</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-slate-900">Preventive</td>
                                    <td className="p-4 text-slate-600">Reactive (fix after fail)</td>
                                    <td className="p-4 text-slate-600">Predictive (identify trends early)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    {/* FAQ Section with Schema */}
                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Frequently Asked Questions</h2>
                    <div className="not-prose space-y-4 mb-12">
                        {[
                            {
                                q: "How accurate is AI defect detection?",
                                a: "Modern AI models used in construction have an accuracy rate of over 95%, often surpassing human inspectors in detecting minute hairline cracks or thermal anomalies."
                            },
                            {
                                q: "Does it replace human inspectors?",
                                a: "No, it augments them. AI handles the repetitive task of scanning for common defects, allowing human experts to focus on complex structural assessments and decision-making."
                            },
                            {
                                q: "What types of defects can it detect?",
                                a: "It can identify concrete cracks, water leakage, missing safety gear (PPE), corrosion, and even installation errors by comparing site photos against BIM models."
                            },
                            {
                                q: "Do I need special cameras?",
                                a: "No. Most systems works with standard smartphone cameras, drones, and 360-degree cameras. The AI processing happens in the cloud."
                            },
                            {
                                q: "Is my data secure?",
                                a: "Yes. SpaceCapture uses enterprise-grade encryption for all visual data and adheres to strict data privacy standards."
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
                                            "name": "How accurate is AI defect detection?",
                                            "acceptedAnswer": { "@type": "Answer", "text": "Modern AI models used in construction have an accuracy rate of over 95%, often surpassing human inspectors in detecting minute hairline cracks or thermal anomalies." }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "Does it replace human inspectors?",
                                            "acceptedAnswer": { "@type": "Answer", "text": "No, it augments them. AI handles the repetitive task of scanning for common defects, allowing human experts to focus on complex structural assessments and decision-making." }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "What types of defects can it detect?",
                                            "acceptedAnswer": { "@type": "Answer", "text": "It can identify concrete cracks, water leakage, missing safety gear (PPE), corrosion, and even installation errors by comparing site photos against BIM models." }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "Do I need special cameras?",
                                            "acceptedAnswer": { "@type": "Answer", "text": "No. Most systems works with standard smartphone cameras, drones, and 360-degree cameras. The AI processing happens in the cloud." }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "Is my data secure?",
                                            "acceptedAnswer": { "@type": "Answer", "text": "Yes. SpaceCapture uses enterprise-grade encryption for all visual data and adheres to strict data privacy standards." }
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
                    <Link href="/ai-detection" className="inline-flex items-center gap-2 text-purple-600 font-bold hover:gap-3 transition-all">
                        Try AI Detection Now <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
             </div>
        </div>

        <CallToAction />
      </main>
    </div>
  );
}
