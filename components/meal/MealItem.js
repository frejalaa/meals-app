import { View, Text, Image, StyleSheet, Pressable } from "react-native";

import Card from "../ui/Card";
import MealDescription from "./MealDetail";
import Colors from "../../assets/colors/color";

const MealItem = ({ body, onPress }) => {
  const description = {
    title: body.title,
    duration: body.duration,
    complexity: body.complexity,
    affordability: body.affordability,
    numberOfLines: 1,
  };

  const goToMealDetail = () => {
    onPress(body.id);
  };

  return (
    <Card style={styles.cardStyle}>
      <Pressable
        onPress={goToMealDetail}
        style={styles.rootContainer}
        android_ripple={{ color: Colors.colorRipple }}
      >
        <Image source={{ uri: body.imageUrl }} style={styles.imageStyle} />
        <MealDescription {...description} />
      </Pressable>
    </Card>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
  },
  imageStyle: {
    width: "100%",
    height: "75%",
  },
  cardStyle: {
    margin: 15,
    height: 300,
    backgroundColor: Colors.colorWhite,
    justifyContent: "flex-start",
  },
});
