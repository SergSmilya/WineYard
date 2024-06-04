import { createSlice } from '@reduxjs/toolkit';

const lastSeenSlice = createSlice({
    name: 'lastSeen',
    initialState: [] as any[],
    reducers: {
        addItem(state, { payload }) {
            if (state.length === 0) {
                state.push({ ...payload, dateAt: new Date()});
                return;
            }
            if (state.find(el => el.id === payload.id)) {
                return;
            }
            if (state.length > 4) {
                state.forEach(el => {
                    console.log(el.dateAT);
                })
            }
            state.push({ ...payload, dateAt: new Date()});
        }
    },
})

export const { addItem } = lastSeenSlice.actions;

export default lastSeenSlice.reducer;