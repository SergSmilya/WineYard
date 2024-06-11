import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import giftBoxes from '../../arrayForNeeds/giftBoxes.json';
import { IGiftCardItemComp } from '../../components/GiftCardItemComp';

const MAXQUANTITY = 10;

export const cartOrderedSlice = createSlice({
    name: 'cartOrdered',
    initialState: [] as any[],
    reducers:  {
        addWine: (state, { payload }) => {
            for (const item of state) {
                if (item.id === payload.id && item.goods_quantity) {
                    item.goods_quantity = item.goods_quantity + 1;
                    toast.info(`${payload.goods_name} have already added, quantity: ${item.goods_quantity}`);
                    return;
                }
            }
            state.push({ ...payload, goods_quantity: 1 });
            toast.success(`${payload.goods_name} added to cart`);
        },
        deleteWine: (state, { payload }) => {
            return state.filter(({id}) => id !== payload)
        },
        increaseQuantity: (state, { payload }) => {
            for (const item of state) {
                if (item.goods_quantity === MAXQUANTITY) {
                    toast.warn(`For order more than ${item.goods_quantity} contact with manager, please`);
                    return;
                }
                if (item.id === payload) {
                    item.goods_quantity = item.goods_quantity + 1;
                }
            }
        },
        decreaseQuantity: (state, { payload }) => {
            state.forEach((item, index) => {
                if (item.id === payload) {
                    item.goods_quantity = item.goods_quantity - 1;
                    if (item.goods_quantity <= 0) {
                        state.splice(index, 1);
                    }
                }
            })
        },
        addGiftBox: (state, { payload }) => {   
            let giftBox = <IGiftCardItemComp>{};

            for (const item of giftBoxes) {
                if (item.id === payload) {
                    giftBox = item;
                    break;
                }
            }

            if (state.find(el => el.giftBox_name === giftBox.giftBox_name)) {
                toast.info(`${giftBox.giftBox_name} have already added`);
                return;
            }

            state.push(giftBox);
            toast.success(`${giftBox.giftBox_name} added to cart`);
        },
    }
})

export const { addWine, deleteWine, increaseQuantity, decreaseQuantity, addGiftBox } = cartOrderedSlice.actions

export default cartOrderedSlice.reducer