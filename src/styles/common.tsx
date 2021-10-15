import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Layout } from 'src/components';
import { theme } from './theme';

export const ExternalLink = styled.a.attrs({
	target: '_blank',
	rel: 'noopener noreferrer',
})``;

export const PageTitle = styled.div`
	${theme.fonts.largeHeadline};
	padding-bottom: 40px;
	${media.lessThan('medium')`
		font-size: 32px;
		line-height: 38px;
	`};
`;

export const Subline = styled.article`
	max-width: 700px;
	text-align: center;
	${media.lessThan('medium')`
		text-align: start;
	`};
`;

export const PageCopy = styled.p`
	margin: 0;
	font-size: 14px;
	line-height: 20px;
	padding-bottom: 35px;
`;

export const PageLayout = styled(Layout)`
	.container {
		justify-content: initial;
		align-items: initial;
		max-width: 1200px;
		margin: 0 auto;
		padding: 125px 20px 0 20px;
		${media.lessThan('medium')`
			padding-top: 85px;
		`}
	}
`;

export const CardGradient = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 6px;
	background: linear-gradient(88.63deg, #00d1ff -14.83%, #ed1eff 108.22%);
`;

export const Card = styled.div`
	width: 360px;
	height: 298px;
	position: relative;
	padding: 24px 0;

	background: #1c1c3d;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

	${media.lessThan('medium')`
		width: 310px;		
	`}

	&:hover {
		background: #161b44;
		${CardGradient} {
			background: ${(props) => props.theme.colors.cyan};
		}
	}
`;

export const FlexDiv = styled.div`
	display: flex;
`;

export const FlexDivCentered = styled(FlexDiv)`
	align-items: center;
`;

export const FlexDivCol = styled(FlexDiv)`
	flex-direction: column;
`;

export const FlexDivColCentered = styled(FlexDivCol)`
	align-items: center;
`;

export const FlexDivRow = styled(FlexDiv)`
	justify-content: space-between;
`;

export const FlexDivRowCentered = styled(FlexDivRow)`
	align-items: center;
`;

export const resetButtonCSS = css`
	border: none;
	background: none;
	outline: none;
	cursor: pointer;
	padding: 0;
`;
