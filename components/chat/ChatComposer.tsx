// components/chat/ChatComposer.tsx

"use client";

import type { FormEvent } from "react";
import { Chevron } from "@/components/icons";
import FormField from "@/components/ui/FormField";
import {
  DESKTOP_BODY_TEXT_WEIGHT,
  DESKTOP_CHAT_INPUT_HEIGHT_PX,
  DESKTOP_CHAT_INPUT_PADDING_X_PX,
  DESKTOP_CHAT_INPUT_RADIUS_PX,
  DESKTOP_CHAT_SEND_BUTTON_SIZE_PX,
  DESKTOP_CHAT_SEND_ICON_SIZE_PX,
  DESKTOP_CHAT_TEXT_SIZE_PX,
  DESKTOP_GAP_8_PX,
  DESKTOP_TEXT_LINE_HEIGHT_STANDARD,
} from "@/lib/config/desktop";
import {
  MOBILE_BODY_TEXT_WEIGHT,
  MOBILE_CHAT_INPUT_HEIGHT_PX,
  MOBILE_CHAT_INPUT_PADDING_X_PX,
  MOBILE_CHAT_INPUT_RADIUS_PX,
  MOBILE_CHAT_SEND_BUTTON_SIZE_PX,
  MOBILE_CHAT_SEND_ICON_SIZE_PX,
  MOBILE_BODY_TEXT_SIZE_PX,
  MOBILE_GAP_8_PX,
  MOBILE_TEXT_LINE_HEIGHT_STANDARD,
} from "@/lib/config/mobile";
import type { SiteContent } from "@/lib/content/profile";
import styles from "./chat.module.css";

type ChatComposerProps = {
  platform: "desktop" | "mobile";
  content: SiteContent;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export default function ChatComposer({
  platform,
  content,
  value,
  onChange,
  onSubmit,
}: ChatComposerProps) {
  const isDesktop = platform === "desktop";
  const inputHeightPx = isDesktop
    ? DESKTOP_CHAT_INPUT_HEIGHT_PX
    : MOBILE_CHAT_INPUT_HEIGHT_PX;
  const gapPx = isDesktop ? DESKTOP_GAP_8_PX : MOBILE_GAP_8_PX;
  const inputRadiusPx = isDesktop
    ? DESKTOP_CHAT_INPUT_RADIUS_PX
    : MOBILE_CHAT_INPUT_RADIUS_PX;
  const inputTextSizePx = isDesktop
    ? DESKTOP_CHAT_TEXT_SIZE_PX
    : MOBILE_BODY_TEXT_SIZE_PX;
  const inputTextWeight = isDesktop
    ? DESKTOP_BODY_TEXT_WEIGHT
    : MOBILE_BODY_TEXT_WEIGHT;
  const inputLineHeight = isDesktop
    ? DESKTOP_TEXT_LINE_HEIGHT_STANDARD
    : MOBILE_TEXT_LINE_HEIGHT_STANDARD;
  const inputPaddingXPx = isDesktop
    ? DESKTOP_CHAT_INPUT_PADDING_X_PX
    : MOBILE_CHAT_INPUT_PADDING_X_PX;
  const sendButtonSizePx = isDesktop
    ? DESKTOP_CHAT_SEND_BUTTON_SIZE_PX
    : MOBILE_CHAT_SEND_BUTTON_SIZE_PX;
  const sendIconSizePx = isDesktop
    ? DESKTOP_CHAT_SEND_ICON_SIZE_PX
    : MOBILE_CHAT_SEND_ICON_SIZE_PX;
  const isDisabled = value.trim().length === 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isDisabled) {
      onSubmit();
    }
  }

  return (
    <form
      className={styles.composer}
      onSubmit={handleSubmit}
      style={{ gap: gapPx }}
    >
      <FormField
        value={value}
        onChange={onChange}
        placeholder={content.chat.placeholder}
        ariaLabel={content.chat.placeholder}
        clearButtonAriaLabel={content.chat.clearInputAriaLabel}
        autoComplete="off"
        wrapperClassName={styles.inputWrap}
        inputClassName={styles.chatInput}
        clearButtonClassName={styles.clearInputButton}
        paddingRightPx={inputPaddingXPx}
        inputStyle={{
          height: inputHeightPx,
          borderRadius: inputRadiusPx,
          paddingLeft: inputPaddingXPx,
          fontSize: inputTextSizePx,
          fontWeight: inputTextWeight,
          lineHeight: inputLineHeight,
        }}
      />

      <button
        type="submit"
        disabled={isDisabled}
        aria-label={content.chat.sendLabel}
        className={styles.sendButton}
        style={{
          width: sendButtonSizePx,
          height: sendButtonSizePx,
          borderRadius: 9999,
        }}
      >
        <Chevron direction="right" size={sendIconSizePx} />
      </button>
    </form>
  );
}
