import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { cache } from 'src/utils/cache';

const TVL_BY_LAYER_URL = 'https://api.dune.com/api/v1/query/3060865/results';
const TVL_PROTOCOLS_URL = 'https://api.dune.com/api/v1/query/3051552/results';

const apiKey = process?.env?.NEXT_DUNE_API_KEY || '';

interface TVLLayerResponse {
	result: {
		rows: TVLByLayer[];
	};
}

interface TVLProtocolResponse {
	result: {
		rows: TVLProtocol[];
	};
}

interface TVLByLayer {
	day: string;
	eth_SNX: number;
	op_SNX: number;
}

interface TVLProtocol {
	bal: number;
	bal_usd: number;
	blockchain: string;
	day: string;
	layer_usd: number;
	token: string;
	total_token: number;
	total_token_usd: number;
	total_usd: number;
}

async function fetchDuneData() {
	try {
		const [{ data: tvlByLayer }, { data: tvlByProtocol }] = await Promise.all([
			axios.get<TVLLayerResponse>(TVL_BY_LAYER_URL, {
				headers: { 'x-dune-api-key': apiKey },
			}),
			axios.get<TVLProtocolResponse>(TVL_PROTOCOLS_URL, {
				headers: { 'x-dune-api-key': apiKey },
			}),
		]);

		return {
			tvlByLayer: tvlByLayer?.result.rows,
			tvlByProtocol: tvlByProtocol?.result.rows,
		};
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
		const cacheKey = 'tvl';
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
