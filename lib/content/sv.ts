// lib/content/sv.ts

import type { SiteContent } from "@/lib/content/profile";

export const swedishContent = {
  header: {
    name: "Magnus Eriksson",
    desktopSubtitle:
      "Handlingskraftig\u00a0\u00a0|\u00a0\u00a0Pragmatisk\u00a0\u00a0|\u00a0\u00a0Strukturerad\u00a0\u00a0|\u00a0\u00a0Kommunikativ\u00a0\u00a0|\u00a0\u00a0Förändringsbenägen",
    mobileSubtitle:
      "Handlingskraftig • Pragmatisk • Strukturerad • Kommunikativ • Förändringsbenägen",
    languageLabel: "Svenska",
    languageButtonAriaLabel: "Byt till engelska",
    englishLanguageLabel: "English",
    swedishLanguageLabel: "Svenska",
  },
  navigation: {
    desktopAriaLabel: "Huvudnavigation",
    mobileAriaLabel: "Mobil navigation",
    desktopItems: [
      { targetId: "about", label: "Om mig" },
      { targetId: "resume", label: "CV" },
      { targetId: "skills", label: "Kompetenser" },
      { targetId: "education", label: "Utbildning" },
      { targetId: "contact", label: "Kontakt" },
    ],
    mobileItems: [
      { targetId: "about", label: "Om mig", icon: "profile" },
      { targetId: "resume", label: "CV", icon: "list" },
      { targetId: "skills", label: "Kompetenser", icon: "lightbulb" },
      { targetId: "education", label: "Utbildning", icon: "graduation" },
      { action: "contactSheet", label: "Kontakt", icon: "envelope" },
    ],
  },
  about: {
    heading: "Om mig",
    imageAlt: "Magnus Eriksson",
    paragraphs: [
      "Med bakgrund i seniora kommersiella roller inom telekom och IT/IoT har jag drivit lönsam tillväxt genom att bygga skalbara strukturer och driva tvärfunktionella initiativ från plan till genomförande. Mitt fokus har konsekvent varit att omsätta strategiska prioriteringar i konkreta och mätbara affärsresultat samt säkerställa samsyn mellan nyckelintressenter, försäljning och marknadsinitiativ.",
      "Som person är jag affärsorienterad, strukturerad och handlingskraftig. Jag trivs i dynamiska miljöer där tillväxt kräver tydliga prioriteringar, konsekvent genomförande och nära samarbete mellan olika funktioner. Jag kommunicerar effektivt på alla nivåer och skapar engagemang genom tydlighet och delaktighet.",
    ],
    downloads: [
      {
        label: "CV",
        href: "/downloads/magnus-eriksson-CV.pdf",
        ariaLabel: "Ladda ner CV",
      },
      {
        label: "Personlighetstest",
        href: "/downloads/magnus-eriksson-personality-test.pdf",
        ariaLabel: "Ladda ner personlighetstest",
      },
      {
        label: "Logiktestrapport",
        href: "/downloads/magnus-eriksson-logical-reasoning-test.pdf",
        ariaLabel: "Ladda ner logiktestrapport",
      },
    ],
  },
  resume: {
    heading: "CV",
    blocks: [
      {
        type: "entry",
        entry: {
          role: "Avtalsspecialist (konsult)",
          company: "IoT Open AB",
          location: "Skellefteå (distans)",
          start: "Okt 2025",
          end: "Dec 2025",
          responsibilities: [
            "Avtalsutveckling",
            "Framtagning av juridiska dokument",
            "Samordning av intressenter",
          ],
          achievementLabel: "Resultat:",
          description:
            "Strukturerade och skapade ett SaaS-avtal, med fokus på affärsmässig relevans och juridisk förankring.",
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
              "Intäktsbudget",
              "Kommersiell verksamhetsplanering",
              "Investor Relations",
            ],
            achievementLabel: "Resultat:",
            description:
              "Skapade en kommersiell handlingsplan utifrån målmarknader, försäljningsprioritering och uppföljning av nyckeltal – för en mer resultatorienterad säljorganisation.",
            showTimelineMarker: true,
          },
          {
            role: "Chief Strategy Officer (CSO)",
            company: "TH1NG AB (publ)",
            location: "Stockholm",
            start: "Maj 2024",
            end: "Nov 2024",
            responsibilities: [
              "Bolagsstrategi",
              "Bolagsjuridiska och regulatoriska frågor",
              "Investor Relations",
            ],
            achievementLabel: "Resultat:",
            description:
              "Strukturerade regulatorisk kommunikation och bolagsstyrningsfrågor samt säkerställde samordning av juridisk dokumentation i kapitaliseringsinitiativ.",
          },
          {
            role: "Chief Marketing Officer (CMO)",
            company: "TH1NG AB (publ)",
            location: "Stockholm",
            start: "Okt 2023",
            end: "Maj 2024",
            responsibilities: [
              "Varumärkespositionering",
              "Marknadsprestation",
              "Bolagsjuridiska frågor",
            ],
            achievementLabel: "Resultat:",
            description:
              "Etablerade konsekvent marknadskommunikation, stärkte varumärkesstyrningen, följde upp prestationsmått och utvecklade ny visuell identitet och logotyp.",
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
            end: "Maj 2023",
            responsibilities: ["Lönsamhetsutveckling", "Prisstrategi", "Avtalsutveckling"],
            achievementLabel: "Resultat:",
            description:
              "Ökade ARPU med 19 % genom prisstrategi och produktdiversifiering. Skapade och förhandlade det affärsavtal som tjänsteleverantörerna föreslogs som branschstandard.",
            showTimelineMarker: true,
          },
          {
            role: "Data Protection Manager (DPM)",
            company: "IP-Only Networks AB",
            location: "Stockholm",
            start: "Maj 2018",
            end: "Maj 2023",
            responsibilities: [
              "Dataskyddsstyrning",
              "GDPR-efterlevnad",
              "Intern rådgivning",
            ],
            achievementLabel: "Resultat:",
            description:
              "Säkerställde GDPR-efterlevnad i hanteringen av personuppgifter inom affärsområdet och utgjorde primär kontaktyta för dataskyddsfrågor och ärenden internt.",
          },
          {
            role: "KAM, Business Developer",
            company: "IP-Only Networks AB",
            location: "Stockholm",
            start: "Jun 2016",
            end: "Mar 2019",
            responsibilities: [
              "Nyckelkunder",
              "Avtalsutveckling och -förvaltning",
              "Affärsutveckling",
            ],
            achievementLabel: "Resultat:",
            description:
              "Stärkte relationen med tjänsteleverantörerna, vilket ökade deras aktivitet. Initierade och ledde ett tvärfunktionellt team för säkerställande av samsyn och samordning.",
            showTimelineMarker: true,
          },
        ],
      },
      {
        type: "entry",
        entry: {
          role: "Affärs- och strategikonsult",
          company: "WSP Sverige AB",
          location: "Stockholm",
          start: "Mar 2015",
          end: "Jun 2016",
          responsibilities: [
            "Strategisk rådgivning",
            "Finansiell analys och investeringsunderlag",
            "Kommersiella avtal",
          ],
          achievementLabel: "Resultat:",
          description:
            "Utformade affärsstrategier, utvecklade finansiella modeller och investeringsunderlag samt tog fram och förhandlade kommersiella avtal.",
        },
      },
    ],
  },
  skills: {
heading: "Kompetenser",
groups: [
  {
    title: "Organisation och ledarskap",
    skills: [
      "Moderna managementkoncept",
      "Organisationsutveckling",
      "Förändringsledning",
      "Styrning och ansvar",
      "Intressenthantering",
      "Tvärfunktionell samordning",
    ],
  },
  {
    title: "Affärsutveckling och försäljning",
    skills: [
      "Försäljningsledning",
      "Kommersiell strategi",
      "Intäkts- och lönsamhetstillväxt",
      "Affärsutveckling",
      "Datadriven analys",
      "Prissättning och lönsamhet",
      "Kommersiella avtal",
    ],
  },
  {
    title: "Marknad och kommunikation",
    skills: [
      "Marknadsstrategi",
      "Varumärkespositionering",
      "Företagskommunikation",
      "Go-To-Market",
      "Pipelinegenerering",
    ],
  },
  {
    title: "Webb, innehåll och AI-stöd",
    skills: [
      "Webbstruktur",
      "Innehållsstrategi",
      "Budskap och copywriting",
      "Visuell presentation",
      "AI-optimering",
      "AI-assisterad prototypframtagning",
    ],
  },
],
  },
  education: {
    heading: "Utbildning",
    entries: [
      {
        title: "Företagsekonomi, magisternivå",
        institution: "Stockholms Universitet, Stockholm",
        period: "2000–2007",
        theses: [
          {
            label: "Kandidatuppsats:",
            title: "Trivsel på arbetsplatsen i förhållande till organisationens kommunikation",
          },
          {
            label: "Magisteruppsats:",
            title: "Balanced Scorecard i kommunal verksamhet i teori och praktik",
          },
        ],
      },
      {
        title: "Rules and Regulations på First North",
        institution: "Redeye AB, Stockholm",
        period: "2024",
      },
      {
        title: "Värnpliktig fallskärmsjägare",
        institution: "Fallskärmsjägarskolan, Karlsborg",
        period: "1997–1998",
      },
    ],
  },
  contact: {
    heading: "Kontakt",
    emailDisplay: "eriksson.magnus@outlook.com",
    phoneDisplay: "070 873 33 20",
    linkedInDisplay: "LinkedIn",
  },
  contactSheet: {
    closeLabel: "Stäng",
    closeButtonAriaLabel: "Stäng kontaktuppgifter",
    dialogAriaLabel: "Kontaktuppgifter",
  },
} as const satisfies SiteContent;
