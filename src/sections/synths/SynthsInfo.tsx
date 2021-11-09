import styled from 'styled-components';
import React, { ReactNodeArray, useState } from 'react';
import media from 'styled-media-query';
import { theme } from 'src/styles/theme';
import { resetButtonCSS } from 'src/styles/common';
import SynthCard from './SynthCard';
import { SynthsProps } from 'pages/synths';

const SynthsInfo = ({ tokenList, exchangeInfo, dictionarySynthStatus, synths }: SynthsProps) => {
	const [synthCategory, setSynthCategory] = useState('all');
	const filteredSynths: Record<string, ReactNodeArray> = {
		all: [],
	};

	synths.forEach((synth) => {
		const category = synth.category.toLowerCase();
		if (!filteredSynths[category]) {
			filteredSynths[category] = [];
		}
		const currencyKey = synth.name;

		const tokenInfo = tokenList != null ? tokenList.tokensMap[currencyKey] : null;

		const price = exchangeInfo?.rates != null ? exchangeInfo.rates[currencyKey] : null;
		const exchangeFeeRate = exchangeInfo?.fees != null ? exchangeInfo.fees[currencyKey] : null;

		filteredSynths.all.push(
			<SynthCard
				key={currencyKey}
				status={dictionarySynthStatus[currencyKey]}
				{...{ synth, tokenInfo, price, exchangeFeeRate }}
			/>
		);

		filteredSynths[category].push(
			<SynthCard
				key={currencyKey}
				status={dictionarySynthStatus[currencyKey]}
				{...{ synth, tokenInfo, price, exchangeFeeRate }}
			/>
		);
	});

	return (
		<>
			<Categories>
				{Object.keys(filteredSynths).map((category) => (
					<Button
						key={category}
						onClick={() => {
							setSynthCategory(category);
						}}
						active={synthCategory === category}
					>
						{category}
					</Button>
				))}
			</Categories>
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
