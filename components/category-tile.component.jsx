import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
function CategoryTile({ category, onPressHandler }) {
  //   const navigation = useNavigation();

  //   const pressHandler = () => {

  //   }
  return (
    <View
      style={[styles.categoryContainer, { backgroundColor: category.color }]}
    >
      <Pressable
        style={styles.pressableStyle}
        android_ripple={{ color: "#ccc" }}
        onPress={onPressHandler}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>{category.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    margin: 12,
    flex: 1,
    height: 150,
    // borderWidth: 1,
    borderRadius: 5,
    elevation: 4,
    // backgroundColor: "white",
    // shadowColor: "black",
    // shadowOpacity: 0.25,
    // shadowOffset: { width: 0, height: 10 },
    // shadowRadius: 10,
    overflow: "hidden",
  },
  pressableStyle: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CategoryTile;
