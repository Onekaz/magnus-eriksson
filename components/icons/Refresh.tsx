// components/icons/Refresh.tsx

import React from "react";
import { ACTION_ICON_CLOCKWISE_ROTATION_ANIMATION_CONFIG } from "@/lib/config/icons";

type RefreshProps = {
  size?: number;
  animationKey?: number;
};

export default function Refresh({
  size = 18,
  animationKey = 0,
}: RefreshProps) {
  const animId = React.useId().replace(/:/g, "");
  const animationClassName =
    animationKey > 0 ? `refresh-clockwise_${animId}` : undefined;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <style>{`
        @keyframes refreshClockwise_${animId} {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .refresh-clockwise_${animId} {
          transform-box: fill-box;
          transform-origin: center;
          animation: refreshClockwise_${animId} ${ACTION_ICON_CLOCKWISE_ROTATION_ANIMATION_CONFIG.durationMs}ms ${ACTION_ICON_CLOCKWISE_ROTATION_ANIMATION_CONFIG.timingFunction} 1;
        }

        @media (prefers-reduced-motion: reduce) {
          .refresh-clockwise_${animId} {
            animation: none;
          }
        }
      `}</style>

      <g key={animationKey} className={animationClassName}>
        {/* Upper arc */}
        <path
          d="M4 12a8 8 0 0 1 13.66-5.66"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Arrow head (top right) */}
        <polyline
          points="18 3 18 7 14 7"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Lower arc */}
        <path
          d="M20 12a8 8 0 0 1-13.66 5.66"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Arrow head (bottom left) */}
        <polyline
          points="6 21 6 17 10 17"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
