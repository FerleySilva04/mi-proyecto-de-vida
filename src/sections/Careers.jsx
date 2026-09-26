import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  Briefcase,
  Clock3,
  Heart,
  ArrowRight,
  MapPin,
  CircleDollarSign,
  Stethoscope,
  Landmark,
} from "lucide-react";

function Careers({ language = "es" }) {
  const isSpanish = language === "es";

  const careers = isSpanish
    ? [
        {
          number: "01",
          title: "Educación",
          subtitle: "Licenciatura en Educación / Ciencias Sociales",
          icon: GraduationCap,
          colorClass: "career-education",

          whatDoes: [
            "Planificar y desarrollar procesos de enseñanza.",
            "Acompañar el aprendizaje y desarrollo de los estudiantes.",
            "Diseñar actividades y estrategias educativas.",
            "Evaluar procesos de aprendizaje.",
            "Participar en proyectos educativos y de investigación.",
          ],

          universities: [
            {
              name: "Universidad de Antioquia",
              detail: "Licenciatura en Ciencias Sociales",
              location: "Medellín",
            },
          ],

          labor: [
            "Instituciones educativas públicas y privadas",
            "Proyectos educativos y sociales",
            "Programas comunitarios",
            "Investigación y proyectos pedagógicos",
            "Organizaciones relacionadas con educación",
          ],

          salary:
            "Como referencia, en el sector público el salario depende del grado y nivel del escalafón docente.",

          day: [
            "Preparar clases y materiales.",
            "Desarrollar actividades con estudiantes.",
            "Resolver dudas y acompañar procesos.",
            "Evaluar trabajos y aprendizajes.",
            "Participar en reuniones y proyectos.",
          ],

          why:
            "Me gusta comunicarme, explicar ideas y considero que la educación puede cambiar la vida de las personas.",
        },

        {
          number: "02",
          title: "Ciencia Política",
          subtitle: "Formación en análisis político y social",
          icon: Landmark,
          colorClass: "career-politics",

          whatDoes: [
            "Analizar fenómenos políticos y sociales.",
            "Estudiar instituciones y procesos de decisión.",
            "Investigar problemas sociales y políticos.",
            "Analizar políticas públicas.",
            "Elaborar informes y propuestas de análisis.",
          ],

          universities: [
            {
              name: "Universidad Nacional de Colombia",
              detail: "Ciencia Política",
              location: "Medellín",
            },
          ],

          labor: [
            "Entidades públicas",
            "Gobiernos locales",
            "Organizaciones sociales",
            "ONG",
            "Consultoría e investigación",
            "Análisis de políticas públicas",
          ],

          salary:
            "Las remuneraciones varían según experiencia, sector, cargo y ciudad; las cifras de referencia de egresados no representan un salario garantizado.",

          day: [
            "Revisar información y noticias.",
            "Analizar datos y documentos.",
            "Preparar informes.",
            "Participar en reuniones.",
            "Investigar problemas y políticas públicas.",
          ],

          why:
            "Me interesa comprender cómo funciona la sociedad y cómo las decisiones pueden generar cambios positivos en las comunidades.",
        },

        {
          number: "03",
          title: "Enfermería",
          subtitle: "Cuidado integral de personas y comunidades",
          icon: Stethoscope,
          colorClass: "career-nursing",

          whatDoes: [
            "Brindar cuidado integral a las personas.",
            "Participar en la prevención y promoción de la salud.",
            "Realizar procedimientos propios del cuidado de enfermería.",
            "Registrar y hacer seguimiento a los pacientes.",
            "Trabajar junto con otros profesionales de la salud.",
          ],

          universities: [
            {
              name: "Universidad de Antioquia",
              detail: "Enfermería",
              location: "Medellín",
            },
            {
              name: "Universidad Nacional de Colombia",
              detail: "Enfermería",
              location: "Bogotá",
            },
          ],

          labor: [
            "Hospitales",
            "Clínicas",
            "Centros de salud",
            "Programas de salud pública",
            "Atención comunitaria",
            "Promoción y prevención",
          ],

          salary:
            "Las remuneraciones dependen del cargo, experiencia, institución y modalidad de contratación; los valores publicados son referencias y no garantías.",

          day: [
            "Revisar el estado de los pacientes.",
            "Realizar actividades de cuidado.",
            "Registrar información clínica.",
            "Apoyar tratamientos y procedimientos.",
            "Educar a pacientes y familias.",
            "Coordinar actividades con el equipo de salud.",
          ],

          why:
            "Me atrae la posibilidad de ayudar directamente a las personas, brindar cuidado y sentir que mi trabajo puede ser útil para alguien.",
        },
      ]
    : [
        {
          number: "01",
          title: "Education",
          subtitle: "Bachelor's Degree in Education / Social Sciences",
          icon: GraduationCap,
          colorClass: "career-education",

          whatDoes: [
            "Plan and develop teaching processes.",
            "Support students' learning and development.",
            "Design educational activities and strategies.",
            "Evaluate learning processes.",
            "Participate in educational and research projects.",
          ],

          universities: [
            {
              name: "University of Antioquia",
              detail: "Bachelor's Degree in Social Sciences",
              location: "Medellín",
            },
          ],

          labor: [
            "Public and private educational institutions",
            "Educational and social projects",
            "Community programs",
            "Research and educational projects",
            "Organizations related to education",
          ],

          salary:
            "As a reference, in the public sector, salary depends on the teacher's grade and level in the career ladder.",

          day: [
            "Prepare classes and materials.",
            "Develop activities with students.",
            "Answer questions and support learning processes.",
            "Evaluate assignments and learning.",
            "Participate in meetings and projects.",
          ],

          why:
            "I enjoy communicating, explaining ideas, and I believe education can change people's lives.",
        },

        {
          number: "02",
          title: "Political Science",
          subtitle: "Training in political and social analysis",
          icon: Landmark,
          colorClass: "career-politics",

          whatDoes: [
            "Analyze political and social phenomena.",
            "Study institutions and decision-making processes.",
            "Research social and political problems.",
            "Analyze public policies.",
            "Prepare reports and analytical proposals.",
          ],

          universities: [
            {
              name: "National University of Colombia",
              detail: "Political Science",
              location: "Medellín",
            },
          ],

          labor: [
            "Public institutions",
            "Local governments",
            "Social organizations",
            "NGOs",
            "Consulting and research",
            "Public policy analysis",
          ],

          salary:
            "Compensation varies according to experience, sector, position, and city; graduate reference figures do not represent a guaranteed salary.",

          day: [
            "Review information and news.",
            "Analyze data and documents.",
            "Prepare reports.",
            "Participate in meetings.",
            "Research problems and public policies.",
          ],

          why:
            "I am interested in understanding how society works and how decisions can generate positive changes in communities.",
        },

        {
          number: "03",
          title: "Nursing",
          subtitle: "Comprehensive care for people and communities",
          icon: Stethoscope,
          colorClass: "career-nursing",

          whatDoes: [
            "Provide comprehensive care to people.",
            "Participate in health prevention and promotion.",
            "Perform nursing care procedures.",
            "Record and monitor patients.",
            "Work together with other healthcare professionals.",
          ],

          universities: [
            {
              name: "University of Antioquia",
              detail: "Nursing",
              location: "Medellín",
            },
            {
              name: "National University of Colombia",
              detail: "Nursing",
              location: "Bogotá",
            },
          ],

          labor: [
            "Hospitals",
            "Clinics",
            "Health centers",
            "Public health programs",
            "Community care",
            "Health promotion and prevention",
          ],

          salary:
            "Compensation depends on the position, experience, institution, and type of contract; published values are references and not guarantees.",

          day: [
            "Check patients' condition.",
            "Perform care activities.",
            "Record clinical information.",
            "Support treatments and procedures.",
            "Educate patients and families.",
            "Coordinate activities with the healthcare team.",
          ],

          why:
            "I am attracted to the possibility of directly helping people, providing care, and feeling that my work can be useful to someone.",
        },
      ];

  return (
    <section className="section careers-section">
      <div className="section-heading">
        <span className="section-label">
          {isSpanish
            ? "FASE 2 · EXPLORANDO POSIBILIDADES"
            : "PHASE 2 · EXPLORING POSSIBILITIES"}
        </span>

        <h2>
          {isSpanish ? "Mis " : "My "}
          <span>{isSpanish ? "carreras" : "careers"}</span>
        </h2>

        <p>
          {isSpanish
            ? "Estas son tres opciones profesionales que actualmente despiertan mi interés. Conocerlas mejor me ayudará a tomar una decisión informada."
            : "These are three professional options that currently spark my interest. Learning more about them will help me make an informed decision."}
        </p>
      </div>

      {/* INTRO Y TARJETA CON IMAGEN CARRERAS.PNG */}
      <div className="careers-top-layout">
        <motion.div
          className="careers-image-card"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/carreras.png"
            alt={
              isSpanish
                ? "Ilustración sobre las opciones de carrera de Adriana"
                : "Illustration about Adriana's career options"
            }
          />
        </motion.div>

        <motion.div
          className="careers-intro"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="careers-intro-icon">
            <School size={23} />
          </div>

          <div>
            <span>
              {isSpanish
                ? "MI MÉTODO DE EXPLORACIÓN"
                : "MY EXPLORATION METHOD"}
            </span>

            <h3>
              {isSpanish
                ? "Tres caminos, una pregunta:"
                : "Three paths, one question:"}{" "}
              <strong>
                {isSpanish
                  ? "¿qué quiero construir?"
                  : "what do I want to build?"}
              </strong>
            </h3>

            <p>
              {isSpanish
                ? "No necesito decidirlo todo de inmediato. Primero quiero conocer las opciones, investigar y descubrir cuál conecta mejor con mis intereses, habilidades y proyecto de vida."
                : "I don't need to decide everything right away. First, I want to learn about the options, research them, and discover which one connects best with my interests, skills, and life project."}
            </p>
          </div>
        </motion.div>
      </div>

      {/* CARRERAS */}
      <div className="careers-list">
        {careers.map((career, index) => {
          const Icon = career.icon;

          return (
            <motion.article
              key={career.number}
              className={`career-card ${career.colorClass}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              {/* CABECERA */}
              <div className="career-card-header">
                <div className="career-number">{career.number}</div>

                <div className="career-icon">
                  <Icon size={25} />
                </div>

                <div className="career-title">
                  <span>
                    {isSpanish ? "OPCIÓN" : "OPTION"} {career.number}
                  </span>

                  <h3>{career.title}</h3>

                  <p>{career.subtitle}</p>
                </div>
              </div>

              {/* QUÉ HACE */}
              <div className="career-section-block">
                <div className="career-block-title">
                  <Briefcase size={17} />

                  <h4>
                    {isSpanish
                      ? "¿Qué hace un profesional?"
                      : "What does a professional do?"}
                  </h4>
                </div>

                <ul>
                  {career.whatDoes.map((item) => (
                    <li key={item}>
                      <ArrowRight size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* UNIVERSIDADES */}
              <div className="career-section-block">
                <div className="career-block-title">
                  <GraduationCap size={17} />

                  <h4>
                    {isSpanish
                      ? "Universidades donde puedo estudiar"
                      : "Universities where I can study"}
                  </h4>
                </div>

                <div className="career-universities">
                  {career.universities.map((university) => (
                    <div
                      key={`${university.name}-${university.detail}`}
                      className="career-university"
                    >
                      <strong>{university.name}</strong>

                      <span>{university.detail}</span>

                      <small>
                        <MapPin size={12} />
                        {university.location}
                      </small>
                    </div>
                  ))}
                </div>
              </div>

              {/* CAMPO LABORAL */}
              <div className="career-section-block">
                <div className="career-block-title">
                  <Briefcase size={17} />

                  <h4>
                    {isSpanish
                      ? "Campo laboral"
                      : "Career opportunities"}
                  </h4>
                </div>

                <div className="career-tags">
                  {career.labor.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              {/* SALARIO */}
              <div className="career-reference">
                <CircleDollarSign size={18} />

                <div>
                  <span>
                    {isSpanish
                      ? "REFERENCIA SALARIAL"
                      : "SALARY REFERENCE"}
                  </span>

                  <p>{career.salary}</p>
                </div>
              </div>

              {/* DÍA TÍPICO */}
              <div className="career-section-block">
                <div className="career-block-title">
                  <Clock3 size={17} />

                  <h4>
                    {isSpanish ? "Un día típico" : "A typical day"}
                  </h4>
                </div>

                <div className="career-day">
                  {career.day.map((activity, activityIndex) => (
                    <div key={activity} className="career-day-item">
                      <span>
                        {String(activityIndex + 1).padStart(2, "0")}
                      </span>

                      <p>{activity}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* POR QUÉ ME INTERESA */}
              <div className="career-why">
                <Heart size={19} />

                <div>
                  <span>
                    {isSpanish
                      ? "¿POR QUÉ ME INTERESA?"
                      : "WHY AM I INTERESTED?"}
                  </span>

                  <p>{career.why}</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* CIERRE */}
      <motion.div
        className="careers-closing"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span>{isSpanish ? "MI REFLEXIÓN" : "MY REFLECTION"}</span>

        <h3>
          {isSpanish
            ? "Explorar antes de decidir también es avanzar."
            : "Exploring before deciding is also moving forward."}
        </h3>

        <p>
          {isSpanish
            ? "Estas tres opciones tienen características diferentes, pero todas conectan con algo importante para mí: aprender, relacionarme con otras personas y aportar de alguna manera a la sociedad."
            : "These three options have different characteristics, but they all connect with something important to me: learning, connecting with other people, and contributing to society in some way."}
        </p>
      </motion.div>
    </section>
  );
}

export default Careers;