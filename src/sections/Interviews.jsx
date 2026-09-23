import { motion } from "framer-motion";
import {
  MessageCircle,
  GraduationCap,
  Stethoscope,
  HelpCircle,
  Lightbulb,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function Interviews() {
  const interviews = [
    {
      number: "01",
      profession: "Profesional de la educación",
      title: "Quiero conocer el mundo de la enseñanza",
      icon: GraduationCap,
      description:
        "Una conversación con una persona que trabaje en educación puede ayudarme a conocer mejor la realidad de esta profesión, sus retos y las experiencias que no siempre aparecen en una descripción de carrera.",

      questions: [
        "¿Qué es lo que más disfrutas de trabajar en educación?",
        "¿Cuál ha sido uno de los mayores desafíos que has enfrentado en tu profesión?",
        "¿Qué consejo le darías a una joven que está pensando estudiar una carrera relacionada con la educación?",
      ],
    },

    {
      number: "02",
      profession: "Profesional de enfermería",
      title: "Quiero conocer el mundo del cuidado",
      icon: Stethoscope,
      description:
        "Hablar con una persona que trabaje en enfermería me permitiría conocer cómo es realmente el día a día de esta profesión y qué habilidades son necesarias para desempeñarla.",

      questions: [
        "¿Cuáles consideras que son las habilidades más importantes para trabajar en enfermería?",
        "¿Cómo es realmente un día normal en tu profesión?",
        "¿Qué te hubiera gustado saber antes de comenzar a estudiar enfermería?",
      ],
    },
  ];

  const interviewPlan = [
    {
      icon: HelpCircle,
      title: "Preparar",
      text: "Investigar previamente sobre la profesión y preparar preguntas concretas.",
    },
    {
      icon: MessageCircle,
      title: "Conversar",
      text: "Escuchar la experiencia de profesionales y preguntar con respeto.",
    },
    {
      icon: Lightbulb,
      title: "Reflexionar",
      text: "Comparar lo aprendido con mis intereses, habilidades y expectativas.",
    },
  ];

  return (
    <section className="section interviews-section">
      <div className="section-heading">
        <span className="section-label">
          FASE 2 · EXPLORANDO POSIBILIDADES
        </span>

        <h2>Entrevistas a profesionales</h2>

        <p>
          Antes de elegir una profesión, quiero conocer la experiencia de
          personas que ya recorren esos caminos.
        </p>
      </div>

      {/* INTRO */}
      <motion.div
        className="interviews-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="interviews-intro-icon">
          <MessageCircle size={24} />
        </div>

        <div>
          <span>MI ESTRATEGIA</span>

          <h3>
            Escuchar experiencias reales para tomar mejores decisiones.
          </h3>

          <p>
            Estas preguntas hacen parte de mi preparación para conversar con
            profesionales de áreas que me interesan. Sus experiencias pueden
            ayudarme a conocer aspectos de cada profesión que no aparecen en
            una página web o folleto universitario.
          </p>
        </div>
      </motion.div>

      {/* ENTREVISTAS */}
      <div className="interviews-grid">
        {interviews.map((interview, index) => {
          const Icon = interview.icon;

          return (
            <motion.article
              key={interview.number}
              className="interview-card"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="interview-card-top">
                <span className="interview-number">
                  {interview.number}
                </span>

                <div className="interview-icon">
                  <Icon size={25} />
                </div>
              </div>

              <span className="interview-profession">
                {interview.profession}
              </span>

              <h3>{interview.title}</h3>

              <p className="interview-description">
                {interview.description}
              </p>

              <div className="interview-questions-title">
                <span>3 PREGUNTAS CLAVE</span>
              </div>

              <div className="interview-questions">
                {interview.questions.map((question, questionIndex) => (
                  <div
                    key={question}
                    className="interview-question"
                  >
                    <div className="interview-question-number">
                      {questionIndex + 1}
                    </div>

                    <p>{question}</p>

                    <ArrowRight size={15} />
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* PLAN */}
      <div className="interviews-plan">
        <div className="interviews-plan-heading">
          <span>¿CÓMO APROVECHARÉ ESTAS CONVERSACIONES?</span>

          <h3>Mi pequeño plan de entrevista</h3>
        </div>

        <div className="interviews-plan-grid">
          {interviewPlan.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                className="interview-plan-step"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
              >
                <div className="interview-plan-number">
                  0{index + 1}
                </div>

                <div className="interview-plan-icon">
                  <Icon size={19} />
                </div>

                <h4>{step.title}</h4>

                <p>{step.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* REFLEXIÓN */}
      <motion.div
        className="interviews-reflection"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Sparkles size={20} />

        <div>
          <span>LO QUE QUIERO DESCUBRIR</span>

          <p>
            No busco que otra persona decida por mí. Quiero conocer diferentes
            experiencias para comparar lo que imagino con la realidad y tomar
            mi decisión con más información.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Interviews;