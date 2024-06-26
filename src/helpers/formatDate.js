function formatDate(dateString) {
	const date = new Date(dateString);
	return date.toLocaleString("ru-RU", {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	});
 }

 export default formatDate;