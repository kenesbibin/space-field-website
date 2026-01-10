import React from 'react';
import type { Metadata } from 'next';
import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'Enhancing Remote Inspections with 360 AI Capture | SpaceCapture',
  description: 'The job site on your desk. How 360-degree capture and AI bring stakeholders to the field virtually.',
};

export default function ArticlePage() {
  return (
    <>
    <BlogPostLayout 
      title="Enhancing Remote Inspections with 360 AI Capture"
      subtitle="Walk the site from your office. 360-degree capture + AI brings the jobsite to stakeholders."
      category="Virtual Presence"
    >
      <p>
        Project Executives, Owners, and Architects can't visit every job site every week. Travel is expensive and time-consuming. Yet, decisions often stall because key stakeholders "need to see it" before approving a change.
      </p>
      
      <h2>The Virtual Job Walk</h2>
      <p>
        360-degree cameras have democratized reality capture. A field engineer can strap a camera to their hard hat and walk the site in 20 minutes.
      </p>
      <p>
        SpaceCapture ingests this footage and maps it to the floor plan. It creates a Google Street View-style experience of the project.
      </p>
      
      <h2>AI Adds Context</h2>
      <p>
        A 360 photo alone is just a picture. SpaceCapture's AI adds intelligence:
      </p>
      <ul>
        <li><strong>Progress & Change:</strong> "Time Travel" mode allows you to view the same spot on different dates to see progress or what is behind the wall.</li>
        <li><strong>Tagging:</strong> The AI identifies assets (e.g., "Chiller Unit 1") and links them to their submittals and O&M manuals.</li>
        <li><strong>Issue Highlighting:</strong> It highlights potential issues or changes for the remote viewer to focus on.</li>
      </ul>

      <h2>Faster Decisions</h2>
      <p>
        Now, the OAC (Owner-Architect-Contractor) meeting doesn't happen in a trailer looking at spreadsheets. It happens inside the virtual model. Decisions are made instantly because everyone can see the reality, regardless of where they are in the world.
      </p>
    </BlogPostLayout>
    <CallToAction />
    </>
  );
}
