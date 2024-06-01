import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../services/apiAuth";

export function useUserProfile(userId){
	const { data: userProfile, isLoading } = useQuery({
		queryKey: ["userProfile", userId],
		queryFn: () => getUserProfile(userId),
  
		enabled: !!userId,
	});

	return {userProfile, isLoading};
}