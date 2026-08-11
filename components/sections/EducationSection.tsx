// components/sections/EducationSection.tsx

import type { EducationEntry, SiteContent } from "@/lib/content/profile";
import styles from "./sections.module.css";

type EducationSectionProps = {
  content: SiteContent;
};

function EducationPeriod({ entry }: { entry: EducationEntry }) {
  if (!entry.startDate || !entry.endDate) {
    return <p className={styles.educationPeriod}>{entry.period}</p>;
  }

  if (entry.startDate === entry.endDate) {
    return (
      <p className={styles.educationPeriod}>
        <time dateTime={entry.startDate}>{entry.period}</time>
      </p>
    );
  }

  const [startLabel, endLabel] = entry.period.split("–");

  return (
    <p className={styles.educationPeriod}>
      <time dateTime={entry.startDate}>{startLabel}</time>
      <span aria-hidden="true">–</span>
      <time dateTime={entry.endDate}>{endLabel}</time>
    </p>
  );
}

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
          <article
            key={`${entry.title}-${entry.period}`}
            className={styles.educationEntry}
            data-education-title={entry.title}
            data-start-date={entry.startDate}
            data-end-date={entry.endDate}
          >
            <div className={styles.educationEntryMeta}>
              <h3 className={styles.educationTitle}>{entry.title}</h3>
              <p className={styles.educationInstitution}>{entry.institution}</p>
              <EducationPeriod entry={entry} />
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
