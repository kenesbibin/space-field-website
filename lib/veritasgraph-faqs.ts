export interface VeritasGraphFaq {
  q: string;
  a: string;
}

/**
 * Single source of truth for the VeritasGraph FAQ.
 * Rendered identically on:
 *  - the homepage accordion before "Ask AI about SpaceCapture" (VeritasGraphSection)
 *  - /how-it-works (visible copy + FAQPage JSON-LD)
 *  - /llms-full.txt for AI crawlers
 *
 * Written as self-contained 40-60 word answer blocks: direct answer first,
 * plain language, concrete examples.
 */
export const VERITASGRAPH_FAQS: VeritasGraphFaq[] = [
  {
    q: "What is VeritasGraph and how does SpaceCapture use it?",
    a: "VeritasGraph is an open-source framework that connects your project data into a knowledge graph, so every AI answer can show where it came from. SpaceCapture uses it to ground search and chat: instead of guessing from similar-sounding text, answers are built from your own captures, manuals, and reports — with the source attached.",
  },
  {
    q: "How does source attribution work in SpaceCapture?",
    a: "Every sentence the AI writes carries a link back to its origin — the photo, inspection record, or report it was built from. VeritasGraph keeps those links intact as it reasons across the graph, so you can open any claim and land on the actual evidence instead of a paraphrase.",
  },
  {
    q: "What is a knowledge graph and why does it matter for inspections?",
    a: 'A knowledge graph stores your site as connections instead of folders: a defect linked to an asset, the asset linked to a floor, the floor linked to your project. Ask "which defects are still open on level 3?" and you get one precise, sourced answer — not a folder of photos to open one by one.',
  },
  {
    q: "How does SpaceCapture verify AI answers?",
    a: "Two things ship with every answer: a citation to the original capture, and the path the graph took to build it. Open either one and you're looking at the evidence itself. That's how an inspector or auditor checks a claim in seconds — by reading the source, not by trusting the bot.",
  },
  {
    q: "What is GraphRAG and how is it different from regular AI search?",
    a: "Regular AI search finds text that resembles your question and rewrites it. GraphRAG follows the relationships between your captures and records to construct the answer, then hands you citations and a visible reasoning path. The result is grounded in your data — not in whichever paragraph happened to match.",
  },
  {
    q: "How does a photo capture become a knowledge graph?",
    a: "Each photo or scan is tagged with its project, asset, and location the moment it's captured. SpaceCapture then reads the image for what matters — a crack, a rusted bolt, a severity score — and stores it as linked nodes: defect → on asset → in zone → within project.",
  },
  {
    q: "Is VeritasGraph deployed on-premise or in the cloud?",
    a: "Your choice. Run SpaceCapture on cloud hosting in the US, EU, or APAC regions, or keep the entire stack on-premise — including air-gapped setups for defense and critical-infrastructure teams. Either way, your knowledge graph and captures stay inside infrastructure you control.",
  },
];
