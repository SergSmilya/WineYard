import { createSlice } from '@reduxjs/toolkit';

const lastSeenSlice = createSlice({
    name: 'lastSeen',
    initialState: [] as any[],
    reducers: {
        addItem(state, { payload }) {
            if (state.length === 0) {
                state.unshift({ ...payload, dateAt: new Date().toString()});
                return;
            }
            if (state.find(el => el.id === payload.id)) {
                return;
            }
            if (state.length === 4) {
                const oldestIndex = state.reduce((minIndex, item, index, arr) => {
                    return Date.parse(item.dateAt) < Date.parse(arr[minIndex].dateAt) ? index : minIndex;
                }, 0);

                state.splice(oldestIndex, 1);
                
                state.unshift({ ...payload, dateAt: new Date().toString() });
                return;
            }
            state.unshift({ ...payload, dateAt: new Date().toString()});
        }
    },
})

export const { addItem } = lastSeenSlice.actions;

export default lastSeenSlice.reducer;