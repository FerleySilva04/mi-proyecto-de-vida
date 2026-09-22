import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

function Hero() {
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
          Un viaje para descubrir quién soy, qué quiero lograr
          y cómo convertir mis sueños en metas.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a href="#quien-soy" className="button button-primary">
            Conoce mi historia
            <ArrowDown size={18} />
          </a>

          <a href="#futuro" className="button button-secondary">
            Ver mis metas
          </a>
        </motion.div>
      </div>

      <div className="hero-scroll">
        <span>Explora mi proyecto</span>
        <ArrowDown size={18} />
      </div>
    </section>
  );
}

export default Hero;