import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isVerify: true,
}

export const adultSlice = createSlice({
    name: 'verify',
    initialState,
    reducers: {
        approve: (state) => {
            state.isVerify = false;
        },
        changeState: (state) => {
            state.isVerify = true;
        }
    }
})

export const { approve, changeState } = adultSlice.actions

export default adultSlice.reducer