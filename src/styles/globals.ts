import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	html,
	body {
		padding: 0;
		margin: 0;
		font-family: Inter -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		font-weight: 400;
		background-color: ${props => (props.theme as any).colors.grayBlack30};
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	* {
		box-sizing: border-box;
	}

	@font-face {
		font-family: 'GT America';
		src: local('GT America'), local('GTAmerica'),
		url('/fonts/GTAmericaBold.woff2') format('woff2'),
		url('/fonts/GTAmericaBold.woff') format('woff');
		font-weight: 700;
		font-style: normal;
	}

	@font-face {
		font-family: 'GT America';
		src: local('GT America'), local('GTAmerica'),
		url('/fonts/GTAmericaExpandedBold.woff2') format('woff2'),
		url('/fonts/GTAmericaExpandedBold.woff') format('woff');
		font-weight: 900;
		font-style: normal;
	}
`
