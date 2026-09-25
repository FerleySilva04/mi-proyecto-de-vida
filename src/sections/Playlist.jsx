import { motion } from "framer-motion";
import {
  Music,
  Play,
  Heart,
  Sparkles,
} from "lucide-react";

function Playlist({ language = "es" }) {
  const isSpanish = language === "es";

  const songs = isSpanish
    ? [
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
      ]
    : [
        {
          number: "01",
          title: "Brisa",
          artist: "Luister La Voz",
          reason:
            "It represents nostalgia and the desire to reconnect with someone important. The song expresses deeply missing a person and wanting to find a way to make that feeling reach them.",
        },
        {
          number: "02",
          title: "Kilómetros",
          artist: "Luister La Voz · DJ Dever",
          reason:
            "It reminds me that distance does not necessarily end feelings. It represents affection, loyalty, and the hope of maintaining a connection even when there are many kilometers between people.",
        },
        {
          number: "03",
          title: "Ejemplo de Amor",
          artist: "Luister La Voz",
          reason:
            "It represents a joyful, close, and sincere kind of love. I like it because it talks about a relationship built on affection, admiration, and happiness in sharing life with another person.",
        },
        {
          number: "04",
          title: "Promesa Sagrada",
          artist: "Luister La Voz",
          reason:
            "It represents overcoming difficulties, hard work, and gratitude toward family. It inspires me because it shows that past difficulties can become motivation to work toward a better future and give back to the family for all their support.",
        },
        {
          number: "05",
          title: "Los Caminos de la Vida",
          artist: "Los Diablitos",
          reason:
            "It reminds me that life does not always follow the path we imagine. It represents the difficulties of growing up, the effort required to move forward, and especially love and gratitude toward my mother and family.",
        },
      ];

  return (
    <section className="section playlist-section">
      <div className="section-heading">
        <span className="section-label">
          {isSpanish
            ? "EXTRAS · MI PLAYLIST"
            : "EXTRAS · MY PLAYLIST"}
        </span>

        <h2>
          {isSpanish ? "La música que " : "The music that "}
          <span>
            {isSpanish ? "me acompaña" : "stays with me"}
          </span>
        </h2>

        <p>
          {isSpanish
            ? "Cinco canciones que relaciono con mis sueños, mis emociones y las ganas de seguir avanzando."
            : "Five songs that I connect with my dreams, my emotions, and my desire to keep moving forward."}
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
          <span>
            {isSpanish ? "MI BANDA SONORA" : "MY SOUNDTRACK"}
          </span>

          <h3>
            {isSpanish
              ? "Hay canciones que pueden acompañar una etapa de la vida."
              : "Some songs can become part of a stage of our lives."}
          </h3>

          <p>
            {isSpanish
              ? "Esta playlist representa energía, esperanza, confianza, aprendizaje y ganas de alcanzar mis sueños."
              : "This playlist represents energy, hope, confidence, learning, and the desire to achieve my dreams."}
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
          <strong>
            {isSpanish
              ? "Mi playlist también cuenta una historia."
              : "My playlist also tells a story."}
          </strong>{" "}
          {isSpanish
            ? "Cada canción representa una emoción, una idea o una parte del futuro que quiero construir."
            : "Each song represents an emotion, an idea, or a part of the future I want to build."}
        </p>
      </motion.div>
    </section>
  );
}

export default Playlist;