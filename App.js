import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useCallback } from "react";

import Categories from "./screens/Categories";
import MealOverview from "./screens/MealOverview";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Sen: require("./assets/fonts/Sen-Regular.ttf"),
    "Sen-Bold": require("./assets/fonts/Sen-Bold.ttf"),
    "Sen-Bolder": require("./assets/fonts/Sen-ExtraBold.ttf"),
  });

  const onFontsLoaded = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar />
      <View style={styles.container} onLayout={onFontsLoaded}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="MealsCategories" component={Categories} />
            <Stack.Screen name="MealOverview" component={MealOverview} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
