import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import shadow from "../utils/shadow";

function CategoryItem({ title, color, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.outerText,
          { backgroundColor: color },
          pressed && Platform.OS === "ios" && { opacity: 0.85 },
        ]}
        android_ripple={{ color: " blue" }}
      >
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    borderRadius: 8,
    margin: 16,
    overflow: Platform.OS == "android" ? "hidden" : "visible",
    ...shadow,
  },

  outerText: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CategoryItem;
