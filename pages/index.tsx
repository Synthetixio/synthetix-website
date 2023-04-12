import Head from 'next/head';
import { GetServerSideProps } from 'next';
import MainSection from '../src/sections/home/main';
import Futures from '../src/sections/home/futures';
import TotalSection from '../src/sections/home/total';
import SynthSection from 'src/sections/home/synths';
import Ecosystem from 'src/sections/home/ecosystem';
import { PageLayout } from '../src/components';
import { Line } from 'src/styles/common';
import PoweredBy from 'src/sections/home/poweredBy';
import axios from 'axios';
import { Box, useColorMode } from '@chakra-ui/react';
import getSnxPrice from '../src/queries/snxPrice/snxPrice';
import { useEffect } from 'react';
import { EmailSection } from 'src/sections/email/EmailSection';

export interface ApiStatsProps {
	totalStakedValue?: number;
}

const Home = ({ totalStakedValue }: ApiStatsProps) => {
	return (
		<>
			<Head>
				<title>Synthetix</title>
			</Head>
			<PageLayout>
				<Box
					position="absolute"
					top="0"
					left="0"
					w="100%"
					height="100vh"
					bg="linear-gradient(180deg, #08021e 0%, #120446 146.21%)"
					pointerEvents="none"
				/>
				<MainSection />
				<Line />
				<TotalSection totalStakedValue={totalStakedValue} />
				<Line />
				<Futures />
				<EmailSection />
				<Line />
				<SynthSection />
				<Line />
				<PoweredBy />
				<Ecosystem />
				<Line showOnMobile />
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
