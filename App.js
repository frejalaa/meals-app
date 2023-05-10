import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import Categories from "./screens/Categories";
import MealOverview from "./screens/MealOverview";
import MealAbout from "./screens/MealAbout";
import Colors from "./assets/colors/color";
import FavoritesMeals from "./screens/FavoritesMeals";
import FavoritesContextProvider from "./store/context/favorites-context";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={optionsDrawer}>
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="FavoritesMeals"
        component={FavoritesMeals}
        options={{
          title: "Favorites Meals",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

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
        <FavoritesContextProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={optionsStack}>
              <Stack.Screen
                name="MealsCategories"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MealOverview"
                component={MealOverview}
                options={{ title: "Meals" }}
              />
              <Stack.Screen
                name="MealDetail"
                component={MealAbout}
                options={{
                  title: "Meal Detail",
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </FavoritesContextProvider>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const options = {
  headerStyle: {
    backgroundColor: Colors.colorBrown,
  },
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontFamily: "Sen-Bold",
    fontSize: 20,
    color: Colors.colorWhite,
  },
  headerTintColor: Colors.colorWhite,
};

const optionsDrawer = {
  ...options,
  sceneContainerStyle: {
    backgroundColor: Colors.colorBrownLight,
  },
  drawerContentStyle: {
    backgroundColor: Colors.colorBrownLight,
  },
  drawerInactiveTintColor: Colors.colorWhite,
  drawerActiveBackgroundColor: Colors.colorBrownDark,
  drawerActiveTintColor: Colors.colorWhite,
};

const optionsStack = {
  ...options,
  contentStyle: {
    backgroundColor: Colors.colorBrownLight,
  },
};
