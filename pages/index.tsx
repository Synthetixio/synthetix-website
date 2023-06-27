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
} from 'src/sections/home';

import { PageLayout } from 'src/components';
import { Line } from 'src/styles/common';
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

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const [stakesSnxResponse, snxPrice] = await Promise.all([
			axios.get<StakedSNXResponse>(STAKED_SNX_DATA_URL),
			getSnxPrice(),
			axios.get(VOLUME_DATA_URL, {
				headers: { 'x-dune-api-key': 'process.env.DUNE_API_KEY' },
			}),
		]);

		const {
			data: { stakedSnx },
		} = stakesSnxResponse;

		const totalStakedSnx = stakedSnx.optimism + stakedSnx.ethereum;
		const valueTotalStaked = snxPrice * totalStakedSnx;
		if (isNaN(valueTotalStaked)) {
			throw Error('Unexpected NaN getting total staked value');
		}
		return {
			props: {
				totalStakedValue: valueTotalStaked,
			},
		};
	} catch (e) {
		console.log(e);
		return {
			props: {
				totalStakedValue: 0,
			},
		};
	}
};

export default Home;
