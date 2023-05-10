import { useLayoutEffect, useEffect, useState, useContext } from "react";
import { View, Button, Image, ScrollView, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";
import Colors from "../assets/colors/color";
import MealDetail from "../components/meal/MealDetail";
import MealSteps from "../components/meal/MealSteps";
import ButtonIcon from "../components/ui/ButtonIcon";
import { FavoritesContext } from "../store/context/favorites-context";

const MealAbout = ({ route, navigation }) => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const { mealId } = route.params;

  const isFavorite = favoriteMealsCtx.ids.includes(mealId);

  const selectedMeal = MEALS.find((item) => {
    return item.id === mealId;
  });

  const addToFavorite = () => {
    if (isFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <ButtonIcon
            icon={isFavorite ? "star" : "star-outline"}
            color={"white"}
            size={24}
            onPress={addToFavorite}
          />
        );
      },
    });
  }, [navigation, addToFavorite]);

  const mealDetail = {
    title: selectedMeal.title,
    duration: selectedMeal.duration,
    complexity: selectedMeal.complexity,
    affordability: selectedMeal.affordability,
    numberOfLines: 2,
  };

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <MealDetail {...mealDetail} style={{ mealDetail: styles.mealDetail }} />
      <MealSteps title={"Ingredients"} steps={selectedMeal.ingredients} />
      <MealSteps title={"Steps"} steps={selectedMeal.steps} />
    </ScrollView>
  );
};

export default MealAbout;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
  },
  mealRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%",
    paddingVertical: 10,
  },
  mealDetail: {
    fontFamily: "Sen-Bold",
    fontSize: 16,
    color: Colors.colorWhite,
  },
});
