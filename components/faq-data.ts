export type FaqCategory = 'General' | 'AI Intelligence' | 'Field Tasks' | 'Technical' | 'Security & Compliance';

export interface FaqItem {
  question: string;
  answer: string;
  category: FaqCategory;
}

export const faqData: FaqItem[] = [
  // --- TOP 8 (shown on homepage + get FAQ schema) — optimized for search queries ---
  {
    category: 'General',
    question: "What is construction field inspection software?",
    answer: "Construction field inspection software is a mobile and web platform that digitizes site inspections, automates daily reporting, and tracks defects with AI. SpaceCapture replaces paper forms and spreadsheets with real-time photo documentation, GPS-tagged punch lists, and automated compliance checklists — all synced between field crews and the office."
  },
  {
    category: 'AI Intelligence',
    question: "How does AI defect detection work in construction?",
    answer: "SpaceCapture's AI uses computer vision models trained on over 5 million construction images to automatically scan site photos for defects like cracks (as thin as 0.3mm), corrosion, missing fixtures, and safety hazards. It quantifies each issue with measurements, severity ratings, and GPS-pinned locations — then generates punch items instantly."
  },
  {
    category: 'Field Tasks',
    question: "Does SpaceCapture work offline on construction sites?",
    answer: "Yes. SpaceCapture uses a proprietary 'Delta-Sync' protocol for full offline functionality. Field crews can capture thousands of photos, create tasks, record voice notes, and complete inspections with zero internet connection. All data syncs automatically when connectivity is restored."
  },
  {
    category: 'General',
    question: "Is SpaceCapture free to use?",
    answer: "Yes, SpaceCapture offers a free Pilot Program that lets you capture up to 5,000 sq. ft. with full access to AI detection, daily reporting, and task management. No credit card required. Paid plans start for teams needing unlimited projects and advanced analytics."
  },
  {
    category: 'General',
    question: "How is SpaceCapture different from Procore or PlanGrid?",
    answer: "While Procore and PlanGrid focus on office-side project management, SpaceCapture is purpose-built for field operations. Key differences include: AI-powered defect detection (not available in Procore), full offline mode, engineering-grade 2mm accuracy, automated safety compliance, and native 2-way sync with Procore and Autodesk Build."
  },
  {
    category: 'AI Intelligence',
    question: "Can AI replace manual punch list inspections?",
    answer: "AI augments and dramatically accelerates punch list inspections rather than fully replacing human judgment. SpaceCapture's AI auto-generates punch items with annotated photos, severity ratings, and trade assignments — reducing walkthrough time by 60-80% and closeout duration by 50-70%. Human inspectors review AI flags for final sign-off."
  },
  {
    category: 'Security & Compliance',
    question: "Is construction data secure on SpaceCapture?",
    answer: "Yes. SpaceCapture uses AES-256 encryption for data at rest and TLS 1.3 for data in transit. We are SOC 2 Type II certified, ISO 27001 compliant, and GDPR ready. Data is hosted on AWS GovCloud (US), AWS Frankfurt (EU), or AWS Sydney (APAC) based on your region. On-premise deployment is available for defense and critical infrastructure clients."
  },
  {
    category: 'Field Tasks',
    question: "What reports can SpaceCapture generate automatically?",
    answer: "SpaceCapture auto-generates branded daily construction reports, safety inspection reports, punch list summaries, defect severity reports, and progress tracking dashboards. Reports include annotated photos, GPS maps, timestamps, and digital signatures — ready for clients, inspectors, or regulatory submissions in one click."
  },

  // --- REMAINING QUESTIONS (shown on /faq full page) ---
  {
    category: 'AI Intelligence',
    question: "Can I teach the AI to recognize custom objects?",
    answer: "Yes. Using our 'AI Tuning Station', you can upload as few as 20 labeled images of a specific asset (e.g., a custom valve or branded fixture) to retrain the local model for your specific site."
  },
  {
    category: 'AI Intelligence',
    question: "Is the AI processing done in the cloud or on the device?",
    answer: "We use a hybrid approach. Real-time safety alerts are processed on-device (Edge AI) for instant feedback, while heavy photogrammetry and trend analysis are processed in our secure cloud GPU cluster."
  },
  {
    category: 'AI Intelligence',
    question: "How does the 'Privacy Scrubbing' feature work?",
    answer: "Before any image leaves your device, our privacy AI automatically detects and blurs human faces and vehicle license plates to ensure GDPR and CCPA compliance."
  },
  {
    category: 'AI Intelligence',
    question: "Can detection reports be exported to PDF?",
    answer: "Yes, you can generate branded 'Inspection Reports' with one click, complete with annotated photos, severity ratings, and location maps."
  },

  // --- FIELD TASKS ---
  {
    category: 'Field Tasks',
    question: "Does the mobile app work without internet?",
    answer: "Yes. We use a proprietary 'Delta-Sync' protocol. You can capture thousands of photos, create tasks, and add voice notes completely offline. The app syncs automatically when you return to WiFi."
  },
  {
    category: 'Field Tasks',
    question: "How do I create a task from a 360° photo?",
    answer: "Simply tap any point in the 360° view. A 'Spatial Pin' is created at that exact X,Y,Z coordinate. You can then attach a voice note, photo, or priority level to that pin."
  },
  {
    category: 'Field Tasks',
    question: "Can I assign tasks to subcontractors?",
    answer: "Yes. You can invite subcontractors as 'Guest Users' with limited permissions. They can view and resolve tasks assigned to them without seeing the entire project's sensitive data."
  },
  {
    category: 'Field Tasks',
    question: "Does it integrate with Procore or Autodesk Build?",
    answer: "We offer native 2-way sync with Procore, Autodesk Construction Cloud, and Primavera P6. An issue created in Space Capture creates an RFI in Procore instantly."
  },

  {
    category: 'Field Tasks',
    question: "How long does the battery last while capturing?",
    answer: "Our app runs in 'Low Power Mode' by default, turning off non-essential sensors. A standard iPhone 14 can capture continuously for 6+ hours on a single charge."
  },
  {
    category: 'Field Tasks',
    question: "What happens if I drop my phone?",
    answer: "Data is written to the disk immediately after capture. Even if your device is damaged, the data up to the last second is saved and can be recovered."
  },

  // --- TECHNICAL ---
  {
    category: 'Technical',
    question: "What is photogrammetry?",
    answer: "Photogrammetry is the science of making measurements from photographs. We use it to turn your 2D site photos into accurate 3D point clouds and meshes."
  },
  {
    category: 'Technical',
    question: "What is the accuracy of your 3D models?",
    answer: "With drone imagery, we achieve <1cm absolute accuracy. With handheld smartphones, we typically achieve 2-5cm relative accuracy, which is sufficient for most progress tracking and documentation needs."
  },

  {
    category: 'Technical',
    question: "Do you support LAS and E57 export?",
    answer: "Yes. You own your data. You can export point clouds in .LAS, .E57, .RCP, and .PLY formats at any time for use in other CAD software."
  },
  {
    category: 'Technical',
    question: "What is 'Auto-Align'?",
    answer: "Auto-Align uses computer vision to recognize floor plan features (like corners and columns) in your photos, automatically placing them on the correct location on your 2D drawings without manual pinning."
  },
  {
    category: 'Technical',
    question: "Can I integrate my own API?",
    answer: "Yes. We offer a comprehensive REST API and GraphQL endpoint for enterprise customers to build custom dashboards and automations."
  },


  // --- SECURITY ---
  {
    category: 'Security & Compliance',
    question: "Is my data secure?",
    answer: "We use banking-grade AES-256 encryption for data at rest and TLS 1.3 for data in transit. We are SOC 2 Type II compliant."
  },
  {
    category: 'Security & Compliance',
    question: "Where is the data hosted?",
    answer: "We host on AWS GovCloud for US clients, ensuring strict data residency compliance. On-premise deployment is available for Enterprise clients."
  },
  {
    category: 'Security & Compliance',
    question: "Who owns the data?",
    answer: "You do. Space Capture claims no ownership over your site data, photos, or 3D models."
  },
  {
    category: 'Security & Compliance',
    question: "Do you comply with GDPR?",
    answer: "Yes. Our European data centers and Privacy Scrubbing AI ensure full compliance with GDPR regulations."
  },
  {
    category: 'Security & Compliance',
    question: "Can I set up Single Sign-On (SSO)?",
    answer: "Yes. We support Okta, Azure AD, and Google Workspace SSO for seamless enterprise access control."
  },

  // --- ADDITIONAL QUESTIONS (Reaching 40+) ---
  {
    category: 'General',
    question: "Do you offer training sessions?",
    answer: "Yes. Every Enterprise contract includes 3 live onboarding sessions and access to Space Academy, our self-paced video certification course."
  },
  {
    category: 'General',
    question: "Is there a limit to how many projects I can create?",
    answer: "No. Our Pro and Enterprise plans offer unlimited project creation. You are only billed based on active storage (GB) or active users, depending on your plan."
  },
  {
    category: 'Field Tasks',
    question: "Can I use the app on an iPad?",
    answer: "Yes, the iPad version is fully optimized for the larger screen, featuring a split-view dashboard for managing tasks alongside the site map."
  },
  {
    category: 'Field Tasks',
    question: "Does weather affect the LiDAR scanner?",
    answer: "Direct sunlight can interfere with LiDAR range. We recommend scanning on cloudy days or during 'Golden Hour' for best outdoor results. Indoor scanning is unaffected."
  },
  {
    category: 'Technical',
    question: "Can I import existing point clouds?",
    answer: "Yes. You can upload .E57 or .LAS files from terrestrial scanners (like Faro) into our platform to merge them with your mobile capture data."
  },
  {
    category: 'Technical',
    question: "What is the maximum file size for a single upload?",
    answer: "For web uploads, we support files up to 50GB. For mobile, the limit is determined by your device storage, but we chunk uploads to handle massive datasets efficiently."
  },
  {
    category: 'AI Intelligence',
    question: "Does the AI detect water damage?",
    answer: "Yes. Our 'Moisture Mapping' model can identify discoloration patterns on drywall and ceiling tiles consistent with water intrusion."
  },
  {
    category: 'AI Intelligence',
    question: "Can I turn off AI detections for certain projects?",
    answer: "Yes. AI modules are togglable per project. If you are working on a secure government site where AI analysis is restricted, you can disable it entirely."
  },
  {
    category: 'Security & Compliance',
    question: "Do you have an on-premise version?",
    answer: "Yes. For defense and high-security clients, we offer a 'Space Capture Air-Gapped' edition that runs entirely on your local servers with no internet connection required."
  },
  {
    category: 'Security & Compliance',
    question: "How long is data retained?",
    answer: "By default, we retain data for the life of your subscription plus 90 days. You can configure custom retention policies (e.g., 'Delete after 7 years') to meet legal requirements."
  },
  {
    category: 'Field Tasks',
    question: "Can I record video instead of photos?",
    answer: "Yes. Our 'Video Walk' mode lets you walk a path while recording 4K video. Our photogrammetry engine then extracts frames to build the 3D path automatically."
  },
  {
    category: 'Technical',
    question: "Do you provide an SDK for mobile apps?",
    answer: "Yes. The 'Space Capture Mobile SDK' allows you to embed our capture logic directly into your own white-labeled company app."
  },
  {
    category: 'General',
    question: "What currencies do you accept?",
    answer: "We accept USD, EUR, GBP, and CAD. Enterprise contracts can be invoiced with Net-30 terms."
  },
  {
    category: 'Field Tasks',
    question: "How do I invite a client to view the model?",
    answer: "Click the 'Share' button to generate a 'View-Only Link'. You can password-protect this link and set an expiration date (e.g., 48 hours)."
  },

  // --- NEW ADDITIONS (Insurance & Real Estate) ---
  {
    category: 'General',
    question: "Can Insurance Adjusters use this for claims?",
    answer: "Yes. Our 'Insurance Mode' locks the metadata of every photo, providing an immutable audit trail of the site condition at the exact time of capture, preventing fraud."
  },
  {
    category: 'General',
    question: "Do you support virtual staging for Real Estate?",
    answer: "We integrate with common virtual staging platforms. You can export the clean OBJ/FBX mesh from Space Capture and import it into tools like 3ds Max or Blender for staging."
  },
  {
    category: 'Technical',
    question: "What hardware is recommended for beginners?",
    answer: "We recommend our 'Starter Kit', which includes a standard iPhone/Android and a DJI Osmo gimbal. This provides excellent stabilization for smooth site walks."
  },
  {
    category: 'Technical',
    question: "Can I use an Insta360 camera?",
    answer: "Yes, we fully support the Insta360 ONE X, X2, X3, and RS models. The app connects directly to the camera via WiFi for control and data transfer."
  },
  {
    category: 'Field Tasks',
    question: "How fast is the processing time?",
    answer: "A standard 5,000 sq ft site walk is processed and ready for viewing in approximately 45 minutes to 1 hour, depending on server load."
  },
  {
    category: 'Security & Compliance',
    question: "Is the 'Remote Inspection Playbook' included?",
    answer: "Yes, all users have access to our resource library, including the Remote Inspection Playbook and Flight School video series."
  },
  {
    category: 'AI Intelligence',
    question: "Can the AI detect mold?",
    answer: "Our 'Moisture Mapping' can identify visible discoloration often associated with mold or water damage, but we always recommend professional environmental testing for confirmation."
  },
  {
    category: 'Security & Compliance',
    question: "How does the 'View-Only' link work for investors?",
    answer: "Investors receive a simplified dashboard that lets them 'walk' the site and view progress percentages, but hides sensitive buttons like 'Delete' or 'Edit'."
  },
  {
    category: 'Technical',
    question: "Can I export 4K video fly-throughs?",
    answer: "Yes. You can define a camera path through your 3D digital twin and render a smooth 4K video file for marketing or investor presentations."
  },
  {
    category: 'Field Tasks',
    question: "Do you offer consumption-based pricing?",
    answer: "Yes. You can choose to pay strictly per square foot captured with our 'Pay-As-You-Go' plan, or opt for a monthly subscription for active projects."
  }
];
