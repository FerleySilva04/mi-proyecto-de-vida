import { motion } from "framer-motion";
import {
  MapPin,
  Home,
  GraduationCap,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function Historia() {
  const timeline = [
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
  ];

  return (
    <section className="section historia-section">
      <div className="section-heading">
        <span className="section-label">
          EXTRAS · MI HISTORIA
        </span>

        <h2>
          De dónde <span>vengo</span>
        </h2>

        <p>
          Mi historia explica parte de la persona que soy hoy y de las
          experiencias que han influido en mis sueños.
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
          <span>MI HISTORIA</span>

          <h3>
            Cada etapa de mi vida ha dejado algo que llevar conmigo.
          </h3>

          <p>
            No puedo cambiar de dónde vengo, pero sí puedo decidir qué hago
            con todo lo que he aprendido en el camino.
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
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
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
          <strong>Mis raíces forman parte de mí.</strong> Quiero llevar
          conmigo el cariño de mi familia, mis aprendizajes y todo lo que he
          vivido mientras sigo construyendo una nueva etapa.
        </p>
      </motion.div>
    </section>
  );
}

export default Historia;