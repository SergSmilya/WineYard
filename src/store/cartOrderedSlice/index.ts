import { createSlice } from "@reduxjs/toolkit";

export const cartOrderedSlice = createSlice({
    name: 'cartOrdered',
    initialState: [] as any[],
    reducers:  {
        addWine: (state, { payload }) => {
            state.push(payload);
        },
        deleteWine: (state, { payload }) => {
            return state.filter(({id}) => id !== payload)
        }
    }
})

export const { addWine, deleteWine } = cartOrderedSlice.actions

export default cartOrderedSlice.reducer