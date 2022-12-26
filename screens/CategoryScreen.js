import { FlatList, StyleSheet } from "react-native";
import CategoryItem from "../components/CategoryItem";
import { CATEGORIES } from "../data/dummy-data";

function CategoryScreen({ navigation }) {
  const handleNavigation = (itemData) => {
    navigation.navigate("MealOverviewScreen", {
      categoryId: itemData.item.id,
      categoryName: itemData.item.title,
    });
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <CategoryItem
          color={itemData.item.color}
          title={itemData.item.title}
          onPress={() => handleNavigation(itemData)}
        />
      )}
      numColumns={2}
    />
    //Cach 2
    // <ScrollView
    //   contentContainerStyle={{
    //     flexDirection: "row",
    //     flexWrap: "wrap",
    //     justifyContent: "space-around",
    //   }}
    // >
    //   {CATEGORIES.map((category) => (
    //     <CategoryItem
    //       key={category.id}
    //       color={category.color}
    //       title={category.title}
    //     />
    //   ))}
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: Platform.select({ ios: 0, android: 40 }),
  },
});

export default CategoryScreen;
