import { motion } from "framer-motion";
import {
  BookOpen,
  Laptop,
  Users,
  Star,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

function Skills({ language = "es" }) {
  const isSpanish = language === "es";

  const skillGroups = isSpanish
    ? [
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
      ]
    : [
        {
          icon: BookOpen,
          number: "01",
          title: "Academic skills",
          description:
            "These are the tools I need to successfully move forward in my studies.",
          skills: [
            {
              name: "Reading comprehension",
              text: "Understand texts, identify main ideas, and analyze information.",
            },
            {
              name: "Mathematics",
              text: "Strengthen my logical reasoning and solve problems.",
            },
            {
              name: "English",
              text: "Gradually improve my understanding and communication in English.",
            },
            {
              name: "Research",
              text: "Find, select, and analyze information from different sources.",
            },
            {
              name: "Writing",
              text: "Express my ideas clearly and in an organized way.",
            },
          ],
        },
        {
          icon: Laptop,
          number: "02",
          title: "Technology skills",
          description:
            "I want to use technology as a tool for learning and working.",
          skills: [
            {
              name: "Digital tools",
              text: "Use digital tools to study, organize myself, and work.",
            },
            {
              name: "Office software",
              text: "Improve my ability to work with documents, presentations, and spreadsheets.",
            },
            {
              name: "Internet research",
              text: "Learn how to find reliable information and use it correctly.",
            },
            {
              name: "Presentations",
              text: "Create clear, organized, and engaging presentations.",
            },
            {
              name: "Digital learning",
              text: "Take advantage of courses and educational platforms to keep learning.",
            },
          ],
        },
        {
          icon: Users,
          number: "03",
          title: "Soft skills",
          description:
            "These are abilities that will help me in both my personal and professional life.",
          skills: [
            {
              name: "Communication",
              text: "Express my ideas clearly and listen to others.",
            },
            {
              name: "Teamwork",
              text: "Collaborate, share ideas, and respect different points of view.",
            },
            {
              name: "Organization",
              text: "Plan my activities and fulfill my responsibilities.",
            },
            {
              name: "Leadership",
              text: "Learn to take initiative and contribute positively to a team.",
            },
            {
              name: "Public speaking",
              text: "Gain confidence when expressing my ideas in front of other people.",
            },
          ],
        },
        {
          icon: Star,
          number: "04",
          title: "Specific skills",
          description:
            "These skills will depend on the professional path I ultimately decide to choose.",
          skills: [
            {
              name: "Education",
              text: "Communication, pedagogy, and group management.",
            },
            {
              name: "Political Science",
              text: "Social analysis, research, and argumentation.",
            },
            {
              name: "Nursing",
              text: "Empathy, responsibility, care, and teamwork.",
            },
            {
              name: "Decision-making",
              text: "Compare options and analyze consequences before choosing.",
            },
            {
              name: "Adaptability",
              text: "Learn to respond to changes and new situations.",
            },
          ],
        },
      ];

  return (
    <section className="section skills-section">
      <div className="section-heading">
        <span className="section-label">
          {isSpanish
            ? "FASE 4 · MI PLAN DE ACCIÓN"
            : "PHASE 4 · MY ACTION PLAN"}
        </span>

        <h2>
          {isSpanish ? "Mis " : "My "}
          <span>
            {isSpanish ? "habilidades" : "skills"}
          </span>
        </h2>

        <p>
          {isSpanish
            ? "Identificar las habilidades que ya tengo y aquellas que necesito desarrollar me permite saber en qué quiero trabajar durante los próximos años."
            : "Identifying the skills I already have and those I need to develop helps me understand what I want to work on over the next few years."}
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
          <span>
            {isSpanish ? "MI OBJETIVO" : "MY GOAL"}
          </span>

          <h3>
            {isSpanish
              ? "No quiero esperar a tener mi profesión para empezar a prepararme."
              : "I do not want to wait until I have a career to start preparing myself."}
          </h3>

          <p>
            {isSpanish
              ? "Desde ahora puedo fortalecer habilidades que serán útiles sin importar cuál de las carreras que estoy explorando termine eligiendo."
              : "I can start strengthening skills now that will be useful regardless of which career I eventually choose."}
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
                {isSpanish ? "ÁREA" : "AREA"} {group.number}
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
          <span>
            {isSpanish
              ? "MI RETO PERSONAL"
              : "MY PERSONAL CHALLENGE"}
          </span>

          <h3>
            {isSpanish
              ? "Convertir las habilidades que quiero mejorar en hábitos."
              : "Turn the skills I want to improve into habits."}
          </h3>

          <p>
            {isSpanish
              ? "Quiero practicar de manera constante, medir mis avances y no frustrarme si al principio algo resulta difícil. Cada habilidad nueva puede convertirse en una herramienta para mi futuro."
              : "I want to practice consistently, measure my progress, and not get frustrated if something is difficult at first. Every new skill can become a tool for my future."}
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;