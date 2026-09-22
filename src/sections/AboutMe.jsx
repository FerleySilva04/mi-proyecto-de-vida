import {
  Heart,
  Lightbulb,
  Brain,
  Star,
} from "lucide-react";

function AboutMe() {
  const strengths = [
    {
      icon: Heart,
      title: "Empatía",
      description:
        "Me gusta comprender a las personas y brindar apoyo cuando alguien lo necesita.",
    },
    {
      icon: Lightbulb,
      title: "Creatividad",
      description:
        "Disfruto expresar mis ideas y buscar nuevas formas de hacer las cosas.",
    },
    {
      icon: Brain,
      title: "Aprendizaje",
      description:
        "Me gusta aprender cosas nuevas y descubrir habilidades que me ayuden a crecer.",
    },
    {
      icon: Star,
      title: "Responsabilidad",
      description:
        "Cuando tengo un objetivo, trato de comprometerme y dar lo mejor de mí.",
    },
  ];

  return (
    <section id="quien-soy" className="section about-section">
      <div className="section-heading">
        <span className="section-label">
          01 — Autoconocimiento
        </span>

        <h2>
          ¿Quién <span>soy?</span>
        </h2>

        <p>
          Conocerme a mí misma es el primer paso para descubrir
          qué quiero lograr y hacia dónde quiero dirigir mi futuro.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-profile">
          <div className="profile-placeholder">
            <div className="profile-initial">A</div>

            <span>Adriana Jiménez</span>
          </div>

          <h3>Esta soy yo</h3>

          <p>
            Soy Adriana Jiménez, tengo 18 años y vivo en San Juan
            Nepomuceno, Bolívar. Me considero una persona
            expresiva, divertida y responsable.
          </p>

          <p className="about-extra">
            Me gusta compartir con mi familia y amigos, escuchar
            música, aprender cosas nuevas y conocer diferentes
            lugares.
          </p>

          <p className="about-extra">
            Para mi futuro me interesan diferentes caminos
            profesionales. Entre ellos están ser profesora,
            enfermera y también participar en la política.
          </p>
        </div>

        <div className="strengths-grid">
          {strengths.map((strength) => {
            const Icon = strength.icon;

            return (
              <article
                className="strength-card"
                key={strength.title}
              >
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