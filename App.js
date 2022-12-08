import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "./screens/categories.screen";
import MealsOverviewScreen from "./screens/meals-overview.screen";
import MealDetailScreen from "./screens/meal-detail.screen";
import FavoritesScreen from "./screens/favorites.screen";
import { FavoritesContextProvider } from "./store/context/favorites.context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CategoryDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#310404",
        },
        headerTintColor: "#ddebc3",
        drawerStyle: {
          backgroundColor: "#3b2a2a",
        },
        drawerActiveBackgroundColor: "#310404",
        drawerActiveTintColor: "#ddebc3",
        drawerInactiveTintColor: "#ddebc3",
        sceneContainerStyle: {
          backgroundColor: "#2c24244b",
        },
      }}
    >
      <Drawer.Screen
        name="category:meals-categories"
        component={CategoriesScreen}
        options={{
          title: "Meals Categories",
        }}
      />
      <Drawer.Screen
        name="category:favorites"
        component={FavoritesScreen}
        options={{ title: "Favorites" }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="meals-categories"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#310404",
              },
              headerTitleAlign: "center",
              headerTintColor: "#ddebc3",
              contentStyle: {
                backgroundColor: "#2c24244b",
              },
            }}
          >
            <Stack.Screen
              name="meals-categories"
              component={CategoryDrawer}
              options={{
                title: "Meal Categories",
                animation: "flip",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="meals-overview"
              component={MealsOverviewScreen}
              options={{
                title: "Meals Overview",
              }}
            />
            <Stack.Screen
              name="meal-detail"
              component={MealDetailScreen}
              options={{
                title: "Meal Details",
                headerRight: () => <Button title="Tap me!" />,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
