import Head from 'next/head';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import ipRangeCheck from 'ip-range-check';

import MainSection from '../src/sections/home/main';
import Futures from '../src/sections/home/futures';
import TotalSection from '../src/sections/home/total';
import PartnersSection from '../src/sections/home/partners';
import SynthSection from 'src/sections/home/synths';
import Ecosystem from 'src/sections/home/ecosystem';

import { Layout } from '../src/components';
import { fetchTotalLocked } from '../src/lib/exchange-api';

const PoweredBy = dynamic(() => import('../src/sections/home/poweredBy'), {
	ssr: false,
});

export interface ApiStatsProps {
	totalLocked?: number;
}

const Home = ({ totalLocked }: ApiStatsProps) => {
	return (
		<>
			<Head>
				<title>Synthetix</title>
			</Head>
			<Layout showBgGradient={true}>
				<MainSection />
				<TotalSection totalLocked={totalLocked} />
				<Futures />
				<SynthSection />
				<PoweredBy />
				<Ecosystem />
				<PartnersSection />
			</Layout>
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

export default Home;
