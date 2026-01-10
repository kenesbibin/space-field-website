import React from 'react';
import type { Metadata } from 'next';
import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'AI-Powered Safety Compliance for Subcontractors | SpaceCapture',
  description: 'Automating the safety culture. Ensuring every trade partner meets your standards without constant policing.',
};

export default function ArticlePage() {
  return (
    <>
    <BlogPostLayout 
      title="AI-Powered Safety Compliance for Subcontractors"
      subtitle="Ensure every worker on site is compliant. AI checks for PPE and certification automatically."
      category="Workforce Management"
    >
      <p>
        General Contractors carry the ultimate liability for job site safety, but the work is often done by dozens of different subcontractor crews. Maintaining a consistent safety culture across this fragmented workforce is one of the hardest jobs in construction.
      </p>
      
      <h2>The Challenge of Oversight</h2>
      <p>
        You can't have a safety officer watching every sub. Toolbox talks help, but they fade as the pressure of the schedule mounts. When deadlines loom, corners get cut—safety glasses come off, vests are unzipped, and tie-offs are forgotten.
      </p>
      
      <h2>Automated Compliance Checks</h2>
      <p>
        SpaceCapture brings AI into the daily workflow. It starts at the gate and continues through the day.
      </p>
      <ul>
        <li><strong>Visual PPE Verification:</strong> Cameras at turnstiles or on mobile sign-in apps verify that every worker entering the site has the required gear.</li>
        <li><strong>Certification Matching:</strong> Facial recognition (where permitted) works with badging systems to ensure the person operating the forklift actually holds the valid certification.</li>
        <li><strong>Daily Log Audits:</strong> AI scans daily logs submitted by subs. If a "Safe Work Method Statement" (SWMS) is missing or copied from yesterday, it flags it for the superintendent.</li>
      </ul>

      <h2>Protecting the Subs Too</h2>
      <p>
        This isn't just about catching rule-breakers. It protects the subcontractors by providing objective proof that they <em>were</em> compliant. If an incident occurs, the digital trail proves that safety protocols were followed, protecting all parties from unfounded liability.
      </p>
    </BlogPostLayout>
    <CallToAction />
    </>
  );
}
