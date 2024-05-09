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