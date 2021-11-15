import Head from 'next/head';
import { PageLayout } from 'src/components';
import FuturesMain from 'src/sections/futures/main';
import PoweredBy from 'src/sections/futures/powered-by';
import USP from 'src/sections/futures/usp';
import styled from 'styled-components';
import media from 'styled-media-query';

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
			</PageLayout>
		</>
	);
}
