// components/sections/EducationSection.tsx

import type { SiteContent } from "@/lib/content/profile";
import styles from "./sections.module.css";

type EducationSectionProps = {
  content: SiteContent;
};

export default function EducationSection({ content }: EducationSectionProps) {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className={`${styles.pageSection} ${styles.standardSection}`}
    >
      <h2 id="education-heading" className={styles.sectionHeading}>
        {content.education.heading}
      </h2>

      <div className={styles.educationList}>
        {content.education.entries.map((entry) => (
          <article key={`${entry.title}-${entry.period}`} className={styles.educationEntry}>
            <div className={styles.educationEntryMeta}>
              <h3 className={styles.educationTitle}>{entry.title}</h3>
              <p className={styles.educationInstitution}>{entry.institution}</p>
              <p className={styles.educationPeriod}>{entry.period}</p>
            </div>

            {entry.theses ? (
              <div className={styles.educationThesisList}>
                {entry.theses.map((thesis) => (
                  <div key={`${entry.title}-${thesis.label}`} className={styles.educationThesisItem}>
                    <p className={styles.educationThesisLabel}>{thesis.label}</p>
                    <p className={styles.educationThesisTitle}>{thesis.title}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
