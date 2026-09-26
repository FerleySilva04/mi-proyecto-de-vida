import { motion } from "framer-motion";
import {
  MapPin,
  Music,
  Users,
  Lightbulb,
} from "lucide-react";

function AboutMe({ language = "es" }) {
  const isSpanish = language === "es";

  const qualities = isSpanish
    ? [
        {
          icon: Users,
          title: "Expresiva",
          text: "Me gusta comunicarme, compartir ideas y expresar lo que pienso y siento.",
        },
        {
          icon: Music,
          title: "Divertida",
          text: "Disfruto compartir momentos especiales con mi familia y mis amigos.",
        },
        {
          icon: Lightbulb,
          title: "Responsable",
          text: "Me esfuerzo por cumplir con mis compromisos y alcanzar lo que me propongo.",
        },
      ]
    : [
        {
          icon: Users,
          title: "Expressive",
          text: "I enjoy communicating, sharing ideas, and expressing what I think and feel.",
        },
        {
          icon: Music,
          title: "Fun",
          text: "I enjoy sharing special moments with my family and friends.",
        },
        {
          icon: Lightbulb,
          title: "Responsible",
          text: "I work hard to fulfill my commitments and achieve what I set out to do.",
        },
      ];

  return (
    <section className="section about-section">
      <div className="about-container">

        {/* ENCABEZADO */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="about-kicker">
            {isSpanish ? "CONÓCEME" : "GET TO KNOW ME"}
          </span>

          <h1>
            {isSpanish ? "¿Quién " : "Who "}
            <span>{isSpanish ? "soy?" : "I am?"}</span>
          </h1>

          <p>
            {isSpanish
              ? "Conocerme también es entender de dónde vengo, qué me gusta y qué quiero construir para mi futuro."
              : "Getting to know me also means understanding where I come from, what I like, and what I want to build for my future."}
          </p>
        </motion.div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="about-main">

          {/* FOTO */}
          <motion.div
            className="about-image-card"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image">
              <img
                src="/adriana.jpeg"
                alt={
                  isSpanish
                    ? "Adriana Lucia Jiménez Pila"
                    : "Adriana Lucia Jiménez Pila"
                }
              />
            </div>

            <div className="about-location">
              <MapPin size={15} />
              <span>
                San Juan Nepomuceno, Bolívar
              </span>
            </div>
          </motion.div>

          {/* PRESENTACIÓN */}
          <motion.div
            className="about-story"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="about-story-label">
              {isSpanish
                ? "MI PRESENTACIÓN"
                : "MY INTRODUCTION"}
            </span>

            <h2>
              {isSpanish ? "Hola, soy " : "Hi, I'm "}
              <span>Adriana Lucia Jiménez Pila.</span>
            </h2>

            <p className="about-highlight">
              {isSpanish
                ? "Tengo 18 años y estoy comenzando una nueva etapa de mi vida, llena de aprendizajes, decisiones y sueños por alcanzar."
                : "I am 18 years old and I am beginning a new stage of my life, full of learning experiences, decisions, and dreams to achieve."}
            </p>

            <p>
              {isSpanish
                ? "Nací en el corregimiento Las Delicias, en Ayapel, Córdoba. Más adelante llegué con mi familia a San Juan Nepomuceno, Bolívar, donde desarrollé gran parte de mi formación escolar."
                : "I was born in the rural area of Las Delicias, in Ayapel, Córdoba. Later, I moved with my family to San Juan Nepomuceno, Bolívar, where I completed much of my school education."}
            </p>

            <p>
              {isSpanish
                ? "Me gusta compartir tiempo con mi familia y mis amigos, escuchar música, aprender cosas nuevas y conocer diferentes lugares."
                : "I enjoy spending time with my family and friends, listening to music, learning new things, and discovering different places."}
            </p>
          </motion.div>
        </div>

        {/* CUALIDADES */}
        <motion.div
          className="about-qualities"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {qualities.map((quality) => {
            const Icon = quality.icon;

            return (
              <div
                className="about-quality"
                key={quality.title}
              >
                <div className="about-quality-icon">
                  <Icon size={19} />
                </div>

                <div>
                  <h3>{quality.title}</h3>

                  <p>{quality.text}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default AboutMe;

