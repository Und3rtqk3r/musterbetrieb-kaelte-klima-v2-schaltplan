import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Profile from "./components/Profile.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useScrollReveal from "./hooks/useScrollReveal.js";

export default function App() {
  useScrollReveal();
  return (
    <>
      <div className="page-frame" aria-hidden="true">
        <span className="bl" />
        <span className="br" />
      </div>
      <div className="doc-titleblock" aria-hidden="true">
        <div className="lbl">DOC</div>
        <div className="val">DKK-001</div>
        <div className="lbl">REV</div>
        <div className="val">{new Date().getFullYear()}</div>
      </div>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Profile />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
