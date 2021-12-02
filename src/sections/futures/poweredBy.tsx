import { FlexDiv, Section, Subline } from 'src/styles/common';
import { Kwenta } from 'src/svg';
import SvgPoweredByWave from 'src/svg/PoweredByWave';
import styled from 'styled-components';
import media from 'styled-media-query';

export interface PoweredByProps {
	openInterest: number;
	tradingVolume: number;
	trades: number;
}

export default function PoweredBy({ openInterest, tradingVolume, trades }: PoweredByProps) {
	return (
		<PoweredBySection customMaxWidth>
			<PoweredByContentWrapper>
				<SpaceBetween>
					<div>
						<SectionHeader>POWERED BY</SectionHeader>
						<img src="logo.svg" />
					</div>
					<div>
						<SectionHeader isLast>TRADABLE ON</SectionHeader>
						<Kwenta />
					</div>
				</SpaceBetween>
				<GlowBoxesWrapper>
					<GlowBox color="cyan">
						<GlowBoxHeader color="cyan">TRADES</GlowBoxHeader>
						<GlowBoxNumber>{trades}</GlowBoxNumber>
						<GlowBoxTime>LAST 24h</GlowBoxTime>
					</GlowBox>
					<GlowBox color="pink">
						<GlowBoxHeader color="pink">TRADING VOLUME</GlowBoxHeader>
						<GlowBoxNumber>{tradingVolume}$</GlowBoxNumber>
						<GlowBoxTime>LAST 24h</GlowBoxTime>
					</GlowBox>
					<GlowBox color="green">
						<GlowBoxHeader color="green">OPEN INTEREST</GlowBoxHeader>
						<GlowBoxNumber>{openInterest}$</GlowBoxNumber>
					</GlowBox>
				</GlowBoxesWrapper>
			</PoweredByContentWrapper>
			<StyledSvgPoweredByWave />
		</PoweredBySection>
	);
}

const PoweredBySection = styled(Section)`
	width: 100vw;
	height: 50vh;
	min-height: 600px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.bgBlackHighlighted};
`;

const PoweredByContentWrapper = styled.article`
	position: absolute;
	z-index: 10;
	width: 100%;
	max-width: 1920px;
	padding: 0 128px;

	${media.lessThan('medium')`
		padding: 0 16px;
	`}
`;

const SectionHeader = styled.h3<{ isLast?: boolean }>`
	font-family: GT America;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 20px;
	text-transform: uppercase;
	color: white;
	margin: 16px 0px;
	text-align: ${({ isLast }) => (isLast ? 'end' : 'start')};
	${media.lessThan('medium')`
		text-align: start;
	`}
`;

const SpaceBetween = styled(FlexDiv)`
	justify-content: space-between;
	${media.lessThan('medium')`
		flex-direction: column;
	align-items: center
	`}
`;

const GlowBoxesWrapper = styled(FlexDiv)`
	justify-content: space-between;
	${media.lessThan('1000px' as any)`
		flex-direction: column;
		align-items: center;
	`}
`;

const GlowBox = styled.div<{ color: 'pink' | 'green' | 'cyan' }>`
	display: flex;
	flex-direction: column;
	width: 348px;
	height: 112px;
	background: ${({ theme }) => theme.colors.bgBlackHighlighted};
	box-shadow: 0px 0px 14px ${({ theme, color }) => theme.colors[color]};
	color: ${({ theme, color }) => theme.colors[color]};
	margin: 16px;
	border-radius: 5px;
	padding: 12px 18px 18px;
	text-align: ${({ color }) => {
		if (color === 'green') return 'end';
		if (color === 'pink') return 'center';
		if (color === 'cyan') return 'start';
	}};
	${media.lessThan('medium')`
			text-align:center;
	`}
`;

const GlowBoxHeader = styled.h3<{ color: 'pink' | 'green' | 'cyan' }>`
	color: ${({ theme, color }) => theme.colors[color]};
	font-family: GT America;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
`;

const GlowBoxNumber = styled.span`
	display: inline-block;
	color: inherit;
	font-family: GT America;
	font-style: normal;
	font-weight: 900;
	font-size: 24px;
	line-height: 48px;
`;

const GlowBoxTime = styled.span`
	color: white;
	display: inline-block;
	font-family: GT America;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 140%;
`;

const StyledSvgPoweredByWave = styled(SvgPoweredByWave)`
	position: absolute;
	width: 100vw;
	height: 100%;
	pointer-events: none;
`;
