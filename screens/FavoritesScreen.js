import { useContext } from "react";
import { FlatList, Text } from "react-native";
import MealItem from "../components/MealItem";
import { FavoriteContext } from "../store/context/favoritesContex";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  // const { listFavId } = useContext(FavoriteContext);
  const listFavId = useSelector((state) => state.favoritesMeals.ids);
  const allFavMeal = MEALS.filter((meal) => listFavId.includes(meal.id));
  return (
    <>
      {allFavMeal.length > 0 ? (
        <FlatList
          data={allFavMeal}
          keyExtractor={(item) => item.id}
          renderItem={(meal) => <MealItem meal={meal.item} />}
        />
      ) : (
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          You haven't any favorite meal yet
        </Text>
      )}
    </>
  );
}

export default FavoritesScreen;
