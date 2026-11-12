// components/mobile/useMobileOverlayVisibility.ts

"use client";

import { useEffect, useRef, useState } from "react";
import {
  MOBILE_OVERLAY_SCROLL_DIRECTION_THRESHOLD_PX,
  MOBILE_SECTION_NAVIGATION_EVENT,
} from "@/lib/config/mobile";

const MANUAL_SCROLL_KEYS = new Set([
  "ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " ",
]);

export default function useMobileOverlayVisibility() {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    function handleSectionNavigation() {
      // Show both overlays for menu navigation, even when scrolling down.
      // Ignore scroll events caused by the ensuing smooth scroll.
      isNavigatingRef.current = true;
      lastScrollYRef.current = window.scrollY;
      setIsHidden(false);
    }

    function handleManualScrollStart() {
      // Only a user gesture ends the programmatic navigation override.
      isNavigatingRef.current = false;
      lastScrollYRef.current = window.scrollY;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (MANUAL_SCROLL_KEYS.has(event.key)) {
        handleManualScrollStart();
      }
    }

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      if (!isNavigatingRef.current) {
        if (currentScrollY <= 0) {
          setIsHidden(false);
        } else if (scrollDelta > MOBILE_OVERLAY_SCROLL_DIRECTION_THRESHOLD_PX) {
          setIsHidden(true);
        } else if (scrollDelta < -MOBILE_OVERLAY_SCROLL_DIRECTION_THRESHOLD_PX) {
          setIsHidden(false);
        }
      }

      lastScrollYRef.current = currentScrollY;
    }

    window.addEventListener(MOBILE_SECTION_NAVIGATION_EVENT, handleSectionNavigation);
    window.addEventListener("touchstart", handleManualScrollStart, { passive: true });
    window.addEventListener("wheel", handleManualScrollStart, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener(MOBILE_SECTION_NAVIGATION_EVENT, handleSectionNavigation);
      window.removeEventListener("touchstart", handleManualScrollStart);
      window.removeEventListener("wheel", handleManualScrollStart);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isHidden;
}
