import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealsList = ({ list }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <MealItem body={itemData.item} />
        )}
      />
    </View>
  );
};

export default MealsList;

styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
