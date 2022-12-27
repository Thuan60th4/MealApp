import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../components/IconButton";
import List from "../components/List";
import { FavoriteContext } from "../store/context/favoritesContex";
import { addFavoriteMeal, removeFavoriteMeal } from "../store/redux/favorite";

function DetailScreen({ route, navigation }) {
  const mealInfo = route.params.meal;

  const listFavId = useSelector((state) => state.favoritesMeals.ids);
  const dispatch = useDispatch();
  // const { listFavId, addFavoriteMeal, removeFavoriteMeal } =
  //   useContext(FavoriteContext);

  const favoriteState = listFavId.includes(mealInfo.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealInfo.title,
      //dùng trong đây để chạy đc mấy cái hàm trên ko thì dùng trên app.js cũg đc
      headerRight: () => (
        <IconButton
          onPress={
            favoriteState
              // với useContex của react
                // ? () => removeFavoriteMeal(mealInfo.id)
                // : () => addFavoriteMeal(mealInfo.id)
                // với redux
               ? () => dispatch(removeFavoriteMeal(mealInfo.id))
              : () => dispatch(addFavoriteMeal(mealInfo.id))
          }
          name={favoriteState ? "heart" : "heart-outline"}
          color="white"
        />
      ),
    });
  }, [listFavId]);
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: mealInfo.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.textInfo}>{mealInfo.duration}m</Text>
        <Text style={styles.textInfo}>{mealInfo.complexity.toUpperCase()}</Text>
        <Text style={styles.textInfo}>
          {mealInfo.affordability.toUpperCase()}
        </Text>
      </View>
      <View style={styles.wrapItem}>
        <View style={styles.containSubTitle}>
          <Text style={styles.subTitle}>Ingredients</Text>
        </View>
        <List data={mealInfo.ingredients} />

        <View style={styles.containSubTitle}>
          <Text style={styles.subTitle}>Steps</Text>
        </View>
        <List data={mealInfo.steps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
    height: 350,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginHorizontal: 70,
    marginVertical: 10,
  },
  textInfo: {
    fontSize: 16,
  },

  wrapItem: {
    marginHorizontal: 40,
  },
  containSubTitle: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    marginBottom: 10,
    padding: 10,
  },
  subTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },
});

export default DetailScreen;
