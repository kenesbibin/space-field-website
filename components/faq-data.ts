export type FaqCategory = 'General' | 'AI Intelligence' | 'Field Tasks' | 'Technical' | 'Security & Compliance';

export interface FaqItem {
  question: string;
  answer: string;
  category: FaqCategory;
}

export const faqData: FaqItem[] = [
  // --- GENERAL ---
  {
    category: 'General',
    question: "What makes SpaceCapture different from Matterport or HoloBuilder?",
    answer: "While Matterport focuses on virtual tours for real estate, SpaceCapture is built specifically for construction engineering. We prioritize 'Engineering-Grade' accuracy (2mm), offline capabilities, and automated AI analysis for hazards and defects, rather than just visual walkthroughs."
  },
  {
    category: 'General',
    question: "Is SpaceCapture a mobile app or a web platform?",
    answer: "It is both. Our mobile app (iOS/Android) handles high-speed field capture, LiDAR scanning, and offline data collection. The web platform is for project management, detailed 3D analysis, and generating reports."
  },
  {
    category: 'General',
    question: "Do I need special hardware to use SpaceCapture?",
    answer: "No. You can start with just a standard smartphone. However, for Survey-Grade accuracy, we support integration with LiDAR scanners (Leica, Faro), 360° cameras (Insta360, Ricoh), and drones."
  },
  {
    category: 'General',
    question: "Can I try SpaceCapture for free?",
    answer: "Yes, we offer a 'Pilot Program' tier that allows you to capture up to 5,000 sq. ft. completely free, including access to our AI detection engine."
  },
  {
    category: 'General',
    question: "What industries do you support?",
    answer: "We specialize in Commercial Construction, Industrial Facilities, Oil & Gas Inspection, and Civil Infrastructure maintenance."
  },

  // --- AI INTELLIGENCE ---
  {
    category: 'AI Intelligence',
    question: "How accurate is the AI crack detection?",
    answer: "Our AI model is trained on over 5 million construction images. It can detect hairline fractures as thin as 0.3mm with 94.5% precision, significantly higher than human visual inspection in low-light conditions."
  },
  {
    category: 'AI Intelligence',
    question: "Can the AI identify safety hazards automatically?",
    answer: "Yes. The 'Safety Sentry' module automatically flags OSHA violations such as missing PPE (hard hats, vests), unguarded floor openings, and exposed wiring in real-time."
  },
  {
    category: 'AI Intelligence',
    question: "Does the AI count installed materials?",
    answer: "Absolutely. Our 'Material Takeoff' bot counts visible outlets, vents, pipes, and drywall sheets, upgrading your progress tracking from 'gut feeling' to quantitative data."
  },
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
    answer: "We offer native 2-way sync with Procore, Autodesk Construction Cloud, and Primavera P6. An issue created in SpaceCapture creates an RFI in Procore instantly."
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
    answer: "You do. SpaceCapture claims no ownership over your site data, photos, or 3D models."
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
    answer: "Yes. For defense and high-security clients, we offer a 'SpaceCapture Air-Gapped' edition that runs entirely on your local servers with no internet connection required."
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
    answer: "Yes. The 'SpaceCapture Mobile SDK' allows you to embed our capture logic directly into your own white-labeled company app."
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
    answer: "We integrate with common virtual staging platforms. You can export the clean OBJ/FBX mesh from SpaceCapture and import it into tools like 3ds Max or Blender for staging."
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
