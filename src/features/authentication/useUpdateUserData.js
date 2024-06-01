import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast";
import { updateUserData } from "../../services/apiAuth";

function useUpdateUserData() {

	const { mutate: updateData, isPending } = useMutation({
		mutationFn: (data) => updateUserData(data),
		onSuccess: () => {
			toast.success("Ваши данные сохранены");
		},
		onError: (error)=>{
			toast.error("Произошла ошибка при сохранении данных");
			console.log("error",error)
		}
	})

	return {updateData, isPending}
}

export default useUpdateUserData;