import styled from 'styled-components';
import React, { ReactNodeArray, useEffect, useMemo, useState } from 'react';
import media from 'styled-media-query';
import { theme } from 'src/styles/theme';
import { resetButtonCSS, SectionTitle } from 'src/styles/common';

import getSNXJS from 'src/lib/snxjs';
import exchangeInfoQuery, { Fees, Rates } from 'src/queries/exchangeInfo/useExchangeInfoQuery';

import SynthCard from './SynthCard';
import axios from 'axios';
import { TokenListQueryResponse, TokenListResponse } from 'src/queries/tokenLists/types';
import { keyBy } from 'lodash';
import useMarketClosed from 'src/hooks/useMarketClosed';

enum SynthCategory {
	ALL = 'all',
	CRYPTO = 'crypto',
	FOREX = 'forex',
	INDEX = 'index',
}

enum SynthStatus {
	LIVE = 'live',
	FROZEN = 'frozen',
	PAUSED = 'paused',
}

const SYNTH_CATEGORIES = Object.values(SynthCategory);

const SynthsInfo = () => {
	const [synthCategory, setSynthCategory] = useState<SynthCategory>(SynthCategory.ALL);
	const [tokenList, setTokenList] = useState<TokenListQueryResponse | null>(null);
	const [exchangeInfo, setExchangeInfo] = useState<{ fees: Fees; rates: Rates } | null>(null);
	const [dictionarySynthClosed, setDictionarySynthClosed] = useState<Record<
		string,
		SynthStatus
	> | null>(null);
	const synths = getSNXJS().synths;

	useEffect(() => {
		axios.get<TokenListResponse>('https://synths.snx.eth.link').then(({ data }) => {
			setTokenList({
				tokens: data.tokens,
				tokensMap: keyBy(data.tokens, 'symbol'),
				symbols: data.tokens.map((token) => token.symbol),
			});
		});
		exchangeInfoQuery().then(setExchangeInfo);
		synths.forEach((synth) => {
			useMarketClosed(synth.name).then((marketClosed) => {
				if (marketClosed.isCurrencyFrozen) {
					setDictionarySynthClosed((state) => {
						return { ...state, [synth.name]: SynthStatus.FROZEN };
					});
				} else if (marketClosed.isMarketClosed) {
					setDictionarySynthClosed((state) => {
						return { ...state, [synth.name]: SynthStatus.PAUSED };
					});
				}
				setDictionarySynthClosed((state) => {
					return { ...state, [synth.name]: SynthStatus.LIVE };
				});
			});
		});
	}, []);

	const filteredSynths: Record<SynthCategory, ReactNodeArray> = {
		all: [],
		crypto: [],
		forex: [],
		index: [],
	};

	if (dictionarySynthClosed) {
		synths.forEach((synth) => {
			const currencyKey = synth.name;

			const tokenInfo = tokenList != null ? tokenList.tokensMap[currencyKey] : null;

			const price = exchangeInfo?.rates != null ? exchangeInfo.rates[currencyKey] : null;
			const exchangeFeeRate = exchangeInfo?.fees != null ? exchangeInfo.fees[currencyKey] : null;

			const category = synth.category.toLowerCase();

			filteredSynths.all.push(
				<SynthCard
					key={currencyKey}
					status={dictionarySynthClosed[currencyKey]}
					{...{ synth, tokenInfo, price, exchangeFeeRate }}
				/>
			);

			filteredSynths[category as SynthCategory].push(
				<SynthCard
					key={currencyKey}
					status={dictionarySynthClosed[currencyKey]}
					{...{ synth, tokenInfo, price, exchangeFeeRate }}
				/>
			);
		});
	}
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
			{!filteredSynths.all.length && <SectionTitle>Loading...</SectionTitle>}
			<Cards>{filteredSynths[synthCategory]}</Cards>
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
