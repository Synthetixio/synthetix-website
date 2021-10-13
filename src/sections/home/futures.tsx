import styled from 'styled-components';
import { Section, Button } from '../../components';
import { v4 as uuidv4 } from 'uuid';
import media from 'styled-media-query';
import Accordion, { AccordionItemsType } from 'src/components/Accordion/Accordion';
import { useState } from 'react';
import { FlexDivCol, SectionTitle } from 'src/styles/common';

const FuturesSection = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	return (
		<FuturesContainer>
			<Left>
				<FadeToBlack ltr={false} />
				<FadeToBlack ltr={true} />
			</Left>
			<AccordionContainer>
				<FuturesHeadLine>
					Decentralized <br /> Perpetual Futures
				</FuturesHeadLine>
				<Accordion
					items={accordionItems}
					activeIndex={activeIndex}
					onAccordionItemChange={setActiveIndex}
				/>
				<BuildButton buttonType="primary" link="" external={false}>
					Trade Now
				</BuildButton>
			</AccordionContainer>
		</FuturesContainer>
	);
};

const FuturesContainer = styled(Section)`
	min-height: 700px;
	position: relative;
	background-color: ${({ theme }) => theme.colors.bgBlackHighlighted};
	display: flex;
	justify-content: center;
	align-items: center;
	padding-right: 153px;

	${media.lessThan('large')`
		padding-right: 40px;
		min-height: 800px;
	`}

	${media.lessThan('medium')`
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		background-color: transparent;
		padding: 0 40px;
	`}
`;

const FuturesHeadLine = styled(SectionTitle)`
	${({ theme }) => theme.fonts.smallHeadline}
	font-size: 32px;
	text-align: start;
`;

const Left = styled.div`
	position: relative;
	width: 100%;
	min-height: 430px;
	max-width: 766px;
	right: 0;
	background-image: url('/home/graph.svg');
	background-repeat: no-repeat;
	background-position: right;
	background-size: contain;

	${media.lessThan('large')`
		background-size: contain;
	`}

	${media.lessThan('medium')`
		background-size: contain;
		position: absolute;
		right: 0;
		left: 0;
	`}

	${media.lessThan('small')`
		background-size: contain;
	`}
`;

const AccordionContainer = styled(FlexDivCol)`
	max-width: 596px;
	width: 100%;
	${media.lessThan('medium')`
		min-width: unset;
		width: 100%;
		margin-top: 430px;
	`}
`;

const BuildButton = styled(Button)`
	width: 146px;
	height: 43px;
	margin-top: 32px;
`;

const FadeToBlack = styled.div<{ ltr: boolean }>`
	position: absolute;
	top: 10px;
	bottom: 10px;
	z-index: 10;
	width: 150px;

	${({ ltr, theme }) =>
		ltr
			? `right: 0px; background: linear-gradient(90deg, transparent, ${theme.colors.bgBlackHighlighted} 90%);`
			: `left: 0px; background: linear-gradient(90deg, ${theme.colors.bgBlackHighlighted} 20%, transparent);`}

	${({ ltr, theme }) => {
		if (!ltr)
			return media.lessThan('medium')`
			display: none;`;
		else
			return media.lessThan('medium')`
			background: linear-gradient(90deg, transparent, ${theme.colors.bgBlack} 90%);
			`;
	}}

	${media.lessThan('small')`
		width: 50px;
	`};
`;

const accordionItems: AccordionItemsType = [
	{
		title: 'Best Price Execution',
		descriptions: [
			<div key={uuidv4()}>
				Leveraging the Synthetix debt pool and our innovative liquidity framework, our traders are
				guaranteed to have some of the best price execution around, with little to no slippage and
				fills you can’t get elsewhere.
			</div>,
		],
	},
	{
		title: 'Lowest Downtime & Liquidation Risk',
		descriptions: [
			<div key={uuidv4()}>
				Say goodbye to downtime during periods of high volatility. As an added bonus, our futures
				contracts remove the risk of cascading liquidations due to forced selloffs.
			</div>,
		],
	},
	{
		title: 'Permissionless & Composable',
		descriptions: [
			<div key={uuidv4()}>
				Get all the benefits of DeFi with a fully on-chain permissionless futures trading
				experience. Looking to build with leveraged perpetual futures contracts? Learn more about
				how to integrate perpetual futures powered by Synthetix into your project.
			</div>,
		],
	},
];

export default FuturesSection;
