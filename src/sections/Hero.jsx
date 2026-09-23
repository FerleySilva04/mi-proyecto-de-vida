import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

function Hero({ onNavigate }) {
  return (
    <section id="inicio" className="hero">
      <div className="hero-background">
        <div className="hero-orb hero-orb-one"></div>
        <div className="hero-orb hero-orb-two"></div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles size={17} />
          Mi historia comienza aquí
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Construyendo
          <span> mi futuro</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Soy Adriana Jiménez, tengo 18 años y estoy construyendo
          mi camino con sueños, metas y muchas ganas de aprender
          y crecer.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <button
            className="button button-primary"
            onClick={() => onNavigate("quien-soy")}
          >
            Conoce mi historia
            <ArrowRight size={18} />
          </button>

          <button
            className="button button-secondary"
            onClick={() => onNavigate("metas")}
          >
            Ver mis metas
          </button>
        </motion.div>
      </div>

      <div className="hero-scroll">
        <span>Explora mi proyecto</span>
        <ArrowRight size={18} />
      </div>
    </section>
  );
}

export default Hero;