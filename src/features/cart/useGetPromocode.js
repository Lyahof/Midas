import { useQuery } from "@tanstack/react-query";
import { getPromocode } from "../../services/APIPromocode";

function useGetPromocode(){
	const {isLoading, data} = useQuery({
		queryKey: ["promocode"],
		queryFn: getPromocode,
	});

	return {isLoading, data};
}

export default useGetPromocode;