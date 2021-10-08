import Head from 'next/head';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import ipRangeCheck from 'ip-range-check';

import MainSection from '../sections/home/main';
import Futures from '../sections/home/futures';
import TotalSection from '../sections/home/total';
import PartnersSection from '../sections/home/partners';
import { Layout } from '../components';
import { fetchTotalLocked } from '../../lib/exchange-api';
import SynthSection from 'src/sections/home/synths';
import Ecosystem from 'src/sections/home/ecosystem';

export interface ApiStatsProps {
	totalLocked?: number;
}

const PoweredBy = dynamic(() => import('../sections/home/poweredBy'), {
	ssr: false,
});

const Home = ({ totalLocked }: ApiStatsProps) => {
	return (
		<>
			<Head>
				<title>Synthetix</title>
			</Head>
			<Layout showBgGradient={true}>
				<MainSection />
				<TotalSection totalLocked={totalLocked} />
				<SynthSection />
				<Futures />
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
			return {};
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
