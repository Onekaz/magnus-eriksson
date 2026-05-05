// components/icons/Download.tsx

import React from "react";

export default function Download({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path d="M12 3v10" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M8.5 10.5L12 13.9l3.5-3.4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 20h14" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}