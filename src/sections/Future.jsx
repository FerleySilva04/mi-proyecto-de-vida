import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  Heart,
  Plane,
  Sparkles,
  Mail,
} from "lucide-react";

function Future() {
  return (
    <section id="futuro" className="section future-section">
      <div className="section-heading">
        <span className="section-label">
          FASE 3 · DEFINIENDO MI DESTINO
        </span>

        <h2>
          Mi visión <span>a los 30</span>
        </h2>

        <p>
          A veces imaginar el futuro ayuda a entender qué decisiones quiero
          comenzar a tomar desde hoy.
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
            <span>CARTA DESDE EL FUTURO</span>
            <h3>Adriana de 30 años → Adriana de 18 años</h3>
          </div>
        </div>

        <div className="future-letter-body">
          <p>Querida Adriana:</p>

          <p>
            Te escribo desde unos años adelante para contarte que muchas de
            las cosas que hoy te preocupan fueron convirtiéndose poco a poco
            en experiencias que te ayudaron a crecer.
          </p>

          <p>
            A los 30 años vivo en un lugar donde me siento tranquila,
            independiente y orgullosa de lo que he construido. Tengo una
            profesión que me permite ayudar a otras personas y continuar
            aprendiendo. No todo salió exactamente como lo imaginabas a los
            18, pero cada decisión y cada dificultad te enseñaron algo
            importante.
          </p>

          <p>
            Terminaste tus estudios, construiste tu camino profesional y
            lograste una mayor estabilidad económica. También pudiste ayudar
            a tu familia, conocer nuevos lugares y vivir experiencias que
            alguna vez parecían muy lejanas.
          </p>

          <p>
            Quiero darte un consejo: <strong>no necesitas tener toda tu vida
            resuelta a los 18 años.</strong> Está bien tener dudas, cambiar
            de opinión y comenzar de nuevo cuando sea necesario.
          </p>

          <p>
            Confía más en ti. Aprovecha las oportunidades, estudia, aprende
            de tus errores y no tengas miedo de intentar cosas nuevas. Sigue
            siendo esa persona expresiva, divertida y responsable que siempre
            has sido.
          </p>

          <p>
            Y, sobre todo, nunca olvides tus raíces, a tu familia ni las
            personas que estuvieron contigo cuando comenzabas este camino.
          </p>

          <p className="future-letter-signature">
            Con cariño,
            <br />
            <strong>Adriana de 30 años</strong>
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

          <span>DÓNDE VIVO</span>

          <h3>Un lugar propio y tranquilo</h3>

          <p>
            Quiero vivir en un espacio donde tenga independencia, tranquilidad
            y pueda sentir que estoy construyendo mi propia vida.
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

          <span>A QUÉ ME DEDICO</span>

          <h3>Una profesión con propósito</h3>

          <p>
            Quiero trabajar en un área que me permita seguir aprendiendo,
            desarrollar mis capacidades y aportar a otras personas.
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

          <span>LO QUE HE LOGRADO</span>

          <h3>Independencia y estabilidad</h3>

          <p>
            Haber terminado mis estudios, construido una trayectoria
            profesional, apoyado a mi familia y alcanzado una mayor estabilidad
            personal.
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

          <span>LO QUE QUIERO VIVIR</span>

          <h3>Conocer y descubrir</h3>

          <p>
            Viajar, conocer nuevos lugares, vivir experiencias diferentes y
            continuar descubriendo nuevas posibilidades para mi vida.
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
          <span>MI VISIÓN</span>

          <h3>
            Construir una vida independiente, ayudar a mi familia y sentir
            orgullo por la persona en la que me he convertido.
          </h3>
        </div>
      </motion.div>
    </section>
  );
}

export default Future;