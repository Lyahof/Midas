import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createNewOrder } from "../../services/apiOrder";

function useCreateOrder(){
 const {mutate: createOrder, isPending} = useMutation({
		mutationFn: (newOrder)=> createNewOrder(newOrder),

		onSuccess: () => toast.success("Ваш заказ принят и уже готовится! Вы можете видеть статус Вашего заказа в ЛК!"),
		onError: (err) => toast.error(err.message),
 })

 return {createOrder, isPending}
}

export default useCreateOrder;