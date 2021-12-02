import { PerpetualSynth } from 'pages/futures';
import { useState } from 'react';
import { Button } from 'src/components';
import FutureSynthCard from 'src/components/FutureSynthCard';
import { resetButtonCSS, Section, SectionTitle, Subline } from 'src/styles/common';
import { theme } from 'src/styles/theme';
import styled from 'styled-components';
import media from 'styled-media-query';

export default function Perpetuals(props: Record<'synths', PerpetualSynth[]>) {
	const [activeTab, setActiveTab] = useState('all');
	let tabs: string[] = ['all'];
	const synthsDictionary: Record<string, JSX.Element[]> = {
		all: [],
	};
	props.synths.forEach((synth) => {
		if (!tabs.includes(synth.category)) {
			tabs.push(synth.category);
			synthsDictionary[synth.category] = [];
		}
		synthsDictionary[synth.category].push(<FutureSynthCard key={synth.name} {...synth} />);
		synthsDictionary.all.push(<FutureSynthCard key={synth.name} {...synth} />);
	});
	return (
		<PerpetualsSection customMaxWidth>
			<SectionTitle>TRADING PERPETUALS</SectionTitle>
			<PerpetualSubline>
				Leveraging the Synthetix debt pool and our innovative liquidity framework, our traders are
				guaranteed to have some of the best price execution around, with little to no slippage and
				fills you can’t get elsewhere.
			</PerpetualSubline>
			<Categories>
				{tabs.map((tab) => (
					<TabButton key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
						{tab}
					</TabButton>
				))}
			</Categories>
			<CategoriesContent>{synthsDictionary[activeTab]}</CategoriesContent>
			<BuildButton link="https://kwenta.io/" external={true}>
				TRADE PERPETUAL FUTURES
			</BuildButton>
		</PerpetualsSection>
	);
}

const PerpetualsSection = styled(Section)`
	padding: 70px 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.bgBlackHighlighted};
`;

const PerpetualSubline = styled(Subline)`
	max-width: 710px;
`;

const Categories = styled.div`
	width: 100%;
	max-width: 800px;
	display: flex;
	margin: 40px 0px;
	justify-content: center;
`;

const CategoriesContent = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	max-width: 1920px;
`;

const TabButton = styled.button<{ active: boolean }>`
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

const BuildButton = styled(Button)`
	width: 687px;
	height: 56px;
	color: black;
	margin: 60px;
	background-color: ${({ theme }) => theme.colors.cyan};
	box-shadow: 0px 0px 10px rgba(0, 209, 255, 0.9);
	border-radius: 4px;

	${media.lessThan('medium')`
		width: 95%;
	`}
`;
