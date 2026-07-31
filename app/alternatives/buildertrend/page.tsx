import React from "react";
import type { Metadata } from "next";
import { AlternativesTemplate } from "@/components/seo/AlternativesTemplate";

export const metadata: Metadata = {
  title: "Buildertrend Alternative | SpaceCapture",
  description:
    "Looking for a Buildertrend alternative? SpaceCapture offers mobile-first field inspections, AI defect detection, and offline capability for construction teams.",
  keywords: [
    "buildertrend alternative",
    "alternative to buildertrend",
    "switch from buildertrend",
    "buildertrend vs spacecapture",
  ],
  alternates: {
    canonical: "https://spacecapture.ai/alternatives/buildertrend",
  },
  openGraph: {
    type: "website",
    title: "Buildertrend Alternative | SpaceCapture",
    description:
      "Looking for a Buildertrend alternative? SpaceCapture offers mobile-first field inspections, AI defect detection, and offline capability for construction teams.",
    url: "https://spacecapture.ai/alternatives/buildertrend",
    siteName: "SpaceCapture",
  },
};

const BuildertrendPage = () => {
  return (
    <AlternativesTemplate
      competitor="Buildertrend"
      heroBadge="Trusted by 120+ Construction Teams"
      tagline="Buildertrend is great for residential builders who need project management. But if your field team needs fast inspections, AI defect detection, and offline capability — SpaceCapture is the specialized tool they actually want to use."
      intro="We hear from construction teams every week: 'We use Buildertrend for office management, but our field team hates using it on-site.' SpaceCapture solves this by being the dedicated field execution layer that works the way your team actually works — fast, mobile-first, and offline-capable."
      pains={[
        {
          title: "Mobile app feels clunky on-site",
          desc: "Buildertrend's mobile experience is designed for office users first. Field teams struggle with slow syncing, complex menus, and forms that take too long to fill out.",
        },
        {
          title: "No AI defect detection",
          desc: "Your inspectors take photos but have to manually identify and document every issue. No automation, no intelligence — just more work for your field team.",
        },
        {
          title: "Limited offline capability",
          desc: "Jobsites don't always have signal. When Buildertrend can't sync, your field team stops reporting — creating gaps in your project data.",
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
          competitor: "Basic forms, slow",
          spacecapture: "5-minute inspections with AI",
        },
        {
          feature: "Mobile experience",
          competitor: "Desktop-first design",
          spacecapture: "Native mobile app, field-first",
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
          competitor: "Weeks with onboarding",
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
          q: "Why switch from Buildertrend to SpaceCapture?",
          a: "Teams switch because their field crews struggle with Buildertrend's mobile experience. SpaceCapture is purpose-built for field inspections — fast forms, AI defect detection, and full offline capability.",
        },
        {
          q: "Can I use SpaceCapture alongside Buildertrend?",
          a: "Absolutely. Many teams use Buildertrend for office management and project tracking, while using SpaceCapture for field inspections, daily reports, and defect documentation. They complement each other well.",
        },
        {
          q: "What does SpaceCapture do better than Buildertrend?",
          a: "Field execution. SpaceCapture excels at fast inspections, AI-powered defect detection, offline capability, and real-time field-to-office sync. Buildertrend is stronger for project management and client portals.",
        },
        {
          q: "Is SpaceCapture really free?",
          a: "Yes. Our free tier includes core inspection and reporting features — no credit card required, no time limit. Upgrade to paid plans for advanced features like multi-project dashboards and AI detection.",
        },
        {
          q: "How long does migration take?",
          a: "Most teams are up and running in 5 minutes. Download the app, create your first project, and start inspecting. No data migration needed — SpaceCapture is a field execution tool, not a project management system.",
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

export default BuildertrendPage;
