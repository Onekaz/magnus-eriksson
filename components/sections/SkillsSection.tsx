// components/sections/SkillsSection.tsx

import type { SiteContent } from "@/lib/content/profile";
import styles from "./sections.module.css";

type SkillsSectionProps = {
  content: SiteContent;
};

export default function SkillsSection({ content }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className={`${styles.pageSection} ${styles.standardSection}`}
    >
      <h2 id="skills-heading" className={styles.sectionHeading}>
        {content.skills.heading}
      </h2>

      <div className={styles.skillsGrid}>
        {content.skills.groups.map((group) => (
          <article key={group.title} className={styles.skillsCard}>
            <h3 className={styles.skillsCardTitle}>{group.title}</h3>

            <ul className={styles.skillsPillList}>
              {group.skills.map((skill) => (
                <li key={skill} className={styles.skillsPill} data-skill={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
