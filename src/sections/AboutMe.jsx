import {
  Brain,
  Heart,
  Lightbulb,
  Star,
} from "lucide-react";

function AboutMe() {
  const strengths = [
    {
      icon: Heart,
      title: "Empatía",
      description: "Me importa comprender y ayudar a las personas que me rodean.",
    },
    {
      icon: Lightbulb,
      title: "Creatividad",
      description: "Me gusta encontrar nuevas formas de resolver problemas.",
    },
    {
      icon: Brain,
      title: "Aprendizaje",
      description: "Disfruto descubrir cosas nuevas y seguir creciendo.",
    },
    {
      icon: Star,
      title: "Perseverancia",
      description: "Cuando tengo una meta, intento encontrar la manera de alcanzarla.",
    },
  ];

  return (
    <section id="quien-soy" className="section about-section">
      <div className="section-heading">
        <span className="section-label">01 — Autoconocimiento</span>

        <h2>
          ¿Quién <span>soy?</span>
        </h2>

        <p>
          Antes de decidir hacia dónde voy, quiero conocer mejor
          quién soy, qué me caracteriza y qué quiero mejorar.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-profile">
          <div className="profile-placeholder">
            <span>Tu foto</span>
          </div>

          <h3>Mi historia</h3>

          <p>
            Aquí aparecerá una pequeña presentación personal:
            quién soy, de dónde vengo, qué me gusta y qué sueños
            tengo para mi futuro.
          </p>
        </div>

        <div className="strengths-grid">
          {strengths.map((strength) => {
            const Icon = strength.icon;

            return (
              <article className="strength-card" key={strength.title}>
                <div className="strength-icon">
                  <Icon size={22} />
                </div>

                <h3>{strength.title}</h3>

                <p>{strength.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;