import { View, Text, StyleSheet } from "react-native";

import Colors from "../../assets/colors/color";

const MealDetail = ({ title, duration, complexity, affordability, numberOfLines }) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text numberOfLines={numberOfLines} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
      </View>
      <View style={styles.mealRow}>
        <Text style={styles.mealDetail}>{duration}m</Text>
        <Text style={styles.mealDetail}>{complexity.toUpperCase()}</Text>
        <Text style={styles.mealDetail}>{affordability.toUpperCase()}</Text>
      </View>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontFamily: "Sen-Bolder",
    flexWrap: "wrap",
    width: 290,
    fontSize: 18,
    color: Colors.colorLightDark,
    textAlign: "center",
  },
  mealRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  mealDetail: {
    fontFamily: "Sen-Bold",
    fontSize: 16,
    color: Colors.colorBlack,
  },
});
