import { motion } from "framer-motion";
import {
  GraduationCap,
  Heart,
  Briefcase,
  Users,
  TrendingUp,
  Target,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

function Dashboard({ language = "es" }) {
  const isSpanish = language === "es";

  const indicators = isSpanish
    ? [
        {
          icon: GraduationCap,
          category: "Académico",
          value: "75%",
          label: "Preparación",
          description:
            "Estoy trabajando en mis estudios y preparándome para mi siguiente etapa.",
          progress: 75,
        },
        {
          icon: Heart,
          category: "Personal",
          value: "65%",
          label: "Hábitos",
          description:
            "Estoy mejorando mi organización, constancia y manejo del tiempo.",
          progress: 65,
        },
        {
          icon: Briefcase,
          category: "Profesional",
          value: "45%",
          label: "Experiencia",
          description:
            "Estoy explorando carreras y aprendiendo sobre diferentes campos profesionales.",
          progress: 45,
        },
        {
          icon: Users,
          category: "Social",
          value: "70%",
          label: "Red de apoyo",
          description:
            "Cuento con personas cercanas que pueden orientarme y acompañarme.",
          progress: 70,
        },
      ]
    : [
        {
          icon: GraduationCap,
          category: "Academic",
          value: "75%",
          label: "Preparation",
          description:
            "I am working on my studies and preparing for my next stage.",
          progress: 75,
        },
        {
          icon: Heart,
          category: "Personal",
          value: "65%",
          label: "Habits",
          description:
            "I am improving my organization, consistency, and time management.",
          progress: 65,
        },
        {
          icon: Briefcase,
          category: "Professional",
          value: "45%",
          label: "Experience",
          description:
            "I am exploring careers and learning about different professional fields.",
          progress: 45,
        },
        {
          icon: Users,
          category: "Social",
          value: "70%",
          label: "Support network",
          description:
            "I have people close to me who can guide and support me.",
          progress: 70,
        },
      ];

  const achievements = isSpanish
    ? [
        {
          number: "01",
          title: "Me estoy conociendo",
          text: "Identifiqué mis fortalezas, aspectos por mejorar, intereses y valores.",
          completed: true,
        },
        {
          number: "02",
          title: "Estoy explorando",
          text: "Investigué diferentes opciones profesionales y quiero conocer más sobre ellas.",
          completed: true,
        },
        {
          number: "03",
          title: "Estoy construyendo mi plan",
          text: "Definí objetivos y acciones para comenzar a acercarme a mi futuro.",
          completed: true,
        },
        {
          number: "04",
          title: "Estoy ganando experiencia",
          text: "Quiero comenzar a desarrollar habilidades y conocer experiencias reales.",
          completed: false,
        },
      ]
    : [
        {
          number: "01",
          title: "I am getting to know myself",
          text: "I identified my strengths, areas for improvement, interests, and values.",
          completed: true,
        },
        {
          number: "02",
          title: "I am exploring",
          text: "I researched different professional options and want to learn more about them.",
          completed: true,
        },
        {
          number: "03",
          title: "I am building my plan",
          text: "I defined goals and actions to begin moving closer to my future.",
          completed: true,
        },
        {
          number: "04",
          title: "I am gaining experience",
          text: "I want to start developing skills and gaining real-life experiences.",
          completed: false,
        },
      ];

  const nextSteps = isSpanish
    ? [
        "Continuar investigando universidades.",
        "Prepararme para las pruebas de Estado.",
        "Fortalecer mis habilidades digitales y de comunicación.",
        "Hablar con profesionales de las carreras que me interesan.",
      ]
    : [
        "Continue researching universities.",
        "Prepare for State exams.",
        "Strengthen my digital and communication skills.",
        "Talk to professionals in the careers that interest me.",
      ];

  return (
    <section className="section dashboard-section-page">
      <div className="section-heading">
        <span className="section-label">
          {isSpanish
            ? "FASE 6 · SEGUIMIENTO Y EVALUACIÓN"
            : "PHASE 6 · MONITORING AND EVALUATION"}
        </span>

        <h2>
          {isSpanish ? "Mi " : "My "}
          <span>dashboard</span>
        </h2>

        <p>
          {isSpanish
            ? "Este panel representa una fotografía de mi progreso actual. Puedo actualizarlo a medida que avanzo en mi proyecto de vida."
            : "This panel represents a snapshot of my current progress. I can update it as I move forward with my life project."}
        </p>
      </div>

      {/* RESUMEN */}
      <motion.div
        className="dashboard-summary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="dashboard-summary-main">
          <div className="dashboard-summary-icon">
            <TrendingUp size={24} />
          </div>

          <div>
            <span>
              {isSpanish
                ? "MI PROGRESO ACTUAL"
                : "MY CURRENT PROGRESS"}
            </span>

            <h3>
              {isSpanish
                ? "Estoy construyendo las bases de mi futuro."
                : "I am building the foundations of my future."}
            </h3>

            <p>
              {isSpanish
                ? "Todavía tengo muchas cosas por descubrir, pero ya he comenzado a identificar quién soy, qué me interesa y qué quiero conseguir."
                : "I still have many things to discover, but I have already started identifying who I am, what interests me, and what I want to achieve."}
            </p>
          </div>
        </div>

        <div className="dashboard-overall">
          <strong>64%</strong>
          <span>
            {isSpanish ? "avance general" : "overall progress"}
          </span>
        </div>
      </motion.div>

      {/* INDICADORES */}
      <div className="dashboard-block">
        <div className="dashboard-block-heading">
          <span>01</span>

          <div>
            <span className="dashboard-small-label">
              {isSpanish
                ? "MIS CUATRO ÁREAS"
                : "MY FOUR AREAS"}
            </span>

            <h3>
              {isSpanish ? "¿Cómo voy?" : "How am I doing?"}
            </h3>
          </div>
        </div>

        <div className="dashboard-indicators">
          {indicators.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="dashboard-indicator"
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
              >
                <div className="dashboard-indicator-top">
                  <div className="dashboard-indicator-icon">
                    <Icon size={20} />
                  </div>

                  <span>{item.category}</span>

                  <strong>{item.value}</strong>
                </div>

                <h4>{item.label}</h4>

                <p>{item.description}</p>

                <div className="dashboard-progress">
                  <div
                    className="dashboard-progress-fill"
                    style={{
                      width: `${item.progress}%`,
                    }}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* LOGROS */}
      <div className="dashboard-achievements">
        <div className="dashboard-block-heading">
          <span>02</span>

          <div>
            <span className="dashboard-small-label">
              {isSpanish
                ? "LO QUE YA HE CONSTRUIDO"
                : "WHAT I HAVE ALREADY BUILT"}
            </span>

            <h3>
              {isSpanish ? "Mis avances" : "My progress"}
            </h3>
          </div>
        </div>

        <div className="dashboard-achievement-list">
          {achievements.map((achievement, index) => (
            <motion.div
              className={`dashboard-achievement ${
                achievement.completed ? "completed" : ""
              }`}
              key={achievement.number}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.07,
              }}
            >
              <div className="dashboard-achievement-number">
                {achievement.number}
              </div>

              <div className="dashboard-achievement-status">
                <CheckCircle2 size={18} />
              </div>

              <div>
                <h4>{achievement.title}</h4>
                <p>{achievement.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SIGUIENTES PASOS */}
      <div className="dashboard-next">
        <div className="dashboard-next-heading">
          <div className="dashboard-next-icon">
            <Target size={21} />
          </div>

          <div>
            <span className="dashboard-small-label">
              {isSpanish
                ? "PRÓXIMOS PASOS"
                : "NEXT STEPS"}
            </span>

            <h3>
              {isSpanish
                ? "Lo que quiero hacer ahora"
                : "What I want to do now"}
            </h3>
          </div>
        </div>

        <div className="dashboard-next-list">
          {nextSteps.map((step, index) => (
            <motion.div
              className="dashboard-next-item"
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.06,
              }}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>{step}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CIERRE */}
      <motion.div
        className="dashboard-closing"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <Sparkles size={20} />

        <p>
          <strong>
            {isSpanish
              ? "Este porcentaje no define mi valor."
              : "This percentage does not define my worth."}
          </strong>{" "}
          {isSpanish
            ? "Solo es una forma visual de recordar que mi proyecto de vida se construye con pequeños avances y puede cambiar con el tiempo."
            : "It is only a visual way to remember that my life project is built through small steps and can change over time."}
        </p>
      </motion.div>
    </section>
  );
}

export default Dashboard;

