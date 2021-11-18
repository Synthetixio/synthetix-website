import { FlexDiv, Section } from 'src/styles/common';
import { Kwenta } from 'src/svg';
import SvgPoweredByWave from 'src/svg/PoweredByWave';
import styled from 'styled-components';
import media from 'styled-media-query';

export default function PoweredBy() {
	return (
		<PoweredBySection customMaxWidth={true}>
			<PoweredByContentWrapper>
				<SpaceBetween>
					<div>
						<SectionHeader>POWERED BY</SectionHeader>
						<img src="logo.svg" />
					</div>
					<div>
						<SectionHeader>TRADABLE ON</SectionHeader>
						<Kwenta />
					</div>
				</SpaceBetween>
				<GlowBoxesWrapper>
					<GlowBox color="cyan"></GlowBox>
					<GlowBox color="pink"></GlowBox>
					<GlowBox color="green"></GlowBox>
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
`;

const PoweredByContentWrapper = styled.article`
	position: absolute;
	z-index: 10;
	width: 100%;
	padding: 0 128px;
	max-width: 1920px;
`;

const SectionHeader = styled.h3`
	font-family: GT America;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 20px;
	text-transform: uppercase;
	color: white;
	margin-bottom: 8px;
`;

const SpaceBetween = styled(FlexDiv)`
	justify-content: space-between;
`;

const GlowBoxesWrapper = styled(FlexDiv)`
	justify-content: space-between;
	${media.lessThan('1000px' as any)`
		flex-direction: column;
		align-items: center;
	`}
`;

const GlowBox = styled.div<{ color: 'pink' | 'green' | 'cyan' }>`
	width: 348px;
	height: 112px;
	background: ${({ theme }) => theme.colors.bgBlackHighlighted};
	box-shadow: 0px 0px 14px ${({ theme, color }) => theme.colors[color]};
	margin: 16px;
	border-radius: 5px;
`;

const StyledSvgPoweredByWave = styled(SvgPoweredByWave)`
	position: absolute;
	width: 100vw;
	height: 100%;
	pointer-events: none;
`;
