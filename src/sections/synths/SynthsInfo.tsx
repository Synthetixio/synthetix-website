import styled from 'styled-components';
import React, { ReactNode, useState } from 'react';
import media from 'styled-media-query';
import { theme } from 'src/styles/theme';
import { resetButtonCSS } from 'src/styles/common';
import SynthCard from './SynthCard';
import { SynthsProps } from 'pages/synths';
import { Checkbox } from 'src/components/Checkbox/Checkbox';

const SynthsInfo = ({ l1, l2 }: SynthsProps) => {
	const [showL2, setShowL2] = useState(true);
	const [synthCategory, setSynthCategory] = useState('all');
	const filteredSynths: Record<string, ReactNode[]> = {
		all: [],
	};

	const { synths, exchangeInfo, dictionarySynthStatus } = showL2 ? l2 : l1;
	synths.forEach((synth) => {
		const category = synth.category.toLowerCase();
		if (!filteredSynths[category]) {
			filteredSynths[category] = [];
		}
		const currencyKey = synth.name;

		const price = exchangeInfo?.rates != null ? exchangeInfo.rates[currencyKey] : null;
		const exchangeFeeRate = exchangeInfo?.fees != null ? exchangeInfo.fees[currencyKey] : null;
		filteredSynths.all.push(
			<SynthCard
				key={currencyKey}
				status={dictionarySynthStatus[currencyKey]}
				{...{ synth, price, exchangeFeeRate }}
			/>
		);

		filteredSynths[category].push(
			<SynthCard
				key={currencyKey}
				status={dictionarySynthStatus[currencyKey]}
				{...{ synth, price, exchangeFeeRate }}
			/>
		);
	});

	return (
		<>
			<Categories>
				<Button
					onClick={() => {
						setShowL2(true);
						setSynthCategory('all');
					}}
					active={showL2}
					data-test-id="tab-categories"
				>
					L2 SYNTHS
				</Button>

				<Button
					onClick={() => {
						setShowL2(false);
						setSynthCategory('all');
					}}
					active={!showL2}
					data-test-id="tab-categories"
				>
					L1 SYNTHS
				</Button>
			</Categories>
			<Filters>
				{Object.keys(filteredSynths).map((category) => (
					<Checkbox
						key={category}
						onChange={(checked) => checked && setSynthCategory(category)}
						checked={synthCategory === category}
						label={category}
					/>
				))}
			</Filters>

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
	margin-bottom: 12px;
	grid-auto-flow: column;
	justify-content: start;
	grid-gap: 50px;
	padding-left: 16px;
`;

const Filters = styled.div`
	display: flex;
	margin-bottom: 40px;
	justify-content: start;
	align-items: center;
	flex-wrap: wrap;
	gap: 28px;
	padding: 0 16px;
	text-transform: uppercase;

	${media.lessThan('small')` {
		gap: 18px;
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
