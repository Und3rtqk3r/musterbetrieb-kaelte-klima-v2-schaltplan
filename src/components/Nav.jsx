import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav-wrap">
      <nav className={`nav${open ? " open" : ""}`}>
        <a className="brand" href="#top" onClick={close}>
          <span className="brand-main">DOTZAUER</span>
          <span className="brand-sub">Kälte · Klima · Anl.-Bau / 1927</span>
        </a>

        <div className="nav-meta">
          <span>Datenblatt 001</span>
          <span className="x">⌀</span>
          <span>Rev. {new Date().getFullYear()}</span>
        </div>

        <ul className="nav-links">
          <li><a href="#leistungen" onClick={close}>Leistungen</a></li>
          <li><a href="#profil"     onClick={close}>Profil</a></li>
          <li><a href="#galerie"    onClick={close}>Werkschau</a></li>
          <li><a href="#kontakt"    onClick={close}>Kontakt</a></li>
        </ul>

        <button
          className="nav-toggle"
          aria-label="Menü"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  );
}
