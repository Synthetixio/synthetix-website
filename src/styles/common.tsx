import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { theme } from './theme';

export const Section = styled.section<{ customMaxWidth?: boolean }>`
	${({ theme }) => theme.animations.show};
	opacity: 0;
	width: 100%;
	position: relative;
	overflow: hidden;
	${({ theme, customMaxWidth }) => (!customMaxWidth ? `max-width: ${theme.maxContentWidth}` : '')};
`;

export const ExternalLink = styled.a.attrs({
	target: '_blank',
	rel: 'noopener noreferrer',
})``;

export const PageTitle = styled.h1`
	${theme.fonts.largeHeadline};
`;

export const SectionTitle = styled.h2`
	${theme.fonts.headline};
	margin-bottom: 18px;
	${media.lessThan('medium')`
		font-size: 24px;
		line-height: 28px;
	`};
`;

export const Subline = styled.article`
	${theme.fonts.subline};
	text-align: inherit;
`;

export const Line = styled.div<{ showOnMobile?: boolean }>`
	width: 100vw;
	height: 1px;
	background: rgba(14, 4, 53, 0.29);
	background-image: linear-gradient(0deg, rgba(14, 4, 53, 0.29), rgba(14, 4, 53, 0.29)),
		linear-gradient(88.63deg, #00d1ff -14.83%, #ed1eff 108.22%);
	opacity: 0.39;

	${({ showOnMobile }) => {
		if (!showOnMobile) {
			return media.lessThan('medium')`
			display: none;
		`;
		}
	}}
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
