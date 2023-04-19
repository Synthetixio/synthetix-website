import Head from 'next/head';
import { PageLayout } from 'src/components';
import FrontEnds from 'src/sections/perps/frontends';
import FuturesMain from 'src/sections/perps/main';
import USP from 'src/sections/perps/usp';

export default function DecentralizedPerpetualFutures() {
	return (
		<>
			<Head>
				<title>Synthetix - Decentralized Perps</title>
			</Head>
			<PageLayout px={0}>
				<FuturesMain />
				<USP />
				<FrontEnds />
			</PageLayout>
		</>
	);
}
