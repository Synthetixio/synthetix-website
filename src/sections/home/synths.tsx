import styled from 'styled-components';
import { Section, Button } from '../../components';
import media from 'styled-media-query';
import Accordion, { AccordionItemsType } from 'src/components/Accordion/Accordion';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { FlexDiv, SectionTitle } from 'src/styles/common';

const SynthSection = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const graphics = [
		<SynthGraphic isAbsolute src="home/illustration-synths.svg" />,
		<SynthGraphic src="/home/earn.svg" />,
		<SynthGraphic src="/home/trade-synths.svg" />,
		<SynthGraphic src="/home/build-circle.svg" />,
	];

	return (
		<SynthContainer>
			{graphics[activeIndex]}
			<Left>
				<SectionTitle>Why Synthetix</SectionTitle>
				<Accordion
					items={accordionItems}
					activeIndex={activeIndex}
					onAccordionItemChange={setActiveIndex}
				/>
			</Left>
		</SynthContainer>
	);
};

const SynthContainer = styled(Section)`
	min-height: 891px;
	background-color: ${({ theme }) => theme.colors.bgBlackHighlighted};
	display: flex;
	justify-content: flex-end;
	align-items: center;

	${media.lessThan('large')`
		padding: 0 0 0 76px;
	`}

	${media.lessThan('medium')`
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		background-color: transparent;
		min-height: 1000px;
		padding: 0 8px;
	`}
`;

const Left = styled.div`
	max-width: 480px;
	height: 364px;
	position: absolute;
	left: 0;
	margin-left: 50px;
	margin-top: -84px;

	${media.greaterThan('1350px' as any)`
		margin-right: 175px;
	`}

	${media.lessThan('medium')`
		position: relative;
		margin-top: 60px;
		margin-left:0px;
	`}
`;

const SynthGraphic = styled.img<{ isAbsolute?: boolean }>`
	height: 444px;
	position: ${({ isAbsolute }) => (isAbsolute ? 'absolute' : '')};
	right: -250px;
	pointer-events: none;
	${(props) => props.theme.animations.show};
	animation-delay: 100ms;
	opacity: 0;

	${media.greaterThan('1350px' as any)`
		height: 35vw;
		right: -120px;
	`}

	${media.lessThan('970px' as any)`
		transform: translate(150px)
	`}

	${({ isAbsolute }) => {
		return isAbsolute
			? media.lessThan('medium')`
		position: static;
		transform: translate(0px);
		margin-bottom: 16px;

		${media.lessThan('550px' as any)`
		transform: translate(-150px)
	`}

		`
			: media.lessThan('medium')`
		width: 100%;
		margin-bottom: 16px;
		transform: none;
		`;
	}}
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

const accordionItems: AccordionItemsType = [
	{
		title: 'Synthetix Assets',
		descriptions: [
			<div key={uuidv4()}>
				Capture the price movements of popular cryptocurrencies, fiat currencies, stocks,
				commodities and more with zero slippage.
			</div>,
			<br key={uuidv4()} />,
			<div key={uuidv4()}>
				Synthetic assets, or Synths, are assets voted into existence by the community and can come
				in the form of fiat currencies, cryptocurrencies, stocks, commodities and anything else with
				a price.
			</div>,
		],
		buttons: [
			<BuildButton
				buttonType="secondary"
				link=""
				external={false}
				key={uuidv4()}
				margin="19px 0px 0px"
			>
				EXPLORE SYNTHS
			</BuildButton>,
		],
	},
	{
		title: 'Stake & Earn',
		descriptions: [
			<div key={uuidv4()}>
				Staking SNX provides collateral for the debt pool and earns weekly rewards that are a
				combination of protocol fees and inflationary supply.
			</div>,
		],
		buttons: [
			<FlexDivRowResponsive key={uuidv4()}>
				<BuildButton buttonType="primary" link="" external={false}>
					STAKE NOW
				</BuildButton>
				<BuildButton buttonType="secondary" link="" external={false}>
					DOCS
				</BuildButton>
			</FlexDivRowResponsive>,
		],
	},
	{
		title: 'Trade Synth',
		descriptions: [
			<div key={uuidv4()}>
				Trade any synths with low to no slippage and deep liquidity in every asset. Available in
				spot and futures markets.
			</div>,
		],
		buttons: [
			<BuildButton
				buttonType="primary"
				link=""
				external={false}
				key={uuidv4()}
				margin="19px 0px 0px"
			>
				EXCHANGE SYNTHS
			</BuildButton>,
		],
	},
	{
		title: 'Build',
		descriptions: [
			<div key={uuidv4()}>
				With improved composability, we welcome builders to leverage the protocol and bootstrap your
				community through Synthetix.
			</div>,
		],
		buttons: [
			<BuildButton buttonType="secondary" link="" external={false} key={uuidv4()}>
				DOCS
			</BuildButton>,
		],
	},
];

export default SynthSection;
