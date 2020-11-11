import Head from 'next/head';
import { GetServerSideProps } from 'next';

import MainSection from '../sections/home/main';
import BuildSection from '../sections/home/build';
import TotalSection from '../sections/home/total';
import EarnSection from '../sections/home/earn';
import PartnersSection from '../sections/home/partners';
import dynamic from 'next/dynamic';
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
	const totalLocked = await fetchTotalLocked();

	return {
		props: {
			totalLocked,
		},
	};
};

export default Home;
