// components/sections/ContactSection.tsx

import { Envelope, LinkedIn, Telephone } from "@/components/icons";
import {
  CONTACT_LINKEDIN_HREF,
  CONTACT_MAILTO_HREF,
  CONTACT_PHONE_HREF,
  type SiteContent,
} from "@/lib/content/profile";
import styles from "./sections.module.css";

type ContactSectionProps = {
  content: SiteContent;
};

export default function ContactSection({ content }: ContactSectionProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={`${styles.pageSection} ${styles.standardSection} ${styles.contactSection}`}
    >
      <h2 id="contact-heading" className={styles.sectionHeading}>
        {content.contact.heading}
      </h2>

      <div className={styles.contactDetails}>
        <div className={styles.contactRow}>
          <span className={styles.contactIcon} aria-hidden="true">
            <Envelope />
          </span>
          <a href={CONTACT_MAILTO_HREF} className={styles.contactLink}>
            {content.contact.emailDisplay}
          </a>
        </div>

        <div className={styles.contactRow}>
          <span className={styles.contactIcon} aria-hidden="true">
            <Telephone />
          </span>
          <a href={CONTACT_PHONE_HREF} className={styles.contactLink}>
            {content.contact.phoneDisplay}
          </a>
        </div>

        <div className={styles.contactRow}>
          <span className={styles.contactIcon} aria-hidden="true">
            <LinkedIn />
          </span>
          <a
            href={CONTACT_LINKEDIN_HREF}
            target="_blank"
            rel="noreferrer"
            className={styles.contactLink}
          >
            {content.contact.linkedInDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
