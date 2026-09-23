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
      title: "Color Esperanza",
      artist: "Diego Torres",
      reason:
        "Me recuerda que siempre puedo mirar hacia adelante y confiar en que las cosas pueden mejorar.",
    },
    {
      number: "02",
      title: "Vivir Mi Vida",
      artist: "Marc Anthony",
      reason:
        "Representa mi deseo de disfrutar cada etapa, aprender de las experiencias y aprovechar el presente.",
    },
    {
      number: "03",
      title: "Creo en Mí",
      artist: "Natalia Jiménez",
      reason:
        "Me recuerda la importancia de confiar en mis capacidades incluso cuando aparecen dudas.",
    },
    {
      number: "04",
      title: "A Dios le Pido",
      artist: "Juanes",
      reason:
        "Representa mis deseos de bienestar, tranquilidad y un buen futuro para mí y para las personas que quiero.",
    },
    {
      number: "05",
      title: "Hall of Fame",
      artist: "The Script",
      reason:
        "Me inspira a trabajar por mis objetivos y recordar que los grandes resultados requieren esfuerzo y constancia.",
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