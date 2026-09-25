import { motion } from "framer-motion";
import {
  MapPin,
  Home,
  GraduationCap,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function Historia({ language = "es" }) {
  const isSpanish = language === "es";

  const timeline = isSpanish
    ? [
        {
          number: "01",
          title: "Mis primeros años",
          place: "Las Delicias · Ayapel, Córdoba",
          icon: Home,
          text: "Nací en el corregimiento de Las Delicias, Ayapel, Córdoba. Allí comenzaron mis primeras experiencias y recuerdos junto a mi familia.",
        },
        {
          number: "02",
          title: "Un nuevo lugar",
          place: "San Juan Nepomuceno · Bolívar",
          icon: MapPin,
          text: "Con mi familia nos trasladamos a San Juan Nepomuceno, donde viví gran parte de mi etapa escolar y fui construyendo nuevas experiencias.",
        },
        {
          number: "03",
          title: "Mi etapa escolar",
          place: "Aprender y descubrir",
          icon: GraduationCap,
          text: "Durante mis años de estudio fui descubriendo mis intereses, mis capacidades y diferentes posibilidades para mi futuro.",
        },
        {
          number: "04",
          title: "Mi presente",
          place: "18 años · Construyendo mi futuro",
          icon: Users,
          text: "Hoy estoy en una etapa de decisiones importantes. Quiero terminar bien mis estudios, explorar mis opciones y comenzar a construir mi independencia.",
        },
      ]
    : [
        {
          number: "01",
          title: "My early years",
          place: "Las Delicias · Ayapel, Córdoba",
          icon: Home,
          text: "I was born in the village of Las Delicias, Ayapel, Córdoba. That is where my first experiences and memories with my family began.",
        },
        {
          number: "02",
          title: "A new place",
          place: "San Juan Nepomuceno · Bolívar",
          icon: MapPin,
          text: "My family and I moved to San Juan Nepomuceno, where I spent much of my school years and built new experiences.",
        },
        {
          number: "03",
          title: "My school years",
          place: "Learning and discovering",
          icon: GraduationCap,
          text: "Throughout my years of study, I discovered my interests, my abilities, and different possibilities for my future.",
        },
        {
          number: "04",
          title: "My present",
          place: "18 years old · Building my future",
          icon: Users,
          text: "Today I am at a stage of important decisions. I want to finish my studies well, explore my options, and begin building my independence.",
        },
      ];

  return (
    <section className="section historia-section">
      <div className="section-heading">
        <span className="section-label">
          {isSpanish
            ? "EXTRAS · MI HISTORIA"
            : "EXTRAS · MY STORY"}
        </span>

        <h2>
          {isSpanish ? "De dónde " : "Where I "}
          <span>{isSpanish ? "vengo" : "come from"}</span>
        </h2>

        <p>
          {isSpanish
            ? "Mi historia explica parte de la persona que soy hoy y de las experiencias que han influido en mis sueños."
            : "My story explains part of who I am today and the experiences that have influenced my dreams."}
        </p>
      </div>

      <motion.div
        className="historia-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="historia-intro-icon">
          <Sparkles size={25} />
        </div>

        <div>
          <span>
            {isSpanish ? "MI HISTORIA" : "MY STORY"}
          </span>

          <h3>
            {isSpanish
              ? "Cada etapa de mi vida ha dejado algo que llevar conmigo."
              : "Every stage of my life has left something for me to carry forward."}
          </h3>

          <p>
            {isSpanish
              ? "No puedo cambiar de dónde vengo, pero sí puedo decidir qué hago con todo lo que he aprendido en el camino."
              : "I cannot change where I come from, but I can decide what I do with everything I have learned along the way."}
          </p>
        </div>
      </motion.div>

      <div className="historia-timeline">
        {timeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              className="historia-item"
              key={item.number}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -20 : 20,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
            >
              <div className="historia-number">
                {item.number}
              </div>

              <div className="historia-marker">
                <Icon size={19} />
              </div>

              <div className="historia-content">
                <span className="historia-place">
                  {item.place}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>

              {index < timeline.length - 1 && (
                <ArrowRight
                  className="historia-arrow"
                  size={18}
                />
              )}
            </motion.article>
          );
        })}
      </div>

      <motion.div
        className="historia-closing"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <Sparkles size={20} />

        <p>
          <strong>
            {isSpanish
              ? "Mis raíces forman parte de mí."
              : "My roots are part of who I am."}
          </strong>{" "}
          {isSpanish
            ? "Quiero llevar conmigo el cariño de mi familia, mis aprendizajes y todo lo que he vivido mientras sigo construyendo una nueva etapa."
            : "I want to carry with me the love of my family, my lessons, and everything I have experienced as I continue building a new stage of my life."}
        </p>
      </motion.div>
    </section>
  );
}

export default Historia;