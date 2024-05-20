import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	cart: [],
	promocode: '',
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const item = state.cart.find((i)=>i.foodId === action.payload.foodId)
			if(item){
				item.quantity++
				item.totalPrice = item.quantity * item.foodPrice
			}
			else{
				state.cart.push(action.payload);
			}
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
			if(item.quantity === 1) return;
			item.quantity--;
			item.totalPrice = item.quantity * item.foodPrice;
		},
		applyPromocode(state, action){
			state.promocode = action.payload;
		},
		clearCart(state) {
			state.cart = [];
		},
	}
})

export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart, applyPromocode} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;

export const getPromocode = (state) => state.cart.promocode;

export const getTotalCartQuantity = (state) =>
   state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
   state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
	(state.cart.cart.find(item => item.foodId === id)?.quantity) || 0;
		

export default cartSlice.reducer;