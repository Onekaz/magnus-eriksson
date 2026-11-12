// components/icons/Achievements.tsx


export default function Achievements({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <g transform="translate(0, 0.5)">
        {/* Bredare och rundare pokalskål */}
        <path d="M6 3h12v6a6 6 0 0 1-12 0V3Z" />
        
        {/* Vänster handtag */}
        <path d="M6 6H4a2 2 0 0 0-2 2v1a3 3 0 0 0 3 3h1" />
        
        {/* Höger handtag */}
        <path d="M18 6h2a2 2 0 0 1 2 2v1a3 3 0 0 1-3 3h-1" />
        
        {/* Midja/Pelare */}
        <path d="M12 15v3" />
        
        {/* Sockel/Fot i två nivåer för tyngd */}
        <path d="M9 18h6" />
        <path d="M7 21h10" />
      </g>
    </svg>
  );
}