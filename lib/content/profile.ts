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
    label: "Logic test",
    href: "/downloads/magnus-eriksson-logic-test.pdf",
    ariaLabel: "Download logic test",
  },
] as const;

export const aboutParagraphs = [
  "With a background in senior commercial roles within telecom and IT/IoT, I drive profitable growth by building scalable structures, strengthening commercial performance, and turning priorities into progress. My focus is consistently on translating strategic plans into measurable results, ensuring strong collaboration across sales, partnerships, and market execution.",
  "I bring a structured and execution-oriented approach to change management and am at my best in dynamic environments where success depends on clear priorities, disciplined follow-through, and close collaboration across functions. I communicate effectively at all levels and foster engagement through involvement and clarity.",
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
      location: "Skellefteå (distance)",
      start: "Oct 2025",
      end: "Dec 2025",
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
        start: "Nov 2024",
        end: "Jul 2025",
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
        start: "May 2024",
        end: "Nov 2024",
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
        start: "Oct 2023",
        end: "May 2024",
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
        start: "Mar 2019",
        end: "May 2023",
        responsibilities: ["Revenue Growth", "Pricing Strategy", "Contract Development"],
        description:
          "Increased ARPU by 19% via pricing strategy and product diversification. Developed and negotiated a business agreement proposed by service providers as industry standard.",
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
        description:
          "Ensured GDPR compliance across all personal data within the business area, and served as primary internal contact for GDPR matters.",
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
      start: "Mar 2015",
      end: "Jun 2016",
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
    title: "Business Administration, Master’s level",
    institution: "Stockholm University, Stockholm",
    period: "2000–2007",
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