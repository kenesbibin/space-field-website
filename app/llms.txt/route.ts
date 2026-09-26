import { NextResponse } from 'next/server';
import { CAREERS_ROLES } from '@/lib/careers-data';

export async function GET() {
  const careerLinks = CAREERS_ROLES.map(
    (role) =>
      `- ${role.title} (${role.experienceNote}, ${role.type}, ${role.location}): https://spacecapture.ai/careers/${role.slug}`
  ).join('\n');
  const content = `# SpaceCapture

> SpaceCapture is AI-powered field inspection software for construction, facilities, and infrastructure teams. Field captures (photos, video, 360° scans, LiDAR) are resolved into a structured knowledge graph, and AI answers are grounded with source attribution.

## Powered By VeritasGraph

SpaceCapture's search and AI answers are grounded by VeritasGraph, an open-source GraphRAG and source-attribution knowledge-graph framework. Every AI answer links back to its origin capture through multi-hop knowledge-graph reasoning.

- VeritasGraph GitHub repository: https://github.com/bibinprathap/VeritasGraph
- VeritasGraph documentation (verifiable AI with source attribution): https://bibinprathap.github.io/VeritasGraph/index.html
- Author: Bibin Prathap

## About
SpaceCapture is an AI-powered field inspection platform for construction, facilities, and infrastructure teams. It uses computer vision to automatically detect defects, generate reports, and track site safety from any mobile device. Captures become a knowledge graph, enabling verifiable spatial data and attributed AI answers.

## Key Features
- AI Defect Detection: Automatically identifies cracks, corrosion, PPE violations, and 50+ defect types from photos
- Offline Mobile Capture: Full functionality without internet; syncs when connected
- Daily Reports: Automated daily construction reports from field data
- Visual Form Builder: No-code custom inspection forms
- 360° Reality Capture: Spatial documentation with LiDAR support
- Privacy Shield: Automatic face and license plate blurring for GDPR compliance

## Pricing
- Starter: Free (5 projects, 500MB storage, basic features)
- Enterprise: Custom pricing (unlimited projects, AI detection, SSO, API access, dedicated support)

## Industries Served
- Construction (commercial, residential, civil)
- Facility Management
- Oil & Gas Inspection
- Telecommunications
- HVAC and Plumbing
- Insurance Claims
- Solar and Renewable Energy

## Contact
- Website: https://spacecapture.ai
- Email: contact@spacecapture.ai
- Demo: https://spacecapture.ai/request-a-demo
- Pricing: https://spacecapture.ai/pricing

## Documentation
- Glossary: https://spacecapture.ai/glossary
- Blog: https://spacecapture.ai/blog
- FAQ: https://spacecapture.ai/faq
- How It Works (capture → knowledge graph → attributed answer): https://spacecapture.ai/how-it-works
- Hallucination-Free AI (citations, grounding, Silence Protocol): https://spacecapture.ai/trust/hallucination-free
- Careers (open roles, benefits, how to apply): https://spacecapture.ai/careers
${careerLinks}
- Trust Center: https://spacecapture.ai/trust

## Keywords
knowledge graph, GraphRAG, source attribution, verifiable AI, verifiable spatial data, multi-hop reasoning, on-premise AI, space capture AI, 3D/scan to knowledge graph
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
