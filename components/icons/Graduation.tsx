// components/icons/Graduation.tsx

import React from "react";

export default function Graduation({ size = 18 }: { size?: number }) {
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
        d="M3 8.5L12 4l9 4.5-9 4.5L3 8.5z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11v4.2c0 1.2 2.2 2.8 5 2.8s5-1.6 5-2.8V11"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 8.5v5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}