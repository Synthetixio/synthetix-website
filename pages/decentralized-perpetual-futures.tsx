import Head from 'next/head';
import { PageLayout } from 'src/components';
import FuturesMain from 'src/sections/futures/main';
import Perpetuals from 'src/sections/futures/perpetuals';
import PoweredBy, { PoweredByProps } from 'src/sections/futures/poweredBy';
import USP from 'src/sections/futures/usp';
import { Line } from 'src/styles/common';
import styled from 'styled-components';
import media from 'styled-media-query';
import { getDailyExchangePartners, getDebtStateById } from 'synthetix-subgraph';

interface DecentralizedPerpetualFutures extends PoweredByProps {}

export async function getStaticProps() {
	// TODO MF, add order by to get the newest result at the top
	const [dailyKwenta] = await getDailyExchangePartners(
		'https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main',
		{
			where: {
				partner: 'KWENTA',
			},
		},
		{ id: true, trades: true, usdVolume: true }
	);
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
			openInterest: USNumberFormat(Number(totalIssuedSynths.toNumber().toFixed(2))),
			trades: USNumberFormat(dailyKwenta.trades.toNumber()),
			tradingVolume: USNumberFormat(Number(dailyKwenta.usdVolume.toNumber().toFixed(2))),
		},
		revalidate: 86400,
	};
}

const USNumberFormat = (num: number) => {
	return new Intl.NumberFormat('en-US').format(num);
};

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
