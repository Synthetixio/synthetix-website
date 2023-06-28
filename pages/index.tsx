import Head from 'next/head';
import { GetServerSideProps } from 'next';
import {
	Hero,
	Volume,
	Ecosystem,
	Integrators,
	Interested,
	Collateral,
	Stats,
	Interfaces,
	Staking,
	Perps,
	AggregatedStats,
	Governance,
	Partners,
} from 'src/sections/home';

import { PageLayout } from 'src/components';
import axios from 'axios';

import getSnxPrice from '../src/queries/snxPrice/snxPrice';

export interface ApiStatsProps {
	totalStakedValue?: number;
}

const Home = ({ totalStakedValue }: ApiStatsProps) => {
	return (
		<>
			<Head>
				<title>Synthetix</title>
			</Head>
			<PageLayout useChakra>
				<Hero />
				<Volume />
				<Ecosystem />
				<Integrators />
				<Interested />
				<Collateral />
				<Stats />
				<Interfaces />
				<Staking />
				<Perps />
				<AggregatedStats />
				<Governance />
				<Partners />
			</PageLayout>
		</>
	);
};

const STAKED_SNX_DATA_URL = 'https://api.synthetix.io/staking-ratio';
const VOLUME_DATA_URL = 'https://api.dune.com/api/v1/query/2499125/results';
const ACTIVE_STAKERS_URL = 'https://api.dune.com/api/v1/query/2647572/results';
const INTEGRATORS_VOLUME_URL =
	'https://api.dune.com/api/v1/query/2647536/results';
const OPEN_INTEREST_URL = 'https://api.dune.com/api/v1/query/2441903/results';
const TRADING_FEES_URL = 'https://api.dune.com/api/v1/query/1893390/results';

type StakedSNXResponse = {
	systemStakingPercent: number;
	timestamp: number;
	stakedSnx: {
		ethereum: number;
		optimism: number;
	};
};

type VolumeData = {
	cumulative_fees: number;
	cumulative_volume: number;
	days30_fee: number;
	days30_total_fee: number;
	days30_vol: number;
	days7_fee: number;
	days7_total_fee: number;
	days7_vol: number;
	time: string;
	total_fees: number;
	total_volume: number;
};

type VolumeResponse = {
	result: {
		rows: VolumeData[];
	};
};

type ActiveStakersData = {
	All_stakers: number;
	L1_stakers: number;
	L2_stakers: number;
	time: string;
};

type ActiveStakerResponse = {
	result: {
		rows: ActiveStakersData[];
	};
};

type IntegratorsVolumeData = {
	daily_fee: number;
	day: string;
	integrator_cum_fee: number;
	tracking_code: string;
};

type IntegratorsVolumeResponse = {
	result: {
		rows: IntegratorsVolumeData[];
	};
};

type OpenInterestResponse = {
	result: {
		rows: IntegratorsVolumeData[];
	};
};

const apiKey = process?.env?.NEXT_DUNE_API_KEY || '';

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const [
			stakesSnxResponse,
			snxPrice,
			{ data: volumeData },
			{ data: activeStakersData },
			{ data: integratorsData },
			{ data: openInterestData },
			{ data: tradingFeesData },
		] = await Promise.all([
			axios.get<StakedSNXResponse>(STAKED_SNX_DATA_URL),
			getSnxPrice(),
			axios.get<VolumeResponse>(VOLUME_DATA_URL, {
				headers: { 'x-dune-api-key': apiKey },
			}),
			axios.get<ActiveStakerResponse>(ACTIVE_STAKERS_URL, {
				headers: { 'x-dune-api-key': apiKey },
			}),
			axios.get<IntegratorsVolumeResponse>(INTEGRATORS_VOLUME_URL, {
				headers: { 'x-dune-api-key': apiKey },
			}),
			axios.get<OpenInterestResponse>(OPEN_INTEREST_URL, {
				headers: { 'x-dune-api-key': apiKey },
			}),
			axios.get(TRADING_FEES_URL, {
				headers: { 'x-dune-api-key': apiKey },
			}),
		]);

		const {
			data: { stakedSnx },
		} = stakesSnxResponse;

		const totalStakedSnx = stakedSnx.optimism + stakedSnx.ethereum;
		const valueTotalStaked = snxPrice * totalStakedSnx;

		const tradingVolume = volumeData.result.rows.sort((a, b) =>
			b.time > a.time ? 1 : -1,
		)[0];

		const activeStakers = activeStakersData.result.rows.sort((a, b) =>
			b.time > a.time ? 1 : -1,
		)[0];

		const integratorsVolume = integratorsData.result.rows.sort((a, b) =>
			b.day > a.day ? 1 : -1,
		);

		// Get the integrator volume for the latest date
		// and sort by daily fee
		const integratorForLatestDate = integratorsVolume
			.filter(item => item.day === integratorsVolume[0].day)
			.sort((a, b) => (a.daily_fee > b.daily_fee ? -1 : 1))
			.map(item => item.tracking_code.split('\x00')[0]);

		// console.log('Open interest data', openInterestData.result.rows);

		if (isNaN(valueTotalStaked)) {
			throw Error('Unexpected NaN getting total staked value');
		}
		return {
			props: {
				totalStakedValue: valueTotalStaked,
				tradingVolume,
				activeStakers,
				integratorForLatestDate,
			},
		};
	} catch (e) {
		console.log(e);
		return {
			props: {
				totalStakedValue: 0,
				tradingVolume: null,
				totalValueLocked: null,
				integratorsByVolume: null,
				tvl: null,
				uniqueStakers: null,
				totalTradingFees: null,
				allTimeVolume: null,
				openInterest: null,
				uniqueTradingAccounts: null,
				markets: null,
			},
		};
	}
};

export default Home;
