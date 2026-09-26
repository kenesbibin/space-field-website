import React from 'react';
import { ExternalLink } from 'lucide-react';
import CareersAiPrompt from '@/components/CareersAiPrompt';
import {
  ChatGptIcon,
  ClaudeIcon,
  GoogleAiIcon,
  PerplexityIcon,
  GrokIcon,
} from '@/components/AiBrandIcons';
import { CAREERS_AI_PROMPT } from '@/lib/careers-data';

const AI_LINKS = [
  { name: 'ChatGPT', href: `https://chatgpt.com/?q=${encodeURIComponent(CAREERS_AI_PROMPT)}`, Icon: ChatGptIcon },
  { name: 'Claude', href: `https://claude.ai/new?q=${encodeURIComponent(CAREERS_AI_PROMPT)}`, Icon: ClaudeIcon },
  { name: 'Google AI', href: `https://gemini.google.com/app?q=${encodeURIComponent(CAREERS_AI_PROMPT)}`, Icon: GoogleAiIcon },
  { name: 'Perplexity', href: `https://www.perplexity.ai/search?q=${encodeURIComponent(CAREERS_AI_PROMPT)}`, Icon: PerplexityIcon },
  { name: 'Grok', href: `https://grok.com/search?q=${encodeURIComponent(CAREERS_AI_PROMPT)}`, Icon: GrokIcon },
];

/**
 * "Ask for a Summary" GEO card — shared by /careers and every /careers/[slug]
 * detail page, matching the SpaceNexus layout (heading + copy button on the
 * left, logo chips on the right).
 */
export default function CareersAiSummaryCard() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Ask for a Summary of SpaceCapture
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5 max-w-md">
              Open your preferred AI assistant with a ready-made SpaceCapture summary prompt.
            </p>
            <CareersAiPrompt prompt={CAREERS_AI_PROMPT} />
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            {AI_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:border-slate-300 hover:shadow-md transition-all"
              >
                <link.Icon className="w-4 h-4 shrink-0" />
                {link.name}
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
