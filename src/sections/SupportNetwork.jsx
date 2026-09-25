import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Heart,
  UserRound,
  BookOpen,
  Globe,
  Laptop,
  Library,
  MessageCircle,
  Sparkles,
} from "lucide-react";

function SupportNetwork({ language = "es" }) {
  const isSpanish = language === "es";

  const mentors = isSpanish
    ? [
        {
          icon: GraduationCap,
          title: "Mis profesores",
          text: "Pueden orientarme en mis estudios, identificar mis fortalezas y ayudarme a conocer diferentes opciones profesionales.",
        },
        {
          icon: UserRound,
          title: "Profesionales",
          text: "Personas que trabajan en las carreras que me interesan pueden contarme cómo es realmente su profesión.",
        },
        {
          icon: BookOpen,
          title: "Orientadores académicos",
          text: "Pueden ayudarme a investigar universidades, programas, requisitos y posibilidades de financiación.",
        },
      ]
    : [
        {
          icon: GraduationCap,
          title: "My teachers",
          text: "They can guide me in my studies, help me identify my strengths, and introduce me to different career options.",
        },
        {
          icon: UserRound,
          title: "Professionals",
          text: "People who work in the careers I am interested in can tell me what their profession is really like.",
        },
        {
          icon: BookOpen,
          title: "Academic advisors",
          text: "They can help me research universities, programs, requirements, and financial aid opportunities.",
        },
      ];

  const allies = isSpanish
    ? [
        {
          icon: Heart,
          title: "Mi familia",
          text: "Es una fuente importante de apoyo emocional y motivación para continuar trabajando por mis objetivos.",
        },
        {
          icon: Users,
          title: "Mis amigos",
          text: "Pueden acompañarme, compartir experiencias y motivarme durante las diferentes etapas del camino.",
        },
        {
          icon: MessageCircle,
          title: "Compañeros de estudio",
          text: "Podemos ayudarnos mutuamente, compartir conocimientos y prepararnos juntos para nuevos retos.",
        },
      ]
    : [
        {
          icon: Heart,
          title: "My family",
          text: "They are an important source of emotional support and motivation to keep working toward my goals.",
        },
        {
          icon: Users,
          title: "My friends",
          text: "They can accompany me, share experiences, and motivate me throughout the different stages of my journey.",
        },
        {
          icon: MessageCircle,
          title: "Study partners",
          text: "We can help each other, share knowledge, and prepare together for new challenges.",
        },
      ];

  const resources = isSpanish
    ? [
        {
          icon: Globe,
          title: "Páginas oficiales de universidades",
          text: "Para investigar programas académicos, requisitos de admisión, costos y oportunidades.",
        },
        {
          icon: Laptop,
          title: "Cursos en línea",
          text: "Para desarrollar nuevas habilidades y complementar mi formación académica.",
        },
        {
          icon: Library,
          title: "Bibliotecas y material educativo",
          text: "Para investigar, leer y fortalecer mis conocimientos en diferentes áreas.",
        },
        {
          icon: GraduationCap,
          title: "Ferias y orientación universitaria",
          text: "Para conocer instituciones, resolver dudas y comparar diferentes alternativas.",
        },
      ]
    : [
        {
          icon: Globe,
          title: "Official university websites",
          text: "To research academic programs, admission requirements, costs, and opportunities.",
        },
        {
          icon: Laptop,
          title: "Online courses",
          text: "To develop new skills and complement my academic education.",
        },
        {
          icon: Library,
          title: "Libraries and educational materials",
          text: "To research, read, and strengthen my knowledge in different areas.",
        },
        {
          icon: GraduationCap,
          title: "University fairs and guidance",
          text: "To learn about institutions, answer questions, and compare different alternatives.",
        },
      ];

  const networkSteps = isSpanish
    ? [
        {
          number: "01",
          title: "Preguntar",
          text: "No quedarme con dudas. Buscar personas que puedan orientarme.",
        },
        {
          number: "02",
          title: "Escuchar",
          text: "Conocer diferentes experiencias antes de tomar decisiones importantes.",
        },
        {
          number: "03",
          title: "Comparar",
          text: "Analizar la información y relacionarla con mis intereses y objetivos.",
        },
        {
          number: "04",
          title: "Actuar",
          text: "Convertir la orientación recibida en decisiones y acciones concretas.",
        },
      ]
    : [
        {
          number: "01",
          title: "Ask",
          text: "Do not keep my doubts to myself. Look for people who can guide me.",
        },
        {
          number: "02",
          title: "Listen",
          text: "Learn about different experiences before making important decisions.",
        },
        {
          number: "03",
          title: "Compare",
          text: "Analyze the information and connect it with my interests and goals.",
        },
        {
          number: "04",
          title: "Act",
          text: "Turn the guidance I receive into concrete decisions and actions.",
        },
      ];

  return (
    <section className="section support-section">
      <div className="section-heading">
        <span className="section-label">
          {isSpanish
            ? "FASE 4 · MI PLAN DE ACCIÓN"
            : "PHASE 4 · MY ACTION PLAN"}
        </span>

        <h2>
          {isSpanish ? "Mi red de " : "My "}
          <span>
            {isSpanish ? "apoyo" : "support network"}
          </span>
        </h2>

        <p>
          {isSpanish
            ? "No tengo que construir mi futuro completamente sola. Hay personas, espacios y recursos que pueden ayudarme a tomar mejores decisiones."
            : "I do not have to build my future completely on my own. There are people, spaces, and resources that can help me make better decisions."}
        </p>
      </div>

      <motion.div
        className="support-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="support-intro-icon">
          <Users size={24} />
        </div>

        <div>
          <span>
            {isSpanish
              ? "MI IDEA PRINCIPAL"
              : "MY MAIN IDEA"}
          </span>

          <h3>
            {isSpanish
              ? "Pedir ayuda también es una forma de avanzar."
              : "Asking for help is also a way to move forward."}
          </h3>

          <p>
            {isSpanish
              ? "Quiero aprender a reconocer cuándo necesito orientación y buscar personas que puedan compartir conmigo sus conocimientos y experiencias."
              : "I want to learn to recognize when I need guidance and look for people who can share their knowledge and experiences with me."}
          </p>
        </div>
      </motion.div>

      {/* MENTORES */}
      <div className="support-block">
        <div className="support-block-heading">
          <span>01</span>

          <div>
            <span className="support-small-label">
              {isSpanish
                ? "PERSONAS QUE PUEDEN ORIENTARME"
                : "PEOPLE WHO CAN GUIDE ME"}
            </span>

            <h3>
              {isSpanish ? "Mis mentores" : "My mentors"}
            </h3>
          </div>
        </div>

        <div className="support-cards">
          {mentors.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="support-card"
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
              >
                <div className="support-card-top">
                  <div className="support-card-icon">
                    <Icon size={20} />
                  </div>

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h4>{item.title}</h4>

                <p>{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* ALIADOS */}
      <div className="support-block">
        <div className="support-block-heading">
          <span>02</span>

          <div>
            <span className="support-small-label">
              {isSpanish
                ? "PERSONAS QUE ME ACOMPAÑAN"
                : "PEOPLE WHO SUPPORT ME"}
            </span>

            <h3>
              {isSpanish ? "Mis aliados" : "My allies"}
            </h3>
          </div>
        </div>

        <div className="support-cards">
          {allies.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="support-card support-card-soft"
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
              >
                <div className="support-card-top">
                  <div className="support-card-icon">
                    <Icon size={20} />
                  </div>

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h4>{item.title}</h4>

                <p>{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* RECURSOS */}
      <div className="support-resources">
        <div className="support-resources-heading">
          <div className="support-resources-icon">
            <BookOpen size={21} />
          </div>

          <div>
            <span className="support-small-label">
              {isSpanish
                ? "HERRAMIENTAS PARA CRECER"
                : "TOOLS FOR GROWTH"}
            </span>

            <h3>
              {isSpanish ? "Mis recursos" : "My resources"}
            </h3>

            <p>
              {isSpanish
                ? "También puedo apoyarme en diferentes recursos para investigar, aprender y tomar decisiones."
                : "I can also rely on different resources to research, learn, and make decisions."}
            </p>
          </div>
        </div>

        <div className="support-resource-grid">
          {resources.map((resource, index) => {
            const Icon = resource.icon;

            return (
              <motion.div
                className="support-resource"
                key={resource.title}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.07,
                }}
              >
                <div className="support-resource-number">
                  0{index + 1}
                </div>

                <div className="support-resource-icon">
                  <Icon size={18} />
                </div>

                <div>
                  <h4>{resource.title}</h4>
                  <p>{resource.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CÓMO USAR LA RED */}
      <div className="support-process">
        <div className="support-process-heading">
          <span>03</span>

          <div>
            <span className="support-small-label">
              {isSpanish ? "MI ESTRATEGIA" : "MY STRATEGY"}
            </span>

            <h3>
              {isSpanish
                ? "¿Cómo voy a aprovechar mi red?"
                : "How will I use my network?"}
            </h3>
          </div>
        </div>

        <div className="support-process-grid">
          {networkSteps.map((step, index) => (
            <motion.div
              className="support-process-step"
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.07,
              }}
            >
              <span>{step.number}</span>

              <h4>{step.title}</h4>

              <p>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="support-closing"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Sparkles size={20} />

        <div>
          <span>
            {isSpanish
              ? "MI RED, MI CAMINO"
              : "MY NETWORK, MY PATH"}
          </span>

          <p>
            <strong>
              {isSpanish
                ? "No tengo que saberlo todo para comenzar."
                : "I do not have to know everything to begin."}
            </strong>{" "}
            {isSpanish
              ? "Puedo preguntar, investigar, escuchar diferentes experiencias y utilizar los recursos disponibles para construir mi propio camino."
              : "I can ask questions, research, listen to different experiences, and use the available resources to build my own path."}
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default SupportNetwork;