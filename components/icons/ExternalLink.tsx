// components/icons/ExternalLink.tsx

type ExternalLinkProps = {
  className?: string;
};

export default function ExternalLink({ className }: ExternalLinkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.0"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M10.5 4.5H5.7A1.7 1.7 0 0 0 4 6.2V18.3A1.7 1.7 0 0 0 5.7 20H17.8A1.7 1.7 0 0 0 19.5 18.3V13.5" />
      <path d="M11.9 12.1 20 4" />
      <path d="M14.9 4H20V9.1" />
    </svg>
  );
}
