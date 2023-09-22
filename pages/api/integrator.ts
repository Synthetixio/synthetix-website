import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { IntegratorsVolumeResponse } from 'src/typings';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 3600 });

const INTEGRATORS_VOLUME_URL =
	'https://api.dune.com/api/v1/query/2647536/results';

const apiKey = process?.env?.NEXT_DUNE_API_KEY || '';

async function fetchDuneData() {
	try {
		const { data: integratorsData } =
			await axios.get<IntegratorsVolumeResponse>(INTEGRATORS_VOLUME_URL, {
				headers: { 'x-dune-api-key': apiKey },
			});

		const integratorsVolume = integratorsData.result.rows.sort((a, b) =>
			b.day > a.day ? 1 : -1,
		);

		// Get the integrator volume for the latest date
		// and sort by daily fee
		const integratorForLatestDate = integratorsVolume
			.filter(item => item.day === integratorsVolume[0].day)
			.sort((a, b) => (a.daily_fee > b.daily_fee ? -1 : 1))
			.map(item => item.tracking_code.split('\x00')[0]);

		return {
			integratorForLatestDate,
		};
	} catch (error) {
		console.log('Error fetching dune data', error);
		return {
			integratorForLatestDate: null,
		};
	}
}

export default async function handler(
	_req: NextApiRequest,
	res: NextApiResponse,
) {
	try {
		const cacheKey = 'integratorsVolume';
		const cachedData = cache.get(cacheKey);

		if (cachedData) {
			res.status(200).json({ result: cachedData });
			return;
		}

		const result = await fetchDuneData();
		cache.set(cacheKey, result, 3600);
		res.status(200).json({ result });
	} catch (err) {
		res.status(500).json({ error: 'failed to load data' });
	}
}
