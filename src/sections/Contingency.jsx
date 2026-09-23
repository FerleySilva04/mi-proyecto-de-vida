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

function Contingency() {
  const universityPlans = [
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
  ];

  const careerChangeSteps = [
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
  ];

  return (
    <section className="section contingency-section">
      <div className="section-heading">
        <span className="section-label">
          FASE 5 · NAVEGANDO OBSTÁCULOS
        </span>

        <h2>
          Mi Plan <span>B / C</span>
        </h2>

        <p>
          Tener alternativas no significa pensar que voy a fracasar. Significa
          estar preparada para adaptarme si las circunstancias cambian.
        </p>
      </div>

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
          <span>MI IDEA PRINCIPAL</span>

          <h3>
            Un cambio de ruta no significa abandonar el destino.
          </h3>

          <p>
            Si una puerta se cierra, quiero tener la capacidad de analizar
            otras posibilidades y continuar avanzando.
          </p>
        </div>
      </motion.div>

      {/* PLANES A, B Y C */}
      <div className="contingency-plans">
        <div className="contingency-section-heading">
          <span>01</span>

          <div>
            <span className="contingency-small-label">
              SI MI PRIMERA OPCIÓN NO FUNCIONA
            </span>

            <h3>Mis caminos alternativos</h3>
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
                  PLAN {plan.number}
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
              SI CAMBIO DE CARRERA
            </span>

            <h3>¿Cómo sabré si estoy tomando una buena decisión?</h3>
          </div>
        </div>

        <p className="contingency-career-intro">
          Cambiar de carrera sería una decisión importante. Antes de hacerlo,
          quiero analizar las razones y conocer suficientemente la nueva
          opción.
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
          <span>MI REGLA PERSONAL</span>

          <h3>
            Antes de abandonar un camino, quiero entender por qué ya no quiero
            recorrerlo.
          </h3>

          <p>
            No quiero tomar decisiones importantes solamente por miedo,
            frustración o una dificultad momentánea. Primero voy a investigar,
            pedir orientación y analizar mis opciones.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="contingency-closing"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        <GitBranch size={20} />

        <p>
          <strong>Mi proyecto de vida puede cambiar.</strong> Lo importante es
          que cada cambio sea una decisión consciente y que continúe
          aprendiendo de cada etapa.
        </p>
      </motion.div>
    </section>
  );
}

export default Contingency;