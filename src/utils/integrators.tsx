interface integratorItem {
	uri: string;
	name: string;
	description: string;
	link: string;
	tag:
		| 'PERPS'
		| 'ASST MGMT'
		| 'OPTIONS'
		| 'PARIMUTUEL'
		| 'SPOT'
		| 'AMM'
		| 'ORACLE';
}

export const integrators: integratorItem[] = [
	{
		uri: '/kwenta.svg',
		name: 'Kwenta',
		description:
			'Kwenta is a decentralized derivatives trading platform offering perpetual futures and options trading on Optimism. Gain exposure to a variety of crypto and real-world assets, and advanced tooling through Kwenta Smart Margin.',
		link: 'https://kwenta.eth.limo/dashboard/markets/',
		tag: 'PERPS',
	},
	{
		uri: '/polynomial.svg',
		name: 'Polynomial',
		description:
			'Polynomial is a DeFi derivatives powerhouse that offers derivatives-based products built on top of Synthetix such as perps, power perps, and vaults. It is a one-stop solution built on top of Polynomial smart contract wallets.',
		link: 'https://trade.polynomial.fi/',
		tag: 'PERPS',
	},
	{
		uri: '/decentrex.png',
		name: 'Decentrex',
		description:
			'Decentrex is a decentralized perpetual futures exchange and leverage aggregator. On Decentrex, users have access to deep liquidity and lightning fast trades, thanks to the powerful infrastructure provided by Synthetix and Optimism.',
		link: 'https://decentrex.com/trade/ETH-USD',
		tag: 'PERPS',
	},
	{
		uri: '/dhedge.svg',
		name: 'dHedge',
		description:
			'dHEDGE is a decentralized asset management protocol. It empowers users to access high-performing vaults managed by skilled asset managers. Asset managers can utilize sophisticated DeFi instruments like Kwenta perpetual futures and Lyra options to generate returns.',
		link: 'https://app.dhedge.org/#',
		tag: 'ASST MGMT',
	},
	{
		uri: '/lyra.svg',
		name: 'Lyra',
		description:
			'Lyra is an option AMM that allows traders to buy and sell options on cryptocurrencies against a pool of liquidity. Lyra leverages Synthetix perpetual futures to hedge delta exposure and provide market neutral, organic yield to its liquidity providers.',
		link: 'https://app.lyra.finance/#/trade/optimism/seth-susd',
		tag: 'OPTIONS',
	},
	{
		uri: '/thales.svg',
		name: 'Thales',
		description:
			'Trade various parimutuel markets like price up or down, sports markets, and others.',
		link: 'https://thalesmarket.io/',
		tag: 'PARIMUTUEL',
	},
	{
		uri: '/curve.svg',
		name: 'Curve',
		description:
			'Deposit your synths into curve pools for yield on synth pairs and help provide liquidity to the ecosystem.',
		link: 'https://curve.fi/',
		tag: 'SPOT',
	},
	{
		uri: '/toros.svg',
		name: 'Toros',
		description:
			'Toros enables a suite of one-click financial tools which simplify complex strategies.',
		link: 'https://toros.finance/',
		tag: 'ASST MGMT',
	},
	{
		uri: '/overtime.svg',
		name: 'Overtime Markets',
		description: 'Sports positional markets, built on Thales.',
		link: 'https://overtimemarkets.xyz/',
		tag: 'AMM',
	},
];

const perpsIntegrators = [
	'Kwenta',
	'Polynomial',
	'Decentrex',
	'dHedge',
	'Lyra',
];

export const perpsPageIntegrators = integrators.filter(integrator =>
	perpsIntegrators.includes(integrator.name),
);
