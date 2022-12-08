import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites.context";

function useFavoritesContext() {
  const favoritesContext = useContext(FavoritesContext);
  if (!favoritesContext) {
    throw new Error("Should use context with in the scope ");
  }
  return favoritesContext;
}

export default useFavoritesContext;
