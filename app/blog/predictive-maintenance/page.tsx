import React from 'react';
import type { Metadata } from 'next';
import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'Predictive Maintenance for Construction Equipment | SpaceCapture',
  description: 'Moving from reactive repairs to data-driven uptime. Using AI telemetry to predict equipment failure.',
};

export default function ArticlePage() {
  return (
    <>
    <BlogPostLayout 
      title="Predictive Maintenance for Construction Equipment"
      subtitle="Don't wait for a breakdown. AI analyzes vibration and telemetry data to schedule repairs during downtime."
      category="Asset Management"
    >
      <p>
        If a tower crane breaks down on a job site, the entire project stops. The cost isn't just the repair; it's the burn rate of a stalled crew, the delayed concrete pours, and the schedule slippage.
      </p>
      
      <h2>Reactive vs. Preventive vs. Predictive</h2>
      <p>
        Most companies operate on a <strong>Reactive</strong> model: fix it when it breaks. Some use <strong>Preventive</strong> maintenance: service it every 500 hours, whether it needs it or not.
      </p>
      <p>
        <strong>Predictive Maintenance</strong> is the new gold standard. It uses data from IoT sensors on equipment—vibration, temperature, oil pressure, and usage hours—to predict exactly when a component is about to fail.
      </p>
      
      <h2>How AI Hears the Trouble</h2>
      <p>
        AI algorithms are trained on the "signatures" of failure. A bearing that is about to seize vibrates at a specific frequency that a human ear can't hear.
      </p>
      <ul>
        <li><strong>Optimization:</strong> Only replace parts that are actually worn.</li>
        <li><strong>Scheduling:</strong> Perform maintenance during lunch breaks or off-shifts, not during critical lifts.</li>
        <li><strong>Lifespan:</strong> Extend the useful life of expensive yellow iron by preventing catastrophic failures.</li>
      </ul>

      <h2>SpaceCapture's Fleet Intelligence</h2>
      <p>
        By integrating field logs with telemetry data, SpaceCapture gives fleet managers a specific "Health Score" for every asset. You know exactly which excavator needs attention before it stalls in the mud.
      </p>
    </BlogPostLayout>
    <CallToAction />
    </>
  );
}
