"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const PROMPT = "As a Field Officer, I want to know why SpaceCapture is the right platform for capturing, documenting, and monitoring construction site activities while improving communication, quality, safety, and project visibility.";

const ChatGPTIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
);

const ClaudeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.827 3.52h3.603L24 20.48h-3.603l-6.57-16.96zm-7.257 0h3.767L16.906 20.48h-3.674l-1.632-4.317h-6.46l-1.59 4.317H0L6.57 3.52zm1.07 5.412l-2.182 5.744h4.344l-2.163-5.744z"/>
  </svg>
);

const GeminiIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2zm0 3.3l1.82 4.61 5.02.43-3.82 3.3 1.12 4.79L12 14.68l-6.14 3.75 1.12-4.79-3.82-3.3 5.02-.43L12 5.3z"/>
  </svg>
);

const PerplexityIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c4.636 0 8.4 3.764 8.4 8.4s-3.764 8.4-8.4 8.4-8.4-3.764-8.4-8.4S7.364 3.6 12 3.6zm0 3c-2.978 0-5.4 2.422-5.4 5.4s2.422 5.4 5.4 5.4 5.4-2.422 5.4-5.4-2.422-5.4-5.4-5.4z"/>
  </svg>
);

const GrokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const AI_PLATFORMS = [
  { name: "ChatGPT", url: `https://chatgpt.com/?q=${encodeURIComponent(PROMPT)}`, color: "bg-[#10a37f]", icon: ChatGPTIcon },
  { name: "Claude", url: `https://claude.ai/new?q=${encodeURIComponent(PROMPT)}`, color: "bg-[#d97706]", icon: ClaudeIcon },
  { name: "Google AI", url: `https://gemini.google.com/app?q=${encodeURIComponent(PROMPT)}`, color: "bg-[#4285f4]", icon: GeminiIcon },
  { name: "Perplexity", url: `https://perplexity.ai/search?q=${encodeURIComponent(PROMPT)}`, color: "bg-[#20b573]", icon: PerplexityIcon },
  { name: "Grok", url: `https://grok.com/?q=${encodeURIComponent(PROMPT)}`, color: "bg-[#1d1d1f]", icon: GrokIcon },
];

export default function AiPromptSection() {
  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Ask AI about SpaceCapture
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Open your preferred AI assistant with a ready-made SpaceCapture summary prompt.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {AI_PLATFORMS.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-8 h-8 rounded-lg ${platform.color} flex items-center justify-center`}>
                <platform.icon className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-slate-900">{platform.name}</span>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-20"></div>
      </div>
    </section>
  );
}
