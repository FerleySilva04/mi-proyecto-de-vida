import { motion } from "framer-motion";
import {
  BookHeart,
  CalendarDays,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function FutureDiary() {
  const entries = [
    {
      year: "2028",
      age: "20 años",
      title: "Estoy mirando hacia atrás",
      text: "Hoy recuerdo la etapa en la que tenía 18 años y estaba tratando de descubrir qué quería hacer con mi futuro. Me alegra haber tomado en serio mis estudios y haberme dado la oportunidad de explorar diferentes caminos.",
      lesson:
        "Aprendí que comenzar, aunque tenga dudas, es mejor que quedarme esperando a tener todo claro.",
    },
    {
      year: "2031",
      age: "23 años",
      title: "Estoy construyendo mi independencia",
      text: "He aprendido muchísimo durante estos años. Estoy adquiriendo experiencia, fortaleciendo mis habilidades y tomando decisiones con mayor seguridad. También he comenzado a construir la independencia que soñaba.",
      lesson:
        "Entendí que crecer significa asumir responsabilidades y continuar aprendiendo.",
    },
    {
      year: "2036",
      age: "28 años",
      title: "Estoy orgullosa de mi camino",
      text: "Cuando miro mi vida, veo que no todo ocurrió exactamente como lo imaginé. Hubo cambios y dificultades, pero cada experiencia me ayudó a crecer. He podido ayudar a mi familia, conocer nuevos lugares y construir una vida que me hace sentir orgullosa.",
      lesson:
        "Aprendí que el camino puede cambiar sin que los sueños pierdan su significado.",
    },
  ];

  return (
    <section className="section future-diary-section">
      <div className="section-heading">
        <span className="section-label">
          EXTRAS · DIARIO DEL FUTURO
        </span>

        <h2>
          Cartas desde mi <span>futuro</span>
        </h2>

        <p>
          Tres momentos imaginados desde diferentes etapas de mi vida para
          recordar hacia dónde quiero avanzar.
        </p>
      </div>

      <motion.div
        className="future-diary-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="future-diary-icon">
          <BookHeart size={26} />
        </div>

        <div>
          <span>DIARIO PERSONAL</span>

          <h3>
            Querida Adriana de 18 años...
          </h3>

          <p>
            Estas páginas imaginarias representan algunos momentos de la
            persona en la que quiero convertirme.
          </p>
        </div>
      </motion.div>

      <div className="future-diary-list">
        {entries.map((entry, index) => (
          <motion.article
            className="future-diary-entry"
            key={entry.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
            }}
          >
            <div className="future-diary-date">
              <CalendarDays size={18} />

              <strong>{entry.year}</strong>

              <span>{entry.age}</span>
            </div>

            <div className="future-diary-paper">
              <span className="future-diary-label">
                ENTRADA #{String(index + 1).padStart(2, "0")}
              </span>

              <h3>{entry.title}</h3>

              <p>{entry.text}</p>

              <div className="future-diary-lesson">
                <Sparkles size={17} />

                <div>
                  <span>LO QUE APRENDÍ</span>

                  <p>{entry.lesson}</p>
                </div>
              </div>
            </div>

            {index < entries.length - 1 && (
              <ArrowRight
                className="future-diary-arrow"
                size={19}
              />
            )}
          </motion.article>
        ))}
      </div>

      <motion.div
        className="future-diary-closing"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <Sparkles size={20} />

        <p>
          <strong>Mi futuro todavía está por escribirse.</strong> Estas
          historias no son predicciones; son una forma de imaginar las
          posibilidades que quiero construir con mis decisiones.
        </p>
      </motion.div>
    </section>
  );
}

export default FutureDiary;