import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { init } from '@socialgouv/matomo-next';
import { theme } from '../src/styles/theme';
import { GlobalStyle } from '../src/styles/globals';
import smoothscroll from 'smoothscroll-polyfill';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme, Fonts } from '@synthetixio/v3-theme';
import { useEffect } from 'react';

const newTheme = extendTheme({
	...chakraTheme,
	colors: {
		...chakraTheme.colors,
		navy: {
			700: '#0B0B22',
			900: '#06061B',
		},
	},
	useSystemColorMode: false,
	config: { initialColorMode: 'dark' },
	styles: {
		global: {
			body: { bg: 'navy.900' },
			'::selection': {
				bg: '#00D1FF',
				color: '#000000',
			},
		},
	},
});

export default function MyApp({ Component, pageProps }: AppProps) {
	useEffect(
		() =>
			init({
				url: process.env.NEXT_PUBLIC_MATOMO_URL,
				siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID,
			}),
		[],
	);

	/* scroll behavior smooth is not supported by Safari > 15 */
	if (typeof window !== 'undefined') {
		smoothscroll.polyfill();
		if (
			'localStorage' in window &&
			localStorage.getItem('chakra-ui-color-mode') === 'light'
		)
			localStorage.setItem('chakra-ui-color-mode', 'dark');
	}

	return (
		<ThemeProvider theme={theme}>
			<Head>
				<link
					rel="apple-touch-icon-precomposed"
					sizes="57x57"
					href="/favicon/apple-touch-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					sizes="114x114"
					href="/favicon/apple-touch-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					sizes="72x72"
					href="/favicon/apple-touch-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					sizes="144x144"
					href="/favicon/apple-touch-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					sizes="60x60"
					href="/favicon/apple-touch-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					sizes="120x120"
					href="/favicon/apple-touch-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					sizes="76x76"
					href="/favicon/apple-touch-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					sizes="152x152"
					href="/favicon/apple-touch-icon-152x152.png"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/favicon/favicon-196x196.png"
					sizes="196x196"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/favicon/favicon-96x96.png"
					sizes="96x96"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/favicon/favicon-32x32.png"
					sizes="32x32"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/favicon/favicon-16x16.png"
					sizes="16x16"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/favicon/favicon-128.png"
					sizes="128x128"
				/>
				<meta name="application-name" content="&nbsp;" />
				<meta name="msapplication-TileColor" content="#08021E" />
				<meta
					name="msapplication-TileImage"
					content="/favicon/mstile-144x144.png"
				/>
				<meta
					name="msapplication-square70x70logo"
					content="/favicon/mstile-70x70.png"
				/>
				<meta
					name="msapplication-square150x150logo"
					content="/favicon/mstile-150x150.png"
				/>
				<meta
					name="msapplication-wide310x150logo"
					content="/favicon/mstile-310x150.png"
				/>
				<meta
					name="msapplication-square310x310logo"
					content="/favicon/mstile-310x310.png"
				/>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Synthetix is a derivatives liquidity protocol providing the backbone for derivatives trading in DeFi, allowing anyone, anywhere to gain on-chain exposure to a vast range of assets."
				/>
				<title>My Next.js Application</title>
				<meta property="og:title" content="Synthetix" />
				<meta property="og:description" content="The Liqudity Layer of DeFi" />
				<meta property="og:image" content="https://synthetix.io/metatag.png" />
				<meta property="og:url" content="https://synthetix.io" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Synthetix" />
				<meta name="twitter:description" content="The Liqudity Layer of DeFi" />
				<meta name="twitter:image" content="https://synthetix.io/metatag.png" />
			</Head>
			<GlobalStyle />
			<Fonts />
			<ChakraProvider theme={newTheme}>
				<ColorModeScript initialColorMode={newTheme.initialColorMode} />
				<Component {...pageProps} />
			</ChakraProvider>
		</ThemeProvider>
	);
}
