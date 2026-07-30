import React from "react";
import type { Metadata } from "next";
import { AlternativesTemplate } from "@/components/seo/AlternativesTemplate";

export const metadata: Metadata = {
  title: "Revizto Alternative | SpaceCapture",
  description:
    "Looking for a Revizto alternative? SpaceCapture offers mobile-first field inspections, AI defect detection, and offline capability for construction teams.",
  keywords: [
    "revizto alternative",
    "alternative to revizto",
    "switch from revizto",
    "revizto vs spacecapture",
  ],
  alternates: {
    canonical: "https://spacecapture.ai/alternatives/revizto",
  },
  openGraph: {
    type: "website",
    title: "Revizto Alternative | SpaceCapture",
    description:
      "Looking for a Revizto alternative? SpaceCapture offers mobile-first field inspections, AI defect detection, and offline capability for construction teams.",
    url: "https://spacecapture.ai/alternatives/revizto",
    siteName: "SpaceCapture",
  },
};

const ReviztoPage = () => {
  return (
    <AlternativesTemplate
      competitor="Revizto"
      heroBadge="Trusted by 120+ Construction Teams"
      tagline="Revizto excels at BIM coordination and issue tracking. But if your field team needs fast inspections, AI defect detection, and offline capability — SpaceCapture is the specialized tool they actually want to use."
      intro="We hear from construction teams every week: 'We use Revizto for BIM coordination, but our field team struggles with the mobile experience.' SpaceCapture solves this by being the dedicated field execution layer that works the way your team actually works — fast, mobile-first, and offline-capable."
      pains={[
        {
          title: "Mobile experience is limited",
          desc: "Revizto's mobile app is designed for BIM coordination, not field inspections. Field teams struggle with slow performance and limited offline capability.",
        },
        {
          title: "No AI defect detection",
          desc: "Your inspectors take photos but have to manually identify and document every issue. No automation, no intelligence — just more work for your field team.",
        },
        {
          title: "Complex setup for field teams",
          desc: "Revizto requires BIM integration and technical setup that's overkill for simple field inspections. Your field team needs something that works out of the box.",
        },
      ]}
      benefits={[
        {
          title: "5-minute inspections, not 50",
          desc: "Purpose-built forms designed for speed. Your field team completes inspections in minutes, not hours.",
        },
        {
          title: "AI catches what humans miss",
          desc: "Our AI detects cracks, corrosion, and defects automatically from photos — saving time and reducing costly rework.",
        },
        {
          title: "Works offline, syncs later",
          desc: "Full offline capability means your field team never stops working, even in basements, tunnels, or remote sites.",
        },
        {
          title: "Real-time dashboards",
          desc: "See project status instantly — no waiting for weekly reports. Office and field teams stay in sync.",
        },
        {
          title: "5-minute setup, no training",
          desc: "Download the app, create a project, start inspecting. No weeks of onboarding or expensive consultants.",
        },
        {
          title: "Free tier, forever",
          desc: "Start with our free plan. No credit card, no time limit. Upgrade when you need more.",
        },
      ]}
      comparisons={[
        {
          feature: "Field inspections",
          competitor: "Basic mobile app",
          spacecapture: "5-minute inspections with AI",
        },
        {
          feature: "BIM integration",
          competitor: "Deep BIM coordination",
          spacecapture: "Field data capture (complements BIM)",
        },
        {
          feature: "AI defect detection",
          competitor: "Not available",
          spacecapture: "Built-in, auto-detects cracks & corrosion",
        },
        {
          feature: "Offline capability",
          competitor: "Limited offline",
          spacecapture: "Full offline with sync",
        },
        {
          feature: "Setup time",
          competitor: "Days/weeks with BIM setup",
          spacecapture: "5 minutes, no training",
        },
        {
          feature: "Daily reports",
          competitor: "Manual compilation",
          spacecapture: "Auto-generated from field data",
        },
        {
          feature: "Pricing",
          competitor: "Per user, often expensive",
          spacecapture: "Per user, free tier available",
        },
      ]}
      faqs={[
        {
          q: "Why switch from Revizto to SpaceCapture?",
          a: "Teams switch because their field crews need fast inspections and AI defect detection — not BIM coordination. SpaceCapture is purpose-built for field execution, while Revizto excels at BIM clash detection and issue tracking.",
        },
        {
          q: "Can I use SpaceCapture alongside Revizto?",
          a: "Absolutely. Many teams use Revizto for BIM coordination and design issues, while using SpaceCapture for field inspections, daily reports, and defect documentation. They complement each other well.",
        },
        {
          q: "What does SpaceCapture do better than Revizto?",
          a: "Field execution. SpaceCapture excels at fast inspections, AI-powered defect detection, offline capability, and real-time field-to-office sync. Revizto is stronger for BIM coordination and design issue tracking.",
        },
        {
          q: "Is SpaceCapture really free?",
          a: "Yes. Our free tier includes core inspection and reporting features — no credit card required, no time limit. Upgrade to paid plans for advanced features like multi-project dashboards and AI detection.",
        },
        {
          q: "How long does migration take?",
          a: "Most teams are up and running in 5 minutes. Download the app, create your first project, and start inspecting. No data migration needed — SpaceCapture is a field execution tool, not a BIM platform.",
        },
      ]}
      related={[
        { label: "Procore Alternative", href: "/alternatives/procore" },
        { label: "SafetyCulture Alternative", href: "/alternatives/safetyculture" },
        { label: "FieldWire Alternative", href: "/alternatives/fieldwire" },
        { label: "GoCanvas Alternative", href: "/alternatives/gocanvas" },
      ]}
    />
  );
};

export default ReviztoPage;
