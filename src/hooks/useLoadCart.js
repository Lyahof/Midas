import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../services/apiAuth";
import { loadCart } from "../features/cart/CartSlice";

function useLoadCart(){
	const dispatch = useDispatch();
	const [user, setUser] = useState(null);
	const cartLoaded = useSelector((state) => state.cart.cartLoaded);

	useEffect(function () {
		async function fetchUser() {
			try {
				const currentUser = await getCurrentUser();
				setUser(currentUser);
			}	catch (error) {
				console.error("Error fetching user:", error);
			}
		}
		fetchUser();
  }, []);

	useEffect(
		function () {
			if (!cartLoaded && user) {
				dispatch(loadCart(user?.id));
			}
		},
	[dispatch, cartLoaded, user]);
}

export default useLoadCart;