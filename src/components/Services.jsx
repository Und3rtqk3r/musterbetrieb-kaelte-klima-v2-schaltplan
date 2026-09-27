const SERVICES = [
  { idx: "KT-101", pos: "Klimaanlagen",      desc: "Split- und Multisplit-Geräte, VRF-Systeme, mobile Lösungen für Wohnräume, Büros, Gastronomie.", norm: "EN 378-1" },
  { idx: "KT-202", pos: "Kältetechnik",      desc: "Begehbare Kühl- und Tiefkühlräume, gewerbliche Kühlmöbel, Prozesskühlung für die Industrie.", norm: "DIN 8975" },
  { idx: "WP-303", pos: "Wärmepumpen",       desc: "Luft-Wasser, Luft-Luft und Hybridsysteme. Nachhaltig heizen, kühlen und Warmwasser bereiten.", norm: "EN 14511" },
  { idx: "MT-404", pos: "Wartung · Service", desc: "Inspektion nach F-Gase-VO, Dichtheitsprüfungen, regelmäßige Funktionskontrollen.",            norm: "EU 517/2014" },
  { idx: "ND-505", pos: "Notdienst 24 / 7",  desc: "Bei Anlagenausfall sind wir 24 / 7 erreichbar — Cottbus, Berlin und Umgebung.",                norm: "intern. T+2h" },
  { idx: "PL-606", pos: "Planung · Konzept", desc: "Individuelle Anlagenplanung für Neubau und Bestand — energieeffizient, BAFA-konform.",         norm: "BAFA · KfW" },
];

export default function Services() {
  return (
    <section id="leistungen" className="section">
      <div className="section-head">
        <div className="head-side">
          <span className="label">
            <span className="num">SEKT. 01</span>
            <span>Leistungsverzeichnis</span>
            <span className="ref">// 6 Positionen</span>
          </span>
          <span className="annotation">Stand · Q2 / {new Date().getFullYear()}</span>
        </div>
        <div>
          <h2>
            Was wir <span className="b">bauen</span>,
            <br />warten und planen.
          </h2>
        </div>
      </div>

      <table className="parts-table">
        <thead>
          <tr>
            <th>Pos.-Nr.</th>
            <th>Bezeichnung</th>
            <th>Beschreibung</th>
            <th>Norm</th>
          </tr>
        </thead>
        <tbody>
          {SERVICES.map((s) => (
            <tr key={s.idx}>
              <td className="idx">{s.idx}</td>
              <td className="pos">{s.pos}</td>
              <td className="spec">{s.desc}</td>
              <td className="norm"><span className="badge">{s.norm}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
