import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

const useFavoritoContext = () => {
    const { favorito, setFavorito } = useContext(FavoritosContext);
  
    const adicionarFavorito = (novoFavorito) => {
      const favoritoRepetido = favorito.some(
        (item) => item.id === novoFavorito.id
      );
  
      let novaLista = [...favorito];
  
      if (!favoritoRepetido) {
        novaLista.push(novoFavorito);
        return setFavorito(novaLista);
      }
  
      novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
  
      return setFavorito(novaLista);
    };
  
    return {
      favorito,
      adicionarFavorito,
    };
  };
  
  export { useFavoritoContext };