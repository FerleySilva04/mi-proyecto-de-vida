import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  Users,
  TrendingUp,
  Heart,
  ArrowRight,
} from "lucide-react";

function Plan({ language = "es" }) {
  const isSpanish = language === "es";

  const steps = isSpanish
    ? [
        {
          number: "01",
          icon: Search,
          title: "Conocer mis opciones",
          description:
            "Investigar las carreras y caminos profesionales que más se relacionan con mis intereses y habilidades.",
        },
        {
          number: "02",
          icon: BookOpen,
          title: "Seguir preparándome",
          description:
            "Continuar aprendiendo, mejorar mis conocimientos y aprovechar las oportunidades de formación que encuentre.",
        },
        {
          number: "03",
          icon: Users,
          title: "Aprender de los demás",
          description:
            "Escuchar consejos de mi familia, profesores y personas con experiencia que puedan orientarme en mis decisiones.",
        },
        {
          number: "04",
          icon: TrendingUp,
          title: "Ganar experiencia",
          description:
            "Buscar oportunidades para desarrollar habilidades, conocer nuevos ambientes y acercarme poco a poco al mundo profesional.",
        },
        {
          number: "05",
          icon: Heart,
          title: "Cuidar lo que importa",
          description:
            "Mantener cerca a mi familia y conservar los valores que considero importantes mientras avanzo hacia mis objetivos.",
        },
      ]
    : [
        {
          number: "01",
          icon: Search,
          title: "Learn about my options",
          description:
            "Research the careers and professional paths that are most connected to my interests and skills.",
        },
        {
          number: "02",
          icon: BookOpen,
          title: "Keep preparing myself",
          description:
            "Continue learning, improve my knowledge, and take advantage of the training opportunities I find.",
        },
        {
          number: "03",
          icon: Users,
          title: "Learn from others",
          description:
            "Listen to advice from my family, teachers, and experienced people who can guide me in my decisions.",
        },
        {
          number: "04",
          icon: TrendingUp,
          title: "Gain experience",
          description:
            "Look for opportunities to develop skills, discover new environments, and gradually get closer to the professional world.",
        },
        {
          number: "05",
          icon: Heart,
          title: "Take care of what matters",
          description:
            "Keep my family close and hold on to the values that are important to me while moving toward my goals.",
        },
      ];

  return (
    <section id="plan" className="section plan-section">
      <div className="section-heading">
        <span className="section-label">
          {isSpanish
            ? "06 — Pasar de los sueños a la acción"
            : "06 — Turning dreams into action"}
        </span>

        <h2>
          {isSpanish ? "Mi plan de " : "My "}
          <span>
            {isSpanish ? "acción" : "action plan"}
          </span>
        </h2>

        <p>
          {isSpanish
            ? "Tener sueños es importante, pero también lo es dar pequeños pasos para convertirlos en realidad."
            : "Having dreams is important, but taking small steps to turn them into reality is just as important."}
        </p>
      </div>

      <div className="plan-layout">
        <div className="plan-intro">
          <span>
            {isSpanish ? "MI CAMINO" : "MY PATH"}
          </span>

          <h3>
            {isSpanish ? (
              <>
                Un paso a la vez,
                <strong> sin dejar de avanzar.</strong>
              </>
            ) : (
              <>
                One step at a time,
                <strong> always moving forward.</strong>
              </>
            )}
          </h3>

          <p>
            {isSpanish
              ? "No espero conseguir todo de inmediato. Quiero aprender de cada etapa, aprovechar las oportunidades y mantenerme enfocada en aquello que quiero construir."
              : "I do not expect to achieve everything immediately. I want to learn from every stage, take advantage of opportunities, and stay focused on what I want to build."}
          </p>

          <div className="plan-arrow">
            <ArrowRight size={20} />

            <span>
              {isSpanish
                ? "Mi proceso continúa"
                : "My journey continues"}
            </span>
          </div>
        </div>

        <div className="plan-steps">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                className="plan-step"
                key={step.number}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="plan-step-number">
                  {step.number}
                </div>

                <div className="plan-step-icon">
                  <Icon size={20} />
                </div>

                <div className="plan-step-content">
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <motion.div
        className="plan-quote"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span>✦</span>

        <p>
          {isSpanish
            ? '"El futuro que quiero empieza con las decisiones que tomo hoy."'
            : '"The future I want begins with the decisions I make today."'}
        </p>
      </motion.div>
    </section>
  );
}

export default Plan;