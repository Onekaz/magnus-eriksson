// components/sections/ResumeSection.tsx

import type { ResumeBlock, ResumeEntry, SiteContent } from "@/lib/content/profile";
import styles from "./sections.module.css";

type ResumeSectionProps = {
  content: SiteContent;
};

function ResumeDescription({ entry }: { entry: ResumeEntry }) {
  return (
    <div className={`${styles.mobileResumeDescription} ${styles.desktopResumeDescription}`}>
      <p>
        {entry.descriptionLead ? <em>{entry.descriptionLead}</em> : null}
        {entry.descriptionLead ? " " : null}
        {entry.achievementLabel ? (
          <span className={styles.resumeDescriptionLabel}>{entry.achievementLabel}</span>
        ) : null}
        {entry.achievementLabel ? " " : null}
        {entry.description}
      </p>
    </div>
  );
}

function ResumeEntryHeader({ entry }: { entry: ResumeEntry }) {
  return (
    <div className={styles.resumeEntryHeader}>
      <h3 className={styles.resumeRoleTitle}>{entry.role}</h3>
      <p className={styles.resumeMetaText}>{`${entry.company}, ${entry.location}`}</p>
      <p className={styles.resumeMetaText}>
        <time dateTime={entry.startDate}>{entry.start}</time>
        <span aria-hidden="true">-</span>
        <time dateTime={entry.endDate}>{entry.end}</time>
      </p>
    </div>
  );
}

function ResumeResponsibilities({ entry }: { entry: ResumeEntry }) {
  return (
    <p
      className={`${styles.mobileResumeResponsibilitiesInline} ${styles.desktopResumeResponsibilitiesInline}`}
    >
      {entry.responsibilities.map((responsibility, index) => (
        <span key={responsibility}>
          {index > 0 ? <span aria-hidden="true"> • </span> : null}
          {responsibility}
        </span>
      ))}
    </p>
  );
}

function ResumeEntry({ entry }: { entry: ResumeEntry }) {
  return (
    <article
      className={`${styles.mobileResumeEntry} ${styles.desktopResumeEntry}`}
      data-role={entry.role}
      data-company={entry.company}
      data-start-date={entry.startDate}
      data-end-date={entry.endDate}
    >
      {entry.showTimelineMarker ? (
        <span
          className={`${styles.mobileResumeTimelineMarker} ${styles.desktopResumeTimelineMarker}`}
          aria-hidden="true"
        />
      ) : null}

      <ResumeEntryHeader entry={entry} />

      <div className={styles.resumeEntryBody}>
        <ResumeResponsibilities entry={entry} />
        <ResumeDescription entry={entry} />
      </div>
    </article>
  );
}

function ResumeBlock({ block }: { block: ResumeBlock }) {
  if (block.type === "entry") {
    return <ResumeEntry entry={block.entry} />;
  }

  return (
    <div className={`${styles.mobileResumeTimelineGroup} ${styles.desktopResumeTimelineGroup}`}>
      <span
        className={`${styles.mobileResumeTimelineLine} ${styles.desktopResumeTimelineLine}`}
        aria-hidden="true"
      />
      {block.entries.map((entry) => (
        <ResumeEntry key={`${entry.role}-${entry.start}`} entry={entry} />
      ))}
    </div>
  );
}

export default function ResumeSection({ content }: ResumeSectionProps) {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className={`${styles.pageSection} ${styles.standardSection} ${styles.resumeSection}`}
    >
      <div className={styles.resumeContent}>
        <h2 id="resume-heading" className={styles.sectionHeading}>
          {content.resume.heading}
        </h2>

        <div className={`${styles.mobileResumeList} ${styles.desktopResumeList}`}>
          {content.resume.blocks.map((block, index) => (
            <ResumeBlock key={`resume-block-${index}`} block={block} />
          ))}
        </div>
      </div>
    </section>
  );
}
