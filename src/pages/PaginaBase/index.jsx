import { Outlet } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import Container from "../../components/Container";
import FavoritosProvider from "../../context/FavoritosContext";
import Footer from "../../components/Footer";

const PaginaBase = () => {
  return (
    <>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
            <Outlet /> {/* Possibilita que a gnt crie uma rota pai, e o outlet são todas as rotas filhas que serão encaixadas na rota pai */}
        </Container>
      </FavoritosProvider>
      <Footer />
    </>
  );
};

export default PaginaBase;
