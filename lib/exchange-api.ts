const axios = require('axios').default;
const exchangeApiRequest = axios.create({
	baseURL: 'https://exchange.api.synthetix.io/api',
});

export const fetchTotalLocked = async (): Promise<number> => {
	let totalLocked = 0;
	try {
		const response = await exchangeApiRequest.get('/total-locked');
		totalLocked = response.data?.totalLocked;
	} catch (e) {
		console.log(e);
	}
	return totalLocked;
};
