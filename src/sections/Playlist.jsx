import { motion } from "framer-motion";
import {
  Music,
  Play,
  Heart,
  Sparkles,
} from "lucide-react";

function Playlist() {
  const songs = [
    {
      number: "01",
      title: "Brisa",
      artist: "Luister La Voz",
      reason:
        "Representa la nostalgia y el deseo de recuperar a alguien importante. La canción habla de extrañar profundamente a una persona y de querer encontrar una manera de hacerle llegar ese sentimiento.",
    },
    {
      number: "02",
      title: "Kilómetros",
      artist: "Luister La Voz · DJ Dever",
      reason:
        "Me recuerda que la distancia no necesariamente acaba con los sentimientos. Representa el cariño, la fidelidad y la esperanza de mantener un vínculo aunque existan kilómetros de por medio.",
    },
    {
      number: "03",
      title: "Ejemplo de Amor",
      artist: "Luister La Voz",
      reason:
        "Representa un amor alegre, cercano y sincero. Me gusta porque habla de una relación en la que existe cariño, admiración y felicidad por compartir la vida con otra persona.",
    },
    {
      number: "04",
      title: "Promesa Sagrada",
      artist: "Luister La Voz",
      reason:
        "Es una canción que representa la superación, el esfuerzo y el agradecimiento hacia la familia. Me inspira porque muestra que las dificultades del pasado pueden convertirse en motivación para trabajar por un futuro mejor y devolverle a la familia todo su apoyo.",
    },
    {
      number: "05",
      title: "Los Caminos de la Vida",
      artist: "Los Diablitos",
      reason:
        "Me recuerda que la vida no siempre sigue el camino que imaginamos. Representa las dificultades de crecer, el esfuerzo de salir adelante y, especialmente, el amor y agradecimiento hacia la madre y la familia.",
    },
  ];

  return (
    <section className="section playlist-section">
      <div className="section-heading">
        <span className="section-label">
          EXTRAS · MI PLAYLIST
        </span>

        <h2>
          La música que <span>me acompaña</span>
        </h2>

        <p>
          Cinco canciones que relaciono con mis sueños, mis emociones y las
          ganas de seguir avanzando.
        </p>
      </div>

      <motion.div
        className="playlist-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="playlist-disc">
          <Music size={30} />
        </div>

        <div>
          <span>MI BANDA SONORA</span>

          <h3>
            Hay canciones que pueden acompañar una etapa de la vida.
          </h3>

          <p>
            Esta playlist representa energía, esperanza, confianza,
            aprendizaje y ganas de alcanzar mis sueños.
          </p>
        </div>
      </motion.div>

      <div className="playlist-list">
        {songs.map((song, index) => (
          <motion.article
            className="playlist-song"
            key={song.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.07,
            }}
          >
            <span className="playlist-number">
              {song.number}
            </span>

            <div className="playlist-play">
              <Play size={15} />
            </div>

            <div className="playlist-song-info">
              <h4>{song.title}</h4>

              <span>{song.artist}</span>
            </div>

            <p>{song.reason}</p>

            <Heart
              className="playlist-heart"
              size={18}
            />
          </motion.article>
        ))}
      </div>

      <motion.div
        className="playlist-closing"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <Sparkles size={20} />

        <p>
          <strong>Mi playlist también cuenta una historia.</strong> Cada
          canción representa una emoción, una idea o una parte del futuro que
          quiero construir.
        </p>
      </motion.div>
    </section>
  );
}

export default Playlist;