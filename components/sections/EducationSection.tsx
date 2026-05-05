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
          <article key={entry.year} className={styles.educationEntry}>
            <div className={styles.educationYear}>{entry.year}</div>
            <div className={styles.educationDetails}>
              {entry.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}