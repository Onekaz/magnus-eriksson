// lib/content/profile.ts

export const CONTACT_EMAIL = "eriksson.magnus@outlook.com";
export const CONTACT_MAILTO_HREF = `mailto:${CONTACT_EMAIL}`;

export const CONTACT_PHONE_DISPLAY = "070 873 33 20";
export const CONTACT_PHONE_HREF = "tel:+46708733320";

export const CONTACT_LINKEDIN_DISPLAY = "LinkedIn";
export const CONTACT_LINKEDIN_HREF = "https://www.linkedin.com/in/magnus-eriksson-se/";

export const profileDownloads = [
  {
    label: "Resume",
    href: "/downloads/magnus-eriksson-resume.pdf",
    ariaLabel: "Download resume",
  },
  {
    label: "Personality test",
    href: "/downloads/magnus-eriksson-personality-test.pdf",
    ariaLabel: "Download personality test",
  },
  {
    label: "Logical reasoning test",
    href: "/downloads/magnus-eriksson-logical-reasoning-test.pdf",
    ariaLabel: "Download logical reasoning test",
  },
] as const;

export const aboutParagraphs = [
 "With a background in senior commercial roles within telecom and IT/IoT, I drive profitable growth by building scalable structures, translating priorities into action, and strengthening commercial performance. My focus is consistently on turning strategic plans into measurable results, ensuring strong alignment across sales, partnerships, and market initiatives.",
"I bring a structured and execution-oriented approach to change management and am at my best in dynamic environments where success depends on clear priorities, disciplined follow-through, and close collaboration across functions. I communicate effectively at all levels and create engagement through clarity, involvement, and shared ownership.",
] as const;

export const skillGroups = [
  {
    title: "Organization and Leadership",
    skills: [
      "Modern Management Concepts",
      "Organizational Development",
      "Change Management",
      "Governance and Accountability",
      "Stakeholder Management",
      "Cross-Functional Alignment",
    ],
  },
  {
    title: "Business Development and Sales",
    skills: [
      "Revenue Growth",
      "Commercial Strategy",
      "Go-To-Market Execution",
      "Business Development",
      "Pricing and Profitability",
      "Commercial Agreements",
    ],
  },
  {
    title: "Marketing and Communication",
    skills: [
      "Marketing Strategy",
      "Brand Positioning",
      "Corporate Communication",
      "Pipeline Generation",
      "Performance Management",
    ],
  },
  {
    title: "Web, Content and AI Support",
    skills: [
      "Web Structure",
      "Content Strategy",
      "Messaging and Copywriting",
      "Visual Presentation",
      "AI Optimization",
      "AI-assisted Prototyping",
    ],
  },
] as const;

export type ResumeEntry = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  responsibilities: readonly string[];
  description: string;
  descriptionLead?: string;
  achievementLabel?: string;
  showTimelineMarker?: boolean;
};

export type ResumeBlock =
  | {
      type: "entry";
      entry: ResumeEntry;
    }
  | {
      type: "timelineGroup";
      entries: readonly ResumeEntry[];
    };

export const resumeBlocks: readonly ResumeBlock[] = [
  {
    type: "entry",
    entry: {
      role: "Contract Specialist (Consultant)",
      company: "IoT Open AB",
      location: "Skellefteå (Remote)",
      start: "Oct 2025",
      end: "Dec 2025",
      responsibilities: [
        "Contract Development",
        "Legal Document Preparation",
        "Stakeholder Alignment",
      ],
      achievementLabel: "Achievements:",
      description:
        "Developed a SaaS platform contract framework, creating the structure and legal proposal format for the company’s SaaS offering.",
    },
  },
  {
    type: "timelineGroup",
    entries: [
      {
        role: "Chief Commercial Officer (CCO)",
        company: "TH1NG AB (publ)",
        location: "Stockholm",
        start: "Nov 2024",
        end: "Jul 2025",
        responsibilities: [
          "Revenue Budgeting",
          "Commercial Operating Plan",
          "Investor Relations",
        ],
        achievementLabel: "Achievements:",
        description:
          "Created a commercial action plan covering target markets, sales priorities, KPI follow-up and CRM structure, supporting a more results-driven sales organization.",
        showTimelineMarker: true,
      },
      {
        role: "Chief Strategy Officer (CSO)",
        company: "TH1NG AB (publ)",
        location: "Stockholm",
        start: "May 2024",
        end: "Nov 2024",
        responsibilities: [
          "Corporate Strategy",
          "Governance and Regulation",
          "Investor Relations",
        ],
        achievementLabel: "Achievements:",
        description:
          "Structured regulatory communication and governance matters, ensuring alignment of legal documentation in capitalization initiatives.",
      },
      {
        role: "Chief Marketing Officer (CMO)",
        company: "TH1NG AB (publ)",
        location: "Stockholm",
        start: "Oct 2023",
        end: "May 2024",
        responsibilities: [
          "Brand and Market Positioning",
          "Marketing Performance",
          "Corporate Legal Matters",
        ],
        achievementLabel: "Achievements:",
        description:
          "Established consistent marketing communications, strengthened brand management, monitored performance metrics, and developed a new visual identity and logo.",
        showTimelineMarker: true,
      },
    ],
  },
  {
    type: "timelineGroup",
    entries: [
      {
        role: "Business Development Manager",
        company: "GlobalConnect AB",
        location: "Stockholm",
        start: "Mar 2019",
        end: "May 2023",
        responsibilities: ["Revenue Growth", "Pricing Strategy", "Contract Development"],
        achievementLabel: "Achievements:",
        description:
          "Increased ARPU by 19% via pricing strategy and product diversification. Developed and negotiated a business agreement proposed by Service Providers as industry standard.",
        showTimelineMarker: true,
      },
      {
        role: "Data Protection Manager (DPM)",
        company: "IP-Only Networks AB",
        location: "Stockholm",
        start: "May 2018",
        end: "May 2023",
        responsibilities: [
          "Data Protection Governance",
          "GDPR Compliance",
          "Internal Advisory",
        ],
        achievementLabel: "Achievements:",
        description:
          "Established GDPR governance across the business area and served as primary internal contact for data protection matters.",
      },
      {
        role: "KAM, Business Developer",
        company: "IP-Only Networks AB",
        location: "Stockholm",
        start: "Jun 2016",
        end: "Mar 2019",
        responsibilities: [
          "Key Accounts",
          "Contract Management",
          "Business and Product Development",
        ],
        achievementLabel: "Achievements:",
        description:
          "Strengthened Service Provider partnerships, increased platform activity, and drove cross-functional alignment through a team I initiated and led.",
        showTimelineMarker: true,
      },
    ],
  },
  {
    type: "entry",
    entry: {
      role: "Business and Strategy Consultant",
      company: "WSP Sverige AB",
      location: "Stockholm",
      start: "Mar 2015",
      end: "Jun 2016",
      responsibilities: [
        "Strategic Advisory",
        "Financial and Business Modelling",
        "Commercial Agreements",
      ],
      achievementLabel: "Achievements:",
      description:
        "Shaped business strategies, developed financial models and investment cases, and drafted and negotiated commercial agreements.",
    },
  },
] as const;

export type EducationThesis = {
  label: string;
  title: string;
};

export type EducationEntry = {
  title: string;
  institution: string;
  period: string;
  theses?: readonly EducationThesis[];
};

export const educationEntries: readonly EducationEntry[] = [
  {
    title: "Business Administration, Master’s level",
    institution: "Stockholm University, Stockholm",
    period: "2000–2007",
    theses: [
      {
        label: "Bachelor’s Thesis:",
        title: "Employee Satisfaction in Relation to Organizational Communication",
      },
      {
        label: "Master’s Thesis:",
        title: "Balanced Scorecard in Municipal Operations in Theory and Practice",
      },
    ],
  },
  {
    title: "Rules and Regulations at First North",
    institution: "Redeye AB, Stockholm",
    period: "2024",
  },
  {
    title: "Conscript Parachute Ranger",
    institution: "Swedish Parachute Ranger School, Karlsborg",
    period: "1997–1998",
  },
] as const;