"use client"

import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Twitter, Youtube, Github, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 pt-20 pb-10 border-t border-slate-800">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.15),transparent_40%)]"></div>

      <div className="container relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Brand & About (2 cols wide) */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center ring-4 ring-slate-900 group-hover:ring-slate-800 transition-all duration-300">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">SPACE CAPTURE</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              The ultimate mobile command center for field operations. Streamline tasks, automate reporting, and sync your workforce in real-time with AI-powered tools.
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://x.com/SpaceCapture7" icon={Twitter} label="Twitter" />
              <SocialLink href="https://www.instagram.com/spacecapture77/" icon={Instagram} label="Instagram" />
              <SocialLink href="https://www.youtube.com/@SpaceCapture7" icon={Youtube} label="YouTube" />
              <SocialLink href="https://www.linkedin.com/company/spaceai-capture/" icon={Linkedin} label="LinkedIn" />
            </div>
          </div>

          {/* Column 2: Core Features & Solutions */}
          <div className="space-y-10">
            <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Core Features</h3>
                <ul className="space-y-4">
                  <FooterLink href="/core-functions">Core Platform</FooterLink>
                  <FooterLink href="/visual-form-builder">Visual Form Builder</FooterLink>
                  <FooterLink href="/engagement-flows">Engagement Flows</FooterLink>
                  <FooterLink href="/access-control">Access Control</FooterLink>
                  <FooterLink href="/reports">Deep Insights</FooterLink>
                  <FooterLink href="/integrations">Integrations</FooterLink>
                </ul>
            </div>
            <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Solutions</h3>
                <ul className="space-y-4">
                  <FooterLink href="/site-inspection-software">Site Inspection Software</FooterLink>
                  <FooterLink href="/hvac-inspection-software">HVAC Inspection Software</FooterLink>
                  <FooterLink href="/telecom-tower-audit-app">Telecom Tower Audit App</FooterLink>
                  <FooterLink href="/solar-panel-inspection-ai">Solar Panel Inspection AI</FooterLink>
                  <FooterLink href="/ai-defect-detection">AI Defect Detection</FooterLink>
                  <FooterLink href="/ai-construction-defect-detection">AI Construction Defect Detection</FooterLink>
                  <FooterLink href="/ai-detection-api">AI Detection API</FooterLink>
                  <FooterLink href="/construction-field-software">Construction Field Software</FooterLink>
                  <FooterLink href="/construction-inspection-software">Construction Inspection Software</FooterLink>
                  <FooterLink href="/construction-site-management">Construction Site Management</FooterLink>
                  <FooterLink href="/defect-detection-ai">Defect Detection AI</FooterLink>
                  <FooterLink href="/field-data-capture-software">Field Data Capture Software</FooterLink>
                  {/* Additional Solutions */}
                  <FooterLink href="/offline-field-inspection-app">Offline Field App</FooterLink>
                  <FooterLink href="/digitize-paper-forms">Digitize Paper Forms</FooterLink>
                  <FooterLink href="/field-service-management-software">Field Service Management</FooterLink>
                  <FooterLink href="/ai-defect-detection-construction">AI Defect Detection (Legacy)</FooterLink>
                  <FooterLink href="/field-workforce-management">Workforce Management</FooterLink>
                  <FooterLink href="/real-time-construction-monitoring">Real-Time Monitoring</FooterLink>
                  <FooterLink href="/oil-and-gas-inspection-software">Oil & Gas Inspection Software</FooterLink>
                </ul>
            </div>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Industries</h3>
            <ul className="space-y-4">
              <FooterLink href="/industries/construction">Construction</FooterLink>
              <FooterLink href="/industries/oil-and-gas">Oil & Gas</FooterLink>
              <FooterLink href="/industries/facility-management">Facility Management</FooterLink>
              <FooterLink href="/industries/telecom">Telecom</FooterLink>
              <FooterLink href="/industries/insurance">Insurance</FooterLink>
              <FooterLink href="/industries/real-estate">Real Estate</FooterLink>
              <FooterLink href="/industries/manufacturing">Manufacturing</FooterLink>
              <FooterLink href="/industries/utilities">Utilities</FooterLink>
              <FooterLink href="/industries/hvac">HVAC & Plumbing</FooterLink>
              <FooterLink href="/industries/logistics">Logistics</FooterLink>
            </ul>
          </div>

          {/* Column 4: Resources & Support */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Resources & Support</h3>
            <ul className="space-y-4">
              <FooterLink href="/about-us">About Us</FooterLink>
              <FooterLink href="/trust">Trust Center</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/faq">Help & FAQ</FooterLink>
              <FooterLink href="/compare/raken">Compare vs Raken</FooterLink>
              <FooterLink href="/compare/planradar">Compare vs PlanRadar</FooterLink>
              <FooterLink href="/alternatives/fieldwire">Fieldwire Alternative</FooterLink>
              <FooterLink href="/sitemaps">Sitemap</FooterLink>
              <FooterLink href="/app-download" className="text-blue-400 font-bold">Free Field App</FooterLink>
              <FooterLink href="/request-a-demo" className="text-blue-400 font-bold">Request a Demo</FooterLink>
              <FooterLink href="/blogs" className="text-purple-400 font-bold flex items-center gap-2">
                 Blogs <ArrowRight className="w-3 h-3" />
              </FooterLink>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        
        {/* Global Locations */}
        <div className="pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Singapore */}
            <div className="space-y-2">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Singapore (HQ)
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                ISPACE BUILDING #04-39,<br/>
                7 SOON LEE STREET,<br/>
                SINGAPORE 627608
              </p>
              <div className="flex items-center gap-4 text-[10px] text-slate-600 font-mono">
                <span>1.34°, 103.70°</span>
                <a href="https://www.google.com/maps/search/?api=1&query=7+Soon+Lee+Street+Singapore+627608" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
                  View Map →
                </a>
              </div>
            </div>

            {/* USA */}
            <div className="space-y-2">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> USA
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                2500 MARCONI AVE, STE 101,<br/>
                SACRAMENTO, CA 95821 USA
              </p>
              <div className="flex items-center gap-4 text-[10px] text-slate-600 font-mono">
                 <span>38.62°, -121.38°</span>
                <a href="https://www.google.com/maps/search/?api=1&query=2500+Marconi+Ave+Ste+101+Sacramento+CA+95821" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-400">
                  View Map →
                </a>
              </div>
            </div>

            {/* Dubai */}
            <div className="space-y-2">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Dubai
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Middle East - Regional Office<br/>
                Business Bay, Dubai, UAE
              </p>
              <div className="flex items-center gap-4 text-[10px] text-slate-600 font-mono">
                <span>25.28°, 55.31°</span>
                <a href="https://www.google.com/maps/search/?api=1&query=Business+Bay+Dubai" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-400">
                  View Map →
                </a>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
             <p className="text-xs text-slate-600">
               © 2026 SPACE CAPTURE. All rights reserved.
             </p>
             <p className="text-[10px] text-slate-600">
               PHONE: +1 (419) 820-1487
             </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

// Helper Components
const SocialLink = ({ href, icon: Icon, label }: { href: string, icon: React.ElementType, label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 transition-all duration-300 hover:bg-slate-800 hover:text-white hover:-translate-y-1 border border-slate-800"
    aria-label={label}
  >
    <Icon className="h-5 w-5" />
  </a>
);

const FooterLink = ({ href, children, className = "" }: { href: string, children: React.ReactNode, className?: string }) => (
  <li>
    <Link 
      href={href} 
      className={`text-sm text-slate-400 hover:text-white transition-colors block ${className}`}
    >
      {children}
    </Link>
  </li>
);