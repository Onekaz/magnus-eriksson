// components/icons/List.tsx

import React from "react";

export default function List({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path d="M8 4.75h13" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 9.75h13" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 14.75h13" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 19.75h13" strokeWidth="1.5" strokeLinecap="round" />

      <path d="M4.5 4.75h.01" strokeWidth="2" strokeLinecap="round" />
      <path d="M4.5 9.75h.01" strokeWidth="2" strokeLinecap="round" />
      <path d="M4.5 14.75h.01" strokeWidth="2" strokeLinecap="round" />
      <path d="M4.5 19.75h.01" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}