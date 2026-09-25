import { motion } from "framer-motion";
import {
  Plane,
  Home,
  Briefcase,
  Heart,
  Star,
} from "lucide-react";

function Vision({ language = "es" }) {
  const isSpanish = language === "es";

  const dreams = isSpanish
    ? [
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
      ]
    : [
        {
          icon: Briefcase,
          title: "Grow professionally",
          description:
            "Find a career I enjoy, prepare myself, and feel that I am building my own path.",
        },
        {
          icon: Home,
          title: "Become independent",
          description:
            "Gradually achieve greater personal and financial independence while making my own decisions.",
        },
        {
          icon: Heart,
          title: "Help my family",
          description:
            "Give back to my family for some of the support they have given me and share my achievements with them.",
        },
        {
          icon: Plane,
          title: "Discover new places",
          description:
            "Travel, visit different places, have new experiences, and discover other ways of seeing the world.",
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

        <span>
          {isSpanish
            ? "07 — MI VISIÓN PERSONAL"
            : "07 — MY PERSONAL VISION"}
        </span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {isSpanish ? (
            <>
              La vida que quiero
              <strong> construir.</strong>
            </>
          ) : (
            <>
              The life I want to
              <strong> build.</strong>
            </>
          )}
        </motion.h2>

        <p>
          {isSpanish
            ? "Quiero mirar hacia atrás algún día y sentir que cada esfuerzo, cada decisión y cada experiencia tuvieron un propósito."
            : "I want to look back one day and feel that every effort, every decision, and every experience had a purpose."}
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
          {isSpanish
            ? '"Mi proyecto de vida no es tener todas las respuestas, sino tener el valor para seguir buscando mi camino."'
            : '"My life project is not about having all the answers, but having the courage to keep searching for my path."'}
        </p>

        <span>— Adriana Jiménez</span>
      </motion.div>
    </section>
  );
}

export default Vision;