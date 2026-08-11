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
          "Magnus is primarily searching for roles in business development, commercial leadership, and project management. He prefers situations where the business or operations have development potential.",
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
          "Magnus söker framför allt roller inom affärsutveckling, kommersiell ledning och projektledning. Det han finner mest intressant är roller där affär och verksamhet har utvecklingspotential.",
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
          "Magnus describes his leadership style as attentive and trust-based. He listens to the people around him, tries to understand different perspectives, and tends to build trust. He sees that trust as an important basis for engagement and for people to have confidence in what he communicates.",
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
        ],
      },
      sv: {
        answer:
          "Magnus beskriver sitt ledarskap som lyhört och förtroendeskapande. Han lyssnar på sin omgivning, försöker förstå olika perspektiv och har lätt för att skapa förtroende. Han ser den tilliten som en viktig grund för engagemang och för att medarbetare ska känna förtroende för det han förmedlar.",
        terms: [
          "ledarskapsstil",
          "hur leder Magnus",
          "ledarskap",
          "engagemang",
          "skapa förtroende",
          "tillit",
          "personalledning",
          "chef",
          "ledarstil",
          "ledarskapsfilosofi",
          "hur är Magnus som chef",
          "chefstil",
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
          "Within commercial work, Magnus sees business development, pricing, and commercial agreements as particularly strong areas. He especially enjoys creating or developing agreements.",
        terms: [
          "commercial strengths",
          "business development",
          "pricing",
          "pricing strategy",
          "commercial agreements",
          "contracts",
          "contract development",
          "strongest commercial areas",
        ],
      },
      sv: {
        answer:
          "Inom det kommersiella området ser Magnus affärsutveckling, prissättning och kommersiella avtal som väldigt starka områden. Han tycker särskilt om att skapa eller utveckla avtal.",
        terms: [
          "kommersiella styrkor",
          "affärsutveckling",
          "prissättning",
          "prisstrategi",
          "kommersiella avtal",
          "avtal",
          "avtalsutveckling",
          "starkaste kommersiella områden",
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
          "how does Magnus work",
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
          "hur arbetar Magnus",
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
          "Magnus is particularly motivated by developing, receiving recognition for good work, and broadening the scope of his responsibilities. Motivation drops when those elements are missing and when work is repeatedly disrupted by unprioritized issues coming in from the side.",
        terms: [
          "motivation",
          "what motivates Magnus",
          "motivated at work",
          "demotivates",
          "loses motivation",
          "job enlargement",
          "recognition",
        ],
      },
      sv: {
        answer:
          "Magnus motiveras särskilt av att utvecklas, få uppskattning för ett bra arbete och bredda sitt ansvar. Motivationen minskar när de delarna saknas och när arbetet återkommande störs av oprioriterade frågor som kommer in från sidan.",
        terms: [
          "motivation",
          "vad motiverar Magnus",
          "motiverad på jobbet",
          "demotiverar",
          "tappar motivation",
          "arbetsvidgning",
          "uppskattning",
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
          "Magnus would highlight initiative, learning quickly, decisiveness, a high work pace, and social ability as five of his professional strengths.",
        terms: [
          "self described strengths",
          "professional strengths",
          "Magnus strengths",
          "initiative",
          "quick learner",
          "decisive",
          "high work pace",
          "social ability",
        ],
      },
      sv: {
        answer:
          "Magnus skulle själv lyfta fram initiativförmåga, att han är lättlärd, beslutsam, har ett högt arbetstempo och är social som fem professionella styrkor.",
        terms: [
          "egna styrkor",
          "professionella styrkor",
          "Magnus styrkor",
          "initiativtagande",
          "lättlärd",
          "beslutsam",
          "högt arbetstempo",
          "social",
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
          "industry",
          "industries",
          "other industries",
          "telecom industry",
          "industry preference",
        ],
      },
      sv: {
        answer:
          "Magnus är helt öppen för nya branscher utöver telekom och IT. Hans kommersiella driv, struktur och förmåga att snabbt sätta sig in i nya områden gör att han effektivt skapar värde även i nya miljöer.",
        terms: [
          "bransch",
          "branscher",
          "andra branscher",
          "telekombranschen",
          "branschpreferens",
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
          "office",
          "work from home",
          "working arrangement",
          "hybrid work",
        ],
      },
      sv: {
        answer:
          "Magnus föredrar ett hybridupplägg med en blandning av kontorsnärvaro och distansarbete. Han upplever att helt distansbaserat arbete kan minska sammanhang, gemenskap och nyttiga synergier mellan kollegor, men är samtidigt öppen för olika upplägg och har inga helt låsta ramar.",
        terms: [
          "hybrid",
          "remote",
          "distansarbete",
          "kontor",
          "jobba hemifrån",
          "arbetsupplägg",
          "hybridarbete",
          "distans",
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
        ],
      },
      sv: {
        answer:
          "Magnus har svenska som modersmål och talar engelska professionellt. Hans tyska är begränsad, även om han förstår en hel del. Spanskan och portugisiskan är mycket begränsade och tillför ingen professionell arbetsförmåga.",
        terms: [
          "språk",
          "engelska professionellt",
          "professionell engelska",
          "kan Magnus arbeta på engelska",
          "tyska",
          "spanska",
          "portugisiska",
          "språkkunskaper",
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
          "interests",
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
        ],
      },
      sv: {
        answer:
          "På fritiden spenderar Magnus tid med familj och vänner. Han tränar på gym och löptränar, tycker om utförsåkning och längdskidor. Han lyssnar mycket på populärmusik, spelar lite gitarr och håller också på med korttrick, vilket han tycker är roligt och utmanande.",
        terms: [
          "intressen",
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
          "social",
          "trustworthy",
          "time optimist",
          "late",
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
          "social",
          "pålitlig",
          "tidsoptimist",
          "sen",
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
          "job enlargement",
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
          "arbetsvidgning",
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
          "trust",
          "direct",
          "confrontation",
          "friendly",
        ],
      },
      sv: {
        answer:
          "Alva Labs placerar Magnus vänlighet på 6/10, i 50:e-69:e percentilen. Rapporten beskriver en genomsnittlig totalnivå: han kan vara rak när det behövs utan att söka onödig konfrontation. Artighet ligger högre, i 69:e-84:e percentilen, medan tillit ligger i 50:e-69:e percentilen.",
        terms: [
          "vänlighet",
          "artighet",
          "tillit",
          "rak",
          "konfrontation",
          "vänskaplig",
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
          "Alva Labs highlights three potential strengths: being decisive and goal-oriented when difficulties arise, spreading enthusiasm while remaining resilient to setbacks, and being highly productive at a fast pace. Potential challenges are forgetting to rest because of high ambition, sometimes underestimating problems through optimism, and occasionally coming across as pushy when he wants things done.",
        terms: [
          "personality strengths",
          "personality challenges",
          "Alva strengths",
          "Alva challenges",
          "pushy",
          "high ambition",
          "productive",
          "setbacks",
        ],
      },
      sv: {
        answer:
          "Alva Labs lyfter tre potentiella styrkor: att vara beslutsam och målinriktad när svårigheter uppstår, att sprida entusiasm och vara motståndskraftig mot motgångar samt att vara mycket produktiv i högt tempo. Potentiella utmaningar är att ibland glömma att vila på grund av höga ambitioner, underskatta problem genom optimism och ibland framstå som pådrivande när saker ska bli gjorda.",
        terms: [
          "personlighetsstyrkor",
          "personlighetsutmaningar",
          "Alva styrkor",
          "Alva utmaningar",
          "pådrivande",
          "höga ambitioner",
          "produktiv",
          "motgångar",
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