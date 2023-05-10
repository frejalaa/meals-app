import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/meal/MealsList/MealsList";

const MealOverview = ({ route, navigation }) => {
  const { categoryId } = route.params;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (item) => item.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const selectedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(categoryId) != -1;
  });

  return <MealsList list={selectedMeals} />
};

export default MealOverview;
