import styled from 'styled-components'
import { theme } from '../styles/theme'
import media from 'styled-media-query'

export const sectionMixin = `
	width: 100%;
	position: relative;
	overflow: hidden;

	h1, h2 {
		text-decoration: uppercase;
		${theme.fonts.headline};
	}
`

const Section = styled.div`
	${sectionMixin}

	padding: 0 114px;

	${media.greaterThan('large')`
		padding: 0 159px;
	`}
`

export const SectionDescription = styled.p`
	margin-top: 15px;
	margin-left: 2px;
	max-width: 386px;
`

export default Section
