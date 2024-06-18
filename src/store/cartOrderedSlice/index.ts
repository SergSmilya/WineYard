import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { MAXQUANTITY } from "../../CONST/baseConst";

export const cartOrderedSlice = createSlice({
    name: 'cartOrdered',
    initialState: [] as any[],
    reducers:  {
        addWine: (state, { payload }) => {
            for (const item of state) {
                if (item.id === payload.id && item.goods_quantityOrder && item.goods_quantityOrder < MAXQUANTITY) {
                    item.goods_quantityOrder = item.goods_quantityOrder + 1;
                    toast.info(`${payload.goods_name} have already added, quantity: ${item.goods_quantityOrder}`);
                    return;
                }
                if (item.id === payload.id && item.goods_quantityOrder === MAXQUANTITY) {
                    toast.warn(`For order more than ${MAXQUANTITY} contact with manager, please`);
                    return;
                }
            }
            state.push({ ...payload, goods_quantityOrder: 1 });
            toast.success(`${payload.goods_name} added to cart`);
        },
        deleteWine: (state, { payload }) => {
            return state.filter(({ id }) => id !== payload)
        },
        increaseQuantity: (state, { payload }) => {
            for (const item of state) {
                if (item.id === payload && item.goods_quantityOrder === MAXQUANTITY) {
                    toast.warn(`For order more than ${MAXQUANTITY} contact with manager, please`);
                    return;
                }
                if (item.id === payload && item.goods_quantityOrder) {
                    item.goods_quantityOrder = item.goods_quantityOrder + 1;

                }
                if (item.id === payload && item.giftBox_quantityOrder === MAXQUANTITY) {
                    toast.warn(`For order more than ${MAXQUANTITY} contact with manager, please`);
                    return;
                }
                if (item.id === payload && item.giftBox_quantityOrder) {
                    item.giftBox_quantityOrder = item.giftBox_quantityOrder + 1;
                }
            }

        },
        decreaseQuantity: (state, { payload }) => {
            state.forEach((item, index) => {
                if (item.id === payload && item.goods_quantityOrder) {
                    item.goods_quantityOrder = item.goods_quantityOrder - 1;
                    if (item.goods_quantityOrder <= 0) {
                        state.splice(index, 1);
                        toast.info(`Wine ${item.goods_name} was deleted`);
                    }
                }
                if (item.id === payload && item.giftBox_quantityOrder) {
                    item.giftBox_quantityOrder = item.giftBox_quantityOrder - 1;
                    if (item.giftBox_quantityOrder <= 0) {
                        state.splice(index, 1);
                        toast.info(`Wine ${item.giftBox_name} was deleted`);
                    }
                }
            })
        },
        addGiftBox: (state, { payload }) => {  
            for (const item of state) {
                if (item.id === payload.id && item.giftBox_quantityOrder && item.giftBox_quantityOrder < MAXQUANTITY) {
                    item.giftBox_quantityOrder = item.giftBox_quantityOrder + 1;
                    toast.info(`${payload.giftBox_name} have already added, quantity: ${item.giftBox_quantityOrder}`);
                    return;
                }
                if (item.id === payload.id && item.giftBox_quantityOrder === MAXQUANTITY) {
                    toast.warn(`For order more than ${item.giftBox_name} contact with manager, please`);
                    return;
                }
            }
            state.push({ ...payload, giftBox_quantityOrder: 1 });
            toast.success(`${payload.giftBox_name} added to cart`);
        },
    }
})

export const { addWine, deleteWine, increaseQuantity, decreaseQuantity, addGiftBox } = cartOrderedSlice.actions

export default cartOrderedSlice.reducer