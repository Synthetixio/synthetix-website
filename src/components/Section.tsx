import styled from 'styled-components';
import { theme } from '../styles/theme';
import media from 'styled-media-query';

interface DescriptionProps {
	main?: boolean;
}

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

	h3 {
		font-size: 16px;
	}

	${media.lessThan('medium')`
		h1, h2 {
			font-size: 32px;
			line-height: 38px;
		}
	`};

	${media.lessThan('small')`
		h1, h2 {
		font-size: 24px;
		}
	`};
`;

export const SectionDescription = styled.p<DescriptionProps>`
	margin-top: 15px;
	margin-left: 2px;
	max-width: 386px;

	${media.lessThan('medium')`
		max-width: 300px;
		margin-top: ${(props) => ((props as DescriptionProps).main ? 27 : 11)}px;
		margin-left: 0;
	`}
`;

export default Section;
