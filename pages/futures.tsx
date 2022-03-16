import { NetworkId } from '@synthetixio/contracts-interface';
import Head from 'next/head';
import { PageLayout } from 'src/components';
import getSNXJS from 'src/lib/snxjs';
import FuturesMain from 'src/sections/futures/main';
import PoweredBy, { PoweredByProps } from 'src/sections/futures/poweredBy';
import USP from 'src/sections/futures/usp';
import { Line } from 'src/styles/common';
import styled from 'styled-components';
import media from 'styled-media-query';
import { getDailyCandles, getDailyExchangePartners, getDebtStates } from 'synthetix-subgraph';
import Perpetuals from 'src/sections/futures/perpetuals';
import { headerHeight } from 'src/components/Header';
import { exchangesGraph, optimismGraphMain } from 'src/constants/urls';

interface DecentralizedPerpetualFuturesProps extends PoweredByProps {
	synths: PerpetualSynth[];
}

export interface PerpetualSynth {
	name: string;
	priceInUSD: string;
	volume: string;
	priceChange: number;
	category: string;
}

export async function getStaticProps() {
	const yesterday = new Date(new Date().getTime() / 1000 - 24 * 60 * 60).getTime();
	const snx = getSNXJS({
		useOvm: true,
		networkId: NetworkId['Mainnet-Ovm'],
	});
	const [dailyKwenta] = await getDailyExchangePartners(
		optimismGraphMain,
		{
			where: {
				partner: 'KWENTA',
				timestamp_gt: yesterday,
			},
			orderBy: 'timestamp',
			orderDirection: 'desc',
		},
		{ id: true, trades: true, usdVolume: true }
	);
	const [debt] = await getDebtStates(
		optimismGraphMain,
		{
			orderBy: 'timestamp',
			orderDirection: 'desc',
		},
		{
			id: true,
			totalIssuedSynths: true,
			timestamp: true,
		}
	);
	const [, synthsRates] = await snx.contracts.SynthUtil.synthsRates();
	const [, , sUSDBalances] = await snx.contracts.SynthUtil.synthsTotalSupplies();
	const synths: PerpetualSynth[] = await Promise.all(
		snx.synths.map(async (synth, index) => {
			const [synthCandle] = await getDailyCandles(
				exchangesGraph,
				{ first: 1, where: { synth: synth.name }, orderBy: 'timestamp', orderDirection: 'desc' },
				{
					open: true,
					close: true,
				}
			);
			const priceChange = synthCandle?.open.sub(synthCandle.close).div(synthCandle?.open).mul(100);
			return {
				name: synth.name,
				category: synth.category,
				priceInUSD: USNumberFormat(Number(snx.utils.formatEther(synthsRates[index]))),
				volume: USNumberFormat(Number(snx.utils.formatEther(sUSDBalances[index]))),
				priceChange: priceChange ? priceChange.toNumber() : 0,
			};
		})
	);
	return {
		props: {
			openInterest: USNumberFormat(Number(debt.totalIssuedSynths.toNumber().toFixed(2))),
			trades: USNumberFormat(dailyKwenta.trades.toNumber()),
			tradingVolume: USNumberFormat(Number(dailyKwenta.usdVolume.toNumber().toFixed(2))),
			synths,
		},
		revalidate: 43200,
	};
}

const USNumberFormat = (num: number) => {
	return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(num);
};

export default function DecentralizedPerpetualFutures({
	tradingVolume,
	trades,
	openInterest,
	synths,
}: DecentralizedPerpetualFuturesProps) {
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
				<Perpetuals synths={synths} />
				<Line showOnMobile />
			</PageLayout>
		</>
	);
}

const FuturesGradient = styled.div`
	background: linear-gradient(
		180deg,
		rgba(14, 5, 47, 0) 0%,
		${({ theme }) => theme.colors.bgBlackHighlighted} 38.6%
	);
	width: 100vw;
	height: 894px;
	position: absolute;
	top: 0;
	left: 0;
	${media.lessThan('medium')`
		height: calc(100vh + ${headerHeight}px);
		min-height: 600px;
	`}
`;
