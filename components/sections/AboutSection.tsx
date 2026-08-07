// components/sections/AboutSection.tsx

import Image from "next/image";
import { Download } from "@/components/icons";
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

          <div className={styles.downloadBlock}>
            <div className={styles.downloadList}>
              {content.about.downloads.map((download) => (
                <div key={download.href} className={styles.downloadItem}>
                  <span className={styles.downloadLabel}>{download.label}</span>
                  <a
                    href={download.href}
                    download
                    className={styles.downloadIconLink}
                    aria-label={download.ariaLabel}
                  >
                    <span className={styles.downloadIconTab} aria-hidden="true">
                      <Download />
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
