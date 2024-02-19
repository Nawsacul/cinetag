import { Outlet } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import Container from "../../components/Container";
import FavoritosProvider from "../../context/FavoritosContext";
import Footer from "../../components/Footer";
import VideosProvider from "../../context/VideosContext";

const PaginaBase = () => {
  return (
    <>
      <Cabecalho />
      <FavoritosProvider>
        <VideosProvider>
          <Container>
            <Outlet />{" "}
            {/* Possibilita que a gnt crie uma rota pai, e o outlet são todas as rotas filhas que serão encaixadas na rota pai */}
          </Container>
        </VideosProvider>
      </FavoritosProvider>
      <Footer />
    </>
  );
};

export default PaginaBase;
