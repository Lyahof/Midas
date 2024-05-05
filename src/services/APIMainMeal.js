import supabase from "./supabase";

export async function GetMainMeal(){
	const { data, error } = await supabase
		.from('MainMeal')
		.select('*')

	if(error)
		throw new Error('Ошибка при запросе данных с сервера')

	return data;
}