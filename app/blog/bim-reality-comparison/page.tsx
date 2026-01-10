import React from 'react';
import type { Metadata } from 'next';
import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'Reducing Rework with BIM-to-Reality AI Comparison | SpaceCapture',
  description: 'Catching the drift before it becomes a demo. Overlaying the model on the real world to spot deviations.',
};

export default function ArticlePage() {
  return (
    <>
    <BlogPostLayout 
      title="Reducing Rework with BIM-to-Reality AI Comparison"
      subtitle="Overlay the model on the real world. Catch deviations early by comparing as-built to as-designed."
      category="BIM & VDC"
    >
      <p>
        Rework is the silent killer of construction profits. It accounts for up to 5-10% of total project costs. The primary cause? Building something slightly differently than the plan, and not realizing it until the next trade tries to install their work.
      </p>
      
      <h2>The "Clash" in Reality</h2>
      <p>
        We run clash detection in VDC (Virtual Design and Construction) meetings to ensure pipes don't hit ducts in the model. But we rarely run "clash detection" between the model and the physical site.
      </p>
      <p>
        If a concrete sleeve is poured 2 inches off, the model says it's fine, but the pipe won't fit.
      </p>
      
      <h2>Augmented Reality Validation</h2>
      <p>
        SpaceCapture brings the BIM model to the field. Using AR (Augmented Reality) on a tablet or phone, superintendents can overlay the 3D model onto the live camera view.
      </p>
      <ul>
        <li><strong>Pre-Pour Inspections:</strong> Visualize where the embeds <em>should</em> be before the concrete truck arrives. Spot the missing sleeve instantly.</li>
        <li><strong>In-Wall QC:</strong> "See" through walls to verify that backing and blocking were installed before closing up.</li>
        <li><strong>Deviation Tracking:</strong> The AI automatically highlights differences. "Pipe A is 4 inches lower than modeled."</li>
      </ul>

      <h2>Getting It Right the First Time</h2>
      <p>
        By validating installation against design intent strictly and frequently, you eliminate the "discovery" of errors months later. You fix the sleeve while the rebar is open, costing $100 instead of coring concrete later for $5000.
      </p>
    </BlogPostLayout>
    <CallToAction />
    </>
  );
}
