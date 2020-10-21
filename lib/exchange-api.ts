const axios = require('axios').default;
const exchangeApiRequest = axios.create({
	baseURL: 'https://exchange.api.synthetix.io/api',
});

export const ExchangeApiFetcher = (url: string) =>
	exchangeApiRequest.get(url).then((res: any) => res.data);

export const fetchTotalLocked = async (): Promise<number> => {
	const response = await exchangeApiRequest.get('/total-locked');

	return response.data?.totalLocked;
};
