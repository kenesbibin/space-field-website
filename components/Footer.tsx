"use client"

import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Twitter, Youtube, Github, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 pt-20 pb-10 border-t border-slate-800">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.15),transparent_40%)]"></div>

      <div className="container relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
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
              <SocialLink href="https://x.com/pmspace0707" icon={Twitter} label="Twitter" />
              <SocialLink href="https://www.instagram.com/space_ai77/" icon={Instagram} label="Instagram" />
              <SocialLink href="https://www.youtube.com/@spaceai-7" icon={Youtube} label="YouTube" />
              <SocialLink href="https://www.linkedin.com/company/spaceaiapp.com" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="https://github.com/pmspaceai7-wq" icon={Github} label="GitHub" />
            </div>
          </div>

          {/* Column 2: Core Features */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Core Features</h3>
            <ul className="space-y-4">
              <FooterLink href="/visual-form-builder">Visual Form Builder</FooterLink>
              <FooterLink href="/ai-detection">AI Detection Analysis</FooterLink>
              <FooterLink href="/engagement-flows">Engagement Flows</FooterLink>
              <FooterLink href="/access-control">Access Control</FooterLink>
              <FooterLink href="/reports">Deep Insights</FooterLink>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Industries</h3>
            <ul className="space-y-4">
              <FooterLink href="/industries/construction">Construction Punch Lists</FooterLink>
              <FooterLink href="/industries/telecommunication">Telecommunications</FooterLink>
              <FooterLink href="/industries/manufacturing">Manufacturing</FooterLink>
              <FooterLink href="/industries/oil-and-gas">Oil & Gas Inspection</FooterLink>
              <FooterLink href="/industries/utilities">Utilities</FooterLink>
              <FooterLink href="/industries/hvac">HVAC & Plumbing</FooterLink>
              <FooterLink href="/industries/logistics">Logistics</FooterLink>
              <FooterLink href="/industries/facility-management">Facility Management</FooterLink>
            </ul>
          </div>

          {/* Column 4: Developers (REMOVED PER REQUEST) - Replaced with Company */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-4">
              <FooterLink href="/about-us">About Us</FooterLink>
              <FooterLink href="/book-a-demo" className="text-blue-400 font-bold">Book a Demo</FooterLink>
              <li className="pt-4 pb-2 text-xs font-bold text-slate-600 uppercase tracking-widest">Resources</li>
              <FooterLink href="/blog/end-of-digital-paper">Manifesto: End of Digital Paper</FooterLink>
              <FooterLink href="/technology/computer-vision">Tech: Inside the Eye</FooterLink>
              <FooterLink href="/trust/hallucination-free">Trust: AI Assurance</FooterLink>
              <FooterLink href="/resources/case-study-reactive-to-predictive">Case Study: Predictive Maint.</FooterLink>
              <FooterLink href="/resources/iso-9001-guide">Guide: ISO 9001 Autopilot</FooterLink>
              <li className="pt-4 pb-2 text-xs font-bold text-slate-600 uppercase tracking-widest">Compare</li>
              <FooterLink href="/alternatives/safetyculture">vs SafetyCulture</FooterLink>
              <FooterLink href="/alternatives/gocanvas">vs GoCanvas</FooterLink>
              <li className="pt-4 pb-2 text-xs font-bold text-slate-600 uppercase tracking-widest">Tools</li>
              <FooterLink href="/tools/switching-calculator">Switching Calculator</FooterLink>
            </ul>
          </div>

          {/* Column 5: Legal/Support (New column to balance layout) */}
        

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
             <p className="text-xs text-slate-500">
               © 2025 SPACE CAPTURE. All rights reserved.
             </p>
             <p className="text-[10px] text-slate-600 mt-1">
               2500 MARCONI AVE, STE 101, SACRAMENTO, CA 95821
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