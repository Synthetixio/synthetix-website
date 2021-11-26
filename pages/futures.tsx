import { Network, NetworkId } from '@synthetixio/contracts-interface';
import { ethers } from 'ethers';
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

interface DecentralizedPerpetualFutures extends PoweredByProps {}

const url = 'https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main';

export async function getStaticProps() {
	const snx = getSNXJS({
		useOvm: true,
		network: Network['Mainnet-Ovm'],
		networkId: NetworkId['Mainnet-Ovm'],
	});
	console.log(snx.network);
	const [dailyKwenta] = await getDailyExchangePartners(
		url,
		{
			where: {
				partner: 'KWENTA',
			},
			orderBy: 'timestamp',
		},
		{ id: true, trades: true, usdVolume: true }
	);
	const [debt] = await getDebtStates(
		url,
		{
			orderBy: 'timestamp',
		},
		{
			id: true,
			totalIssuedSynths: true,
		}
	);

	console.log(snx.network);
	// const synthsRates = await snx.contracts.SynthUtil.synthsRates();
	return {
		props: {
			openInterest: USNumberFormat(Number(debt.totalIssuedSynths.toNumber().toFixed(2))),
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
