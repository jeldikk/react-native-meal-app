import { useCallback } from "react";

import { FlatList } from "react-native";
import CategoryTile from "../components/category-tile.component";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(category) {
    const pressHandler = () => {
      navigation.navigate("meals-overview", {
        categoryId: category.item.id,
      });
    };
    return (
      <CategoryTile category={category.item} onPressHandler={pressHandler} />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    ></FlatList>
  );
}

export default CategoriesScreen;
