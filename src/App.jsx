import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <AboutMe />

        <section id="valores" className="placeholder-section">
          <span>02 — Mis valores</span>
          <h2>Próximamente...</h2>
        </section>

        <section id="futuro" className="placeholder-section">
          <span>03 — Mi futuro</span>
          <h2>Próximamente...</h2>
        </section>

        <section id="historia" className="placeholder-section">
          <span>04 — Mi historia</span>
          <h2>Próximamente...</h2>
        </section>
      </main>
    </div>
  );
}

export default App;