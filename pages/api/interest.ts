import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { InterestVolumeResponse } from 'src/typings';
import { cache } from 'src/utils/cache';

const INTEREST_VOLUME_URL = 'https://api.dune.com/api/v1/query/2648712/results';

const apiKey = process?.env?.NEXT_DUNE_API_KEY || '';

async function fetchDuneData() {
	try {
		const { data: interestData } = await axios.get<InterestVolumeResponse>(
			INTEREST_VOLUME_URL,
			{
				headers: { 'x-dune-api-key': apiKey },
			},
		);

		return interestData;
	} catch (error) {
		console.log('Error fetching dune data', error);
		return {
			result: null,
		};
	}
}

export default async function handler(
	_req: NextApiRequest,
	res: NextApiResponse,
) {
	try {
		const cacheKey = 'interestVolume';
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
