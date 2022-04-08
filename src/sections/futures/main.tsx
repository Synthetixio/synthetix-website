import { Button } from 'src/components';
import { headerHeight } from 'src/components/Header';
import { FlexDiv, PageTitle, Section, Subline } from 'src/styles/common';
import styled from 'styled-components';
import media from 'styled-media-query';

export default function FuturesMain() {
	return (
		<FuturesMainSection>
			<FuturesContentWrapper>
				<PageTitle>
					Decentralized <br />
					Perpetual <br />
					Futures
				</PageTitle>
				<FuturesMainSubline>
					Many platforms already leverage the deep liquidity and composability of Synthetix to
					deliver better trades with lower slippage, hedging, and other unique use cases.&nbsp;
					<b>Synthetix perpetual futures are available exclusively through Kwenta.</b>
				</FuturesMainSubline>
				<BuildButtonWrapper>
					<BuildButton link="https://kwenta.io" size="medium" isFirst>
						Start Trading
					</BuildButton>
					<BuildButton link="https://discord.com/invite/AEdUHzt" size="medium">
						Discord
					</BuildButton>
				</BuildButtonWrapper>
			</FuturesContentWrapper>
		</FuturesMainSection>
	);
}

const FuturesMainSection = styled(Section)`
	margin-top: 100px;
	background-image: url('/background.png');
	background-repeat: no-repeat;
	background-size: cover;
	padding: 0 0 0 138px;
	height: 694px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	${media.lessThan('1100px' as any)`
		padding: 0;
		background-image: none;
		align-items: center;
		justify-content: start;
		min-height: calc(734px - ${headerHeight}px);
	`}

	${media.lessThan('medium')`
		height: calc(100vh - ${headerHeight}px);
		min-height: 500px;
		margin-top: 0;
	`}
`;

const FuturesContentWrapper = styled.div`
	position: absolute;
	z-index: 10;
	${media.lessThan('1100px' as any)`
		position: static;
		display:flex;
		flex-direction:column;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 100%;
		padding: 8px;
	`}
`;

const FuturesMainSubline = styled(Subline)`
	max-width: 500px;
`;

const BuildButtonWrapper = styled(FlexDiv)`
	${media.lessThan('1100px' as any)`
		width: 100%;
		justify-content: center;
		margin-bottom: 16px;
	`}
`;

const BuildButton = styled(Button)<{ isFirst?: boolean }>`
	width: 146px;
	height: 56px;
	margin-right: ${({ isFirst }) => (isFirst ? '32px' : '0px')};
	margin-top: 29px;
	${({ isFirst }) =>
		isFirst
			? media.lessThan('medium')`
		margin-right: 16px;
		`
			: undefined}
`;
