import { motion } from "framer-motion";
import {
  Flag,
  Heart,
  Users,
  BookOpen,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function Mission({ language = "es" }) {
  const isSpanish = language === "es";

  const pillars = isSpanish
    ? [
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
      ]
    : [
        {
          icon: Heart,
          title: "My family",
          text: "Build a future that also allows me to support and share with the people I love.",
        },
        {
          icon: Users,
          title: "Help others",
          text: "Use my abilities to contribute in some way to people and my community.",
        },
        {
          icon: BookOpen,
          title: "Keep learning",
          text: "Maintain my curiosity and continue developing my knowledge and skills.",
        },
        {
          icon: Sparkles,
          title: "Grow as a person",
          text: "Learn from every experience and gradually become a better version of myself.",
        },
      ];

  const principles = isSpanish
    ? [
        "Respeto",
        "Honestidad",
        "Responsabilidad",
        "Solidaridad",
        "Perseverancia",
      ]
    : [
        "Respect",
        "Honesty",
        "Responsibility",
        "Solidarity",
        "Perseverance",
      ];

  return (
    <section className="section mission-section">
      <div className="section-heading">
        <span className="section-label">
          {isSpanish
            ? "FASE 3 · DEFINIENDO MI DESTINO"
            : "PHASE 3 · DEFINING MY DESTINATION"}
        </span>

        <h2>
          {isSpanish ? "Mi " : "My "}
          <span>
            {isSpanish
              ? "misión personal"
              : "personal mission"}
          </span>
        </h2>

        <p>
          {isSpanish
            ? "Mi misión representa aquello que quiero aportar mientras construyo mi futuro personal y profesional."
            : "My mission represents what I want to contribute while building my personal and professional future."}
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

        <span>
          {isSpanish ? "MI MISIÓN ES..." : "MY MISSION IS..."}
        </span>

        <blockquote>
          {isSpanish
            ? "“Crecer como persona y profesional, aprovechar mis capacidades para ayudar a los demás, apoyar a mi familia y construir una vida independiente basada en el respeto, la honestidad y el deseo de aprender.”"
            : "“To grow as a person and professional, use my abilities to help others, support my family, and build an independent life based on respect, honesty, and the desire to learn.”"}
        </blockquote>

        <div className="mission-line"></div>

        <p>
          {isSpanish
            ? "Esta misión resume lo que quiero tener presente mientras tomo decisiones sobre mis estudios, mi profesión y mi vida."
            : "This mission summarizes what I want to keep in mind while making decisions about my studies, career, and life."}
        </p>
      </motion.div>

      {/* PILARES */}
      <div className="mission-pillars">
        <div className="mission-section-heading">
          <span>01</span>

          <div>
            <span className="mission-small-label">
              {isSpanish
                ? "LO QUE QUIERO CONSTRUIR"
                : "WHAT I WANT TO BUILD"}
            </span>

            <h3>
              {isSpanish
                ? "Los pilares de mi misión"
                : "The pillars of my mission"}
            </h3>
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
            {isSpanish
              ? "MIS PRINCIPIOS"
              : "MY PRINCIPLES"}
          </span>

          <h3>
            {isSpanish
              ? "Quiero que mis decisiones estén guiadas por mis valores."
              : "I want my decisions to be guided by my values."}
          </h3>

          <p>
            {isSpanish
              ? "Los valores que he elegido son una referencia para la manera en que quiero relacionarme con los demás y afrontar los retos que encuentre en mi camino."
              : "The values I have chosen guide the way I want to relate to others and face the challenges I encounter along my journey."}
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
          <strong>
            {isSpanish
              ? "Mi propósito no es solamente tener una profesión."
              : "My purpose is not only to have a profession."}
          </strong>{" "}
          {isSpanish
            ? "Quiero construir una vida independiente, ayudar a las personas que quiero y sentir orgullo por el camino que he recorrido."
            : "I want to build an independent life, help the people I love, and feel proud of the path I have taken."}
        </p>
      </motion.div>
    </section>
  );
}

export default Mission;