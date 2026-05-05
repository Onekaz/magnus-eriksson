// app/page.tsx

import DesktopHeader from "@/components/desktop/DesktopHeader";
import MobileFooterOverlay from "@/components/mobile/MobileFooterOverlay";
import MobileTopOverlay from "@/components/mobile/MobileTopOverlay";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import EducationSection from "@/components/sections/EducationSection";
import ResumeSection from "@/components/sections/ResumeSection";
import SkillsSection from "@/components/sections/SkillsSection";
import { pageVariables } from "@/lib/config/cssVariables";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <DesktopHeader />
      <MobileTopOverlay />
      <MobileFooterOverlay />

      <main className={styles.sitePage} style={pageVariables}>
        <div className={styles.pageInner}>
          <div className={styles.sectionStack}>
            <AboutSection />
            <ResumeSection />
            <SkillsSection />
            <EducationSection />
            <ContactSection />
          </div>
        </div>
      </main>
    </>
  );
}