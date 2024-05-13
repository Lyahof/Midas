import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	cart: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			state.cart.push(action.payload);
		},
		deleteItem(state, action) {
			state.cart = state.cart.filter((item)=>item.foodId !== action.payload);
		},
		increaseItemQuantity(state, action) {
			const item = state.cart.find((i)=>i.foodId === action.payload);
			item.quantity++;
			item.totalPrice = item.quantity * item.foodPrice;
		},
		decreaseItemQuantity(state, action) {
			const item = state.cart.find((i)=>i.foodId === action.payload);
			item.quantity--;
			item.totalPrice = item.quantity * item.foodPrice;
		},
		clearCart(state) {
			state.cart = [];
		},
	}
})

export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions;

export default cartSlice.reducer;