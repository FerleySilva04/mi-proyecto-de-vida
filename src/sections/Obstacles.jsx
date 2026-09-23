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

function Obstacles() {
  const obstacleGroups = [
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
  ];

  return (
    <section className="section obstacles-section">
      <div className="section-heading">
        <span className="section-label">
          FASE 5 · NAVEGANDO OBSTÁCULOS
        </span>

        <h2>
          Mis <span>obstáculos</span>
        </h2>

        <p>
          Tener un proyecto de vida no significa que todo saldrá exactamente
          como lo planeo. También necesito reconocer las dificultades que
          podrían aparecer y pensar desde ahora cómo responder ante ellas.
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
          <span>MI FORMA DE VER LOS RETOS</span>

          <h3>
            Un obstáculo no significa que tenga que abandonar mi objetivo.
          </h3>

          <p>
            Si identifico una dificultad con anticipación, puedo buscar
            alternativas y prepararme mejor para enfrentarla.
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
                  <span>TIPO DE OBSTÁCULO</span>

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
                          <span>¿CÓMO PUEDO RESPONDER?</span>
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
          <span>MI ESTRATEGIA</span>

          <h3>
            Prepararme antes de que aparezca el problema.
          </h3>

          <p>
            No puedo controlar todas las circunstancias de mi futuro, pero sí
            puedo prepararme, pedir ayuda y buscar diferentes caminos cuando
            aparezca una dificultad.
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
          <strong>Mi proyecto de vida también necesita espacio para los
          imprevistos.</strong>{" "}
          Si algo no sale como esperaba, puedo detenerme, aprender de la
          situación y buscar otra manera de continuar.
        </p>
      </motion.div>
    </section>
  );
}

export default Obstacles;