// lib/content/profile.ts

export type SiteLanguage = "en" | "sv";

export const CONTACT_MAILTO_HREF = "mailto:eriksson.magnus@outlook.com";
export const CONTACT_PHONE_HREF = "tel:+46708733320";
export const CONTACT_LINKEDIN_HREF = "https://www.linkedin.com/in/magnus-eriksson-se/";

export type NavigationTargetId = "about" | "resume" | "skills" | "education" | "contact";
export type MobileNavigationIcon = "profile" | "list" | "lightbulb" | "graduation" | "envelope";

export type ResumeEntry = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  responsibilities: readonly string[];
  description: string;
  descriptionLead?: string;
  achievementLabel?: string;
  showTimelineMarker?: boolean;
};

export type ResumeBlock =
  | {
      type: "entry";
      entry: ResumeEntry;
    }
  | {
      type: "timelineGroup";
      entries: readonly ResumeEntry[];
    };

export type EducationThesis = {
  label: string;
  title: string;
};

export type EducationEntry = {
  title: string;
  institution: string;
  period: string;
  theses?: readonly EducationThesis[];
};

export type SiteContent = {
  header: {
    name: string;
    desktopSubtitle: string;
    mobileSubtitle: string;
    languageLabel: string;
    languageButtonAriaLabel: string;
    englishLanguageLabel: string;
    swedishLanguageLabel: string;
  };
  navigation: {
    desktopAriaLabel: string;
    mobileAriaLabel: string;
    desktopItems: readonly {
      targetId: NavigationTargetId;
      label: string;
    }[];
    mobileItems: readonly (
      | {
          targetId: Exclude<NavigationTargetId, "contact">;
          label: string;
          icon: Exclude<MobileNavigationIcon, "envelope">;
        }
      | {
          action: "contactSheet";
          label: string;
          icon: "envelope";
        }
    )[];
  };
  about: {
    heading: string;
    imageAlt: string;
    paragraphs: readonly string[];
    downloads: readonly {
      label: string;
      href: string;
      ariaLabel: string;
    }[];
  };
  resume: {
    heading: string;
    blocks: readonly ResumeBlock[];
  };
  skills: {
    heading: string;
    groups: readonly {
      title: string;
      skills: readonly string[];
    }[];
  };
  education: {
    heading: string;
    entries: readonly EducationEntry[];
  };
  contact: {
    heading: string;
    emailDisplay: string;
    phoneDisplay: string;
    linkedInDisplay: string;
  };
  contactSheet: {
    closeLabel: string;
    closeButtonAriaLabel: string;
    dialogAriaLabel: string;
  };
};
