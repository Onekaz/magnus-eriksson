// components/sections/ResumeSection.tsx

import { resumeBlocks, type ResumeBlock, type ResumeEntry } from "@/lib/content/profile";
import styles from "./sections.module.css";

function ResumeDescription({ entry, variant }: { entry: ResumeEntry; variant: "desktop" | "mobile" }) {
  const className =
    variant === "desktop" ? styles.desktopResumeDescription : styles.mobileResumeDescription;

  return (
    <div className={className}>
      <span className={styles.resumeDescriptionLabel}>Description:</span>
      <p>
        {entry.descriptionLead ? <em>{entry.descriptionLead}</em> : null}
        {entry.descriptionLead ? " " : null}
        {entry.description}
      </p>
    </div>
  );
}

function DesktopResumeEntry({ entry }: { entry: ResumeEntry }) {
  return (
    <article className={styles.desktopResumeEntry}>
      {entry.showTimelineMarker ? (
        <span className={styles.desktopResumeTimelineMarker} aria-hidden="true" />
      ) : null}

      <p className={styles.resumeRoleTitle}>{entry.role}</p>

      <div className={styles.desktopResumeEntryTop}>
        <div className={styles.desktopResumeMetaColumn}>
          <dl className={styles.desktopResumeMetaList}>
            <div className={styles.desktopResumeMetaRow}>
              <dt>Company:</dt>
              <dd>{entry.company}</dd>
            </div>

            <div className={styles.desktopResumeMetaRow}>
              <dt>Location:</dt>
              <dd>{entry.location}</dd>
            </div>

            <div className={styles.desktopResumeMetaRow}>
              <dt>Start:</dt>
              <dd>{entry.start}</dd>
            </div>

            <div className={styles.desktopResumeMetaRow}>
              <dt>End:</dt>
              <dd>{entry.end}</dd>
            </div>
          </dl>
        </div>

        <div className={styles.desktopResumeResponsibilities}>
          <p>Key Responsibilities:</p>
          <ul>
            {entry.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>

      <ResumeDescription entry={entry} variant="desktop" />
    </article>
  );
}

function MobileResumeEntry({ entry }: { entry: ResumeEntry }) {
  return (
    <article className={styles.mobileResumeEntry}>
      {entry.showTimelineMarker ? (
        <span className={styles.mobileResumeTimelineMarker} aria-hidden="true" />
      ) : null}

      <p className={styles.resumeRoleTitle}>{entry.role}</p>

      <div className={styles.mobileResumeMetaColumn}>
        <dl className={styles.mobileResumeMetaList}>
          <div className={styles.mobileResumeMetaRow}>
            <dt>Company:</dt>
            <dd>{entry.company}</dd>
          </div>

          <div className={styles.mobileResumeMetaRow}>
            <dt>Location:</dt>
            <dd>{entry.location}</dd>
          </div>

          <div className={styles.mobileResumeMetaRow}>
            <dt>Start:</dt>
            <dd>{entry.start}</dd>
          </div>

          <div className={styles.mobileResumeMetaRow}>
            <dt>End:</dt>
            <dd>{entry.end}</dd>
          </div>
        </dl>
      </div>

      <div className={styles.mobileResumeResponsibilities}>
        <p>Key Responsibilities:</p>
        <ul>
          {entry.responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </div>

      <ResumeDescription entry={entry} variant="mobile" />
    </article>
  );
}

function DesktopResumeBlock({ block }: { block: ResumeBlock }) {
  if (block.type === "entry") {
    return <DesktopResumeEntry entry={block.entry} />;
  }

  return (
    <div className={styles.desktopResumeTimelineGroup}>
      <span className={styles.desktopResumeTimelineLine} aria-hidden="true" />
      {block.entries.map((entry) => (
        <DesktopResumeEntry key={`${entry.role}-${entry.start}`} entry={entry} />
      ))}
    </div>
  );
}

function MobileResumeBlock({ block }: { block: ResumeBlock }) {
  if (block.type === "entry") {
    return <MobileResumeEntry entry={block.entry} />;
  }

  return (
    <div className={styles.mobileResumeTimelineGroup}>
      <span className={styles.mobileResumeTimelineLine} aria-hidden="true" />
      {block.entries.map((entry) => (
        <MobileResumeEntry key={`${entry.role}-${entry.start}`} entry={entry} />
      ))}
    </div>
  );
}

export default function ResumeSection() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className={`${styles.pageSection} ${styles.standardSection} ${styles.resumeSection}`}
    >
      <div className={styles.resumeContent}>
        <h2 id="resume-heading" className={styles.sectionHeading}>
          Resume
        </h2>

        <div className={styles.desktopResumeList}>
          {resumeBlocks.map((block, index) => (
            <DesktopResumeBlock key={`desktop-resume-block-${index}`} block={block} />
          ))}
        </div>

        <div className={styles.mobileResumeList}>
          {resumeBlocks.map((block, index) => (
            <MobileResumeBlock key={`mobile-resume-block-${index}`} block={block} />
          ))}
        </div>
      </div>
    </section>
  );
}