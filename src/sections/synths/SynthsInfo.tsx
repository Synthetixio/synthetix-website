import styled from 'styled-components';
import { useEffect, useMemo, useState } from 'react';
import media from 'styled-media-query';
import { theme } from 'src/styles/theme';
import { resetButtonCSS } from 'src/styles/common';

import getSNXJS from 'src/lib/snxjs';
import exchangeInfoQuery, { Fees, Rates } from 'src/queries/exchangeInfo/useExchangeInfoQuery';

import SynthCard from './SynthCard';
import axios from 'axios';
import { TokenListQueryResponse, TokenListResponse } from 'src/queries/tokenLists/types';
import { keyBy } from 'lodash';

enum SynthCategory {
	ALL = 'all',
	CRYPTO = 'crypto',
	FOREX = 'forex',
}

const SYNTH_CATEGORIES = Object.values(SynthCategory);

const SynthsInfo = () => {
	const [synthCategory, setSynthCategory] = useState<SynthCategory>(SynthCategory.ALL);
	const [tokenList, setTokenList] = useState<TokenListQueryResponse | null>(null);
	const [exchangeInfo, setExchangeInfo] = useState<{ fees: Fees; rates: Rates } | null>(null);
	useEffect(() => {
		axios.get<TokenListResponse>('https://synths.snx.eth.link').then(({ data }) => {
			setTokenList({
				tokens: data.tokens,
				tokensMap: keyBy(data.tokens, 'symbol'),
				symbols: data.tokens.map((token) => token.symbol),
			});
		});
		exchangeInfoQuery().then(setExchangeInfo);
	}, []);

	const synths = getSNXJS().synths;

	const filteredSynths = useMemo(
		() =>
			synthCategory !== SynthCategory.ALL
				? synths.filter((synth) => synth.category.toString() === synthCategory.toString())
				: synths,
		[synths, synthCategory]
	);

	return (
		<>
			<Categories>
				{SYNTH_CATEGORIES.map((category) => {
					const active = synthCategory === category;

					return (
						<Button
							key={category}
							onClick={() => {
								setSynthCategory(active ? SynthCategory.ALL : category);
							}}
							{...{ active }}
						>
							{category}
						</Button>
					);
				})}
			</Categories>
			<Cards>
				{filteredSynths.map((synth) => {
					const currencyKey = synth.name;

					const tokenInfo = tokenList != null ? tokenList.tokensMap[currencyKey] : null;

					const price = exchangeInfo?.rates != null ? exchangeInfo.rates[currencyKey] : null;
					const exchangeFeeRate =
						exchangeInfo?.fees != null ? exchangeInfo.fees[currencyKey] : null;

					return <SynthCard key={currencyKey} {...{ synth, tokenInfo, price, exchangeFeeRate }} />;
				})}
			</Cards>
		</>
	);
};
const Cards = styled.div`
	padding-bottom: 120px;
	display: flex;
	flex-wrap: wrap;

	> * {
		margin: 16px;
	}
`;

const Categories = styled.div`
	display: grid;
	margin-bottom: 40px;
	grid-auto-flow: column;
	justify-content: start;
	grid-gap: 50px;

	${media.lessThan('small')`
		grid-auto-flow: initial;
    	grid-template-columns: repeat(3, auto);
    	margin-bottom: 20px;
		grid-gap: initial;
		justify-content: initial;
		justify-items: start;
	`}
`;

const Button = styled.button<{ active: boolean }>`
	${resetButtonCSS};
	${theme.fonts.tab};

	${media.lessThan('medium')`
		font-size: 12px;
		line-height: 48px;
		margin-right: 18px;
	`}
`;

export default SynthsInfo;
