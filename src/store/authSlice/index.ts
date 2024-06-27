import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IPhoneNumberInfo, IUserInfo } from '../../types/userData';

const initialState = {
    data: '' as string,
    commonData: {} as IUserInfo | IPhoneNumberInfo
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addData: (state, { payload }) => {
            state.commonData = payload;
            if (payload.number) {
                state.data = payload.number;
                toast.success(`You autorizied with ${payload.number}`);
                return;
            }
            state.data = payload.name;
            toast.success(`You autorizied as ${payload.name}`);
        }, 
        clearData: () => {
            toast.success('You LogOuted');
            return initialState;
        } 
    }
})

export const { addData, clearData } = authSlice.actions;

export default authSlice.reducer;