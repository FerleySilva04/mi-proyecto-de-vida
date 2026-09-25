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

function Interests({ language = "es" }) {
  const isSpanish = language === "es";

  const schoolSubjects = isSpanish
    ? [
        "Ciencias Sociales",
        "Lengua Castellana",
        "Ciencias Naturales",
        "Inglés",
      ]
    : [
        "Social Studies",
        "Spanish Language",
        "Natural Sciences",
        "English",
      ];

  const activities = isSpanish
    ? [
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
      ]
    : [
        {
          icon: Music,
          title: "Listening to music",
          text: "Music accompanies me at different moments and helps me relax and enjoy myself.",
        },
        {
          icon: MessageCircle,
          title: "Spending time with others",
          text: "I enjoy talking with my family and friends and learning about their experiences.",
        },
        {
          icon: BookOpen,
          title: "Series and movies",
          text: "I enjoy stories that allow me to discover different people, places, and situations.",
        },
        {
          icon: Globe,
          title: "Discovering new places",
          text: "I would like to travel, visit new places, and discover new ways of seeing the world.",
        },
        {
          icon: Sparkles,
          title: "Learning new things",
          text: "I enjoy discovering new topics and gaining knowledge that can be useful for my future.",
        },
      ];

  const topics = isSpanish
    ? [
        "Las experiencias y decisiones de las personas",
        "La educación",
        "La sociedad",
        "La salud",
        "Historias de superación",
        "El futuro y las oportunidades para los jóvenes",
      ]
    : [
        "People's experiences and decisions",
        "Education",
        "Society",
        "Health",
        "Stories of overcoming difficulties",
        "The future and opportunities for young people",
      ];

  const problems = isSpanish
    ? [
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
      ]
    : [
        {
          number: "01",
          title: "More educational opportunities",
          text: "I would like more young people to have access to quality education and find opportunities to build their future.",
        },
        {
          number: "02",
          title: "Unequal opportunities",
          text: "I am interested in understanding how economic conditions can limit the possibilities available to some people.",
        },
        {
          number: "03",
          title: "The future of young people",
          text: "I want to learn ways to help young people develop their abilities and achieve their goals.",
        },
      ];

  return (
    <section className="section interests-section">
      <div className="section-heading">
        <span className="section-label">
          {isSpanish
            ? "FASE 2 · EXPLORANDO POSIBILIDADES"
            : "PHASE 2 · EXPLORING POSSIBILITIES"}
        </span>

        <h2>
          {isSpanish ? "Mi constelación " : "My constellation "}
          <span>
            {isSpanish ? "de intereses" : "of interests"}
          </span>
        </h2>

        <p>
          {isSpanish
            ? "Mis intereses son una pista importante para descubrir qué caminos profesionales pueden conectar con la persona que quiero llegar a ser."
            : "My interests are an important clue to discovering which professional paths can connect with the person I want to become."}
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
            {isSpanish ? "EN EL COLEGIO" : "AT SCHOOL"}
          </span>

          <h3>
            {isSpanish
              ? "Materias que me emocionan"
              : "Subjects that excite me"}
          </h3>

          <p>
            {isSpanish
              ? "Hay asignaturas que despiertan especialmente mi curiosidad y conectan con los temas que me gustaría seguir explorando."
              : "Some subjects especially spark my curiosity and connect with topics that I would like to continue exploring."}
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
              {isSpanish ? "MI TIEMPO LIBRE" : "MY FREE TIME"}
            </span>

            <h3>
              {isSpanish
                ? "Actividades que me hacen perder la noción del tiempo"
                : "Activities that make me lose track of time"}
            </h3>
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
              {isSpanish ? "CURIOSIDAD" : "CURIOSITY"}
            </span>

            <h3>
              {isSpanish
                ? "Temas sobre los que podría hablar durante horas"
                : "Topics I could talk about for hours"}
            </h3>

            <p>
              {isSpanish
                ? "Estos temas despiertan mi curiosidad porque están relacionados con las personas, la sociedad y las posibilidades de construir un mejor futuro."
                : "These topics spark my curiosity because they are connected to people, society, and the possibilities of building a better future."}
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
              {isSpanish
                ? "MIRANDO HACIA EL MUNDO"
                : "LOOKING AT THE WORLD"}
            </span>

            <h3>
              {isSpanish
                ? "Problemas que me gustaría ayudar a solucionar"
                : "Problems I would like to help solve"}
            </h3>
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
            {isSpanish
              ? "LO QUE DESCUBRO SOBRE MÍ"
              : "WHAT I DISCOVER ABOUT MYSELF"}
          </span>

          <p>
            {isSpanish
              ? "Mis intereses tienen algo en común: me gusta aprender, comunicarme, comprender a las personas y encontrar maneras de ayudar. Por eso quiero explorar profesiones donde pueda combinar esas características con un propósito que tenga sentido para mí."
              : "My interests have something in common: I enjoy learning, communicating, understanding people, and finding ways to help. That is why I want to explore careers where I can combine these qualities with a purpose that is meaningful to me."}
          </p>
        </div>

        <Sparkles
          size={20}
          className="interests-connection-sparkle"
        />
      </motion.div>
    </section>
  );
}

export default Interests;