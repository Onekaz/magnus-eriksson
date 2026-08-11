// lib/chatbot/siteKnowledge.ts

import type { ChatKnowledgeItem } from "@/lib/chatbot/types";
import {
  getResumeEntries,
  type SiteContent,
  type SiteLanguage,
} from "@/lib/content/profile";

const SITE_KNOWLEDGE_ALIASES = {
  en: {
    about: ["about", "background", "professional background", "profile", "who is magnus", "tell me about magnus"],
    resume: ["resume", "work experience", "experience", "career", "roles", "employment", "work history", "what has magnus worked with", "where has magnus worked"],
    skills: ["skills", "core skills", "competencies", "competences", "expertise", "what can magnus do"],
    education: ["education", "academic background", "studies", "university", "what education does magnus have"],
    contact: ["contact", "email", "phone", "linkedin", "contact details"],
  },
  sv: {
    about: ["om magnus", "bakgrund", "professionell bakgrund", "profil", "vem är magnus", "berätta om magnus"],
    resume: ["cv", "arbetslivserfarenhet", "erfarenhet", "karriär", "roller", "anställningar", "arbetsbakgrund", "vad har magnus arbetat med", "var har magnus arbetat"],
    skills: ["kompetenser", "viktigaste kompetenser", "färdigheter", "expertis", "vad kan magnus"],
    education: ["utbildning", "akademisk bakgrund", "studier", "universitet", "vad har magnus för utbildning"],
    contact: ["kontakt", "e-post", "email", "telefon", "linkedin", "kontaktuppgifter"],
  },
} as const;

function buildResumeAnswer(
  entry: ReturnType<typeof getResumeEntries>[number],
) {
  const achievement = entry.achievementLabel
    ? `${entry.achievementLabel} ${entry.description}`
    : entry.description;

  return `${entry.role} — ${entry.company}, ${entry.location} (${entry.start}-${entry.end}). ${entry.responsibilities.join(
    " • ",
  )}. ${achievement}`;
}

export function buildSiteChatKnowledge(
  content: SiteContent,
  language: SiteLanguage,
): readonly ChatKnowledgeItem[] {
  const aliases = SITE_KNOWLEDGE_ALIASES[language];
  const resumeEntries = getResumeEntries(content);
  const items: ChatKnowledgeItem[] = [
    {
      id: "site-about",
      answer: content.about.paragraphs.join(" "),
      terms: [content.about.heading, ...aliases.about, ...content.about.paragraphs],
      priority: 4,
    },
    {
      id: "site-resume-overview",
      answer: resumeEntries
        .map((entry) => `${entry.role} — ${entry.company} (${entry.start}-${entry.end})`)
        .join(". "),
      terms: [content.resume.heading, ...aliases.resume],
      priority: 3,
    },
    {
      id: "site-skills-overview",
      answer: content.skills.groups
        .map((group) => `${group.title}: ${group.skills.join(", ")}`)
        .join(". "),
      terms: [
        content.skills.heading,
        ...aliases.skills,
        ...content.skills.groups.flatMap((group) => [group.title, ...group.skills]),
      ],
      priority: 5,
    },
    {
      id: "site-education-overview",
      answer: content.education.entries
        .map((entry) => `${entry.title} — ${entry.institution} (${entry.period})`)
        .join(". "),
      terms: [content.education.heading, ...aliases.education],
      priority: 3,
    },
    {
      id: "site-contact",
      answer: `${content.contact.emailDisplay} • ${content.contact.phoneDisplay} • ${content.contact.linkedInDisplay}`,
      terms: [content.contact.heading, ...aliases.contact],
      priority: 2,
    },
  ];

  resumeEntries.forEach((entry, index) => {
    items.push({
      id: `site-resume-entry-${index}`,
      answer: buildResumeAnswer(entry),
      terms: [
        entry.role,
        entry.company,
        entry.location,
        ...entry.responsibilities,
        entry.description,
      ],
      priority: 7,
    });
  });

  content.skills.groups.forEach((group, index) => {
    items.push({
      id: `site-skills-group-${index}`,
      answer: `${group.title}: ${group.skills.join(", ")}`,
      terms: [group.title, ...group.skills],
      priority: 6,
    });
  });

  content.education.entries.forEach((entry, index) => {
    items.push({
      id: `site-education-entry-${index}`,
      answer: [
        `${entry.title} — ${entry.institution} (${entry.period})`,
        ...(entry.theses?.map((thesis) => `${thesis.label} ${thesis.title}`) ?? []),
      ].join(". "),
      terms: [
        entry.title,
        entry.institution,
        entry.period,
        ...(entry.theses?.flatMap((thesis) => [thesis.label, thesis.title]) ?? []),
      ],
      priority: 6,
    });
  });

  return items;
}
