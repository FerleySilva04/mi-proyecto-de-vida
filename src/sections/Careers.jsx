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

function Careers() {
  const careers = [
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
  ];

  return (
    <section className="section careers-section">
      <div className="section-heading">
        <span className="section-label">
          FASE 2 · EXPLORANDO POSIBILIDADES
        </span>

        <h2>Mis <span>carreras</span></h2>

        <p>
          Estas son tres opciones profesionales que actualmente despiertan mi
          interés. Conocerlas mejor me ayudará a tomar una decisión informada.
        </p>
      </div>

      {/* INTRO */}
      <motion.div
        className="careers-intro"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="careers-intro-icon">
          <School size={23} />
        </div>

        <div>
          <span>MI MÉTODO DE EXPLORACIÓN</span>

          <h3>
            Tres caminos, una pregunta:
            <strong> ¿qué quiero construir?</strong>
          </h3>

          <p>
            No necesito decidirlo todo de inmediato. Primero quiero conocer
            las opciones, investigar y descubrir cuál conecta mejor con mis
            intereses, habilidades y proyecto de vida.
          </p>
        </div>
      </motion.div>

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
                <div className="career-number">
                  {career.number}
                </div>

                <div className="career-icon">
                  <Icon size={25} />
                </div>

                <div className="career-title">
                  <span>OPCIÓN {career.number}</span>

                  <h3>{career.title}</h3>

                  <p>{career.subtitle}</p>
                </div>
              </div>

              {/* QUÉ HACE */}
              <div className="career-section-block">
                <div className="career-block-title">
                  <Briefcase size={17} />
                  <h4>¿Qué hace un profesional?</h4>
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
                  <h4>Universidades donde puedo estudiar</h4>
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
                  <h4>Campo laboral</h4>
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
                  <span>REFERENCIA SALARIAL</span>
                  <p>{career.salary}</p>
                </div>
              </div>

              {/* DÍA TÍPICO */}
              <div className="career-section-block">
                <div className="career-block-title">
                  <Clock3 size={17} />
                  <h4>Un día típico</h4>
                </div>

                <div className="career-day">
                  {career.day.map((activity, activityIndex) => (
                    <div
                      key={activity}
                      className="career-day-item"
                    >
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
                  <span>¿POR QUÉ ME INTERESA?</span>
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
        <span>MI REFLEXIÓN</span>

        <h3>
          Explorar antes de decidir también es avanzar.
        </h3>

        <p>
          Estas tres opciones tienen características diferentes, pero todas
          conectan con algo importante para mí: aprender, relacionarme con
          otras personas y aportar de alguna manera a la sociedad.
        </p>
      </motion.div>
    </section>
  );
}

export default Careers;