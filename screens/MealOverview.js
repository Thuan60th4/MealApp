import { useLayoutEffect } from "react";
import { FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

function MealOverview({ route, navigation }) {
  const catId = route.params.categoryId;
  const mealByCategory = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  // const categoryName = CATEGORIES.find(category=> category.id == catId).title

  useLayoutEffect(
    () => navigation.setOptions({ title: route.params.categoryName }),
    []
  );
  return (
    <FlatList
      data={mealByCategory}
      keyExtractor={(item) => item.id}
      renderItem={(meal) => <MealItem meal={meal.item} />}
    />
  );
}

export default MealOverview;
