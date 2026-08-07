// components/mobile/MobileFooterOverlay.tsx

"use client";

import { useEffect, useRef, useState, type ComponentType, type CSSProperties } from "react";
import { Envelope, Graduation, Lightbulb, List, Profile } from "@/components/icons";
import MobileContactBottomSheet from "@/components/mobile/bottom-sheet/MobileContactBottomSheet";
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
  MOBILE_OVERLAY_SCROLL_DIRECTION_THRESHOLD_PX,
  MOBILE_SECTION_SCROLL_MARGIN_TOP_PX,
} from "@/lib/config/mobile";
import { MOBILE_NAVIGATION_TARGET_IDS } from "@/lib/content/navigation";
import type { MobileNavigationIcon, SiteContent } from "@/lib/content/profile";

type MobileFooterOverlayProps = {
  content: SiteContent;
};

const SCROLL_ACTIVATION_TOLERANCE_PX = 1;

const iconComponents: Record<MobileNavigationIcon, ComponentType<{ size?: number }>> = {
  profile: Profile,
  list: List,
  lightbulb: Lightbulb,
  graduation: Graduation,
  envelope: Envelope,
};

function scrollToSection(targetId: string) {
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
  const sectionTop = sectionElement.offsetTop - MOBILE_SECTION_SCROLL_MARGIN_TOP_PX;

  return Math.min(Math.max(0, sectionTop), maxScrollTop);
}

function getActiveTargetId() {
  let activeTargetId = "about";
  const currentScrollTop = getCurrentScrollTop();

  MOBILE_NAVIGATION_TARGET_IDS.forEach((targetId) => {
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

export default function MobileFooterOverlay({ content }: MobileFooterOverlayProps) {
  const [isTransparent, setIsTransparent] = useState(false);
  const [activeTargetId, setActiveTargetId] = useState("about");
  const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);
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

      if (scrollDelta > MOBILE_OVERLAY_SCROLL_DIRECTION_THRESHOLD_PX) {
        setIsTransparent(true);
      }

      if (scrollDelta < -MOBILE_OVERLAY_SCROLL_DIRECTION_THRESHOLD_PX) {
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
    <>
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
          aria-label={content.navigation.mobileAriaLabel}
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
          {content.navigation.mobileItems.map((item) => {
            const isSectionLink = "targetId" in item;
            const isActive = isSectionLink ? activeTargetId === item.targetId : false;
            const Icon = iconComponents[item.icon];
            const itemKey = isSectionLink ? item.targetId : item.action;
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
                <button
                  key={itemKey}
                  type="button"
                  onClick={() => setIsContactSheetOpen(true)}
                  aria-label={item.label}
                  aria-expanded={isContactSheetOpen}
                  style={itemStyle}
                >
                  {itemContent}
                </button>
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

      <MobileContactBottomSheet
        isOpen={isContactSheetOpen}
        onClose={() => setIsContactSheetOpen(false)}
        content={content}
      />
    </>
  );
}
