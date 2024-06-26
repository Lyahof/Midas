import supabase from "./supabase";

export async function GetMainMeal(){
	const { data, error } = await supabase
		.from('Menu')
		.select('*')
		.eq("main", true)

	if(error)
		throw new Error('Ошибка при запросе данных с сервера')

	return data;
}

export async function GetPopularMenu(){
	const { data: popularMenu, error } = await supabase
		.from('Menu')
		.select("*")
		.eq("Popular", true)

	if(error)
		throw new Error('Ошибка при запросе данных с сервера')

	return popularMenu;
}

export async function GetMenuItems(category){
	const { data: menu, error } = await supabase
		.from('Menu')
		.select("*")
		.eq("foodCategory", category)

	if(error)
		throw new Error('Ошибка при запросе данных с сервера')

	return menu;
}

export async function GetMenuItem(id) {
	const { data: itemData, error } = await supabase
		.from("Menu")
		.select("*")
		.eq("id", id)
		.single()

	const { data: bestsellerData, err } = await supabase
		.from("Menu")
		.select("*")
		.eq("bestseller", true)
 
	if (error || err) throw new Error("Ошибка при запросе данных с сервера");
  
	return {itemData, bestsellerData};
 }

 export async function GetPromotions(){
	const { data, error } = await supabase
		.from('Menu')
		.select("*")
		.gte("oldPrice", 1)

	if(error)
		throw new Error('Ошибка при запросе данных с сервера')

	return data;
}