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

function Gamification() {
  const levels = [
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
  ];

  const rewards = [
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
  ];

  const powerUps = [
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
  ];

  return (
    <section className="section gamification-section">
      <div className="section-heading">
        <span className="section-label">
          EXTRAS · GAMIFICACIÓN
        </span>

        <h2>
          Mi vida como <span>un videojuego</span>
        </h2>

        <p>
          Una forma divertida de representar mis avances, aprendizajes,
          recompensas y próximos retos.
        </p>
      </div>

      <motion.div
        className="gamification-profile"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="gamification-avatar">
          A
        </div>

        <div className="gamification-profile-info">
          <span>JUGADORA</span>

          <h3>Adriana Jiménez</h3>

          <p>
            Nivel actual: <strong>3 · Decido</strong>
          </p>
        </div>

        <div className="gamification-xp">
          <div>
            <span>EXPERIENCIA</span>

            <strong>1.850 XP</strong>
          </div>

          <div className="gamification-xp-bar">
            <div style={{ width: "68%" }}></div>
          </div>

          <small>
            68% para desbloquear el siguiente nivel
          </small>
        </div>
      </motion.div>

      {/* NIVELES */}

      <div className="gamification-block">
        <div className="gamification-block-heading">
          <span>01</span>

          <div>
            <span className="gamification-small-label">
              MI RUTA
            </span>

            <h3>Los niveles de mi proyecto</h3>
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
              RECOMPENSAS
            </span>

            <h3>Lo que quiero ganar en el camino</h3>
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

            <h3>Cosas que me ayudan a recuperar energía</h3>
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
          <strong>Cada pequeño avance cuenta.</strong> No necesito completar
          todos los niveles rápidamente. Lo importante es seguir aprendiendo,
          avanzar a mi propio ritmo y disfrutar el proceso.
        </p>
      </motion.div>
    </section>
  );
}

export default Gamification;