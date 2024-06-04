import supabase from "./supabase";

export async function createNewOrder(newOrder){
	const {data, error} = await supabase
		.from('orders')
		.insert([newOrder])
		.select()

	if(error) throw new Error("Ошибка при размещении заказа", error)

	return data;
}

export async function getUserOrders(userId){
	const {data, error} = await supabase
		.from('orders')
		.select("*")
		.eq("userId", userId)

	if(error) throw new Error("Ошибка при размещении заказа", error)

	return data || [];
}