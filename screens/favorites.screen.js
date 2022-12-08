import { StyleSheet, View, Text } from "react-native";
import useFavoritesContext from "../hooks/favorites-context.hook";

function FavoritesScreen() {
  const favoritesContext = useFavoritesContext();
  return (
    <View style={styles.screenContainer}>
      <Text>
        You are in <Text style={styles.highlight}>Favorites</Text> Screen
      </Text>
      <Text>
        Number of Favorites are :{" "}
        <Text style={styles.highlight}>
          {favoritesContext.favorites.length}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default FavoritesScreen;
