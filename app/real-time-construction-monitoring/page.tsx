import React from 'react';
import type { Metadata } from 'next';
import CallToAction from '@/components/CallToAction';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { Activity, Radio, BarChart3, ArrowRight, Shield, Clock, TrendingUp, Eye, Smartphone, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Real-Time Construction Monitoring Software | Live Jobsite Tracking — SpaceCapture',
  description: 'Monitor construction sites in real-time with AI-powered dashboards. Track workforce, detect defects instantly, and automate daily reports. Reduce delays by 40%. Free app for iOS & Android.',
  keywords: [
    'real-time construction monitoring',
    'real-time building monitoring',
    'construction monitoring system',
    'construction monitoring software',
    'live jobsite monitoring',
    'construction site management',
    'remote site monitoring',
    'remote construction monitoring',
    'construction progress tracking',
    'construction progress tracking software',
    'construction real-time surveillance',
    'real-time construction reporting',
    'automated construction monitoring',
    'live construction site camera',
    'jobsite monitoring app',
  ],
  alternates: {
    canonical: '/real-time-construction-monitoring',
  },
};

const faqItems = [
  {
    q: "What is real-time construction monitoring?",
    a: "Real-time construction monitoring is the practice of using IoT sensors, mobile apps, 360° cameras, and cloud dashboards to provide instant visibility into jobsite activity. It replaces lagged paper-based reporting with live data on workforce attendance, safety compliance, material deliveries, and physical progress — accessible from anywhere."
  },
  {
    q: "Does real-time monitoring require internet?",
    a: "For the 'Real-Time' aspect, yes. However, SpaceCapture stores data offline and uploads it the second a connection is available, ensuring no data is ever lost. Field crews can capture photos, log inspections, and complete checklists even in remote areas without connectivity."
  },
  {
    q: "Is real-time construction site monitoring an invasion of privacy?",
    a: "No. We track tasks and locations within the geofenced jobsite only during working hours. Privacy is a core architectural principle. The system monitors project progress and safety compliance, not individual behavior."
  },
  {
    q: "How complex is the setup for a construction monitoring system?",
    a: "Zero hardware installation is required if you use the mobile app. Download SpaceCapture on iOS or Android, create your project, and invite your team — you'll have live site data within minutes. For advanced sensor setups, deployment takes less than 1 day."
  },
  {
    q: "How does AI detect construction defects in real-time?",
    a: "SpaceCapture's AI analyzes photos captured by field crews to automatically identify defects like cracks, corrosion, misalignment, and incomplete work. Defects are flagged instantly, geo-tagged, and assigned to the responsible trade for resolution — eliminating the delay of manual punch list reviews."
  },
  {
    q: "What types of construction projects benefit from live monitoring?",
    a: "Real-time monitoring benefits all project types: commercial buildings, residential developments, infrastructure (bridges, roads), solar farm installations, oil & gas facilities, and telecom tower projects. Any project with multiple trades, remote stakeholders, or strict compliance requirements sees immediate ROI."
  },
];

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
                <div className="mt-8 flex flex-wrap gap-4">
                    <Link href="/request-a-demo" className="inline-flex items-center gap-2 text-white bg-orange-600 px-6 py-3 rounded-full font-bold hover:bg-orange-700 transition-all shadow-lg">
                        Get a Live Demo <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/app-download" className="inline-flex items-center gap-2 text-orange-400 border border-orange-500/30 px-6 py-3 rounded-full font-bold hover:bg-orange-500/10 transition-all">
                        <Smartphone className="w-4 h-4" /> Try Free on Mobile
                    </Link>
                </div>
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

                    {/* ROI Stats Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 not-prose mb-12">
                        <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="text-3xl font-extrabold text-orange-600">40%</div>
                            <div className="text-xs text-slate-500 font-medium mt-1">Fewer Delays</div>
                        </div>
                        <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="text-3xl font-extrabold text-blue-600">60%</div>
                            <div className="text-xs text-slate-500 font-medium mt-1">Less Travel</div>
                        </div>
                        <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="text-3xl font-extrabold text-green-600">3x</div>
                            <div className="text-xs text-slate-500 font-medium mt-1">Faster Reporting</div>
                        </div>
                        <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="text-3xl font-extrabold text-purple-600">24/7</div>
                            <div className="text-xs text-slate-500 font-medium mt-1">Site Visibility</div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Key Components of a Live Construction Monitoring System</h2>
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
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <Shield className="w-8 h-8 text-green-600 mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Safety Compliance Alerts</h3>
                            <p className="text-slate-600 text-sm">Get immediate notifications when safety inspections fail or hazards are logged. Maintain OSHA compliance with automated audit trails.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <Eye className="w-8 h-8 text-purple-600 mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">AI Defect Detection</h3>
                            <p className="text-slate-600 text-sm">SpaceCapture's computer vision automatically identifies cracks, corrosion, and misalignment from field photos — flagging issues before they escalate.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Why Shift from Traditional to Real-Time Construction Reporting?</h2>
                    <p>
                        Traditional construction management is reactive. You find out a deadline was missed on Friday afternoon. With <strong>Construction Site Management</strong> software that tracks in real-time, you are alerted on Tuesday morning that the pace is slipping, giving you three days to correct course.
                    </p>

                    <ul className="space-y-2">
                        <li><strong>Reduce Travel Costs:</strong> Fewer site visits needed when you have a &quot;Digital Twin&quot; view.</li>
                        <li><strong>Improve Safety:</strong> Get immediate alerts if a safety inspection fails or a hazard is logged.</li>
                        <li><strong>Dispute Resolution:</strong> An immutable timeline of site conditions prevents &quot;he-said, she-said&quot; arguments.</li>
                        <li><strong>Real-Time Construction Reporting:</strong> Auto-generated daily logs replace manual end-of-day paperwork, saving superintendents 1–2 hours per day.</li>
                        <li><strong>Remote Site Monitoring:</strong> Manage multiple jobsites from a single dashboard without being physically present at each one.</li>
                    </ul>

                    {/* NEW: Remote Monitoring Section */}
                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Remote Construction Site Monitoring: Manage Multiple Jobsites From Anywhere</h2>
                    <p>
                        <strong>Remote construction monitoring</strong> eliminates the need to physically visit every site. With SpaceCapture's cloud-based dashboard, project managers can oversee 5, 10, or 50+ jobsites simultaneously from their office, home, or while traveling. Each site streams live data — photos, inspection results, safety logs, and progress percentages — into a unified command center.
                    </p>
                    <p>
                        This is especially critical for firms managing geographically dispersed portfolios. A general contractor based in Houston can monitor projects in Dallas, Austin, and San Antonio without a single drive. A facility management company can track maintenance across hundreds of buildings in real-time. The result: <strong>60% fewer site visits</strong>, <strong>$15,000+/month saved</strong> in travel costs, and decisions made in minutes instead of days.
                    </p>

                    {/* NEW: Progress Tracking Section */}
                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Construction Progress Tracking Software: From Gut Feeling to Hard Data</h2>
                    <p>
                        Traditional <strong>construction progress tracking</strong> relies on subjective estimates — a superintendent's "about 70% done" is rarely accurate. SpaceCapture's <strong>progress tracking software</strong> replaces guesswork with quantified data: AI counts installed fixtures, measures completed drywall areas, and compares photos against BIM models to calculate exact completion percentages.
                    </p>
                    <p>
                        Progress data is visualized on heat maps, Gantt-style timelines, and photo comparison sliders (before/after). Stakeholders see exactly which floors, units, or zones are ahead or behind schedule — enabling proactive resource reallocation before delays compound.
                    </p>

                    {/* NEW: Automated Monitoring Section */}
                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Automated Construction Monitoring with AI: Beyond Cameras</h2>
                    <p>
                        Traditional <strong>live construction site cameras</strong> provide video feeds but require someone to watch them. <strong>Automated construction monitoring</strong> takes this further — SpaceCapture's AI doesn't just record; it <em>understands</em> what it sees. Computer vision models analyze every photo for:
                    </p>
                    <ul className="space-y-2">
                        <li><strong>Structural defects:</strong> Cracks as thin as 0.3mm, corrosion, spalling, and misalignment — detected with 94.5% accuracy.</li>
                        <li><strong>Safety violations:</strong> Missing PPE, unguarded openings, exposed wiring, and blocked egress paths flagged in real-time.</li>
                        <li><strong>Material tracking:</strong> Installed outlets, pipes, panels, and fixtures are counted automatically for accurate progress quantification.</li>
                        <li><strong>Quality deviations:</strong> Paint runs, uneven grout, improper caulking, and tolerance violations caught before closeout.</li>
                    </ul>
                    <p>
                        Unlike static camera monitoring, SpaceCapture's AI works with photos from <strong>any device</strong> — smartphones, 360° cameras, drones, or tablets. No fixed camera installation required.
                    </p>

                    {/* NEW: Software vs Cameras Comparison */}
                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Construction Monitoring Software vs. Site Cameras: Which Is Better?</h2>
                    <div className="not-prose overflow-x-auto mb-12">
                        <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="text-left p-4 font-bold">Feature</th>
                                    <th className="text-left p-4 font-bold">Site Cameras</th>
                                    <th className="text-left p-4 font-bold">SpaceCapture Software</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Setup Cost", "$5,000–$20,000 per site", "Free app download"],
                                    ["AI Analysis", "Basic motion detection", "Defect detection, safety, material counting"],
                                    ["Offline Capability", "Requires constant power + internet", "Full offline mode"],
                                    ["Mobility", "Fixed positions only", "Any angle, any floor, any device"],
                                    ["Daily Reporting", "Manual review of footage", "Auto-generated PDF reports"],
                                    ["Scalability", "New camera per location", "Unlimited sites, one subscription"],
                                ].map(([feat, cam, sw], i) => (
                                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="p-4 font-medium text-slate-900">{feat}</td>
                                        <td className="p-4 text-slate-500">{cam}</td>
                                        <td className="p-4 text-green-700 font-medium">{sw}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Use Cases Section */}
                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Who Uses Real-Time Building Monitoring?</h2>
                    <p>
                        Real-time construction monitoring platforms serve diverse project types and stakeholders. Whether you manage a single commercial build or oversee a portfolio of infrastructure projects, live site data transforms how decisions are made.
                    </p>
                    <div className="not-prose grid md:grid-cols-3 gap-4 mb-12">
                        {[
                            { title: "General Contractors", desc: "Track subcontractor progress, manage RFIs, and ensure schedule adherence across all trades." },
                            { title: "Project Owners", desc: "See exactly where your investment stands without waiting for monthly stakeholder reports." },
                            { title: "Safety Managers", desc: "Monitor compliance in real-time, receive instant alerts, and maintain audit-ready documentation." },
                            { title: "Remote Teams", desc: "Manage jobsites across cities or countries from a single cloud dashboard." },
                            { title: "Solar & Energy", desc: "Track panel installation progress, inspect quality via AI, and document every phase." },
                            { title: "Infrastructure", desc: "Bridge, road, and tunnel projects with strict compliance timelines benefit from live reporting." },
                        ].map((item, i) => (
                            <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                                <p className="text-slate-600 text-xs m-0">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Comparison Section */}
                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Real-Time vs. Traditional Construction Monitoring</h2>
                    <div className="not-prose overflow-x-auto mb-12">
                        <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="text-left p-4 font-bold">Capability</th>
                                    <th className="text-left p-4 font-bold">Traditional</th>
                                    <th className="text-left p-4 font-bold">Real-Time (SpaceCapture)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Progress Updates", "Weekly PDF reports", "Instant photo-synced dashboards"],
                                    ["Defect Detection", "Manual walk-throughs", "AI-powered automatic flagging"],
                                    ["Safety Compliance", "Paper checklists", "Digital checklists with alerts"],
                                    ["Site Visits Required", "3–5 per week", "1–2 per week"],
                                    ["Daily Reporting Time", "1–2 hours manual", "Auto-generated in seconds"],
                                    ["Data Accessibility", "Office-only file servers", "Cloud — any device, anywhere"],
                                ].map(([cap, trad, rt], i) => (
                                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="p-4 font-medium text-slate-900">{cap}</td>
                                        <td className="p-4 text-slate-500">{trad}</td>
                                        <td className="p-4 text-green-700 font-medium">{rt}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* How It Works */}
                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">How SpaceCapture's Live Jobsite Monitoring Works</h2>
                    <div className="not-prose space-y-4 mb-12">
                        {[
                            { step: "1", title: "Download & Set Up", desc: "Install the free SpaceCapture app on iOS or Android. Create your project and define your jobsite geofence." },
                            { step: "2", title: "Field Crews Capture Data", desc: "Workers use the app to log inspections, snap photos, complete checklists, and clock in/out — even offline." },
                            { step: "3", title: "AI Processes Instantly", desc: "Photos are analyzed for defects. Daily reports are auto-generated. Dashboards update in real-time." },
                            { step: "4", title: "Stakeholders See Everything", desc: "Project owners, PMs, and safety managers access live data from any device — no more waiting for Friday updates." },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="flex-shrink-0 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-extrabold text-sm">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                                    <p className="text-slate-600 text-sm m-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Internal Links Section */}
                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Explore Related Solutions</h2>
                    <div className="not-prose grid md:grid-cols-2 gap-4 mb-12">
                        <Link href="/ai-defect-detection" className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all group">
                            <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                            <span className="text-slate-900 font-medium group-hover:text-orange-700 transition-colors">AI Defect Detection</span>
                        </Link>
                        <Link href="/construction-site-management" className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all group">
                            <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                            <span className="text-slate-900 font-medium group-hover:text-orange-700 transition-colors">Construction Site Management Software</span>
                        </Link>
                        <Link href="/site-inspection-software" className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all group">
                            <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                            <span className="text-slate-900 font-medium group-hover:text-orange-700 transition-colors">Site Inspection Software</span>
                        </Link>
                        <Link href="/blog/end-of-manual-punch-lists" className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all group">
                            <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                            <span className="text-slate-900 font-medium group-hover:text-orange-700 transition-colors">AI Punch Lists: Cut Closeout by 70%</span>
                        </Link>
                        <Link href="/blog/remote-site-monitoring-guide" className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all group">
                            <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                            <span className="text-slate-900 font-medium group-hover:text-orange-700 transition-colors">Remote Site Monitoring Guide</span>
                        </Link>
                        <Link href="/blog/real-time-progress-tracking" className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all group">
                            <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                            <span className="text-slate-900 font-medium group-hover:text-orange-700 transition-colors">Real-Time Progress Tracking</span>
                        </Link>
                        <Link href="/construction-field-software" className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all group">
                            <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                            <span className="text-slate-900 font-medium group-hover:text-orange-700 transition-colors">Construction Field Software</span>
                        </Link>
                        <Link href="/offline-field-inspection-app" className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all group">
                            <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                            <span className="text-slate-900 font-medium group-hover:text-orange-700 transition-colors">Offline Field Inspection App</span>
                        </Link>
                    </div>

                    {/* FAQ Section */}
                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Frequently Asked Questions About Construction Monitoring</h2>
                    <div className="not-prose space-y-4 mb-12">
                        {faqItems.map((faq, i) => (
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

        {/* FAQ JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqItems.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            })
          }}
        />

        {/* HowTo Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Set Up Real-Time Construction Monitoring",
              "description": "A step-by-step guide to implementing live jobsite monitoring with SpaceCapture's AI-powered construction monitoring software.",
              "totalTime": "PT10M",
              "step": [
                {
                  "@type": "HowToStep",
                  "position": 1,
                  "name": "Download & Set Up",
                  "text": "Install the free SpaceCapture app on iOS or Android. Create your project and define your jobsite geofence."
                },
                {
                  "@type": "HowToStep",
                  "position": 2,
                  "name": "Field Crews Capture Data",
                  "text": "Workers use the app to log inspections, snap photos, complete checklists, and clock in/out — even offline."
                },
                {
                  "@type": "HowToStep",
                  "position": 3,
                  "name": "AI Processes Instantly",
                  "text": "Photos are analyzed for defects. Daily reports are auto-generated. Dashboards update in real-time."
                },
                {
                  "@type": "HowToStep",
                  "position": 4,
                  "name": "Stakeholders See Everything",
                  "text": "Project owners, PMs, and safety managers access live data from any device — no more waiting for Friday updates."
                }
              ]
            })
          }}
        />
      </main>
    </div>
  );
}
