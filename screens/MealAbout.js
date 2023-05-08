import { useLayoutEffect, useEffect, useState } from "react";
import { View, Button, Image, ScrollView, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";
import Colors from "../assets/colors/color";
import MealDetail from "../components/meal/MealDetail";
import MealSteps from "../components/meal/MealSteps";
import ButtonIcon from "../components/ui/ButtonIcon";

const MealAbout = ({ route, navigation }) => {
  const { mealId } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  let icon = "star-outline";

  useEffect(() => {
    icon = isFavorite ? "star" : "star-outline";
  }, [isFavorite]);

  const selectedMeal = MEALS.find((item) => {
    return item.id === mealId;
  });

  const addToFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <ButtonIcon
            icon={icon}
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
      <MealDetail {...mealDetail} />
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
    color: Colors.colorBlack,
  },
});
