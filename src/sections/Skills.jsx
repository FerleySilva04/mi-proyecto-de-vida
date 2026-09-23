import { motion } from "framer-motion";
import {
  BookOpen,
  Laptop,
  Users,
  Star,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      icon: BookOpen,
      number: "01",
      title: "Habilidades académicas",
      description:
        "Son las herramientas que necesito para avanzar con éxito en mis estudios.",
      skills: [
        {
          name: "Comprensión lectora",
          text: "Comprender textos, identificar ideas principales y analizar información.",
        },
        {
          name: "Matemáticas",
          text: "Fortalecer mi razonamiento lógico y resolver problemas.",
        },
        {
          name: "Inglés",
          text: "Mejorar progresivamente mi comprensión y comunicación en inglés.",
        },
        {
          name: "Investigación",
          text: "Buscar, seleccionar y analizar información de diferentes fuentes.",
        },
        {
          name: "Escritura",
          text: "Expresar mis ideas de manera clara y organizada.",
        },
      ],
    },
    {
      icon: Laptop,
      number: "02",
      title: "Habilidades tecnológicas",
      description:
        "Quiero aprovechar la tecnología como una herramienta para aprender y trabajar.",
      skills: [
        {
          name: "Herramientas digitales",
          text: "Utilizar herramientas digitales para estudiar, organizarme y trabajar.",
        },
        {
          name: "Ofimática",
          text: "Mejorar el manejo de documentos, presentaciones y hojas de cálculo.",
        },
        {
          name: "Investigación en internet",
          text: "Aprender a encontrar información confiable y utilizarla correctamente.",
        },
        {
          name: "Presentaciones",
          text: "Crear presentaciones claras, organizadas y atractivas.",
        },
        {
          name: "Aprendizaje digital",
          text: "Aprovechar cursos y plataformas educativas para seguir aprendiendo.",
        },
      ],
    },
    {
      icon: Users,
      number: "03",
      title: "Habilidades blandas",
      description:
        "Son capacidades que me ayudarán tanto en mi vida personal como profesional.",
      skills: [
        {
          name: "Comunicación",
          text: "Expresar mis ideas con claridad y escuchar a los demás.",
        },
        {
          name: "Trabajo en equipo",
          text: "Colaborar, compartir ideas y respetar diferentes puntos de vista.",
        },
        {
          name: "Organización",
          text: "Planificar mis actividades y cumplir con mis responsabilidades.",
        },
        {
          name: "Liderazgo",
          text: "Aprender a tomar iniciativa y aportar positivamente a un equipo.",
        },
        {
          name: "Hablar en público",
          text: "Ganar confianza para expresar mis ideas frente a otras personas.",
        },
      ],
    },
    {
      icon: Star,
      number: "04",
      title: "Habilidades específicas",
      description:
        "Estas habilidades dependerán del camino profesional que finalmente decida elegir.",
      skills: [
        {
          name: "Educación",
          text: "Comunicación, pedagogía y manejo de grupos.",
        },
        {
          name: "Ciencia Política",
          text: "Análisis social, investigación y argumentación.",
        },
        {
          name: "Enfermería",
          text: "Empatía, responsabilidad, atención y trabajo en equipo.",
        },
        {
          name: "Toma de decisiones",
          text: "Comparar opciones y analizar consecuencias antes de elegir.",
        },
        {
          name: "Adaptabilidad",
          text: "Aprender a responder ante cambios y nuevas situaciones.",
        },
      ],
    },
  ];

  return (
    <section className="section skills-section">
      <div className="section-heading">
        <span className="section-label">
          FASE 4 · MI PLAN DE ACCIÓN
        </span>

        <h2>
          Mis <span>habilidades</span>
        </h2>

        <p>
          Identificar las habilidades que ya tengo y aquellas que necesito
          desarrollar me permite saber en qué quiero trabajar durante los
          próximos años.
        </p>
      </div>

      <motion.div
        className="skills-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="skills-intro-icon">
          <Sparkles size={23} />
        </div>

        <div>
          <span>MI OBJETIVO</span>

          <h3>
            No quiero esperar a tener mi profesión para empezar a prepararme.
          </h3>

          <p>
            Desde ahora puedo fortalecer habilidades que serán útiles sin
            importar cuál de las carreras que estoy explorando termine
            eligiendo.
          </p>
        </div>
      </motion.div>

      <div className="skills-grid">
        {skillGroups.map((group, groupIndex) => {
          const Icon = group.icon;

          return (
            <motion.article
              className="skills-group"
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: groupIndex * 0.1,
              }}
            >
              <div className="skills-group-header">
                <div className="skills-group-number">
                  {group.number}
                </div>

                <div className="skills-group-icon">
                  <Icon size={22} />
                </div>
              </div>

              <span className="skills-small-label">
                ÁREA {group.number}
              </span>

              <h3>{group.title}</h3>

              <p className="skills-group-description">
                {group.description}
              </p>

              <div className="skills-list">
                {group.skills.map((skill, index) => (
                  <motion.div
                    className="skill-item"
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay:
                        groupIndex * 0.1 + index * 0.05,
                    }}
                  >
                    <div className="skill-check">
                      <CheckCircle2 size={16} />
                    </div>

                    <div>
                      <h4>{skill.name}</h4>
                      <p>{skill.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        className="skills-development"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="skills-development-icon">
          <Star size={21} />
        </div>

        <div>
          <span>MI RETO PERSONAL</span>

          <h3>
            Convertir las habilidades que quiero mejorar en hábitos.
          </h3>

          <p>
            Quiero practicar de manera constante, medir mis avances y no
            frustrarme si al principio algo resulta difícil. Cada habilidad
            nueva puede convertirse en una herramienta para mi futuro.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;