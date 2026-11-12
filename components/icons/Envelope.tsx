// components/icons/Envelope.tsx

type EnvelopeProps = {
  size?: number;
  strokeWidth?: number;
};

export default function Envelope({ size = 18, strokeWidth = 1.1 }: EnvelopeProps) {
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
      <path d="M4 6h16c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" />
      <polyline points="22,8 12,14 2,8" />
    </svg>
  );
}