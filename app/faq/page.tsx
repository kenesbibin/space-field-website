import React from 'react';
import FaqSection from '@/components/FaqSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQs | Space Capture Knowledge Base',
    description: 'Find answers to common questions about Space Capture, from AI accuracy and offline capabilities to data security and enterprise pricing.',
};

export default function FaqPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <FaqSection isFullPage={true} />
        </main>
    );
}
