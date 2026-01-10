import React from 'react';
import type { Metadata } from 'next';
import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'Optimizing Material Usage with Field Intelligence | SpaceCapture',
  description: 'Stop buying what you already have. How AI inventory tracking reduces waste and theft.',
};

export default function ArticlePage() {
  return (
    <>
    <BlogPostLayout 
      title="Optimizing Material Usage with Field Intelligence"
      subtitle="Track waste and usage patterns. How AI helps you buy exactly what you need and use what you buy."
      category="Sustainability"
    >
      <p>
        Construction produces enormous amounts of waste. Estimates suggest up to 30% of all materials delivered to a site end up as scrap. This isn't just bad for the planet; it's a massive bleed on the budget.
      </p>
      
      <h2>Where Does It Go?</h2>
      <p>
        Materials get lost, damaged by weather, stolen, or over-ordered due to poor estimates. Without real-time tracking, you don't know you're short on drywall until the hangers are standing idle.
      </p>
      
      <h2>AI Inventory Management</h2>
      <p>
        SpaceCapture helps track materials from delivery to installation.
      </p>
      <ul>
        <li><strong>Delivery Verification:</strong> Snap a photo of the delivery ticket and the pallet. AI verifies the count against the PO automatically.</li>
        <li><strong>Usage Tracking:</strong> As work progresses, the AI estimates consumption. "You have installed 5000 sq ft of tile. You should have 200 sq ft remaining."</li>
        <li><strong>Waste Analysis:</strong> By analyzing photos of the debris pile, AI can quantify what is being thrown away. Ideally, you spot that a crew is cutting inefficiently and correct it.</li>
      </ul>

      <h2>Lean Construction</h2>
      <p>
        This data supports Just-In-Time (JIT) delivery. You don't need to stockpile 3 months of material (risking damage/theft). You order exactly what you need for the next phase, knowing precisely what is on hand.
      </p>
    </BlogPostLayout>
    <CallToAction />
    </>
  );
}
