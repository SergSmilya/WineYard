import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Wine } from "../types/wine";

interface WineState {
  wines: Wine[];
  wineCount: number;
  nextPage: string | null;
  loading: boolean;
}

const initialState: WineState = {
  wines: [],
  wineCount: 0,
  nextPage: null,
  loading: false,
};

// Створюємо slice для керування стейтом вин
export const winesSlice = createSlice({
  name: 'wines',
  initialState,
  reducers : {
    setWines: (state, action: PayloadAction<Wine[]>) => {
      state.wines = action.payload;
    },
    addNewWines: (state, action: PayloadAction<Wine[]>) => {
      state.wines.push(...action.payload);
    },
    setWineCount: (state, action: PayloadAction<number>) => {
      state.wineCount = action.payload;
    },
    setNextPage: (state, action: PayloadAction<string | null>) => {
      state.nextPage = action.payload;
    },
  }
});
// Експортуємо екшени зі slice
export const { setWines, addNewWines, setWineCount, setNextPage } = winesSlice.actions;

// Створюємо селектор для отримання списку вин, кількості, наступної ст. зі стейту
export const selectWines = (state: any) => state.wines.wines;
export const selectWineCount = (state: any) => state.wines.wineCount;
export const selectWineNextPage = (state: any) => state.wines.nextPage;

export default winesSlice.reducer;
