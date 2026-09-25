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

function Goals({ language = "es" }) {
  const isSpanish = language === "es";

  const shortTerm = isSpanish
    ? [
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
      ]
    : [
        {
          icon: GraduationCap,
          title: "Academic goal",
          description:
            "Finish my school stage with good performance and prepare for State exams during the next 12 months.",
          action:
            "Study in an organized way every week and strengthen the subjects in which I have more difficulty.",
        },
        {
          icon: UserRound,
          title: "Personal goal",
          description:
            "Improve my organization and time management during the next year.",
          action:
            "Use weekly planning to organize my academic, personal, and family activities.",
        },
        {
          icon: Users,
          title: "Social goal",
          description:
            "Strengthen my relationships and expand my support network during the next 12 months.",
          action:
            "Participate in academic, family, and community activities that allow me to connect with new people.",
        },
      ];

  const mediumTerm = isSpanish
    ? [
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
      ]
    : [
        {
          icon: Briefcase,
          title: "Professional goal",
          description:
            "Over the next 5 years, I want to be studying or making significant progress in a career related to my interests.",
          action:
            "Research universities, choose a career, and look for experiences that help me better understand the professional field.",
        },
        {
          icon: Wallet,
          title: "Financial goal",
          description:
            "Over the next 5 years, I want to achieve greater financial independence through my education and work experiences.",
          action:
            "Develop professional skills and look for work or experience opportunities that allow me to generate my own income.",
        },
        {
          icon: Brain,
          title: "Growth goal",
          description:
            "During the next 5 years, I want to strengthen my professional, digital, and communication skills.",
          action:
            "Take courses, participate in learning activities, and practice skills such as communication, research, and digital tools.",
        },
      ];

  const longTerm = isSpanish
    ? [
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
      ]
    : [
        {
          icon: Globe,
          title: "Impact goal",
          description:
            "Over the next 10 years, I want to use my profession and experience to contribute to my community and especially support young people with fewer opportunities.",
          action:
            "Participate in projects, initiatives, or activities that create opportunities for other people.",
        },
        {
          icon: Heart,
          title: "Fulfillment goal",
          description:
            "In 10 years, I want to have an independent and stable life, work in a profession I can feel proud of, and continue traveling.",
          action:
            "Gradually build my professional, financial, and personal stability.",
        },
        {
          icon: Sparkles,
          title: "Legacy goal",
          description:
            "I want the people who know me to remember me as responsible, caring, and committed to my goals.",
          action:
            "Maintain my values and use what I learn to help others without forgetting my roots.",
        },
      ];

  const sections = isSpanish
    ? [
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
      ]
    : [
        {
          label: "01",
          period: "SHORT TERM",
          time: "1 YEAR",
          title: "Prepare for my next stage",
          description:
            "I want to finish my school stage well and begin building the foundations of my future.",
          goals: shortTerm,
        },
        {
          label: "02",
          period: "MEDIUM TERM",
          time: "5 YEARS",
          title: "Build my professional path",
          description:
            "I want to advance in my education, gain experience, and begin building my independence.",
          goals: mediumTerm,
        },
        {
          label: "03",
          period: "LONG TERM",
          time: "10 YEARS",
          title: "Build the life I imagine",
          description:
            "I want to combine personal fulfillment, stability, and a positive impact on other people.",
          goals: longTerm,
        },
      ];

  return (
    <section id="metas" className="section goals-section">
      <div className="section-heading">
        <span className="section-label">
          {isSpanish
            ? "FASE 3 · DEFINIENDO MI DESTINO"
            : "PHASE 3 · DEFINING MY DESTINATION"}
        </span>

        <h2>
          {isSpanish ? "Mis metas " : "My "}
          <span>SMART</span>
          {isSpanish ? "" : " goals"}
        </h2>

        <p>
          {isSpanish
            ? "Convertir mis sueños en objetivos concretos me permite saber qué quiero conseguir y qué acciones puedo comenzar a realizar desde hoy."
            : "Turning my dreams into concrete goals helps me understand what I want to achieve and what actions I can start taking today."}
        </p>
      </div>

      <div className="goals-intro">
        <div className="goals-intro-icon">
          <CheckCircle2 size={23} />
        </div>

        <div>
          <span>
            {isSpanish ? "MI FORMA DE AVANZAR" : "HOW I MOVE FORWARD"}
          </span>

          <h3>
            {isSpanish
              ? "Grandes sueños, pequeños pasos y objetivos concretos."
              : "Big dreams, small steps, and concrete goals."}
          </h3>

          <p>
            {isSpanish
              ? "Mis metas tienen un plazo y acciones que puedo revisar para saber si realmente estoy avanzando."
              : "My goals have deadlines and actions that I can review to know if I am really making progress."}
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
                      delay:
                        sectionIndex * 0.12 + index * 0.07,
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
                        <span>
                          {isSpanish
                            ? "¿CÓMO LO HARÉ?"
                            : "HOW WILL I DO IT?"}
                        </span>

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
          <span>
            {isSpanish ? "MI COMPROMISO" : "MY COMMITMENT"}
          </span>

          <h3>
            {isSpanish ? (
              <>
                No necesito tener todo resuelto hoy.
                <br />
                Solo necesito saber cuál es mi siguiente paso.
              </>
            ) : (
              <>
                I do not need to have everything figured out today.
                <br />
                I only need to know what my next step is.
              </>
            )}
          </h3>

          <p>
            {isSpanish
              ? "Voy a revisar mis metas, reconocer mis avances y hacer ajustes cuando sea necesario."
              : "I will review my goals, recognize my progress, and make adjustments when necessary."}
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Goals;