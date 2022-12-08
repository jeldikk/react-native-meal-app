import { useLayoutEffect } from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";
import IconButton from "../components/icon-button.component";
import { MEALS } from "../data/dummy-data";
import useFavoritesContext from "../hooks/favorites-context.hook";

function MealDetailScreen({ route, navigation }) {
  const favoritesContext = useFavoritesContext();
  const { params } = route;
  const mealItem = MEALS.find((meal) => meal.id === params["mealId"]);

  function headerButtonClickHandler() {
    console.log("header button clicked ", mealItem.id);
    favoritesContext.addFavorite(mealItem);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Meal Detail",
      headerRight: () => (
        <IconButton
          icon="star"
          pressHandler={headerButtonClickHandler}
          color="white"
        />
      ),
    });
  }, [navigation, headerButtonClickHandler]);

  return (
    <View style={styles.mealDetailContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: mealItem.imageUrl }} />
      </View>
      <Text style={styles.title}>{mealItem.title}</Text>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  mealDetailContainer: {
    flex: 1,
  },
  imageContainer: {
    marginTop: 24,
    // padding: 1,
    height: 300,
    borderWidth: 5,
    borderColor: "#cedd76",
    borderRadius: 8,
  },
  image: {
    flex: 1,
    // borderRadius: 8,
  },
  title: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#cedd76",
  },
});

export default MealDetailScreen;
