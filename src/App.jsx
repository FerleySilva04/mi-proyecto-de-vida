import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Values from "./sections/Values";
import Future from "./sections/Future";
import Historia from "./sections/Historia";
import Goals from "./sections/Goals";
import Plan from "./sections/Plan";
import Vision from "./sections/Vision";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <AboutMe />

        <Values />

        <Future />

        <Historia />

        <Goals />

        <Plan />

        <Vision />
      </main>

      <Footer />
    </div>
  );
}

export default App;