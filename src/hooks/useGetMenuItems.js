import { useQuery } from "@tanstack/react-query";
import { GetMenuItems } from "../services/APIMenu";

function useGetMenuItems(menuCategory) {
	const { isLoading, data: menu } = useQuery({
		queryKey: ["menuItems", menuCategory],
		queryFn: () => GetMenuItems(menuCategory),
	});

	return {isLoading, menu };
}

export default useGetMenuItems;
