import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { PnLVolumeResponse } from 'src/typings';
import { cache } from 'src/utils/cache';

const PNL_VOLUME_URL = 'https://api.dune.com/api/v1/query/2429954/results';

const apiKey = process?.env?.NEXT_DUNE_API_KEY || '';

async function fetchDuneData() {
	try {
		const { data: pnlData } = await axios.get<PnLVolumeResponse>(
			PNL_VOLUME_URL,
			{
				headers: { 'x-dune-api-key': apiKey },
			},
		);

		console.log('pnl data', pnlData.result.rows);

		return pnlData;
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
		const cacheKey = 'pnlVolume';
		const cachedData = cache.get(cacheKey);

		if (cachedData) {
			res.status(200).json({ result: cachedData });
			return;
		}

		const result = await fetchDuneData();
		cache.set(cacheKey, result, 10800); // Refresh cache every 3 hours
		res.status(200).json({ result });
	} catch (err) {
		res.status(500).json({ error: 'failed to load data' });
	}
}
