// components/mobile/bottom-sheet/MobileChatBottomSheet.tsx

"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from "react";
import ChatComposer from "@/components/chat/ChatComposer";
import ChatSuggestedQuestions from "@/components/chat/ChatSuggestedQuestions";
import { Close } from "@/components/icons";
import styles from "@/components/chat/chat.module.css";
import type { ChatExchange } from "@/lib/chatbot/types";
import * as mobileConfig from "@/lib/config/mobile";
import type { SiteContent } from "@/lib/content/profile";

type MobileChatBottomSheetProps = {
  isOpen: boolean;
  content: SiteContent;
  suggestedQuestions: readonly string[];
  messages: readonly ChatExchange[];
  draft: string;
  onDraftChange: (value: string) => void;
  onClose: () => void;
  onSubmit: () => void;
  onSuggestedQuestion: (question: string) => void;
};

export default function MobileChatBottomSheet({
  isOpen,
  content,
  suggestedQuestions,
  messages,
  draft,
  onDraftChange,
  onClose,
  onSubmit,
  onSuggestedQuestion,
}: MobileChatBottomSheetProps) {
  const [dragOffsetY, setDragOffsetY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartYRef = useRef(0);
  const dragOffsetYRef = useRef(0);
  const isDraggingRef = useRef(false);
  const hasMovedRef = useRef(false);
  const suppressClickRef = useRef(false);
  const conversationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen || !conversationRef.current) {
      return;
    }

    conversationRef.current.scrollTop =
      messages.length === 0 ? 0 : conversationRef.current.scrollHeight;
  }, [isOpen, messages]);

  function resetDragState() {
    isDraggingRef.current = false;
    dragStartYRef.current = 0;
    dragOffsetYRef.current = 0;
    setIsDragging(false);
    setDragOffsetY(0);
  }

  function handlePointerDown(event: PointerEvent<HTMLButtonElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    hasMovedRef.current = false;
    suppressClickRef.current = false;
    isDraggingRef.current = true;
    dragStartYRef.current = event.clientY;
    dragOffsetYRef.current = 0;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLButtonElement>) {
    if (!isDraggingRef.current) {
      return;
    }

    event.preventDefault();

    if (
      Math.abs(event.clientY - dragStartYRef.current) >
      mobileConfig.MOBILE_BOTTOM_SHEET_HANDLE_TAP_TOLERANCE_PX
    ) {
      hasMovedRef.current = true;
    }

    const nextDragOffsetY = Math.max(0, event.clientY - dragStartYRef.current);

    dragOffsetYRef.current = nextDragOffsetY;
    setDragOffsetY(nextDragOffsetY);
  }

  function handlePointerUp(event: PointerEvent<HTMLButtonElement>) {
    if (!isDraggingRef.current) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const pointerDeltaY = event.clientY - dragStartYRef.current;
    const shouldClose =
      Math.max(dragOffsetYRef.current, pointerDeltaY) >=
      mobileConfig.MOBILE_BOTTOM_SHEET_DRAG_CLOSE_THRESHOLD_PX;

    suppressClickRef.current =
      hasMovedRef.current ||
      Math.abs(pointerDeltaY) > mobileConfig.MOBILE_BOTTOM_SHEET_HANDLE_TAP_TOLERANCE_PX;
    resetDragState();

    if (shouldClose) {
      onClose();
    }
  }

  function handlePointerCancel(event: PointerEvent<HTMLButtonElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    suppressClickRef.current = true;
    resetDragState();
  }

  function handleHandleClick() {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      return;
    }

    onClose();
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
        <button
          type="button"
          aria-label={content.chat.closeButtonAriaLabel}
          onClick={handleHandleClick}
          className={styles.mobileHandleWrap}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          style={{
            marginTop: mobileConfig.MOBILE_BOTTOM_SHEET_HANDLE_MARGIN_TOP_PX,
            marginBottom: mobileConfig.MOBILE_BOTTOM_SHEET_HANDLE_MARGIN_BOTTOM_PX,
            width: "100%",
            border: "none",
            padding: 0,
            backgroundColor: "transparent",
            cursor: isDragging ? "grabbing" : "pointer",
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
        </button>

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
            {messages.length === 0 ? (
              <ChatSuggestedQuestions
                questions={suggestedQuestions}
                onSelect={onSuggestedQuestion}
                fontSize={mobileConfig.MOBILE_SMALL_TEXT_SIZE_PX}
                fontWeight={mobileConfig.MOBILE_SMALL_TEXT_WEIGHT}
              />
            ) : null}
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
