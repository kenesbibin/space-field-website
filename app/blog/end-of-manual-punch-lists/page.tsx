import React from 'react';
import type { Metadata } from 'next';
import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'The End of Manual Punch Lists: AI Automation | SpaceCapture',
  description: 'Automating the most tedious part of construction. How AI detects defects and creates punch items instantly.',
};

export default function ArticlePage() {
  return (
    <>
    <BlogPostLayout 
      title="The End of Manual Punch Lists: AI Automation"
      subtitle="Stop walking the site with a clipboard. See how AI detects defects and auto-generates your punch list in real-time."
      category="Quality Control"
    >
      <p>
        The "Punch walk" is a dreaded ritual in construction. Contractors, architects, and owners walk the site, pointing at scuffs, unpainted walls, and missing fixtures, while someone furiously scribbles notes or taps on a tablet.
      </p>
      
      <h2>The Problem with Manual Punching</h2>
      <p>
        Manual punch lists are subjective and inconsistent. One architect might flag a hairline crack; another might ignore it. Descriptions like "fix wall in hallway" are vague, leading to endless back-and-forth emails and rework.
      </p>
      
      <h2>Automated Defect Recognition</h2>
      <p>
        SpaceCapture changes this workflow entirely. Instead of "logging" a defect, you simply capture the room with a 360-degree camera or a standard smartphone video walk.
      </p>
      <p>
        Our AI engine analyzes the visual data and identifies common defects automatically:
      </p>
      <ul>
        <li><strong>Surface Defects:</strong> Scratches, dents, and paint imperfections.</li>
        <li><strong>Installation Errors:</strong> Missing outlets, misaligned fixtures, or incomplete trim.</li>
        <li><strong>Cleanliness:</strong> Debris left on site or uncleaned windows.</li>
      </ul>

      <h2>From Detection to Resolution</h2>
      <p>
        The AI doesn't just spot the issue; it creates the ticket. It drops a pin on the digital floor plan, attaches the high-res photo, categorizes the trade (e.g., "Electrical" or "Drywall"), and even suggests a severity level.
      </p>
      <p>
        This speeds up project closeout by weeks. Subcontractors receive clear, visual punch lists with exact locations. No more "I couldn't find the scratch."
      </p>
    </BlogPostLayout>
    <CallToAction />
    </>
  );
}
