import { useContext } from "react";

import MealsList from "../components/meal/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

const FavoritesMeals = ({ navigation }) => {
  const favoritesMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoritesMealsCtx.ids.includes(meal.id)
  );

  return <MealsList list={favoriteMeals} />;
};

export default FavoritesMeals;
