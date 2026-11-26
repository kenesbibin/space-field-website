import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'SpaceCapture vs Procore: Field Workflow Comparison',
  description:
    'Compare SpaceCapture and Procore by product focus, field inspection workflows, visual review, project operations, and deployment requirements.',
  alternates: {
    canonical: 'https://spacecapture.ai/compare/procore',
  },
};

export default function ProcoreComparisonLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
