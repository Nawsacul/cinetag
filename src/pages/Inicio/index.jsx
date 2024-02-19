import styles from "./Inicio.module.css";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import { useContext } from "react";
import { VideosContext } from "../../context/VideosContext";

const Inicio = () => {
  const { videos } = useContext(VideosContext);

  return (
    <>
      <Banner img="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
};

export default Inicio;
