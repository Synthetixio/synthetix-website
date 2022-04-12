import Head from 'next/head';
import styled from 'styled-components';
import SynthsInfo from 'src/sections/synths/SynthsInfo';
import { Section, SectionTitle, Line } from 'src/styles/common';
import { PageLayout } from 'src/components';
import media from 'styled-media-query';
import axios from 'axios';
import { TokenListQueryResponse, TokenListResponse } from 'src/queries/tokenLists/types';
import { keyBy } from 'lodash';
import exchangeInfoQuery, { Fees, Rates } from 'src/queries/exchangeInfo/useExchangeInfoQuery';
import getSNXJS from 'src/lib/snxjs';
import useMarketClosed from 'src/hooks/useMarketClosed';
import { SynthStatus } from 'src/sections/synths/SynthCard';
import { Synth } from '@synthetixio/contracts-interface';

const getSynthStatus = async (useOvm: boolean) => {
	const synths = getSNXJS({ useOvm }).synths;
	const dictionarySynthStatus: Record<string, SynthStatus> = {};
	const promises = synths.map(async (synth) => {
		const marketClosed = await useMarketClosed(synth.name, useOvm);
		if (marketClosed.isMarketClosed) {
			dictionarySynthStatus[synth.name] = SynthStatus.PAUSED;
		} else {
			dictionarySynthStatus[synth.name] = SynthStatus.LIVE;
		}
	});
	await Promise.all(promises);

	return {
		synths,
		dictionarySynthStatus,
	};
};

export async function getStaticProps() {
	const [
		tokenListResponse,
		{ exchangeInfoL1, exchangeInfoL2 },
		{ synths: synthsL1, dictionarySynthStatus: dictionarySynthStatusL1 },
		{ synths: synthsL2, dictionarySynthStatus: dictionarySynthStatusL2 },
	] = await Promise.all([
		axios.get<TokenListResponse>('https://synths.snx.eth.link'),
		exchangeInfoQuery(),
		getSynthStatus(false),
		getSynthStatus(true),
	]);

	const tokenList = {
		tokens: tokenListResponse.data.tokens,
		tokensMap: keyBy(tokenListResponse.data.tokens, 'symbol'),
		symbols: tokenListResponse.data.tokens.map((token) => token.symbol),
	};

	return {
		props: {
			tokenList,
			l1: {
				exchangeInfo: exchangeInfoL1,
				synths: synthsL1,
				dictionarySynthStatus: dictionarySynthStatusL1,
			},
			l2: {
				exchangeInfo: exchangeInfoL2,
				synths: synthsL2,
				dictionarySynthStatus: dictionarySynthStatusL2,
			},
		},
		revalidate: 43200,
	};
}

export interface SynthsProps {
	tokenList: TokenListQueryResponse;
	l1: {
		exchangeInfo: { fees: Fees; rates: Rates };
		dictionarySynthStatus: Record<string, SynthStatus>;
		synths: Synth[];
	};
	l2: {
		exchangeInfo: { fees: Fees; rates: Rates };
		dictionarySynthStatus: Record<string, SynthStatus>;
		synths: Synth[];
	};
}

const Synths = ({ tokenList, l1, l2 }: SynthsProps) => (
	<>
		<Head>
			<title>Synthetix - Synths</title>
		</Head>
		<PageLayout>
			<ContentWrapper>
				<SynthsSection>
					<SectionTitle>Synths</SectionTitle>
					<StyledPageCopy>
						Synths are derivative tokens providing exposure to a range of assets. They can be traded
						with infinite liquidity and zero slippage by leveraging the Synthetix protocol’s unique
						pooled collateral model. Trades between Synths generate a small fee that is distributed
						to SNX collateral providers.
					</StyledPageCopy>
					<SynthsInfo {...{ tokenList, l1, l2 }} />
				</SynthsSection>
			</ContentWrapper>
			<Line showOnMobile />
		</PageLayout>
	</>
);

const StyledPageCopy = styled.div`
	max-width: 560px;
	margin: 0;
	font-size: 14px;
	line-height: 20px;
	padding-bottom: 35px;
`;

const ContentWrapper = styled.div`
	width: 100%;
	background: linear-gradient(180deg, #08021e 0%, #120446 146.21%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const SynthsSection = styled(Section)`
	padding: 40px 0 0 153px;

	${media.lessThan('medium')`
		padding: 16px;
	`}
`;

export default Synths;
