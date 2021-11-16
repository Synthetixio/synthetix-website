import { Button } from 'src/components';
import { headerHeight } from 'src/components/Header';
import { FlexDiv, Section, SectionTitle, Subline } from 'src/styles/common';
import styled from 'styled-components';
import media from 'styled-media-query';

export default function FuturesMain() {
	return (
		<>
			<FuturesMainSection>
				<FuturesContentWrapper>
					<SectionTitle>
						Decentralized <br />
						Perpetual <br />
						Futures
					</SectionTitle>
					<FuturesMainSubline>
						Many platforms already leverage the deep liquidity and composability of Synthetix to
						deliver better trades with lower slippage, hedging, and other unique use cases.&nbsp;
						<b>Synthetix perpetual futures are available exclusively through Kwenta.</b>
					</FuturesMainSubline>
					<BuildButtonWrapper>
						<BuildButton link="https://kwenta.io">Start Trading</BuildButton>
						<BuildButton link="https://discord.com/invite/AEdUHzt" isLast>
							Discord
						</BuildButton>
					</BuildButtonWrapper>
				</FuturesContentWrapper>
			</FuturesMainSection>
			<KwentaScreenWrapper>
				<KwentaScreen src="/home/futures/kwenta-screen.png" />
			</KwentaScreenWrapper>
		</>
	);
}

const FuturesMainSection = styled(Section)`
	padding: 0 0 0 138px;
	height: calc(100vh - ${headerHeight}px);
	min-height: 900px;
	display: flex;
	flex-direction: column;
	justify-content: center;

	${media.lessThan('1100px' as any)`
		padding: 0;
		align-items: center;
		justify-content: start;
		min-height: calc(734px - ${headerHeight}px);
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
		justify-content: center;
		margin-bottom: 16px;
	`}
`;

const BuildButton = styled(Button)<{ isLast?: boolean }>`
	width: 146px;
	height: 56px;
	margin-right: ${({ isLast }) => (isLast ? '0px' : '31px')};
	margin-top: 29px;
`;

const KwentaScreenWrapper = styled.div`
	position: absolute;
	top: 30%;
	width: 100vw;
	height: calc(100vh - ${headerHeight}px - 30%);
	min-height: 600px;
	overflow: hidden;
	z-index: 2;
	${media.lessThan('1100px' as any)`
	display: none;
	`};
`;

const KwentaScreen = styled.img`
	position: absolute;
	top: 0;
	right: 8px;
	height: 850px;

	${media.lessThan('1900px' as any)`
		right: -600px;
	`}

	${media.lessThan('1250px' as any)`
		right: -750px;
	`}

	${media.lessThan('1100px' as any)`
		position: static;
		width: 95%;
		height: auto;
	`}
`;
