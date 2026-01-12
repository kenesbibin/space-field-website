import React from 'react';
import { Metadata } from 'next';
import AboutUsContent from '@/components/AboutUsContent';

export const metadata: Metadata = {
    title: 'About Us - SPACE CAPTURE',
    description: 'Learn about SPACE CAPTURE, our mission to revolutionize field operations with innovative mobile solutions for construction, maintenance, and inspection teams.',
    alternates: {
        canonical: 'https://spacecapture.ai/about-us',
    },
};

export default function AboutUsPage() {
    return <AboutUsContent />;
}