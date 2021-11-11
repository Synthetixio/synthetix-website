import { Button } from 'src/components';
import { headerHeight } from 'src/components/Header';
import { FlexDiv, Section, SectionTitle, Subline } from 'src/styles/common';

import styled from 'styled-components';
import media from 'styled-media-query';

export default function FuturesMain() {
	return (
		<FuturesMainSectionTitle>
			<SectionTitle>
				Decentralized <br />
				Perpetual <br />
				Futures
			</SectionTitle>
			<FuturesMainSubline>
				Many platforms already leverage the deep liquidity and composability of Synthetix to deliver
				better trades with lower slippage, hedging, and other unique use cases.&nbsp;
				<b>Synthetix perpetual futures are available exclusively through Kwenta.</b>
			</FuturesMainSubline>
			<FlexDiv>
				<BuildButton link="https://kwenta.io">Start Trading</BuildButton>
				<BuildButton link="https://discord.com/invite/AEdUHzt">Discord</BuildButton>
			</FlexDiv>
			<KwentaScreen src="/home/futures/kwenta-screen.png" />
			{/* <Right /> */}
			<Gradient />
		</FuturesMainSectionTitle>
	);
}

const FuturesMainSectionTitle = styled(Section)`
	padding: 0 0 0 138px;
	height: calc(100vh - ${headerHeight}px);
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const FuturesMainSubline = styled(Subline)`
	max-width: 500px;
`;

const BuildButton = styled(Button)`
	width: 146px;
	height: 56px;
	margin-right: 31px;
	margin-top: 29px;
`;

const KwentaScreen = styled.img`
	position: absolute;
	right: 0;
	width: 713px;
	height: auto;
`;

const Gradient = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	min-height: 853px;
	background: linear-gradient(rgba(14, 5, 47, 0) 60%, #0e052f 80%);
	pointer-events: none;

	${media.lessThan('medium')`
		height: 734px;
		min-height: auto;
	`}
`;
