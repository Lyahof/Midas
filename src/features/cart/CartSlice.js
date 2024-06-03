import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import supabase from "../../services/supabase";

export const loadCart = createAsyncThunk("cart/loadCart", async function(userId){
	const { data, error } = await supabase
		.from("cart")
		.select("*")
		.eq("userId", userId)
		.eq("status", "active")
		.single();

  if (error) throw new Error(error.message);

  return data.cartItems || [];
});

 export const saveCart = createAsyncThunk("cart/saveCart", async function ({ userId, cart }) {
	const { data: user, error: userError } = await supabase
		.from("cart")
		.select('*')
		.eq("userId", userId)
		if (userError) throw new Error(userError.message);

		if (user.length === 0) {
			const { data, error } = await supabase
			.from("cart")
			.insert({ userId, cartItems: cart, status: "active" })
			.select()
			if (error) throw new Error(error.message);
			return data;
		}

		if (user.length > 0) {
			const { data, error } = await supabase
			.from("cart")
			.update({ cartItems: cart, status: "active" })
			.eq("userId", userId)
			.select()
			if (error) throw new Error(error.message);
			return data;
		}
 }); 

 export const clearSavedCart = createAsyncThunk("cart/clearSavedCart", async function (userId)  {
	const { data, error } = await supabase
		.from("cart")
		.update({ status: "done" })
		.eq("userId", userId)
		.eq("status", "active");

	if (error) throw new Error(error.message);

	return data;
 });

const initialState = {
	cart: [],
	enteredPromocode: '',
	updatedTotalPrice: 0,
	status: "idle",
	error: null,
	cartLoaded: false,
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
	},
	extraReducers: (builder) => 
		builder
			.addCase(loadCart.pending, (state) => {
				state.status = "loading";
			})
			.addCase(loadCart.fulfilled, (state, action) => {
				state.status = "succeded";
				state.cart = action.payload;
				state.cartLoaded = true;
			})
			.addCase(loadCart.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
				state.cartLoaded = true;
			})
			.addCase(saveCart.fulfilled, (state) => {
				state.status = "succeded";
			})
			.addCase(saveCart.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(clearSavedCart.fulfilled, (state) => {
				state.cart = [];
			})
})

export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart, applyPromocode, setPromocode} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;

export const getPromocode = (state) => state.cart.enteredPromocode;


export const getTotalCartQuantity = (state) =>
state?.cart?.cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

export const getTotalCartPrice = (state) =>
state?.cart?.cart?.reduce((sum, item) => sum + item.totalPrice, 0) || 0;

export const getUpdatedTotalPrice = (state) => state.cart.updatedTotalPrice;

export const getCurrentQuantityById = (id) => (state) =>
	(state?.cart?.cart?.find(item => item.foodId === id)?.quantity) || 0;
		

export default cartSlice.reducer;