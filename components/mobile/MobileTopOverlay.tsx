// components/mobile/MobileTopOverlay.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import {
  MOBILE_OVERLAY_SCROLL_DIRECTION_THRESHOLD_PX,
  MOBILE_TOP_OVERLAY_BRAND_STACK_GAP_PX,
  MOBILE_TOP_OVERLAY_HEIGHT_PX,
  MOBILE_TOP_OVERLAY_HORIZONTAL_PADDING_PX,
  MOBILE_TOP_OVERLAY_SUBTITLE_LINE_HEIGHT,
  MOBILE_TOP_OVERLAY_SUBTITLE_TEXT_SIZE_PX,
  MOBILE_TOP_OVERLAY_SUBTITLE_TEXT_WEIGHT,
  MOBILE_TOP_OVERLAY_WORDMARK_LINE_HEIGHT,
  MOBILE_TOP_OVERLAY_WORDMARK_TEXT_SIZE_PX,
  MOBILE_TOP_OVERLAY_WORDMARK_TEXT_WEIGHT,
} from "@/lib/config/mobile";

function scrollToTop() {
  document.getElementById("about")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function MobileTopOverlay() {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollYRef = useRef(0);

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
          display: "flex",
          height: MOBILE_TOP_OVERLAY_HEIGHT_PX,
          alignItems: "center",
          justifyContent: "flex-start",
          paddingRight: MOBILE_TOP_OVERLAY_HORIZONTAL_PADDING_PX,
          paddingLeft: MOBILE_TOP_OVERLAY_HORIZONTAL_PADDING_PX,
        }}
      >
        <button
          type="button"
          onClick={scrollToTop}
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
            Magnus Eriksson
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
            Action-oriented • Pragmatic • Structured • Communicative • Change-oriented
          </span>
        </button>
      </div>
    </header>
  );
}