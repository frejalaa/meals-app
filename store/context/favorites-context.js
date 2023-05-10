import { createContext, useState } from "react";

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoritesMealsIds, setFavoritesMealsIds] = useState([]);

  const addFavorite = (id) => {
    setFavoritesMealsIds((prev) => [...prev, id]);
  };

  const removeFavorite = (id) => {
    setFavoritesMealsIds((prev) => prev.filter((item) => item !== id));
  };

  const value = {
    ids: favoritesMealsIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  );
};

export { FavoritesContext };

export default FavoritesContextProvider;
