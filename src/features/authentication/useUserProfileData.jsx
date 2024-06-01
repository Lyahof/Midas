import { useEffect } from "react";
import { useUser } from "./useUser";
import { useUserProfile } from "./useUserProfile";

export function useUserProfileData(setValue) {
  const { user } = useUser();
  const userId = user?.id;
  const { userProfile, isLoading } = useUserProfile(userId);

  useEffect(() => {
    if (user) {
      setValue("userId", user.id || "");
      setValue("email", user.email || "");
      setValue("name", userProfile?.name || "");
      setValue("phoneNumber", userProfile?.phoneNumber || "");
      setValue("street", userProfile?.street || "");
      setValue("house", userProfile?.house || "");
      setValue("apartmentNum", userProfile?.apartmentNum || "");
      setValue("entranceNum", userProfile?.entranceNum || "");
      setValue("floor", userProfile?.floor || "");
    }
  }, [user, setValue, userProfile]);

  return { user, userProfile, isLoading };
}
