import { motion } from "framer-motion";
import {
  BookOpen,
  Music,
  MessageCircle,
  Globe,
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function Interests() {
  const schoolSubjects = [
    "Ciencias Sociales",
    "Lengua Castellana",
    "Ciencias Naturales",
    "Inglés",
  ];

  const activities = [
    {
      icon: Music,
      title: "Escuchar música",
      text: "La música me acompaña en diferentes momentos y me ayuda a relajarme y disfrutar.",
    },
    {
      icon: MessageCircle,
      title: "Compartir con otros",
      text: "Me gusta conversar con mi familia y mis amigos y conocer sus experiencias.",
    },
    {
      icon: BookOpen,
      title: "Series y películas",
      text: "Disfruto historias que me permiten conocer diferentes personas, lugares y situaciones.",
    },
    {
      icon: Globe,
      title: "Conocer nuevos lugares",
      text: "Me gustaría viajar, conocer otros lugares y descubrir nuevas formas de ver el mundo.",
    },
    {
      icon: Sparkles,
      title: "Aprender cosas nuevas",
      text: "Me gusta descubrir nuevos temas y adquirir conocimientos que puedan servirme en el futuro.",
    },
  ];

  const topics = [
    "Las experiencias y decisiones de las personas",
    "La educación",
    "La sociedad",
    "La salud",
    "Historias de superación",
    "El futuro y las oportunidades para los jóvenes",
  ];

  const problems = [
    {
      number: "01",
      title: "Más oportunidades educativas",
      text: "Me gustaría que más jóvenes pudieran acceder a educación de calidad y encontrar oportunidades para construir su futuro.",
    },
    {
      number: "02",
      title: "Desigualdad de oportunidades",
      text: "Me interesa comprender cómo las condiciones económicas pueden limitar las posibilidades de algunas personas.",
    },
    {
      number: "03",
      title: "Futuro de los jóvenes",
      text: "Quiero conocer formas de ayudar a los jóvenes a desarrollar sus capacidades y alcanzar sus objetivos.",
    },
  ];

  return (
    <section className="section interests-section">
      <div className="section-heading">
        <span className="section-label">
          FASE 2 · EXPLORANDO POSIBILIDADES
        </span>

        <h2>Mi constelación de intereses</h2>

        <p>
          Mis intereses son una pista importante para descubrir qué caminos
          profesionales pueden conectar con la persona que quiero llegar a ser.
        </p>
      </div>

      {/* MATERIAS */}
      <motion.div
        className="interests-feature"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="interests-feature-icon">
          <BookOpen size={24} />
        </div>

        <div className="interests-feature-content">
          <span className="interests-small-label">
            EN EL COLEGIO
          </span>

          <h3>Materias que me emocionan</h3>

          <p>
            Hay asignaturas que despiertan especialmente mi curiosidad y
            conectan con los temas que me gustaría seguir explorando.
          </p>

          <div className="interests-tags">
            {schoolSubjects.map((subject) => (
              <span key={subject} className="interest-tag">
                {subject}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ACTIVIDADES */}
      <div className="interests-block">
        <div className="interests-block-heading">
          <span>01</span>

          <div>
            <span className="interests-small-label">
              MI TIEMPO LIBRE
            </span>

            <h3>Actividades que me hacen perder la noción del tiempo</h3>
          </div>
        </div>

        <div className="interests-activities">
          {activities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                className="interest-activity-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
              >
                <div className="interest-activity-icon">
                  <Icon size={20} />
                </div>

                <h4>{item.title}</h4>

                <p>{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* TEMAS */}
      <div className="interests-topics">
        <div className="interests-topics-intro">
          <div className="interests-topic-number">02</div>

          <div>
            <span className="interests-small-label">
              CURIOSIDAD
            </span>

            <h3>Temas sobre los que podría hablar durante horas</h3>

            <p>
              Estos temas despiertan mi curiosidad porque están relacionados
              con las personas, la sociedad y las posibilidades de construir
              un mejor futuro.
            </p>
          </div>
        </div>

        <div className="interests-topic-list">
          {topics.map((topic, index) => (
            <motion.div
              key={topic}
              className="interest-topic"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.06,
              }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>

              <p>{topic}</p>

              <ArrowRight size={16} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* PROBLEMAS */}
      <div className="interests-problems">
        <div className="interests-block-heading">
          <span>03</span>

          <div>
            <span className="interests-small-label">
              MIRANDO HACIA EL MUNDO
            </span>

            <h3>Problemas que me gustaría ayudar a solucionar</h3>
          </div>
        </div>

        <div className="interests-problems-grid">
          {problems.map((problem, index) => (
            <motion.article
              key={problem.number}
              className="interest-problem-card"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
            >
              <span className="interest-problem-number">
                {problem.number}
              </span>

              <h4>{problem.title}</h4>

              <p>{problem.text}</p>
            </motion.article>
          ))}
        </div>
      </div>

      {/* CONEXIÓN CON EL FUTURO */}
      <motion.div
        className="interests-connection"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="interests-connection-icon">
          <Heart size={20} />
        </div>

        <div>
          <span className="interests-small-label">
            LO QUE DESCUBRO SOBRE MÍ
          </span>

          <p>
            Mis intereses tienen algo en común: me gusta aprender,
            comunicarme, comprender a las personas y encontrar maneras de
            ayudar. Por eso quiero explorar profesiones donde pueda combinar
            esas características con un propósito que tenga sentido para mí.
          </p>
        </div>

        <Sparkles size={20} className="interests-connection-sparkle" />
      </motion.div>
    </section>
  );
}

export default Interests;