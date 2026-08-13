// lib/content/en.ts

import type { SiteContent } from "@/lib/content/profile";

export const englishContent = {
  header: {
    name: "Magnus Eriksson",
    desktopSubtitle:
      "Action-oriented\u00a0\u00a0|\u00a0\u00a0Pragmatic\u00a0\u00a0|\u00a0\u00a0Structured\u00a0\u00a0|\u00a0\u00a0Communicative\u00a0\u00a0|\u00a0\u00a0Change-oriented",
    mobileSubtitle:
      "Action-oriented • Pragmatic • Structured • Communicative • Change-oriented",
    languageLabel: "English",
    languageButtonAriaLabel: "Switch to Swedish",
    englishLanguageLabel: "English",
    swedishLanguageLabel: "Svenska",
  },
  navigation: {
    desktopAriaLabel: "Primary navigation",
    mobileAriaLabel: "Mobile navigation",
    desktopItems: [
      { targetId: "about", label: "About" },
      { targetId: "resume", label: "Resume" },
      { targetId: "skills", label: "Skills" },
      { targetId: "education", label: "Education" },
      { targetId: "contact", label: "Contact" },
    ],
    mobileItems: [
      { targetId: "about", label: "About", icon: "profile" },
      { targetId: "resume", label: "Resume", icon: "list" },
      { targetId: "skills", label: "Skills", icon: "lightbulb" },
      { targetId: "education", label: "Education", icon: "graduation" },
      { action: "contactSheet", label: "Contact", icon: "envelope" },
    ],
  },
  about: {
    heading: "About",
    imageAlt: "Magnus Eriksson",
    paragraphs: [
    "With a background in senior commercial roles within telecom and IT/IoT, I have driven profitable growth through scalable commercial structures, strong customer and partner relationships, and cross-functional execution. My focus has always been on translating strategic priorities into measurable business outcomes, ensuring strong alignment across functions and key stakeholders.",
    "I bring a structured, commercially driven approach to change and execution, and create engagement through clarity and involvement. I communicate effectively at all levels and am at my best in dynamic environments where progress depends on clear priorities, disciplined follow-through, trust and close collaboration.",

    ],
    downloads: [
      {
        label: "Resume",
        href: "/downloads/magnus-eriksson-resume.pdf",
        ariaLabel: "Download resume",
      },
      {
        label: "Personality report",
        href: "/downloads/magnus-eriksson-personality-report.pdf",
        ariaLabel: "Download personality report",
      },
      {
        label: "Logical reasoning report",
        href: "/downloads/magnus-eriksson-logical-reasoning-report.pdf",
        ariaLabel: "Download logical reasoning report",
      },
    ],
  },
  resume: {
    heading: "Resume",
    blocks: [
      {
        type: "entry",
        entry: {
          role: "Contract Specialist (Consultant)",
          company: "IoT Open AB",
          location: "Skellefteå (Remote)",
          start: "Oct 2025",
          end: "Dec 2025",
          startDate: "2025-10",
          endDate: "2025-12",
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
            startDate: "2024-11",
            endDate: "2025-07",
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
            startDate: "2024-05",
            endDate: "2024-11",
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
            startDate: "2023-10",
            endDate: "2024-05",
            responsibilities: [
              "Brand and Market Positioning",
              "Marketing Performance",
              "Corporate Legal Matters",
            ],
            achievementLabel: "Achievements:",
            description:
              "Established cohesive marketing communications, strengthened brand management, monitored performance metrics, and developed a new visual identity and logo.",
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
            startDate: "2019-03",
            endDate: "2023-05",
            responsibilities: ["Revenue Growth", "Pricing Strategy", "Contract Development"],
            achievementLabel: "Achievements:",
            description:
              "Increased ARPU by 19% via pricing strategy and product diversification. Developed and negotiated a business agreement later proposed by Service Providers as an industry standard.",
            showTimelineMarker: true,
          },
          {
            role: "Data Protection Manager (DPM)",
            company: "IP-Only Networks AB",
            location: "Stockholm",
            start: "May 2018",
            end: "May 2023",
            startDate: "2018-05",
            endDate: "2023-05",
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
            startDate: "2016-06",
            endDate: "2019-03",
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
          startDate: "2015-03",
          endDate: "2016-06",
          responsibilities: [
            "Project Management",
            "Strategic Advisory",
            "Financial and Business Modelling",
          ],
          achievementLabel: "Achievements:",
          description:
            "Shaped business strategies, developed financial models and investment cases, and drafted and negotiated commercial agreements.",
        },
      },
      {
        type: "timelineGroup",
        entries: [
          {
            role: "Product Manager",
            company: "iTUX Communication AB",
            location: "Stockholm",
            start: "Mar 2014",
            end: "Nov 2014",
            startDate: "2014-03",
            endDate: "2014-11",
            responsibilities: [
              "Product Management",
              "P&L Analysis",
              "Stakeholder Management",
            ],
            achievementLabel: "Achievements:",
            description:
              "Developed, negotiated and implemented a new business agreement for Service Providers while driving profitability across B2C and B2B services.",
            showTimelineMarker: true,
          },
          {
            role: "Business Developer",
            company: "iTUX Communication AB",
            location: "Stockholm",
            start: "May 2012",
            end: "Mar 2014",
            startDate: "2012-05",
            endDate: "2014-03",
            responsibilities: [
              "Business Development",
              "Product Development",
              "Stakeholder Management",
            ],
            achievementLabel: "Achievements:",
            description:
              "Developed the B2B portfolio to better meet Service Provider needs and market demand, as well as increase revenue and improve contribution margin.",
            showTimelineMarker: true,
          },
        ],
      },
      {
        type: "timelineGroup",
        entries: [
          {
            role: "Acting CEO",
            company: "Bahnhof, Unipessoal Lda.",
            location: "Funchal, Portugal",
            start: "Jan 2012",
            end: "Mar 2012",
            startDate: "2012-01",
            endDate: "2012-03",
            responsibilities: [
              "General Management",
              "Operations Management",
              "Organizational Development",
            ],
            achievementLabel: "Achievements:",
            description:
              "Streamlined delivery operations, clarified roles and responsibilities, and established a clearer structure for internal communication.",
            showTimelineMarker: true,
          },
          {
            role: "Marketing Manager",
            company: "Bahnhof, Unipessoal Lda.",
            location: "Funchal, Portugal",
            start: "Feb 2011",
            end: "Apr 2012",
            startDate: "2011-02",
            endDate: "2012-04",
            responsibilities: [
              "Marketing Strategy",
              "Profitability Improvement",
              "People Management",
            ],
            achievementLabel: "Achievements:",
            description:
              "Designed and implemented a strategic framework focused on brand awareness, organic growth, and profitability, driving a ~58% increase in monthly net customer growth.",
            showTimelineMarker: true,
          },
        ],
      },
    ],
  },
  skills: {
heading: "Skills",
groups: [
  {
    title: "Organization and Leadership",
    skills: [
      "Project Management",
      "Change Management",
      "Business Improvement",
      "Stakeholder Management",
      "Cross-Functional Leadership",
    ],
  },
  {
    title: "Business Development and Sales",
    skills: [
      "Sales Leadership",
      "Commercial Strategy",
      "Business Development",
      "Data-driven Analysis",
      "Pricing and Profitability",
      "Commercial Agreements",
    ],
  },
  {
    title: "Marketing and Communication",
    skills: [
      "Marketing Strategy",
      "Brand Positioning",
      "Corporate Communications",
      "Go-To-Market Execution",
      "Pipeline Generation",
    ],
  },
  {
    title: "Web, Content and AI Support",
    skills: [
      "Web Structure",
      "Content Strategy",
      "Messaging and Copywriting",
      "Visual Presentation",
      "AI-assisted Prototyping",
    ],
  },
],
  },
  education: {
    heading: "Education",
    entries: [
      {
        title: "Business Administration, Master’s level",
        institution: "Stockholm University, Stockholm",
        period: "2000–2007",
        startDate: "2000",
        endDate: "2007",
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
        startDate: "2024",
        endDate: "2024",
      },
      {
        title: "Conscript Parachute Ranger",
        institution: "Swedish Parachute Ranger School, Karlsborg",
        period: "1997–1998",
        startDate: "1997",
        endDate: "1998",
      },
    ],
  },
  contact: {
    heading: "Contact",
    emailDisplay: "eriksson.magnus@outlook.com",
    phoneDisplay: "070 873 33 20",
    linkedInDisplay: "LinkedIn",
  },
  contactSheet: {
    closeLabel: "Close",
    closeButtonAriaLabel: "Close contact sheet",
    dialogAriaLabel: "Contact details",
  },
  chat: {
    triggerLabel: "Ask a question",
    heading: "What do you want to know?",
    intro: "Ask about experience, skills, education or other related information.",
    placeholder: "Ask a question...",
    sendLabel: "Send",
    clearInputAriaLabel: "Clear question",
    closeButtonAriaLabel: "Close chat",
    dialogAriaLabel: "Chat",
    noAnswer: "I don’t have information about that.",
  },
} as const satisfies SiteContent;
