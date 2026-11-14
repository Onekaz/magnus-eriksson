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
      { targetId: "achievements", label: "Achievements" },
      { targetId: "resume", label: "Resume" },
      { targetId: "skills", label: "Skills" },
      { targetId: "education", label: "Education" },
      { targetId: "contact", label: "Contact" },
    ],
    mobileItems: [
      { targetId: "about", label: "About", icon: "profile" },
      { targetId: "achievements", label: "Achievements", icon: "achievements" },
      { targetId: "resume", label: "Resume", icon: "list" },
      { targetId: "skills", label: "Skills", icon: "lightbulb" },
      { targetId: "education", label: "Education", icon: "graduation" },
    ],
  },
  about: {
    heading: "About",
    imageAlt: "Magnus Eriksson",
    paragraphs: [
    "I like structure, but I do not need predictability. I like responsibility, but not unnecessary hierarchy. I am comfortable making decisions, changing course when circumstances change and dealing with demanding situations without making them more dramatic than necessary.",
    "With a background in business development, commercial leadership, marketing and strategy, I have developed business opportunities and partnerships, strengthened market positioning and led cross-functional initiatives to build alignment and efficiency. I have often worked on assignments with an undefined initial scope, quickly identifying what matters, setting priorities and delivering results.",
    "My view of leadership emphasizes clarity, fairness, responsiveness and involvement. I believe in direct communication, honesty and autonomy with accountability, combining clear goals and expectations with trust in people's ability to take ownership and make decisions.",
    ],
  },
  achievements: {
    heading: "Achievements",
    items: [
      {
        headline: "~19%",
        title: "ARPU Growth",
        description: "Developed a pricing and product strategy, drawing in part on data-driven insights, which increased ARPU by ~19% over time.",
        company: "GlobalConnect",
        metric: true,
      },
      {
        headline: "~58%",
        title: "Net Customer Growth",
        description: "Designed and implemented a marketing strategy that contributed to an ~58% increase in monthly net customer growth.",
        company: "Bahnhof Unipessoal",
        metric: true,
      },
      {
        headline: "Proposed Industry Standard",
        title: "Service Provider Agreement",
        description: "Redesigned a commercial agreement that service providers proposed to the industry association as an industry standard.",
        company: "GlobalConnect",
      },
      {
        headline: "Contract Creation",
        title: "SaaS Framework Agreement",
        description: "Created a comprehensive SaaS framework agreement for an IoT platform, including its structure and commercial and legal terms.",
        company: "IoT Open",
      },
    ],
  },
  resume: {
    heading: "Resume",
    download: {
      href: "/downloads/magnus-eriksson-resume.pdf",
      ariaLabel: "Download resume",
    },
    blocks: [
      {
        type: "entry",
        entry: {
          role: "Contract Specialist (Consultant)",
          company: "IoT Open AB",
          location: "Skellefteå (Remote)",
          start: "202510",
          end: "202512",
          startDate: "2025-10",
          endDate: "2025-12",
          responsibilities: [
            "Contract Development",
            "Legal Document Preparation",
            "Stakeholder Alignment",
          ],
          achievementLabel: "Achievements:",
          description:
            "Created a comprehensive SaaS framework agreement with annexes and drafted commercial terms and legal provisions.",
        },
      },
      {
        type: "timelineGroup",
        entries: [
          {
            role: "Chief Commercial Officer (CCO)",
            company: "TH1NG AB (publ)",
            location: "Stockholm",
            start: "202411",
            end: "202507",
            startDate: "2024-11",
            endDate: "2025-07",
            responsibilities: [
              "Revenue Budgeting",
              "Commercial Planning",
              "People Management",
            ],
            achievementLabel: "Achievements:",
            description:
              "Transformed the sales organization and developed an action plan covering target markets, sales priorities, KPI follow-up and CRM structure.",
            showTimelineMarker: true,
          },
          {
            role: "Chief Strategy Officer (CSO)",
            company: "TH1NG AB (publ)",
            location: "Stockholm",
            start: "202405",
            end: "202411",
            startDate: "2024-05",
            endDate: "2024-11",
            responsibilities: [
              "Corporate Strategy",
              "Governance and Regulation",
              "Investor Relations",
            ],
            achievementLabel: "Achievements:",
            description:
              "Managed and structured regulatory communications, contributed to corporate strategy, and drafted and administered engagement agreements for capital-raising assignments.",
          },
          {
            role: "Chief Marketing Officer (CMO)",
            company: "TH1NG AB (publ)",
            location: "Stockholm",
            start: "202310",
            end: "202405",
            startDate: "2023-10",
            endDate: "2024-05",
            responsibilities: [
              "Marketing Strategy",
              "Brand and Market Positioning",
              "Marketing Performance",
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
            start: "201903",
            end: "202305",
            startDate: "2019-03",
            endDate: "2023-05",
            responsibilities: ["Revenue Growth", "Pricing Strategy", "Contract Development"],
            achievementLabel: "Achievements:",
            description:
              "Raised ARPU by ~19% via pricing strategy and product diversification. Redesigned and negotiated an agreement proposed by service providers as an industry standard.",
            showTimelineMarker: true,
          },
          {
            role: "Data Protection Manager (DPM)",
            company: "IP-Only Networks AB",
            location: "Stockholm",
            start: "201805",
            end: "202305",
            startDate: "2018-05",
            endDate: "2023-05",
            responsibilities: [
              "Data Protection Governance",
              "GDPR Compliance",
              "Internal Advisory",
            ],
            achievementLabel: "Achievements:",
            description:
              "Developed and implemented GDPR-compliant personal data processing practices and served as the primary internal contact for data protection matters.",
          },
          {
            role: "Key Account Manager/Business Developer",
            company: "IP-Only Networks AB",
            location: "Stockholm",
            start: "201606",
            end: "201903",
            startDate: "2016-06",
            endDate: "2019-03",
            responsibilities: [
              "Key Accounts",
              "Contract Management",
              "Business and Product Development",
            ],
            achievementLabel: "Achievements:",
            description:
              "Strengthened service provider partnerships, increased their platform activity, and drove internal alignment through a team I initiated and led.",
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
          start: "201503",
          end: "201606",
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
            start: "201403",
            end: "201411",
            startDate: "2014-03",
            endDate: "2014-11",
            responsibilities: [
              "Product Management",
              "P&L Analysis",
              "Stakeholder Management",
            ],
            achievementLabel: "Achievements:",
            description:
              "Developed, negotiated and implemented a new business agreement for service providers while driving profitability across B2C and B2B services.",
            showTimelineMarker: true,
          },
          {
            role: "Business Developer",
            company: "iTUX Communication AB",
            location: "Stockholm",
            start: "201205",
            end: "201403",
            startDate: "2012-05",
            endDate: "2014-03",
            responsibilities: [
              "Business Development",
              "Product Development",
              "Stakeholder Management",
            ],
            achievementLabel: "Achievements:",
            description:
              "Developed the B2B portfolio to better meet service provider needs and market demand, as well as increase revenue and improve contribution margin.",
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
            start: "201201",
            end: "201203",
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
            start: "201102",
            end: "201204",
            startDate: "2011-02",
            endDate: "2012-04",
            responsibilities: [
              "Marketing Strategy",
              "Profitability Improvement",
              "People Management",
            ],
            achievementLabel: "Achievements:",
            description:
              "Increased ARPU by revising the pricing strategy and developed marketing to strengthen brand awareness, contributing to ~58% higher monthly organic net customer growth.",
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
    suggestedQuestions: [
      "What roles is Magnus interested in?",
      "What are Magnus's key strengths?",
    ],
    rotatingSuggestedQuestions: [
      "How does Magnus handle different views on the way forward?",
      "How does Magnus handle setbacks?",
      "How does Magnus approach new and ambiguous tasks?",
      "What motivates Magnus at work?",
    ],
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
