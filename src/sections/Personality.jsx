import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  Users,
  Target,
  Heart,
  Brain,
  Sparkles,
  Clock3,
  Mic,
  Lightbulb,
} from "lucide-react";

function Personality({ language = "es" }) {
  const [activeTab, setActiveTab] = useState("profile");
  const isSpanish = language === "es";

  const profile = isSpanish
    ? [
        {
          icon: Eye,
          label: "Estilo de aprendizaje",
          value: "Visual",
          description:
            "Aprendo mejor cuando puedo observar imágenes, ejemplos, esquemas y recursos visuales.",
        },
        {
          icon: Users,
          label: "Mi personalidad",
          value: "Extrovertida",
          description:
            "Disfruto conversar, compartir ideas y relacionarme con otras personas.",
        },
        {
          icon: Users,
          label: "Forma de trabajar",
          value: "En equipo",
          description:
            "Me gusta colaborar, escuchar diferentes ideas y aportar para alcanzar objetivos comunes.",
        },
        {
          icon: Target,
          label: "Lo que me motiva",
          value: "Los retos",
          description:
            "Los desafíos me motivan a aprender, mejorar y demostrar de lo que soy capaz.",
        },
        {
          icon: Heart,
          label: "Cómo tomo decisiones",
          value: "Corazón + cabeza",
          description:
            "Procuro escuchar mis emociones, pero también analizar las consecuencias antes de decidir.",
        },
      ]
    : [
        {
          icon: Eye,
          label: "Learning style",
          value: "Visual",
          description:
            "I learn better when I can observe images, examples, diagrams, and visual resources.",
        },
        {
          icon: Users,
          label: "My personality",
          value: "Extroverted",
          description:
            "I enjoy talking, sharing ideas, and connecting with other people.",
        },
        {
          icon: Users,
          label: "How I work",
          value: "Teamwork",
          description:
            "I like collaborating, listening to different ideas, and contributing to achieve common goals.",
        },
        {
          icon: Target,
          label: "What motivates me",
          value: "Challenges",
          description:
            "Challenges motivate me to learn, improve, and show what I am capable of.",
        },
        {
          icon: Heart,
          label: "How I make decisions",
          value: "Heart + mind",
          description:
            "I try to listen to my emotions while also considering the consequences before making a decision.",
        },
      ];

  const strengths = isSpanish
    ? [
        {
          icon: Users,
          title: "Comunicación",
          text: "Sé expresar mis ideas y me gusta conversar con las personas.",
        },
        {
          icon: Heart,
          title: "Empatía",
          text: "Intento comprender cómo se sienten los demás y brindarles apoyo.",
        },
        {
          icon: Target,
          title: "Perseverancia",
          text: "Cuando algo realmente me importa, intento seguir adelante aunque aparezcan dificultades.",
        },
        {
          icon: Users,
          title: "Trabajo en equipo",
          text: "Puedo colaborar con otras personas y valorar diferentes puntos de vista.",
        },
        {
          icon: Lightbulb,
          title: "Creatividad",
          text: "Me gusta buscar nuevas ideas y diferentes maneras de resolver situaciones.",
        },
      ]
    : [
        {
          icon: Users,
          title: "Communication",
          text: "I can express my ideas and I enjoy talking with people.",
        },
        {
          icon: Heart,
          title: "Empathy",
          text: "I try to understand how others feel and offer them support.",
        },
        {
          icon: Target,
          title: "Perseverance",
          text: "When something really matters to me, I try to keep going even when difficulties appear.",
        },
        {
          icon: Users,
          title: "Teamwork",
          text: "I can collaborate with others and value different points of view.",
        },
        {
          icon: Lightbulb,
          title: "Creativity",
          text: "I like looking for new ideas and different ways to solve situations.",
        },
      ];

  const improvements = isSpanish
    ? [
        {
          icon: Brain,
          title: "Tomar decisiones",
          text: "A veces pienso demasiado antes de tomar una decisión importante.",
        },
        {
          icon: Heart,
          title: "Preocupación",
          text: "En algunas situaciones puedo preocuparme más de lo necesario.",
        },
        {
          icon: Clock3,
          title: "Organización",
          text: "Quiero mejorar la manera en que organizo mi tiempo y mis actividades.",
        },
        {
          icon: Target,
          title: "Procrastinación",
          text: "Necesito trabajar en comenzar las tareas a tiempo y evitar dejarlas para después.",
        },
        {
          icon: Mic,
          title: "Hablar en público",
          text: "Quiero ganar más confianza al expresarme frente a grupos grandes.",
        },
      ]
    : [
        {
          icon: Brain,
          title: "Decision-making",
          text: "Sometimes I think too much before making an important decision.",
        },
        {
          icon: Heart,
          title: "Worry",
          text: "In some situations I may worry more than necessary.",
        },
        {
          icon: Clock3,
          title: "Organization",
          text: "I want to improve the way I organize my time and activities.",
        },
        {
          icon: Target,
          title: "Procrastination",
          text: "I need to work on starting tasks on time and avoiding leaving them for later.",
        },
        {
          icon: Mic,
          title: "Public speaking",
          text: "I want to gain more confidence when speaking in front of large groups.",
        },
      ];

  return (
    <section className="section personality-section">
      {/* ENCABEZADO */}
      <div className="section-heading">
        <span className="section-label">
          {isSpanish
            ? "FASE 1 · AUTOCONOCIMIENTO"
            : "PHASE 1 · SELF-AWARENESS"}
        </span>

        <h2>
          {isSpanish ? "Mi " : "My "}
          <span>{isSpanish ? "Personalidad" : "Personality"}</span>
        </h2>

        <p>
          {isSpanish
            ? "Conocer cómo aprendo, cómo trabajo y cómo tomo decisiones me ayuda a entender mejor quién soy y qué necesito para crecer."
            : "Understanding how I learn, how I work, and how I make decisions helps me better understand who I am and what I need to grow."}
        </p>
      </div>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="personality-profile-layout">
        {/* PANEL IZQUIERDO: IMAGEN PERMANENTE */}
        <motion.div
          className="personality-image-card"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/personalidad.png"
            alt={
              isSpanish
                ? "Ilustración sobre la personalidad de Adriana"
                : "Illustration about Adriana's personality"
            }
          />
        </motion.div>

        {/* PANEL DERECHO: INTERACTIVO DE PESTAÑAS */}
        <div className="personality-interactive-container">
          {/* BARRA DE PESTAÑAS */}
          <div className="personality-tabs">
            <button
              className={`tab-btn ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => setActiveTab("profile")}
            >
              {isSpanish ? "01. Perfil" : "01. Profile"}
            </button>
            <button
              className={`tab-btn ${activeTab === "strengths" ? "active" : ""}`}
              onClick={() => setActiveTab("strengths")}
            >
              {isSpanish ? "02. Superpoderes" : "02. Superpowers"}
            </button>
            <button
              className={`tab-btn ${
                activeTab === "improvements" ? "active" : ""
              }`}
              onClick={() => setActiveTab("improvements")}
            >
              {isSpanish ? "03. Bugs" : "03. Bugs"}
            </button>
          </div>

          {/* CONTENIDOS ANIMADOS DE LAS PESTAÑAS */}
          <AnimatePresence mode="wait">
            {activeTab === "profile" && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="tab-content active"
              >
                <div className="personality-profile">
                  {profile.map((item) => {
                    const Icon = item.icon;
                    return (
                      <article key={item.label} className="personality-card">
                        <div className="personality-icon">
                          <Icon size={20} />
                        </div>
                        <div className="personality-card-content">
                          <span>{item.label}</span>
                          <h3>{item.value}</h3>
                          <p>{item.description}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {activeTab === "strengths" && (
              <motion.div
                key="strengths"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="tab-content active"
              >
                <div className="personality-block">
                  <div className="personality-block-heading">
                    <div className="personality-block-icon">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <span className="block-subtitle">
                        {isSpanish
                          ? "LO QUE ME HACE ESPECIAL"
                          : "WHAT MAKES ME SPECIAL"}
                      </span>
                      <h3 className="block-title">
                        {isSpanish ? "Mis " : "My "}
                        <span className="accent-word">
                          {isSpanish ? "superpoderes" : "superpowers"}
                        </span>
                      </h3>
                    </div>
                  </div>

                  <div className="personality-strengths">
                    {strengths.map((item) => {
                      const Icon = item.icon;
                      return (
                        <article
                          key={item.title}
                          className="personality-strength"
                        >
                          <div className="personality-strength-icon">
                            <Icon size={18} />
                          </div>
                          <div>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "improvements" && (
              <motion.div
                key="improvements"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="tab-content active"
              >
                <div className="personality-block personality-improvements">
                  <div className="personality-block-heading">
                    <div className="personality-block-icon">
                      <Brain size={20} />
                    </div>
                    <div>
                      <span className="block-subtitle">
                        {isSpanish
                          ? "ASPECTOS QUE QUIERO MEJORAR"
                          : "AREAS I WANT TO IMPROVE"}
                      </span>
                      <h3 className="block-title">
                        {isSpanish ? "Mis " : "My "}
                        <span className="accent-word bugs-accent">
                          {isSpanish ? '"bugs"' : '"bugs"'}
                        </span>
                      </h3>
                    </div>
                  </div>

                  <div className="personality-improvements-list">
                    {improvements.map((item) => {
                      const Icon = item.icon;
                      return (
                        <article
                          key={item.title}
                          className="personality-improvement"
                        >
                          <div className="personality-improvement-icon">
                            <Icon size={17} />
                          </div>
                          <div>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* MENSAJE FINAL (CIERRE) */}
          <motion.div
            className="personality-message"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles size={18} />
            <p>
              <strong>
                {isSpanish
                  ? "Conocerme es mi primer paso."
                  : "Knowing myself is my first step."}
              </strong>{" "}
              {isSpanish
                ? "No necesito ser perfecta; necesito reconocer mis fortalezas y trabajar poco a poco en aquello que quiero mejorar."
                : "I do not need to be perfect; I need to recognize my strengths and gradually work on the things I want to improve."}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Personality;