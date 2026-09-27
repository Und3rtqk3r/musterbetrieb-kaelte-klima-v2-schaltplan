import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="section">
      <div className="section-head">
        <div className="head-side">
          <span className="label">
            <span className="num">SEKT. 04</span>
            <span>Kontaktblatt</span>
            <span className="ref">// Anfrage</span>
          </span>
          <span className="annotation">Antwort &lt; 24 h</span>
        </div>
        <div>
          <h2>
            Anfrage <span className="b">stellen</span>.
          </h2>
        </div>
      </div>

      <div className="contact">
        <aside className="contact-card">
          <div className="letterhead">
            <span>DOTZAUER KÄLTE &amp; KLIMA GMBH</span>
            <span className="em">USt-Id DE…</span>
          </div>
          <div className="body">
            <ul>
              <li>
                <strong>Adresse</strong>
                <span className="value">Musterstraße 1 · 12345 Musterstadt</span>
              </li>
              <li>
                <strong>Telefon</strong>
                <a href="tel:+49 000 000000">0000 / 00 00 00</a>
              </li>
              <li>
                <strong>Notdienst</strong>
                <a href="tel:+49 000 000001">0000 / 00 00 01 · 24/7</a>
              </li>
              <li>
                <strong>E-Post</strong>
                <a href="mailto:info@musterbetrieb-kaelte-klima.example">info@musterbetrieb-kaelte-klima.example</a>
              </li>
              <li>
                <strong>Öffnungszeit</strong>
                <span className="value">Mo – Fr · 07 – 17 Uhr</span>
              </li>
            </ul>
          </div>
        </aside>

        <form
          className="contact-form"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <div className="form-label">
            <span>FORM-001 · Anfrageblatt</span>
          </div>

          <div className="form-row">
            <label>
              <span>Name</span>
              <input type="text" required placeholder="Ihr vollständiger Name" />
            </label>
            <label>
              <span>E-Post</span>
              <input type="email" required placeholder="ihre@adresse.de" />
            </label>
          </div>

          <div className="form-row">
            <label>
              <span>Anlage / Typ</span>
              <input type="text" placeholder="z.B. Wärmepumpe Eigenheim" />
            </label>
            <label>
              <span>Standort</span>
              <input type="text" placeholder="z.B. Cottbus / Berlin" />
            </label>
          </div>

          <div className="form-row full">
            <label>
              <span>Beschreibung</span>
              <textarea rows="3" required placeholder="Kurze Beschreibung Ihres Anliegens — Anlage, Standort, Termin." />
            </label>
          </div>

          {sent ? (
            <p className="form-success">
              ✓ Anfrage № {Math.floor(Math.random()*9000)+1000} eingegangen. Wir melden uns binnen 24 h.
            </p>
          ) : (
            <div className="actions">
              <span className="note">// Vertraulich · Antwort &lt; 24 h</span>
              <button type="submit" className="btn btn-primary">
                Absenden <span className="arrow">→</span>
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
