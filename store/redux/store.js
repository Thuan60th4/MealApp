import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favorite";

const store = configureStore({
  reducer: {
    favoritesMeals: favoriteSlice,
  },
});

export default store;
