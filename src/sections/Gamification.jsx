import { motion } from "framer-motion";
import {
  Trophy,
  Star,
  Zap,
  Music,
  Users,
  BookOpen,
  Footprints,
  Moon,
  Sparkles,
  Lock,
} from "lucide-react";

function Gamification({ language = "es" }) {
  const isSpanish = language === "es";

  const levels = isSpanish
    ? [
        {
          number: "01",
          title: "Me conozco",
          description:
            "Identifico mis valores, fortalezas, intereses y aspectos por mejorar.",
          status: "Completado",
        },
        {
          number: "02",
          title: "Exploro",
          description:
            "Investigo carreras, universidades, profesiones y diferentes posibilidades.",
          status: "Completado",
        },
        {
          number: "03",
          title: "Decido",
          description:
            "Comparo opciones y empiezo a tomar decisiones sobre mi futuro.",
          status: "En progreso",
        },
        {
          number: "04",
          title: "Construyo",
          description:
            "Desarrollo habilidades, gano experiencia y convierto mis planes en acciones.",
          status: "Próximo nivel",
        },
        {
          number: "05",
          title: "Dejo mi huella",
          description:
            "Utilizo lo que he aprendido para aportar a mi familia, comunidad y entorno.",
          status: "Meta futura",
        },
      ]
    : [
        {
          number: "01",
          title: "I know myself",
          description:
            "I identify my values, strengths, interests, and areas for improvement.",
          status: "Completed",
        },
        {
          number: "02",
          title: "I explore",
          description:
            "I research careers, universities, professions, and different possibilities.",
          status: "Completed",
        },
        {
          number: "03",
          title: "I decide",
          description:
            "I compare options and begin making decisions about my future.",
          status: "In progress",
        },
        {
          number: "04",
          title: "I build",
          description:
            "I develop skills, gain experience, and turn my plans into actions.",
          status: "Next level",
        },
        {
          number: "05",
          title: "I leave my mark",
          description:
            "I use what I have learned to contribute to my family, community, and environment.",
          status: "Future goal",
        },
      ];

  const rewards = isSpanish
    ? [
        {
          icon: Star,
          title: "Constancia",
          text: "Por mantenerme trabajando en mis objetivos.",
        },
        {
          icon: BookOpen,
          title: "Aprendizaje",
          text: "Por adquirir nuevos conocimientos y habilidades.",
        },
        {
          icon: Trophy,
          title: "Enfoque",
          text: "Por mantener presentes mis prioridades.",
        },
        {
          icon: Sparkles,
          title: "Exploradora",
          text: "Por atreverme a conocer nuevas posibilidades.",
        },
      ]
    : [
        {
          icon: Star,
          title: "Consistency",
          text: "For staying committed to my goals.",
        },
        {
          icon: BookOpen,
          title: "Learning",
          text: "For gaining new knowledge and skills.",
        },
        {
          icon: Trophy,
          title: "Focus",
          text: "For keeping my priorities in mind.",
        },
        {
          icon: Sparkles,
          title: "Explorer",
          text: "For daring to discover new possibilities.",
        },
      ];

  const powerUps = isSpanish
    ? [
        {
          icon: Music,
          title: "Música",
        },
        {
          icon: Users,
          title: "Hablar con mi familia",
        },
        {
          icon: Footprints,
          title: "Salir a caminar",
        },
        {
          icon: BookOpen,
          title: "Leer",
        },
        {
          icon: Moon,
          title: "Descansar",
        },
      ]
    : [
        {
          icon: Music,
          title: "Music",
        },
        {
          icon: Users,
          title: "Talking with my family",
        },
        {
          icon: Footprints,
          title: "Going for a walk",
        },
        {
          icon: BookOpen,
          title: "Reading",
        },
        {
          icon: Moon,
          title: "Resting",
        },
      ];

  return (
    <section className="section gamification-section">
      <div className="section-heading">
        <span className="section-label">
          {isSpanish
            ? "EXTRAS · GAMIFICACIÓN"
            : "EXTRAS · GAMIFICATION"}
        </span>

        <h2>
          {isSpanish ? "Mi vida como " : "My life as "}
          <span>
            {isSpanish ? "un videojuego" : "a video game"}
          </span>
        </h2>

        <p>
          {isSpanish
            ? "Una forma divertida de representar mis avances, aprendizajes, recompensas y próximos retos."
            : "A fun way to represent my progress, learning, rewards, and upcoming challenges."}
        </p>
      </div>

      <motion.div
        className="gamification-profile"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="gamification-avatar">A</div>

        <div className="gamification-profile-info">
          <span>
            {isSpanish ? "JUGADORA" : "PLAYER"}
          </span>

          <h3>Adriana Jiménez</h3>

          <p>
            {isSpanish ? "Nivel actual: " : "Current level: "}
            <strong>
              {isSpanish ? "3 · Decido" : "3 · I Decide"}
            </strong>
          </p>
        </div>

        <div className="gamification-xp">
          <div>
            <span>
              {isSpanish ? "EXPERIENCIA" : "EXPERIENCE"}
            </span>

            <strong>1.850 XP</strong>
          </div>

          <div className="gamification-xp-bar">
            <div style={{ width: "68%" }}></div>
          </div>

          <small>
            {isSpanish
              ? "68% para desbloquear el siguiente nivel"
              : "68% to unlock the next level"}
          </small>
        </div>
      </motion.div>

      {/* NIVELES */}

      <div className="gamification-block">
        <div className="gamification-block-heading">
          <span>01</span>

          <div>
            <span className="gamification-small-label">
              {isSpanish ? "MI RUTA" : "MY PATH"}
            </span>

            <h3>
              {isSpanish
                ? "Los niveles de mi proyecto"
                : "The levels of my project"}
            </h3>
          </div>
        </div>

        <div className="gamification-levels">
          {levels.map((level, index) => (
            <motion.article
              className={`gamification-level ${
                index < 2 ? "unlocked" : ""
              }`}
              key={level.number}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.07,
              }}
            >
              <div className="gamification-level-number">
                {index < 2 ? (
                  <Trophy size={17} />
                ) : (
                  level.number
                )}
              </div>

              <div className="gamification-level-content">
                <span>{level.status}</span>

                <h4>{level.title}</h4>

                <p>{level.description}</p>
              </div>

              {index >= 3 && (
                <Lock
                  className="gamification-lock"
                  size={17}
                />
              )}
            </motion.article>
          ))}
        </div>
      </div>

      {/* RECOMPENSAS */}

      <div className="gamification-rewards">
        <div className="gamification-block-heading">
          <span>02</span>

          <div>
            <span className="gamification-small-label">
              {isSpanish ? "RECOMPENSAS" : "REWARDS"}
            </span>

            <h3>
              {isSpanish
                ? "Lo que quiero ganar en el camino"
                : "What I want to gain along the way"}
            </h3>
          </div>
        </div>

        <div className="gamification-rewards-grid">
          {rewards.map((reward, index) => {
            const Icon = reward.icon;

            return (
              <motion.article
                className="gamification-reward"
                key={reward.title}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.07,
                }}
              >
                <div className="gamification-reward-icon">
                  <Icon size={20} />
                </div>

                <h4>{reward.title}</h4>

                <p>{reward.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* POWER UPS */}

      <div className="gamification-powerups">
        <div className="gamification-block-heading">
          <span>03</span>

          <div>
            <span className="gamification-small-label">
              POWER-UPS
            </span>

            <h3>
              {isSpanish
                ? "Cosas que me ayudan a recuperar energía"
                : "Things that help me recharge my energy"}
            </h3>
          </div>
        </div>

        <div className="gamification-powerup-list">
          {powerUps.map((powerUp, index) => {
            const Icon = powerUp.icon;

            return (
              <motion.div
                className="gamification-powerup"
                key={powerUp.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.06,
                }}
              >
                <Icon size={18} />

                <span>{powerUp.title}</span>

                <Zap size={15} />
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        className="gamification-closing"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <Sparkles size={20} />

        <p>
          <strong>
            {isSpanish
              ? "Cada pequeño avance cuenta."
              : "Every small step counts."}
          </strong>{" "}
          {isSpanish
            ? "No necesito completar todos los niveles rápidamente. Lo importante es seguir aprendiendo, avanzar a mi propio ritmo y disfrutar el proceso."
            : "I do not need to complete every level quickly. What matters is continuing to learn, moving at my own pace, and enjoying the process."}
        </p>
      </motion.div>
    </section>
  );
}

export default Gamification;