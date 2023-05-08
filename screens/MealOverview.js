import { StyleSheet, View, Text, FlatList } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/meal/MealItem";

const MealOverview = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const selectedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(categoryId) != -1;
  });

  const navigateToDetail = (mealId) => {
    navigation.navigate("About the Meal", { mealId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={selectedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <MealItem body={itemData.item} onPress={navigateToDetail} />
        )}
      />
    </View>
  );
};

export default MealOverview;

styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
