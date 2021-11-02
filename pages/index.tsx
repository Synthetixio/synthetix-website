import Head from 'next/head';
import { GetServerSideProps } from 'next';

import ipRangeCheck from 'ip-range-check';

import MainSection from '../src/sections/home/main';
import Futures from '../src/sections/home/futures';
import TotalSection from '../src/sections/home/total';
import SynthSection from 'src/sections/home/synths';

import { fetchTotalLocked } from '../src/lib/exchange-api';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import media from 'styled-media-query';
import Ecosystem from 'src/sections/home/ecosystem';
import { Line } from 'src/styles/common';
import { PageLayout } from '../src/components';

export interface ApiStatsProps {
	totalLocked?: number;
}

const PoweredBy = dynamic(() => import('../src/sections/home/poweredBy'), {
	ssr: false,
});

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
				{/* Maik maybe wants to reposition this section so that is why we hide it for now 
				<PartnersSection /> */}
			</PageLayout>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	if (process.env.CF_IP) {
		const allowedIps = JSON.parse(`[${process.env.CF_IP}]`);
		const ip = context.req.headers['x-forwarded-for'] || context.req.connection.remoteAddress;
		if (typeof ip === 'string' && ipRangeCheck(ip, allowedIps)) {
			const props = await getProps();
			return props;
		} else {
			context.res.statusCode = 403;
			context.res.end('Your IP is not whitelisted.');
			return { props: {} };
		}
	} else {
		const props = await getProps();
		return props;
	}
	async function getProps() {
		const totalLocked = await fetchTotalLocked();
		return {
			props: {
				totalLocked,
			},
		};
	}
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

export default Home;
