import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import initReactFastclick from 'react-fastclick';

import { init } from '@socialgouv/matomo-next';

import { theme } from '../src/styles/theme';
import { GlobalStyle } from '../src/styles/globals';
import smoothscroll from 'smoothscroll-polyfill';

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

initReactFastclick();

const queryClient = new QueryClient();

export default class MyApp extends App {
	componentDidMount() {
		init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
	}
	render() {
		/* scroll behavior smooth is not supported by Safari > 15 */
		if (typeof window !== 'undefined') {
			smoothscroll.polyfill();
		}
		const { Component, pageProps } = this.props;
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
					<link rel="icon" type="image/png" href="/favicon/favicon-196x196.png" sizes="196x196" />
					<link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
					<link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32" />
					<link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16" />
					<link rel="icon" type="image/png" href="/favicon/favicon-128.png" sizes="128x128" />
					<meta name="application-name" content="&nbsp;" />
					<meta name="msapplication-TileColor" content="#08021E" />
					<meta name="msapplication-TileImage" content="/favicon/mstile-144x144.png" />
					<meta name="msapplication-square70x70logo" content="/favicon/mstile-70x70.png" />
					<meta name="msapplication-square150x150logo" content="/favicon/mstile-150x150.png" />
					<meta name="msapplication-wide310x150logo" content="/favicon/mstile-310x150.png" />
					<meta name="msapplication-square310x310logo" content="/favicon/mstile-310x310.png" />
					<link rel="icon" href="/favicon.ico" />
					<meta
						name="description"
						content="Synthetix is a derivatives liquidity protocol providing the backbone for derivatives trading in DeFi, allowing anyone, anywhere to gain on-chain exposure to a vast range of assets."
					/>
					<meta name="og:image" content="/public/logo-x.png" />
				</Head>
				<GlobalStyle />
				<QueryClientProvider client={queryClient}>
					<Component {...pageProps} />
				</QueryClientProvider>
			</ThemeProvider>
		);
	}
}
