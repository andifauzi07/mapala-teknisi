export const api = async (token) => {
	const url = `https://graph.instagram.com/me/media?fields=id,username,media_url,caption&access_token=${token}`;
	const api = await fetch(url);
	const response = await api.json();
	const data = await response.data;
	return data;
};
