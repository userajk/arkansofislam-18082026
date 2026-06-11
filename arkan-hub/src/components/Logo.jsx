export default function Logo({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arkan-logo"
    >
      {/* Hologram grid background */}
      <g className="logo-grid" opacity="0.3">
        <line x1="8" y1="0" x2="8" y2="48" strokeWidth="0.5" stroke="currentColor" />
        <line x1="16" y1="0" x2="16" y2="48" strokeWidth="0.5" stroke="currentColor" />
        <line x1="32" y1="0" x2="32" y2="48" strokeWidth="0.5" stroke="currentColor" />
        <line x1="40" y1="0" x2="40" y2="48" strokeWidth="0.5" stroke="currentColor" />
        <line x1="0" y1="12" x2="48" y2="12" strokeWidth="0.5" stroke="currentColor" />
        <line x1="0" y1="24" x2="48" y2="24" strokeWidth="0.5" stroke="currentColor" />
        <line x1="0" y1="36" x2="48" y2="36" strokeWidth="0.5" stroke="currentColor" />
      </g>

      {/* Outer hologram frame */}
      <g className="logo-frame">
        <rect x="4" y="6" width="40" height="36" rx="2" strokeWidth="1" stroke="currentColor" opacity="0.5" />
        <polyline points="8,10 24,6 40,10" strokeWidth="1" stroke="currentColor" fill="none" opacity="0.6" />
      </g>

      {/* Kaaba structure - front face */}
      <g className="logo-kaaba">
        {/* Front wall */}
        <rect x="12" y="14" width="24" height="20" strokeWidth="1.2" stroke="currentColor" fill="none" />

        {/* Door opening */}
        <rect x="20" y="18" width="8" height="10" strokeWidth="0.8" stroke="currentColor" fill="none" opacity="0.7" />

        {/* Door detail line */}
        <line x1="24" y1="18" x2="24" y2="28" strokeWidth="0.6" stroke="currentColor" opacity="0.5" />

        {/* Top corner lines (3D effect) */}
        <line x1="12" y1="14" x2="8" y2="11" strokeWidth="0.8" stroke="currentColor" opacity="0.6" />
        <line x1="36" y1="14" x2="40" y2="11" strokeWidth="0.8" stroke="currentColor" opacity="0.6" />

        {/* Side walls (3D perspective) */}
        <polyline points="8,11 8,19 12,22" strokeWidth="0.8" stroke="currentColor" fill="none" opacity="0.5" />
        <polyline points="40,11 40,19 36,22" strokeWidth="0.8" stroke="currentColor" fill="none" opacity="0.5" />

        {/* Roof lines */}
        <line x1="10" y1="14" x2="14" y2="10" strokeWidth="0.8" stroke="currentColor" opacity="0.6" />
        <line x1="38" y1="14" x2="34" y2="10" strokeWidth="0.8" stroke="currentColor" opacity="0.6" />
        <polyline points="14,10 24,8 34,10" strokeWidth="0.9" stroke="currentColor" fill="none" />
      </g>

      {/* Hologram accent lines - vertical glow */}
      <g className="logo-glow">
        <line x1="24" y1="6" x2="24" y2="36" strokeWidth="0.6" stroke="currentColor" opacity="0.4" strokeDasharray="2,2" />
        <circle cx="24" cy="16" r="14" strokeWidth="0.6" stroke="currentColor" fill="none" opacity="0.3" />
        <circle cx="24" cy="24" r="12" strokeWidth="0.5" stroke="currentColor" fill="none" opacity="0.25" />
      </g>

      {/* Center point highlight */}
      <circle cx="24" cy="24" r="1.5" fill="currentColor" opacity="0.8" />
    </svg>
  )
}
