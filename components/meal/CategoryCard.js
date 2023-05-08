import { Pressable, View, Text, StyleSheet } from "react-native";

import Colors from "../../assets/colors/color";
import Card from "../ui/Card";

const CategoryCard = ({ category, onPress }) => {
  const cardStyle = {
    margin: 15,
    height: 150,
    backgroundColor: category.color,
  }

  return (
    <Card style={cardStyle}>
      <Pressable
        style={styles.buttonStyle}
        android_ripple={{ color: Colors.colorLightDark }}
        onPress={onPress}
      >
        <View style={styles.cardContent}>
          <Text style={styles.title}>{category.title}</Text>
        </View>
      </Pressable>
    </Card>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    width: "100%",
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontFamily: "Sen-Bold",
    fontSize: 20,
    color: Colors.colorBlack,
  }
});
