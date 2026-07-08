import React from 'react';
import type { Metadata } from 'next';
import CallToActionSection from '@/components/CallToAction';
import AccessControlSection from '@/components/AcessControlSection';
import { SolutionDetails } from '@/components/templates/SolutionDetails';
import { SOLUTIONS_DATA } from '@/lib/seo-data';


// SEO Metadata
export const metadata: Metadata = {
  title: 'Role-Based Access Control (RBAC) | SpaceCapture',
  description: 'Secure your field data with Space Capture’s granular permissions. Assign tasks, manage user roles, and control access to specific projects or forms.',
  keywords: ['RBAC', 'user management', 'access control', 'field data security', 'task assignment', 'Space Capture'],
  alternates: {
    canonical: 'https://spacecapture.ai/access-control',
  },
  openGraph: {
    title: 'Space Capture Access Control',
    description: 'Enterprise-grade security and user management.',
    url: 'https://spacecapture.ai/access-control',
    siteName: 'Space Capture',
    locale: 'en_US',
    type: 'website',
  },
};

export default function AccessControlPage() {
  return (
    <main className="w-full overflow-x-hidden">
        <AccessControlSection/>
      <SolutionDetails data={SOLUTIONS_DATA['access-control']} />
      <CallToActionSection/>
    </main>
  );
}