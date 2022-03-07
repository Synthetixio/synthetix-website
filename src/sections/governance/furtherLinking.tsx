import { ExternalLink, Section } from 'src/styles/common';
import SvgArrow from 'src/svg/Arrow';
import PoweredByGrid from 'src/svg/PoweredByGrid';
import styled from 'styled-components';

export default function FurtherLinking() {
	return (
		<StyledFurtherLinkingWrapper customMaxWidth>
			<StyledGrid />
			<StyledButtonWrapper>
				<StyledButtonWrapperLinearGradient>
					<StyledLinkButtons href="https://staking.synthetix.io/gov">
						<StyledSmallButtonLabel>GO TO</StyledSmallButtonLabel>
						<StyledLargeButtonLabel>Staking</StyledLargeButtonLabel>
						<StyledLeftArrow fill="cyan" />
					</StyledLinkButtons>
				</StyledButtonWrapperLinearGradient>
				<StyledButtonWrapperLinearGradient last>
					<StyledLinkButtons href="https://gov.synthetix.io/#/" last>
						<StyledSmallButtonLabel>GO TO</StyledSmallButtonLabel>
						<StyledLargeButtonLabel>Governance</StyledLargeButtonLabel>
						<StyledRightArrow fill="cyan" />
					</StyledLinkButtons>
				</StyledButtonWrapperLinearGradient>
			</StyledButtonWrapper>
		</StyledFurtherLinkingWrapper>
	);
}

const StyledFurtherLinkingWrapper = styled(Section)`
	position: relative;
	width: 100%;
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

export const StyledButtonWrapperLinearGradient = styled.div<{
	last?: boolean;
	height?: string;
	margin?: string;
	width?: string;
}>`
	height: ${({ height }) => (height ? height : '84px')};
	width: ${({ width }) => (width ? width : '404px')};
	border-radius: 5px;
	background: linear-gradient(90deg, #ea20ff 0%, #00d1ff 100%);
	box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.cyan};
	${({ last }) => (last ? 'margin-left: 32px' : '')};
	display: flex;
	justify-content: center;
	align-items: center;
	${({ margin }) => margin && `margin: ${margin}`}
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
	border-radius: 5px;
`;

const StyledSmallButtonLabel = styled.span`
	display: block;
	color: white;
	font-family: Inter;
	font-size: 12px;
`;

const StyledLargeButtonLabel = styled.span`
	display: block;
	color: ${({ theme }) => theme.colors.cyan};
	font-family: Inter;
	font-size: 18px;
	font-weight: bold;
`;

const StyledLeftArrow = styled(SvgArrow)`
	position: absolute;
	left: 40px;
	transform: rotate(180deg);
	bottom: 34%;
`;

const StyledRightArrow = styled(SvgArrow)`
	position: absolute;
	right: 40px;
	top: 36%;
`;
