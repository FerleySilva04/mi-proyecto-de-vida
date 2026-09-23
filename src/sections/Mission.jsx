import { motion } from "framer-motion";
import {
  Flag,
  Heart,
  Users,
  BookOpen,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function Mission() {
  const pillars = [
    {
      icon: Heart,
      title: "Mi familia",
      text: "Construir un futuro que también me permita apoyar y compartir con las personas que quiero.",
    },
    {
      icon: Users,
      title: "Ayudar a otros",
      text: "Utilizar mis capacidades para aportar de alguna manera a las personas y a mi comunidad.",
    },
    {
      icon: BookOpen,
      title: "Seguir aprendiendo",
      text: "Mantener la curiosidad y continuar desarrollando mis conocimientos y habilidades.",
    },
    {
      icon: Sparkles,
      title: "Crecer como persona",
      text: "Aprender de cada experiencia y convertirme poco a poco en una mejor versión de mí misma.",
    },
  ];

  const principles = [
    "Respeto",
    "Honestidad",
    "Responsabilidad",
    "Solidaridad",
    "Perseverancia",
  ];

  return (
    <section className="section mission-section">
      <div className="section-heading">
        <span className="section-label">
          FASE 3 · DEFINIENDO MI DESTINO
        </span>

        <h2>Mi misión personal</h2>

        <p>
          Mi misión representa aquello que quiero aportar mientras construyo
          mi futuro personal y profesional.
        </p>
      </div>

      {/* MISIÓN PRINCIPAL */}
      <motion.div
        className="mission-main"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mission-symbol">
          <Flag size={28} />
        </div>

        <span>MI MISIÓN ES...</span>

        <blockquote>
          “Crecer como persona y profesional, aprovechar mis capacidades para
          ayudar a los demás, apoyar a mi familia y construir una vida
          independiente basada en el respeto, la honestidad y el deseo de
          aprender.”
        </blockquote>

        <div className="mission-line"></div>

        <p>
          Esta misión resume lo que quiero tener presente mientras tomo
          decisiones sobre mis estudios, mi profesión y mi vida.
        </p>
      </motion.div>

      {/* PILARES */}
      <div className="mission-pillars">
        <div className="mission-section-heading">
          <span>01</span>

          <div>
            <span className="mission-small-label">
              LO QUE QUIERO CONSTRUIR
            </span>

            <h3>Los pilares de mi misión</h3>
          </div>
        </div>

        <div className="mission-pillars-grid">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.article
                key={pillar.title}
                className="mission-pillar-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
              >
                <div className="mission-pillar-top">
                  <div className="mission-pillar-icon">
                    <Icon size={20} />
                  </div>

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h4>{pillar.title}</h4>

                <p>{pillar.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* PRINCIPIOS */}
      <div className="mission-principles">
        <div className="mission-principles-content">
          <span className="mission-small-label">
            MIS PRINCIPIOS
          </span>

          <h3>
            Quiero que mis decisiones estén guiadas por mis valores.
          </h3>

          <p>
            Los valores que he elegido son una referencia para la manera en
            que quiero relacionarme con los demás y afrontar los retos que
            encuentre en mi camino.
          </p>
        </div>

        <div className="mission-principles-list">
          {principles.map((principle, index) => (
            <motion.div
              key={principle}
              className="mission-principle"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.06,
              }}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{principle}</strong>

              <ArrowRight size={15} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CIERRE */}
      <motion.div
        className="mission-closing"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Sparkles size={20} />

        <p>
          <strong>Mi propósito no es solamente tener una profesión.</strong>{" "}
          Quiero construir una vida independiente, ayudar a las personas que
          quiero y sentir orgullo por el camino que he recorrido.
        </p>
      </motion.div>
    </section>
  );
}

export default Mission;