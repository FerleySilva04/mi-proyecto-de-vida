import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  Users,
  TrendingUp,
  Heart,
  ArrowRight,
} from "lucide-react";

function Plan() {
  const steps = [
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
  ];

  return (
    <section id="plan" className="section plan-section">
      <div className="section-heading">
        <span className="section-label">
          06 — Pasar de los sueños a la acción
        </span>

        <h2>
          Mi plan de <span>acción</span>
        </h2>

        <p>
          Tener sueños es importante, pero también lo es dar
          pequeños pasos para convertirlos en realidad.
        </p>
      </div>

      <div className="plan-layout">
        <div className="plan-intro">
          <span>MI CAMINO</span>

          <h3>
            Un paso a la vez,
            <strong> sin dejar de avanzar.</strong>
          </h3>

          <p>
            No espero conseguir todo de inmediato. Quiero
            aprender de cada etapa, aprovechar las oportunidades
            y mantenerme enfocada en aquello que quiero construir.
          </p>

          <div className="plan-arrow">
            <ArrowRight size={20} />
            <span>Mi proceso continúa</span>
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
          "El futuro que quiero empieza con las decisiones
          que tomo hoy."
        </p>
      </motion.div>
    </section>
  );
}

export default Plan;