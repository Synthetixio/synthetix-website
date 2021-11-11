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
				<BgGradient />
				<FuturesMain />
				<PoweredBy />
				<USP />
			</PageLayout>
		</>
	);
}

const BgGradient = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	min-height: 853px;
	background: linear-gradient(180deg, rgba(14, 5, 47, 0) 0%, #0e052f 38.6%);
	pointer-events: none;

	${media.lessThan('medium')`
		height: 734px;
		min-height: auto;
	`}
`;
