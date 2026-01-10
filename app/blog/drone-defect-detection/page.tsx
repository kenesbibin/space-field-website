import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'Automated Defect Detection with Drone Imagery | SpaceCapture',
  description: 'Scaling inspections to the sky. Using drone photogrammetry and AI to inspect facades and roofs.',
};

export default function ArticlePage() {
  return (
    <>
    <BlogPostLayout 
      title="Automated Defect Detection with Drone Imagery"
      subtitle="Scale your inspections. How drones and AI work together to inspect facades, roofs, and large infrastructure."
      category="Remote Inspection"
    >
      <p>
        Inspectors have limits. We can't safely climb every inch of a facade, nor can we easily see the entirety of a sprawling solar farm or bridge structure.
      </p>
      
      <h2>The Drone Revolution</h2>
      <p>
        Drones solved the access problem. They can fly where people can't and capture thousands of high-resolution images in minutes. But this created a new problem: <strong>Data Overload</strong>.
      </p>
      <p>
        Who has the time to review 5,000 photos of a concrete wall looking for hairline cracks?
      </p>
      
      <h2>AI as the Analyst</h2>
      <p>
        SpaceCapture integrates with leading drone platforms to ingest this massive visual dataset. Our AI engines stitch the images into a 3D reality mesh and then scan the surface for anomalies.
      </p>
      <ul>
        <li><strong>Thermal Analysis:</strong> Detect water ingress behind facades or hotspots on solar panels using thermal imagery.</li>
        <li><strong>Concrete Spalling:</strong> Identify areas of deterioration on bridges and dams automatically.</li>
        <li><strong>Roof <Link href="/ai-detection" className="text-blue-600 underline">Inspection</Link>:</strong> Map every inch of a roof membrane to find tears, pooling water, or loose flashing.</li>
      </ul>

      <h2>A Digital Twin of Reality</h2>
      <p>
        The result isn't just a report; it's an interactive 3D model. You can rotate the building, zoom in on a specific window, and see the AI's annotation of the defect. It turns a week-long manual inspection into a half-day automated flight.
      </p>
    </BlogPostLayout>
    <CallToAction />
    </>
  );
}
