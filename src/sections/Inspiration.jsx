import { motion } from "framer-motion";
import {
  Image,
  MapPin,
  Users,
  Quote,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

function Inspiration({ language = "es" }) {
  const isSpanish = language === "es";

  const places = isSpanish
    ? [
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
      ]
    : [
        {
          title: "My home",
          text: "I want to build a peaceful space where I can feel independent, safe, and proud of everything I have achieved.",
          icon: MapPin,
        },
        {
          title: "New places",
          text: "I would like to visit cities in Colombia and other countries to discover cultures, people, and new ways of seeing the world.",
          icon: MapPin,
        },
        {
          title: "People I admire",
          text: "I am inspired by people who have worked for their dreams, overcome difficulties, and use their knowledge to help others.",
          icon: Users,
        },
      ];

  const phrases = isSpanish
    ? [
        "Los grandes cambios comienzan con pequeñas decisiones.",
        "No necesito tener todo resuelto para comenzar.",
        "Cada experiencia me ayuda a descubrir quién quiero ser.",
      ]
    : [
        "Big changes begin with small decisions.",
        "I do not need to have everything figured out to begin.",
        "Every experience helps me discover who I want to become.",
      ];

  return (
    <section className="section inspiration-section">
      <div className="section-heading">
        <span className="section-label">
          {isSpanish
            ? "EXTRAS · INSPIRACIÓN"
            : "EXTRAS · INSPIRATION"}
        </span>

        <h2>
          {isSpanish ? "Mi " : "My "}
          <span>
            {isSpanish ? "inspiración" : "inspiration"}
          </span>
        </h2>

        <p>
          {isSpanish
            ? "Las imágenes, lugares, personas e ideas que me recuerdan por qué quiero seguir creciendo y construyendo mi futuro."
            : "The images, places, people, and ideas that remind me why I want to keep growing and building my future."}
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
          <span>
            {isSpanish
              ? "MI TABLERO DE INSPIRACIÓN"
              : "MY INSPIRATION BOARD"}
          </span>

          <h3>
            {isSpanish
              ? "Quiero una vida que se sienta tan bien como la que imagino."
              : "I want a life that feels as good as the one I imagine."}
          </h3>

          <p>
            {isSpanish
              ? "Mi inspiración está relacionada con la independencia, mi familia, conocer nuevos lugares, aprender y convertirme en una persona de la que pueda sentirme orgullosa."
              : "My inspiration is connected to independence, my family, discovering new places, learning, and becoming someone I can feel proud of."}
          </p>
        </div>
      </motion.div>

      <div className="inspiration-block">
        <div className="inspiration-block-heading">
          <span>01</span>

          <div>
            <span className="inspiration-small-label">
              {isSpanish
                ? "LUGARES Y EXPERIENCIAS"
                : "PLACES AND EXPERIENCES"}
            </span>

            <h3>
              {isSpanish
                ? "Lo que quiero vivir"
                : "What I want to experience"}
            </h3>
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
              {isSpanish
                ? "FRASES QUE ME REPRESENTAN"
                : "QUOTES THAT REPRESENT ME"}
            </span>

            <h3>
              {isSpanish
                ? "Palabras para seguir adelante"
                : "Words to keep moving forward"}
            </h3>
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
          <strong>
            {isSpanish
              ? "Mi inspiración me recuerda hacia dónde quiero caminar."
              : "My inspiration reminds me where I want to go."}
          </strong>{" "}
          {isSpanish
            ? "No se trata solamente de llegar a un lugar, sino de disfrutar el proceso y aprender de cada experiencia."
            : "It is not only about reaching a destination, but also about enjoying the process and learning from every experience."}
        </p>
      </motion.div>
    </section>
  );
}

export default Inspiration;