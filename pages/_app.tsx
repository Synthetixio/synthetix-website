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
	textStyles: {
		'heading-4xl': {
			fontSize: { base: '60px', lg: '72px' },
			fontFamily: 'heading',
			lineHeight: { base: '57.6px', lg: '72px' },
			fontWeight: 700,
		},
		'heading-3xl': {
			fontSize: { base: '48px', md: '60px' },
			fontFamily: 'heading',
			lineHeight: { base: '57.6px', md: '72px', lg: '60px' },
			fontWeight: 700,
		},
		'heading-2xl': {
			fontSize: { base: '36px', md: '48px' },
			fontFamily: 'heading',
			lineHeight: { base: '120%' },
			fontWeight: 700,
		},
		'heading-xl': {
			fontSize: { base: '30px', lg: '36px' },
			fontFamily: 'heading',
			lineHeight: { base: '36px', lg: '120%' },
			fontWeight: 700,
		},
		'heading-lg': {
			fontSize: { base: '24px', lg: '30px' },
			fontFamily: 'heading',
			lineHeight: { base: '28.8px', lg: '36px' },
			fontWeight: 700,
		},
		'heading-md': {
			fontSize: { base: '20px', lg: '24px' },
			fontFamily: 'heading',
			lineHeight: '24px',
			fontWeight: 700,
		},
		'heading-sm': {
			fontSize: '16px',
			fontFamily: 'heading',
			lineHeight: '19.2px',
			fontWeight: 700,
		},
		'heading-xs': {
			fontSize: '14px',
			fontFamily: 'heading',
			lineHeight: '16.8px',
			fontWeight: 700,
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
				<meta name="og:image" content="/public/logo-x.png" />
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
