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

function Dashboard() {
  const indicators = [
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
  ];

  const achievements = [
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
  ];

  const nextSteps = [
    "Continuar investigando universidades.",
    "Prepararme para las pruebas de Estado.",
    "Fortalecer mis habilidades digitales y de comunicación.",
    "Hablar con profesionales de las carreras que me interesan.",
  ];

  return (
    <section className="section dashboard-section-page">
      <div className="section-heading">
        <span className="section-label">
          FASE 6 · SEGUIMIENTO Y EVALUACIÓN
        </span>

        <h2>
          Mi <span>dashboard</span>
        </h2>

        <p>
          Este panel representa una fotografía de mi progreso actual. Puedo
          actualizarlo a medida que avanzo en mi proyecto de vida.
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
            <span>MI PROGRESO ACTUAL</span>

            <h3>
              Estoy construyendo las bases de mi futuro.
            </h3>

            <p>
              Todavía tengo muchas cosas por descubrir, pero ya he comenzado a
              identificar quién soy, qué me interesa y qué quiero conseguir.
            </p>
          </div>
        </div>

        <div className="dashboard-overall">
          <strong>64%</strong>
          <span>avance general</span>
        </div>
      </motion.div>

      {/* INDICADORES */}
      <div className="dashboard-block">
        <div className="dashboard-block-heading">
          <span>01</span>

          <div>
            <span className="dashboard-small-label">
              MIS CUATRO ÁREAS
            </span>

            <h3>¿Cómo voy?</h3>
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
              LO QUE YA HE CONSTRUIDO
            </span>

            <h3>Mis avances</h3>
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
              PRÓXIMOS PASOS
            </span>

            <h3>Lo que quiero hacer ahora</h3>
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

      <motion.div
        className="dashboard-closing"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <Sparkles size={20} />

        <p>
          <strong>Este porcentaje no define mi valor.</strong> Solo es una
          forma visual de recordar que mi proyecto de vida se construye con
          pequeños avances y puede cambiar con el tiempo.
        </p>
      </motion.div>
    </section>
  );
}

export default Dashboard;