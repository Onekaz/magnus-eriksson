// components/sections/SkillsSection.tsx

import { skillGroups } from "@/lib/content/profile";
import styles from "./sections.module.css";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className={`${styles.pageSection} ${styles.standardSection}`}
    >
      <h2 id="skills-heading" className={styles.sectionHeading}>
        Skills
      </h2>

      <div className={styles.skillsGrid}>
        {skillGroups.map((group) => (
          <article key={group.title} className={styles.skillsCard}>
            <h3 className={styles.skillsCardTitle}>{group.title}</h3>

            <div className={styles.skillsPillList}>
              {group.skills.map((skill) => (
                <span key={skill} className={styles.skillsPill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}