import { motion } from "framer-motion";
import {
  BookHeart,
  CalendarDays,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function FutureDiary({ language = "es" }) {
  const isSpanish = language === "es";

  const entries = isSpanish
    ? [
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
      ]
    : [
        {
          year: "2028",
          age: "20 years old",
          title: "I am looking back",
          text: "Today I remember the time when I was 18 and trying to discover what I wanted to do with my future. I am glad that I took my studies seriously and gave myself the opportunity to explore different paths.",
          lesson:
            "I learned that starting, even when I have doubts, is better than waiting until everything is clear.",
        },
        {
          year: "2031",
          age: "23 years old",
          title: "I am building my independence",
          text: "I have learned so much during these years. I am gaining experience, strengthening my skills, and making decisions with greater confidence. I have also started building the independence I dreamed of.",
          lesson:
            "I understood that growing means taking responsibility and continuing to learn.",
        },
        {
          year: "2036",
          age: "28 years old",
          title: "I am proud of my journey",
          text: "When I look at my life, I see that not everything happened exactly as I imagined. There were changes and difficulties, but every experience helped me grow. I have been able to help my family, discover new places, and build a life that makes me proud.",
          lesson:
            "I learned that the path can change without dreams losing their meaning.",
        },
      ];

  return (
    <section className="section future-diary-section">
      <div className="section-heading">
        <span className="section-label">
          {isSpanish
            ? "EXTRAS · DIARIO DEL FUTURO"
            : "EXTRAS · FUTURE DIARY"}
        </span>

        <h2>
          {isSpanish ? "Cartas desde mi " : "Letters from my "}
          <span>{isSpanish ? "futuro" : "future"}</span>
        </h2>

        <p>
          {isSpanish
            ? "Tres momentos imaginados desde diferentes etapas de mi vida para recordar hacia dónde quiero avanzar."
            : "Three imagined moments from different stages of my life to remember where I want to go."}
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
          <span>
            {isSpanish ? "DIARIO PERSONAL" : "PERSONAL DIARY"}
          </span>

          <h3>
            {isSpanish
              ? "Querida Adriana de 18 años..."
              : "Dear 18-year-old Adriana..."}
          </h3>

          <p>
            {isSpanish
              ? "Estas páginas imaginarias representan algunos momentos de la persona en la que quiero convertirme."
              : "These imaginary pages represent some moments of the person I want to become."}
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
                {isSpanish ? "ENTRADA #" : "ENTRY #"}
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{entry.title}</h3>

              <p>{entry.text}</p>

              <div className="future-diary-lesson">
                <Sparkles size={17} />

                <div>
                  <span>
                    {isSpanish ? "LO QUE APRENDÍ" : "WHAT I LEARNED"}
                  </span>

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
          <strong>
            {isSpanish
              ? "Mi futuro todavía está por escribirse."
              : "My future is still waiting to be written."}
          </strong>{" "}
          {isSpanish
            ? "Estas historias no son predicciones; son una forma de imaginar las posibilidades que quiero construir con mis decisiones."
            : "These stories are not predictions; they are a way of imagining the possibilities I want to build through my decisions."}
        </p>
      </motion.div>
    </section>
  );
}

export default FutureDiary;