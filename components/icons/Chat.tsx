// components/icons/Chat.tsx

type ChatProps = {
  size?: number;
  strokeWidth?: number;
};

export default function Chat({ size = 18, strokeWidth = 1.2 }: ChatProps) {
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
      <path d="M21 11.5c0-4.14-4.03-7.5-9-7.5s-9 3.36-9 7.5c0 2.45 1.42 4.63 3.65 6.01L6 21l4.83-1.61c.38.07.77.11 1.17.11 4.97 0 9-3.36 9-7.5z" />
      <circle cx="8" cy="11.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="11.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="11.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}