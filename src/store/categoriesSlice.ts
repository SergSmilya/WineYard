import { createSlice } from "@reduxjs/toolkit";

const initialCategories = [
  { id: 1, name: "red meat" },
  { id: 2, name: "poultry meat" },
  { id: 3, name: "cheese" },
  { id: 4, name: "fish & seafood" }
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: initialCategories,
    activeCategory: 1
  },
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    }
  }
});

export const { setActiveCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
