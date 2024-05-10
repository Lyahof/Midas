import supabase from "./supabase";

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

export async function GetMenuItem(id){
	const { data, error } = await supabase
		.from('Menu')
		.select("*")
		.eq("id", id)
		.single()

	if(error)
		throw new Error('Ошибка при запросе данных с сервера')

	return data;
}