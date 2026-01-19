export type GlossaryTerm = {
  term: string;
  definition: string;
  category: string;
  slug: string;
  details: string;
};

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  { 
    term: 'RFI', 
    slug: 'rfi',
    definition: 'Request for Information. A formal process used in construction to clarify details in the plans or specifications.', 
    category: 'Project Management',
    details: `
      ## What is an RFI?
      A **Request for Information (RFI)** is a standard business process whose purpose is to collect written information about the capabilities of various suppliers. In construction, it is used to clarify details in the plans, drawings, or specifications.

      ### Why are RFIs important?
      - **Clarity**: They resolve ambiguities in the contract documents.
      - **Documentation**: They provide a paper trail of decisions made during the project.
      - **Cost Control**: Unresolved questions can lead to rework, which increases costs.

      ### The RFI Process
      1. **Identification**: A subcontractor or GC identifies a gap or error.
      2. **Drafting**: The question is formally documented.
      3. **Submission**: Sent to the inevitable architect, engineer, or consultant.
      4. **Response**: The answer is provided, often with sketches or revised specs.
      5. **Distribution**: The answer is shared with all affected parties.
    `
  },
  { 
    term: 'Punch List', 
    slug: 'punch-list',
    definition: 'A document listing work that does not conform to contract specifications, usually created towards the end of a project.', 
    category: 'Quality Control',
    details: `
      ## What is a Punch List?
      A **Punch List** (or Snag List in the UK) is a document prepared near the end of a construction project listing work not conforming to contract specifications that the general contractor must complete prior to final payment.

      ### Common Punch List Items
      - Incorrect installation of building components.
      - Minor damage to finishes (scratches, scuffs).
      - Missing hardware or fixtures.
      - Performance issues (e.g., a window that sticks).

      ### Digital Punch Lists with SpaceCapture
      Modern construction management software allows for:
      - **Photo documentation**: Snap a photo of the defect.
      - **Location tagging**: Pin the issue on the floor plan.
      - **Instant assignment**: Notify the responsible sub immediately.
    `
  },
  { 
    term: 'Submittal', 
    slug: 'submittal',
    definition: 'Shop drawings, material data, samples, and product data. Submittals are required primarily for the architect and engineer to verify that the correct products will be installed.', 
    category: 'Project Management',
    details: `
        ## Understanding Submittals
        **Submittals** involve shop drawings, material data, samples, and product data. They are required primarily for the architect and engineer to verify that the correct products will be installed.
        
        ### Types of Submittals
        - **Product Data**: Manufacturer's specifications.
        - **Shop Drawings**: Detailed diagrams showing how building components will be fabricated and installed.
        - **Samples**: Physical examples of materials (e.g., brick, paint color, carpet).
    `
  },
  { 
    term: 'BIM', 
    slug: 'bim',
    definition: 'Building Information Modeling. A digital representation of physical and functional characteristics of a facility.', 
    category: 'Technology',
    details: `
        ## Building Information Modeling (BIM)
        **BIM** is a process involving the generation and management of digital representations of physical and functional characteristics of places.
        
        ### Benefits of BIM
        - **3D Visualization**: See the building before it's built.
        - **Clash Detection**: Identify where pipes might hit ducts before construction begins.
        - **Lifespan Management**: Use the model for facility management after handover.
    `
  },
  { 
    term: 'Common Data Environment (CDE)', 
    slug: 'cde',
    definition: 'The single source of information for the project, used to collect, manage and disseminate documentation, the graphical model and non-graphical data for the whole project team.', 
    category: 'Technology',
    details: `
        ## What is a CDE?
        A **Common Data Environment (CDE)** is the single source of information for the project, used to collect, manage and disseminate documentation, the graphical model and non-graphical data for the whole project team.
        
        ### Key Features
        - **Accessibility**: Available to all authorized project members.
        - **Version Control**: Ensures everyone is working off the latest documents.
        - **Security**: Protects sensitive project data.
    `
  },
  { 
    term: 'Defect Detection', 
    slug: 'defect-detection',
    definition: 'The process of identifying construction errors, often using AI or computer vision to spot issues like cracks or misalignments automatically.', 
    category: 'AI & Quality',
    details: `
        ## AI-Powered Defect Detection
        **Defect Detection** in modern construction often leverages Artificial Intelligence and Computer Vision to automatically identify quality issues.
        
        ### How it Works
        Cameras or drones capture site imagery, and AI algorithms analyze the visual data to spot:
        - **Cracks** in concrete.
        - **Missing components** (e.g., safety rails).
        - **Deviations** from the BIM model.
    `
  },
  { 
    term: 'Change Order', 
    slug: 'change-order',
    definition: 'Work that is added to or deleted from the original scope of work of a contract, which alters the original contract amount and/or completion date.', 
    category: 'Contracts',
    details: `
        ## Managing Change Orders
        A **Change Order** is a standard industry document that amends the construction contract. It describes the new work, the price change, and any adjustment to the schedule.
    `
  },
  { 
    term: 'Gantt Chart', 
    slug: 'gantt-chart',
    definition: 'A type of bar chart that illustrates a project schedule, showing the dependency relationships between activities and current status.', 
    category: 'Scheduling',
    details: `
        ## The Gantt Chart
        Named after Henry Gantt, this chart illustrates a project schedule. Modern digital Gantt charts are interactive, allowing project managers to adjust timelines and dependencies with a drag-and-drop interface.
    `
  },
  { 
    term: 'Lean Construction', 
    slug: 'lean-construction',
    definition: 'A philosophy based on the Toyota Production System that aims to maximize value and minimize waste in construction processes.', 
    category: 'Methodology',
    details: `
        ## Lean Construction Principles
        **Lean Construction** is a combination of operational research and practical development in design and construction with an adaption of lean manufacturing principles.
    `
  },
  { 
    term: 'Digital Twin', 
    slug: 'digital-twin',
    definition: 'A virtual model designed to accurately reflect a physical object. In construction, it covers the lifecycle from design to operation.', 
    category: 'Technology',
    details: `
        ## Digital Twin Technology
        A **Digital Twin** is a virtual model designed to accurately reflect a physical object. The object being studied—for example, a wind turbine—is outfitted with various sensors related to vital areas of functionality.
    `
  },
  { 
    term: 'As-Built', 
    slug: 'as-built',
    definition: 'Drawings or models that show the dimensions, geometry, and location of all elements of the work as actually constructed.', 
    category: 'Documentation',
    details: `
        ## As-Built Documentation
        **As-Built** drawings are the final set of drawings aimed at showing exactly how the building was constructed, accounting for all changes and field adjustments.
    `
  },
  { 
    term: 'Daily Log', 
    slug: 'daily-log',
    definition: 'A daily record of job site activity, weather, workforce counts, and progress. Often digitized to improve accuracy.', 
    category: 'Documentation',
    details: `
        ## The Site Daily Log
        A **Daily Log** is a crucial document in construction, serving as the official record of what happened on the job site on any given day. It is often the first document referenced in legal disputes.
    `
  },
  { 
    term: 'PPE', 
    slug: 'ppe',
    definition: 'Personal Protective Equipment. Gear such as helmets, goggles, and vests designed to protect the wearer from injury or infection.', 
    category: 'Safety',
    details: `
        ## Personal Protective Equipment (PPE)
        **PPE** refers to protective clothing, helmets, goggles, or other garments or equipment designed to protect the wearer's body from injury or infection.
    `
  },
  { 
    term: 'Toolbox Talk', 
    slug: 'toolbox-talk',
    definition: 'A short safety meeting held on the job site to discuss specific hazards and safe work practices.', 
    category: 'Safety',
    details: `
        ## Toolbox Talks
        A **Toolbox Talk** is an informal group discussion that focuses on a particular safety issue. These meetings are usually short and held at the job site before the work day begins.
    `
  },
  { 
    term: 'VDC', 
    slug: 'vdc',
    definition: 'Virtual Design and Construction. The management of integrated multi-disciplinary performance models of design-construction projects.', 
    category: 'Technology',
    details: `
        ## Virtual Design and Construction (VDC)
        **VDC** is the management of integrated multi-disciplinary performance models of design-construction projects, including the product (i.e., facilities), work processes and organization representing the project team.
    `
  },
  { 
    term: 'Work Order', 
    slug: 'work-order',
    definition: 'A task or job for a customer, that can be scheduled or assigned to someone. Used heavily in facility management.', 
    category: 'Operations',
    details: `
        ## Work Orders
        A **Work Order** is a task or job that can be scheduled or assigned to someone. In facility management, it is the primary method of tracking maintenance requests.
    `
  },
  { 
    term: 'Takeoff', 
    slug: 'takeoff',
    definition: 'The process of estimating the quantities of materials required from the project plans.', 
    category: 'Estimation',
    details: `
        ## Construction Takeoff
        **Takeoff** (or material takeoff) is the process of estimating the quantities of material required from the project plans to determine the cost of materials.
    `
  },
  { 
    term: 'AI Defect Analysis', 
    slug: 'ai-defect-analysis',
    definition: 'The use of artificial intelligence to analyze detected defects for patterns, severity, and root causes, enabling data-driven decision making.', 
    category: 'AI & Quality',
    details: `
        ## AI-Driven Defect Analysis
        **AI Defect Analysis** goes beyond simple detection. It categorizes issues, predicts potential future failures based on historical data, and helps prioritize repairs.
        
        ### Capabilities
        - **Trend Analysis**: Identifying recurring issues across multiple projects.
        - **Severity Scoring**: Automatically grading defects based on potential impact.
        - **Predictive Maintenance**: Suggesting interventions before a failure occurs.
    `
  },
  { 
    term: 'Computer Vision', 
    slug: 'computer-vision',
    definition: 'A field of AI that enables computers to derive meaningful information from digital images, videos and other visual inputs.', 
    category: 'AI & Technology',
    details: `
        ## Computer Vision in Construction
        **Computer Vision** allows machines to "see" and understand the construction site. It is the core technology behind automated progress tracking and safety monitoring.
    `
  },
  { 
    term: 'Predictive Analytics', 
    slug: 'predictive-analytics',
    definition: 'The use of data, statistical algorithms and machine learning techniques to identify the likelihood of future outcomes based on historical data.', 
    category: 'AI & Data',
    details: `
        ## Predictive Analytics
        **Predictive Analytics** helps construction managers foresee risks such as schedule delays, safety incidents, or budget overruns, allowing for proactive mitigation.
    `
  }
];
