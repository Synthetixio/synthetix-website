import styled from 'styled-components';
import { Section, Button, ResponsiveLine } from '../../components';
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
				<SectionTitle>
					Decentralized <br /> Perpetual Futures
				</SectionTitle>
				<Accordion
					items={accordionItems}
					activeIndex={activeIndex}
					onAccordionItemChange={setActiveIndex}
				/>
				<BuildButton buttonType="primary" link="" external={false}>
					Trade Now
				</BuildButton>
			</AccordionContainer>
			<ResponsiveLine />
		</FuturesContainer>
	);
};

const FuturesContainer = styled(Section)`
	width: 100%;
	min-height: 800px;
	position: relative;
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-right: 109px;

	${media.lessThan('large')`
		padding: 0 8px ;
	`}

	${media.lessThan('medium')`
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		background-color: transparent;
	`}
`;

const Left = styled.div`
	position: relative;
	width: 100%;
	min-height: 430px;
	max-width: 766px;
	background-image: url('/home/graph.svg');
	background-repeat: no-repeat;
	background-position: right;

	${media.lessThan('small')`
		min-height: 300px;
		background-size: contain;
	`}
`;

const AccordionContainer = styled(FlexDivCol)`
	max-width: 600px;
	${media.lessThan('large')`
		max-width: 700px;
		padding: 0 8px;
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

	${media.lessThan('small')`
		width: 50px;
	`};

	${({ ltr, theme }) =>
		ltr
			? `right: 0px; background: linear-gradient(90deg, transparent, ${theme.colors.bgBlack} 90%);`
			: `left: 0px; background: linear-gradient(90deg, ${theme.colors.bgBlack} 20%, transparent);`}
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
