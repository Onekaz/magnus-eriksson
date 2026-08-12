// lib/ats/structuredProfile.ts

import { englishContent } from "@/lib/content/en";
import {
  CONTACT_LINKEDIN_HREF,
  CONTACT_PHONE_HREF,
  getResumeEntries,
} from "@/lib/content/profile";

export const PROFILE_CANONICAL_URL = "https://www.magnus-eriksson.se";

export function buildStructuredProfileData() {
  const resumeEntries = getResumeEntries(englishContent);
  const skills = englishContent.skills.groups.flatMap((group) => group.skills);
  const universityEducation = englishContent.education.entries[0];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${PROFILE_CANONICAL_URL}/#profile-page`,
        url: PROFILE_CANONICAL_URL,
        name: "Magnus Eriksson — Professional Profile",
        description: englishContent.about.paragraphs.join(" "),
        mainEntity: {
          "@id": `${PROFILE_CANONICAL_URL}/#magnus-eriksson`,
        },
      },
      {
        "@type": "Person",
        "@id": `${PROFILE_CANONICAL_URL}/#magnus-eriksson`,
        name: englishContent.header.name,
        url: PROFILE_CANONICAL_URL,
        image: `${PROFILE_CANONICAL_URL}/images/profile.jpg`,
        email: englishContent.contact.emailDisplay,
        telephone: CONTACT_PHONE_HREF.replace("tel:", ""),
        sameAs: [CONTACT_LINKEDIN_HREF],
        description: englishContent.about.paragraphs.join(" "),
        skills,
        knowsAbout: skills,
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: universityEducation.institution.split(",")[0],
        },
        hasOccupation: resumeEntries.map((entry) => ({
          "@type": "Occupation",
          name: entry.role,
          description: `${entry.role} at ${entry.company}, ${entry.location} (${entry.start}-${entry.end}). ${entry.responsibilities.join(", ")}. ${entry.description}`,
          occupationLocation: {
            "@type": "Place",
            name: entry.location,
          },
        })),
      },
    ],
  };
}

export function serializeStructuredProfileData() {
  return JSON.stringify(buildStructuredProfileData()).replace(/</g, "\\u003c");
}
