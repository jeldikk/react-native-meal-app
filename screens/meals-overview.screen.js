import { useLayoutEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import MealItemCard from "../components/meal-item.component";
import { CATEGORIES, MEALS } from "../data/dummy-data";

function renderMealItem(meal) {
  return <MealItemCard meal={meal.item} />;
}

function MealsOverviewScreen({ route, navigation }) {
  const { params } = route;
  console.log({ params });
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(params.categoryId)
  );
  //   console.log({ displayedMeals: displayedMeals.length });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (cat) => cat.id === params.categoryId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, []);

  return (
    <View style={styles.overviewContainer}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overviewContainer: {
    flex: 1,
  },
});

export default MealsOverviewScreen;
