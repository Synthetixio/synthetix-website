import { Network, NetworkId } from '@synthetixio/contracts-interface';
import Head from 'next/head';
import { PageLayout } from 'src/components';
import getSNXJS from 'src/lib/snxjs';
import FuturesMain from 'src/sections/futures/main';
import Perpetuals from 'src/sections/futures/perpetuals';
import PoweredBy, { PoweredByProps } from 'src/sections/futures/poweredBy';
import USP from 'src/sections/futures/usp';
import { Line } from 'src/styles/common';
import styled from 'styled-components';
import media from 'styled-media-query';
import { getDailyExchangePartners, getDebtStates } from 'synthetix-subgraph';

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

const url = 'https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main';

export async function getStaticProps() {
	const snx = getSNXJS({
		useOvm: true,
		network: Network['Mainnet-Ovm'],
		networkId: NetworkId['Mainnet-Ovm'],
	});
	const [dailyKwenta] = await getDailyExchangePartners(
		url,
		{
			where: {
				partner: 'KWENTA',
			},
			orderBy: 'timestamp',
			orderDirection: 'desc',
		},
		{ id: true, trades: true, usdVolume: true }
	);

	const [debt] = await getDebtStates(
		url,
		{
			orderBy: 'timestamp',
			orderDirection: 'desc',
		},
		{
			id: true,
			totalIssuedSynths: true,
		}
	);
	const [, synthsRates] = await snx.contracts.SynthUtil.synthsRates();
	const [, , sUSDBalances] = await snx.contracts.SynthUtil.synthsTotalSupplies();

	const synths: PerpetualSynth[] = snx.synths.map((synth, index) => {
		return {
			name: synth.name,
			category: synth.category,
			priceInUSD: USNumberFormat(Number(snx.utils.formatEther(synthsRates[index]))),
			volume: USNumberFormat(Number(snx.utils.formatEther(sUSDBalances[index]))),
			priceChange: 1,
		};
	});

	return {
		props: {
			openInterest: USNumberFormat(Number(debt.totalIssuedSynths.toNumber().toFixed(2))),
			trades: USNumberFormat(dailyKwenta.trades.toNumber()),
			tradingVolume: USNumberFormat(Number(dailyKwenta.usdVolume.toNumber().toFixed(2))),
			synths,
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
