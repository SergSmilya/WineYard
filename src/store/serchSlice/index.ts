import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  searchText: '',
};

const searchSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
  },
});

export const { setSearchText } = searchSlice.actions;

export default searchSlice.reducer;
