import { motion } from "framer-motion";
import {
  Image,
  MapPin,
  Users,
  Quote,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

function Inspiration() {
  const places = [
    {
      title: "Mi hogar",
      text: "Quiero construir un espacio tranquilo donde pueda sentir independencia, seguridad y orgullo por todo lo que he conseguido.",
      icon: MapPin,
    },
    {
      title: "Nuevos lugares",
      text: "Me gustaría conocer ciudades de Colombia y otros países para descubrir culturas, personas y nuevas formas de ver el mundo.",
      icon: MapPin,
    },
    {
      title: "Personas que admiro",
      text: "Me inspiran las personas que han trabajado por sus sueños, han superado dificultades y utilizan sus conocimientos para ayudar a otros.",
      icon: Users,
    },
  ];

  const phrases = [
    "Los grandes cambios comienzan con pequeñas decisiones.",
    "No necesito tener todo resuelto para comenzar.",
    "Cada experiencia me ayuda a descubrir quién quiero ser.",
  ];

  return (
    <section className="section inspiration-section">
      <div className="section-heading">
        <span className="section-label">
          EXTRAS · INSPIRACIÓN
        </span>

        <h2>
          Mi <span>inspiración</span>
        </h2>

        <p>
          Las imágenes, lugares, personas e ideas que me recuerdan por qué
          quiero seguir creciendo y construyendo mi futuro.
        </p>
      </div>

      <motion.div
        className="inspiration-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inspiration-hero-icon">
          <Image size={26} />
        </div>

        <div>
          <span>MI TABLERO DE INSPIRACIÓN</span>

          <h3>
            Quiero una vida que se sienta tan bien como la que imagino.
          </h3>

          <p>
            Mi inspiración está relacionada con la independencia, mi familia,
            conocer nuevos lugares, aprender y convertirme en una persona de
            la que pueda sentirme orgullosa.
          </p>
        </div>
      </motion.div>

      <div className="inspiration-block">
        <div className="inspiration-block-heading">
          <span>01</span>

          <div>
            <span className="inspiration-small-label">
              LUGARES Y EXPERIENCIAS
            </span>

            <h3>Lo que quiero vivir</h3>
          </div>
        </div>

        <div className="inspiration-grid">
          {places.map((place, index) => {
            const Icon = place.icon;

            return (
              <motion.article
                className="inspiration-card"
                key={place.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
              >
                <div className="inspiration-card-top">
                  <div className="inspiration-card-icon">
                    <Icon size={20} />
                  </div>

                  <ArrowUpRight size={18} />
                </div>

                <span className="inspiration-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h4>{place.title}</h4>

                <p>{place.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="inspiration-quotes">
        <div className="inspiration-block-heading">
          <span>02</span>

          <div>
            <span className="inspiration-small-label">
              FRASES QUE ME REPRESENTAN
            </span>

            <h3>Palabras para seguir adelante</h3>
          </div>
        </div>

        <div className="inspiration-quotes-grid">
          {phrases.map((phrase, index) => (
            <motion.div
              className="inspiration-quote-card"
              key={phrase}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.08,
              }}
            >
              <Quote size={20} />

              <p>“{phrase}”</p>

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="inspiration-closing"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Sparkles size={20} />

        <p>
          <strong>Mi inspiración me recuerda hacia dónde quiero caminar.</strong>{" "}
          No se trata solamente de llegar a un lugar, sino de disfrutar el
          proceso y aprender de cada experiencia.
        </p>
      </motion.div>
    </section>
  );
}

export default Inspiration;