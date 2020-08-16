import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
	${reset}

	html,
	body {
		${theme.fonts.body};

		padding: 0;
		margin: 0;
		background-color: ${props => (props.theme as any).colors.bgBlack};

	}

	a {
		color: inherit;
		text-decoration: none;
	}

	* {
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
	}

	@font-face {
		font-family: 'GT America';
		src: local('GT America'), local('GTAmerica'),
		url('/fonts/GT-America-Condensed-Bold.woff2') format('woff2'),
		url('/fonts/GT-America-Condensed-Bold.woff') format('woff');
		font-weight: 700;
		font-style: normal;
		font-stretch: condensed;
	}

	@font-face {
		font-family: 'GT America';
		src: local('GT America'), local('GTAmerica'),
		url('/fonts/GT-America-Expanded-Black.woff2') format('woff2'),
		url('/fonts/GT-America-Expanded-Black.woff') format('woff');
		font-weight: 900;
		font-style: normal;
		font-stretch: expanded;
	}
`
