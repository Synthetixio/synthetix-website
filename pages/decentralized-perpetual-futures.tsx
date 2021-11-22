import Head from 'next/head';
import { PageLayout } from 'src/components';
import getSNXJS from 'src/lib/snxjs';
import FuturesMain from 'src/sections/futures/main';
import Perpetuals from 'src/sections/futures/perpetuals';
import PoweredBy, { PoweredByProps } from 'src/sections/futures/powered-by';
import USP from 'src/sections/futures/usp';
import { Line } from 'src/styles/common';
import styled from 'styled-components';
import media from 'styled-media-query';
import { getDebtStateById } from 'synthetix-subgraph';

interface DecentralizedPerpetualFutures extends PoweredByProps {}

export async function getStaticProps() {
	const snx = getSNXJS();
	const { totalIssuedSynths } = await getDebtStateById(
		'https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main',
		{ id: '0' },
		{
			id: true,
			totalIssuedSynths: true,
		}
	);
	return {
		props: {
			openInterest: totalIssuedSynths.toNumber().toFixed(2),
		},
	};
}

export default function DecentralizedPerpetualFutures({
	tradingVolume,
	trades,
	openInterest,
}: DecentralizedPerpetualFutures) {
	return (
		<>
			<Head>
				<title>Synthetix - Decentralized Perpetual Futures</title>
			</Head>
			<PageLayout>
				<FuturesGradient />
				<FuturesMain />
				<PoweredBy openInterest={openInterest} trades={trades} tradingVolume={tradingVolume} />
				<USP />
				<Line />
				<Perpetuals />
				<Line showOnMobile />
			</PageLayout>
		</>
	);
}

const FuturesGradient = styled.div`
	background: linear-gradient(180deg, rgba(14, 5, 47, 0) 0%, #0e052f 38.6%);
	width: 100vw;
	height: 894px;
	position: absolute;
	top: 0;
	left: 0;
	${media.lessThan('medium')`
		height: 100vh;
	`}
`;
