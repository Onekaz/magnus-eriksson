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
      <path d="M8 6h13" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 12h13" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 18h13" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4.5 6h.01" strokeWidth="2" strokeLinecap="round" />
      <path d="M4.5 12h.01" strokeWidth="2" strokeLinecap="round" />
      <path d="M4.5 18h.01" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}