import Head from 'next/head';
import { GetServerSideProps } from 'next';
import MainSection from '../src/sections/home/main';
import Futures from '../src/sections/home/futures';
import TotalSection from '../src/sections/home/total';
import SynthSection from 'src/sections/home/synths';
import Ecosystem from 'src/sections/home/ecosystem';
import { PageLayout } from '../src/components';
import media from 'styled-media-query';
import styled from 'styled-components';
import { Line } from 'src/styles/common';
import PoweredBy from 'src/sections/home/poweredBy';
import axios from 'axios';

export interface ApiStatsProps {
	totalLocked?: number;
}

const Home = ({ totalLocked }: ApiStatsProps) => {
	return (
		<>
			<Head>
				<title>Synthetix</title>
			</Head>
			<PageLayout>
				<BgGradient />
				<MainSection />
				<Line />
				<TotalSection totalLocked={totalLocked} />
				<Line />
				<Futures />
				<Line />
				<SynthSection />
				<Line />
				<PoweredBy />
				<Ecosystem />
				<Line showOnMobile />
				{/*  TODO @125 Mike maybe wants to reposition this section so that is why we hide it for now 
				<PartnersSection /> */}
			</PageLayout>
		</>
	);
};

const BgGradient = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	min-height: 853px;
	background: linear-gradient(180deg, #08021e 0%, #120446 146.21%);
	pointer-events: none;

	${media.lessThan('medium')`
		height: 734px;
		min-height: auto;
	`}
`;

export const getServerSideProps: GetServerSideProps = async () => {
	let totalLocked = 537861341;
	try {
		const response = await axios.get<{ totalLocked: number }>(
			'https://exchange.api.synthetix.io/api/total-locked'
		);
		totalLocked = response.data?.totalLocked;
	} catch (e) {
		console.log(e);
	}
	return {
		props: {
			totalLocked,
		},
	};
};

export default Home;
