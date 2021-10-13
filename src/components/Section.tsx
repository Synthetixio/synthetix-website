import styled from 'styled-components';
import { theme } from '../styles/theme';
import media from 'styled-media-query';

export const sectionMixin = `
	width: 100%;
	position: relative;
	overflow: hidden;
	`;

const Section = styled.section`
	${sectionMixin}
	h1, h2 {
		${theme.fonts.headline};
	}

	${media.lessThan('medium')`
		h1, h2 {
			font-size: 32px;
			line-height: 38px;
		}
	`};
`;

export default Section;
