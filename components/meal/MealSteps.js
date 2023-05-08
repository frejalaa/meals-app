import { View, Text, StyleSheet } from "react-native";

import Card from "../ui/Card";
import Colors from "../../assets/colors/color";

const MealSteps = ({ title, steps }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.stepsContainer}>
        {steps.map((step) => {
          return (
            <Card key={step} style={styles.cardStyle}>
              <Text style={styles.step}>{step}</Text>
            </Card>
          );
        })}
      </View>
    </View>
  );
};

export default MealSteps;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  titleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.colorRipple,
    width: "60%",
    marginBottom: 10,
  },
  title: {
    fontFamily: "Sen-Bold",
    fontSize: 16,
    textAlign: "center",
    color: Colors.colorWhite,
  },
  stepsContainer: {
    width: "60%",
  },
  step: {
    color: Colors.colorWhite,
  },
  cardStyle: {
    marginVertical: 2,
    padding: 10,
    width: "100%",
    elevation: 0,
    backgroundColor: Colors.colorText,
  }
});
