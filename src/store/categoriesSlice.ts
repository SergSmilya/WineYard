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
    activeCategory: null
  },
  reducers: {
    setActiveCategory(state, action) {
      const clickedCategoryId = action.payload;
      if (state.activeCategory === clickedCategoryId) {
        // Якщо поточна активна категорія збігається з категорією, на яку клікнули, не змінюємо стан
        return;
      }
      state.activeCategory = clickedCategoryId;
    }
  }
});

export const { setActiveCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
