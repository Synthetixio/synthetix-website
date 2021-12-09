import styled from 'styled-components';
import { Button } from '../../components';
import media from 'styled-media-query';
import Accordion, { AccordionItemsType } from 'src/components/Accordion/Accordion';
import { useState } from 'react';
import { FlexDivCol, Section, SectionTitle } from 'src/styles/common';

const FuturesSection = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	return (
		<FuturesContainer id="futures">
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
				<BuildButton buttonType="primary" link="/futures" external={false} size="medium">
					Learn More
				</BuildButton>
			</AccordionContainer>
		</FuturesContainer>
	);
};

const FuturesContainer = styled(Section)`
	min-height: 600px;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 153px;
	padding-top: 50px;

	${media.lessThan('large')`
		padding-right: 40px;
		min-height: 800px;
	`}

	${media.lessThan('medium')`
		min-height: 950px;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		background-color: transparent;
		padding: 0 40px;
	`}
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
		background-size: cover;
		position: absolute;
		right: 0;
		left: 0;
	`}

	${media.lessThan('small')`
		background-size: contain;
		transform: scale(1.2);
	`}
`;

const AccordionContainer = styled(FlexDivCol)`
	max-width: 596px;
	height: 470px;
	width: 100%;

	${media.lessThan('medium')`
		min-width: unset;
		width: 100%;
		margin-top: 450px;
	`}

	${media.lessThan('small')`
	margin-top: 400px;
		height: 580px;
	`}
`;

const BuildButton = styled(Button)`
	width: 146px;
	height: 43px;
	margin-top: 32px;
`;

const FadeToBlack = styled.div<{ ltr: boolean }>`
	position: absolute;
	top: 0;
	bottom: 60px;
	z-index: 10;
	width: 150px;

	${media.lessThan('large')`
		width: 80px;
	`}

	${({ ltr, theme }) =>
		ltr
			? /* We can't use the keyword `transparent` here cause Safari thinks transparent is fade to black and not
			fade to color from the parent node that has a specified background color. 
			https://ambientimpact.com/web/snippets/safari-bug-with-gradients-that-fade-to-transparent */
			  `right: 0px; background: linear-gradient(90deg, rgba(6, 6, 27, 0), ${theme.colors.bgBlack} 90%);`
			: `left: 0px; background: linear-gradient(90deg, ${theme.colors.bgBlack} 20%, rgba(6, 6, 27, 0));`}

	${({ ltr, theme }) => {
		if (!ltr)
			return media.lessThan('medium')`
			display: none;`;
		else
			return media.lessThan('medium')`
			width: 100px;
			background: linear-gradient(90deg, transparent, ${theme.colors.bgBlack} 70%);
			`;
	}}
`;

const accordionItems: AccordionItemsType[] = [
	{
		title: 'Best Price Execution',
		descriptions: [
			<div key="Best Price Execution">
				Leveraging the Synthetix debt pool and our innovative liquidity framework, our traders are
				guaranteed to have some of the best price execution around, with little to no slippage and
				fills you can’t get elsewhere.
			</div>,
		],
	},
	{
		title: 'Lowest Downtime & Liquidation Risk',
		descriptions: [
			<div key="Lowest Downtime & Liquidation Risk">
				Say goodbye to downtime during periods of high volatility. As an added bonus, our futures
				contracts remove the risk of cascading liquidations due to forced selloffs.
			</div>,
		],
	},
	{
		title: 'Permissionless & Composable',
		descriptions: [
			<div key="Permissionless & Composable">
				Get all the benefits of DeFi with a fully on-chain permissionless futures trading
				experience. Looking to build with leveraged perpetual futures contracts? Learn more about
				how to integrate perpetual futures powered by Synthetix into your project.
			</div>,
		],
	},
];

export default FuturesSection;
