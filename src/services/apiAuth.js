import supabase from "./supabase";

export async function login(email){

	const { data, error } = await supabase.auth.signInWithOtp({
			email,
			options: {
				emailRedirectTo: 'https://midas-one.vercel.app/main',
			}, 
		})

	if(error) throw new Error(error.message)

	return data;
}

export async function getCurrentUser(){

	const { data: session } = await supabase.auth.getSession();
	if(!session.session) return null;

	const { data, error } = await supabase.auth.getUser();

	if(error) throw new Error(error.message)

	return data?.user;
}

export async function getUserProfile(userId){
	if (!userId) {
		throw new Error('User ID is required');
	}

	const { data, error } = await supabase
	.from('profiles')
	.select()
	.eq("userId", userId)
	.single()

	if (error) {
		/*PGRST116: 'The result contains 0 rows'*/
		if (error.code === 'PGRST116' ) {
			const { data: newProfile, error: createError } = await supabase
				.from('profiles')
				.insert({ userId })
				.single();
		
		if (createError) throw new Error(createError.message);
		
			return newProfile;
		}
		throw new Error(error.message);
	}

	return data;
}

export async function updateUserData(userData) {
	const userId = userData.userId;

	const { data, error } = await supabase
		.from('profiles')
		.update({
			email: userData?.email,
			name: userData?.name,
			phoneNumber: userData?.phoneNumber,
			street: userData?.street,
			house: userData?.house,
			apartmentNum: userData?.apartmentNum,
			entranceNum: userData?.entranceNum,
			floor: userData?.floor,
		})
		.eq("userId", userId)
		.select()
  
	if (error) {
		console.error("Error updating user data:", error);
		throw new Error(error.message)
	}	
	return data;
}
