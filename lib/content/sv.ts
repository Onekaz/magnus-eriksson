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
      { targetId: "achievements", label: "Prestationer" },
      { targetId: "resume", label: "CV" },
      { targetId: "skills", label: "Kompetenser" },
      { targetId: "education", label: "Utbildning" },
      { targetId: "contact", label: "Kontakt" },
    ],
    mobileItems: [
      { targetId: "about", label: "Om mig", icon: "profile" },
      { targetId: "achievements", label: "Prestationer", icon: "achievements" },
      { targetId: "resume", label: "CV", icon: "list" },
      { targetId: "skills", label: "Kompetenser", icon: "lightbulb" },
      { targetId: "education", label: "Utbildning", icon: "graduation" },
    ],
  },
  about: {
    heading: "Om mig",
    imageAlt: "Magnus Eriksson",
    paragraphs: [
    "Jag uppskattar struktur, men behöver inte förutsägbarhet. Jag tycker om ansvar, men ogillar onödig hierarki. Jag är helt bekväm med att fatta beslut, ändra riktning när förutsättningarna förändras och möta krävande situationer utan att göra dem mer dramatiska än nödvändigt.",
    "Med bakgrund i affärsutveckling, kommersiell ledning, marknadsföring och strategi har jag utvecklat affärer och partnerskap, stärkt marknadspositionen och drivit tvärfunktionella initiativ för att skapa samsyn och effektivisera arbetet. Jag är van vid uppdrag där ramarna inte är helt givna från början och identifierar snabbt det väsentliga, prioriterar och levererar.",
    "Min syn på ett välfungerande ledarskap präglas av tydlighet, rättvisa, lyhördhet och delaktighet. Jag tror på rak kommunikation, ärlighet och frihet under ansvar, där tydliga mål och förväntningar kombineras med förtroende för medarbetares förmåga att själva ta ansvar och fatta beslut.",
    ],
  },
  achievements: {
    heading: "Prestationer",
    items: [
      {
        headline: "~19 %",
        title: "Ökad ARPU",
        description: "Utvecklade en pris- och produktstrategi, bland annat utifrån datadrivna insikter, vilket ökade ARPU med ~19 % över tid.",
        company: "GlobalConnect",
        metric: true,
      },
      {
        headline: "~58 %",
        title: "Ökad nettokundtillväxt",
        description: "Tog fram och implementerade en marknadsföringsstrategi som bidrog till att öka den månatliga nettokundtillväxten med ~58 %.",
        company: "Bahnhof Unipessoal",
        metric: true,
      },
      {
        headline: "Föreslagen branschstandard",
        title: "Tjänsteleverantörsavtal",
        description: "Utformade ett affärsavtal som tjänsteleverantörerna föreslog som branschstandard för branschorganisationen.",
        company: "GlobalConnect",
      },
      {
        headline: "Avtalsskapande",
        title: "SaaS-ramavtal",
        description: "Skapade ett komplett SaaS-ramavtal för en IoT-plattform, inklusive avtalsstruktur, kommersiella och juridiska villkor.",
        company: "IoT Open",
      },
    ],
  },
  resume: {
    heading: "CV",
    download: {
      href: "/downloads/magnus-eriksson-CV.pdf",
      ariaLabel: "Ladda ner CV",
    },
    blocks: [
      {
        type: "entry",
        entry: {
          role: "Avtalsspecialist (konsult)",
          company: "IoT Open AB",
          location: "Skellefteå (distans)",
          start: "202510",
          end: "202512",
          startDate: "2025-10",
          endDate: "2025-12",
          responsibilities: [
            "Avtalsutveckling",
            "Framtagning av juridiska dokument",
            "Samordning av intressenter",
          ],
          achievementLabel: "Prestationer:",
          description:
            "Skapade ett komplett SaaS-ramavtal med bilagor och utformade kommersiella och juridiska avtalsvillkor.",
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
              "Intäktsbudget",
              "Kommersiell planering",
              "Personalansvar",
            ],
            achievementLabel: "Prestationer:",
            description:
              "Ledde förändringen av säljorganisationen och tog fram en handlingsplan med målmarknader, försäljningsprioriteringar och uppföljning av nyckeltal.",
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
              "Bolagsstrategi",
              "Bolagsjuridiska och regulatoriska frågor",
              "Investor Relations",
            ],
            achievementLabel: "Prestationer:",
            description:
              "Ansvarade för och strukturerade regulatorisk kommunikation, var delaktig i arbetet med bolagsstrategi samt tog fram och administrerade avtal för kapitaliseringsuppdrag.",
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
              "Marknadsstrategi",
              "Varumärkespositionering",
              "Resultatuppföljning",
            ],
            achievementLabel: "Prestationer:",
            description:
              "Etablerade en enhetlig marknadskommunikation, stärkte varumärkesstyrningen, följde upp resultat och utvecklade en ny visuell identitet och logotyp.",
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
            responsibilities: ["Lönsamhetsutveckling", "Prisstrategi", "Avtalsutveckling"],
            achievementLabel: "Prestationer:",
            description:
              "Ökade ARPU med ~19 % genom prisstrategi och produktdiversifiering. Utformade och förhandlade ett affärsavtal som tjänsteleverantörerna föreslog som branschstandard.",
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
              "Dataskyddsstyrning",
              "GDPR-efterlevnad",
              "Intern rådgivning",
            ],
            achievementLabel: "Prestationer:",
            description:
              "Tog fram och införde rutiner för behandling av personuppgifter enligt GDPR och var huvudsaklig intern kontaktperson för dataskyddsfrågor.",
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
              "Nyckelkunder",
              "Avtalsutveckling och -förvaltning",
              "Affärsutveckling",
            ],
            achievementLabel: "Prestationer:",
            description:
              "Stärkte relationen med tjänsteleverantörerna, vilket ökade deras aktivitet. Initierade och ledde ett tvärfunktionellt team för intern samsyn och samordning.",
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
          start: "201503",
          end: "201606",
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
            start: "201403",
            end: "201411",
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
            start: "201205",
            end: "201403",
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
            start: "201201",
            end: "201203",
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
            start: "201102",
            end: "201204",
            startDate: "2011-02",
            endDate: "2012-04",
            responsibilities: [
              "Marknadsstrategi",
              "Lönsamhetsutveckling",
              "Personalansvar",
            ],
            achievementLabel: "Prestationer:",
            description:
              "Utvecklade och implementerade ett strategiskt ramverk med fokus på varumärkeskännedom, organisk tillväxt och lönsamhet, vilket ökade den månatliga nettokundtillväxten med cirka 58 %.",
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
        institution: "Stockholms universitet, Stockholm",
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
    suggestedQuestions: [
      "Vilka roller är Magnus intresserad av?",
      "Vilka är Magnus främsta styrkor?",
    ],
    rotatingSuggestedQuestions: [
      "Hur hanterar Magnus olika uppfattningar om vägen framåt?",
      "Hur hanterar Magnus motgångar?",
      "Hur tar Magnus sig an nya och otydliga uppgifter?",
      "Vad motiverar Magnus i arbetet?",
    ],
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
