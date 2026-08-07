// components/mobile/MobileTopOverlay.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import {
  MOBILE_OVERLAY_SCROLL_DIRECTION_THRESHOLD_PX,
  MOBILE_TOP_OVERLAY_BRAND_STACK_GAP_PX,
  MOBILE_TOP_OVERLAY_HEIGHT_PX,
  MOBILE_TOP_OVERLAY_HORIZONTAL_PADDING_PX,
  MOBILE_TOP_OVERLAY_LANGUAGE_FLAG_BORDER_WIDTH_PX,
  MOBILE_TOP_OVERLAY_LANGUAGE_FLAG_HEIGHT_PX,
  MOBILE_TOP_OVERLAY_LANGUAGE_FLAG_OFFSET_X_PX,
  MOBILE_TOP_OVERLAY_LANGUAGE_FLAG_OFFSET_Y_PX,
  MOBILE_TOP_OVERLAY_SUBTITLE_LINE_HEIGHT,
  MOBILE_TOP_OVERLAY_SUBTITLE_TEXT_SIZE_PX,
  MOBILE_TOP_OVERLAY_SUBTITLE_TEXT_WEIGHT,
  MOBILE_TOP_OVERLAY_WORDMARK_LINE_HEIGHT,
  MOBILE_TOP_OVERLAY_WORDMARK_TEXT_SIZE_PX,
  MOBILE_TOP_OVERLAY_WORDMARK_TEXT_WEIGHT,
} from "@/lib/config/mobile";
import type { SiteContent, SiteLanguage } from "@/lib/content/profile";
import { LANGUAGE_OPTIONS } from "@/lib/data/languages";

type MobileTopOverlayProps = {
  language: SiteLanguage;
  content: SiteContent;
  onToggleLanguage: () => void;
};

export default function MobileTopOverlay({
  language,
  content,
  onToggleLanguage,
}: MobileTopOverlayProps) {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const activeLanguageOption =
    LANGUAGE_OPTIONS.find(
      (option) => option.value === (language === "en" ? "English" : "Swedish"),
    ) ?? null;

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      if (currentScrollY <= 0) {
        setIsHidden(false);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      if (scrollDelta > MOBILE_OVERLAY_SCROLL_DIRECTION_THRESHOLD_PX) {
        setIsHidden(true);
      }

      if (scrollDelta < -MOBILE_OVERLAY_SCROLL_DIRECTION_THRESHOLD_PX) {
        setIsHidden(false);
      }

      lastScrollYRef.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="mobile-only"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
        width: "100%",
        backgroundColor: "var(--color-canvas)",
        backdropFilter: "blur(8px)",
        opacity: isHidden ? 0 : 1,
        pointerEvents: isHidden ? "none" : "auto",
        transform: isHidden ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 220ms ease, opacity 220ms ease",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          height: MOBILE_TOP_OVERLAY_HEIGHT_PX,
          alignItems: "center",
          justifyContent: "flex-start",
          paddingRight: MOBILE_TOP_OVERLAY_HORIZONTAL_PADDING_PX,
          paddingLeft: MOBILE_TOP_OVERLAY_HORIZONTAL_PADDING_PX,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: MOBILE_TOP_OVERLAY_BRAND_STACK_GAP_PX,
            color: "var(--color-primary)",
            textAlign: "left",
          }}
        >
          <span
            style={{
              fontSize: MOBILE_TOP_OVERLAY_WORDMARK_TEXT_SIZE_PX,
              fontWeight: MOBILE_TOP_OVERLAY_WORDMARK_TEXT_WEIGHT,
              lineHeight: MOBILE_TOP_OVERLAY_WORDMARK_LINE_HEIGHT,
              letterSpacing: "-0.02em",
            }}
          >
            {content.header.name}
          </span>

          <span
            style={{
              color: "var(--color-muted)",
              fontSize: MOBILE_TOP_OVERLAY_SUBTITLE_TEXT_SIZE_PX,
              fontWeight: MOBILE_TOP_OVERLAY_SUBTITLE_TEXT_WEIGHT,
              lineHeight: MOBILE_TOP_OVERLAY_SUBTITLE_LINE_HEIGHT,
              letterSpacing: "-0.01em",
            }}
          >
            {content.header.mobileSubtitle}
          </span>
        </div>

        <button
          type="button"
          onClick={onToggleLanguage}
          aria-label={content.header.languageButtonAriaLabel}
          style={{
            position: "absolute",
            top: 0,
            right: MOBILE_TOP_OVERLAY_HORIZONTAL_PADDING_PX,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            background: "transparent",
            padding: 0,
            transform: `translate(${MOBILE_TOP_OVERLAY_LANGUAGE_FLAG_OFFSET_X_PX}px, ${MOBILE_TOP_OVERLAY_LANGUAGE_FLAG_OFFSET_Y_PX}px)`,
          }}
        >
          {activeLanguageOption?.flagUrl ? (
            <img
              src={activeLanguageOption.flagUrl}
              alt={content.header.languageLabel}
              style={{
                height: MOBILE_TOP_OVERLAY_LANGUAGE_FLAG_HEIGHT_PX,
                maxWidth: "none",
                display: "block",
                flexShrink: 0,
                boxSizing: "content-box",
                border: `${MOBILE_TOP_OVERLAY_LANGUAGE_FLAG_BORDER_WIDTH_PX}px solid var(--color-border)`,
              }}
            />
          ) : null}
        </button>
      </div>
    </header>
  );
}
