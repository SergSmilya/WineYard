import { createSlice } from '@reduxjs/toolkit';
import giftBoxes from '../../arrayForNeeds/giftBoxes.json';

export const giftBoxItemSlice = createSlice({
    name: 'giftBoxItem',
    initialState: {
        data: {}
    },
    reducers: {
        getGiftBoxItem: (state, { payload }) => {
            giftBoxes.forEach(item => {
                if (item.id === payload) {
                    state.data = item;
                }
            });
        } 
    }
})

export const { getGiftBoxItem } = giftBoxItemSlice.actions;

export default giftBoxItemSlice.reducer;