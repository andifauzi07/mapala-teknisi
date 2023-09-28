export const api = async () => {
	const accesToken = process.env.REACT_APP_ACCES_TOKEN;
	const url = `https://graph.instagram.com/me/media?fields=id,username,media_url,caption&access_token=${accesToken}`;
	const api = await fetch(url);
	const response = await api.json();
	const data = await response.data;
	return data;
};
