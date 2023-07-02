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
import {
	StakedSNXResponse,
	VolumeResponse,
	ActiveStakerResponse,
	IntegratorsVolumeResponse,
	OpenInterestResponse,
	TradingFeesResponse,
	VolumeData,
	ActiveStakersData,
	GraphqlResponse,
} from 'src/typings';
import { numberWithCommas } from 'src/utils/formatters/number';
import millify from 'millify';
import { utils } from 'ethers';

export interface ApiStatsProps {
	totalStakedValue?: number;
	tradingVolume?: VolumeData;
	activeStakers?: ActiveStakersData;
	integratorForLatestDate?: string[];
	openInterestForLatestDate?: number;
	markets?: number;
	uniqueTradingAccounts?: string;
}

const Home = ({
	totalStakedValue,
	activeStakers,
	integratorForLatestDate,
	tradingVolume,
	openInterestForLatestDate,
	markets,
	uniqueTradingAccounts,
}: ApiStatsProps) => {
	// NOTE BACKUP VALUES ARE BASED ON 20/6/23 data

	const tvl = `${numberWithCommas(
		totalStakedValue?.toFixed(0) || '478393038', // TVL 20/6/23
	)}`; // VOLUME 20/6/23

	const uniqueStakers = numberWithCommas(
		activeStakers?.All_stakers.toFixed(0) || '43937', // STAKERS 20/6/23
	);

	const cumulativeTradingVolume = `${numberWithCommas(
		tradingVolume?.cumulative_volume.toFixed(0) || '13590466291', // VOLUME 20/6/23
	)}`;

	const cumulativeTradingFees = `${numberWithCommas(
		tradingVolume?.cumulative_fees.toFixed(0) || '12457449', // FEES 20/6/23
	)}`;

	const volumeMillified = millify(
		Math.floor(tradingVolume?.cumulative_volume || 13590466291),
	);

	const oiMillified = millify(
		Math.floor(openInterestForLatestDate || 122087440),
	);

	const marketsData = `${markets || 42}`;

	const uniqueTradingAccountsData = numberWithCommas(
		uniqueTradingAccounts || '12646',
	);

	return (
		<>
			<Head>
				<title>Synthetix</title>
			</Head>
			<PageLayout useChakra>
				<Hero />
				<Volume tvl={tvl} cumulativeTradingVolume={cumulativeTradingVolume} />
				<Ecosystem />
				<Integrators sortList={integratorForLatestDate || []} />
				<Interested />
				<Collateral />
				<Stats
					uniqueStakers={uniqueStakers}
					cumulativeTradingFees={cumulativeTradingFees}
					tvl={tvl}
				/>
				<Interfaces />
				<Staking />
				<Perps />
				<AggregatedStats
					allTimeVolume={volumeMillified}
					markets={marketsData}
					openInterest={oiMillified}
					uniqueTradingAccounts={uniqueTradingAccountsData}
				/>
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
const graphqlUrl =
	'https://api.thegraph.com/subgraphs/name/synthetix-perps/perps';

const apiKey = process?.env?.NEXT_DUNE_API_KEY || '';

const graphqlQuery = `
query {
  futuresMarkets {
    id
    isActive
    marketKey
  }
  dailyStats(orderBy: day, orderDirection: desc, first: 1) {
    cumulativeTraders
  }
}
`;

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
			{ data: graphqlResponse },
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
			axios.get<TradingFeesResponse>(TRADING_FEES_URL, {
				headers: { 'x-dune-api-key': apiKey },
			}),
			axios.post<GraphqlResponse>(graphqlUrl, {
				query: graphqlQuery,
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

		const openInterest = openInterestData.result.rows.sort((a, b) =>
			a.day > b.day ? -1 : 1,
		);

		const openInterestForLatestDate = openInterest
			.filter(item => item.day === openInterest[0].day)
			.reduce((acc, item) => acc + Math.abs(item.size_usd), 0);

		const tradingFees = tradingFeesData.result.rows.sort((a, b) =>
			a.day > b.day ? -1 : 1,
		);

		const markets = graphqlResponse?.data?.futuresMarkets.filter(
			({ marketKey }) => utils.parseBytes32String(marketKey).includes('PERP'),
		).length;

		const uniqueTradingAccounts =
			graphqlResponse?.data?.dailyStats[0]?.cumulativeTraders;

		if (isNaN(valueTotalStaked)) {
			throw Error('Unexpected NaN getting total staked value');
		}
		return {
			props: {
				totalStakedValue: valueTotalStaked,
				tradingVolume,
				activeStakers,
				integratorForLatestDate,
				openInterestForLatestDate,
				tradingFees: tradingFees[0],
				markets,
				uniqueTradingAccounts,
			},
		};
	} catch (e) {
		console.log(e);
		return {
			props: {
				totalStakedValue: null,
				tradingVolume: null,
				activeStakers: null,
				inegratorForLatestDate: null,
				openInterestForLatestDate: null,
				tradingFees: null,
				markets: null,
				uniqueTradingAccounts: null,
			},
		};
	}
};

export default Home;
