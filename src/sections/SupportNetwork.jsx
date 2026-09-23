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

function SupportNetwork() {
  const mentors = [
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
  ];

  const allies = [
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
  ];

  const resources = [
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
  ];

  const networkSteps = [
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
  ];

  return (
    <section className="section support-section">
      <div className="section-heading">
        <span className="section-label">
          FASE 4 · MI PLAN DE ACCIÓN
        </span>

        <h2>
          Mi red de <span>apoyo</span>
        </h2>

        <p>
          No tengo que construir mi futuro completamente sola. Hay personas,
          espacios y recursos que pueden ayudarme a tomar mejores decisiones.
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
          <span>MI IDEA PRINCIPAL</span>

          <h3>
            Pedir ayuda también es una forma de avanzar.
          </h3>

          <p>
            Quiero aprender a reconocer cuándo necesito orientación y buscar
            personas que puedan compartir conmigo sus conocimientos y
            experiencias.
          </p>
        </div>
      </motion.div>

      {/* MENTORES */}
      <div className="support-block">
        <div className="support-block-heading">
          <span>01</span>

          <div>
            <span className="support-small-label">
              PERSONAS QUE PUEDEN ORIENTARME
            </span>

            <h3>Mis mentores</h3>
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
              PERSONAS QUE ME ACOMPAÑAN
            </span>

            <h3>Mis aliados</h3>
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
              HERRAMIENTAS PARA CRECER
            </span>

            <h3>Mis recursos</h3>

            <p>
              También puedo apoyarme en diferentes recursos para investigar,
              aprender y tomar decisiones.
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
              MI ESTRATEGIA
            </span>

            <h3>¿Cómo voy a aprovechar mi red?</h3>
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
          <span>MI RED, MI CAMINO</span>

          <p>
            <strong>No tengo que saberlo todo para comenzar.</strong> Puedo
            preguntar, investigar, escuchar diferentes experiencias y utilizar
            los recursos disponibles para construir mi propio camino.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default SupportNetwork;