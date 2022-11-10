import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
	${reset}

	html,
	body {
		${theme.fonts.body};
		-webkit-tap-highlight-color: transparent;
		padding: 0;
		margin: 0;
		background-color: ${props => (props.theme as any).colors.bgBlack};
		-webkit-tap-highlight-color: transparent;

	}

	a {
		color: inherit;
		text-decoration: none;
	}

	* {
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
	}

	b {
		font-weight: bolder;
	}

	html.stop-scrolling  {
	overflow: hidden;
}
	@font-face {
		font-family: 'GT America';
		src: local('GT America'), local('GTAmerica'),
		url('/fonts/GT-America-Condensed-Bold.woff2') format('woff2'),
		url('/fonts/GT-America-Condensed-Bold.woff') format('woff');
		font-weight: 700;
		font-style: normal;
		font-stretch: condensed;
		font-display: auto;
	}

	@font-face {
		font-family: 'GT America';
		src: local('GT America'), local('GTAmerica'),
		url('/fonts/GT-America-Expanded-Black.woff2') format('woff2'),
		url('/fonts/GT-America-Expanded-Black.woff') format('woff');
		font-weight: 900;
		font-style: normal;
		font-stretch: expanded;
		font-display: auto;
	}

	@font-face {
  		font-family: 'Inter';
  		font-style: normal;
  		font-weight: 400;
  		font-display: swap;
  		src: local('Inter'), url('/fonts/Inter-Regular.woff2') format('woff2'),
    	url('/fonts/Inter-Regular.woff') format('woff');
	}

	@font-face {
  		font-family: 'Inter Bold';
  		font-style: normal;
  		font-weight: 700;
  		font-display: swap;
  		src: local('Inter Bold'), url('/fonts/Inter-Bold.woff2') format('woff2'),
    	url('/fonts/Inter-Bold.woff') format('woff');
	}
`;
