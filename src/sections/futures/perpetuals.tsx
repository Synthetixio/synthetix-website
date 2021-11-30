import { JSXElement } from '@babel/types';
import { PerpetualSynth } from 'pages/futures';
import { useState } from 'react';
import FutureSynthCard from 'src/components/FutureSynthCard';
import { resetButtonCSS, Section, SectionTitle, Subline } from 'src/styles/common';
import { theme } from 'src/styles/theme';
import styled from 'styled-components';
import media from 'styled-media-query';

export default function Perpetuals(props: Record<'synths', PerpetualSynth[]>) {
	const [activeTab, setActiveTab] = useState('all');
	let tabs: string[] = ['all'];
	const synthsDictionary: Record<string, JSXElement[]> = {
		all: [],
	};
	props.synths.forEach((synth) => {
		if (!tabs.includes(synth.category)) {
			tabs.push(synth.category);
			synthsDictionary[synth.category] = [];
		}
		synthsDictionary.all.push();
	});
	return (
		<PerpetualsSection>
			<SectionTitle>TRADING PERPETUALS</SectionTitle>
			<PerpetualSubline>
				Leveraging the Synthetix debt pool and our innovative liquidity framework, our traders are
				guaranteed to have some of the best price execution around, with little to no slippage and
				fills you can’t get elsewhere.
			</PerpetualSubline>
			<Categories>
				<div>
					{tabs.map((tab) => (
						<Button key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
							{tab}
						</Button>
					))}
				</div>
				<CategoriesContent>
					{synthsDictionary[activeTab].map((synth) => (
						<FutureSynthCard />
					))}
				</CategoriesContent>
			</Categories>
		</PerpetualsSection>
	);
}

const PerpetualsSection = styled(Section)`
	padding-top: 70px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const PerpetualSubline = styled(Subline)`
	max-width: 710px;
`;

const Categories = styled.div`
	width: 100%;
	max-width: 800px;
	display: flex;
	margin-bottom: 40px;
	justify-content: center;
`;

const CategoriesContent = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
`;

const Button = styled.button<{ active: boolean }>`
	${resetButtonCSS};
	${theme.fonts.tab};
	margin: auto;
	text-transform: uppercase;

	${media.lessThan('medium')`
		font-size: 12px;
		line-height: 48px;
		margin-right: 18px;
	`}
`;
