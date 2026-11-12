// components/chat/MobileChatTrigger.tsx

"use client";

import { Chat } from "@/components/icons";
import useMobileOverlayVisibility from "@/components/mobile/useMobileOverlayVisibility";
import {
  MOBILE_BOTTOM_NAV_HEIGHT_PX,
  MOBILE_CHAT_TRIGGER_BOTTOM_GAP_PX,
  MOBILE_CHAT_TRIGGER_ICON_SIZE_PX,
  MOBILE_CHAT_CONTACT_GAP_PX,
  MOBILE_CHAT_TRIGGER_SIZE_PX,
  MOBILE_PAGE_HORIZONTAL_PADDING_PX,
  MOBILE_OVERLAY_VISIBILITY_TRANSITION_MS,
} from "@/lib/config/mobile";
import type { SiteContent } from "@/lib/content/profile";
import styles from "./chat.module.css";

type MobileChatTriggerProps = {
  isOpen: boolean;
  content: SiteContent;
  onToggle: () => void;
};

export default function MobileChatTrigger({
  isOpen,
  content,
  onToggle,
}: MobileChatTriggerProps) {
  const isHidden = useMobileOverlayVisibility();

  return (
    <div
      className={`${styles.mobileChatRoot} mobile-only`}
      style={{
        right: MOBILE_PAGE_HORIZONTAL_PADDING_PX + MOBILE_CHAT_TRIGGER_SIZE_PX + MOBILE_CHAT_CONTACT_GAP_PX,
        bottom: MOBILE_BOTTOM_NAV_HEIGHT_PX + MOBILE_CHAT_TRIGGER_BOTTOM_GAP_PX,
        opacity: isHidden ? 0 : 1,
        pointerEvents: isHidden ? "none" : "auto",
        transform: isHidden ? "translateY(100%)" : "translateY(0)",
        transition: `transform ${MOBILE_OVERLAY_VISIBILITY_TRANSITION_MS}ms ease, opacity ${MOBILE_OVERLAY_VISIBILITY_TRANSITION_MS}ms ease`,
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={content.chat.triggerLabel}
        className={styles.chatTrigger}
        style={{
          width: MOBILE_CHAT_TRIGGER_SIZE_PX,
          height: MOBILE_CHAT_TRIGGER_SIZE_PX,
          borderRadius: 9999,
        }}
      >
        <Chat size={MOBILE_CHAT_TRIGGER_ICON_SIZE_PX} />
      </button>
    </div>
  );
}
