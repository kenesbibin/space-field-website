"use client"

import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Twitter, Youtube, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 pt-16 pb-8 border-t border-slate-800">
      
      {/* Background Gradient Glow (Matches your SPACE CAPTURE Purple/Blue theme) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.15),transparent_50%)]"></div>

      <div className="container relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
        
        {/* Main Content */}
        <div className="mb-12 flex flex-col items-center text-center">
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="SPACE CAPTURE Home"
            >
              <span className="text-2xl font-extrabold text-white tracking-tight">SPACE CAPTURE</span>
            </Link>
          </motion.div>

        

         

          {/* Social Media Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-5"
          >
            <SocialLink href="https://x.com/pmspace0707" icon={Twitter} label="Twitter" />
            <SocialLink href="https://www.instagram.com/space_ai77/" icon={Instagram} label="Instagram" />
            <SocialLink href="https://www.youtube.com/@spaceai-7" icon={Youtube} label="YouTube" />
            <SocialLink href="https://www.linkedin.com/company/spaceaiapp.com" icon={Linkedin} label="LinkedIn" />
            <SocialLink href="https://github.com/pmspaceai7-wq" icon={Github} label="GitHub" />
          </motion.div>
        </div>

        {/* Copyright / Legal */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8"
        >
          <p className="text-center text-xs text-slate-500">
            © 2025 SPACE CAPTURE. All rights reserved.
          </p>
          
       
        </motion.div>
      </div>
    </footer>
  );
}

// Helper Component for Social Links
const SocialLink = ({ href, icon: Icon, label }: { href: string, icon: React.ElementType, label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:text-blue-400"
    aria-label={label}
  >
    <Icon className="h-5 w-5" />
  </a>
);


