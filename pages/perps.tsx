import { NetworkIdByName } from '@synthetixio/contracts-interface';
import Head from 'next/head';
import { PageLayout } from 'src/components';
import getSNXJS from 'src/lib/snxjs';
import FuturesMain from 'src/sections/perps/main';
import PoweredBy, { PoweredByProps } from 'src/sections/perps/poweredBy';
import USP from 'src/sections/perps/usp';
import {
	getDailyCandles,
	getDailyExchangePartners,
	getDebtStates,
} from 'synthetix-subgraph';
import Perpetuals from 'src/sections/perps/perpetuals';
import { exchangesGraph, optimismGraphMain } from 'src/constants/urls';
import { EmailSection } from 'src/sections/email/EmailSection';
import FrontEnds from 'src/sections/perps/frontends';
import { Divider } from '@chakra-ui/react';

interface DecentralizedPerpetualFuturesProps extends PoweredByProps {
	synths: PerpetualSynth[];
}

export interface PerpetualSynth {
	name: string;
	priceInUSD: string;
	volume?: string;
	priceChange: number;
	category: string;
}

export async function getStaticProps() {
	const yesterday = new Date(
		new Date().getTime() / 1000 - 24 * 60 * 60,
	).getTime();

	const snx = getSNXJS({
		useOvm: true,
		networkId: NetworkIdByName['mainnet-ovm'],
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
		{ id: true, trades: true, usdVolume: true },
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
		},
	);

	const [, synthsRates] = await snx.contracts.SynthUtil.synthsRates();
	const [, , sUSDBalances] =
		await snx.contracts.SynthUtil.synthsTotalSupplies();

	const synths: PerpetualSynth[] = await Promise.all(
		snx.synths.map(async (synth, index) => {
			const [synthCandle] = await getDailyCandles(
				exchangesGraph,
				{
					first: 1,
					where: { synth: synth.name },
					orderBy: 'timestamp',
					orderDirection: 'desc',
				},
				{
					open: true,
					close: true,
				},
			);
			const priceChange = synthCandle?.open
				.sub(synthCandle.close)
				.div(synthCandle?.open)
				.mul(100);
			return {
				name: synth.name,
				category: synth.category,
				priceInUSD: USNumberFormat(
					Number(snx.utils.formatEther(synthsRates[index])),
				),
				volume: USNumberFormat(
					Number(snx.utils.formatEther(sUSDBalances[index])),
				),
				priceChange: priceChange ? priceChange.toNumber() : 0,
			};
		}),
	);

	return {
		props: {
			openInterest: USNumberFormat(
				Number(debt.totalIssuedSynths.toNumber().toFixed(2)),
			),
			trades: USNumberFormat(dailyKwenta?.trades?.toNumber() || 0),
			tradingVolume: USNumberFormat(
				Number(dailyKwenta?.usdVolume?.toNumber().toFixed(2) || 0),
			),
			synths,
		},
		revalidate: 43200,
	};
}

const USNumberFormat = (num: number) => {
	return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(
		num,
	);
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
			<PageLayout px={0} bg="#0e052d">
				<FuturesMain px={{ base: 10, sm: 10, md: 16, lg: 36 }} />
				<EmailSection
					innerProps={{
						justifyContent: 'space-between',
						px: { base: 10, sm: 10, md: 16, lg: 36 },
					}}
					byline="Get Updates on Perps Trading"
					minH={{ base: '220px', sm: '260px', lg: '220px' }}
				/>
				{/* <PoweredBy
					px={{ base: 10, sm: 10, md: 16, lg: 36 }}
					openInterest={openInterest}
					trades={trades}
					tradingVolume={tradingVolume}
				/> */}
				<USP mt={20} px={{ base: 10, sm: 10, md: 16, lg: 36 }} />
				<FrontEnds px={{ base: 10, sm: 10, md: 16, lg: 36 }} mt={20} />
				<Perpetuals px={{ base: 10, sm: 10, md: 16, lg: 36 }} synths={synths} />
				<Divider
					color="transparent"
					height="1px"
					bgGradient="linear-gradient(0deg, rgba(14, 4, 53, 0.29), rgba(14, 4, 53, 0.29)), linear-gradient(88.63deg, #00D1FF -14.83%, #ED1EFF 108.22%);"
				/>
			</PageLayout>
		</>
	);
}
