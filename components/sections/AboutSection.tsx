// components/sections/AboutSection.tsx

import Image from "next/image";
import type { SiteContent } from "@/lib/content/profile";
import styles from "./sections.module.css";

type AboutSectionProps = {
  content: SiteContent;
};

export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={`${styles.pageSection} ${styles.aboutSection}`}
    >
      <div className={styles.aboutLayout}>
        <div className={styles.aboutImageFrame}>
          <Image
            src="/images/profile.jpg"
            alt={content.about.imageAlt}
            fill
            priority
            unoptimized
            sizes="(min-width: 768px) 300px, 210px"
            className={styles.aboutImage}
          />
        </div>

        <div className={styles.aboutTextColumn}>
          <h1 id="about-heading" className={styles.heroHeading}>
            {content.about.heading}
          </h1>

          {content.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.bodyText}>
              {paragraph}
            </p>
          ))}

        </div>
      </div>
    </section>
  );
}
