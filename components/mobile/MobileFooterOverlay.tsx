// components/mobile/MobileFooterOverlay.tsx

"use client";

import { useEffect, useState, type ComponentType, type CSSProperties } from "react";
import { Achievements, Envelope, Graduation, Lightbulb, List, Profile } from "@/components/icons";
import chatStyles from "@/components/chat/chat.module.css";
import MobileContactBottomSheet from "@/components/mobile/bottom-sheet/MobileContactBottomSheet";
import {
  MOBILE_BOTTOM_NAV_HEIGHT_PX,
  MOBILE_CHAT_TRIGGER_BOTTOM_GAP_PX,
  MOBILE_CHAT_TRIGGER_ICON_SIZE_PX,
  MOBILE_CHAT_TRIGGER_SIZE_PX,
  MOBILE_PAGE_HORIZONTAL_PADDING_PX,
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
  MOBILE_TOP_OVERLAY_HEIGHT_PX,
  MOBILE_SECTION_NAVIGATION_HEADING_GAP_PX,
  MOBILE_SECTION_NAVIGATION_EVENT,
  MOBILE_OVERLAY_VISIBILITY_TRANSITION_MS,
} from "@/lib/config/mobile";
import { MOBILE_NAVIGATION_TARGET_IDS } from "@/lib/content/navigation";
import useMobileOverlayVisibility from "@/components/mobile/useMobileOverlayVisibility";
import type { MobileNavigationIcon, SiteContent } from "@/lib/content/profile";

type MobileFooterOverlayProps = {
  content: SiteContent;
};

const SCROLL_ACTIVATION_TOLERANCE_PX = 1;

const iconComponents: Record<MobileNavigationIcon, ComponentType<{ size?: number }>> = {
  profile: Profile,
  achievements: Achievements,
  list: List,
  lightbulb: Lightbulb,
  graduation: Graduation,
};

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
  const heading = document.getElementById(`${sectionElement.id}-heading`);
  const target = heading ?? sectionElement;
  const headingTop = target.getBoundingClientRect().top + getCurrentScrollTop();
  const scrollTop = headingTop - MOBILE_TOP_OVERLAY_HEIGHT_PX - MOBILE_SECTION_NAVIGATION_HEADING_GAP_PX;

  return Math.min(Math.max(0, scrollTop), getMaxScrollTop());
}

function scrollToSection(targetId: string) {
  const sectionElement = document.getElementById(targetId);

  if (!sectionElement) {
    return;
  }

  // The About section starts with the portrait, so navigate to the page top.
  if (targetId === "about") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const heading = document.getElementById(`${targetId}-heading`) ?? sectionElement;
  const headingTop = heading.getBoundingClientRect().top + getCurrentScrollTop();
  // Both overlays are always shown when navigating from the mobile footer.
  const scrollTop = Math.min(
    Math.max(0, headingTop - MOBILE_TOP_OVERLAY_HEIGHT_PX - MOBILE_SECTION_NAVIGATION_HEADING_GAP_PX),
    getMaxScrollTop(),
  );

  window.scrollTo({ top: scrollTop, behavior: "smooth" });
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
  const isHidden = useMobileOverlayVisibility();
  const [activeTargetId, setActiveTargetId] = useState("about");
  const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);

  useEffect(() => {
    function updateActiveSection() {
      setActiveTargetId(getActiveTargetId());
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  function handleSectionLinkClick(targetId: string) {
    setActiveTargetId(targetId);
    window.dispatchEvent(new Event(MOBILE_SECTION_NAVIGATION_EVENT));
    scrollToSection(targetId);
  }

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
          backgroundColor: "var(--color-canvas)",
          backdropFilter: "blur(8px)",
          opacity: isHidden ? 0 : 1,
          pointerEvents: isHidden ? "none" : "auto",
          transform: isHidden ? "translateY(100%)" : "translateY(0)",
          transition: `transform ${MOBILE_OVERLAY_VISIBILITY_TRANSITION_MS}ms ease, opacity ${MOBILE_OVERLAY_VISIBILITY_TRANSITION_MS}ms ease`,
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
            const isActive = activeTargetId === item.targetId;
            const Icon = iconComponents[item.icon];
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

            return (
              <button
                key={item.targetId}
                type="button"
                onClick={() => handleSectionLinkClick(item.targetId)}
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

      <div
        className={`${chatStyles.mobileChatRoot} mobile-only`}
        style={{
          right: MOBILE_PAGE_HORIZONTAL_PADDING_PX,
          bottom: MOBILE_BOTTOM_NAV_HEIGHT_PX + MOBILE_CHAT_TRIGGER_BOTTOM_GAP_PX,
          opacity: isHidden ? 0 : 1,
          pointerEvents: isHidden ? "none" : "auto",
          transform: isHidden ? "translateY(100%)" : "translateY(0)",
          transition: `transform ${MOBILE_OVERLAY_VISIBILITY_TRANSITION_MS}ms ease, opacity ${MOBILE_OVERLAY_VISIBILITY_TRANSITION_MS}ms ease`,
        }}
      >
        <button
          type="button"
          onClick={() => setIsContactSheetOpen(true)}
          aria-label={content.contact.heading}
          aria-expanded={isContactSheetOpen}
          className={chatStyles.chatTrigger}
          style={{
            width: MOBILE_CHAT_TRIGGER_SIZE_PX,
            height: MOBILE_CHAT_TRIGGER_SIZE_PX,
            borderRadius: 9999,
          }}
        >
          <Envelope size={MOBILE_CHAT_TRIGGER_ICON_SIZE_PX} />
        </button>
      </div>

      <MobileContactBottomSheet
        isOpen={isContactSheetOpen}
        onClose={() => setIsContactSheetOpen(false)}
        content={content}
      />
    </>
  );
}
