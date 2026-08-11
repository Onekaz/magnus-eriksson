// components/chat/DesktopChat.tsx

"use client";

import { useEffect, useRef } from "react";
import { Chat, Close } from "@/components/icons";
import {
  DESKTOP_CHAT_CLOSE_BUTTON_SIZE_PX,
  DESKTOP_CHAT_CLOSE_ICON_SIZE_PX,
  DESKTOP_CHAT_PANEL_BOTTOM_PX,
  DESKTOP_CHAT_PANEL_MAX_HEIGHT_PX,
  DESKTOP_CHAT_PANEL_WIDTH_PX,
  DESKTOP_CHAT_TEXT_SIZE_PX,
  DESKTOP_CHAT_TRIGGER_BOTTOM_PX,
  DESKTOP_CHAT_TRIGGER_ICON_SIZE_PX,
  DESKTOP_CHAT_TRIGGER_PADDING_X_PX,
  DESKTOP_CHAT_TRIGGER_PADDING_Y_PX,
  DESKTOP_CHAT_TRIGGER_RIGHT_PX,
  DESKTOP_CHAT_TRIGGER_TEXT_SIZE_PX,
  DESKTOP_GAP_8_PX,
  DESKTOP_GAP_16_PX,
  DESKTOP_LINK_TEXT_WEIGHT,
  DESKTOP_SKILLS_CARD_RADIUS_PX,
  DESKTOP_SKILLS_PILL_RADIUS_PX,
  DESKTOP_SMALL_TEXT_SIZE_PX,
  DESKTOP_SMALL_TEXT_WEIGHT,
  DESKTOP_TEXT_LINE_HEIGHT_RELAXED,
  DESKTOP_TEXT_LINE_HEIGHT_STANDARD,
  DESKTOP_TITLE_TEXT_SIZE_PX,
  DESKTOP_TITLE_TEXT_WEIGHT,
} from "@/lib/config/desktop";
import type { ChatExchange } from "@/lib/chatbot/types";
import type { SiteContent } from "@/lib/content/profile";
import ChatComposer from "./ChatComposer";
import styles from "./chat.module.css";

type DesktopChatProps = {
  isOpen: boolean;
  content: SiteContent;
  messages: readonly ChatExchange[];
  draft: string;
  onDraftChange: (value: string) => void;
  onToggle: () => void;
  onClose: () => void;
  onSubmit: () => void;
};

export default function DesktopChat({
  isOpen,
  content,
  messages,
  draft,
  onDraftChange,
  onToggle,
  onClose,
  onSubmit,
}: DesktopChatProps) {
  const conversationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen || !conversationRef.current) {
      return;
    }

    conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
  }, [isOpen, messages]);

  return (
    <div
      className={`${styles.desktopChatRoot} desktop-only`}
      style={{
        right: DESKTOP_CHAT_TRIGGER_RIGHT_PX,
        bottom: DESKTOP_CHAT_TRIGGER_BOTTOM_PX,
      }}
    >
      {isOpen ? (
        <section
          role="dialog"
          aria-label={content.chat.dialogAriaLabel}
          className={styles.desktopPanel}
          style={{
            right: DESKTOP_CHAT_TRIGGER_RIGHT_PX,
            bottom: DESKTOP_CHAT_PANEL_BOTTOM_PX,
            width: DESKTOP_CHAT_PANEL_WIDTH_PX,
            maxHeight: DESKTOP_CHAT_PANEL_MAX_HEIGHT_PX,
            borderRadius: DESKTOP_SKILLS_CARD_RADIUS_PX,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: DESKTOP_GAP_8_PX,
              padding: DESKTOP_GAP_16_PX,
            }}
          >
            <div className={styles.panelHeader} style={{ gap: DESKTOP_GAP_8_PX }}>
              <h2
                className={styles.panelHeading}
                style={{
                  fontSize: DESKTOP_TITLE_TEXT_SIZE_PX,
                  fontWeight: DESKTOP_TITLE_TEXT_WEIGHT,
                  lineHeight: DESKTOP_TEXT_LINE_HEIGHT_STANDARD,
                }}
              >
                {content.chat.heading}
              </h2>

              <button
                type="button"
                onClick={onClose}
                aria-label={content.chat.closeButtonAriaLabel}
                className={styles.closeButton}
                style={{
                  width: DESKTOP_CHAT_CLOSE_BUTTON_SIZE_PX,
                  height: DESKTOP_CHAT_CLOSE_BUTTON_SIZE_PX,
                }}
              >
                <Close size={DESKTOP_CHAT_CLOSE_ICON_SIZE_PX} />
              </button>
            </div>

            <p
              className={styles.intro}
              style={{
                fontSize: DESKTOP_SMALL_TEXT_SIZE_PX,
                fontWeight: DESKTOP_SMALL_TEXT_WEIGHT,
                lineHeight: DESKTOP_TEXT_LINE_HEIGHT_RELAXED,
              }}
            >
              {content.chat.intro}
            </p>
          </div>

          <div
            ref={conversationRef}
            className={styles.conversation}
            aria-live="polite"
            style={{ padding: `0 ${DESKTOP_GAP_16_PX}px` }}
          >
            <div className={styles.exchangeList} style={{ gap: DESKTOP_GAP_16_PX }}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={styles.exchange}
                  style={{
                    gap: DESKTOP_GAP_8_PX,
                    paddingBottom: DESKTOP_GAP_16_PX,
                  }}
                >
                  <p
                    className={styles.question}
                    style={{
                      fontSize: DESKTOP_CHAT_TEXT_SIZE_PX,
                      fontWeight: DESKTOP_LINK_TEXT_WEIGHT,
                      lineHeight: DESKTOP_TEXT_LINE_HEIGHT_STANDARD,
                    }}
                  >
                    {message.question}
                  </p>
                  <p
                    className={styles.answer}
                    style={{
                      fontSize: DESKTOP_CHAT_TEXT_SIZE_PX,
                      fontWeight: DESKTOP_SMALL_TEXT_WEIGHT,
                      lineHeight: DESKTOP_TEXT_LINE_HEIGHT_RELAXED,
                    }}
                  >
                    {message.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.composerWrap} style={{ padding: DESKTOP_GAP_16_PX }}>
            <ChatComposer
              platform="desktop"
              content={content}
              value={draft}
              onChange={onDraftChange}
              onSubmit={onSubmit}
            />
          </div>
        </section>
      ) : null}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={content.chat.triggerLabel}
        className={`${styles.chatTrigger} ${styles.desktopTrigger}`}
        style={{
          padding: `${DESKTOP_CHAT_TRIGGER_PADDING_Y_PX}px ${DESKTOP_CHAT_TRIGGER_PADDING_X_PX}px`,
          borderRadius: DESKTOP_SKILLS_PILL_RADIUS_PX,
          fontSize: DESKTOP_CHAT_TRIGGER_TEXT_SIZE_PX,
          fontWeight: DESKTOP_LINK_TEXT_WEIGHT,
          lineHeight: DESKTOP_TEXT_LINE_HEIGHT_STANDARD,
        }}
      >
        <Chat size={DESKTOP_CHAT_TRIGGER_ICON_SIZE_PX} />
        <span>{content.chat.triggerLabel}</span>
      </button>
    </div>
  );
}
