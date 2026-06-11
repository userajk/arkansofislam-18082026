export const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="9.5" y1="9.5" x2="13.5" y2="13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export const MoonIcon = () => (
  <svg width="17" height="17" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M14.5 10A6.5 6.5 0 0 1 8 3.5a6.5 6.5 0 1 0 6.5 6.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)

export const SunIcon = () => (
  <svg width="17" height="17" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
    {[[9,1,9,3],[9,15,9,17],[1,9,3,9],[15,9,17,9],[3.5,3.5,4.9,4.9],[13.1,13.1,14.5,14.5],[3.5,14.5,4.9,13.1],[13.1,4.9,14.5,3.5]].map(([x1,y1,x2,y2],i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    ))}
  </svg>
)

export const MenuIcon = ({ open }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    {open ? (
      <>
        <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </>
    ) : (
      <>
        <line x1="3" y1="5.5" x2="17" y2="5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="3" y1="14.5" x2="17" y2="14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </>
    )}
  </svg>
)

export const FileIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M5 2.5h8l4 4V19.5H5V2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M13 2.5v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <line x1="8" y1="11" x2="14" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="8" y1="14.5" x2="12" y2="14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path d="M7.5 1.5v8m0 0L4.5 6.5m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 11v2.5h11V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const BookIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
    <path d="M13 6v15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3 6.5c0 0 4.5-2.2 10-.5v15c-5.5-1.7-10 .5-10 .5V6.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M23 6.5c0 0-4.5-2.2-10-.5v15c5.5-1.7 10 .5 10 .5V6.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)

export const DeviceIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
    <rect x="7" y="2.5" width="12" height="21" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="11" y1="20" x2="15" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export const ToolsIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
    <path d="M4 5h18M4 13h18M4 21h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="9" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="17" cy="13" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="21" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

export const StarMotif = () => (
  <svg className="hero-motif" viewBox="0 0 150 150" aria-hidden="true">
    <g fill="none" strokeWidth="1">
      <path className="motif-outer" d="M75 8 L92 58 L142 75 L92 92 L75 142 L58 92 L8 75 L58 58 Z"/>
      <path className="motif-inner" d="M75 28 L87 63 L122 75 L87 87 L75 122 L63 87 L28 75 L63 63 Z"/>
      <circle className="motif-inner" cx="75" cy="75" r="14"/>
    </g>
  </svg>
)

export const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M14.5 10.5c-.1-2.2 1.8-3.2 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.6 2.2C1.7 10.2 2.3 14 4 16.1c.9 1.2 1.8 2.5 3.1 2.4 1.2-.1 1.7-.8 3.1-.8 1.4 0 1.8.8 3.1.8 1.3 0 2.2-1.2 3-2.4.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.1-.8-2.1-2.9zM12 4.4c.7-.9 1.2-2.1 1-3.3-1 .1-2.3.7-3 1.6-.7.8-1.2 2-1 3.1 1.1.1 2.3-.5 3-1.4z"/>
  </svg>
)

export const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M2.5 2.8l8.7 8.7-8.7 8.7V2.8zm1.5-.9l10.5 6-2.3 2.3-8.2-8.3zm0 19.2l8.2-8.2 2.3 2.3-10.5 5.9zm9-8.6l2.6 1.5 2.6-1.5-2.6-2.6-2.6 2.6z"/>
  </svg>
)

export const KaabaIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="5" y="10" width="18" height="16" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="11" y="15" width="6" height="11" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <line x1="5" y1="13" x2="23" y2="13" stroke="currentColor" strokeWidth="1.2"/>
    <polyline points="2,10 14,4 26,10" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
    <line x1="14" y1="4" x2="14" y2="1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

export const BookOpenIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M14 8v14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M4 8.5c0 0 5-2.5 10-1v14c-5-1.5-10 1-10 1V8.5z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
    <path d="M24 8.5c0 0-5-2.5-10-1v14c5-1.5 10 1 10 1V8.5z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
  </svg>
)

export const HeartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M14 24c-1-1.5-6-5.5-8-8-2-2.5-3-4.5-3-6.5 0-3 2-5 4-5 1.5 0 3 .5 4 2 1-1.5 2.5-2 4-2 2 0 4 2 4 5 0 2-1 4-3 6.5-2 2.5-7 6.5-8 8z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
  </svg>
)

export const FamilyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <circle cx="9" cy="6" r="3" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="19" cy="6" r="3" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="14" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M4 22c0-5 3-8 5-8s3 3 3 8" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    <path d="M20 22c0-5 3-8 5-8s3 3 3 8" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    <path d="M11 22c0-4 2-7 3-7s3 3 3 7" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
  </svg>
)

export const PlaneIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M24 14l-15-8l4 8l-4 8l15-8z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
    <line x1="9" y1="14" x2="20" y2="14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

export const ScrollIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M5 6c0-1 1-2 2-2h14c1 0 2 1 2 2v16c0 1-1 2-2 2H7c-1 0-2-1-2-2V6z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
    <line x1="9" y1="10" x2="19" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <line x1="9" y1="14" x2="19" y2="14" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <line x1="9" y1="18" x2="15" y2="18" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>
)

export const CompassIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M14 8l3 10-3 8-3-8z" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.4" strokeLinejoin="round"/>
    <circle cx="14" cy="14" r="1.5" fill="currentColor"/>
    <line x1="14" y1="2.5" x2="14" y2="4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="14" y1="24" x2="14" y2="25.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="2.5" y1="14" x2="4" y2="14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="24" y1="14" x2="25.5" y2="14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

export const BabyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    <path d="M10 10h4v2h-4z" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.5"/>
  </svg>
)

export const RingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2C6.5 2 2 6.5 2 12c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <path d="M15 12l-1.5 2L11 12" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
  </svg>
)

export const QuranIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
    <path d="M7 8h10M7 12h8M7 16h10" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>
)

export const ChecklistIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="3" width="16" height="18" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <line x1="8" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="8" y1="16" x2="14" y2="16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)
