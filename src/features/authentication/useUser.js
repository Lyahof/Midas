import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser(){
	const {data: user, isoLoading} = useQuery({
		queryKey: ['user'],
		queryFn: getCurrentUser,
	})

	return {user, isoLoading, isAuthenticated: user?.role === "authenticated"}
}