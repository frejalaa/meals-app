import { View, Text } from "react-native";

import Meal from "../models/meal";

const MealItem = ({ body }) => {
  return (
    <View>
      <Text>{body.title}</Text>
    </View>
  );
};

export default MealItem;
