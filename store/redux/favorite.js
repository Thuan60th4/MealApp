import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavoriteMeal: (state, action) => {
      state.ids.push(action.payload);
      return state;
    },
    // addFavoriteMeal: (state, action) => state.ids.push(action.payload.id), nếu truyền vào payload 1 object thì cần . id

    removeFavoriteMeal: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload), 1);
      return state;
    },
  },
});

export const { addFavoriteMeal, removeFavoriteMeal } = favoriteSlice.actions;
export default favoriteSlice.reducer;
