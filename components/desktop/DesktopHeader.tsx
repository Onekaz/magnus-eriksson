// components/desktop/DesktopHeader.tsx

"use client";

import { useEffect, useState, type CSSProperties } from "react";
import {
  DESKTOP_HEADER_BRAND_STACK_GAP_PX,
  DESKTOP_HEADER_HEIGHT_PX,
  DESKTOP_HEADER_LANGUAGE_FLAG_BORDER_WIDTH_PX,
  DESKTOP_HEADER_LANGUAGE_FLAG_HEIGHT_PX,
  DESKTOP_HEADER_LANGUAGE_FLAG_INACTIVE_OPACITY,
  DESKTOP_HEADER_LANGUAGE_FLAGS_GAP_PX,
  DESKTOP_HEADER_LANGUAGE_FLAG_OFFSET_X_PX,
  DESKTOP_HEADER_LANGUAGE_FLAG_OFFSET_Y_PX,
  DESKTOP_HEADER_NAV_GAP_PX,
  DESKTOP_HEADER_NAV_OFFSET_X_PX,
  DESKTOP_HEADER_NAV_OFFSET_Y_PX,
  DESKTOP_HEADER_NAV_TEXT_SIZE_PX,
  DESKTOP_HEADER_NAV_TEXT_WEIGHT,
  DESKTOP_HEADER_NAV_UNDERLINE_HEIGHT_PX,
  DESKTOP_HEADER_NAV_UNDERLINE_OFFSET_TOP_PX,
  DESKTOP_HEADER_NAV_UNDERLINE_RADIUS_PX,
  DESKTOP_HEADER_NAV_UNDERLINE_WIDTH_PX,
  DESKTOP_HEADER_SUBTITLE_LINE_HEIGHT,
  DESKTOP_HEADER_SUBTITLE_OFFSET_X_PX,
  DESKTOP_HEADER_SUBTITLE_OFFSET_Y_PX,
  DESKTOP_HEADER_SUBTITLE_TEXT_SIZE_PX,
  DESKTOP_HEADER_SUBTITLE_TEXT_WEIGHT,
  DESKTOP_HEADER_WORDMARK_LINE_HEIGHT,
  DESKTOP_HEADER_WORDMARK_OFFSET_X_PX,
  DESKTOP_HEADER_WORDMARK_OFFSET_Y_PX,
  DESKTOP_HEADER_WORDMARK_TEXT_SIZE_PX,
  DESKTOP_HEADER_WORDMARK_TEXT_WEIGHT,
  DESKTOP_PAGE_HORIZONTAL_PADDING_PX,
  DESKTOP_PAGE_MAX_WIDTH_PX,
  DESKTOP_SECTION_SCROLL_MARGIN_TOP_PX,
} from "@/lib/config/desktop";
import { DESKTOP_NAVIGATION_TARGET_IDS } from "@/lib/content/navigation";
import { LANGUAGE_OPTIONS } from "@/lib/data/languages";
import type {
  NavigationTargetId,
  SiteContent,
  SiteLanguage,
} from "@/lib/content/profile";
import styles from "./DesktopHeader.module.css";

type HeaderVariables = CSSProperties & Record<`--${string}`, string>;

type DesktopHeaderProps = {
  language: SiteLanguage;
  content: SiteContent;
  onToggleLanguage: () => void;
};

const SCROLL_ACTIVATION_TOLERANCE_PX = 1;

const navUnderlineVariables: HeaderVariables = {
  "--desktop-header-nav-underline-width": `${DESKTOP_HEADER_NAV_UNDERLINE_WIDTH_PX}px`,
  "--desktop-header-nav-underline-height": `${DESKTOP_HEADER_NAV_UNDERLINE_HEIGHT_PX}px`,
  "--desktop-header-nav-underline-offset-top": `${DESKTOP_HEADER_NAV_UNDERLINE_OFFSET_TOP_PX}px`,
  "--desktop-header-nav-underline-radius": `${DESKTOP_HEADER_NAV_UNDERLINE_RADIUS_PX}px`,
};

function scrollToSection(targetId: NavigationTargetId) {
  document.getElementById(targetId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function getScrollingElement() {
  return document.scrollingElement ?? document.documentElement;
}

function getMaxScrollTop() {
  const scrollingElement = getScrollingElement();

  return Math.max(0, scrollingElement.scrollHeight - scrollingElement.clientHeight);
}

function getCurrentScrollTop() {
  return getScrollingElement().scrollTop;
}

function getClampedSectionTop(sectionElement: HTMLElement) {
  const maxScrollTop = getMaxScrollTop();
  const sectionTop = sectionElement.offsetTop - DESKTOP_SECTION_SCROLL_MARGIN_TOP_PX;

  return Math.min(Math.max(0, sectionTop), maxScrollTop);
}

function getActiveTargetId() {
  let activeTargetId: NavigationTargetId = "about";
  const currentScrollTop = getCurrentScrollTop();

  DESKTOP_NAVIGATION_TARGET_IDS.forEach((targetId) => {
    const sectionElement = document.getElementById(targetId);

    if (!sectionElement) {
      return;
    }

    const sectionTop = getClampedSectionTop(sectionElement);

    if (currentScrollTop >= sectionTop - SCROLL_ACTIVATION_TOLERANCE_PX) {
      activeTargetId = targetId;
    }
  });

  return activeTargetId;
}

export default function DesktopHeader({
  language,
  content,
  onToggleLanguage,
}: DesktopHeaderProps) {
  const [activeTargetId, setActiveTargetId] = useState<NavigationTargetId>("about");
  const englishLanguageOption =
    LANGUAGE_OPTIONS.find((option) => option.value === "English") ?? null;
  const swedishLanguageOption =
    LANGUAGE_OPTIONS.find((option) => option.value === "Swedish") ?? null;

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
        <div
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
              transform: `translate(${DESKTOP_HEADER_WORDMARK_OFFSET_X_PX}px, ${DESKTOP_HEADER_WORDMARK_OFFSET_Y_PX}px)`,
            }}
          >
            {content.header.name}
          </span>

          <span
            style={{
              color: "var(--color-muted)",
              fontSize: DESKTOP_HEADER_SUBTITLE_TEXT_SIZE_PX,
              fontWeight: DESKTOP_HEADER_SUBTITLE_TEXT_WEIGHT,
              lineHeight: DESKTOP_HEADER_SUBTITLE_LINE_HEIGHT,
              letterSpacing: "-0.01em",
              transform: `translate(${DESKTOP_HEADER_SUBTITLE_OFFSET_X_PX}px, ${DESKTOP_HEADER_SUBTITLE_OFFSET_Y_PX}px)`,
            }}
          >
            {content.header.desktopSubtitle}
          </span>
        </div>

        <nav
          aria-label={content.navigation.desktopAriaLabel}
          style={{
            ...navUnderlineVariables,
            display: "flex",
            alignItems: "center",
            gap: DESKTOP_HEADER_NAV_GAP_PX,
            transform: `translate(${DESKTOP_HEADER_NAV_OFFSET_X_PX}px, ${DESKTOP_HEADER_NAV_OFFSET_Y_PX}px)`,
          }}
        >
          {content.navigation.desktopItems.map((item) => {
            const isActive = activeTargetId === item.targetId;

            return (
              <div
                key={item.targetId}
                style={{
                  position: "relative",
                  display: "inline-flex",
                }}
              >
                {item.targetId === "contact" ? (
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      bottom: "100%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      gap: DESKTOP_HEADER_LANGUAGE_FLAGS_GAP_PX,
                      transform: `translate(${DESKTOP_HEADER_LANGUAGE_FLAG_OFFSET_X_PX}px, ${DESKTOP_HEADER_LANGUAGE_FLAG_OFFSET_Y_PX}px)`,
                    }}
                  >
                    {swedishLanguageOption?.flagUrl ? (
                      <button
                        type="button"
                        onClick={() => {
                          if (language !== "sv") {
                            onToggleLanguage();
                          }
                        }}
                        aria-label={content.header.swedishLanguageLabel}
                        title={content.header.swedishLanguageLabel}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "none",
                          background: "transparent",
                          padding: 0,
                          opacity:
                            language === "sv"
                              ? 1
                              : DESKTOP_HEADER_LANGUAGE_FLAG_INACTIVE_OPACITY,
                        }}
                      >
                        <img
                          src={swedishLanguageOption.flagUrl}
                          alt={content.header.swedishLanguageLabel}
                          style={{
                            width: DESKTOP_HEADER_LANGUAGE_FLAG_HEIGHT_PX * (8 / 5),
                            height: DESKTOP_HEADER_LANGUAGE_FLAG_HEIGHT_PX,
                            maxWidth: "none",
                            objectFit: "cover",
                            display: "block",
                            flexShrink: 0,
                            boxSizing: "content-box",
                            border: `${DESKTOP_HEADER_LANGUAGE_FLAG_BORDER_WIDTH_PX}px solid var(--color-border)`,
                          }}
                        />
                      </button>
                    ) : null}

                    {englishLanguageOption?.flagUrl ? (
                      <button
                        type="button"
                        onClick={() => {
                          if (language !== "en") {
                            onToggleLanguage();
                          }
                        }}
                        aria-label={content.header.englishLanguageLabel}
                        title={content.header.englishLanguageLabel}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "none",
                          background: "transparent",
                          padding: 0,
                          opacity:
                            language === "en"
                              ? 1
                              : DESKTOP_HEADER_LANGUAGE_FLAG_INACTIVE_OPACITY,
                        }}
                      >
                        <img
                          src={englishLanguageOption.flagUrl}
                          alt={content.header.englishLanguageLabel}
                          style={{
                            width: DESKTOP_HEADER_LANGUAGE_FLAG_HEIGHT_PX * (8.3 / 5),
                            height: DESKTOP_HEADER_LANGUAGE_FLAG_HEIGHT_PX,
                            maxWidth: "none",
                            objectFit: "cover",
                            display: "block",
                            flexShrink: 0,
                            boxSizing: "content-box",
                            border: `${DESKTOP_HEADER_LANGUAGE_FLAG_BORDER_WIDTH_PX}px solid var(--color-border)`,
                          }}
                        />
                      </button>
                    ) : null}
                  </div>
                ) : null}

                <button
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
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
