import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Futures from '../src/sections/home/futures';
import SynthSection from 'src/sections/home/synths';
import { Hero, Volume, Ecosystem, Integrators } from 'src/sections/home';
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
				{/* <Futures />
				<EmailSection />
				<Line />
				<SynthSection />
				<Line />
				<PoweredBy />
				<Ecosystem />
				<Line showOnMobile /> */}
			</PageLayout>
		</>
	);
};
const STAKED_SNX_DATA_URL = 'https://api.synthetix.io/staking-ratio';

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
