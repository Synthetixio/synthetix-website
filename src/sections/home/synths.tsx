import styled from 'styled-components';
import { Section, Button } from '../../components';
import media from 'styled-media-query';
import Accordion, { AccordionItemsType } from 'src/components/Accordion/Accordion';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { FlexDiv } from 'src/styles/common';

const SynthSection = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const graphics = [
		<SynthGraphicAbsolute src="home/illustration-synths.svg" key={uuidv4()} />,
		<SynthGraphic src="/home/earn.svg" key={uuidv4()} />,
		<SynthGraphic src="/home/trade-synths.svg" key={uuidv4()} />,
		<SynthGraphic src="/home/build-circle.svg" key={uuidv4()} />,
	];

	return (
		<SynthContainer>
			<Left>
				<SynthHeadLine>Why Synthetix</SynthHeadLine>
				<Accordion
					items={accordionItems}
					activeIndex={activeIndex}
					onAccordionItemChange={setActiveIndex}
				/>
			</Left>
			{graphics[activeIndex]}
		</SynthContainer>
	);
};

const SynthContainer = styled(Section)`
	min-height: 800px;
	display: flex;
	align-items: center;
	padding: 0 153px;

	${media.lessThan('medium')`
		flex-direction: column-reverse;
		justify-content: flex-end;
		align-items: flex-start;
		min-height: 1000px;
		padding: 0 40px;
	`}

	${media.lessThan('small')`
		min-height: 1150px;
	`}
`;

const SynthHeadLine = styled.h4`
	${({ theme }) => theme.fonts.sectionTitle}
	margin-bottom: 14px;

	${media.lessThan('medium')`
		font-size: 24px;
		line-height: 28px;
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
	height: 444px;
	pointer-events: none;
	${(props) => props.theme.animations.show};
	animation-delay: 100ms;
	opacity: 0;

	${media.lessThan('medium')`
		width: 100%;
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
				link="/synths"
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
			<div key={uuidv4()}>
				Trade any synths with low to no slippage and deep liquidity in every asset. Available in
				spot and futures markets.
			</div>,
		],
		buttons: [
			<BuildButton
				buttonType="primary"
				link="https://kwenta.io/"
				external={true}
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
			<BuildButton
				buttonType="secondary"
				link="https://docs.synthetix.io/"
				external={true}
				key={uuidv4()}
			>
				DOCS
			</BuildButton>,
		],
	},
];

export default SynthSection;
