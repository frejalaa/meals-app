import { StyleSheet, View, Text, FlatList } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealOverview = ({ route }) => {
  const { categoryId } = route.params;

  const selectedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(categoryId) != -1;
  });
  
  return (
    <View style={styles.container}>
      <FlatList
        data={selectedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <MealItem body={itemData.item} />}
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
