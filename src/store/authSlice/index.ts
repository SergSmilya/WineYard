import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        data: '' as string
    },
    reducers: {
        addData: (state, { payload }) => {
            if (payload.number) {
                state.data = payload.number;
                toast.success(`You autorizied with ${payload.number}`);
                return;
            }
            state.data = payload.name;
            toast.success(`You autorizied as ${payload.name}`);
        }, 
        clearData: (state) => {
            state.data = '';
            toast.success('You LogOuted');
        } 
    }
})

export const { addData, clearData } = authSlice.actions;

export default authSlice.reducer;