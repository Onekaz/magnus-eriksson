// lib/content/profile.ts

export const CONTACT_EMAIL = "eriksson.magnus@outlook.com";
export const CONTACT_MAILTO_HREF = `mailto:${CONTACT_EMAIL}`;

export const CONTACT_PHONE_DISPLAY = "070 873 33 20";
export const CONTACT_PHONE_HREF = "tel:+46708733320";

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
    label: "Logic test",
    href: "/downloads/magnus-eriksson-logic-test.pdf",
    ariaLabel: "Download logic test",
  },
] as const;

export const aboutParagraphs = [
  "With a background in senior commercial roles within telecom and IT/IoT, I have driven profitable growth by building scalable structures and leading cross-functional execution. My focus has consistently been on translating strategic intent into measurable business outcomes, ensuring strong alignment across stakeholders, sales, partnerships, and market priorities.",
  "I bring a structured, commercially driven approach to change and execution, and I am at my best in dynamic environments where growth depends on clear priorities, disciplined follow-through, and strong alignment across functions.",
] as const;

export const skillGroups = [
  {
    title: "Organization and Leadership",
    skills: [
      "Strategic Prioritization",
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
      "Business Model Development",
      "Pricing and Profitability",
      "Commercial Agreements",
    ],
  },
  {
    title: "Marketing and Communication",
    skills: [
      "Marketing Strategy",
      "Brand Positioning",
      "Strategic Communication",
      "Market Positioning",
      "Pipeline Generation",
      "Performance Management",
    ],
  },
  {
    title: "Web Structure, Content and AI Support",
    skills: [
      "Web Structure",
      "Content Strategy",
      "Messaging and Copywriting",
      "Visual Presentation",
      "SEO and AI Optimization",
      "AI-Assisted Prototyping",
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
      role: "Contract Specialist",
      company: "IoT Open AB",
      location: "Distance",
      start: "2025-10",
      end: "2025-12",
      responsibilities: [
        "Contract Development",
        "Legal Quality Assurance",
        "Stakeholder Alignment",
      ],
      descriptionLead: "Project consultant:",
      description:
        "Developed and structured a platform contract (SaaS), focused on professional packaging and preparing legal proposals to ensure clarity and relevance.",
    },
  },
  {
    type: "timelineGroup",
    entries: [
      {
        role: "Chief Commercial Officer (CCO)",
        company: "TH1NG AB (publ)",
        location: "Stockholm",
        start: "2024-11",
        end: "2025-07",
        responsibilities: [
          "Revenue Budgeting",
          "Commercial Operating Plan",
          "Investor Relations",
        ],
        description:
          "Mandate expanded to include the development of the sales strategy, ownership of revenue budgeting, and senior management formation with the CEO.",
        showTimelineMarker: true,
      },
      {
        role: "Chief Strategy Officer (CSO)",
        company: "TH1NG AB (publ)",
        location: "Stockholm",
        start: "2024-05",
        end: "2024-11",
        responsibilities: [
          "Corporate Strategy",
          "Governance and Regulation",
          "Investor Relations",
        ],
        description:
          "Mandate expanded to include regulatory communication, including general meetings, and close collaboration with the CEO and the board on capitalization matters.",
      },
      {
        role: "Chief Marketing Officer (CMO)",
        company: "TH1NG AB (publ)",
        location: "Stockholm",
        start: "2023-10",
        end: "2024-05",
        responsibilities: [
          "Brand and Market Positioning",
          "Marketing Performance",
          "Corporate Legal Matters",
        ],
        description:
          "Established consistent marketing communications, monitored performance metrics, strengthened brand management, and developed a new visual identity and logo.",
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
        start: "2019-03",
        end: "2023-05",
        responsibilities: ["Revenue Growth", "Pricing Strategy", "Contract Development"],
        description:
          "Increased ARPU by 19% via pricing strategy and product diversification. Developed and negotiated a business agreement proposed by service providers as industry standard.",
        showTimelineMarker: true,
      },
      {
        role: "Data Protection Manager (DPM)",
        company: "IP-Only Networks AB",
        location: "Stockholm",
        start: "2018-05",
        end: "2023-05",
        responsibilities: [
          "Data Protection Governance",
          "GDPR Compliance",
          "Internal Advisory",
        ],
        description:
          "Ensured GDPR compliance across all personal data within the business area, and served as primary internal contact for GDPR matters.",
      },
      {
        role: "KAM, Business Developer",
        company: "IP-Only Networks AB",
        location: "Stockholm",
        start: "2016-06",
        end: "2019-03",
        responsibilities: [
          "Key Accounts",
          "Contract Management",
          "Business and Product Development",
        ],
        description:
          "Strengthened service provider partnerships, increased platform activity, and drove cross-functional alignment through a team I initiated and led.",
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
      start: "2015-03",
      end: "2016-06",
      responsibilities: [
        "Strategic Advisory",
        "Financial and Business Modelling",
        "Commercial Agreements",
      ],
      description:
        "Led and supported projects by shaping business strategies, developing financial models and investment cases, and drafting and negotiating commercial agreements.",
    },
  },
] as const;

export const educationEntries = [
  {
    year: "2000-2007",
    details: [
      "Business Administration, Master’s level, Stockholm University, Stockholm",
    ],
  },
  {
    year: "2024",
    details: ["Rules and Regulations at First North Growth Market, Redeye AB, Stockholm"],
  },
  {
    year: "2014",
    details: ["Personal trainer, DS Personal Training School, Stockholm"],
  },
  {
    year: "1997-1998",
    details: ["Conscript Parachute Ranger, Swedish Parachute Ranger School, Karlsborg"],
  },
] as const;