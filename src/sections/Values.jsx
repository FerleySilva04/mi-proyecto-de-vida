import { motion } from "framer-motion";
import { Heart, ShieldCheck, HandHeart } from "lucide-react";

function Values({ language = "es" }) {
  const isSpanish = language === "es";

  const values = isSpanish
    ? [
        {
          icon: Heart,
          number: "01",
          title: "Respeto",
          description:
            "Creo que todas las personas merecen ser escuchadas, valoradas y tratadas con respeto, sin importar sus diferencias.",
        },
        {
          icon: ShieldCheck,
          number: "02",
          title: "Honestidad",
          description:
            "Quiero actuar siempre con sinceridad y transparencia, siendo fiel a mis principios y a lo que pienso.",
        },
        {
          icon: HandHeart,
          number: "03",
          title: "Solidaridad",
          description:
            "Me gusta ayudar a los demás y aportar algo positivo cuando una persona o una comunidad lo necesita.",
        },
      ]
    : [
        {
          icon: Heart,
          number: "01",
          title: "Respect",
          description:
            "I believe everyone deserves to be heard, valued, and treated with respect, regardless of their differences.",
        },
        {
          icon: ShieldCheck,
          number: "02",
          title: "Honesty",
          description:
            "I want to always act with sincerity and transparency, staying true to my principles and what I believe.",
        },
        {
          icon: HandHeart,
          number: "03",
          title: "Solidarity",
          description:
            "I like helping others and contributing something positive when a person or a community needs it.",
        },
      ];

  return (
    <section id="valores" className="section values-section">
      <div className="section-heading">
        <span className="section-label">
          {isSpanish
            ? "02 — Lo que me representa"
            : "02 — What represents me"}
        </span>

        <h2>
          {isSpanish ? "Mis " : "My "}
          <span>{isSpanish ? "valores" : "values"}</span>
        </h2>

        <p>
          {isSpanish
            ? "Mis valores son la base de las decisiones que tomo y de la persona que quiero llegar a ser."
            : "My values are the foundation of the decisions I make and the person I want to become."}
        </p>
      </div>

      <div className="values-grid">
        {values.map((value, index) => {
          const Icon = value.icon;

          return (
            <motion.article
              className="value-card"
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <div className="value-top">
                <span>{value.number}</span>

                <div className="value-icon">
                  <Icon size={23} />
                </div>
              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        className="values-quote"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>✦</span>

        <p>
          {isSpanish
            ? '"Quiero crecer sin dejar de ser fiel a quien soy."'
            : '"I want to grow without losing who I am."'}
        </p>
      </motion.div>
    </section>
  );
}

export default Values;