import { createContext, useState } from "react";

export const FavoriteContext = createContext();

function FavoriteProvider({ children }) {
  const [listFavId, setListFavId] = useState([]);

  const addFavoriteMeal = (id) => {
    setListFavId((prevListMeal) => [...prevListMeal, id]);
  };
  const removeFavoriteMeal = (id) => {
    setListFavId((prevListMeal) =>
      prevListMeal.filter((mealId) => mealId !== id)
    );
  };
  return (
    <FavoriteContext.Provider
      value={{ listFavId, addFavoriteMeal, removeFavoriteMeal }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteProvider;
