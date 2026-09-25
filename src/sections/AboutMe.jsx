import { motion } from "framer-motion";
import {
  MapPin,
  Music,
  Users,
  Lightbulb,
} from "lucide-react";

function AboutMe() {
  const qualities = [
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
            CONÓCEME
          </span>

          <h1>
            Quién <span>soy</span>
          </h1>

          <p>
            Conocerme también es entender de dónde vengo,
            qué me gusta y qué quiero construir para mi futuro.
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
                alt="Adriana Jiménez"
              />
            </div>

            <div className="about-location">
              <MapPin size={15} />
              <span>San Juan Nepomuceno, Bolívar</span>
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
              MI PRESENTACIÓN
            </span>

            <h2>
              Hola, soy{" "}
              <span>Adriana Jiménez.</span>
            </h2>

            <p className="about-highlight">
              Tengo 18 años y estoy comenzando una nueva
              etapa de mi vida, llena de aprendizajes,
              decisiones y sueños por alcanzar.
            </p>

            <p>
              Nací en el corregimiento Las Delicias, en
              Ayapel, Córdoba. Más adelante llegué con mi
              familia a San Juan Nepomuceno, Bolívar,
              donde desarrollé gran parte de mi formación
              escolar.
            </p>

            <p>
              Me gusta compartir tiempo con mi familia y
              mis amigos, escuchar música, aprender cosas
              nuevas y conocer diferentes lugares.
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