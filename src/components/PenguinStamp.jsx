/* ISO technical-drawing of a penguin — used in the hero schematic panel. */
export default function PenguinStamp({ size = 200 }) {
  return (
    <svg
      viewBox="0 0 240 280"
      width={size}
      height={size * 1.17}
      aria-hidden="true"
      style={{ display: "block" }}
    >
      {/* Crosshairs */}
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.3">
        <line x1="120" y1="0" x2="120" y2="280" strokeDasharray="3 4" />
        <line x1="0" y1="140" x2="240" y2="140" strokeDasharray="3 4" />
      </g>

      {/* Penguin line-art */}
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Body */}
        <ellipse cx="120" cy="170" rx="60" ry="80" />
        {/* Belly */}
        <ellipse cx="120" cy="180" rx="38" ry="56" />
        {/* Head */}
        <circle cx="120" cy="78" r="38" />
        {/* Face mask */}
        <path d="M 90 88 Q 90 110 120 110 Q 150 110 150 88 Q 144 70 120 70 Q 96 70 90 88 Z" />
        {/* Beak */}
        <path d="M 112 88 L 128 88 L 120 102 Z" fill="var(--red, #d63838)" stroke="var(--red, #d63838)" />
        {/* Eye */}
        <circle cx="120" cy="80" r="2.5" fill="currentColor" />
        {/* Left flipper */}
        <path d="M 62 138 Q 50 168 58 200 Q 64 205 70 198 Q 70 168 70 138" />
        {/* Right flipper */}
        <path d="M 178 138 Q 190 168 182 200 Q 176 205 170 198 Q 170 168 170 138" />
        {/* Feet */}
        <ellipse cx="100" cy="252" rx="14" ry="5" fill="var(--red, #d63838)" stroke="var(--red, #d63838)" />
        <ellipse cx="140" cy="252" rx="14" ry="5" fill="var(--red, #d63838)" stroke="var(--red, #d63838)" />
      </g>

      {/* Dimension lines & annotations */}
      <g
        fill="none"
        stroke="var(--blue, #0046c4)"
        strokeWidth="0.8"
        fontFamily="Geist Mono, monospace"
        fontSize="9"
      >
        {/* Height dimension on left */}
        <line x1="36" y1="40" x2="36" y2="252" />
        <line x1="32" y1="40"  x2="40" y2="40" />
        <line x1="32" y1="252" x2="40" y2="252" />
        <text x="22" y="148" fill="var(--blue, #0046c4)" transform="rotate(-90 22 148)" textAnchor="middle">h = 280 mm</text>

        {/* Width dimension at bottom */}
        <line x1="60" y1="268" x2="180" y2="268" />
        <line x1="60" y1="264"  x2="60" y2="272" />
        <line x1="180" y1="264" x2="180" y2="272" />
        <text x="120" y="280" fill="var(--blue, #0046c4)" textAnchor="middle">⌀ 168 mm</text>

        {/* Pointer to beak */}
        <line x1="160" y1="92" x2="200" y2="60" />
        <circle cx="160" cy="92" r="1.8" fill="var(--blue, #0046c4)" />
        <text x="204" y="58" fill="var(--blue, #0046c4)">A — Mund</text>

        {/* Pointer to body */}
        <line x1="178" y1="170" x2="218" y2="170" />
        <circle cx="178" cy="170" r="1.8" fill="var(--blue, #0046c4)" />
        <text x="222" y="174" fill="var(--blue, #0046c4)">B — Rumpf</text>
      </g>
    </svg>
  );
}
