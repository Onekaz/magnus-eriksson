// lib/chatbot/additionalKnowledge.ts

import type { SiteLanguage } from "@/lib/content/profile";
import type { ChatKnowledgeItem } from "@/lib/chatbot/types";

type KnowledgeEntry = {
  id: string;
  priority: number;
  translations: Record<SiteLanguage, { answer: string; terms: string[] }>;
};

const rawKnowledgeEntries: readonly KnowledgeEntry[] = [
  {
    id: "additional-next-role",
    priority: 12,
    translations: {
      en: {
        answer:
          "Magnus is primarily searching for roles in business development, commercial leadership, and project management. And he prefers situations where the business or operations have development potential.",
        terms: [
          "next role",
          "roles Magnus is looking for",
          "what roles is Magnus looking for",
          "what job is Magnus looking for",
          "what does Magnus want to work with",
          "what does Magnus want to work on",
          "what kind of role does Magnus want",
          "what does Magnus want to do next",
          "career interests",
          "job interests",
          "project management role",
          "business development role",
          "commercial leadership role",
          "commercial roles",
        ],
      },
      sv: {
        answer:
          "Magnus söker framför allt roller inom affärsutveckling, kommersiell ledning och projektledning. Och det han finner mest intressant är roller där affär och verksamhet har utvecklingspotential.",
        terms: [
          "nästa roll",
          "vilka roller söker Magnus",
          "vad söker Magnus för jobb",
          "vad vill Magnus arbeta med",
          "vad vill Magnus jobba med",
          "vilken typ av roll vill Magnus ha",
          "vad vill Magnus göra härnäst",
          "karriärintressen",
          "jobbsök",
          "projektledningsroll",
          "affärsutvecklingsroll",
          "kommersiell ledning",
          "kommersiella roller",
        ],
      },
    },
  },
  {
    id: "additional-leadership-style",
    priority: 11,
    translations: {
      en: {
        answer:
          "As a leader, Magnus is clear, empathetic, and fair. He focuses on understanding his surroundings and building trust, which he sees as the key to both strong engagement and confidence in what he communicates.",
        terms: [
          "leadership style",
          "how does Magnus lead",
          "leadership",
          "engagement",
          "build trust",
          "trust based leadership",
          "people leadership",
          "leadership philosophy",
          "how is Magnus as a manager",
          "managerial style",
          "how is Magnus as a leader",
          "how would Magnus describe his leadership",
          "build trust as a leader",
          "trust in leadership",
          "what is Magnus like as a leader",
        ],
      },
      sv: {
        answer:
          "Som ledare är Magnus tydlig, lyhörd och rättvis. Han utgår ifrån att förstå sin omgivning och bygga tillit, vilket han ser som nyckeln till både starkt engagemang och trygghet i det han förmedlar.",
        terms: [
          "ledarskapsstil",
          "hur leder Magnus",
          "ledarskap",
          "engagemang",
          "skapa förtroende",
          "personalledning",
          "ledarstil",
          "ledarskapsfilosofi",
          "hur är Magnus som chef",
          "chefstil",
          "hur är Magnus som ledare",
          "hur skulle Magnus beskriva sitt ledarskap",
          "bygga tillit som ledare",
          "tillit i ledarskap",
        ],
      },
    },
  },
  {
    id: "additional-formal-people-management",
    priority: 14,
    translations: {
      en: {
        answer:
          "Magnus has held formal people-management responsibility as Marketing Manager and acting CEO at Bahnhof Unipessoal Lda., based in Funchal, Portugal, and as Chief Commercial Officer at TH1NG AB.",
        terms: [
          "formal people management",
          "people management responsibility",
          "personnel responsibility",
          "staff responsibility",
          "line management",
          "direct reports",
          "managed employees",
          "Bahnhof Unipessoal",
          "acting CEO",
          "interim CEO",
          "has Magnus been a manager",
          "has Magnus had people management responsibility",
          "has Magnus managed people",
          "what management experience does Magnus have",
          "what management roles has Magnus had",
        ],
      },
      sv: {
        answer:
          "Magnus har haft formellt personalansvar som marknadschef och tillförordnad VD på Bahnhof Unipessoal Lda., i Funchal, Portugal, och som Chief Commercial Officer på TH1NG AB.",
        terms: [
          "formellt personalansvar",
          "personalansvar",
          "chefserfarenhet",
          "linjechef",
          "direktrapporterande",
          "lett personal",
          "Bahnhof Unipessoal",
          "tillförordnad vd",
          "tf vd",
          "vd-roll",
          "har Magnus varit chef",
          "har Magnus haft personalansvar",
          "vilka chefsroller har Magnus haft",
          "vilken chefserfarenhet har Magnus",
        ],
      },
    },
  },
  {
    id: "additional-resistance-and-difficult-decisions",
    priority: 10,
    translations: {
      en: {
        answer:
          "When Magnus meets resistance, he tries different angles and checks his reasoning with people who have stronger experience in the relevant area. Difficult decisions depend on the situation, but when a decision is required to deliver on an assignment, he tries to stay factual and focus on the task, the conditions, and what needs to be delivered rather than making the decision overly emotional.",
        terms: [
          "handle resistance",
          "dealing with resistance",
          "difficult decisions",
          "hard decisions",
          "decision making under pressure",
          "conflict",
        ],
      },
      sv: {
        answer:
          "När Magnus möter motstånd försöker han angripa frågan från olika håll och stämmer gärna av med personer som har större erfarenhet inom det aktuella området. Svåra beslut beror på situationen, men när ett beslut krävs för att leverera på ett uppdrag försöker han förhålla sig sakligt till uppgiften, förutsättningarna och det som behöver levereras snarare än att göra beslutet mer känslomässigt än nödvändigt.",
        terms: [
          "hantera motstånd",
          "motstånd",
          "svåra beslut",
          "jobbiga beslut",
          "beslutsfattande under press",
          "konflikt",
        ],
      },
    },
  },
  {
    id: "additional-project-management-approach",
    priority: 14,
    translations: {
      en: {
        answer:
          "When Magnus takes responsibility for a new project, he first gets a firm understanding of the assignment and its premises. He then builds the outline of a project and timeline plan and keeps iterating it to make delivery and timing as realistic as possible. He prefers to structure what can be structured in an overall plan, work from it continuously, and revise it when conditions change rather than create expectations that cannot be met.",
        terms: [
          "project management approach",
          "how does Magnus manage projects",
          "how does Magnus run projects",
          "new project",
          "project plan",
          "project planning",
          "timeline planning",
          "project structure",
          "project follow up",
          "how does Magnus work with project management",
        ],
      },
      sv: {
        answer:
          "När Magnus får ansvar för ett nytt projekt börjar han med att sätta sig in i uppgiften och de premisser som gäller. Därefter tar han fram ett övergripande skal till projekt- och tidsplan och itererar löpande för att göra leverans och tidsåtgång så realistiska som möjligt. Han försöker strukturera det som går att strukturera i en övergripande plan, arbeta utifrån den och revidera när förutsättningarna förändras, i stället för att skapa förväntningar som inte går att uppfylla.",
        terms: [
          "projektledning",
          "hur arbetar Magnus med projektledning",
          "hur driver Magnus projekt",
          "nytt projekt",
          "projektplan",
          "projektplanering",
          "tidsplan",
          "projektstruktur",
          "projektuppföljning",
        ],
      },
    },
  },
  {
    id: "additional-strategy-execution-strength",
    priority: 11,
    translations: {
      en: {
        answer:
          "Magnus's main strength lies in the complete cycle: rapidly grasping a task, analyzing conditions, and creating forward momentum. Within this process, analytical structure and systematic planning come naturally to him, while initiative and proactive execution are his defining qualities.",
        terms: [
          "strategy execution",
          "analysis or execution",
          "analysis strength",
          "structuring",
          "execution strength",
          "getting started",
          "initiative",
          "strategic execution",
          "analytical or execution oriented",
          "is Magnus more analytical or execution oriented",
          "analysis to execution",
        ],
      },
      sv: {
        answer:
          "Magnus främsta styrka ligger i helheten – att snabbt ta tag i en ny uppgift, analysera förutsättningarna och skapa framåtdriv. Inom det arbetet faller analys och strukturering sig naturligt, men det är initiativförmåga och uthålligt genomförande som är hans mest framträdande egenskaper.",
        terms: [
          "strategigenomförande",
          "strategiexekvering",
          "analys eller genomförande",
          "analysstyrka",
          "strukturering",
          "genomförande",
          "komma igång",
          "initiativ",
        ],
      },
    },
  },
  {
    id: "additional-change-environments",
    priority: 10,
    translations: {
      en: {
        answer:
          "Magnus has worked in changing environments for much of his career, so he tends to treat change as part of the normal working context rather than as something exceptional. Change can require more effort, but he focuses primarily on what the situation requires and what needs to be done.",
        terms: [
          "change",
          "change management",
          "changing environment",
          "transformation",
          "organizational change",
          "working with change",
          "changing environments",
          "does Magnus thrive in changing environments",
          "how does Magnus view change",
        ],
      },
      sv: {
        answer:
          "Magnus har arbetat i föränderliga miljöer under stora delar av karriären och betraktar därför förändring mer som en normal del av arbetslivet än som något exceptionellt. Förändring kan kräva mer energi, men han fokuserar framför allt på vad situationen kräver och vad som behöver göras.",
        terms: [
          "förändring",
          "förändringsledning",
          "föränderlig miljö",
          "transformation",
          "organisationsförändring",
          "arbeta med förändring",
          "föränderliga miljöer",
          "trivs Magnus i föränderliga miljöer",
          "hur ser Magnus på förändring",
        ],
      },
    },
  },
  {
    id: "additional-commercial-strengths",
    priority: 14,
    translations: {
      en: {
        answer:
          "Within commercial work, Magnus sees business development, pricing, and commercial agreements as particularly strong areas.",
        terms: [
          "commercial strengths",
          "business development",
          "pricing",
          "pricing strategy",
          "commercial agreements",
          "contracts",
          "contract development",
          "strongest commercial areas",
          "what is Magnus best at commercially",
          "which commercial areas is Magnus strongest in",
        ],
      },
      sv: {
        answer:
          "Inom det kommersiella området ser Magnus affärsutveckling, prissättning och kommersiella avtal som väldigt starka områden",
        terms: [
          "kommersiella styrkor",
          "affärsutveckling",
          "prissättning",
          "prisstrategi",
          "kommersiella avtal",
          "avtal",
          "avtalsutveckling",
          "starkaste kommersiella områden",
          "vad är Magnus bäst på kommersiellt",
          "vilka kommersiella områden är Magnus starkast inom",
        ],
      },
    },
  },
  {
    id: "additional-cross-functional-collaboration",
    priority: 12,
    translations: {
      en: {
        answer:
          "When functions or stakeholders have different objectives, Magnus first looks at the situation and which objective is overriding. He tries to understand why the views differ, iterate toward a workable solution, and zoom out to the overall business perspective rather than stay locked in a functional view. If he has a clear assignment and target to deliver, he needs a substantive reason before compromising on that target.",
        terms: [
          "cross functional collaboration",
          "stakeholder disagreement",
          "different objectives",
          "conflicting goals",
          "stakeholder management",
          "collaboration",
          "cross functional",
          "disagreement between stakeholders",
          "how does Magnus handle disagreement between stakeholders",
          "how does Magnus work cross functionally",
          "how does Magnus handle conflicting objectives",
        ],
      },
      sv: {
        answer:
          "När funktioner eller intressenter har olika mål utgår Magnus först från situationen och vilken fråga som är överordnad. Han försöker förstå varför uppfattningarna skiljer sig, iterera mot en fungerande lösning och zooma ut till ett helhetsperspektiv i stället för att låsa sig vid ett funktionellt perspektiv. Om han har ett tydligt uppdrag och mål att leverera på krävs det ett substantiellt skäl för att han ska kompromissa med det målet.",
        terms: [
          "tvärfunktionellt samarbete",
          "intressenter oense",
          "olika mål",
          "motstridiga mål",
          "intressenthantering",
          "samarbete",
          "tvärfunktionellt",
          "oenighet mellan intressenter",
          "hur hanterar Magnus oenighet mellan intressenter",
          "hur arbetar Magnus tvärfunktionellt",
          "hur hanterar Magnus motstridiga mål",
        ],
      },
    },
  },
  {
    id: "additional-preferred-work-environment",
    priority: 12,
    translations: {
      en: {
        answer:
          "Magnus tends to perform best in smaller organizations where individuals carry substantial responsibility and have room to step forward and influence outcomes. He appreciates shorter decision paths and fewer bureaucratic layers. At the same time, he recognizes the advantages of larger organizations, particularly established central functions and greater financial stability.",
        terms: [
          "work environment",
          "preferred organization",
          "company size",
          "small company",
          "large company",
          "organizational culture",
          "workplace culture",
          "best environment",
          "what type of organization does Magnus thrive in",
          "small or large companies",
          "does Magnus prefer small or large companies",
          "company environment",
          "what company environment suits Magnus",
        ],
      },
      sv: {
        answer:
          "Magnus kommer generellt bäst till sin rätt i mindre organisationer där den enskilde har stort ansvar och möjlighet att kliva fram och påverka. Han uppskattar kortare beslutsvägar och färre byråkratiska lager. Samtidigt ser han fördelarna med större organisationer, framför allt etablerade centrala funktioner och större ekonomisk stabilitet.",
        terms: [
          "arbetsmiljö",
          "vilken organisation passar Magnus",
          "företagsstorlek",
          "mindre organisation",
          "större organisation",
          "organisationskultur",
          "företagskultur",
          "bästa arbetsmiljö",
          "vilken typ av organisation trivs Magnus bäst i",
          "i vilken typ av organisation trivs Magnus bäst",
          "små eller stora företag",
          "mindre eller större företag",
          "föredrar Magnus små eller stora företag",
          "företagsmiljö",
          "vilken företagsmiljö passar Magnus",
        ],
      },
    },
  },
  {
    id: "additional-working-style",
    priority: 11,
    translations: {
      en: {
        answer:
          "Magnus prefers a combination of independent responsibility and teamwork. He often performs better when he can work independently on issues that benefit from concentrated ownership, while other questions need broader context and multiple perspectives. He also values the social exchange that comes from working with a team.",
        terms: [
          "working style",
          "independent or team",
          "teamwork",
          "independent work",
          "self directed",
          "team collaboration",
          "how does Magnus work best",
          "how does Magnus prefer to work",
          "work alone or in a team",
          "team player",
        ],
      },
      sv: {
        answer:
          "Magnus föredrar en kombination av självständigt ansvar och teamsamarbete. Han levererar ofta bättre när han kan arbeta självständigt med frågor som gynnas av koncentrerat ansvar, medan andra frågor kräver större sammanhang och flera perspektiv. Han uppskattar också det sociala utbyte som kommer av att arbeta i grupp.",
        terms: [
          "arbetssätt",
          "självständigt eller team",
          "teamarbete",
          "självständigt arbete",
          "eget ansvar",
          "grupparbete",
          "hur arbetar Magnus bäst",
          "hur föredrar Magnus att arbeta",
          "jobba själv eller i team",
          "arbeta själv eller i team",
          "lagspelare",
        ],
      },
    },
  },
  {
    id: "additional-problem-solving",
    priority: 13,
    translations: {
      en: {
        answer:
          "Magnus approaches complex or unclear problems by pressure-testing them from different directions. He rarely locks himself into one line of thought; when he gets stuck, he steps back and looks at the question from additional perspectives before deciding how to proceed.",
        terms: [
          "problem solving",
          "complex problem",
          "unclear problem",
          "ambiguous problem",
          "pressure test",
          "solve problems",
          "different perspectives",
          "how does Magnus solve complex problems",
          "how does Magnus approach unclear problems",
          "how does Magnus work with problem solving",
        ],
      },
      sv: {
        answer:
          "Magnus angriper komplexa eller otydliga problem genom att trycktesta dem från olika håll. Han låser sällan fast sig i ett tankesätt; när han kör fast backar han tillbaka och betraktar frågan ur fler perspektiv innan han bestämmer hur han ska gå vidare.",
        terms: [
          "problemlösning",
          "komplext problem",
          "otydligt problem",
          "oklar uppgift",
          "trycktesta",
          "lösa problem",
          "olika perspektiv",
          "hur löser Magnus komplexa problem",
          "hur angriper Magnus otydliga problem",
          "hur arbetar Magnus med problemlösning",
        ],
      },
    },
  },
  {
    id: "additional-motivation",
    priority: 12,
    translations: {
      en: {
        answer:
          "Magnus is motivated by feeling that he contributes to the organization, continues to develop, and has clearly defined responsibility. His motivation decreases when those elements are missing, particularly when urgent tasks requiring immediate delivery repeatedly come in from the side.",
        terms: [
          "motivation",
          "what motivates Magnus",
          "motivated at work",
          "demotivates",
          "loses motivation",
          "job enlargement",
          "recognition",
          "what drives Magnus at work",
          "what makes Magnus enjoy work",
          "what does Magnus appreciate at work",
          "what does Magnus value at work",
          "what matters to Magnus at work",
        ],
      },
      sv: {
        answer:
          "Magnus motiveras av att känna att han bidrar till verksamheten, att han utvecklas och har uttalat ansvar. Motivationen minskar när de delarna saknas och inte minst när uppgifter som snarast ska levereras på kommer in från sidan.",
        terms: [
          "motivation",
          "vad motiverar Magnus",
          "motiverad på jobbet",
          "demotiverar",
          "tappar motivation",
          "arbetsvidgning",
          "uppskattning",
          "vad driver Magnus",
          "vad får Magnus att trivas på jobbet",
          "vad uppskattar Magnus på arbetet",
          "vad uppskattar Magnus i arbetet",
          "vad är viktigt för Magnus i arbetet",
        ],
      },
    },
  },
  {
    id: "additional-self-described-strengths",
    priority: 12,
    translations: {
      en: {
        answer:
          "Magnus would highlight initiative, learning quickly, decisiveness, a high work pace, and social ability as professional strengths.",
        terms: [
          "self described strengths",
          "professional strengths",
          "Magnus strengths",
          "initiative",
          "quick learner",
          "decisive",
          "high work pace",
          "social ability",
          "strengths",
          "what are Magnus strengths",
        ],
      },
      sv: {
        answer:
          "Magnus skulle själv lyfta fram initiativförmåga, att han är lättlärd, beslutsam, har ett högt arbetstempo och är social som professionella styrkor.",
        terms: [
          "egna styrkor",
          "professionella styrkor",
          "Magnus styrkor",
          "initiativtagande",
          "lättlärd",
          "beslutsam",
          "högt arbetstempo",
          "styrkor",
          "vad är Magnus styrkor",
        ],
      },
    },
  },
  {
    id: "additional-development-areas",
    priority: 13,
    translations: {
      en: {
        answer:
          "Magnus sees two practical development areas in himself: being better at recognizing when other people will not deliver as expected, and planning his own time with more margin. He respects and always meets deadlines, but acknowledges that his time planning can make the final phase unnecessarily stressful.",
        terms: [
          "development areas",
          "weaknesses",
          "areas to improve",
          "what can Magnus improve",
          "time planning",
          "time management",
          "deadlines",
          "what is he bad at",
          "challenges",
          "weak points",
          "what are Magnus challenges",
          "professional challenges",
        ],
      },
      sv: {
        answer:
          "Magnus ser två praktiska utvecklingsområden hos sig själv: bli bättre på att förstå när andra inte kommer att leverera som förväntat, och att planera sin egen tid med större marginal. Han respekterar och håller alltid deadlines, men konstaterar att tidsplaneringen ibland kan göra slutskedet onödigt stressigt.",
        terms: [
          "utvecklingsområden",
          "svagheter",
          "förbättringsområden",
          "vad kan Magnus förbättra",
          "tidsplanering",
          "tidshantering",
          "deadlines",
          "vad är han dålig på",
          "utmaningar",
          "svaga sidor",
          "vad är sämre",
          "vad är Magnus utmaningar",
          "professionella utmaningar",
        ],
      },
    },
  },
  {
    id: "additional-industry-openness",
    priority: 12,
    translations: {
      en: {
        answer:
          "Magnus is open to new industries beyond telecom and IT. His commercial drive, structural mindset, and ability to quickly grasp new domain knowledge allow him to deliver value efficiently in new environments.",
        terms: [
          "other industries",
          "telecom industry",
          "industry preference",
          "open to new industries",
          "can Magnus change industry",
          "would Magnus change industry",
          "does Magnus have to work in telecom",
          "does Magnus want to work outside telecom",
          "is Magnus open to new industries",
        ],
      },
      sv: {
        answer:
          "Magnus är helt öppen för nya branscher utöver telekom och IT. Hans kommersiella driv, struktur och förmåga att snabbt sätta sig in i nya områden gör att han effektivt skapar värde även i nya miljöer.",
        terms: [
          "andra branscher",
          "branschpreferens",
          "öppen för nya branscher",
          "kan Magnus byta bransch",
          "vill Magnus byta bransch",
          "måste Magnus arbeta inom telekom",
          "måste Magnus jobba inom telekom",
          "är Magnus öppen för nya branscher",
        ],
      },
    },
  },
  {
    id: "additional-location-flexibility",
    priority: 15,
    translations: {
      en: {
        answer:
          "Stockholm is Magnus's base and he is not relocatable. He can, however, work on site in other locations and travel.",
        terms: [
          "location flexibility",
          "relocate",
          "relocation",
          "work in another city",
          "work elsewhere",
          "travel for work",
          "Stockholm base",
          "geographically flexible",
          "is Magnus geographically flexible",
        ],
      },
      sv: {
        answer:
          "Stockholm är Magnus bas och han är inte flyttbar. Däremot är han öppen för arbete på annan ort och resor.",
        terms: [
          "geografisk flexibilitet",
          "flytta",
          "flyttbar",
          "arbeta på annan ort",
          "jobba på annan ort",
          "resor i jobbet",
          "Stockholm bas",
          "geografiskt flexibel",
          "är Magnus geografiskt flexibel",
        ],
      },
    },
  },
  {
    id: "additional-hybrid-remote",
    priority: 13,
    translations: {
      en: {
        answer:
          "Magnus prefers a hybrid setup with a mix of office presence and remote work. He feels that fully remote work can reduce context, community, and useful synergies between colleagues, although he remains open to different arrangements rather than setting rigid rules.",
        terms: [
          "hybrid",
          "remote",
          "remote work",
          "work from home",
          "working arrangement",
          "hybrid work",
          "office or remote",
          "office or home",
          "does Magnus want to work remotely",
        ],
      },
      sv: {
        answer:
          "Magnus föredrar ett hybridupplägg med en blandning av kontorsnärvaro och distansarbete. Han upplever att helt distansbaserat arbete kan minska sammanhang, gemenskap och nyttiga synergier mellan kollegor, men är samtidigt öppen för olika upplägg och har inga helt låsta ramar.",
        terms: [
          "hybrid",
          "remote",
          "distansarbete",
          "jobba hemifrån",
          "arbetsupplägg",
          "hybridarbete",
          "distans",
          "kontor eller distans",
          "kontor eller hemma",
          "vill Magnus arbeta på distans",
          "vill Magnus jobba på distans",
        ],
      },
    },
  },
  {
    id: "additional-availability",
    priority: 18,
    translations: {
      en: {
        answer: "Magnus is available to start immediately.",
        terms: [
          "availability",
          "available to start",
          "when can Magnus start",
          "start date",
          "notice period",
          "immediately available",
        ],
      },
      sv: {
        answer: "Magnus är tillgänglig omgående.",
        terms: [
          "tillgänglighet",
          "tillgänglig omgående",
          "när kan Magnus börja",
          "startdatum",
          "uppsägningstid",
          "börja omgående",
        ],
      },
    },
  },
  {
    id: "additional-languages-practical",
    priority: 14,
    translations: {
      en: {
        answer:
          "Magnus speaks Swedish natively and English professionally. His German is limited, although he understands a fair amount. His Spanish and Portuguese are very limited and do not add professional working capability.",
        terms: [
          "languages",
          "English professionally",
          "professional English",
          "can Magnus work in English",
          "German",
          "Spanish",
          "Portuguese",
          "language skills",
          "what languages does Magnus speak",
          "what languages does Magnus know",
          "can Magnus speak English",
          "native Swedish",
        ],
      },
      sv: {
        answer:
          "Magnus har svenska som modersmål och talar engelska professionellt. Hans tyska är begränsad, även om han förstår en hel del. Spanskan och portugisiskan är mycket begränsade och tillför ingen professionell arbetsförmåga.",
        terms: [
          "engelska professionellt",
          "professionell engelska",
          "kan Magnus arbeta på engelska",
          "tyska",
          "spanska",
          "portugisiska",
          "språkkunskaper",
          "vilka språk talar Magnus",
          "vilka språk kan Magnus",
          "kan Magnus engelska",
          "svenska som modersmål",
        ],
      },
    },
  },
  {
    id: "additional-interests",
    priority: 12,
    translations: {
      en: {
        answer:
          "Outside work, Magnus spend time with family and friends. He trains at the gym and runs, and in the winter he skis downhill and cross-country. He listens to a lot of popular music, plays some guitar and also practices card tricks, which he finds both fun and challenging.",
        terms: [
          "hobbies",
          "free time",
          "outside work",
          "gym",
          "running",
          "skiing",
          "cross country skiing",
          "music",
          "trance",
          "hard rock",
          "guitar",
          "card magic",
          "card tricks",
          "card illusions",
          "free time interests",
          "what are Magnus interests",
          "what interests does Magnus have",
          "does Magnus have hobbies",
          "interests outside work",
        ],
      },
      sv: {
        answer:
          "På fritiden spenderar Magnus tid med familj och vänner. Han tränar på gym och löptränar, tycker om utförsåkning och längdskidor. Han lyssnar mycket på populärmusik, spelar lite gitarr och håller också på med korttrick, vilket han tycker är roligt och utmanande.",
        terms: [
          "hobbys",
          "fritid",
          "utanför jobbet",
          "gym",
          "löpning",
          "skidor",
          "längdskidor",
          "musik",
          "trance",
          "hårdrock",
          "gitarr",
          "korttrolleri",
          "korttrick",
          "kortillusioner",
          "fritidsintressen",
          "vad har Magnus för intressen",
          "vilka intressen har Magnus",
          "har Magnus några hobbies",
          "hobbies",
          "intressen på fritiden",
        ],
      },
    },
  },
  {
    id: "additional-personality-outside-work",
    priority: 11,
    translations: {
      en: {
        answer:
          "Magnus thinks people who know him well would describe him as social, pleasant, and someone they can trust. They would probably also call him a time optimist who can arrive a little later than agreed.",
        terms: [
          "personality outside work",
          "what is Magnus like personally",
          "friends describe Magnus",
          "what would others say about Magnus",
          "how would others describe Magnus",
          "how would people who know Magnus describe him",
          "trustworthy",
          "time optimist",
          "does Magnus arrive late",
          "is Magnus a time optimist",
          "Magnus personally",
          "personal life personality",
        ],
      },
      sv: {
        answer:
          "Magnus tror att människor som känner honom väl skulle beskriva honom som social, trevlig och som en person de kan lita på. De skulle sannolikt också beskriva honom som en tidsoptimist som ibland kommer lite senare än överenskommet.",
        terms: [
          "personlighet utanför jobbet",
          "hur är Magnus privat",
          "hur beskriver vänner Magnus",
          "vad skulle andra säga om Magnus",
          "hur skulle andra beskriva Magnus",
          "hur skulle personer som känner Magnus beskriva honom",
          "pålitlig",
          "tidsoptimist",
          "kommer Magnus sent",
          "är Magnus tidsoptimist",
          "Magnus privat",
          "privat personlighet",
        ],
      },
    },
  },
  {
    id: "additional-parachute-ranger-impact",
    priority: 13,
    translations: {
      en: {
        answer:
          "Magnus believes his parachute-ranger service taught him that people can handle considerably more than they initially think. He sees that experience as one reason it takes a great deal for him to give up when something is difficult.",
        terms: [
          "parachute ranger",
          "military service",
          "military background",
          "ranger service",
          "resilience",
          "giving up",
          "how has parachute ranger service affected Magnus",
          "military experience",
          "what has Magnus military background taught him",
        ],
      },
      sv: {
        answer:
          "Magnus upplever att fallskärmsjägartjänsten lärde honom att man klarar betydligt mer än man först föreställer sig. Han ser den erfarenheten som en anledning till att det krävs mycket för att han ska ge upp när något är svårt.",
        terms: [
          "fallskärmsjägare",
          "militärtjänst",
          "militär bakgrund",
          "jägartjänst",
          "motståndskraft",
          "ge upp",
          "hur har fallskärmsjägartjänsten påverkat Magnus",
          "militärbakgrund",
          "vad har Magnus militärbakgrund gett honom",
        ],
      },
    },
  },
  {
    id: "additional-career-breadth",
    priority: 13,
    translations: {
      en: {
        answer:
          "Magnus deliberately built breadth across sales, business development, strategy, marketing, legal and regulatory work, and projects because he prefers a broad scope. He has generally enjoyed roles most when he can combine several areas rather than focus on only one narrow function.",
        terms: [
          "career choices",
          "career breadth",
          "why different roles",
          "sales business development strategy marketing",
          "legal regulatory",
          "broad experience",
        ],
      },
      sv: {
        answer:
          "Magnus har medvetet byggt en bred erfarenhet inom försäljning, affärsutveckling, strategi, marknad, juridiska och regulatoriska frågor samt projekt eftersom han uppskattar att arbeta brett med olika frågor. Han har generellt trivts bäst i roller där flera områden kan kombineras istället för att fokusera på en smal funktion.",
        terms: [
          "karriärval",
          "karriärbredd",
          "varför olika roller",
          "försäljning affärsutveckling strategi marknad",
          "juridik regulatorik",
          "bred erfarenhet",
        ],
      },
    },
  },
  {
    id: "additional-differentiator",
    priority: 16,
    translations: {
      en: {
        answer:
          "Magnus sees his ability to understand new subjects quickly, take hold of the work, and produce at a high pace as a key differentiator. At the same time, he does not want work to become so all-consuming that relationships disappear from view; even under a high workload he tries to remain social, available, and give colleagues time and attention.",
        terms: [
          "what makes Magnus different",
          "different from other candidates",
          "differentiator",
          "why hire Magnus",
          "unique strength",
          "candidate comparison",
          "main differentiator",
          "what is Magnus main differentiator",
          "why should we hire Magnus",
        ],
      },
      sv: {
        answer:
          "Magnus ser sin förmåga att snabbt sätta sig in i nya frågor, ta tag i arbetet och producera i högt tempo som en viktig skillnad mot många andra kandidater. Samtidigt vill han inte att arbetet ska bli så allvarligt att relationerna runt omkring försvinner; även vid hög arbetsbelastning försöker han vara social, tillgänglig och ge kollegor tid och uppmärksamhet.",
        terms: [
          "vad skiljer Magnus från andra",
          "skillnad mot andra kandidater",
          "varför anställa Magnus",
          "unik styrka",
          "kandidatjämförelse",
          "vad gör Magnus annorlunda",
          "differentiator",
          "främsta differentiator",
          "vad är Magnus främsta differentiator",
          "varför ska vi anställa Magnus",
        ],
      },
    },
  },
  {
    id: "additional-salary-expectations",
    priority: 15,
    translations: {
      en: {
        answer:
          "Magnus's salary expectations are role-specific. Compensation is a factor, but not everything – he values development opportunities, trust, and autonomy with accountability equally highly.",
        terms: [
          "salary",
          "salary expectations",
          "salary requirement",
          "compensation",
          "compensation expectations",
          "pay expectations",
          "expected salary",
          "what salary does Magnus expect",
          "what are Magnus's salary expectations",
          "salary range",
          "what salary does Magnus want",
          "what compensation does Magnus expect",
          "Magnus pay",
          "how does Magnus view compensation",
          "compensation for the role",
        ],
      },
      sv: {
        answer:
          "Magnus löneanspråk är rollspecifikt. Lön är en faktor, men inte allt – han värderar utvecklingsmöjligheter, förtroende och frihet under ansvar lika högt.",
        terms: [
          "löneanspråk",
          "löneförväntan",
          "löneförväntningar",
          "ersättning",
          "vilken lön förväntar sig Magnus",
          "vad har Magnus för löneanspråk",
          "vad är Magnus löneanspråk",
          "lönekrav",
          "förväntad lön",
          "vad vill Magnus ha i lön",
          "vilken lönenivå förväntar sig Magnus",
          "Magnus lön",
          "hur ser Magnus på lön",
          "vad gäller lön",
          "lön för rollen",
        ],
      },
    },
  },
  {
    id: "additional-proudest-achievement",
    priority: 16,
    translations: {
      en: {
        answer:
          "The individual achievement Magnus is most proud of is developing and authoring a new service provider agreement at GlobalConnect that was later proposed as an industry standard by the Swedish Service Provider Association.",
        terms: [
          "proudest achievement",
          "most proud of",
          "achievement",
          "accomplishment",
          "success",
          "successful achievement",
          "what is Magnus most proud of",
          "what has Magnus achieved",
          "GlobalConnect agreement",
          "service provider agreement",
          "industry standard",
          "greatest achievement",
          "biggest achievement",
          "which achievement is Magnus most proud of",
        ],
      },
      sv: {
        answer:
          "Den enskilda prestation Magnus är mest stolt över är när han på GlobalConnect utvecklade och författade ett nytt tjänsteleverantörsavtal som senare föreslogs som branschstandard av Tjänsteleverantörsföreningen.",
        terms: [
          "stolt över",
          "mest stolt över",
          "bedrift",
          "bedrifter",
          "prestation",
          "framgång",
          "lyckats med",
          "vad är Magnus mest stolt över",
          "vad har Magnus lyckats med",
          "GlobalConnect avtal",
          "tjänsteleverantörsavtal",
          "branschstandard",
          "största bedrift",
          "största prestation",
          "främsta prestation",
          "vilken bedrift är Magnus mest stolt över",
        ],
      },
    },
  },
  {
    id: "additional-employer-preferences",
    priority: 14,
    translations: {
      en: {
        answer:
          "Magnus is looking for a financially stable employer that involves its employees and creates conditions for participation. He values open information-sharing and transparency because he believes people perform best when they understand the broader context and feel involved in the organization.",
        terms: [
          "employer preferences",
          "ideal employer",
          "what does Magnus look for in an employer",
          "what does Magnus want from an employer",
          "what matters to Magnus in an employer",
          "financially stable employer",
          "employee involvement",
          "transparency",
          "what does Magnus value in an employer",
          "what type of employer is Magnus looking for",
          "what employer suits Magnus",
          "what does Magnus value in a workplace",
          "what matters to Magnus in a workplace",
          "what does Magnus appreciate in a workplace",
        ],
      },
      sv: {
        answer:
          "Magnus söker en ekonomiskt stabil arbetsgivare som involverar sina medarbetare och skapar förutsättningar för delaktighet. Han värderar öppen informationsspridning och transparens, eftersom han tror att människor presterar bäst när de förstår sammanhanget och känner sig delaktiga i verksamheten.",
        terms: [
          "vad söker Magnus hos en arbetsgivare",
          "vad vill Magnus ha av en arbetsgivare",
          "vad är viktigt hos en arbetsgivare",
          "ekonomiskt stabil arbetsgivare",
          "delaktighet",
          "informationsspridning",
          "transparens",
          "vilken typ av arbetsgivare söker Magnus",
          "vad värderar Magnus hos en arbetsgivare",
          "vilken arbetsgivare passar Magnus",
          "vad värderar Magnus på en arbetsplats",
          "vad är viktigt för Magnus på en arbetsplats",
          "vad uppskattar Magnus på en arbetsplats",
        ],
      },
    },
  },
  {
    id: "additional-long-term-career-goals",
    priority: 14,
    translations: {
      en: {
        answer:
          "Long term, what matters most to Magnus is enjoying his work, continuing to develop, and feeling that he contributes to the organization and its development.",
        terms: [
          "long term career goals",
          "career goals",
          "future career",
          "where does Magnus see himself",
          "what are Magnus's long term goals",
          "what does Magnus want long term",
          "future goals",
          "long term goals",
          "what does Magnus want in the long term",
          "where does Magnus want to be in a few years",
        ],
      },
      sv: {
        answer:
          "Det viktigaste för Magnus långsiktigt är att han trivs med sina arbetsuppgifter, fortsätter att utvecklas och känner att han bidrar till verksamheten och dess utveckling.",
        terms: [
          "långsiktiga karriärmål",
          "karriärmål",
          "framtida karriär",
          "var ser Magnus sig själv",
          "vilka är Magnus långsiktiga mål",
          "vad vill Magnus långsiktigt",
          "framtidsmål",
          "mål på lång sikt",
          "vad vill Magnus på lång sikt",
          "var vill Magnus vara om några år",
        ],
      },
    },
  },
  {
    id: "additional-last-role-ended",
    priority: 18,
    translations: {
      en: {
        answer:
          "The board of TH1NG AB (publ), where Magnus worked as Chief Commercial Officer, filed for the company's bankruptcy in June 2025. Magnus enjoyed working at the company and in his role very much and found it extremely sad. At the same time, he tries to see the learning value in having experienced a corporate bankruptcy and the situations and experiences that came with it.",
        terms: [
          "why did Magnus leave",
          "why did Magnus leave TH1NG",
          "reason for leaving",
          "TH1NG bankruptcy",
          "bankruptcy",
          "Chief Commercial Officer TH1NG",
          "what happened at TH1NG",
          "what happened to TH1NG",
          "reason Magnus left",
          "why did Magnus employment end",
          "how did Magnus employment end",
        ],
      },
      sv: {
        answer:
          "TH1NG AB (publ), där Magnus arbetade som Chief Commercial Officer, begärdes i konkurs av styrelsen i juni 2025. Magnus trivdes väldigt bra på företaget och i sin roll och tyckte att det var oerhört tråkigt. Samtidigt försöker han se det lärorika i att ha upplevt en företagskonkurs och de situationer samt erfarenheter som följde med den.",
        terms: [
          "varför slutade Magnus",
          "varför lämnade Magnus TH1NG",
          "varför slutade Magnus på TH1NG",
          "TH1NG konkurs",
          "konkurs",
          "Chief Commercial Officer TH1NG",
          "vad hände på TH1NG",
          "vad hände med TH1NG",
          "orsak till att Magnus slutade",
          "varför upphörde Magnus anställning",
          "hur upphörde Magnus anställning",
        ],
      },
    },
  },
  {
    id: "additional-manager-expectations",
    priority: 14,
    translations: {
      en: {
        answer:
          "Clear expectations, direct communication, and regular follow-up. Beyond that, Magnus values a relationship built on mutual trust.",
        terms: [
          "expects manager",
          "expectations manager",
          "values manager",
          "wants manager",
          "prefers manager",
          "relationship manager",
          "trust manager",
          "direct communication manager",
          "regular follow up manager",
          "expect manager",
          "value manager",
          "kind of manager",
          "prefer manager",
        ],
      },
      sv: {
        answer:
          "Tydlighet i förväntningar, rak kommunikation och regelbunden uppföljning. Utöver det värderar Magnus en relation som bygger på tillit och förtroende.",
        terms: [
          "förväntar chef",
          "förväntningar chef",
          "värderar chef",
          "vill ha chef",
          "föredrar chef",
          "relation chef",
          "tillit chef",
          "förtroende chef",
          "rak kommunikation chef",
          "regelbunden uppföljning chef",
          "förväntar sig chef",
          "typ av chef",
          "värderar hos chef",
        ],
      },
    },
  },
  {
    id: "additional-mistakes-and-setbacks",
    priority: 14,
    translations: {
      en: {
        answer:
          "It depends on the type of mistake. If the mistake is due to carelessness, Magnus is very self-critical. If, however, it is the result of a considered decision between several reasonable alternatives, he also sees it as part of learning and development.",
        terms: [
          "mistakes",
          "handle mistakes",
          "how does Magnus handle mistakes",
          "when things go wrong",
          "failure",
          "wrong decision",
          "bad decision",
          "how does Magnus react to mistakes",
          "what does Magnus do when something goes wrong",
          "how does Magnus handle setbacks",
          "when things do not go as planned",
          "carelessness",
        ],
      },
      sv: {
        answer:
          "Det beror på typ av fel. Om felet beror på slarv är Magnus väldigt självkritisk. Om det däremot är resultatet av ett genomtänkt beslut mellan flera rimliga alternativ, ser han det också som en del av lärandet och utvecklingen.",
        terms: [
          "misstag",
          "hantera misstag",
          "hur hanterar Magnus misstag",
          "när något går fel",
          "när något inte går som planerat",
          "felaktigt beslut",
          "hur reagerar Magnus på misstag",
          "vad gör Magnus när något blir fel",
          "vad gör Magnus när något går fel",
          "hur hanterar Magnus motgångar",
          "när det inte går som planerat",
          "slarv",
        ],
      },
    },
  },
  {
    id: "additional-responsibility-and-mandate",
    priority: 14,
    translations: {
      en: {
        answer:
          "Magnus likes to have clearly defined responsibility and the mandate to drive his own issues and projects. At the same time, it is important to him that responsibilities are clearly divided and that expectations from his immediate manager are clear.",
        terms: [
          "responsibility and mandate",
          "decision authority",
          "what mandate does Magnus prefer",
          "independent responsibility",
          "preferred responsibility",
          "preferred mandate",
          "what mandate does Magnus want",
          "how much authority does Magnus want",
          "clearly defined responsibility and mandate",
          "prefers responsibility",
          "prefer responsibility",
          "wants responsibility",
          "likes responsibility",
          "prefers mandate",
          "wants mandate",
          "level of responsibility Magnus prefers",
          "much responsibility does Magnus want",
          "much authority does Magnus want",
        ],
      },
      sv: {
        answer:
          "Magnus tycker om att ha ett tydligt uttalat ansvar och mandat att driva egna frågor och projekt. För honom är det samtidigt viktigt med en tydlig ansvarsfördelning och tydliga förväntningar från närmaste chef.",
        terms: [
          "ansvar och mandat",
          "ansvarsfördelning",
          "driva egna frågor",
          "föredraget ansvar",
          "föredraget mandat",
          "tydligt ansvar och mandat",
          "trivs med ansvar",
          "trivs bäst med ansvar",
          "föredrar ansvar",
          "vill ha ansvar",
          "trivs med mandat",
          "föredrar mandat",
          "vill ha mandat",
          "mycket ansvar vill",
          "mycket mandat vill",
        ],
      },
    },
  },
  {
    id: "additional-management-lessons",
    priority: 13,
    translations: {
      en: {
        answer:
          "That people are very different and have different needs. That is precisely why Magnus sees it as important for a manager to get to know their employees and understand what each person needs to function and perform well – both individually and as part of a team.",
        terms: [
          "management lessons",
          "leadership lessons",
          "what has Magnus learned as a manager",
          "what has Magnus learned from management roles",
          "previous management roles",
          "learned from leadership",
          "employee needs",
          "what has Magnus learned about leadership",
          "what has Magnus learned from being a manager",
          "lessons from management roles",
        ],
      },
      sv: {
        answer:
          "Att människor är väldigt olika och har olika behov. Just därför ser Magnus det som viktigt att som chef lära känna sina medarbetare och förstå vad respektive person behöver för att fungera och prestera väl – såväl enskilt som i grupp.",
        terms: [
          "lärdomar som chef",
          "vad har Magnus lärt sig som chef",
          "vad har Magnus lärt sig av sina chefsroller",
          "tidigare chefsroller",
          "lärdomar från ledarskap",
          "medarbetares behov",
          "vad har Magnus lärt sig om ledarskap",
          "vad har Magnus lärt sig av att vara chef",
          "lärdomar från chefsroller",
        ],
      },
    },
  },
  {
    id: "additional-future-professional-development",
    priority: 14,
    translations: {
      en: {
        answer:
          "To better understand market mechanisms. The market is very fast-moving and dynamic, so it is essential to keep up.",
        terms: [
          "future professional development",
          "professional development",
          "what does Magnus want to improve",
          "what does Magnus want to get better at",
          "what does Magnus want to learn",
          "market mechanisms",
          "understand the market",
          "what does Magnus want to improve professionally",
          "what does Magnus want to develop professionally",
          "professional development goals",
          "what does Magnus want to develop in the coming years",
          "coming years professional development",
        ],
      },
      sv: {
        answer:
          "Att bättre förstå marknadsmekanismerna. Marknaden är väldigt snabbfotad och dynamisk, så det gäller verkligen att hänga med.",
        terms: [
          "professionell utveckling",
          "vad vill Magnus bli bättre på",
          "vad vill Magnus utveckla",
          "vad vill Magnus lära sig",
          "marknadsmekanismer",
          "förstå marknaden",
          "kommande åren",
          "vad vill Magnus bli bättre på professionellt",
          "vad vill Magnus utveckla professionellt",
          "professionella utvecklingsmål",
        ],
      },
    },
  },
  {
    id: "additional-new-industry-ramp-up",
    priority: 15,
    translations: {
      en: {
        answer:
          "Very quickly. Being able to quickly get up to speed on new issues, understand context, and identify what matters is one of Magnus's clearest strengths, which is also supported by completed logical-reasoning tests.",
        terms: [
          "new industry",
          "new business",
          "new sector",
          "how quickly can Magnus learn a new industry",
          "how quickly can Magnus learn a new business",
          "how quickly can Magnus get up to speed",
          "learn new domain",
          "ramp up",
          "how fast can Magnus learn a new industry",
          "how fast can Magnus learn a new business",
          "how easily can Magnus learn a new industry",
        ],
      },
      sv: {
        answer:
          "Väldigt snabbt. Att snabbt sätta sig in i nya frågor, förstå sammanhang och identifiera vad som är viktigt är en av Magnus tydligaste styrkor, vilket även stöds av genomförda tester av logisk förmåga.",
        terms: [
          "ny bransch",
          "ny verksamhet",
          "hur snabbt kan Magnus sätta sig in i en ny bransch",
          "hur snabbt kan Magnus sätta sig in i en ny verksamhet",
          "sätta sig in i nya frågor",
          "lära sig ny bransch",
          "lära sig ny verksamhet",
          "hur fort kan Magnus sätta sig in i en ny bransch",
          "hur fort kan Magnus sätta sig in i en ny verksamhet",
          "hur lätt lär sig Magnus en ny bransch",
          "hur snabbt lär sig Magnus en ny bransch",
        ],
      },
    },
  },
  {
    id: "additional-colleague-preferences",
    priority: 14,
    translations: {
      en: {
        answer:
          "Magnus values colleagues who work toward the same goals, take responsibility for their tasks, and follow through on what they have committed to. He also values relationships with colleagues that are built on trust and where people can speak openly with each other if, for example, something is causing friction.",
        terms: [
          "what does Magnus appreciate in colleagues",
          "what does Magnus value in colleagues",
          "what matters to Magnus in colleagues",
          "what does Magnus expect from colleagues",
          "what does Magnus appreciate about coworkers",
          "what does Magnus value in coworkers",
          "what kind of colleagues does Magnus appreciate",
          "relationship with colleagues",
          "trust with colleagues",
          "good colleagues",
        ],
      },
      sv: {
        answer:
          "Att alla arbetar mot samma mål, tar ansvar för sina arbetsuppgifter och genomför det de åtagit sig. Magnus värderar också relationer med kollegor som bygger på tillit och förtroende, och där man kan prata öppet med varandra om det exempelvis är någonting som skaver.",
        terms: [
          "vad uppskattar Magnus hos kollegor",
          "vad värderar Magnus hos kollegor",
          "vad är viktigt för Magnus hos kollegor",
          "vad förväntar sig Magnus av kollegor",
          "vilka kollegor uppskattar Magnus",
          "relation till kollegor",
          "tillit mellan kollegor",
          "förtroende mellan kollegor",
          "bra kollegor",
        ],
      },
    },
  },
  {
    id: "additional-logic-assessment",
    priority: 18,
    translations: {
      en: {
        answer:
          "On Alva Labs' logic test, Magnus scored 9 out of 10, classified as above average and within the 93rd-98th percentile. The test is designed to measure how effectively a person handles complex information and draws correct conclusions from it.",
        terms: [
          "logic test",
          "logical ability",
          "logical reasoning",
          "Alva logic",
          "logic score",
          "9 out of 10",
          "93rd percentile",
          "98th percentile",
          "smart",
          "intelligent",
        ],
      },
      sv: {
        answer:
          "På Alva Labs logiktest fick Magnus 9 av 10, vilket klassificeras som över genomsnittet och motsvarar 93:e-98:e percentilen. Testet mäter hur effektivt man hanterar komplex information och drar korrekta slutsatser från den.",
        terms: [
          "logiktest",
          "logisk förmåga",
          "logiskt resonemang",
          "Alva logik",
          "logikpoäng",
          "9 av 10",
          "93:e percentilen",
          "98:e percentilen",
          "smart",
          "intelligent",
        ],
      },
    },
  },
  {
    id: "additional-personality-assessment-overview",
    priority: 17,
    translations: {
      en: {
        answer:
          "In Alva Labs' Big Five assessment, Magnus scored 6/10 for Agreeableness, 7/10 for Conscientiousness, 7/10 for Extraversion, 8/10 for Emotional Stability, and 7/10 for Openness. The report describes a profile that is persistent, outgoing, resilient, and innovative, while Agreeableness is around the average range.",
        terms: [
          "personality test",
          "personality assessment",
          "Alva personality",
          "Big Five",
          "personality profile",
          "agreeableness conscientiousness extraversion emotional stability openness",
        ],
      },
      sv: {
        answer:
          "I Alva Labs Big Five-test fick Magnus 6/10 i vänlighet, 7/10 i samvetsgrannhet, 7/10 i extraversion, 8/10 i emotionell stabilitet och 7/10 i öppenhet. Rapporten beskriver sammantaget en profil som är ihärdig, utåtriktad, motståndskraftig och innovativ, medan vänlighet ligger omkring genomsnittet.",
        terms: [
          "personlighetstest",
          "personlighetsbedömning",
          "Alva personlighet",
          "Big Five",
          "personlighetsprofil",
          "vänlighet samvetsgrannhet extraversion emotionell stabilitet öppenhet",
        ],
      },
    },
  },
  {
    id: "additional-personality-conscientiousness",
    priority: 15,
    translations: {
      en: {
        answer:
          "Alva Labs places Magnus's Conscientiousness at 7/10, in the 69th-84th percentile. The report describes him as persistent, goal-oriented, hard-working, structured, and organized, with a preference for getting started quickly and completing tasks.",
        terms: [
          "conscientiousness",
          "persistent",
          "goal oriented",
          "organized",
          "structured personality",
          "work discipline",
          "structured",
          "hard working",
          "hard-working",
          "goal-oriented",
          "disciplined",
          "conscientious",
          "is Magnus conscientious",
        ],
      },
      sv: {
        answer:
          "Alva Labs placerar Magnus samvetsgrannhet på 7/10, i 69:e-84:e percentilen. Rapporten beskriver honom som ihärdig, målinriktad, hårt arbetande, strukturerad och organiserad, med en tendens att komma igång snabbt och slutföra sina uppgifter.",
        terms: [
          "samvetsgrannhet",
          "ihärdig",
          "målinriktad",
          "ordningsam",
          "strukturerad personlighet",
          "självdisciplin",
          "samvetsgrann",
          "strukturerad",
          "organiserad",
          "hårt arbetande",
          "disciplinerad",
        ],
      },
    },
  },
  {
    id: "additional-personality-extraversion",
    priority: 15,
    translations: {
      en: {
        answer:
          "Alva Labs places Magnus's Extraversion at 7/10, in the 69th-84th percentile. The report describes him as outgoing and social, with particularly high energy at the 84th-93rd percentile. His social-dominance facet is more moderate: he does not always seek the leadership role, but takes it when needed and expresses his view when required.",
        terms: [
          "extraversion",
          "outgoing",
          "social personality",
          "energy level",
          "social dominance",
          "energetic",
          "social",
          "extrovert",
          "extravert",
          "extroverted",
          "extraverted",
          "dominant",
        ],
      },
      sv: {
        answer:
          "Alva Labs placerar Magnus extraversion på 7/10, i 69:e-84:e percentilen. Rapporten beskriver honom som utåtriktad och social, med särskilt hög energinivå i 84:e-93:e percentilen. Social dominans ligger mer i mitten: han söker inte alltid ledarrollen men tar den ibland och uttrycker sin åsikt när det behövs.",
        terms: [
          "extraversion",
          "utåtriktad",
          "social personlighet",
          "energinivå",
          "social dominans",
          "energisk",
          "social",
          "extrovert",
          "extravert",
          "socialt dominant",
          "dominant",
        ],
      },
    },
  },
  {
    id: "additional-personality-emotional-stability",
    priority: 16,
    translations: {
      en: {
        answer:
          "Alva Labs places Magnus's Emotional Stability at 8/10, in the 84th-93rd percentile. The report describes him as resilient and generally calm under pressure, with optimism and stress tolerance also in the 84th-93rd percentile range.",
        terms: [
          "emotional stability",
          "stress tolerance",
          "under pressure",
          "resilience",
          "optimism",
          "calm under pressure",
          "stress resistant",
          "stress tolerant",
          "stress-tolerant",
          "stress-resistant",
          "calm",
          "optimistic",
          "emotionally stable",
        ],
      },
      sv: {
        answer:
          "Alva Labs placerar Magnus emotionella stabilitet på 8/10, i 84:e-93:e percentilen. Rapporten beskriver honom som motståndskraftig och generellt lugn under press, med optimism och stresstålighet också i 84:e-93:e percentilen.",
        terms: [
          "emotionell stabilitet",
          "stresstålighet",
          "under press",
          "motståndskraft",
          "optimism",
          "lugn under press",
          "stress",
          "stresstålig",
          "stressresistent",
          "lugn",
          "optimistisk",
          "emotionellt stabil",
        ],
      },
    },
  },
  {
    id: "additional-personality-openness",
    priority: 15,
    translations: {
      en: {
        answer:
          "Alva Labs places Magnus's Openness at 7/10, in the 69th-84th percentile. The report describes him as innovative and intellectually curious, interested in theoretical problems, open to change, and inclined to try new things and contexts.",
        terms: [
          "openness",
          "innovative",
          "curiosity",
          "intellectual curiosity",
          "open to change",
          "change oriented",
          "new things",
          "open minded",
          "open-minded",
          "curious",
          "intellectually curious",
          "open to new things",
        ],
      },
      sv: {
        answer:
          "Alva Labs placerar Magnus öppenhet på 7/10, i 69:e-84:e percentilen. Rapporten beskriver honom som innovativ och intellektuellt nyfiken, intresserad av teoretiska problem, öppen för förändring och benägen att prova nya saker och sammanhang.",
        terms: [
          "öppenhet",
          "innovativ",
          "nyfikenhet",
          "intellektuell",
          "intellektuellt nyfiken",
          "öppen för förändring",
          "förändringsbenägen",
          "nya saker",
          "öppen",
          "nyfiken",
          "förändringsöppen",
          "öppen för nya saker",
        ],
      },
    },
  },
  {
    id: "additional-personality-agreeableness",
    priority: 14,
    translations: {
      en: {
        answer:
          "Alva Labs places Magnus's Agreeableness at 6/10, in the 50th-69th percentile. The report describes an average overall level: he can be direct when needed without seeking unnecessary confrontation. Politeness is higher, in the 69th-84th percentile, while trust is around the 50th-69th percentile.",
        terms: [
          "agreeableness",
          "politeness",
          "confrontation",
          "friendly",
          "nice",
          "polite",
          "pleasant",
          "is Magnus friendly",
          "is Magnus nice",
          "is Magnus polite",
          "is Magnus kind",
          "how friendly is Magnus",
          "how polite is Magnus",
          "how trusting is Magnus",
          "trust according to Alva",
          "is Magnus direct",
          "direct personality",
        ],
      },
      sv: {
        answer:
          "Alva Labs placerar Magnus vänlighet på 6/10, i 50:e-69:e percentilen. Rapporten beskriver en genomsnittlig totalnivå: han kan vara rak när det behövs utan att söka onödig konfrontation. Artighet ligger högre, i 69:e-84:e percentilen, medan tillit ligger i 50:e-69:e percentilen.",
        terms: [
          "vänlighet",
          "artighet",
          "konfrontation",
          "vänskaplig",
          "vänlig",
          "trevlig",
          "artig",
          "är Magnus vänlig",
          "är Magnus trevlig",
          "är Magnus artig",
          "hur vänlig är Magnus",
          "hur artig är Magnus",
          "hur tillitsfull är Magnus",
          "tillit enligt Alva",
          "är Magnus rak",
          "rak person",
        ],
      },
    },
  },
  {
    id: "additional-personality-strengths-challenges",
    priority: 15,
    translations: {
      en: {
        answer:
          "Alva Labs highlights three strengths: being decisive and goal-oriented when difficulties arise, spreading enthusiasm while remaining resilient to setbacks, and being highly productive at a fast pace. Potential challenges are forgetting to rest because of high ambition, sometimes underestimating problems through optimism, and occasionally coming across as pushy when he wants things done.",
        terms: [
          "personality strengths",
          "personality challenges",
          "pushy",
          "high ambition",
          "productive",
          "strengths according to Alva",
          "challenges according to Alva",
          "strengths in personality test",
          "challenges in personality test",
          "personality test strengths",
          "personality test challenges",
          "resilience to setbacks",
          "what strengths does Alva show for Magnus",
          "what does Alva say about Magnus strengths",
          "what challenges does Alva show for Magnus",
          "what does Alva say about Magnus challenges",
          "what challenges does the personality test show",
          "what does the personality test say about Magnus strengths",
          "what does the personality test say about Magnus challenges",
        ],
      },
      sv: {
        answer:
          "Alva Labs lyfter tre styrkor: att vara beslutsam och målinriktad när svårigheter uppstår, att sprida entusiasm och vara motståndskraftig mot motgångar samt att vara mycket produktiv i högt tempo. Potentiella utmaningar är att ibland glömma att vila på grund av höga ambitioner, underskatta problem genom optimism och ibland framstå som pådrivande när saker ska bli gjorda.",
        terms: [
          "personlighetsstyrkor",
          "personlighetsutmaningar",
          "pådrivande",
          "höga ambitioner",
          "produktiv",
          "styrkor enligt Alva",
          "utmaningar enligt Alva",
          "styrkor i personlighetstest",
          "utmaningar i personlighetstest",
          "personlighetstestets styrkor",
          "personlighetstestets utmaningar",
          "motståndskraft vid motgångar",
          "vilka styrkor visar Alva för Magnus",
          "vad säger Alva om Magnus styrkor",
          "vilka utmaningar visar Alva för Magnus",
          "vad säger Alva om Magnus utmaningar",
          "vilka utmaningar visar personlighetstestet",
          "vad säger personlighetstestet om Magnus styrkor",
          "vad säger personlighetstestet om Magnus utmaningar",
        ],
      },
    },
  },
  {
    id: "additional-personality-drivers-culture",
    priority: 15,
    translations: {
      en: {
        answer:
          "According to Alva Labs, Magnus's main drivers are stimulation, creativity, and autonomy. The culture preferences highlighted in the report are innovative, energetic, and decisive environments.",
        terms: [
          "drivers",
          "motivational drivers",
          "culture preferences",
          "stimulation",
          "creativity",
          "autonomy",
          "innovative energetic decisive",
          "drivers according to Alva",
          "drivers in personality test",
          "what does Alva say about drivers",
          "what drivers does Alva show",
          "what culture preferences does Magnus have according to Alva",
          "what does the personality test say about Magnus drivers",
        ],
      },
      sv: {
        answer:
          "Enligt Alva Labs är Magnus viktigaste drivande faktorer stimulans, kreativitet och autonomi. Kulturpreferenserna som lyfts i rapporten är innovativ, energisk och beslutsam.",
        terms: [
          "drivande faktorer",
          "motivationsfaktorer",
          "kulturpreferenser",
          "stimulans",
          "kreativitet",
          "autonomi",
          "innovativ energisk beslutsam",
          "drivkrafter enligt Alva",
          "drivkrafter i personlighetstest",
          "vad visar Alva om drivkrafter",
          "vilka drivkrafter visar Alva",
          "vilka kulturpreferenser har Magnus enligt Alva",
          "vad säger personlighetstestet om Magnus drivkrafter",
        ],
      },
    },
  },
  {
    id: "additional-historical-assessment",
    priority: 14,
    translations: {
      en: {
        answer:
          "A 2011 competency-development assessment is older and should not be treated as a current standalone description, but several themes are consistent with Magnus's current self-description and newer Alva results. It described a structured and systematic approach, high performance expectations, a tendency to grasp the core of complex problems quickly, effective independent and group work, and a strong drive to get things done. It also noted possible tendencies to underestimate time requirements and to be too forceful at times, which resembles development areas Magnus still recognizes in himself today.",
        terms: [
          "2011 assessment",
          "old assessment",
          "older assessment",
          "competency development report",
          "competence development report",
          "historical assessment",
          "assessment over time",
          "tests over time",
          "2011 assessment results",
          "what does the 2011 assessment say",
          "what did the competency development report say",
          "older test results",
          "does Magnus have older test results",
        ],
      },
      sv: {
        answer:
          "En kompetensutvecklingsrapport från 2011 är äldre och bör inte användas som en fristående beskrivning av Magnus idag, men flera teman stämmer väl med hans nuvarande egenbeskrivning och senare Alva-resultat. Rapporten beskrev ett strukturerat och systematiskt arbetssätt, höga prestationskrav, en förmåga att snabbt se kärnan i komplexa problem, effektivt arbete både självständigt och i grupp samt en stark vilja att få saker gjorda. Den noterade också möjliga tendenser att underskatta tidsåtgång och ibland vara för pådrivande, vilket liknar utvecklingsområden som Magnus fortfarande själv känner igen.",
        terms: [
          "2011 rapport",
          "gammal rapport",
          "äldre bedömning",
          "kompetensutvecklingsrapport",
          "historisk bedömning",
          "bedömning över tid",
          "tester över tid",
          "bedömningen från 2011",
          "vad säger bedömningen från 2011",
          "vad stod i kompetensutvecklingsrapporten",
          "äldre testresultat",
          "har Magnus äldre testresultat",
        ],
      },
    },
  },
];

// Transformerar källkoden till det förväntade Record<SiteLanguage, ChatKnowledgeItem[]>-formatet
export const additionalChatKnowledge: Record<
  SiteLanguage,
  readonly ChatKnowledgeItem[]
> = {
  en: rawKnowledgeEntries.map((entry) => ({
    id: entry.id,
    priority: entry.priority,
    answer: entry.translations.en.answer,
    terms: entry.translations.en.terms,
  })),
  sv: rawKnowledgeEntries.map((entry) => ({
    id: entry.id,
    priority: entry.priority,
    answer: entry.translations.sv.answer,
    terms: entry.translations.sv.terms,
  })),
};