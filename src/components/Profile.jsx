export default function Profile() {
  return (
    <section id="profil" className="section">
      <div className="section-head">
        <div className="head-side">
          <span className="label">
            <span className="num">SEKT. 02</span>
            <span>Stammdaten</span>
            <span className="ref">// Profil</span>
          </span>
          <span className="annotation">Gegründet · 21. III. 1927</span>
        </div>
        <div>
          <h2>
            Drei Generationen<br />
            <span className="b">Handwerk</span>.
          </h2>
        </div>
      </div>

      <div className="profile">
        <div className="profile-text">
          <p>
            Gegründet <span className="b">1927</span> in Cottbus als kleine
            Werkstatt für Kühlanlagen. Heute ein Meisterbetrieb mit zwei
            Standbeinen: tiefes Wissen für gewerbliche Kälte, moderne
            Lösungen für Klima und Wärme.
          </p>
          <p>
            Acht Mitarbeiter, zwei Standorte, drei Generationen. Was uns
            geblieben ist: die Überzeugung, dass gutes Handwerk Zeit
            braucht — und sich auszahlt.
          </p>
          <p>
            <span className="b">→</span> Filialen Cottbus &amp; Berlin-Schöneberg<br />
            <span className="b">→</span> 6 Monteure, 2 Meister, 1 Lehrling<br />
            <span className="b">→</span> F-Gase-zertifiziert, BAFA-konform
          </p>
        </div>

        <figure className="profile-quote">
          <q>
            Ehrlich, pünktlich, sauber gearbeitet — so soll Handwerk sein.
          </q>
          <div className="author">
            <span>M. KRÜGER · BAUHERR · CTB</span>
            <span>★★★★★</span>
          </div>
        </figure>
      </div>

      <div className="profile-stats">
        <div data-k="01">
          <div className="pstat-n">98<span className="u">+a</span></div>
          <div className="pstat-l">Jahre Erfahrung</div>
        </div>
        <div data-k="02">
          <div className="pstat-n">III<span className="u">gen</span></div>
          <div className="pstat-l">Generationen</div>
        </div>
        <div data-k="03">
          <div className="pstat-n">500<span className="u">/a</span></div>
          <div className="pstat-l">Projekte / Jahr</div>
        </div>
        <div data-k="04">
          <div className="pstat-n">4,9<span className="u">★</span></div>
          <div className="pstat-l">Bewertung</div>
        </div>
      </div>
    </section>
  );
}
