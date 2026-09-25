import { motion } from "framer-motion";
import {
  GitBranch,
  GraduationCap,
  BookOpen,
  Briefcase,
  RefreshCw,
  Search,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function Contingency({ language = "es" }) {
  const isSpanish = language === "es";

  const universityPlans = isSpanish
    ? [
        {
          number: "A",
          title: "Mi primera opción",
          icon: GraduationCap,
          description:
            "Intentar ingresar a la universidad y al programa que después de investigar considere más adecuado para mis intereses, capacidades y posibilidades.",
          actions: [
            "Investigar requisitos de admisión.",
            "Prepararme para las pruebas de Estado.",
            "Revisar costos, fechas y opciones de financiación.",
            "Presentar la inscripción dentro de los plazos establecidos.",
          ],
        },
        {
          number: "B",
          title: "Una alternativa relacionada",
          icon: BookOpen,
          description:
            "Si no logro ingresar a mi primera opción, buscar otra universidad o un programa relacionado que me permita continuar avanzando hacia objetivos similares.",
          actions: [
            "Comparar otras universidades.",
            "Investigar programas similares.",
            "Buscar becas o alternativas de financiación.",
            "Volver a presentar la admisión cuando sea posible.",
          ],
        },
        {
          number: "C",
          title: "Seguir preparándome",
          icon: Briefcase,
          description:
            "Si necesito más tiempo, puedo realizar una formación técnica, hacer cursos, trabajar o desarrollar habilidades mientras preparo mi siguiente oportunidad.",
          actions: [
            "Buscar una formación complementaria.",
            "Desarrollar habilidades útiles.",
            "Adquirir experiencia.",
            "Continuar investigando y preparándome.",
          ],
        },
      ]
    : [
        {
          number: "A",
          title: "My first option",
          icon: GraduationCap,
          description:
            "Try to enter the university and program that, after researching, I consider most suitable for my interests, abilities, and possibilities.",
          actions: [
            "Research admission requirements.",
            "Prepare for State exams.",
            "Review costs, dates, and financing options.",
            "Submit my application within the established deadlines.",
          ],
        },
        {
          number: "B",
          title: "A related alternative",
          icon: BookOpen,
          description:
            "If I cannot enter my first option, look for another university or related program that allows me to continue moving toward similar goals.",
          actions: [
            "Compare other universities.",
            "Research similar programs.",
            "Look for scholarships or financing alternatives.",
            "Apply for admission again when possible.",
          ],
        },
        {
          number: "C",
          title: "Keep preparing",
          icon: Briefcase,
          description:
            "If I need more time, I can pursue technical training, take courses, work, or develop skills while preparing for my next opportunity.",
          actions: [
            "Look for complementary training.",
            "Develop useful skills.",
            "Gain experience.",
            "Continue researching and preparing.",
          ],
        },
      ];

  const careerChangeSteps = isSpanish
    ? [
        {
          icon: Search,
          number: "01",
          title: "Identificar la razón",
          text: "Preguntarme qué está haciendo que quiera cambiar: mis intereses, expectativas, dificultades o una nueva oportunidad.",
        },
        {
          icon: BookOpen,
          number: "02",
          title: "Investigar otra opción",
          text: "Conocer la nueva carrera, sus materias, campo laboral, universidades y características.",
        },
        {
          icon: MessageCircle,
          number: "03",
          title: "Hablar con alguien",
          text: "Buscar la opinión de profesores, orientadores o profesionales que conozcan el área.",
        },
        {
          icon: CheckCircle2,
          number: "04",
          title: "Comparar",
          text: "Analizar si la nueva opción realmente conecta con mis intereses, habilidades y proyecto de vida.",
        },
        {
          icon: RefreshCw,
          number: "05",
          title: "Probar antes de cambiar",
          text: "Buscar cursos, experiencias o actividades que me permitan conocer mejor la nueva área.",
        },
      ]
    : [
        {
          icon: Search,
          number: "01",
          title: "Identify the reason",
          text: "Ask myself what is making me want to change: my interests, expectations, difficulties, or a new opportunity.",
        },
        {
          icon: BookOpen,
          number: "02",
          title: "Research another option",
          text: "Learn about the new career, its subjects, career opportunities, universities, and characteristics.",
        },
        {
          icon: MessageCircle,
          number: "03",
          title: "Talk to someone",
          text: "Seek advice from teachers, counselors, or professionals who know the field.",
        },
        {
          icon: CheckCircle2,
          number: "04",
          title: "Compare",
          text: "Analyze whether the new option really connects with my interests, skills, and life project.",
        },
        {
          icon: RefreshCw,
          number: "05",
          title: "Try before changing",
          text: "Look for courses, experiences, or activities that allow me to learn more about the new field.",
        },
      ];

  return (
    <section className="section contingency-section">
      <div className="section-heading">
        <span className="section-label">
          {isSpanish
            ? "FASE 5 · NAVEGANDO OBSTÁCULOS"
            : "PHASE 5 · NAVIGATING OBSTACLES"}
        </span>

        <h2>
          {isSpanish ? "Mi Plan " : "My Plan "}
          <span>B / C</span>
        </h2>

        <p>
          {isSpanish
            ? "Tener alternativas no significa pensar que voy a fracasar. Significa estar preparada para adaptarme si las circunstancias cambian."
            : "Having alternatives does not mean expecting to fail. It means being prepared to adapt if circumstances change."}
        </p>
      </div>

      {/* INTRO */}
      <motion.div
        className="contingency-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="contingency-intro-icon">
          <GitBranch size={24} />
        </div>

        <div>
          <span>
            {isSpanish
              ? "MI IDEA PRINCIPAL"
              : "MY MAIN IDEA"}
          </span>

          <h3>
            {isSpanish
              ? "Un cambio de ruta no significa abandonar el destino."
              : "Changing the route does not mean abandoning the destination."}
          </h3>

          <p>
            {isSpanish
              ? "Si una puerta se cierra, quiero tener la capacidad de analizar otras posibilidades y continuar avanzando."
              : "If one door closes, I want to be able to analyze other possibilities and keep moving forward."}
          </p>
        </div>
      </motion.div>

      {/* PLANES A, B Y C */}
      <div className="contingency-plans">
        <div className="contingency-section-heading">
          <span>01</span>

          <div>
            <span className="contingency-small-label">
              {isSpanish
                ? "SI MI PRIMERA OPCIÓN NO FUNCIONA"
                : "IF MY FIRST OPTION DOESN'T WORK"}
            </span>

            <h3>
              {isSpanish
                ? "Mis caminos alternativos"
                : "My alternative paths"}
            </h3>
          </div>
        </div>

        <div className="contingency-plan-grid">
          {universityPlans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.article
                className={`contingency-plan contingency-plan-${plan.number.toLowerCase()}`}
                key={plan.number}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                }}
              >
                <div className="contingency-plan-top">
                  <div className="contingency-plan-letter">
                    {plan.number}
                  </div>

                  <div className="contingency-plan-icon">
                    <Icon size={21} />
                  </div>
                </div>

                <span className="contingency-plan-label">
                  {isSpanish ? "PLAN" : "PLAN"} {plan.number}
                </span>

                <h3>{plan.title}</h3>

                <p className="contingency-plan-description">
                  {plan.description}
                </p>

                <div className="contingency-actions">
                  {plan.actions.map((action) => (
                    <div
                      className="contingency-action"
                      key={action}
                    >
                      <CheckCircle2 size={15} />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* CAMBIO DE CARRERA */}
      <div className="contingency-career-change">
        <div className="contingency-section-heading">
          <span>02</span>

          <div>
            <span className="contingency-small-label">
              {isSpanish
                ? "SI CAMBIO DE CARRERA"
                : "IF I CHANGE CAREERS"}
            </span>

            <h3>
              {isSpanish
                ? "¿Cómo sabré si estoy tomando una buena decisión?"
                : "How will I know if I am making a good decision?"}
            </h3>
          </div>
        </div>

        <p className="contingency-career-intro">
          {isSpanish
            ? "Cambiar de carrera sería una decisión importante. Antes de hacerlo, quiero analizar las razones y conocer suficientemente la nueva opción."
            : "Changing careers would be an important decision. Before doing so, I want to analyze the reasons and learn enough about the new option."}
        </p>

        <div className="contingency-career-steps">
          {careerChangeSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                className="contingency-career-step"
                key={step.number}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.07,
                }}
              >
                <div className="contingency-career-number">
                  {step.number}
                </div>

                <div className="contingency-career-icon">
                  <Icon size={18} />
                </div>

                <div>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>

                {index < careerChangeSteps.length - 1 && (
                  <ArrowRight
                    size={15}
                    className="contingency-career-arrow"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* REGLA PERSONAL */}
      <motion.div
        className="contingency-rule"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <div className="contingency-rule-icon">
          <Sparkles size={21} />
        </div>

        <div>
          <span>
            {isSpanish
              ? "MI REGLA PERSONAL"
              : "MY PERSONAL RULE"}
          </span>

          <h3>
            {isSpanish
              ? "Antes de abandonar un camino, quiero entender por qué ya no quiero recorrerlo."
              : "Before abandoning a path, I want to understand why I no longer want to follow it."}
          </h3>

          <p>
            {isSpanish
              ? "No quiero tomar decisiones importantes solamente por miedo, frustración o una dificultad momentánea. Primero voy a investigar, pedir orientación y analizar mis opciones."
              : "I don't want to make important decisions based only on fear, frustration, or a temporary difficulty. First, I will research, seek guidance, and analyze my options."}
          </p>
        </div>
      </motion.div>

      {/* CIERRE */}
      <motion.div
        className="contingency-closing"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        <GitBranch size={20} />

        <p>
          <strong>
            {isSpanish
              ? "Mi proyecto de vida puede cambiar."
              : "My life project can change."}
          </strong>{" "}
          {isSpanish
            ? "Lo importante es que cada cambio sea una decisión consciente y que continúe aprendiendo de cada etapa."
            : "What matters is that every change is a conscious decision and that I continue learning from each stage."}
        </p>
      </motion.div>
    </section>
  );
}

export default Contingency;

