// actions.js 
export const addToCart = (item) => ({ 
	type: 'ADD_TO_CART', 
	payload: item, 
 }); 
  
 export const removeFromCart = (itemId) => ({ 
	type: 'REMOVE_FROM_CART', 
	payload: itemId, 
 }); 
  
 export const applyPromoCode = (code) => ({ 
	type: 'APPLY_PROMO_CODE', 
	payload: code, 
 }); 
  
 export const checkout = () => ({ 
	type: 'CHECKOUT', 
 }); 
  
 // reducers.js 
 const initialState = { 
	products: [...], // список товаров 
	cart: [], // корзина покупок 
	promoCode: '', // активный промокод 
	checkoutCompleted: false, // флаг завершения оформления заказа 
 }; 
  
 const rootReducer = (state = initialState, action) => { 
	switch (action.type) { 
	  case 'ADD_TO_CART': 
		 return { 
			...state, 
			cart: [...state.cart, action.payload], 
		 }; 
	  case 'REMOVE_FROM_CART': 
		 return { 
			...state, 
			cart: state.cart.filter(item => item.id !== action.payload), 
		 }; 
	  case 'APPLY_PROMO_CODE': 
		 return { 
			...state, 
			promoCode: action.payload, 
		 }; 
	  case 'CHECKOUT': 
		 return { 
			...state, 
			cart: [], 
			promoCode: '', 
			checkoutCompleted: true, 
		 }; 
	  default: 
		 return state; 
	} 
 }; 
  
 export default rootReducer; 
  
 // App.js 
 import React from 'react'; 
 import { useSelector, useDispatch } from 'react-redux'; 
 import { addToCart, removeFromCart, applyPromoCode, checkout } from './actions'; 
  
 const App = () => { 
	const products = useSelector(state => state.products); 
	const cart = useSelector(state => state.cart); 
	const promoCode = useSelector(state => state.promoCode); 
	const checkoutCompleted = useSelector(state => state.checkoutCompleted); 
	const dispatch = useDispatch(); 
  
	const handleAddToCart = (item) => { 
	  dispatch(addToCart(item)); 
	}; 
  
	const handleRemoveFromCart = (itemId) => { 
	  dispatch(removeFromCart(itemId)); 
	}; 
  
	const handleApplyPromoCode = (code) => { 
	  dispatch(applyPromoCode(code)); 
	}; 
  
	const handleCheckout = () => { 
	  dispatch(checkout()); 
	}; 
  
	return ( 
	  <div> 
		 {/* Отображение товаров */} 
		 {products.map(product => ( 
			<div key={product.id}> 
			  <h3>{product.name}</h3> 
			  <p>{product.description}</p> 
			  <button onClick={() => handleAddToCart(product)}>Add to Cart</button> 
			</div> 
		 ))} 
		  
		 {/* Отображение корзины */} 
		 <div> 
			<h3>Cart</h3> 
			{cart.map(item => ( 
			  <div key={item.id}> 
				 <p>{item.name}</p> 
				 <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button> 
			  </div> 
			))} 
		 </div> 
  
		 {/* Форма для промокода */} 
		 <div> 
			<input type="text" value={promoCode} onChange={(e) => handleApplyPromoCode(e.target.value)} /> 
			<button onClick={handleCheckout}>Apply Promo Code</button> 
		 </div> 
  
		 {/* Кнопка оформления заказа */} 
		 {cart.length > 0 && <button onClick={handleCheckout}>Checkout</button>} 
	  </div> 
	); 
 }; 
  
 export default App;