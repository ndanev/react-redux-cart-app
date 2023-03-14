import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemtoCart(state, action) {
            const newItem = action.payload
            const existingitem = state.items.find(item => item.id === newItem.id)
            if (!existingitem) {
                state.items.push({
                    itemId: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                })
            } else {
                existingitem.quantity++
                existingitem.totalPrice = existingitem.totalPrice + newItem.price
            }
        },
        removeItemFromCart() { }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;