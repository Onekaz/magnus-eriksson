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
      <path d="M12 4C17.7 4 22 7.05 22 11.2C22 15.35 17.65 18.52 12 18.52C11.54 18.52 11.1 18.49 10.65 18.44L6.5 21L7.05 17.5C3.6 16.25 2 13.9 2 11.2C2 7.05 6.3 4 12 4Z" />
      <circle cx="8.2" cy="11.2" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="11.2" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.8" cy="11.2" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}