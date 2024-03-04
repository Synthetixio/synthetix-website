import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { PageLayout } from 'src/components';
import Action from 'src/sections/perps/action';
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
			<PageLayout>
				<FuturesMain />
				<Callout />
				<USP />
				<Flex
					flexDir="column"
					alignItems="center"
					w="100vw"
					bg="radial-gradient(circle at left 600px, rgba(238, 46, 255, 0.2) 4%, transparent, transparent 40%),
					radial-gradient(circle at right 1200px, rgba(0, 209, 255, 0.2) 3%, transparent, transparent 40%)"
				>
					<Action />
					<FrontEnds />
				</Flex>
			</PageLayout>
		</>
	);
}
