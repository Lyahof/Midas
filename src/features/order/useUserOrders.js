import { useQuery } from "@tanstack/react-query";
import { getUserOrders } from "../../services/apiOrder";

function useUserOrders(userId){
	const {data: userOrders, isLoading: isReceivingOrders} = useQuery({
		queryKey: ["userOrders", userId],
		queryFn: ()=> getUserOrders(userId)
	})
	return {userOrders, isReceivingOrders}
}
export default useUserOrders;