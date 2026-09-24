import { NextResponse } from 'next/server';

export async function GET() {
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

Q: How does SpaceCapture verify AI answers?
A: Every answer is grounded by VeritasGraph with citations back to the original capture (photo, inspection record, or report) plus the reasoning path the graph traversed.

Q: What is source attribution in SpaceCapture?
A: Source attribution links each AI-generated statement to its origin. VeritasGraph tracks these links through multi-hop traversal of the knowledge graph.

Q: How does a photo capture become a knowledge graph?
A: Captures are tagged with project, asset, and location metadata. Entities (defects, assets, severity) are resolved into graph nodes connected by typed relationships (defect → located on → asset → within → project).

Q: Can SpaceCapture run on-premise?
A: Yes. SpaceCapture and its VeritasGraph knowledge-graph layer support on-premise and air-gapped deployment, alongside cloud hosting in US, EU, and APAC regions.

Q: What is VeritasGraph?
A: VeritasGraph is the open-source GraphRAG and source-attribution framework SpaceCapture uses to ground AI answers in verifiable, structured data.

## Key Pages

- How It Works (capture → knowledge graph → attributed answer): https://spacecapture.ai/how-it-works
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
