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
"With a background in senior commercial roles within telecom and IT/IoT, I have driven profitable growth by building scalable structures and leading cross-functional execution. My focus has always been on translating strategic priorities into measurable business outcomes, ensuring strong alignment across key stakeholders, sales, and market initiatives.",
"I bring a structured, commercially driven approach to change and execution, and I am at my best in dynamic environments where growth depends on clear priorities, disciplined follow-through, and strong alignment across functions. I communicate effectively at all levels and create engagement through clarity and involvement.",
    ],
    downloads: [
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
    ],
  },
  skills: {
heading: "Skills",
groups: [
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
      "Sales Leadership",
      "Commercial Strategy",
      "Revenue Growth",
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
      "Corporate Communication",
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
      "AI Optimization",
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
} as const satisfies SiteContent;
