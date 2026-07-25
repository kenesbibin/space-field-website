export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: 'ai-in-construction',
    title: 'AI in Construction: The Complete Guide',
    excerpt: 'A comprehensive overview of how artificial intelligence is transforming construction workflows, safety, and quality control.',
    category: 'AI in Construction',
    date: 'Nov 10, 2024'
  },
  {
    slug: 'ai-vs-manual-inspections',
    title: 'AI vs. Manual Inspections in Construction: A Detailed Cost Comparison',
    excerpt: 'Compare the speed, accuracy, and cost of AI-powered inspections against traditional manual inspection processes.',
    category: 'AI in Construction',
    date: 'Nov 12, 2024'
  },
  {
    slug: 'ai-in-defect-detection',
    title: 'AI Defect Detection with Best UI Experience',
    excerpt: 'Explore how AI-powered defect detection in SpaceCapture identifies site issues instantly using image recognition.',
    category: 'AI Defect Detection',
    date: 'Oct 28, 2024'
  },
  {
    slug: 'computer-vision-risk',
    title: 'How Computer Vision Reduces Jobsite Risk and Improves Safety',
    excerpt: 'Learn how computer vision models monitor job sites in real time to identify hazards before incidents occur.',
    category: 'Safety',
    date: 'Oct 12, 2024'
  },
  {
    slug: 'reduce-rework-computer-vision',
    title: 'Real-Time Progress Tracking vs. Traditional Daily Logs',
    excerpt: 'Understand the difference between automated progress tracking and manual daily reporting workflows.',
    category: 'Mobile App',
    date: 'Nov 24, 2024'
  },
  {
    slug: 'reduce-rework-ai-case-study',
    title: 'How Vertex Builders Reduced Site Rework by 40% using AI Detection',
    excerpt: 'See the Before & After. Discover how real-time AI monitoring transformed a chaotic worksite into a model of efficiency.',
    category: 'Case Study',
    date: 'Oct 20, 2024'
  },
  {
    slug: 'end-of-manual-punch-lists',
    title: 'The End of Manual Punch Lists: How AI Automation Is Transforming Construction Closeout',
    excerpt: 'Replace clipboards with Mobile Field Software. AI auto-generates punch lists from site photos and assigns tasks.',
    category: 'Inspection Software',
    date: 'Oct 08, 2024'
  },
  {
    slug: 'digital-punch-list-workflow',
    title: 'Mastering the Digital Punch List Workflow in Construction',
    excerpt: 'Learn how digital punch lists streamline closeout workflows, reduce rework, and improve handover quality.',
    category: 'Inspection Software',
    date: 'Nov 14, 2024'
  },
  {
    slug: 'end-of-digital-paper',
    title: 'The End of Digital Paper: A Manifesto for Active AI in Field Operations',
    excerpt: 'Why digital forms alone fail modern field teams and how AI-powered visual verification delivers real results.',
    category: 'Inspection Software',
    date: 'Nov 22, 2024'
  },
  {
    slug: 'predictive-maintenance',
    title: 'How Apex Construction Reduced Inspection Time by 40% with AI Predictive Maintenance',
    excerpt: 'Prevent downtime with our Maintenance Field Module. AI parses telemetry to schedule field repairs automatically.',
    category: 'Maintenance Module',
    date: 'Sep 28, 2024'
  },
  {
    slug: 'subcontractor-safety-ai',
    title: 'AI-Powered Safety Compliance for Subcontractors in Construction',
    excerpt: 'Manage team compliance. The Task Field Software verifies PPE and certifications for every subcontractor on site.',
    category: 'Safety',
    date: 'Sep 02, 2024'
  },
  {
    slug: 'subcontractor-accountability-tips',
    title: 'Improving Subcontractor Accountability with Digital Tools',
    excerpt: 'Improve subcontractor accountability with clear documentation, automated check-ins, and visual proof of work.',
    category: 'Task Software',
    date: 'Nov 30, 2024'
  },
  {
    slug: 'field-service-automation-benefits',
    title: '5 Ways Automation Transforms Construction Dispatch and Field Management',
    excerpt: 'Explore the measurable benefits of automating field service operations, from cost savings to faster response times.',
    category: 'Task Software',
    date: 'Nov 20, 2024'
  },
  {
    slug: 'real-time-progress-tracking',
    title: 'Real-Time Progress Tracking vs. Traditional Daily Logs',
    excerpt: 'Track installation status from your phone. Our Mobile Field Software validates schedule progress against the model.',
    category: 'Mobile App',
    date: 'Aug 20, 2024'
  },
  {
    slug: 'mobile-field-service-apps',
    title: 'Essential Features to Look for in Mobile Field Service Apps for Construction',
    excerpt: 'Everything you need to know about choosing, deploying, and maximizing mobile field service apps for your team.',
    category: 'Mobile App',
    date: 'Nov 16, 2024'
  },
  {
    slug: 'drone-defect-detection',
    title: 'Automated Defect Detection with Drone Imagery in Construction',
    excerpt: 'Ingest aerial data directly into your Field Module. Automate facade and roof inspections with AI analysis.',
    category: 'Drone Module',
    date: 'Sep 15, 2024'
  },
  {
    slug: 'bim-reality-comparison',
    title: 'Reducing Construction Rework with BIM-to-Reality AI Comparison',
    excerpt: 'Bring BIM to the field. Compare as-built to as-designed using our Reality Capture software features.',
    category: 'BIM Module',
    date: 'Aug 10, 2024'
  },
  {
    slug: 'ai-insurance-claims',
    title: 'The Role of AI in Construction Insurance Claims: Settling Faster with Visual Evidence',
    excerpt: 'Capture irrefutable evidence. Use the Field App to document incidents and speed up insurance claims.',
    category: 'Documentation',
    date: 'Jul 25, 2024'
  },
  {
    slug: 'optimizing-material-usage',
    title: 'Optimizing Material Usage with Field Intelligence and AI',
    excerpt: 'Control inventory on site. AI analyzes material usage patterns to optimize procurement and reduce waste.',
    category: 'Material Module',
    date: 'Jul 12, 2024'
  },
  {
    slug: 'remote-inspections-360',
    title: 'Enhancing Remote Inspections with 360-Degree AI Capture',
    excerpt: 'Inspect without travel. 360° capture capabilities integrated into the Field Inspection Software.',
    category: 'Remote Inspection',
    date: 'Jun 30, 2024'
  },
  {
    slug: 'remote-site-monitoring-guide',
    title: "A Manager's Guide to Remote Site Monitoring in Construction",
    excerpt: 'Learn how to monitor construction sites remotely using cameras, drones, and AI-powered analytics.',
    category: 'Remote Inspection',
    date: 'Nov 28, 2024'
  },
  {
    slug: 'spacecapture-playstore-launch',
    title: 'SpaceCapture App Launched on Google Play Store',
    excerpt: 'SpaceCapture is now live on the Google Play Store. Discover how the mobile-first Field Module empowers teams with AI-powered site capture and defect detection.',
    category: 'Product Launch',
    date: 'Nov 05, 2024'
  },
  {
    slug: 'best-ui-experience-spacecapture',
    title: 'Best UI Experience in SpaceCapture App',
    excerpt: 'Learn how SpaceCapture delivers a fast, intuitive, and clutter-free UI that helps field engineers capture defects, assign tasks, and sync data effortlessly.',
    category: 'UI/UX',
    date: 'Nov 01, 2024'
  },
  {
    slug: 'spacecapture-vs-plangrid',
    title: 'SpaceCapture vs PlanGrid: Best Field Inspection Software Comparison',
    excerpt: 'Comparing SpaceCapture and PlanGrid for construction inspections, AI defect detection, offline capability, and pricing. See which solution fits your team best.',
    category: 'Comparison',
    date: 'Nov 02, 2024'
  },
  {
    slug: 'geofencing-construction-sites',
    title: 'Why Geofencing Is Crucial for Large Construction Job Sites',
    excerpt: 'Learn how geofencing improves site safety, automates time tracking, and enhances equipment accountability.',
    category: 'Safety',
    date: 'Nov 18, 2024'
  }
];
