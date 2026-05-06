// components/sections/EducationSection.tsx

import { educationEntries } from "@/lib/content/profile";
import styles from "./sections.module.css";

export default function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className={`${styles.pageSection} ${styles.standardSection}`}
    >
      <h2 id="education-heading" className={styles.sectionHeading}>
        Education
      </h2>

      <div className={styles.educationList}>
        {educationEntries.map((entry) => (
          <article key={`${entry.title}-${entry.period}`} className={styles.educationEntry}>
            <h3 className={styles.educationTitle}>{entry.title}</h3>
            <p className={styles.educationInstitution}>{entry.institution}</p>
            <p className={styles.educationPeriod}>{entry.period}</p>
          </article>
        ))}
      </div>
    </section>
  );
}