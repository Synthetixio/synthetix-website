import { ExternalLink, Section } from 'src/styles/common';
import SvgArrow from 'src/svg/Arrow';
import PoweredByGrid from 'src/svg/PoweredByGrid';
import styled from 'styled-components';

export default function FurtherLinking() {
	return (
		<StyledFurtherLinkingWrapper>
			<StyledGrid />
			<StyledButtonWrapper>
				<StyledButtonWrapperLinearGradient>
					<StyledLinkButtons href="https://staking.synthetix.io/gov">
						<StyledSmallButtonLabel>GO TO</StyledSmallButtonLabel>
						<StyledLargeButtonLabel>Staking</StyledLargeButtonLabel>
						<StyledArrow left fill="cyan" />
					</StyledLinkButtons>
				</StyledButtonWrapperLinearGradient>
				<StyledButtonWrapperLinearGradient last>
					<StyledLinkButtons href="https://gov.synthetix.io/#/" last>
						<StyledSmallButtonLabel>GO TO</StyledSmallButtonLabel>
						<StyledLargeButtonLabel>Governance</StyledLargeButtonLabel>
						<StyledArrow fill="cyan" />
					</StyledLinkButtons>
				</StyledButtonWrapperLinearGradient>
			</StyledButtonWrapper>
		</StyledFurtherLinkingWrapper>
	);
}

const StyledFurtherLinkingWrapper = styled(Section)`
	position: relative;
	max-width: 940px;
	height: 300px;
	background-color: ${({ theme }) => theme.colors.bgBlackHighlighted};
`;

const StyledGrid = styled(PoweredByGrid)`
	width: 100%;
	position: absolute;
	bottom: 0px;
	height: auto;
	z-index: -1;
`;

const StyledButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const StyledButtonWrapperLinearGradient = styled.div<{ last?: boolean }>`
	height: 84px;
	width: 404px;
	max-width: 404px;
	border-radius: 5px;
	background: radial-gradient(at left top, #00d1ff, 50%, #ea20ff 100%);
	${({ last }) => (last ? 'margin-left: 32px' : '')};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledLinkButtons = styled(ExternalLink)<{ last?: boolean }>`
	position: relative;
	padding: 0px 40px;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	${({ last }) => (last ? 'align-items: flex-start' : 'align-items: flex-end')};
	justify-content: center;
	max-width: 400px;
	width: 100%;
	background-color: #0b0b22;
	height: 80px;
`;

const StyledSmallButtonLabel = styled.span`
	display: block;
	color: white;
	font-family: Inter;
	font-size: 12px;
	letter-spacing: ;
`;

const StyledLargeButtonLabel = styled.span`
	display: block;
	color: ${({ theme }) => theme.colors.cyan};
	font-family: Inter;
	font-size: 18px;
	font-weight: bold;
`;

const StyledArrow = styled(SvgArrow)<{ left?: boolean }>`
	position: absolute;
	${({ left }) =>
		left ? 'left: 40px; transform: rotate(180deg); bottom: 43%;' : 'right: 40px; top: 45%;'};
`;
