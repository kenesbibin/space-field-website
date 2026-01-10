import React from 'react';
import type { Metadata } from 'next';
import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'Real-Time Progress Tracking vs. Daily Logs | SpaceCapture',
  description: 'Why asking "What did you do today?" is outdated. Automated progress tracking via reality capture.',
};

export default function ArticlePage() {
  return (
    <>
    <BlogPostLayout 
      title="Real-Time Progress Tracking vs. Daily Logs"
      subtitle="Why manual daily logs are obsolete. AI measures installed quantities and validates schedule progress."
      category="Project Controls"
    >
      <p>
        The "Daily Log" is a fiction we all agree to believe. At the end of a long shift, a foreman tiredly types "Installed drywall on Level 4" into an app.
      </p>
      <p>
        Did they finish the level? Was it taped? Was it sanded? The log rarely says. It's a binary "work was done" statement that lacks fidelity.
      </p>
      
      <h2>Visual Progress Quantification</h2>
      <p>
        SpaceCapture replaces subjective logs with objective reality. A quick 360-video walk of the site does the measuring for you.
      </p>
      <ul>
        <li><strong>Quantity Takeoff:</strong> The AI compares the video to the BIM model. It calculates: "84% of drywall installed on Level 4. Estimate completion: 2 days."</li>
        <li><strong>Schedule Validation:</strong> It overlays this percentage against the Gantt chart. If framing is falling behind, the project manager gets an alert <em>now</em>, not at the end of the month.</li>
        <li><strong>Payment Verification:</strong> Pay apps are approved based on verified install percentages, not guesstimates. This speeds up cash flow for subs and protects owners from overpayment.</li>
      </ul>

      <h2>Trust Through Data</h2>
      <p>
        When progress is measured by sensors and AI rather than opinions, disputes disappear. The conversation shifts from "I thought you were done" to "The data shows 90% completion." It brings objective truth to the construction schedule.
      </p>
    </BlogPostLayout>
    <CallToAction />
    </>
  );
}
