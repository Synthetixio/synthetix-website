import styled from 'styled-components';
import { Section, Line, Button } from '../../components';
import media from 'styled-media-query';
import Accordion, { AccordionItemsType } from 'src/components/Accordion/Accordion';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { FlexDiv, FlexDivRow, SectionTitle } from 'src/styles/common';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from 'src/styles/media';

const SynthSection = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const isMobile = useMediaQuery({ query: `(max-width: ${breakpoints.md}px)` });

	const graphics = [
		<SynthGraphic isAbsolute src="home/illustration-synths.svg" key={uuidv4()} />,
		<SynthGraphic src="/home/earn.svg" key={uuidv4()} />,
		<SynthGraphic src="/home/trade-synths.svg" key={uuidv4()} />,
		<SynthGraphic
			src={isMobile ? '/home/build-circle-mobile.svg' : '/home/build-circle.svg'}
			key={uuidv4()}
		/>,
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
			<ResponsiveLine />
		</SynthContainer>
	);
};

const SynthContainer = styled(Section)`
	min-height: 891px;
	background-color: #0e052f;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	${media.lessThan('large')`
		padding: 0 0 0 76px;
	`}

	${media.lessThan('medium')`
		flex-direction: column;
		justify-content: flex-start;
		background-color: transparent;
		min-height: 1100px;
		padding: 0 8px;
	`}
`;

const ResponsiveLine = styled(Line)`
	${media.lessThan('medium')`
		display:none;
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
		margin-left: auto;
		margin-right: auto;
		margin-top: 60px;

		p {
			text-align: center;
			max-width: 100%;
		}

		br {
			margin: 8px 0px;
		}
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

	${media.lessThan('970px' as any)`
		transform: translate(150px)
	`}

	${media.greaterThan('1350px' as any)`
		height: 35vw;
		right: -120px;
	`}

	${({ isAbsolute }) => {
		return isAbsolute
			? media.lessThan('medium')`
		position: static;
		transform: translate(-150px);
		margin-bottom: 16px;
		transform: none
		`
			: media.lessThan('medium')`
		width: 100%;
		margin-bottom: 16px;
		transform: none;
		`;
	}}
`;

const BuildButton = styled(Button)<{ margin?: string }>`
	margin: ${({ margin }) => (margin ? margin : '19px 0px 30px')};
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
			<BuildButton buttonType="secondary" link="" external={false} key={uuidv4()}>
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
			<FlexDivRowResponsive>
				<BuildButton
					buttonType="primary"
					link=""
					external={false}
					key={uuidv4()}
					margin="29px 14px 56px 0px"
				>
					STAKE NOW
				</BuildButton>
				<BuildButton
					buttonType="secondary"
					link=""
					external={false}
					key={uuidv4()}
					margin="29px 14px 56px 0px"
				>
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
			<BuildButton buttonType="primary" link="" external={false} key={uuidv4()}>
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
				link=""
				external={false}
				key={uuidv4()}
				margin="30px 14px 0px 0px"
			>
				DOCS
			</BuildButton>,
		],
	},
];

export default SynthSection;
