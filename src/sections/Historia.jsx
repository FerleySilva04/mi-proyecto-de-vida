import { motion } from "framer-motion";
import {
  MapPin,
  Users,
  BookOpen,
  Sparkles,
} from "lucide-react";

function Historia() {
  const stages = [
    {
      icon: MapPin,
      number: "01",
      title: "Mis raíces",
      place: "Ayapel, Córdoba",
      description:
        "Nací en Ayapel, Córdoba, específicamente en el corregimiento Las Delicias. Allí comenzaron mis primeros recuerdos y una parte importante de mi historia.",
    },
    {
      icon: Users,
      number: "02",
      title: "Un nuevo lugar",
      place: "San Juan Nepomuceno",
      description:
        "Con el paso de los años, me trasladé junto a mi familia a San Juan Nepomuceno, Bolívar, donde comenzó una nueva etapa de mi vida.",
    },
    {
      icon: BookOpen,
      number: "03",
      title: "Mi crecimiento",
      place: "Mi etapa escolar",
      description:
        "En San Juan Nepomuceno he desarrollado gran parte de mi formación académica. Mis estudios y experiencias me han ayudado a descubrir mis intereses y capacidades.",
    },
    {
      icon: Sparkles,
      number: "04",
      title: "Lo que viene",
      place: "Mi futuro",
      description:
        "Todo lo que he vivido forma parte del camino que estoy construyendo. Quiero continuar preparándome, cumplir mis metas y crear nuevas experiencias.",
    },
  ];

  return (
    <section id="historia" className="section history-section">
      <div className="section-heading">
        <span className="section-label">
          04 — De dónde vengo
        </span>

        <h2>
          Mi <span>historia</span>
        </h2>

        <p>
          Cada lugar, cada experiencia y cada etapa de mi vida
          ha aportado algo a la persona que soy hoy.
        </p>
      </div>

      <div className="history-intro">
        <div className="history-intro-icon">
          <MapPin size={28} />
        </div>

        <div>
          <span>MI ORIGEN</span>

          <h3>
            Una historia que comenzó en
            <strong> Las Delicias, Ayapel.</strong>
          </h3>

          <p>
            Nací en el corregimiento Las Delicias, en Ayapel,
            Córdoba. Después, junto a mi familia, llegué a San
            Juan Nepomuceno, Bolívar, un lugar donde he vivido
            importantes etapas de mi crecimiento y formación.
          </p>
        </div>
      </div>

      <div className="history-timeline">
        {stages.map((stage, index) => {
          const Icon = stage.icon;

          return (
            <motion.article
              className="history-card"
              key={stage.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div className="history-number">
                {stage.number}
              </div>

              <div className="history-icon">
                <Icon size={22} />
              </div>

              <div className="history-content">
                <span>{stage.place}</span>

                <h3>{stage.title}</h3>

                <p>{stage.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        className="history-message"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Sparkles size={20} />

        <p>
          "Mi historia no define hasta dónde puedo llegar;
          es el punto de partida de todo lo que todavía quiero
          construir."
        </p>
      </motion.div>
    </section>
  );
}

export default Historia;