import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import styles from "./Player.module.css";
import { useContext, useEffect, useState } from "react";
import { VideosContext } from "../../context/VideosContext";

const Player = () => {
  const [video, setVideo] = useState(null);
  const { videos } = useContext(VideosContext);
  const { id } = useParams();

  useEffect(() => {
    const videoEncontrado = videos.find(video => video.id.toString() === id);
    setVideo(videoEncontrado);
  }, [id, videos])

  if(!video) {
    return <h2>Video não encontrado...</h2>
  }

  // useEffect(() => {
  //   fetch(`https://my-json-server.typicode.com/Nawsacul/cinetag-api/videos?id=${parametros.id}`)
  //   .then(resposta => resposta.json())
  //   .then(dados => {
  //     setVideo(...dados)
  //   })
  // }, [])

  return (
    <>
      <Banner img="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
};

export default Player;
