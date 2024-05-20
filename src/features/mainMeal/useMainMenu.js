import { useQuery } from "@tanstack/react-query";
import { GetMainMeal } from "../../services/APIMenu";


export function useMainMenu() {
	const { isLoading, data } = useQuery({
		queryKey: ["main-meal"],
		queryFn: GetMainMeal,
	});

	return {isLoading, data};
}

