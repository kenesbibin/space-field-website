import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Vertex Builders: AI Rework Case Study',
  description:
    'See how Vertex Builders used AI site monitoring to cut rework by 40%, save 12 hours weekly, and improve construction-site safety.',
  alternates: {
    canonical: 'https://spacecapture.ai/blog/reduce-rework-ai-case-study',
  },
};

export default function CaseStudyLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}