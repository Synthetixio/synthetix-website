import Head from 'next/head';
import { PageLayout } from 'src/components';
import Callout from 'src/sections/perps/callout';
import FrontEnds from 'src/sections/perps/frontends';
import FuturesMain from 'src/sections/perps/main';
import USP from 'src/sections/perps/usp';

export default function DecentralizedPerpetualFutures() {
	return (
		<>
			<Head>
				<title>Synthetix - Decentralized Perps</title>
			</Head>
			<PageLayout useChakra>
				<FuturesMain />
				<Callout />
				<USP />
				<FrontEnds />
			</PageLayout>
		</>
	);
}
