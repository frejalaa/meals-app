import { Pressable, View, Text, StyleSheet } from "react-native";

import Colors from "../assets/colors/color";

const CategoryCard = ({ category, onPress }) => {
  return (
    <View style={[styles.cardContainer, { backgroundColor: category.color }]}>
      <Pressable
        style={styles.buttonStyle}
        android_ripple={{ color: Colors.colorLightDark }}
        onPress={onPress}
      >
        <View style={styles.cardContent}>
          <Text style={styles.title}>{category.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 15,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 5,
    overflow: "hidden", // this is important for the ripple effect to work on Android
  },
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
