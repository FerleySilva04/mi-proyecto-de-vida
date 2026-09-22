import { motion } from "framer-motion";
import { Heart, ShieldCheck, HandHeart } from "lucide-react";

function Values() {
  const values = [
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
  ];

  return (
    <section id="valores" className="section values-section">
      <div className="section-heading">
        <span className="section-label">
          02 — Lo que me representa
        </span>

        <h2>
          Mis <span>valores</span>
        </h2>

        <p>
          Mis valores son la base de las decisiones que tomo y
          de la persona que quiero llegar a ser.
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
          "Quiero crecer sin dejar de ser fiel a quien soy."
        </p>
      </motion.div>
    </section>
  );
}

export default Values;