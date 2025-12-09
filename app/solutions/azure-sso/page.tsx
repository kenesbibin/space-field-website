import React from 'react';
import type { Metadata } from 'next';
import AzureSsoSection from '@/components/AzureSsoSection';

export const metadata: Metadata = {
  title: 'Azure AD SSO & Okta Integration | SpaceCapture',
  description:
    'Deliver Azure SSO, Azure AD SSO, Azure Single Sign On, Microsoft Single Sign On, and Okta Azure AD integration across inspection, fleet, and construction software.',
  keywords: [
    'azure sso',
    'azure ad sso',
    'azure single sign on',
    'azure ad single sign on',
    'azure ad sso setup',
    'azure sso integration',
    'azure active directory sso',
    'microsoft single sign on',
    'microsoft azure sso',
    'microsoft azure single sign on',
    'okta azure ad',
    'okta azure ad integration',
    'okta integration with azure ad',
    'okta azure',
    'okta and azure ad'
  ],
  alternates: {
    canonical: '/solutions/azure-sso',
  },
};

export default function AzureSsoPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <AzureSsoSection />
    </main>
  );
}
