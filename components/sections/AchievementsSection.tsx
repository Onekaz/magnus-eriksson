// components/sections/AchievementsSection.tsx

import type { SiteContent } from "@/lib/content/profile";
import styles from "./sections.module.css";

type AchievementsSectionProps = {
  content: SiteContent;
};

export default function AchievementsSection({ content }: AchievementsSectionProps) {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className={`${styles.pageSection} ${styles.standardSection}`}
    >
      <h2 id="achievements-heading" className={styles.sectionHeading}>
        {content.achievements.heading}
      </h2>

      <div className={styles.achievementsGrid}>
        {content.achievements.items.map((item) => (
          <article key={item.headline} className={styles.achievementCard}>
            <h3
              className={`${styles.achievementHeadline} ${item.metric ? styles.achievementMetric : ""}`}
            >
              {item.headline}
            </h3>
            <p className={styles.achievementTitle}>{item.title}</p>
            <p className={styles.achievementDescription}>{item.description}</p>
            <p className={styles.achievementCompany}>{item.company}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
