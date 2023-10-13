import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { cache } from 'src/utils/cache';

const MINT_BURN_URL = 'https://api.dune.com/api/v1/query/3059967/results';

const apiKey = process?.env?.NEXT_DUNE_API_KEY || '';

interface MintBurnResponse {
	result: {
		rows: MintBurn[];
	};
}

interface MintBurn {
	day: string;
	eth_burns: number;
	eth_mints: number;
	eth_snxUSD_supply: number;
	op_burns: number;
	op_mints: number;
	op_snxUSD_supply: number;
	token: string;
}

async function fetchDuneData() {
	try {
		const { data } = await axios.get<MintBurnResponse>(MINT_BURN_URL, {
			headers: { 'x-dune-api-key': apiKey },
		});

		return {
			mintburn: data.result.rows,
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
		const cacheKey = 'mintburn';
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
