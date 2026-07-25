"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  Map, 
  Building2, 
  Settings, 
  BookOpen, 
  Users, 
  FileText, 
  ShieldCheck, 
  HelpCircle,
  LayoutGrid,
  Zap,
  Hammer,
  Truck,
  Factory,
  Droplets,
  Wifi,
  Wrench,
  Globe
} from 'lucide-react';

const SITEMAP_SECTIONS = [
  {
    title: "Main Pages",
    icon: Home,
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Pricing", href: "/pricing" },
      { label: "Request a Demo", href: "/request-a-demo" },
      { label: "Contact / Trust Center", href: "/trust" },
    ]
  },
  {
    title: "Products & Features",
    icon: Settings,
    links: [
      { label: "Core Functions", href: "/core-functions" },
      { label: "Visual Form Builder", href: "/visual-form-builder" },
      { label: "AI Detection Analysis", href: "/ai-detection" },
      { label: "Engagement Flows", href: "/engagement-flows" },
      { label: "Access Control", href: "/access-control" },
      { label: "Deep Insights & Reports", href: "/reports" },
      { label: "Flexible Hosting", href: "/hosting" },
      { label: "Integrations", href: "/integrations" },
      { label: "ROI Calculator", href: "/tools/switching-calculator" },
    ]
  },
  {
    title: "Industries",
    icon: Building2,
    links: [
      { label: "Construction", href: "/industries/construction" },
      { label: "Oil & Gas", href: "/industries/oil-and-gas" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "Insurance & Claims", href: "/industries/insurance" },
      { label: "Telecommunications", href: "/industries/telecom" },
      { label: "Utilities", href: "/industries/utilities" },
      { label: "HVAC & Plumbing", href: "/industries/hvac" },
      { label: "Logistics", href: "/industries/logistics" },
      { label: "Facility Management", href: "/industries/facility-management" },
    ]
  },
  {
    title: "Solutions",
    icon: Zap,
    links: [
      { label: "Site Inspection Software", href: "/site-inspection-software" },
      { label: "AI Defect Detection", href: "/ai-defect-detection" },
      { label: "AI Detection API", href: "/alternatives/ai-detection-api" },
      { label: "Construction Field Software", href: "/construction-field-software" },
      { label: "Construction Inspection Software", href: "/construction-inspection-software" },
      { label: "Construction Site Management", href: "/construction-site-management" },
      { label: "Defect Detection AI", href: "/defect-detection-ai" },
      { label: "Field Data Capture Software", href: "/field-data-capture-software" },
    ]
  },
  {
    title: "Resources & Knowledge",
    icon: BookOpen,
    links: [
      { label: "Resources Hub", href: "/resources" },
      { label: "Templates", href: "/resources/templates" },
      { label: "Knowledge Base", href: "/glossary" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
      { label: "Free Field App", href: "/app-download" },

    ]
  },
  {
    title: "Comparisons",
    icon: LayoutGrid,
    links: [
      { label: "vs Raken", href: "/compare/raken" },
      { label: "Alternatives", href: "/alternatives/safetyculture" }, // Linking to one of the alts as a hub
    ]
  },
  {
    title: "Who We Serve",
    icon: Users,
    links: [
      { label: "General Contractors", href: "/who-we-serve/general-contractors" },
      { label: "Facility Managers", href: "/who-we-serve/facility-managers" },
      { label: "Subcontractors", href: "/who-we-serve/subcontractors" },
      { label: "Property Developers", href: "/who-we-serve/property-developers" },
      { label: "Architects & Engineers", href: "/who-we-serve/architects-engineers" },
    ]
  }
];

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20 pt-32">
       
       {/* Header */}
       <div className="container mx-auto px-6 mb-16 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-6">
             <Map className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Sitemap
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
             An overview of all the pages available on SpaceCapture.
          </p>
       </div>

       {/* Links Grid */}
       <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SITEMAP_SECTIONS.map((section, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <section.icon className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
                </div>
                
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link 
                        href={link.href}
                        className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-400 transition-colors"></span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
       </div>

    </main>
  );
}
