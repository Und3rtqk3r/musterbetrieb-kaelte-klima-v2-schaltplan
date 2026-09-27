import PenguinStamp from "./PenguinStamp.jsx";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-main">
        <div className="hero-eyebrow">
          <span className="tag">№ 001 / Hauptansicht</span>
          <span>Cottbus · Brandenburg · DE</span>
          <span className="ref">↳ ref-XK / 1927</span>
        </div>

        <h1 className="hero-title">
          <span className="line">KÄLTE</span>
          <span className="line">
            <span className="sep">◇</span>
            KLIMA
          </span>
        </h1>

        <p className="hero-strap">
          Anlagenbau für Kälte, Wärme und Klima.<br />
          <em>Drei Generationen</em>, ein Haus, kein Effekt — nur perfekte Temperatur.
        </p>

        <div className="hero-callouts">
          <div>
            <div className="k">Temp · min</div>
            <div className="v">−40<span className="unit">°C</span></div>
          </div>
          <div>
            <div className="k">Temp · max</div>
            <div className="v">+60<span className="unit">°C</span></div>
          </div>
          <div>
            <div className="k">Effizienz</div>
            <div className="v">A+++<span className="unit">EU</span></div>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#kontakt" className="btn btn-primary">
            Anfrage stellen <span className="arrow">→</span>
          </a>
          <a href="#leistungen" className="link-arrow">
            Datenblatt lesen
          </a>
        </div>
      </div>

      <aside className="hero-schematic" aria-hidden="true">
        <div className="hero-schematic-head">
          <span>FIG. 01 / Studie · Mascot</span>
          <span className="red">// NICHT MASSSTÄBLICH</span>
        </div>
        <div className="hero-schematic-body">
          <PenguinStamp />
        </div>
        <div className="hero-schematic-foot">
          <div className="row"><span>Material</span><span className="val">Federn / Eis</span></div>
          <div className="row"><span>Habitat</span><span className="val b">T &lt; 0 °C</span></div>
          <div className="row"><span>Gewicht</span><span className="val">14 kg</span></div>
          <div className="row"><span>Modus</span><span className="val b">passiv</span></div>
        </div>
      </aside>
    </section>
  );
}
