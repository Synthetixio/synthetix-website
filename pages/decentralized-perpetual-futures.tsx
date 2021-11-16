import Head from 'next/head';
import { PageLayout } from 'src/components';
import FuturesMain from 'src/sections/futures/main';
import Perpetuals from 'src/sections/futures/perpetuals';
import PoweredBy from 'src/sections/futures/powered-by';
import USP from 'src/sections/futures/usp';
import { Line } from 'src/styles/common';

export default function DecentralizedPerpetualFutures() {
	return (
		<>
			<Head>
				<title>Synthetix - Decentralized Perpetual Futures</title>
			</Head>
			<PageLayout>
				<FuturesMain />
				<PoweredBy />
				<USP />
				<Line />
				<Perpetuals />
				<Line showOnMobile />
			</PageLayout>
		</>
	);
}
