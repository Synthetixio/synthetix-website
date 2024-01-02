import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { cache } from 'src/utils/cache';

const DELEGATION_URL = 'https://api.dune.com/api/v1/query/3060540/results';

const apiKey = process?.env?.NEXT_DUNE_API_KEY || '';

interface DelegationResponse {
	result: {
		rows: Delegation[];
	};
}

interface Delegation {
	ID: string;
	blockchain: string;
	cumDelegation: number;
	currentName: string;
	daily_delegations: number;
	daily_delegations_USD: number;
	day: string;
	poolId: string;
	token: string;
	tokenPrice: number;
}

async function fetchDuneData() {
	try {
		const { data } = await axios.get<DelegationResponse>(DELEGATION_URL, {
			headers: { 'x-dune-api-key': apiKey },
		});

		return {
			delegation: data.result.rows,
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
		const cacheKey = 'delegation';
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
