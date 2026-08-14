// lib/content/sv.ts

import type { SiteContent } from "@/lib/content/profile";

export const swedishContent = {
  header: {
    name: "Magnus Eriksson",
    desktopSubtitle:
      "Handlingskraftig\u00a0\u00a0|\u00a0\u00a0Pragmatisk\u00a0\u00a0|\u00a0\u00a0Strukturerad\u00a0\u00a0|\u00a0\u00a0Kommunikativ\u00a0\u00a0|\u00a0\u00a0Förändringsdriven",
    mobileSubtitle:
      "Handlingskraftig • Pragmatisk • Strukturerad • Kommunikativ • Förändringsdriven",
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
      "Med bakgrund i seniora kommersiella roller inom telekom och IT/IoT har jag drivit tillväxt genom att utveckla skalbara strukturer, bygga starka kund- och partnerrelationer och leda tvärfunktionella initiativ. Mitt fokus har alltid legat på att omsätta strategiska prioriteringar i konkreta och mätbara affärsresultat samt säkerställa samsyn mellan olika funktioner och nyckelintressenter.",
      "Jag anpassar mig snabbt till nya sammanhang, omsätter analys i handling och behåller lugnet i krävande situationer. Jag skapar engagemang genom tydlighet och delaktighet, kommunicerar effektivt på alla nivåer och trivs bäst i dynamiska miljöer där framsteg bygger på tydliga prioriteringar, disciplinerat genomförande, förtroende och nära samarbete.",
    ],
    downloads: [
      {
        label: "CV",
        href: "/downloads/magnus-eriksson-CV.pdf",
        ariaLabel: "Ladda ner CV",
      },
      {
        label: "Personlighetsrapport",
        href: "/downloads/magnus-eriksson-personality-report.pdf",
        ariaLabel: "Ladda ner personlighetsrapport",
      },
      {
        label: "Logiktestrapport",
        href: "/downloads/magnus-eriksson-logical-reasoning-report.pdf",
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
          startDate: "2025-10",
          endDate: "2025-12",
          responsibilities: [
            "Avtalsutveckling",
            "Framtagning av juridiska dokument",
            "Samordning av intressenter",
          ],
          achievementLabel: "Prestationer:",
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
            startDate: "2024-11",
            endDate: "2025-07",
            responsibilities: [
              "Intäktsbudget",
              "Kommersiell verksamhetsplanering",
              "Investor Relations",
            ],
            achievementLabel: "Prestationer:",
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
            startDate: "2024-05",
            endDate: "2024-11",
            responsibilities: [
              "Bolagsstrategi",
              "Bolagsjuridiska och regulatoriska frågor",
              "Investor Relations",
            ],
            achievementLabel: "Prestationer:",
            description:
              "Strukturerade regulatorisk kommunikation och bolagsstyrningsfrågor samt säkerställde samordning av juridisk dokumentation i kapitaliseringsinitiativ.",
          },
          {
            role: "Chief Marketing Officer (CMO)",
            company: "TH1NG AB (publ)",
            location: "Stockholm",
            start: "Okt 2023",
            end: "Maj 2024",
            startDate: "2023-10",
            endDate: "2024-05",
            responsibilities: [
              "Varumärkespositionering",
              "Marknadsprestation",
              "Bolagsjuridiska frågor",
            ],
            achievementLabel: "Prestationer:",
            description:
              "Etablerade enhetlig marknadskommunikation, stärkte varumärkesstyrningen, följde upp prestationsmått och utvecklade ny visuell identitet och logotyp.",
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
            startDate: "2019-03",
            endDate: "2023-05",
            responsibilities: ["Lönsamhetsutveckling", "Prisstrategi", "Avtalsutveckling"],
            achievementLabel: "Prestationer:",
            description:
              "Ökade ARPU med 19 % genom prisstrategi och produktdiversifiering. Skapade och förhandlade det affärsavtal som tjänsteleverantörerna föreslog som branschstandard.",
            showTimelineMarker: true,
          },
          {
            role: "Data Protection Manager (DPM)",
            company: "IP-Only Networks AB",
            location: "Stockholm",
            start: "Maj 2018",
            end: "Maj 2023",
            startDate: "2018-05",
            endDate: "2023-05",
            responsibilities: [
              "Dataskyddsstyrning",
              "GDPR-efterlevnad",
              "Intern rådgivning",
            ],
            achievementLabel: "Prestationer:",
            description:
              "Säkerställde GDPR-efterlevnad i hanteringen av personuppgifter inom affärsområdet och utgjorde primär kontaktyta för dataskyddsfrågor och ärenden internt.",
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
              "Nyckelkunder",
              "Avtalsutveckling och -förvaltning",
              "Affärsutveckling",
            ],
            achievementLabel: "Prestationer:",
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
          startDate: "2015-03",
          endDate: "2016-06",
          responsibilities: [
            "Projektledning",
            "Strategisk rådgivning",
            "Finansiell analys och investeringsunderlag",
          ],
          achievementLabel: "Prestationer:",
          description:
            "Utformade affärsstrategier, utvecklade finansiella modeller och investeringsunderlag samt tog fram och förhandlade kommersiella avtal.",
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
              "Produktledning",
              "P&L-analys",
              "Intressenthantering",
            ],
            achievementLabel: "Prestationer:",
            description:
              "Utvecklade, förhandlade och implementerade ett nytt tjänsteleverantörsavtal samtidigt som jag drev lönsamhetsutveckling för B2C- och B2B-tjänster.",
            showTimelineMarker: true,
          },
          {
            role: "Business Developer",
            company: "iTUX Communication AB",
            location: "Stockholm",
            start: "Maj 2012",
            end: "Mar 2014",
            startDate: "2012-05",
            endDate: "2014-03",
            responsibilities: [
              "Affärsutveckling",
              "Produktutveckling",
              "Intressenthantering",
            ],
            achievementLabel: "Prestationer:",
            description:
              "Vidareutvecklade B2B-portföljen för att bättre möta tjänsteleverantörernas behov och marknadens efterfrågan samt öka intäkterna och förbättra täckningsbidraget.",
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
              "Företagsledning",
              "Operativ ledning",
              "Organisationsutveckling",
            ],
            achievementLabel: "Prestationer:",
            description:
              "Effektiviserade leveransfunktionen, tydliggjorde roller och ansvar samt etablerade en tydligare struktur för internkommunikation.",
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
              "Marknadsstrategi",
              "Lönsamhetsutveckling",
              "Personalansvar",
            ],
            achievementLabel: "Prestationer:",
            description:
              "Utformade och implementerade ett strategiskt ramverk med fokus på varumärkeskännedom, organisk tillväxt och lönsamhet, vilket ökade den månatliga nettokundtillväxten med cirka 58 %.",
            showTimelineMarker: true,
          },
        ],
      },
    ],
  },
  skills: {
heading: "Kompetenser",
groups: [
  {
    title: "Organisation och ledarskap",
    skills: [
      "Projektledning",
      "Förändringsledning",
      "Verksamhetsutveckling",
      "Intressenthantering",
      "Tvärfunktionellt ansvar",
    ],
  },
  {
    title: "Affärsutveckling och försäljning",
    skills: [
      "Försäljningsledning",
      "Kommersiell strategi",
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
        startDate: "2000",
        endDate: "2007",
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
        startDate: "2024",
        endDate: "2024",
      },
      {
        title: "Värnpliktig fallskärmsjägare",
        institution: "Fallskärmsjägarskolan, Karlsborg",
        period: "1997–1998",
        startDate: "1997",
        endDate: "1998",
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
  chat: {
    triggerLabel: "Ställ en fråga",
    heading: "Vad vill du veta?",
    intro: "Fråga om erfarenhet, kompetenser, utbildning eller annan relaterad information.",
    placeholder: "Ställ en fråga...",
    sendLabel: "Skicka",
    clearInputAriaLabel: "Rensa fråga",
    closeButtonAriaLabel: "Stäng chatten",
    dialogAriaLabel: "Chat",
    noAnswer: "Jag har ingen information om det.",
  },
} as const satisfies SiteContent;
