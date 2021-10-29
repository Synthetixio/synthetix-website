import styled from 'styled-components';
import { Button } from '../../components';
import media from 'styled-media-query';
import Accordion, { AccordionItemsType } from 'src/components/Accordion/Accordion';
import { useState } from 'react';
import { FlexDiv, Line, Section, SectionTitle } from 'src/styles/common';

const SynthSection = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const graphics = [
		<SynthGraphicAbsolute src="home/illustration-synths.svg" key="home/illustration-synths.svg" />,
		<SynthGraphic src="/home/earn.svg" key="/home/earn.svg" />,
		<SynthGraphic src="/home/trade-synths.svg" key="/home/trade-synths.svg" />,
		<SynthGraphic src="/home/build-circle.svg" key="/home/build-circle.svg" />,
	];

	return (
		<SynthContainer>
			<Left>
				<SectionTitle>Why Synthetix</SectionTitle>
				<Accordion
					items={accordionItems}
					activeIndex={activeIndex}
					onAccordionItemChange={setActiveIndex}
				/>
			</Left>
			{graphics[activeIndex]}
			<Line />
		</SynthContainer>
	);
};

const SynthContainer = styled(Section)`
	min-height: 700px;
	display: flex;
	align-items: center;
	padding: 0 0 0 153px;

	${media.lessThan('medium')`
		flex-direction: column-reverse;
		justify-content: flex-end;
		align-items: flex-start;
		min-height: 1000px;
		padding: 0 40px;
	`}

	${media.lessThan('small')`
		min-height: 1000px;
	`}

	${media.lessThan('320px' as any)`
		min-height: 1100px;
	`}
`;

const Left = styled.div`
	max-width: 480px;
	height: 364px;
	margin-right: auto;
`;

const SynthGraphicAbsolute = styled.img`
	height: 444px;
	position: absolute;
	right: -100px;
	pointer-events: none;
	${(props) => props.theme.animations.show};
	animation-delay: 100ms;
	opacity: 0;

	${media.lessThan('1100px' as any)`
		left: 480px;
	`}

	${media.lessThan('medium')`
		position: static;
		margin-bottom: 16px;
	`}

	${media.lessThan('550px' as any)`
		transform: translate(-250px)
	`}
`;

const SynthGraphic = styled.img`
	height: 500px;
	pointer-events: none;
	${(props) => props.theme.animations.show};
	animation-delay: 100ms;
	opacity: 0;
	margin-right: 100px;

	${media.lessThan('large')`
		margin-right: 0;
		height: 400px;
	`}

	${media.lessThan('950px' as any)`
		height: 300px;
	`}

	${media.lessThan('medium')`
		width: 100%;
		height: 444px;
		margin-bottom: 16px;
		transform: none;
		`}
`;

const BuildButton = styled(Button)<{ margin?: string }>`
	margin: ${({ margin }) => (margin ? margin : '29px 14px 0px 0px')};
	width: 147px;
	height: 56px;

	${media.lessThan('medium')`
		width: 100%;
		height: 40px;
		max-width: 224px;
	`};
`;

const FlexDivRowResponsive = styled(FlexDiv)`
	${media.lessThan('medium')`
		width: 100%;
	`};
`;

const accordionItems: AccordionItemsType[] = [
	{
		title: 'Synthetix Assets',
		descriptions: [
			<div key="synthetix-assets-description-one">
				Capture the price movements of popular cryptocurrencies, fiat currencies, stocks,
				commodities and more with zero slippage.
			</div>,
			<br key="synthetix-assets-description-two" />,
			<div key="synthetix-assets-description-three">
				Synthetic assets, or Synths, are assets voted into existence by the community and can come
				in the form of fiat currencies, cryptocurrencies, stocks, commodities and anything else with
				a price.
			</div>,
		],
		buttons: [
			<BuildButton
				buttonType="secondary"
				link="/synths"
				external={false}
				key="synthetix-assets-description-four"
				margin="19px 0px 0px"
			>
				EXPLORE SYNTHS
			</BuildButton>,
		],
	},
	{
		title: 'Stake & Earn',
		descriptions: [
			<div key="stake-earn">
				Staking SNX provides collateral for the debt pool and earns weekly rewards that are a
				combination of protocol fees and inflationary supply.
			</div>,
		],
		buttons: [
			<FlexDivRowResponsive key="stake-earn-buttons">
				<BuildButton buttonType="primary" link="https://staking.synthetix.io/" external={true}>
					STAKE NOW
				</BuildButton>
				<BuildButton buttonType="secondary" link="https://docs.synthetix.io/" external={true}>
					DOCS
				</BuildButton>
			</FlexDivRowResponsive>,
		],
	},
	{
		title: 'Trade Synth',
		descriptions: [
			<div key="trade-synth">
				Trade any synths with low to no slippage and deep liquidity in every asset. Available in
				spot and futures markets.
			</div>,
		],
		buttons: [
			<BuildButton
				buttonType="primary"
				link="https://kwenta.io/"
				external={true}
				key="trade-synth-button"
				margin="19px 0px 0px"
			>
				EXCHANGE SYNTHS
			</BuildButton>,
		],
	},
	{
		title: 'Build',
		descriptions: [
			<div key="build-synths">
				With improved composability, we welcome builders to leverage the protocol and bootstrap your
				community through Synthetix.
			</div>,
		],
		buttons: [
			<BuildButton
				buttonType="secondary"
				link="https://docs.synthetix.io/"
				external={true}
				key="build-synths-buttons"
			>
				DOCS
			</BuildButton>,
		],
	},
];

export default SynthSection;
