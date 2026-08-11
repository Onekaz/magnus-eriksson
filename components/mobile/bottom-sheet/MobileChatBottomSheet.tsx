// components/mobile/bottom-sheet/MobileChatBottomSheet.tsx

"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from "react";
import ChatComposer from "@/components/chat/ChatComposer";
import { Close } from "@/components/icons";
import styles from "@/components/chat/chat.module.css";
import type { ChatExchange } from "@/lib/chatbot/types";
import * as mobileConfig from "@/lib/config/mobile";
import type { SiteContent } from "@/lib/content/profile";

type MobileChatBottomSheetProps = {
  isOpen: boolean;
  content: SiteContent;
  messages: readonly ChatExchange[];
  draft: string;
  onDraftChange: (value: string) => void;
  onClose: () => void;
  onSubmit: () => void;
};

export default function MobileChatBottomSheet({
  isOpen,
  content,
  messages,
  draft,
  onDraftChange,
  onClose,
  onSubmit,
}: MobileChatBottomSheetProps) {
  const [dragOffsetY, setDragOffsetY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartYRef = useRef(0);
  const dragOffsetYRef = useRef(0);
  const isDraggingRef = useRef(false);
  const conversationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen || !conversationRef.current) {
      return;
    }

    conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
  }, [isOpen, messages]);

  function resetDragState() {
    isDraggingRef.current = false;
    dragStartYRef.current = 0;
    dragOffsetYRef.current = 0;
    setIsDragging(false);
    setDragOffsetY(0);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    isDraggingRef.current = true;
    dragStartYRef.current = event.clientY;
    dragOffsetYRef.current = 0;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!isDraggingRef.current) {
      return;
    }

    event.preventDefault();

    const nextDragOffsetY = Math.max(0, event.clientY - dragStartYRef.current);

    dragOffsetYRef.current = nextDragOffsetY;
    setDragOffsetY(nextDragOffsetY);
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (!isDraggingRef.current) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const shouldClose =
      dragOffsetYRef.current >=
      mobileConfig.MOBILE_BOTTOM_SHEET_DRAG_CLOSE_THRESHOLD_PX;

    resetDragState();

    if (shouldClose) {
      onClose();
    }
  }

  function handlePointerCancel(event: PointerEvent<HTMLDivElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    resetDragState();
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className="mobile-only">
      <button
        type="button"
        aria-label={content.chat.closeButtonAriaLabel}
        onClick={onClose}
        className={styles.mobileOverlay}
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-label={content.chat.dialogAriaLabel}
        className={styles.mobileSheet}
        style={{
          maxHeight: `${mobileConfig.MOBILE_CHAT_SHEET_MAX_HEIGHT_DVH}dvh`,
          borderTopLeftRadius: mobileConfig.MOBILE_BOTTOM_SHEET_RADIUS_PX,
          borderTopRightRadius: mobileConfig.MOBILE_BOTTOM_SHEET_RADIUS_PX,
          transform: `translateY(${dragOffsetY}px)`,
          transition: isDragging
            ? "none"
            : `transform ${mobileConfig.MOBILE_BOTTOM_SHEET_DRAG_TRANSITION_MS}ms ease`,
        }}
      >
        <div
          className={styles.mobileHandleWrap}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          style={{
            marginTop: mobileConfig.MOBILE_BOTTOM_SHEET_HANDLE_MARGIN_TOP_PX,
            marginBottom: mobileConfig.MOBILE_BOTTOM_SHEET_HANDLE_MARGIN_BOTTOM_PX,
            cursor: isDragging ? "grabbing" : "grab",
            touchAction: "none",
            userSelect: "none",
          }}
        >
          <span
            aria-hidden="true"
            className={styles.mobileHandle}
            style={{
              width: mobileConfig.MOBILE_BOTTOM_SHEET_HANDLE_WIDTH_PX,
              height: mobileConfig.MOBILE_BOTTOM_SHEET_HANDLE_HEIGHT_PX,
              borderRadius: 9999,
            }}
          />
        </div>

        <div className={styles.mobileContent}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: mobileConfig.MOBILE_GAP_8_PX,
              paddingRight: mobileConfig.MOBILE_BOTTOM_SHEET_SIDE_PADDING_PX,
              paddingBottom: mobileConfig.MOBILE_GAP_16_PX,
              paddingLeft: mobileConfig.MOBILE_BOTTOM_SHEET_SIDE_PADDING_PX,
            }}
          >
            <div
              className={styles.panelHeader}
              style={{ gap: mobileConfig.MOBILE_GAP_8_PX }}
            >
              <h2
                className={styles.panelHeading}
                style={{
                  fontSize: mobileConfig.MOBILE_TITLE_TEXT_SIZE_PX,
                  fontWeight: mobileConfig.MOBILE_TITLE_TEXT_WEIGHT,
                  lineHeight: mobileConfig.MOBILE_TEXT_LINE_HEIGHT_STANDARD,
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
                  width: mobileConfig.MOBILE_CHAT_CLOSE_BUTTON_SIZE_PX,
                  height: mobileConfig.MOBILE_CHAT_CLOSE_BUTTON_SIZE_PX,
                }}
              >
                <Close size={mobileConfig.MOBILE_CHAT_CLOSE_ICON_SIZE_PX} />
              </button>
            </div>

            <p
              className={styles.intro}
              style={{
                fontSize: mobileConfig.MOBILE_SMALL_TEXT_SIZE_PX,
                fontWeight: mobileConfig.MOBILE_SMALL_TEXT_WEIGHT,
                lineHeight: mobileConfig.MOBILE_TEXT_LINE_HEIGHT_RELAXED,
              }}
            >
              {content.chat.intro}
            </p>
          </div>

          <div
            ref={conversationRef}
            className={`${styles.conversation} ${styles.mobileConversation}`}
            aria-live="polite"
            style={{
              paddingRight: mobileConfig.MOBILE_BOTTOM_SHEET_SIDE_PADDING_PX,
              paddingLeft: mobileConfig.MOBILE_BOTTOM_SHEET_SIDE_PADDING_PX,
            }}
          >
            <div
              className={styles.exchangeList}
              style={{ gap: mobileConfig.MOBILE_GAP_16_PX }}
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={styles.exchange}
                  style={{
                    gap: mobileConfig.MOBILE_GAP_8_PX,
                    paddingBottom: mobileConfig.MOBILE_GAP_16_PX,
                  }}
                >
                  <p
                    className={styles.question}
                    style={{
                      fontSize: mobileConfig.MOBILE_BODY_TEXT_SIZE_PX,
                      fontWeight: mobileConfig.MOBILE_LINK_TEXT_WEIGHT,
                      lineHeight: mobileConfig.MOBILE_TEXT_LINE_HEIGHT_STANDARD,
                    }}
                  >
                    {message.question}
                  </p>
                  <p
                    className={styles.answer}
                    style={{
                      fontSize: mobileConfig.MOBILE_BODY_TEXT_SIZE_PX,
                      fontWeight: mobileConfig.MOBILE_BODY_TEXT_WEIGHT,
                      lineHeight: mobileConfig.MOBILE_TEXT_LINE_HEIGHT_RELAXED,
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
            style={{ padding: mobileConfig.MOBILE_BOTTOM_SHEET_SIDE_PADDING_PX }}
          >
            <ChatComposer
              platform="mobile"
              content={content}
              value={draft}
              onChange={onDraftChange}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
