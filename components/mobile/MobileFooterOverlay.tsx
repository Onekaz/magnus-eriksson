// components/mobile/MobileFooterOverlay.tsx

"use client";

import { useEffect, useRef, useState, type ComponentType, type CSSProperties } from "react";
import { Envelope, Graduation, Lightbulb, List, Profile } from "@/components/icons";
import { mobileNavigationItems } from "@/lib/content/navigation";
import {
  MOBILE_BOTTOM_NAV_HEIGHT_PX,
  MOBILE_BOTTOM_NAV_ICON_SIZE_PX,
  MOBILE_BOTTOM_NAV_ITEM_GAP_PX,
  MOBILE_BOTTOM_NAV_LABEL_LINE_HEIGHT_PX,
  MOBILE_BOTTOM_NAV_LABEL_TEXT_SIZE_PX,
  MOBILE_BOTTOM_NAV_LABEL_TEXT_WEIGHT,
  MOBILE_BOTTOM_NAV_OVERLINE_HEIGHT_PX,
  MOBILE_BOTTOM_NAV_OVERLINE_WIDTH_PX,
  MOBILE_BOTTOM_NAV_PADDING_BOTTOM_PX,
  MOBILE_BOTTOM_NAV_PADDING_TOP_PX,
  MOBILE_BOTTOM_NAV_SIDE_PADDING_PX,
  MOBILE_SECTION_SCROLL_MARGIN_TOP_PX,
} from "@/lib/config/mobile";

type MobileNavigationIcon = "profile" | "list" | "lightbulb" | "graduation" | "envelope";

const iconComponents: Record<MobileNavigationIcon, ComponentType<{ size?: number }>> = {
  profile: Profile,
  list: List,
  lightbulb: Lightbulb,
  graduation: Graduation,
  envelope: Envelope,
};

const SCROLL_DIRECTION_THRESHOLD_PX = 8;

function scrollToSection(targetId: string) {
  document.getElementById(targetId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function getActiveTargetId() {
  let activeTargetId = "about";

  mobileNavigationItems.forEach((item) => {
    if (!("targetId" in item)) {
      return;
    }

    const sectionElement = document.getElementById(item.targetId);

    if (!sectionElement) {
      return;
    }

    const sectionTop = sectionElement.offsetTop - MOBILE_SECTION_SCROLL_MARGIN_TOP_PX;

    if (window.scrollY >= sectionTop) {
      activeTargetId = item.targetId;
    }
  });

  return activeTargetId;
}

export default function MobileFooterOverlay() {
  const [isTransparent, setIsTransparent] = useState(false);
  const [activeTargetId, setActiveTargetId] = useState("about");
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;
    setActiveTargetId(getActiveTargetId());

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      setActiveTargetId(getActiveTargetId());

      if (currentScrollY <= 0) {
        setIsTransparent(false);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      if (scrollDelta > SCROLL_DIRECTION_THRESHOLD_PX) {
        setIsTransparent(true);
      }

      if (scrollDelta < -SCROLL_DIRECTION_THRESHOLD_PX) {
        setIsTransparent(false);
      }

      lastScrollYRef.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      className="mobile-only"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 50,
        width: "100%",
        backgroundColor: isTransparent ? "transparent" : "var(--color-canvas)",
        backdropFilter: isTransparent ? "none" : "blur(8px)",
        transition: "background-color 220ms ease, backdrop-filter 220ms ease",
      }}
    >
      <nav
        aria-label="Mobile navigation"
        style={{
          display: "flex",
          height: MOBILE_BOTTOM_NAV_HEIGHT_PX,
          alignItems: "stretch",
          justifyContent: "space-between",
          paddingTop: MOBILE_BOTTOM_NAV_PADDING_TOP_PX,
          paddingRight: MOBILE_BOTTOM_NAV_SIDE_PADDING_PX,
          paddingBottom: MOBILE_BOTTOM_NAV_PADDING_BOTTOM_PX,
          paddingLeft: MOBILE_BOTTOM_NAV_SIDE_PADDING_PX,
        }}
      >
        {mobileNavigationItems.map((item) => {
          const isSectionLink = "targetId" in item;
          const isActive = isSectionLink ? activeTargetId === item.targetId : false;
          const Icon = iconComponents[item.icon];
          const itemKey = isSectionLink ? item.targetId : item.href;
          const itemStyle: CSSProperties = {
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: MOBILE_BOTTOM_NAV_ITEM_GAP_PX,
            color: isActive ? "var(--color-primary)" : "var(--color-muted)",
          };
          const itemContent = (
            <>
              <span
                aria-hidden="true"
                style={{
                  width: MOBILE_BOTTOM_NAV_OVERLINE_WIDTH_PX,
                  height: MOBILE_BOTTOM_NAV_OVERLINE_HEIGHT_PX,
                  borderRadius: 9999,
                  backgroundColor: isActive ? "var(--color-primary)" : "transparent",
                }}
              />

              <Icon size={MOBILE_BOTTOM_NAV_ICON_SIZE_PX} />

              <span
                style={{
                  fontSize: MOBILE_BOTTOM_NAV_LABEL_TEXT_SIZE_PX,
                  fontWeight: MOBILE_BOTTOM_NAV_LABEL_TEXT_WEIGHT,
                  lineHeight: `${MOBILE_BOTTOM_NAV_LABEL_LINE_HEIGHT_PX}px`,
                  letterSpacing: "-0.01em",
                }}
              >
                {item.label}
              </span>
            </>
          );

          if (!isSectionLink) {
            return (
              <a key={itemKey} href={item.href} aria-label={item.label} style={itemStyle}>
                {itemContent}
              </a>
            );
          }

          return (
            <button
              key={itemKey}
              type="button"
              onClick={() => scrollToSection(item.targetId)}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              style={itemStyle}
            >
              {itemContent}
            </button>
          );
        })}
      </nav>
    </footer>
  );
}