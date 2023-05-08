import { StyleSheet, View } from "react-native";

const Card = ({ children, style }) => {
  return <View style={[styles.cardContainer, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 5,
    overflow: "hidden", // this is important for the ripple effect to work on Android
  },
});
