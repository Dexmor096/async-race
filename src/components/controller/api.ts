
const baseUrl = 'http://127.0.0.1:3000';
const path = {

}
// export const load  = async (path: string): Promise<Response> => {
// 	const response = await fetch(`${baseUrl}${path}`);
// 	return response;
// }
export const getBeers = async () => {
	const response = await fetch(`${baseUrl}/garage`);
	const data = await response.json();
	return data;
}