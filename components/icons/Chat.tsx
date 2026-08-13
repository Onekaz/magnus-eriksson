// components/icons/Chat.tsx

type ChatProps = {
  size?: number;
  strokeWidth?: number;
};

export default function Chat({ size = 18, strokeWidth = 1.1 }: ChatProps) {
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
      <g transform="translate(0 1.6)">
        <path
          d="
            M7.65 3
            H16.35
            C19.1 3 21.1 5.2 21.85 7.58
            C22.25 8.85 22.13 10.85 21.39 12.17
            C20.95 13.05 20.1 14 19.25 14.62
            L12.23 19.2
            L11.92 15.68
            H7.65
            C5.2 15.68 3.35 14.45 2.46 11.71
            C1.8 9.7 1.95 7.7 2.46 6.82
            C3.15 5.15 5.2 3 7.65 3
            Z
          "
        />

        <circle cx="8.4" cy="9.4" r="1.1" fill="currentColor" stroke="none" />
        <circle cx="12.05" cy="9.4" r="1.1" fill="currentColor" stroke="none" />
        <circle cx="15.7" cy="9.4" r="1.1" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}