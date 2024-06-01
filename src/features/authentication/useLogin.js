import { useMutation } from "@tanstack/react-query"
import { login } from "../../services/apiAuth"
import toast from "react-hot-toast";

function useLogin() {

	const {mutate, isPending, isSuccess} = useMutation({
		mutationFn: (email) => login(email),
		onSuccess:()=>{
			toast.success("На вашу почту направлено письмо для создания ЛК! Пройдите по ссылке в письме для активации");
		},
		onError: (error)=>{
			toast.error("Произошла ошибка при отправке письма для создания ЛК. Повторите попытку через 60 секунд");
			console.log("error",error)
		}
	})
	return {mutate, isPending, isSuccess}
}

export default useLogin;
