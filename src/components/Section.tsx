import styled from 'styled-components'
import { theme } from '../styles/theme'

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
	> p {
		margin-top: 15px;
		margin-left: 2px;
		max-width: 386px;
	}
`


export default Section
