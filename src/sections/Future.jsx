import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  Heart,
  Plane,
  Sparkles,
  Mail,
} from "lucide-react";

function Future({ language = "es" }) {
  const isSpanish = language === "es";

  return (
    <section id="futuro" className="section future-section">
      <div className="section-heading">
        <span className="section-label">
          {isSpanish
            ? "FASE 3 · DEFINIENDO MI DESTINO"
            : "PHASE 3 · DEFINING MY DESTINATION"}
        </span>

        <h2>
          {isSpanish ? "Mi visión " : "My vision "}
          <span>{isSpanish ? "a los 30" : "at 30"}</span>
        </h2>

        <p>
          {isSpanish
            ? "A veces imaginar el futuro ayuda a entender qué decisiones quiero comenzar a tomar desde hoy."
            : "Sometimes imagining the future helps me understand which decisions I want to start making today."}
        </p>
      </div>

      <motion.div
        className="future-letter"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="future-letter-header">
          <div className="future-letter-icon">
            <Mail size={22} />
          </div>

          <div>
            <span>
              {isSpanish
                ? "CARTA DESDE EL FUTURO"
                : "LETTER FROM THE FUTURE"}
            </span>

            <h3>
              {isSpanish
                ? "Adriana de 30 años → Adriana de 18 años"
                : "30-year-old Adriana → 18-year-old Adriana"}
            </h3>
          </div>
        </div>

        <div className="future-letter-body">
          <p>
            {isSpanish ? "Querida Adriana:" : "Dear Adriana:"}
          </p>

          <p>
            {isSpanish
              ? "Te escribo desde unos años adelante para contarte que muchas de las cosas que hoy te preocupan fueron convirtiéndose poco a poco en experiencias que te ayudaron a crecer."
              : "I am writing to you from a few years ahead to tell you that many of the things that worry you today slowly became experiences that helped you grow."}
          </p>

          <p>
            {isSpanish
              ? "A los 30 años vivo en un lugar donde me siento tranquila, independiente y orgullosa de lo que he construido. Tengo una profesión que me permite ayudar a otras personas y continuar aprendiendo. No todo salió exactamente como lo imaginabas a los 18, pero cada decisión y cada dificultad te enseñaron algo importante."
              : "At 30, I live in a place where I feel peaceful, independent, and proud of what I have built. I have a profession that allows me to help other people and continue learning. Not everything turned out exactly as you imagined at 18, but every decision and every difficulty taught you something important."}
          </p>

          <p>
            {isSpanish
              ? "Terminaste tus estudios, construiste tu camino profesional y lograste una mayor estabilidad económica. También pudiste ayudar a tu familia, conocer nuevos lugares y vivir experiencias que alguna vez parecían muy lejanas."
              : "You finished your studies, built your professional path, and achieved greater financial stability. You were also able to help your family, visit new places, and experience things that once seemed very far away."}
          </p>

          <p>
            {isSpanish ? (
              <>
                Quiero darte un consejo:{" "}
                <strong>
                  no necesitas tener toda tu vida resuelta a los 18 años.
                </strong>{" "}
                Está bien tener dudas, cambiar de opinión y comenzar de nuevo
                cuando sea necesario.
              </>
            ) : (
              <>
                I want to give you some advice:{" "}
                <strong>
                  you do not need to have your whole life figured out at 18.
                </strong>{" "}
                It is okay to have doubts, change your mind, and start again
                when necessary.
              </>
            )}
          </p>

          <p>
            {isSpanish
              ? "Confía más en ti. Aprovecha las oportunidades, estudia, aprende de tus errores y no tengas miedo de intentar cosas nuevas. Sigue siendo esa persona expresiva, divertida y responsable que siempre has sido."
              : "Trust yourself more. Take advantage of opportunities, study, learn from your mistakes, and do not be afraid to try new things. Keep being the expressive, fun, and responsible person you have always been."}
          </p>

          <p>
            {isSpanish
              ? "Y, sobre todo, nunca olvides tus raíces, a tu familia ni las personas que estuvieron contigo cuando comenzabas este camino."
              : "And above all, never forget your roots, your family, or the people who were with you when you were beginning this journey."}
          </p>

          <p className="future-letter-signature">
            {isSpanish ? "Con cariño," : "With love,"}
            <br />
            <strong>
              {isSpanish
                ? "Adriana de 30 años"
                : "Adriana at 30"}
            </strong>
          </p>
        </div>
      </motion.div>

      <div className="future-vision-grid">
        <motion.article
          className="future-vision-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <div className="future-vision-icon">
            <Home size={21} />
          </div>

          <span>
            {isSpanish ? "DÓNDE VIVO" : "WHERE I LIVE"}
          </span>

          <h3>
            {isSpanish
              ? "Un lugar propio y tranquilo"
              : "A peaceful place of my own"}
          </h3>

          <p>
            {isSpanish
              ? "Quiero vivir en un espacio donde tenga independencia, tranquilidad y pueda sentir que estoy construyendo mi propia vida."
              : "I want to live in a place where I have independence and peace, and where I can feel that I am building my own life."}
          </p>
        </motion.article>

        <motion.article
          className="future-vision-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18 }}
        >
          <div className="future-vision-icon">
            <Briefcase size={21} />
          </div>

          <span>
            {isSpanish ? "A QUÉ ME DEDICO" : "WHAT I DO"}
          </span>

          <h3>
            {isSpanish
              ? "Una profesión con propósito"
              : "A meaningful profession"}
          </h3>

          <p>
            {isSpanish
              ? "Quiero trabajar en un área que me permita seguir aprendiendo, desarrollar mis capacidades y aportar a otras personas."
              : "I want to work in an area that allows me to keep learning, develop my abilities, and contribute to other people."}
          </p>
        </motion.article>

        <motion.article
          className="future-vision-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.26 }}
        >
          <div className="future-vision-icon">
            <Heart size={21} />
          </div>

          <span>
            {isSpanish
              ? "LO QUE HE LOGRADO"
              : "WHAT I HAVE ACHIEVED"}
          </span>

          <h3>
            {isSpanish
              ? "Independencia y estabilidad"
              : "Independence and stability"}
          </h3>

          <p>
            {isSpanish
              ? "Haber terminado mis estudios, construido una trayectoria profesional, apoyado a mi familia y alcanzado una mayor estabilidad personal."
              : "Finishing my studies, building a professional career, supporting my family, and achieving greater personal stability."}
          </p>
        </motion.article>

        <motion.article
          className="future-vision-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.34 }}
        >
          <div className="future-vision-icon">
            <Plane size={21} />
          </div>

          <span>
            {isSpanish
              ? "LO QUE QUIERO VIVIR"
              : "WHAT I WANT TO EXPERIENCE"}
          </span>

          <h3>
            {isSpanish
              ? "Conocer y descubrir"
              : "Explore and discover"}
          </h3>

          <p>
            {isSpanish
              ? "Viajar, conocer nuevos lugares, vivir experiencias diferentes y continuar descubriendo nuevas posibilidades para mi vida."
              : "Travel, discover new places, experience different things, and continue discovering new possibilities for my life."}
          </p>
        </motion.article>
      </div>

      <motion.div
        className="future-dream"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Sparkles size={20} />

        <div>
          <span>
            {isSpanish ? "MI VISIÓN" : "MY VISION"}
          </span>

          <h3>
            {isSpanish
              ? "Construir una vida independiente, ayudar a mi familia y sentir orgullo por la persona en la que me he convertido."
              : "Build an independent life, help my family, and feel proud of the person I have become."}
          </h3>
        </div>
      </motion.div>
    </section>
  );
}

export default Future;