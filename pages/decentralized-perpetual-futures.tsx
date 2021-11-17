import Head from 'next/head';
import { PageLayout } from 'src/components';
import getSNXJS from 'src/lib/snxjs';
import FuturesMain from 'src/sections/futures/main';
import Perpetuals from 'src/sections/futures/perpetuals';
import PoweredBy from 'src/sections/futures/powered-by';
import USP from 'src/sections/futures/usp';
import { Line } from 'src/styles/common';
import styled from 'styled-components';
import media from 'styled-media-query';

export async function getStaticProps() {
	const SNX = getSNXJS();

	let globalDebtOverTimeQuery = 'cool';
	/* 	({
		api: 'https://api.thegraph.com/subgraphs/name/killerbyte/optimism-global-debt',
		max: 5000,
		query: {
			entity: 'debtStates',
			selection: {
				orderBy: 'timestamp',
				orderDirection: 'desc',
				first: 1000,
			},
			properties: ['timestamp', 'totalIssuedSynths', 'debtEntry', 'debtRatio', 'snxSupply'],
		},
	}); */
	console.log(globalDebtOverTimeQuery);
	return {
		props: {
			globalDebtOverTimeQuery,
		},
	};
}

// @ts-ignore
export default function DecentralizedPerpetualFutures(props) {
	console.log(props);
	return (
		<>
			<Head>
				<title>Synthetix - Decentralized Perpetual Futures</title>
			</Head>
			<PageLayout>
				<FuturesGradient />
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
