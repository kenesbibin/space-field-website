import React from 'react';
import type { Metadata } from 'next';
import ConstructionTemplatesSection from '@/components/ConstructionTemplatesSection';

export const metadata: Metadata = {
  title: 'Construction Templates & Safety Checklists | SpaceCapture',
  description:
    'Download scope of work templates, plumbing work order templates, electrical work order templates, safety checklist templates, and inspection reports.',
  keywords: [
    'scope of work template',
    'scope of work template free',
    'scope of work template pdf',
    'project scope of work template',
    'construction scope of work template',
    'contractor scope of work template',
    'plumbing work order template',
    'plumbing work order',
    'plumbing inspection report template',
    'plumbing report template',
    'electrical work order template',
    'safety checklist template',
    'job hazard analysis software',
    'job safety analysis app',
    'forklift checklist booklet',
    'roof inspection report template free',
    'property inspection template',
    'property inspection report template'
  ],
  alternates: {
    canonical: '/resources/templates',
  },
};

export default function TemplatesPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <ConstructionTemplatesSection />
    </main>
  );
}
