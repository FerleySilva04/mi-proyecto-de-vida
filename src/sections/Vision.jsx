import { motion } from "framer-motion";
import {
  Plane,
  Home,
  Briefcase,
  Heart,
  Star,
} from "lucide-react";

function Vision() {
  const dreams = [
    {
      icon: Briefcase,
      title: "Crecer profesionalmente",
      description:
        "Encontrar una profesión que me guste, prepararme y sentir que estoy construyendo un camino propio.",
    },
    {
      icon: Home,
      title: "Ser independiente",
      description:
        "Lograr poco a poco una mayor independencia personal y económica, tomando mis propias decisiones.",
    },
    {
      icon: Heart,
      title: "Ayudar a mi familia",
      description:
        "Poder devolverle a mi familia parte del apoyo que me ha brindado y compartir con ellos mis logros.",
    },
    {
      icon: Plane,
      title: "Conocer nuevos lugares",
      description:
        "Viajar, conocer diferentes lugares, vivir nuevas experiencias y descubrir otras formas de ver el mundo.",
    },
  ];

  return (
    <section id="vision" className="section vision-section">
      <div className="vision-hero">
        <motion.div
          className="vision-symbol"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Star size={26} />
        </motion.div>

        <span>07 — MI VISIÓN PERSONAL</span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          La vida que quiero
          <strong> construir.</strong>
        </motion.h2>

        <p>
          Quiero mirar hacia atrás algún día y sentir que cada
          esfuerzo, cada decisión y cada experiencia tuvieron
          un propósito.
        </p>
      </div>

      <div className="dreams-grid">
        {dreams.map((dream, index) => {
          const Icon = dream.icon;

          return (
            <motion.article
              className="dream-card"
              key={dream.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div className="dream-icon">
                <Icon size={22} />
              </div>

              <h3>{dream.title}</h3>

              <p>{dream.description}</p>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        className="vision-final"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="vision-final-line"></div>

        <p>
          "Mi proyecto de vida no es tener todas las respuestas,
          sino tener el valor para seguir buscando mi camino."
        </p>

        <span>— Adriana Jiménez</span>
      </motion.div>
    </section>
  );
}

export default Vision;