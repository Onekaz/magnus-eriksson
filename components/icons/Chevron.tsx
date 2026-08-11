// components/icons/Chevron.tsx

import React from "react";

type ChevronDirection = "left" | "right" | "up" | "down";

export default function Chevron({
  direction = "left",
  size = 18,
  strokeWidth = 2,
}: {
  direction?: ChevronDirection;
  size?: number;
  strokeWidth?: number;
}) {
  const rotationByDirection: Record<ChevronDirection, string | undefined> = {
    left: undefined,
    right: "rotate(180 12 12)",
    up: "rotate(90 12 12)",
    down: "rotate(-90 12 12)",
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <g transform={rotationByDirection[direction]}>
        <polyline points="15 18 9 12 15 6" />
      </g>
    </svg>
  );
}
