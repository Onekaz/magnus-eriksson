// app/page.tsx

"use client";

import { useEffect, useState } from "react";
import DesktopHeader from "@/components/desktop/DesktopHeader";
import MobileFooterOverlay from "@/components/mobile/MobileFooterOverlay";
import MobileTopOverlay from "@/components/mobile/MobileTopOverlay";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import EducationSection from "@/components/sections/EducationSection";
import ResumeSection from "@/components/sections/ResumeSection";
import SkillsSection from "@/components/sections/SkillsSection";
import { pageVariables } from "@/lib/config/cssVariables";
import { englishContent } from "@/lib/content/en";
import type { SiteLanguage } from "@/lib/content/profile";
import { swedishContent } from "@/lib/content/sv";
import styles from "./page.module.css";

export default function Home() {
  const [language, setLanguage] = useState<SiteLanguage>("en");
  const content = language === "en" ? englishContent : swedishContent;

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function toggleLanguage() {
    setLanguage((currentLanguage) => (currentLanguage === "en" ? "sv" : "en"));
  }

  return (
    <>
      <DesktopHeader
        language={language}
        content={content}
        onToggleLanguage={toggleLanguage}
      />
      <MobileTopOverlay
        language={language}
        content={content}
        onToggleLanguage={toggleLanguage}
      />
      <MobileFooterOverlay content={content} />

      <main className={styles.sitePage} style={pageVariables}>
        <div className={styles.pageInner}>
          <div className={styles.sectionStack}>
            <AboutSection content={content} />
            <ResumeSection content={content} />
            <SkillsSection content={content} />
            <EducationSection content={content} />
            <ContactSection content={content} />
          </div>
        </div>
      </main>
    </>
  );
}
