// components/mobile/bottom-sheet/MobileContactBottomSheet.tsx

"use client";

import { Envelope, LinkedIn, Telephone } from "@/components/icons";
import {
  CONTACT_EMAIL,
  CONTACT_LINKEDIN_DISPLAY,
  CONTACT_LINKEDIN_HREF,
  CONTACT_MAILTO_HREF,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
} from "@/lib/content/profile";
import * as mobileConfig from "@/lib/config/mobile";

type MobileContactBottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
};

const overlayClass = "fixed inset-0 z-[60] bg-black/15";
const bottomSheetClass = "fixed inset-x-0 bottom-0 z-[70] flex flex-col";
const bottomSheetHandleWrapClass = "flex justify-center";
const bottomSheetMenuClass = "min-h-0 flex-1 overflow-y-auto";
const contactListClass = "flex flex-col";
const contactItemClass = "flex w-full items-center";
const contactIconClass = "inline-flex shrink-0 items-center justify-center";
const bottomSheetFooterClass = "border-t border-[var(--color-border)]";

export default function MobileContactBottomSheet({
  isOpen,
  onClose,
}: MobileContactBottomSheetProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        aria-label="Close contact sheet"
        onClick={onClose}
        className={overlayClass}
      />

      <div
        className={bottomSheetClass}
        role="dialog"
        aria-modal="true"
        aria-label="Contact details"
        style={{
          maxHeight: `calc(100dvh - ${mobileConfig.MOBILE_BOTTOM_SHEET_MAX_VIEWPORT_OFFSET_PX}px)`,
          borderTopLeftRadius: `${mobileConfig.MOBILE_BOTTOM_SHEET_RADIUS_PX}px`,
          borderTopRightRadius: `${mobileConfig.MOBILE_BOTTOM_SHEET_RADIUS_PX}px`,
          backgroundColor: "var(--color-canvas)",
          boxShadow: "0 -12px 32px rgba(31, 27, 42, 0.12)",
          overflow: "hidden",
        }}
      >
        <div
          className={bottomSheetHandleWrapClass}
          style={{
            marginTop: `${mobileConfig.MOBILE_BOTTOM_SHEET_HANDLE_MARGIN_TOP_PX}px`,
            marginBottom: `${mobileConfig.MOBILE_BOTTOM_SHEET_HANDLE_MARGIN_BOTTOM_PX}px`,
          }}
        >
          <span
            style={{
              width: `${mobileConfig.MOBILE_BOTTOM_SHEET_HANDLE_WIDTH_PX}px`,
              height: `${mobileConfig.MOBILE_BOTTOM_SHEET_HANDLE_HEIGHT_PX}px`,
              borderRadius: "999px",
              backgroundColor: "var(--color-secondary-3)",
            }}
          />
        </div>

        <div
          className={bottomSheetMenuClass}
          style={{
            paddingTop: `${mobileConfig.MOBILE_BOTTOM_SHEET_MENU_PADDING_TOP_PX}px`,
            paddingRight: `${mobileConfig.MOBILE_BOTTOM_SHEET_SIDE_PADDING_PX}px`,
            paddingBottom: `${mobileConfig.MOBILE_BOTTOM_SHEET_MENU_PADDING_BOTTOM_PX}px`,
            paddingLeft: `${mobileConfig.MOBILE_BOTTOM_SHEET_SIDE_PADDING_PX}px`,
            backgroundColor: "var(--color-canvas)",
          }}
        >
          <div
            className={contactListClass}
            style={{ gap: `${mobileConfig.MOBILE_BOTTOM_SHEET_ITEM_GAP_PX}px` }}
          >
            <a
              href={CONTACT_MAILTO_HREF}
              onClick={onClose}
              className={contactItemClass}
              style={{
                gap: `${mobileConfig.MOBILE_CONTACT_SHEET_ITEM_GAP_PX}px`,
                paddingTop: `${mobileConfig.MOBILE_CONTACT_SHEET_ITEM_PADDING_Y_PX}px`,
                paddingBottom: `${mobileConfig.MOBILE_CONTACT_SHEET_ITEM_PADDING_Y_PX}px`,
                borderRadius: `${mobileConfig.MOBILE_CONTACT_SHEET_ITEM_RADIUS_PX}px`,
                color: "var(--color-primary)",
                fontSize: `${mobileConfig.MOBILE_CONTACT_SHEET_ITEM_TEXT_SIZE_PX}px`,
                fontWeight: mobileConfig.MOBILE_CONTACT_SHEET_ITEM_TEXT_WEIGHT,
                lineHeight: `${mobileConfig.MOBILE_CONTACT_SHEET_ITEM_LINE_HEIGHT_PX}px`,
              }}
            >
              <span
                className={contactIconClass}
                aria-hidden="true"
                style={{
                  width: `${mobileConfig.MOBILE_CONTACT_SHEET_ICON_SIZE_PX}px`,
                  height: `${mobileConfig.MOBILE_CONTACT_SHEET_ICON_SIZE_PX}px`,
                }}
              >
                <Envelope size={mobileConfig.MOBILE_CONTACT_SHEET_ICON_SIZE_PX} />
              </span>
              <span>{CONTACT_EMAIL}</span>
            </a>

            <a
              href={CONTACT_PHONE_HREF}
              onClick={onClose}
              className={contactItemClass}
              style={{
                gap: `${mobileConfig.MOBILE_CONTACT_SHEET_ITEM_GAP_PX}px`,
                paddingTop: `${mobileConfig.MOBILE_CONTACT_SHEET_ITEM_PADDING_Y_PX}px`,
                paddingBottom: `${mobileConfig.MOBILE_CONTACT_SHEET_ITEM_PADDING_Y_PX}px`,
                borderRadius: `${mobileConfig.MOBILE_CONTACT_SHEET_ITEM_RADIUS_PX}px`,
                color: "var(--color-primary)",
                fontSize: `${mobileConfig.MOBILE_CONTACT_SHEET_ITEM_TEXT_SIZE_PX}px`,
                fontWeight: mobileConfig.MOBILE_CONTACT_SHEET_ITEM_TEXT_WEIGHT,
                lineHeight: `${mobileConfig.MOBILE_CONTACT_SHEET_ITEM_LINE_HEIGHT_PX}px`,
              }}
            >
              <span
                className={contactIconClass}
                aria-hidden="true"
                style={{
                  width: `${mobileConfig.MOBILE_CONTACT_SHEET_ICON_SIZE_PX}px`,
                  height: `${mobileConfig.MOBILE_CONTACT_SHEET_ICON_SIZE_PX}px`,
                }}
              >
                <Telephone size={mobileConfig.MOBILE_CONTACT_SHEET_ICON_SIZE_PX} />
              </span>
              <span>{CONTACT_PHONE_DISPLAY}</span>
            </a>

            <a
              href={CONTACT_LINKEDIN_HREF}
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
              className={contactItemClass}
              style={{
                gap: `${mobileConfig.MOBILE_CONTACT_SHEET_ITEM_GAP_PX}px`,
                paddingTop: `${mobileConfig.MOBILE_CONTACT_SHEET_ITEM_PADDING_Y_PX}px`,
                paddingBottom: `${mobileConfig.MOBILE_CONTACT_SHEET_ITEM_PADDING_Y_PX}px`,
                borderRadius: `${mobileConfig.MOBILE_CONTACT_SHEET_ITEM_RADIUS_PX}px`,
                color: "var(--color-primary)",
                fontSize: `${mobileConfig.MOBILE_CONTACT_SHEET_ITEM_TEXT_SIZE_PX}px`,
                fontWeight: mobileConfig.MOBILE_CONTACT_SHEET_ITEM_TEXT_WEIGHT,
                lineHeight: `${mobileConfig.MOBILE_CONTACT_SHEET_ITEM_LINE_HEIGHT_PX}px`,
              }}
            >
              <span
                className={contactIconClass}
                aria-hidden="true"
                style={{
                  width: `${mobileConfig.MOBILE_CONTACT_SHEET_ICON_SIZE_PX}px`,
                  height: `${mobileConfig.MOBILE_CONTACT_SHEET_ICON_SIZE_PX}px`,
                }}
              >
                <LinkedIn size={mobileConfig.MOBILE_CONTACT_SHEET_ICON_SIZE_PX} />
              </span>
              <span>{CONTACT_LINKEDIN_DISPLAY}</span>
            </a>
          </div>
        </div>

        <div
          className={bottomSheetFooterClass}
          style={{
            backgroundColor: "var(--color-canvas)",
          }}
        >
          <button
            type="button"
            onClick={onClose}
            style={{
              width: "100%",
              padding: `${mobileConfig.MOBILE_CONTACT_SHEET_CLOSE_PADDING_Y_PX}px 0`,
              border: "none",
              margin: 0,
              color: "var(--color-dark-muted)",
              backgroundColor: "transparent",
              cursor: "pointer",
              font: "inherit",
              fontSize: `${mobileConfig.MOBILE_CONTACT_SHEET_CLOSE_TEXT_SIZE_PX}px`,
              fontWeight: mobileConfig.MOBILE_CONTACT_SHEET_CLOSE_TEXT_WEIGHT,
              lineHeight: `${mobileConfig.MOBILE_CONTACT_SHEET_CLOSE_LINE_HEIGHT_PX}px`,
            }}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}