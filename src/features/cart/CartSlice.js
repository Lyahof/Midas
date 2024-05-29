import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	cart: [],
	enteredPromocode: '',
	updatedTotalPrice: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const item = state.cart.find((i)=>i.foodId === action.payload.foodId)
			if(item){
				item.quantity = item.quantity + action.payload.quantity;
				item.totalPrice = item.quantity * item.foodPrice;
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
		applyPromocode(state, action) {
			const totalCartPrice = state.cart.reduce((sum, item) => sum + item.totalPrice, 0);
			const discountAmount = (totalCartPrice * action.payload) / 100;
			state.updatedTotalPrice = totalCartPrice - discountAmount;
		},
		setPromocode(state, action){
			state.enteredPromocode = action.payload;
		},
		clearCart(state) {
			state.cart = [];
			state.updatedTotalPrice = 0;
			state.enteredPromocode = '';
		},
	}
})

export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart, applyPromocode, setPromocode} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;

export const getPromocode = (state) => state.cart.enteredPromocode;


export const getTotalCartQuantity = (state) =>
state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getUpdatedTotalPrice = (state) => state.cart.updatedTotalPrice;

export const getCurrentQuantityById = (id) => (state) =>
	(state.cart.cart.find(item => item.foodId === id)?.quantity) || 0;
		

export default cartSlice.reducer;