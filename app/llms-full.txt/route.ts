import { NextResponse } from 'next/server';
import { VERITASGRAPH_FAQS } from '@/lib/veritasgraph-faqs';
import { CAREERS_ROLES } from '@/lib/careers-data';

export async function GET() {
  const veritasgraphFaq = VERITASGRAPH_FAQS.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n');
  const careerLinks = CAREERS_ROLES.map(
    (role) =>
      `- ${role.title} — ${role.experienceNote}, ${role.type}, ${role.location}. Apply: https://spacecapture.ai/careers/${role.slug}`
  ).join('\n');

  const content = `# SpaceCapture — LLM Index (llms-full)

SpaceCapture (https://spacecapture.ai) is AI-powered field inspection software for construction, facilities, and infrastructure teams. It converts field captures into structured, citable data through an ingest → knowledge graph → attributed answer pipeline.

## Pipeline

1. Capture: photos, video, 360° reality capture, and LiDAR scans from any mobile device (fully offline-capable).
2. Knowledge Graph: captured evidence is ingested into a structured knowledge graph where assets, defects, locations, and inspections become linked entities.
3. Attributed Answer: AI answers are grounded by VeritasGraph with source attribution and a clear reasoning path — every claim links back to the exact capture or record it came from.

## Powered By VeritasGraph

Search and AI answers on SpaceCapture are grounded by VeritasGraph (https://github.com/bibinprathap/VeritasGraph), an open-source GraphRAG and source-attribution framework by Bibin Prathap (https://bibinprathap.github.io/VeritasGraph/index.html).

- Website → VeritasGraph relationship: SpaceCapture's SoftwareApplication JSON-LD declares isBasedOn → VeritasGraph (SoftwareSourceCode, codeRepository: https://github.com/bibinprathap/VeritasGraph).
- VeritasGraph provides: knowledge-graph reasoning, multi-hop traversal, citation tracking, and verifiable AI with source attribution.

## Key Features

- AI Defect Detection: Automatically identifies cracks, corrosion, PPE violations, and 50+ defect types from photos
- Offline Mobile Capture: Full functionality without internet; syncs when connected
- Daily Reports: Automated daily construction reports from field data
- Visual Form Builder: No-code custom inspection forms
- 360° Reality Capture: Spatial documentation with LiDAR support
- Privacy Shield: Automatic face and license plate blurring for GDPR compliance
- Source Attribution: AI answers cite the exact capture or record they derive from

## FAQ: AI Answers & Source Attribution

${veritasgraphFaq}

## Key Pages

- Short AI-readable index: https://spacecapture.ai/llms.txt
- Privacy Policy: https://spacecapture.ai/privacy-policy
- How It Works (capture → knowledge graph → attributed answer): https://spacecapture.ai/how-it-works
- Hallucination-Free AI (citations, grounding, Silence Protocol): https://spacecapture.ai/trust/hallucination-free
- Careers (open roles, benefits, how to apply): https://spacecapture.ai/careers
${careerLinks}
- Trust Center: https://spacecapture.ai/trust
- AI Defect Detection: https://spacecapture.ai/ai-defect-detection
- Pricing: https://spacecapture.ai/pricing
- Request a Demo: https://spacecapture.ai/request-a-demo
- Glossary: https://spacecapture.ai/glossary
- FAQ: https://spacecapture.ai/faq

## Keywords

knowledge graph, GraphRAG, source attribution, verifiable AI, verifiable spatial data, multi-hop reasoning, on-premise AI, space capture AI, 3D/scan to knowledge graph, AI answer verification, attributed answers

## Contact

- Website: https://spacecapture.ai
- Email: contact@spacecapture.ai
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
