export default function Logo({ size = 28 }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9be7ff" />
          <stop offset="100%" stopColor="#4ea8de" />
        </linearGradient>
      </defs>
      <path
        fill="url(#logo-gradient)"
        d="M16 2 L20 12 L30 14 L22 20 L25 30 L16 24 L7 30 L10 20 L2 14 L12 12 Z"
      />
    </svg>
  );
}
