import { motion } from "framer-motion";
import {
  Clock3,
  Rocket,
  Trophy,
  CheckCircle2,
} from "lucide-react";

function Goals() {
  const goals = [
    {
      icon: Clock3,
      period: "Corto plazo",
      time: "Próximo año",
      title: "Cerrar una etapa y comenzar otra",
      description:
        "Terminar mi etapa escolar de la mejor manera y continuar preparándome para comenzar una carrera profesional relacionada con mis intereses.",
      actions: [
        "Finalizar mis estudios",
        "Investigar carreras profesionales",
        "Prepararme para mi siguiente etapa",
      ],
    },
    {
      icon: Rocket,
      period: "Mediano plazo",
      time: "1 a 3 años",
      title: "Construir mi camino profesional",
      description:
        "Avanzar en mis estudios, descubrir nuevas habilidades y comenzar a adquirir experiencias que me ayuden a crecer personal y profesionalmente.",
      actions: [
        "Avanzar en mi carrera",
        "Desarrollar nuevas habilidades",
        "Adquirir experiencia",
      ],
    },
    {
      icon: Trophy,
      period: "Largo plazo",
      time: "3 a 5 años",
      title: "Alcanzar mayor independencia",
      description:
        "Lograr estabilidad personal y profesional, acercarme a mis objetivos y comenzar a construir la vida que siempre he imaginado.",
      actions: [
        "Consolidar mi profesión",
        "Lograr independencia",
        "Apoyar a mi familia",
      ],
    },
  ];

  return (
    <section id="metas" className="section goals-section">
      <div className="section-heading">
        <span className="section-label">
          05 — Lo que quiero lograr
        </span>

        <h2>
          Mis <span>metas</span>
        </h2>

        <p>
          Los grandes sueños se construyen paso a paso. Estas
          son algunas de las metas que quiero alcanzar en las
          diferentes etapas de mi vida.
        </p>
      </div>

      <div className="goals-grid">
        {goals.map((goal, index) => {
          const Icon = goal.icon;

          return (
            <motion.article
              className="goal-card"
              key={goal.period}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <div className="goal-top">
                <div className="goal-icon">
                  <Icon size={23} />
                </div>

                <span>{goal.time}</span>
              </div>

              <span className="goal-period">
                {goal.period}
              </span>

              <h3>{goal.title}</h3>

              <p className="goal-description">
                {goal.description}
              </p>

              <div className="goal-actions">
                {goal.actions.map((action) => (
                  <div
                    className="goal-action"
                    key={action}
                  >
                    <CheckCircle2 size={17} />
                    <span>{action}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        className="goals-final"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <span>MI COMPROMISO</span>

          <h3>
            No necesito tener todo resuelto hoy.
            <br />
            Solo necesito seguir avanzando.
          </h3>
        </div>

        <div className="goals-final-symbol">
          ✦
        </div>
      </motion.div>
    </section>
  );
}

export default Goals;