import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryCard from "../components/meal/CategoryCard";

const Categories = ({ navigation }) => {
  const changeScreen = (categoryId) => {
    navigation.navigate("MealOverview", {
      categoryId
    });
  };

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        return (
          <CategoryCard
            category={itemData.item}
            onPress={changeScreen.bind(this, itemData.item.id)}
          />
        );
      }}
    />
  );
};

export default Categories;
