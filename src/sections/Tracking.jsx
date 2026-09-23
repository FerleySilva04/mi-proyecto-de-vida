import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  RotateCcw,
  Target,
  BookOpen,
  TrendingUp,
  Compass,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function Tracking() {
  const monthlyQuestions = [
    {
      icon: CheckCircle2,
      title: "¿Qué avancé?",
      text: "Reconocer las pequeñas acciones, hábitos y objetivos que logré durante el mes.",
    },
    {
      icon: BookOpen,
      title: "¿Qué me costó?",
      text: "Identificar las dificultades, distracciones o situaciones que hicieron más difícil avanzar.",
    },
    {
      icon: RotateCcw,
      title: "¿Qué voy a ajustar?",
      text: "Decidir qué puedo cambiar para organizarme mejor y continuar avanzando.",
    },
  ];

  const semesterAreas = [
    {
      icon: TrendingUp,
      title: "Progreso académico",
      text: "Revisar mis resultados, materias, hábitos de estudio y preparación para las pruebas de Estado.",
    },
    {
      icon: Compass,
      title: "Mis intereses",
      text: "Comprobar si las carreras y áreas que me interesan siguen teniendo sentido para mí.",
    },
    {
      icon: Target,
      title: "Mis metas",
      text: "Revisar cuáles objetivos cumplí, cuáles siguen pendientes y cuáles necesitan ajustes.",
    },
    {
      icon: Sparkles,
      title: "Mis habilidades",
      text: "Evaluar qué habilidades nuevas desarrollé y cuáles necesito continuar fortaleciendo.",
    },
  ];

  const annualReview = [
    {
      number: "01",
      title: "Dónde estaba",
      text: "Recordar cómo pensaba, qué quería y cuáles eran mis principales dificultades al comenzar el año.",
    },
    {
      number: "02",
      title: "Dónde estoy",
      text: "Reconocer mis avances actuales, los aprendizajes obtenidos y las decisiones que he tomado.",
    },
    {
      number: "03",
      title: "Hacia dónde quiero ir",
      text: "Definir nuevas prioridades y decidir qué camino quiero explorar durante el próximo año.",
    },
  ];

  const reviewSteps = [
    "Observar mi progreso sin compararme con otras personas.",
    "Reconocer lo que funciona y lo que necesito mejorar.",
    "Escuchar nuevas ideas y considerar otras posibilidades.",
    "Actualizar mis metas cuando mis circunstancias cambien.",
  ];

  return (
    <section className="section tracking-section">
      <div className="section-heading">
        <span className="section-label">
          FASE 6 · SEGUIMIENTO Y EVALUACIÓN
        </span>

        <h2>
          Mi <span>seguimiento</span>
        </h2>

        <p>
          Revisar mi proyecto de vida me permite reconocer mis avances,
          aprender de las dificultades y ajustar mi camino cuando sea
          necesario.
        </p>
      </div>

      <motion.div
        className="tracking-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="tracking-intro-icon">
          <CalendarDays size={25} />
        </div>

        <div>
          <span>MI FORMA DE REVISARME</span>

          <h3>
            No necesito tener todo resuelto para saber si estoy avanzando.
          </h3>

          <p>
            Cada revisión es una oportunidad para detenerme, mirar lo que he
            conseguido y decidir cuál será mi siguiente paso.
          </p>
        </div>
      </motion.div>

      {/* REVISIÓN MENSUAL */}

      <div className="tracking-block">
        <div className="tracking-block-heading">
          <span>01</span>

          <div>
            <span className="tracking-small-label">
              CADA MES
            </span>

            <h3>Una pausa para revisar mi progreso</h3>
          </div>
        </div>

        <div className="tracking-monthly-grid">
          {monthlyQuestions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="tracking-monthly-card"
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
              >
                <div className="tracking-card-top">
                  <div className="tracking-card-icon">
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

      {/* REVISIÓN SEMESTRAL */}

      <div className="tracking-semester">
        <div className="tracking-block-heading">
          <span>02</span>

          <div>
            <span className="tracking-small-label">
              CADA SEMESTRE
            </span>

            <h3>Una revisión más profunda</h3>
          </div>
        </div>

        <p className="tracking-section-description">
          Cada seis meses quiero mirar mi proyecto con más calma para saber
          si mis decisiones siguen conectadas con quién soy y con lo que
          quiero conseguir.
        </p>

        <div className="tracking-semester-grid">
          {semesterAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.article
                className="tracking-semester-card"
                key={area.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
              >
                <div className="tracking-semester-icon">
                  <Icon size={19} />
                </div>

                <div>
                  <span className="tracking-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h4>{area.title}</h4>

                  <p>{area.text}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* REVISIÓN ANUAL */}

      <div className="tracking-annual">
        <div className="tracking-block-heading">
          <span>03</span>

          <div>
            <span className="tracking-small-label">
              CADA AÑO
            </span>

            <h3>Mi revisión anual</h3>
          </div>
        </div>

        <p className="tracking-section-description">
          Al terminar cada año quiero observar mi historia como si fuera un
          mapa: reconocer de dónde partí, dónde estoy y cuál quiero que sea
          mi siguiente destino.
        </p>

        <div className="tracking-annual-grid">
          {annualReview.map((item, index) => (
            <motion.div
              className="tracking-annual-item"
              key={item.number}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.08,
              }}
            >
              <div className="tracking-annual-number">
                {item.number}
              </div>

              <div className="tracking-annual-content">
                <h4>{item.title}</h4>

                <p>{item.text}</p>
              </div>

              {index < annualReview.length - 1 && (
                <ArrowRight
                  className="tracking-annual-arrow"
                  size={18}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* REGLAS PERSONALES */}

      <div className="tracking-rules">
        <div className="tracking-rules-heading">
          <div className="tracking-rules-icon">
            <Target size={21} />
          </div>

          <div>
            <span className="tracking-small-label">
              MIS REGLAS DE SEGUIMIENTO
            </span>

            <h3>Cómo quiero evaluar mi camino</h3>
          </div>
        </div>

        <div className="tracking-rules-list">
          {reviewSteps.map((step, index) => (
            <motion.div
              className="tracking-rule"
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
        className="tracking-closing"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <Sparkles size={20} />

        <p>
          <strong>
            Mi proyecto de vida no es un plan rígido.
          </strong>{" "}
          Es una guía que puedo revisar, mejorar y transformar mientras voy
          creciendo.
        </p>
      </motion.div>
    </section>
  );
}

export default Tracking;