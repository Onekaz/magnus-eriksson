// components/icons/Lightbulb.tsx

import React from "react";

export default function Lightbulb({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        d="M9 18h6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 22h4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 18v-2.2c0-.7-.32-1.35-.82-1.84A6.2 6.2 0 0 1 7.25 9.4a4.75 4.75 0 1 1 9.5 0 6.2 6.2 0 0 1-1.93 4.56c-.5.49-.82 1.14-.82 1.84V18"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}