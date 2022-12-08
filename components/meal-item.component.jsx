import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
function MealItemCard({ meal }) {
  //   console.log({ meal });
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("meal-detail", {
      mealId: meal.id,
    });
  };
  return (
    <View style={styles.mealItemContainer}>
      <Pressable onPress={pressHandler} android_ripple={{ color: "gray" }}>
        <View>
          <Image style={styles.image} source={{ uri: meal.imageUrl }} />
          <Text style={styles.title}>{meal.title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{meal.duration}</Text>
          <Text style={styles.detailItem}>
            {meal.affordability.toUpperCase()}
          </Text>
          <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItemContainer: {
    margin: 16,
    // padding: 8,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },
  imageContainer: {},
  image: {
    width: "100%",
    height: 200,
    // borderRadius: 8,
  },
  title: {
    padding: 8,
    textAlign: "center",
    fontsize: 18,
    fontWeight: "bold",
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
  },
});
export default MealItemCard;
