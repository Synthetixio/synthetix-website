import { FlexDiv, FlexDivCol, Section, SectionTitle } from 'src/styles/common';
import styled from 'styled-components';
import media from 'styled-media-query';

const USPS = [
	{
		label: 'Best Price Execution',
		description:
			'Traders using platforms tied into the Synthetix protocol for perpetual futures contracts are guaranteed to have some of the best price execution available, with little to no slippage and fills you can’t get elsewhere.',
		picture: '/home/futures/usp/hook.svg',
	},
	{
		label: 'Lowest Downtime & Liquidation Risk',
		description:
			'Users are unlikely to experience the downtime seen on CEXs during periods of high volatility. Because our synths are merely reflections of price action, the risk of cascading liquidations due to forced selloffs is eliminated.',
		picture: '/home/futures/usp/clock.svg',
	},
	{
		label: 'Simulated Liquidity',
		description:
			'Simulated liquidity is the fundamental algorithm behind all synthetic assets available for trading on the Synthetix protocol. It ensures that traders get great liquidity with low to no slippage across any asset pair with up to 10x leverage.',
		picture: '/home/futures/usp/simulated.svg',
	},
	{
		label: 'Secure Layer 2',
		description:
			'As an EVM equivalent solution, OE ensures that the security of Ethereum Mainnet is carried over to Layer 2. Simple code means your funds are as secure as keeping them on mainnet, without the cost of gas.',
		picture: '/home/futures/usp/optimism.svg',
	},
	{
		label: 'Any Asset Class',
		description:
			'Get all the benefits of DeFi with a fully on-chain permissionless futures trading experience across a number of asset classes. Get leveraged exposure to price action in any market and trade between crypto tokens, commodities, currencies and more all in one place. ',
		picture: '/home/futures/usp/chain.svg',
	},
	{
		label: 'Low Gas and Fees',
		description:
			'Built on Optimistic Ethereum, your gas goes further with gas prices that are considerably lower than L1 and transactions that happen almost instantaneously.',
		picture: '/home/futures/usp/gas-station.svg',
	},
];

export default function USP() {
	return (
		<USPSection customMaxWidth>
			<USPSectionTitle>Trade Perpetual Futures Like the Best</USPSectionTitle>
			<USPWrapper>
				{USPS.map((USP) => (
					<FlexDiv key={USP.label}>
						<USPBox>
							<img src={USP.picture} alt="unique selling point" />
						</USPBox>
						<FlexDivCol>
							<USPHeadline>{USP.label}</USPHeadline>
							<USPSubline>{USP.description}</USPSubline>
						</FlexDivCol>
					</FlexDiv>
				))}
			</USPWrapper>
		</USPSection>
	);
}

const USPSection = styled(Section)`
	padding: 0 120px 120px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.bgBlackHighlighted};
	${media.lessThan('medium')`
		padding: 16px;
		padding-top: 80px;
	`}
`;

const USPSectionTitle = styled(SectionTitle)`
	text-align: center;
	margin-bottom: 80px;
	${media.lessThan('medium')`
	margin-bottom: 40px;
	`}
`;

const USPWrapper = styled.article`
	max-width: 1920px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 23px;
	justify-items: center;

	${media.lessThan('medium')`
		display: flex;
		flex-direction: column;
	`}
`;

const USPBox = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px;
	margin-right: 26px;
	width: 93px;
	height: 93px;
	min-width: 93px;
	min-height: 93px;
	border: 2px solid ${({ theme }) => theme.colors.cyan};
	border-radius: 10px;
	box-shadow: 0px 0px 14px ${({ theme }) => theme.colors.cyan};
`;

const USPHeadline = styled.h4`
	color: ${({ theme }) => theme.colors.cyan};
`;

const USPSubline = styled.span``;
