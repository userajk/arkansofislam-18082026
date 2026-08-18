export default function Logo({ size = 32, variant = 2 }) {
  const src = variant === 1 ? '/arkan-logo-1.png' : '/arkan-logo-2.png'
  return (
    <img
      src={src}
      alt="Arkan"
      className="arkan-logo"
      width={size}
      height={size}
      style={{ objectFit: 'contain' }}
    />
  )
}
