import Head from 'next/head';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import ipRangeCheck from 'ip-range-check';

import MainSection from '../sections/home/main';
import BuildSection from '../sections/home/build';
import TotalSection from '../sections/home/total';
import EarnSection from '../sections/home/earn';
import PartnersSection from '../sections/home/partners';
import { Layout } from '../components';
import { fetchTotalLocked } from '../../lib/exchange-api';

export interface ApiStatsProps {
	totalLocked?: number;
}

const PoweredBy = dynamic(() => import('../sections/home/poweredBy'), {
	ssr: false,
});

// trigger deploy 5 Nov 2020

const Home = ({ totalLocked }: ApiStatsProps) => {
	return (
		<>
			<Head>
				<title>Synthetix</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Synthetix is a derivatives liquidity protocol providing the backbone for derivatives trading in DeFi, allowing anyone, anywhere to gain on-chain exposure to a vast range of assets."
				/>
				<meta name="og:image" content="/public/logo-x.png" />
			</Head>
			<Layout>
				<MainSection />
				<TotalSection totalLocked={totalLocked} />
				<BuildSection />
				<EarnSection />
				<PoweredBy />
				<PartnersSection />
			</Layout>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	if (process.env.CF_IP) {
		const allowedIps = JSON.parse(`[${process.env.CF_IP}]`);
		const ip = context.req.connection.remoteAddress;
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
