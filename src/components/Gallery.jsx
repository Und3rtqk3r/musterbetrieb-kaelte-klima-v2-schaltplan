/* Each gallery item gets a tiny schematic drawing — like a parts diagram. */
const SCHEMATICS = {
  vrf: (
    <svg viewBox="0 0 200 140" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <rect x="14" y="20" width="56" height="40" />
      <rect x="14" y="80" width="56" height="40" />
      <rect x="130" y="50" width="56" height="40" />
      <path d="M 70 40 L 100 40 L 100 70 L 130 70" />
      <path d="M 70 100 L 100 100 L 100 70" />
      <circle cx="100" cy="70" r="3" fill="currentColor" />
      <text x="22" y="44" fontFamily="Geist Mono" fontSize="9" stroke="none" fill="currentColor">VRF-A</text>
      <text x="22" y="104" fontFamily="Geist Mono" fontSize="9" stroke="none" fill="currentColor">VRF-B</text>
      <text x="138" y="74" fontFamily="Geist Mono" fontSize="9" stroke="none" fill="currentColor">AGGR.</text>
    </svg>
  ),
  pump: (
    <svg viewBox="0 0 200 140" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="100" cy="70" r="34" />
      <circle cx="100" cy="70" r="20" />
      <line x1="100" y1="36" x2="100" y2="56" />
      <line x1="134" y1="70" x2="114" y2="70" />
      <line x1="100" y1="104" x2="100" y2="84" />
      <line x1="66" y1="70" x2="86" y2="70" />
      <path d="M 80 70 L 100 50 L 100 90 Z" fill="currentColor" stroke="none" opacity="0.85" />
      <text x="142" y="74" fontFamily="Geist Mono" fontSize="9" stroke="none" fill="currentColor">P</text>
    </svg>
  ),
  cold: (
    <svg viewBox="0 0 200 140" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="40" y="20" width="120" height="100" />
      <rect x="46" y="26" width="108" height="88" strokeDasharray="3 3" />
      <line x1="100" y1="26" x2="100" y2="114" strokeDasharray="2 4" />
      <line x1="46" y1="70" x2="154" y2="70" strokeDasharray="2 4" />
      <text x="60" y="62" fontFamily="Geist Mono" fontSize="9" stroke="none" fill="currentColor">−18°C</text>
      <text x="116" y="62" fontFamily="Geist Mono" fontSize="9" stroke="none" fill="currentColor">−25°C</text>
      <text x="60" y="100" fontFamily="Geist Mono" fontSize="9" stroke="none" fill="currentColor">−18°C</text>
      <text x="116" y="100" fontFamily="Geist Mono" fontSize="9" stroke="none" fill="currentColor">−40°C</text>
    </svg>
  ),
  split: (
    <svg viewBox="0 0 200 140" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="20" y="40" width="80" height="22" rx="6" />
      <line x1="100" y1="51" x2="140" y2="51" />
      <rect x="140" y="36" width="46" height="30" rx="3" />
      <path d="M 26 70 q 4 6 8 0 q 4 -6 8 0 q 4 6 8 0 q 4 -6 8 0 q 4 6 8 0 q 4 -6 8 0 q 4 6 8 0 q 4 -6 8 0 q 4 6 8 0 q 4 -6 8 0" opacity="0.6" />
      <text x="26" y="56" fontFamily="Geist Mono" fontSize="9" stroke="none" fill="currentColor">INDOOR</text>
      <text x="146" y="56" fontFamily="Geist Mono" fontSize="9" stroke="none" fill="currentColor">OUT</text>
    </svg>
  ),
  hotel: (
    <svg viewBox="0 0 200 140" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="20" y="36" width="160" height="76" />
      {[0,1,2].map(r => [0,1,2,3,4,5].map(c => (
        <rect key={`${r}-${c}`} x={28 + c*26} y={44 + r*22} width="20" height="16" />
      )))}
    </svg>
  ),
  cascade: (
    <svg viewBox="0 0 200 140" fill="none" stroke="currentColor" strokeWidth="1.2">
      {[0,1,2,3].map(i => (
        <g key={i}>
          <circle cx={36 + i*42} cy="70" r="14" />
          {i < 3 && <line x1={50 + i*42} y1="70" x2={64 + i*42} y2="70" />}
        </g>
      ))}
      <text x="22" y="100" fontFamily="Geist Mono" fontSize="9" stroke="none" fill="currentColor">WP-01 → WP-02 → WP-03 → WP-04</text>
    </svg>
  ),
  loft: (
    <svg viewBox="0 0 200 140" fill="none" stroke="currentColor" strokeWidth="1.2">
      <polygon points="20,80 100,28 180,80 180,116 20,116" />
      <line x1="20" y1="80" x2="180" y2="80" />
      <rect x="50" y="86" width="20" height="20" />
      <rect x="130" y="86" width="20" height="20" />
      <line x1="90" y1="56" x2="110" y2="56" strokeDasharray="2 3" />
      <text x="100" y="50" fontFamily="Geist Mono" fontSize="8" stroke="none" fill="currentColor" textAnchor="middle">LUFT</text>
    </svg>
  ),
};

const ITEMS = [
  { code: "PRJ-014", year: "2024", title: "VRF Bürogebäude",         place: "Cottbus",     fig: "vrf",     size: "tall" },
  { code: "PRJ-022", year: "2024", title: "Kühlraum Gastronomie",    place: "Berlin",      fig: "cold",    size: "wide" },
  { code: "PRJ-019", year: "2023", title: "Wärmepumpe Eigenheim",    place: "Lübben",      fig: "pump",    size: "wide" },
  { code: "PRJ-028", year: "2025", title: "VRF-Hotel",                place: "Hoyerswerda", fig: "hotel",   size: "tall" },
  { code: "PRJ-031", year: "2025", title: "Tiefkühlanlage",            place: "Spremberg",   fig: "cold",    size: "med" },
  { code: "PRJ-024", year: "2024", title: "Loft-Klimatisierung",       place: "Berlin",      fig: "loft",    size: "med" },
  { code: "PRJ-026", year: "2025", title: "Wärmepumpen-Kaskade",       place: "Forst",       fig: "cascade", size: "med" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="section">
      <div className="section-head">
        <div className="head-side">
          <span className="label">
            <span className="num">SEKT. 03</span>
            <span>Werkschau</span>
            <span className="ref">// Projekte</span>
          </span>
          <span className="annotation">Auswahl 2023 – 2025</span>
        </div>
        <div>
          <h2>
            Ausgewählte<br/>
            <span className="b">Anlagen</span>.
          </h2>
        </div>
      </div>

      <div className="gallery">
        {ITEMS.map((it) => (
          <figure key={it.code} className={`g-item ${it.size}`}>
            <div className="meta">
              <span className="code">{it.code}</span>
              <span>FIG. {String(ITEMS.indexOf(it) + 1).padStart(2, "0")}</span>
              <span>{it.year}</span>
            </div>
            <div className="body">
              {SCHEMATICS[it.fig]}
            </div>
            <figcaption className="caption">
              <div className="title">{it.title}</div>
              <div className="place">{it.place}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
