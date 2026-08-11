// components/ui/FormField.tsx

"use client";

import type { CSSProperties } from "react";
import { Close } from "@/components/icons";

const FORM_FIELD_CLEAR_BUTTON_SIZE_PX = 24;
const FORM_FIELD_CLEAR_ICON_SIZE_PX = 14;
const FORM_FIELD_CLEAR_RIGHT_PX = 8;

type FormFieldProps = {
  value: string | null | undefined;
  onChange: (value: string) => void;
  placeholder?: string;
  ariaLabel?: string;
  clearButtonAriaLabel?: string;
  autoComplete?: string;
  showClearButton?: boolean;
  wrapperClassName?: string;
  inputClassName?: string;
  clearButtonClassName?: string;
  inputStyle?: CSSProperties;
  paddingRightPx?: number;
};

export default function FormField({
  value,
  onChange,
  placeholder = "",
  ariaLabel = "Form field",
  clearButtonAriaLabel = "Clear field",
  autoComplete,
  showClearButton = true,
  wrapperClassName,
  inputClassName,
  clearButtonClassName,
  inputStyle,
  paddingRightPx = 0,
}: FormFieldProps) {
  const safeValue = value ?? "";
  const resolvedPaddingRightPx = showClearButton
    ? FORM_FIELD_CLEAR_RIGHT_PX +
      FORM_FIELD_CLEAR_BUTTON_SIZE_PX +
      paddingRightPx
    : paddingRightPx;

  return (
    <div className={wrapperClassName}>
      <input
        type="text"
        value={safeValue}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        autoComplete={autoComplete}
        className={inputClassName}
        style={{
          ...inputStyle,
          paddingRight: resolvedPaddingRightPx,
        }}
      />

      {showClearButton && safeValue.length > 0 ? (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label={clearButtonAriaLabel}
          className={clearButtonClassName}
          style={{
            right: FORM_FIELD_CLEAR_RIGHT_PX,
            width: FORM_FIELD_CLEAR_BUTTON_SIZE_PX,
            height: FORM_FIELD_CLEAR_BUTTON_SIZE_PX,
          }}
        >
          <Close size={FORM_FIELD_CLEAR_ICON_SIZE_PX} />
        </button>
      ) : null}
    </div>
  );
}
