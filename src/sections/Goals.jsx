import { motion } from "framer-motion";
import {
  GraduationCap,
  UserRound,
  Users,
  Briefcase,
  Wallet,
  Brain,
  Globe,
  Heart,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

function Goals() {
  const shortTerm = [
    {
      icon: GraduationCap,
      title: "Meta académica",
      description:
        "Terminar mi etapa escolar con un buen desempeño y prepararme para las pruebas de Estado durante los próximos 12 meses.",
      action:
        "Estudiar de forma organizada cada semana y reforzar las materias en las que tenga mayor dificultad.",
    },
    {
      icon: UserRound,
      title: "Meta personal",
      description:
        "Mejorar mi organización y manejo del tiempo durante el próximo año.",
      action:
        "Utilizar una planificación semanal para organizar mis actividades académicas, personales y familiares.",
    },
    {
      icon: Users,
      title: "Meta social",
      description:
        "Fortalecer mis relaciones y ampliar mi red de apoyo durante los próximos 12 meses.",
      action:
        "Participar en actividades académicas, familiares y comunitarias que me permitan compartir con nuevas personas.",
    },
  ];

  const mediumTerm = [
    {
      icon: Briefcase,
      title: "Meta profesional",
      description:
        "En los próximos 5 años quiero estar estudiando o avanzando significativamente en una carrera relacionada con mis intereses.",
      action:
        "Investigar universidades, elegir una carrera y buscar experiencias que me permitan conocer mejor el campo profesional.",
    },
    {
      icon: Wallet,
      title: "Meta económica",
      description:
        "En los próximos 5 años quiero alcanzar una mayor independencia económica mediante mi formación y experiencias laborales.",
      action:
        "Desarrollar habilidades profesionales y buscar oportunidades de trabajo o experiencia que me permitan generar ingresos propios.",
    },
    {
      icon: Brain,
      title: "Meta de crecimiento",
      description:
        "Durante los próximos 5 años quiero fortalecer mis habilidades profesionales, digitales y de comunicación.",
      action:
        "Realizar cursos, participar en actividades de aprendizaje y practicar habilidades como comunicación, investigación y herramientas digitales.",
    },
  ];

  const longTerm = [
    {
      icon: Globe,
      title: "Meta de impacto",
      description:
        "En los próximos 10 años quiero utilizar mi profesión y experiencia para aportar a mi comunidad y apoyar especialmente a jóvenes con menos oportunidades.",
      action:
        "Participar en proyectos, iniciativas o actividades que generen oportunidades para otras personas.",
    },
    {
      icon: Heart,
      title: "Meta de realización",
      description:
        "En 10 años quiero tener una vida independiente y estable, trabajar en una profesión de la que pueda sentirme orgullosa y continuar viajando.",
      action:
        "Construir progresivamente mi estabilidad profesional, económica y personal.",
    },
    {
      icon: Sparkles,
      title: "Meta de legado",
      description:
        "Quiero que las personas que me conocen recuerden que fui responsable, solidaria y comprometida con mis objetivos.",
      action:
        "Mantener mis valores y utilizar lo que aprenda para ayudar a otras personas sin olvidar mis raíces.",
    },
  ];

  const sections = [
    {
      label: "01",
      period: "CORTO PLAZO",
      time: "1 AÑO",
      title: "Prepararme para mi siguiente etapa",
      description:
        "Quiero cerrar bien mi etapa escolar y comenzar a construir las bases de mi futuro.",
      goals: shortTerm,
    },
    {
      label: "02",
      period: "MEDIANO PLAZO",
      time: "5 AÑOS",
      title: "Construir mi camino profesional",
      description:
        "Quiero avanzar en mi formación, ganar experiencia y comenzar a construir mi independencia.",
      goals: mediumTerm,
    },
    {
      label: "03",
      period: "LARGO PLAZO",
      time: "10 AÑOS",
      title: "Construir la vida que imagino",
      description:
        "Quiero combinar realización personal, estabilidad e impacto positivo en otras personas.",
      goals: longTerm,
    },
  ];

  return (
    <section id="metas" className="section goals-section">
      <div className="section-heading">
        <span className="section-label">
          FASE 3 · DEFINIENDO MI DESTINO
        </span>

        <h2>
          Mis metas <span>SMART</span>
        </h2>

        <p>
          Convertir mis sueños en objetivos concretos me permite saber qué
          quiero conseguir y qué acciones puedo comenzar a realizar desde hoy.
        </p>
      </div>

      <div className="goals-intro">
        <div className="goals-intro-icon">
          <CheckCircle2 size={23} />
        </div>

        <div>
          <span>MI FORMA DE AVANZAR</span>

          <h3>
            Grandes sueños, pequeños pasos y objetivos concretos.
          </h3>

          <p>
            Mis metas tienen un plazo y acciones que puedo revisar para saber
            si realmente estoy avanzando.
          </p>
        </div>
      </div>

      <div className="goals-sections">
        {sections.map((section, sectionIndex) => (
          <motion.div
            className="goals-period"
            key={section.period}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: sectionIndex * 0.12,
            }}
          >
            <div className="goals-period-heading">
              <div className="goals-period-number">
                {section.label}
              </div>

              <div>
                <span>{section.period}</span>

                <h3>{section.title}</h3>

                <p>{section.description}</p>
              </div>

              <strong>{section.time}</strong>
            </div>

            <div className="goals-grid">
              {section.goals.map((goal, index) => {
                const Icon = goal.icon;

                return (
                  <motion.article
                    className="goal-card"
                    key={goal.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: sectionIndex * 0.12 + index * 0.07,
                    }}
                  >
                    <div className="goal-top">
                      <div className="goal-icon">
                        <Icon size={21} />
                      </div>

                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <span className="goal-period">
                      {goal.title}
                    </span>

                    <p className="goal-description">
                      {goal.description}
                    </p>

                    <div className="goal-action">
                      <CheckCircle2 size={17} />

                      <div>
                        <span>¿CÓMO LO HARÉ?</span>
                        <p>{goal.action}</p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="goals-final"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Sparkles size={20} />

        <div>
          <span>MI COMPROMISO</span>

          <h3>
            No necesito tener todo resuelto hoy.
            <br />
            Solo necesito saber cuál es mi siguiente paso.
          </h3>

          <p>
            Voy a revisar mis metas, reconocer mis avances y hacer ajustes
            cuando sea necesario.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Goals;