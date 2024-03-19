import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DishWinesState {
  redMeat: object;
  cheese: object;
  fishAndSeafood: object;
  poultryMeat: object;
}

const initialState: DishWinesState = {
  redMeat: {},
  cheese: {},
  fishAndSeafood: {},
  poultryMeat: {},
};


export const dishWinesSlice = createSlice({
  name: 'dishWines',
  initialState,
  reducers: {
    setRedMeatWines: (state, action: PayloadAction<object>) => {
      state.redMeat = action.payload;
    },
    setCheeseWines: (state, action: PayloadAction<object>) => {
      state.cheese = action.payload;
    },
    setFishAndSeafoodWines: (state, action: PayloadAction<object>) => {
      state.fishAndSeafood = action.payload;
    },
    setPoultryMeatWines: (state, action: PayloadAction<object>) => {
      state.poultryMeat = action.payload;
    },
  }
});

export const {
  setRedMeatWines,
  setCheeseWines,
  setFishAndSeafoodWines,
  setPoultryMeatWines,
} = dishWinesSlice.actions;

export const selectRedMeatWines = (state: any) => state.dishWines.redMeat;
export const selectCheeseWines = (state: any) => state.dishWines.cheese;
export const selectFishAndSeafoodWines = (state: any) => state.dishWines.fishAndSeafood;
export const selectPoultryMeatWines = (state: any) => state.dishWines.poultryMeat;

export default dishWinesSlice.reducer;
