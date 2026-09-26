export type CareerIcon = 'code' | 'file' | 'bulb';

export interface CareerRole {
  slug: string;
  badge: string;
  icon: CareerIcon;
  experienceNote: string;
  title: string;
  summary: string;
  type: string;
  location: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  offer: string[];
}

export const CAREERS_EMAIL = 'contact@spacecapture.ai';

/**
 * Open roles shown on /careers and /careers/[slug].
 * Edit content here — listing cards, detail pages, and JobPosting JSON-LD
 * all update automatically.
 */
export const CAREERS_ROLES: CareerRole[] = [
  {
    slug: 'full-stack-developer',
    badge: 'Freshers Welcome',
    icon: 'code',
    experienceNote: 'Freshers Welcome (1+ Years Preferred)',
    title: 'Full-Stack Developer (Next.js / React)',
    summary:
      'Build the web app behind SpaceCapture — dashboards, inspection reports, and the AI answer surfaces construction teams use every day — with Next.js, React, and TypeScript.',
    type: 'Full-time',
    location: 'Remote',
    overview:
      "We're looking for a Full-Stack Developer to join the team behind SpaceCapture, the AI-powered field inspection platform used on construction sites worldwide. You'll build the web surfaces our users live in every day — inspection dashboards, report builders, and the AI answer UI — using Next.js, React, and TypeScript. This is a 100% coding role: shipping high-quality features from concept to production alongside our design and field teams.",
    responsibilities: [
      'Build and ship user-facing features in Next.js, React, and TypeScript — dashboards, reports, and AI answer surfaces.',
      'Turn designs into responsive, accessible pages that stay fast on slow field connections.',
      'Integrate REST APIs for captures, forms, and knowledge-graph search results.',
      'Write clean, tested code and review teammates pull requests.',
      'Fix bugs and improve performance across the web app as our user base grows.',
    ],
    requirements: [
      'Solid fundamentals in JavaScript/TypeScript, React, and Next.js — freshers with strong projects are welcome to apply.',
      'Understanding of HTML, CSS, and responsive layouts; Tailwind is a plus.',
      'Experience consuming REST APIs and managing data in client applications.',
      'Clear written communication in English and a habit of breaking problems into small steps.',
      'Bonus: exposure to AI features, LLMs, or construction / field products.',
    ],
    offer: [
      'Remote-first role with flexible hours and an async-friendly culture.',
      'Work on AI and knowledge-graph technology (VeritasGraph) that ships to real construction sites.',
      'Competitive compensation and benefits, with growth from day one as an early team member.',
      'Mentorship from engineers shipping inspection and computer-vision products.',
    ],
  },
  {
    slug: 'senior-full-stack-engineer',
    badge: '5 to 10 Years Experience',
    icon: 'file',
    experienceNote: '5 to 10 Years Experience',
    title: 'Senior Full-Stack Engineer',
    summary:
      'Lead development of our field inspection platform end to end: offline-first capture, real-time sync, and the knowledge-graph services behind source-attributed AI answers.',
    type: 'Full-time',
    location: 'Remote',
    overview:
      "We're hiring a Senior Full-Stack Engineer to own major slices of the SpaceCapture platform end to end — offline-first capture that syncs from the field, real-time dashboards, and the knowledge-graph services that power source-attributed AI answers. You'll architect features, set technical direction, and mentor other engineers. This is a hands-on coding role: 100% engineering, no pure-management track.",
    responsibilities: [
      'Lead the design and delivery of major platform features across Next.js, Node.js, and our data services.',
      'Architect for the field: offline-first sync, conflict resolution, and resilience on poor connectivity.',
      'Own the services behind knowledge-graph search and citation delivery.',
      'Raise the bar on code quality through reviews, testing, and pragmatic architecture decisions.',
      'Mentor mid-level engineers and pair with them through hard problems.',
    ],
    requirements: [
      '5–10 years building production web applications full-stack (React/Next.js on the front, Node on the back).',
      'Deep TypeScript skills and hands-on experience designing APIs and data models.',
      'Experience with sync-heavy or real-time systems — offline support, queues, or WebSockets.',
      'A track record of shipping and owning features end to end in a fast-moving team.',
      'Bonus: graph databases, RAG / AI features, or construction-tech exposure.',
    ],
    offer: [
      'Remote-first role with flexible hours.',
      'High autonomy — you will shape architecture, not just pick up tickets.',
      'Work with computer vision and the VeritasGraph knowledge-graph stack in production.',
      'Competitive compensation, equity options, and comprehensive benefits.',
    ],
  },
  {
    slug: 'python-developer-ai-cv',
    badge: '3 to 5 Years Experience',
    icon: 'bulb',
    experienceNote: '3 to 5 Years Experience',
    title: 'Python Developer (AI / Computer Vision)',
    summary:
      'Build defect-detection models and RAG pipelines over the VeritasGraph knowledge graph — turning site photos and your own manuals into cited, verifiable answers.',
    type: 'Full-time',
    location: 'Remote',
    overview:
      "We're looking for a Python Developer to build the AI core of SpaceCapture: computer-vision models that spot cracks, corrosion, and safety hazards in site photos, plus RAG pipelines over the VeritasGraph knowledge graph that turn customers' own manuals into cited answers. You'll take models from experiments to production APIs running on live construction projects.",
    responsibilities: [
      'Build and tune computer-vision models for defect detection on real site imagery.',
      'Develop RAG pipelines — chunking, embedding, retrieval, and citation linking — over the VeritasGraph knowledge graph.',
      'Expose models as fast, reliable Python services and REST APIs.',
      'Run evaluation harnesses so answers stay grounded and hallucination-free.',
      'Ship end to end: from notebook experiments to production monitoring.',
    ],
    requirements: [
      '3–5 years of Python used in production systems.',
      'Hands-on experience with PyTorch or TensorFlow for detection or segmentation tasks.',
      'Familiarity with vector search and LLM APIs; RAG experience is a strong plus.',
      'Understanding of graph data models (Neo4j or similar) a plus.',
      'Clear communication and a product mindset — you talk to the field team, not just notebooks.',
    ],
    offer: [
      'Remote-first role with flexible hours.',
      'Apply computer vision and LLMs to real construction problems — your models ship to active job sites.',
      'Work with the open-source VeritasGraph knowledge-graph stack.',
      'Competitive compensation, benefits, and growth with an AI product team.',
    ],
  },
];

/** Screening questions shown at the end of every job detail page. */
export const APPLICATION_QUESTIONS: string[] = [
  'Have you applied to SpaceCapture before?',
  'Are you okay to work for the salary offered in the job listing?',
  'Ready to contribute to SpaceCapture for a minimum of 1 year?',
  'Have you completed any graduate / diploma studies?',
  'Are you willing to take up small task assignments as a prerequisite for the interview?',
];

export function getCareerRole(slug: string): CareerRole | undefined {
  return CAREERS_ROLES.find((role) => role.slug === slug);
}

export interface CareerFaq {
  q: string;
  a: string;
}

/**
 * Posted date shared by the visible UI, sitemap, and JobPosting JSON-LD so
 * they can never drift apart.
 */
export const CAREERS_POSTED = {
  iso: '2026-09-25',
  label: 'September 25, 2026',
};

/**
 * Hiring FAQ for the /careers listing. Answers are grounded strictly in what
 * the site already states (mailto apply, Full-time, Remote, benefits, badges) —
 * do not add process claims we can't back up.
 */
export const CAREERS_LISTING_FAQS: CareerFaq[] = [
  {
    q: 'What jobs are open at SpaceCapture right now?',
    a: 'Three full-time, remote roles: Full-Stack Developer (Next.js / React), Senior Full-Stack Engineer, and Python Developer (AI / Computer Vision). Each job page below lists the full description, requirements, benefits, and application questions.',
  },
  {
    q: 'How do I apply for a job at SpaceCapture?',
    a: `Open the role you want and click Apply — it opens an email to ${CAREERS_EMAIL} with the position already in the subject line. Attach your resume and a short note about your work, and that is your application. There are no forms to fill out.`,
  },
  {
    q: 'Is SpaceCapture hiring remotely?',
    a: 'Yes — every open role is full-time and remote. The team works from anywhere in the world with flexible hours, so where you work is your call.',
  },
  {
    q: 'What experience level does SpaceCapture hire?',
    a: 'It depends on the role: Full-Stack Developer welcomes freshers (1+ years preferred), Python Developer asks for 3–5 years, and Senior Full-Stack Engineer expects 5–10 years. Exact requirements are listed on each job page.',
  },
  {
    q: 'What benefits do SpaceCapture employees get?',
    a: 'Remote-first culture with flexible hours, clear growth opportunities, hands-on work with real AI technology, and competitive compensation with equity options — the four benefits listed above.',
  },
];

/** Role-specific hiring FAQ for /careers/[slug], built from the role record. */
export function careerRoleFaqs(role: CareerRole): CareerFaq[] {
  return [
    {
      q: `How do I apply for the ${role.title} role?`,
      a: `Click "Apply for this role" on this page and it opens a pre-filled email to ${CAREERS_EMAIL} with the position in the subject line. Attach your resume and a few lines about relevant work — no forms, no account to create.`,
    },
    {
      q: 'Is this role remote?',
      a: `Yes — this is a ${role.type.toLowerCase()}, ${role.location.toLowerCase()} position at SpaceCapture. The whole team works from anywhere in the world with flexible hours.`,
    },
    {
      q: 'What experience do I need for this role?',
      a: `Experience expected for this role: ${role.experienceNote}. If you are close on paper but your work is strong, apply anyway — we would rather meet a good fit than miss one.`,
    },
    {
      q: 'What comes with the role?',
      a: `${role.offer[0]} Every full-time position also includes competitive compensation and benefits.`,
    },
    {
      q: 'What if no open role fits me?',
      a: `Send your resume to ${CAREERS_EMAIL} as a general application anyway — we are always open to connecting with people who share our vision, even when nothing posted fits today.`,
    },
  ];
}

/**
 * FAQPage graph item (no @context — the page wraps it in an @graph alongside
 * JobPosting / BreadcrumbList). Must mirror the visible FAQ section exactly.
 */
export function faqPageSchema(faqs: CareerFaq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

/** Pre-filled application subject for each role's mailto link. */
export function careersApplyUrl(roleTitle: string): string {
  return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(
    `Application: ${roleTitle} — SpaceCapture`
  )}`;
}

/** Ready-made summary prompt for the "Ask an AI" GEO block. */
export const CAREERS_AI_PROMPT =
  'Provide a comprehensive summary of SpaceCapture (spacecapture.ai), an AI-powered field inspection and defect-detection platform for construction. Cover its key capabilities (offline photo, video, 360° and LiDAR capture; visual form builder; AI defect detection; inspection reports; knowledge-graph search with source attribution powered by the open-source VeritasGraph framework), its target users (general contractors, inspectors, subcontractors, facility managers), and what the team building it is like — then list its current open roles and how to apply.';
