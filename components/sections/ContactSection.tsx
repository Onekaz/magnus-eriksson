// components/sections/ContactSection.tsx

import { Envelope, Telephone } from "@/components/icons";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO_HREF,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
} from "@/lib/content/profile";
import styles from "./sections.module.css";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={`${styles.pageSection} ${styles.standardSection} ${styles.contactSection}`}
    >
      <h2 id="contact-heading" className={styles.sectionHeading}>
        Contact
      </h2>

      <div className={styles.contactDetails}>
        <div className={styles.contactRow}>
          <span className={styles.contactIcon} aria-hidden="true">
            <Envelope />
          </span>
          <a href={CONTACT_MAILTO_HREF} className={styles.contactLink}>
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className={styles.contactRow}>
          <span className={styles.contactIcon} aria-hidden="true">
            <Telephone />
          </span>
          <a href={CONTACT_PHONE_HREF} className={styles.contactLink}>
            {CONTACT_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}