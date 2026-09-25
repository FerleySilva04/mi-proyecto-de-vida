import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  BookOpen,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function Obstacles({ language = "es" }) {
  const isSpanish = language === "es";

  const obstacleGroups = isSpanish
    ? [
        {
          icon: Brain,
          number: "01",
          title: "Obstáculos internos",
          description:
            "Son dificultades que dependen principalmente de mí y que puedo trabajar con hábitos y práctica.",
          obstacles: [
            {
              title: "Miedo a equivocarme",
              text: "A veces puedo tener miedo de tomar una decisión incorrecta o de no cumplir mis expectativas.",
              response:
                "Recordarme que equivocarse también hace parte del aprendizaje.",
            },
            {
              title: "Indecisión",
              text: "Puedo pensar demasiado antes de elegir entre diferentes opciones.",
              response:
                "Investigar, comparar alternativas y establecer fechas para tomar decisiones.",
            },
            {
              title: "Procrastinación",
              text: "En ocasiones puedo dejar algunas responsabilidades para después.",
              response:
                "Dividir las tareas en pasos pequeños y establecer horarios concretos.",
            },
            {
              title: "Miedo a hablar en público",
              text: "Quiero sentir mayor seguridad cuando tengo que expresarme frente a otras personas.",
              response:
                "Practicar poco a poco mediante exposiciones, conversaciones y actividades grupales.",
            },
          ],
        },
        {
          icon: Globe,
          number: "02",
          title: "Obstáculos externos",
          description:
            "Son situaciones del entorno que pueden hacer más difícil alcanzar algunos de mis objetivos.",
          obstacles: [
            {
              title: "Limitaciones económicas",
              text: "Los costos de estudiar una carrera pueden representar un desafío para mi familia.",
              response:
                "Investigar becas, programas de financiación y diferentes alternativas educativas.",
            },
            {
              title: "Distancia",
              text: "Algunas universidades y oportunidades pueden encontrarse lejos de mi lugar de residencia.",
              response:
                "Comparar opciones presenciales, virtuales y alternativas en diferentes ciudades.",
            },
            {
              title: "Responsabilidades familiares",
              text: "Las necesidades de mi familia pueden influir en el tiempo y recursos disponibles.",
              response:
                "Organizar mis responsabilidades y buscar alternativas que permitan equilibrar mis objetivos.",
            },
            {
              title: "Pocas oportunidades locales",
              text: "En algunos lugares puede existir menor acceso a universidades, actividades o experiencias profesionales.",
              response:
                "Aprovechar recursos digitales, ferias educativas y oportunidades disponibles en otras ciudades.",
            },
          ],
        },
        {
          icon: BookOpen,
          number: "03",
          title: "Obstáculos académicos",
          description:
            "Son retos relacionados con mis estudios y con la preparación para mi siguiente etapa.",
          obstacles: [
            {
              title: "Materias difíciles",
              text: "Algunas asignaturas pueden requerir más tiempo y esfuerzo para comprenderlas.",
              response:
                "Identificar las dificultades con anticipación y buscar apoyo de profesores o compañeros.",
            },
            {
              title: "Pruebas de Estado",
              text: "La preparación para las pruebas puede generar presión y requerir constancia.",
              response:
                "Crear un horario de estudio y practicar periódicamente con ejercicios y simulacros.",
            },
            {
              title: "Requisitos de admisión",
              text: "Cada universidad puede tener requisitos diferentes para ingresar a sus programas.",
              response:
                "Investigar con anticipación los requisitos y fechas de cada institución.",
            },
            {
              title: "Adaptación a la universidad",
              text: "El cambio del colegio a la educación superior puede implicar nuevas responsabilidades.",
              response:
                "Desarrollar desde ahora hábitos de organización, estudio independiente y responsabilidad.",
            },
          ],
        },
      ]
    : [
        {
          icon: Brain,
          number: "01",
          title: "Internal obstacles",
          description:
            "These are difficulties that mainly depend on me and that I can work on through habits and practice.",
          obstacles: [
            {
              title: "Fear of making mistakes",
              text: "Sometimes I may be afraid of making the wrong decision or not meeting my own expectations.",
              response:
                "Remind myself that making mistakes is also part of learning.",
            },
            {
              title: "Indecision",
              text: "I may think too much before choosing between different options.",
              response:
                "Research, compare alternatives, and set deadlines for making decisions.",
            },
            {
              title: "Procrastination",
              text: "Sometimes I may leave some responsibilities for later.",
              response:
                "Break tasks into small steps and set specific schedules.",
            },
            {
              title: "Fear of public speaking",
              text: "I want to feel more confident when I have to express myself in front of other people.",
              response:
                "Practice gradually through presentations, conversations, and group activities.",
            },
          ],
        },
        {
          icon: Globe,
          number: "02",
          title: "External obstacles",
          description:
            "These are situations in my environment that may make it more difficult to achieve some of my goals.",
          obstacles: [
            {
              title: "Financial limitations",
              text: "The cost of studying a career may represent a challenge for my family.",
              response:
                "Research scholarships, financial aid programs, and different educational alternatives.",
            },
            {
              title: "Distance",
              text: "Some universities and opportunities may be far from where I live.",
              response:
                "Compare in-person, online, and alternative options in different cities.",
            },
            {
              title: "Family responsibilities",
              text: "My family's needs may influence the time and resources available to me.",
              response:
                "Organize my responsibilities and look for alternatives that allow me to balance my goals.",
            },
            {
              title: "Limited local opportunities",
              text: "Some places may have less access to universities, activities, or professional experiences.",
              response:
                "Use digital resources, educational fairs, and opportunities available in other cities.",
            },
          ],
        },
        {
          icon: BookOpen,
          number: "03",
          title: "Academic obstacles",
          description:
            "These are challenges related to my studies and preparation for my next stage.",
          obstacles: [
            {
              title: "Difficult subjects",
              text: "Some subjects may require more time and effort to understand.",
              response:
                "Identify difficulties early and seek support from teachers or classmates.",
            },
            {
              title: "State exams",
              text: "Preparing for exams can create pressure and requires consistency.",
              response:
                "Create a study schedule and practice regularly with exercises and mock tests.",
            },
            {
              title: "Admission requirements",
              text: "Each university may have different requirements for entering its programs.",
              response:
                "Research the requirements and deadlines of each institution in advance.",
            },
            {
              title: "Adapting to university",
              text: "The transition from school to higher education may involve new responsibilities.",
              response:
                "Develop organization, independent study, and responsibility habits from now on.",
            },
          ],
        },
      ];

  return (
    <section className="section obstacles-section">
      <div className="section-heading">
        <span className="section-label">
          {isSpanish
            ? "FASE 5 · NAVEGANDO OBSTÁCULOS"
            : "PHASE 5 · NAVIGATING OBSTACLES"}
        </span>

        <h2>
          {isSpanish ? "Mis " : "My "}
          <span>
            {isSpanish ? "obstáculos" : "obstacles"}
          </span>
        </h2>

        <p>
          {isSpanish
            ? "Tener un proyecto de vida no significa que todo saldrá exactamente como lo planeo. También necesito reconocer las dificultades que podrían aparecer y pensar desde ahora cómo responder ante ellas."
            : "Having a life project does not mean everything will happen exactly as I plan. I also need to recognize the difficulties that could appear and think ahead about how to respond to them."}
        </p>
      </div>

      <motion.div
        className="obstacles-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="obstacles-intro-icon">
          <AlertTriangle size={23} />
        </div>

        <div>
          <span>
            {isSpanish
              ? "MI FORMA DE VER LOS RETOS"
              : "HOW I SEE CHALLENGES"}
          </span>

          <h3>
            {isSpanish
              ? "Un obstáculo no significa que tenga que abandonar mi objetivo."
              : "An obstacle does not mean that I have to abandon my goal."}
          </h3>

          <p>
            {isSpanish
              ? "Si identifico una dificultad con anticipación, puedo buscar alternativas y prepararme mejor para enfrentarla."
              : "If I identify a difficulty in advance, I can look for alternatives and prepare myself better to face it."}
          </p>
        </div>
      </motion.div>

      <div className="obstacles-groups">
        {obstacleGroups.map((group, groupIndex) => {
          const Icon = group.icon;

          return (
            <motion.div
              className="obstacle-group"
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: groupIndex * 0.1,
              }}
            >
              <div className="obstacle-group-header">
                <div className="obstacle-group-number">
                  {group.number}
                </div>

                <div className="obstacle-group-icon">
                  <Icon size={22} />
                </div>

                <div>
                  <span>
                    {isSpanish
                      ? "TIPO DE OBSTÁCULO"
                      : "TYPE OF OBSTACLE"}
                  </span>

                  <h3>{group.title}</h3>

                  <p>{group.description}</p>
                </div>
              </div>

              <div className="obstacle-list">
                {group.obstacles.map((obstacle, index) => (
                  <motion.article
                    className="obstacle-card"
                    key={obstacle.title}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay:
                        groupIndex * 0.1 + index * 0.06,
                    }}
                  >
                    <div className="obstacle-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="obstacle-card-content">
                      <h4>{obstacle.title}</h4>

                      <p>{obstacle.text}</p>

                      <div className="obstacle-response">
                        <ArrowRight size={15} />

                        <div>
                          <span>
                            {isSpanish
                              ? "¿CÓMO PUEDO RESPONDER?"
                              : "HOW CAN I RESPOND?"}
                          </span>

                          <p>{obstacle.response}</p>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="obstacles-strength"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <div className="obstacles-strength-icon">
          <ShieldCheck size={22} />
        </div>

        <div>
          <span>
            {isSpanish ? "MI ESTRATEGIA" : "MY STRATEGY"}
          </span>

          <h3>
            {isSpanish
              ? "Prepararme antes de que aparezca el problema."
              : "Prepare myself before the problem appears."}
          </h3>

          <p>
            {isSpanish
              ? "No puedo controlar todas las circunstancias de mi futuro, pero sí puedo prepararme, pedir ayuda y buscar diferentes caminos cuando aparezca una dificultad."
              : "I cannot control every circumstance of my future, but I can prepare myself, ask for help, and look for different paths when a difficulty appears."}
          </p>
        </div>
      </motion.div>

      <motion.div
        className="obstacles-closing"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        <Sparkles size={20} />

        <p>
          <strong>
            {isSpanish
              ? "Mi proyecto de vida también necesita espacio para los imprevistos."
              : "My life project also needs room for unexpected situations."}
          </strong>{" "}
          {isSpanish
            ? "Si algo no sale como esperaba, puedo detenerme, aprender de la situación y buscar otra manera de continuar."
            : "If something does not go as expected, I can pause, learn from the situation, and find another way to continue."}
        </p>
      </motion.div>
    </section>
  );
}

export default Obstacles;