import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryCard from "../components/CategoryCard";

const Categories = () => {
  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        return (
          <CategoryCard
            category={itemData.item}
          />
        );
      }}
    />
  );
};

export default Categories;
