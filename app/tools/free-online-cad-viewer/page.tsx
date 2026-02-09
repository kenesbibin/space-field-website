import React from 'react';
import type { Metadata } from 'next';
import CadViewerTool from '@/components/tools/CadViewerTool';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'Free Online CAD Viewer | View DWG & DXF Files Instantly',
  description: 'View AutoCAD files online for free. No software installation needed. Supports .dwg and .dxf formats. Secure, fast, and easy to use.',
  keywords: ['online cad viewer', 'free dwg viewer', 'view dwg online', 'dxf viewer', 'autocad viewer online', 'free cad viewer'],
};

export default function CadViewerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Free Online CAD Viewer",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "A free online tool to view DWG and DXF standard CAD files in your browser without installing heavy software."
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-white text-center border-b border-slate-100">
            <div className="container mx-auto px-4">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 font-bold tracking-wider uppercase text-xs mb-4">
                    Free Web Tool
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    Free Online CAD Viewer
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Open and view .DWG and .DXF files instantly in your browser. No downloads, no plugins, no signup required to view.
                </p>
            </div>
        </section>

        {/* Viewer Tool Section */}
        <section className="py-12 md:py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-5xl">
                <CadViewerTool />
            </div>
        </section>

        {/* SEO Content Article */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <article className="prose prose-lg prose-slate mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">How to View DWG Files Online</h2>
                    <p>
                        Sharing construction drawings and engineering schematics can be a headache when stakeholders don't have AutoCAD installed. Sending large files via email is slow, and asking clients to download heavy software is unprofessional.
                    </p>
                    <p>
                        Our **Free Online CAD Viewer** solves this problem by rendering standard CAD formats directly in the cloud.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Supported Formats</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-8">
                        <li><strong>.DWG (Drawing):</strong> The native format for AutoCAD and the standard for industry data exchange.</li>
                        <li><strong>.DXF (Drawing Exchange Format):</strong> A universal format for enabling data interoperability between CAD programs.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Why Use a Web-Based Viewer?</h3>
                    <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                            <h4 className="font-bold text-slate-900">Zero Installation</h4>
                            <p className="text-sm text-slate-600 mt-2">View drawings on any computer, tablet, or phone without installing 5GB+ of software.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                            <h4 className="font-bold text-slate-900">Fast Performance</h4>
                            <p className="text-sm text-slate-600 mt-2">Our optimized engine loads complex geometries and layers in seconds, not minutes.</p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Secure & Private</h3>
                    <p>
                        Your intellectual property is safe. Files uploaded to our viewer are processed briefly in memory for display and are automatically purged from our servers after the session ends. We do not store or share your designs.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Take Your Drawings to the Field</h3>
                    <p>
                         Viewing is just the start. With **Space Capture**, you can take these drawings into the field, overlay them on reality capture data, easier RFI creation, and pin photos directly to specific coordinates.
                    </p>
                </article>
            </div>
        </section>

        <CallToAction />
      </main>
    </div>
  );
}
