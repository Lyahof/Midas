import supabase from "./supabase";

export async function getPromocode() {
	const { data, error } = await supabase
		.from("promocodes")
		.select("*")
		.single()
 
	if (error) throw new Error("Ошибка при запросе данных с сервера");
 
	return data;
 }