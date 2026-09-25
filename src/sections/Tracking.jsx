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

function Tracking({ language = "es" }) {
  const isSpanish = language === "es";

  const monthlyQuestions = isSpanish
    ? [
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
      ]
    : [
        {
          icon: CheckCircle2,
          title: "What did I accomplish?",
          text: "Recognize the small actions, habits, and goals I achieved during the month.",
        },
        {
          icon: BookOpen,
          title: "What was difficult?",
          text: "Identify the difficulties, distractions, or situations that made it harder to move forward.",
        },
        {
          icon: RotateCcw,
          title: "What will I adjust?",
          text: "Decide what I can change to organize myself better and keep moving forward.",
        },
      ];

  const semesterAreas = isSpanish
    ? [
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
      ]
    : [
        {
          icon: TrendingUp,
          title: "Academic progress",
          text: "Review my results, subjects, study habits, and preparation for State Exams.",
        },
        {
          icon: Compass,
          title: "My interests",
          text: "Check whether the careers and areas I am interested in still make sense for me.",
        },
        {
          icon: Target,
          title: "My goals",
          text: "Review which goals I achieved, which are still pending, and which need adjustments.",
        },
        {
          icon: Sparkles,
          title: "My skills",
          text: "Evaluate which new skills I developed and which ones I need to continue strengthening.",
        },
      ];

  const annualReview = isSpanish
    ? [
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
      ]
    : [
        {
          number: "01",
          title: "Where I was",
          text: "Remember how I thought, what I wanted, and what my main difficulties were at the beginning of the year.",
        },
        {
          number: "02",
          title: "Where I am",
          text: "Recognize my current progress, what I have learned, and the decisions I have made.",
        },
        {
          number: "03",
          title: "Where I want to go",
          text: "Define new priorities and decide which path I want to explore during the next year.",
        },
      ];

  const reviewSteps = isSpanish
    ? [
        "Observar mi progreso sin compararme con otras personas.",
        "Reconocer lo que funciona y lo que necesito mejorar.",
        "Escuchar nuevas ideas y considerar otras posibilidades.",
        "Actualizar mis metas cuando mis circunstancias cambien.",
      ]
    : [
        "Observe my progress without comparing myself to other people.",
        "Recognize what works and what I need to improve.",
        "Listen to new ideas and consider other possibilities.",
        "Update my goals when my circumstances change.",
      ];

  return (
    <section className="section tracking-section">
      <div className="section-heading">
        <span className="section-label">
          {isSpanish
            ? "FASE 6 · SEGUIMIENTO Y EVALUACIÓN"
            : "PHASE 6 · TRACKING AND EVALUATION"}
        </span>

        <h2>
          {isSpanish ? "Mi " : "My "}
          <span>
            {isSpanish ? "seguimiento" : "progress tracking"}
          </span>
        </h2>

        <p>
          {isSpanish
            ? "Revisar mi proyecto de vida me permite reconocer mis avances, aprender de las dificultades y ajustar mi camino cuando sea necesario."
            : "Reviewing my life project allows me to recognize my progress, learn from difficulties, and adjust my path when necessary."}
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
          <span>
            {isSpanish
              ? "MI FORMA DE REVISARME"
              : "HOW I REVIEW MYSELF"}
          </span>

          <h3>
            {isSpanish
              ? "No necesito tener todo resuelto para saber si estoy avanzando."
              : "I do not need to have everything figured out to know if I am making progress."}
          </h3>

          <p>
            {isSpanish
              ? "Cada revisión es una oportunidad para detenerme, mirar lo que he conseguido y decidir cuál será mi siguiente paso."
              : "Each review is an opportunity to pause, look at what I have achieved, and decide what my next step will be."}
          </p>
        </div>
      </motion.div>

      {/* REVISIÓN MENSUAL */}

      <div className="tracking-block">
        <div className="tracking-block-heading">
          <span>01</span>

          <div>
            <span className="tracking-small-label">
              {isSpanish ? "CADA MES" : "EVERY MONTH"}
            </span>

            <h3>
              {isSpanish
                ? "Una pausa para revisar mi progreso"
                : "A pause to review my progress"}
            </h3>
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
              {isSpanish ? "CADA SEMESTRE" : "EVERY SEMESTER"}
            </span>

            <h3>
              {isSpanish
                ? "Una revisión más profunda"
                : "A deeper review"}
            </h3>
          </div>
        </div>

        <p className="tracking-section-description">
          {isSpanish
            ? "Cada seis meses quiero mirar mi proyecto con más calma para saber si mis decisiones siguen conectadas con quién soy y con lo que quiero conseguir."
            : "Every six months I want to take a closer look at my life project to see whether my decisions are still connected to who I am and what I want to achieve."}
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
              {isSpanish ? "CADA AÑO" : "EVERY YEAR"}
            </span>

            <h3>
              {isSpanish ? "Mi revisión anual" : "My annual review"}
            </h3>
          </div>
        </div>

        <p className="tracking-section-description">
          {isSpanish
            ? "Al terminar cada año quiero observar mi historia como si fuera un mapa: reconocer de dónde partí, dónde estoy y cuál quiero que sea mi siguiente destino."
            : "At the end of each year, I want to look at my story as if it were a map: recognize where I started, where I am, and what I want my next destination to be."}
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
              {isSpanish
                ? "MIS REGLAS DE SEGUIMIENTO"
                : "MY TRACKING RULES"}
            </span>

            <h3>
              {isSpanish
                ? "Cómo quiero evaluar mi camino"
                : "How I want to evaluate my journey"}
            </h3>
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
            {isSpanish
              ? "Mi proyecto de vida no es un plan rígido."
              : "My life project is not a rigid plan."}
          </strong>{" "}
          {isSpanish
            ? "Es una guía que puedo revisar, mejorar y transformar mientras voy creciendo."
            : "It is a guide that I can review, improve, and transform as I continue to grow."}
        </p>
      </motion.div>
    </section>
  );
}

export default Tracking;