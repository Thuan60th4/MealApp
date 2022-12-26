import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import shadow from "../utils/shadow";

function MealItem({ meal }) {
  //có thể sử dùn useRoute hoặc useNavigation ở đây để lấy route và naivgation của screen cha
  const naivgation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && { opacity: 0.5 }}
        onPress={() => naivgation.navigate("DetailMeal", { meal: meal })}
      >
        <Image style={styles.imageMeal} source={{ uri: meal.imageUrl }} />
        <Text style={styles.mealName}>{meal.title}</Text>
        <View style={styles.details}>
          <Text style={styles.textInfo}>{meal.duration}m</Text>
          <Text style={styles.textInfo}>{meal.complexity.toUpperCase()}</Text>
          <Text style={styles.textInfo}>
            {meal.affordability.toUpperCase()}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 18,
    backgroundColor: "white",
    borderRadius: 8,
    ...shadow,
  },

  imageMeal: {
    flex: 1,
    height: 250,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  mealName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },

  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginHorizontal: 50,
    marginVertical: 10,
  },
  textInfo: {
    fontSize: 16,
  },
});

export default MealItem;
