import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Home,
  Heart,
  Sparkles,
} from "lucide-react";

function Future() {
  const timeline = [
    {
      year: "2026",
      icon: GraduationCap,
      title: "Un nuevo comienzo",
      description:
        "Terminar mi etapa escolar y comenzar a prepararme para la carrera profesional que quiero construir.",
    },
    {
      year: "2027",
      icon: BookOpen,
      title: "Aprender y crecer",
      description:
        "Avanzar en mis estudios, descubrir nuevas habilidades y conocer mejor mis intereses profesionales.",
    },
    {
      year: "2028",
      icon: Sparkles,
      title: "Construir mi camino",
      description:
        "Continuar mi formación y comenzar a tomar decisiones más claras sobre el futuro que quiero.",
    },
    {
      year: "2029",
      icon: Briefcase,
      title: "Primeros pasos profesionales",
      description:
        "Buscar oportunidades para adquirir experiencia y aplicar lo que he aprendido durante mi formación.",
    },
    {
      year: "2030",
      icon: Home,
      title: "Más independencia",
      description:
        "Trabajar por mi estabilidad económica y personal, mientras sigo creciendo profesionalmente.",
    },
    {
      year: "2031",
      icon: Heart,
      title: "Una vida construida con propósito",
      description:
        "Estar más cerca de mis grandes objetivos, apoyar a mi familia y sentirme orgullosa del camino recorrido.",
    },
  ];

  return (
    <section id="futuro" className="section future-section">
      <div className="section-heading">
        <span className="section-label">
          03 — Mirando hacia adelante
        </span>

        <h2>
          Mi <span>futuro</span>
        </h2>

        <p>
          No puedo saber exactamente qué ocurrirá, pero sí puedo
          decidir qué pasos quiero dar para acercarme a la vida
          que imagino.
        </p>
      </div>

      <div className="future-intro">
        <div>
          <span className="future-intro-label">
            MI VISIÓN
          </span>

          <h3>
            Quiero convertirme en una mujer
            <span> independiente y preparada.</span>
          </h3>
        </div>

        <p>
          Mi objetivo es seguir aprendiendo, encontrar una
          profesión que me apasione y construir un futuro en el
          que pueda crecer sin olvidar mis valores.
        </p>
      </div>

      <div className="timeline">
        {timeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              className="timeline-item"
              key={item.year}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <div className="timeline-year">
                {item.year}
              </div>

              <div className="timeline-line">
                <div className="timeline-dot">
                  <Icon size={18} />
                </div>
              </div>

              <div className="timeline-card">
                <span>{item.year}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        className="future-dream"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="future-dream-icon">
          ✦
        </div>

        <div>
          <span>MI GRAN SUEÑO</span>

          <h3>
            Viajar, conocer nuevos lugares y construir una vida
            de la que pueda sentirme orgullosa.
          </h3>
        </div>
      </motion.div>
    </section>
  );
}

export default Future;