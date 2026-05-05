// components/sections/ContactSection.tsx

import { Envelope } from "@/components/icons";
import { CONTACT_EMAIL, CONTACT_MAILTO_HREF } from "@/lib/content/profile";
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

      <div className={styles.contactRow}>
        <span className={styles.contactIcon} aria-hidden="true">
          <Envelope />
        </span>
        <a href={CONTACT_MAILTO_HREF} className={styles.contactLink}>
          {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  );
}