import { createContext, useReducer } from "react";

export const FavoritesContext = createContext();

const intialState = {
  favorites: [],
};

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
      };
    default:
      return state;
  }
};

export function FavoritesContextProvider({ children }) {
  const [state, dispatch] = useReducer(favoritesReducer, intialState);

  const addFavorite = (favorite) => {
    console.log("Adding favorite ", favorite);
    dispatch({
      type: "ADD_FAVORITE",
      payload: favorite,
    });
  };

  const removeFavorite = (favId) => {
    dispatch({
      type: "REMOVE_FAVORITE",
      payload: favId,
    });
  };

  return (
    <FavoritesContext.Provider
      value={{
        ...state,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
