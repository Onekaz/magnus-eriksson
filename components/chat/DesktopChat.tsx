// components/chat/DesktopChat.tsx

"use client";

import { useEffect, useRef } from "react";
import { Chat, Close } from "@/components/icons";
import {
  DESKTOP_CHAT_CLOSE_BUTTON_SIZE_PX,
  DESKTOP_CHAT_CLOSE_ICON_SIZE_PX,
  DESKTOP_CHAT_REFRESH_BUTTON_SIZE_PX,
  DESKTOP_CHAT_REFRESH_ICON_SIZE_PX,
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
  DESKTOP_GAP_4_PX,
  DESKTOP_GAP_8_PX,
  DESKTOP_GAP_16_PX,
  DESKTOP_LINK_TEXT_WEIGHT,
  DESKTOP_LABEL_TEXT_SIZE_PX,
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
import ChatSuggestedQuestions from "./ChatSuggestedQuestions";
import styles from "./chat.module.css";

type DesktopChatProps = {
  isOpen: boolean;
  content: SiteContent;
  suggestedQuestions: readonly string[];
  refreshAnimationKey: number;
  onRefreshQuestions: () => void;
  messages: readonly ChatExchange[];
  draft: string;
  onDraftChange: (value: string) => void;
  onToggle: () => void;
  onClose: () => void;
  onSubmit: () => void;
  onSuggestedQuestion: (question: string) => void;
};

export default function DesktopChat({
  isOpen,
  content,
  suggestedQuestions,
  refreshAnimationKey,
  onRefreshQuestions,
  messages,
  draft,
  onDraftChange,
  onToggle,
  onClose,
  onSubmit,
  onSuggestedQuestion,
}: DesktopChatProps) {
  const conversationRef = useRef<HTMLDivElement | null>(null);
  const latestExchangeRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        !window.matchMedia("(min-width: 768px)").matches ||
        rootRef.current?.contains(event.target as Node)
      ) {
        return;
      }

      onClose();
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !conversationRef.current) {
      return;
    }

    if (messages.length === 0) {
      conversationRef.current.scrollTop = 0;
      return;
    }

    const latestExchange = latestExchangeRef.current;
    if (latestExchange) {
      conversationRef.current.scrollTop +=
        latestExchange.getBoundingClientRect().top -
        conversationRef.current.getBoundingClientRect().top;
    }
  }, [isOpen, messages]);

  return (
    <div
      ref={rootRef}
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
              paddingBottom: DESKTOP_GAP_8_PX + DESKTOP_GAP_4_PX,
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
            style={{
              paddingTop: DESKTOP_GAP_4_PX,
              paddingRight: DESKTOP_GAP_16_PX,
              paddingLeft: DESKTOP_GAP_16_PX,
            }}
          >
            <ChatSuggestedQuestions
              questions={suggestedQuestions}
              refreshAriaLabel={content.chat.refreshQuestionsAriaLabel}
              exampleQuestionsLabel={content.chat.exampleQuestionsLabel}
              labelFontSize={DESKTOP_LABEL_TEXT_SIZE_PX}
              labelFontWeight={DESKTOP_SMALL_TEXT_WEIGHT}
              labelLineHeight={DESKTOP_TEXT_LINE_HEIGHT_STANDARD}
              refreshIconSize={DESKTOP_CHAT_REFRESH_ICON_SIZE_PX}
              refreshButtonSize={DESKTOP_CHAT_REFRESH_BUTTON_SIZE_PX}
              refreshToQuestionsGap={DESKTOP_GAP_8_PX + DESKTOP_GAP_4_PX}
              questionGap={DESKTOP_GAP_8_PX}
              questionsToConversationGap={messages.length === 0 ? DESKTOP_GAP_16_PX : 0}
              refreshAnimationKey={refreshAnimationKey}
              onRefresh={onRefreshQuestions}
              onSelect={onSuggestedQuestion}
              fontSize={DESKTOP_SMALL_TEXT_SIZE_PX}
              fontWeight={DESKTOP_SMALL_TEXT_WEIGHT}
            />
            {messages.length > 0 ? (
              <div
                aria-hidden="true"
                className={styles.conversationDivider}
                style={{ marginTop: DESKTOP_GAP_16_PX, marginBottom: DESKTOP_GAP_8_PX }}
              />
            ) : null}
            <div className={styles.exchangeList} style={{ gap: DESKTOP_GAP_8_PX }}>
              {[...messages].reverse().map((message, index) => (
                <div
                  key={message.id}
                  ref={index === 0 ? latestExchangeRef : undefined}
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

          <div
            className={styles.composerWrap}
            style={{
              padding: DESKTOP_GAP_16_PX,
              paddingTop: DESKTOP_GAP_8_PX + DESKTOP_GAP_4_PX,
            }}
          >
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
