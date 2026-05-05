// components/desktop/DesktopHeader.tsx

"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { desktopNavigationItems } from "@/lib/content/navigation";
import {
  DESKTOP_HEADER_BRAND_STACK_GAP_PX,
  DESKTOP_HEADER_HEIGHT_PX,
  DESKTOP_HEADER_NAV_GAP_PX,
  DESKTOP_HEADER_NAV_OFFSET_X_PX,
  DESKTOP_HEADER_NAV_TEXT_SIZE_PX,
  DESKTOP_HEADER_NAV_TEXT_WEIGHT,
  DESKTOP_HEADER_NAV_UNDERLINE_HEIGHT_PX,
  DESKTOP_HEADER_NAV_UNDERLINE_OFFSET_TOP_PX,
  DESKTOP_HEADER_NAV_UNDERLINE_RADIUS_PX,
  DESKTOP_HEADER_NAV_UNDERLINE_WIDTH_PX,
  DESKTOP_HEADER_SUBTITLE_LINE_HEIGHT,
  DESKTOP_HEADER_SUBTITLE_TEXT_SIZE_PX,
  DESKTOP_HEADER_SUBTITLE_TEXT_WEIGHT,
  DESKTOP_HEADER_WORDMARK_LINE_HEIGHT,
  DESKTOP_HEADER_WORDMARK_TEXT_SIZE_PX,
  DESKTOP_HEADER_WORDMARK_TEXT_WEIGHT,
  DESKTOP_PAGE_HORIZONTAL_PADDING_PX,
  DESKTOP_PAGE_MAX_WIDTH_PX,
  DESKTOP_SECTION_SCROLL_MARGIN_TOP_PX,
} from "@/lib/config/desktop";
import styles from "./DesktopHeader.module.css";

type HeaderVariables = CSSProperties & Record<`--${string}`, string>;
type DesktopTargetId = (typeof desktopNavigationItems)[number]["targetId"];

const navUnderlineVariables: HeaderVariables = {
  "--desktop-header-nav-underline-width": `${DESKTOP_HEADER_NAV_UNDERLINE_WIDTH_PX}px`,
  "--desktop-header-nav-underline-height": `${DESKTOP_HEADER_NAV_UNDERLINE_HEIGHT_PX}px`,
  "--desktop-header-nav-underline-offset-top": `${DESKTOP_HEADER_NAV_UNDERLINE_OFFSET_TOP_PX}px`,
  "--desktop-header-nav-underline-radius": `${DESKTOP_HEADER_NAV_UNDERLINE_RADIUS_PX}px`,
};

function scrollToSection(targetId: DesktopTargetId) {
  document.getElementById(targetId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function getActiveTargetId() {
  let activeTargetId: DesktopTargetId = desktopNavigationItems[0]?.targetId ?? "about";

  desktopNavigationItems.forEach((item) => {
    const sectionElement = document.getElementById(item.targetId);

    if (!sectionElement) {
      return;
    }

    const sectionTop = sectionElement.offsetTop - DESKTOP_SECTION_SCROLL_MARGIN_TOP_PX;

    if (window.scrollY >= sectionTop) {
      activeTargetId = item.targetId;
    }
  });

  return activeTargetId;
}

export default function DesktopHeader() {
  const [activeTargetId, setActiveTargetId] = useState<DesktopTargetId>("about");

  useEffect(() => {
    setActiveTargetId(getActiveTargetId());

    function handleScroll() {
      setActiveTargetId(getActiveTargetId());
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="desktop-only"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
        width: "100%",
        backgroundColor: "var(--color-canvas)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          display: "flex",
          height: DESKTOP_HEADER_HEIGHT_PX,
          maxWidth: DESKTOP_PAGE_MAX_WIDTH_PX,
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: "auto",
          marginLeft: "auto",
          paddingRight: DESKTOP_PAGE_HORIZONTAL_PADDING_PX,
          paddingLeft: DESKTOP_PAGE_HORIZONTAL_PADDING_PX,
        }}
      >
        <button
          type="button"
          onClick={() => {
            setActiveTargetId("about");
            scrollToSection("about");
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: DESKTOP_HEADER_BRAND_STACK_GAP_PX,
            color: "var(--color-primary)",
          }}
        >
          <span
            style={{
              fontSize: DESKTOP_HEADER_WORDMARK_TEXT_SIZE_PX,
              fontWeight: DESKTOP_HEADER_WORDMARK_TEXT_WEIGHT,
              lineHeight: DESKTOP_HEADER_WORDMARK_LINE_HEIGHT,
              letterSpacing: "-0.02em",
            }}
          >
            Magnus Eriksson
          </span>

          <span
            style={{
              color: "var(--color-dark-muted)",
              fontSize: DESKTOP_HEADER_SUBTITLE_TEXT_SIZE_PX,
              fontWeight: DESKTOP_HEADER_SUBTITLE_TEXT_WEIGHT,
              lineHeight: DESKTOP_HEADER_SUBTITLE_LINE_HEIGHT,
              letterSpacing: "-0.01em",
            }}
          >
            Action-oriented&nbsp;&nbsp;|&nbsp;&nbsp;Pragmatic&nbsp;&nbsp;|&nbsp;&nbsp;Structured&nbsp;&nbsp;|&nbsp;&nbsp;Communicative&nbsp;&nbsp;|&nbsp;&nbsp;Change-oriented
          </span>
        </button>

        <nav
          aria-label="Primary navigation"
          style={{
            ...navUnderlineVariables,
            display: "flex",
            alignItems: "center",
            gap: DESKTOP_HEADER_NAV_GAP_PX,
            transform: `translateX(${DESKTOP_HEADER_NAV_OFFSET_X_PX}px)`,
          }}
        >
          {desktopNavigationItems.map((item) => {
            const isActive = activeTargetId === item.targetId;

            return (
              <button
                key={item.targetId}
                type="button"
                onClick={() => {
                  setActiveTargetId(item.targetId);
                  scrollToSection(item.targetId);
                }}
                aria-current={isActive ? "page" : undefined}
                className={`${styles.navButton} ${isActive ? styles.navButtonActive : ""}`}
                style={{
                  color: "var(--color-primary)",
                  fontSize: DESKTOP_HEADER_NAV_TEXT_SIZE_PX,
                  fontWeight: DESKTOP_HEADER_NAV_TEXT_WEIGHT,
                  lineHeight: 1,
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}