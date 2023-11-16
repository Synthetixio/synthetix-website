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
	height: string;
	width: string;
}

export const integrators: integratorItem[] = [
	{
		uri: '/kwenta.svg',
		name: 'Kwenta',
		description:
			'Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity.',
		link: 'https://kwenta.eth.limo/dashboard/markets/',
		tag: 'PERPS',
		height: '50px',
		width: '50px',
	},
	{
		uri: '/polynomial.svg',
		name: 'Polynomial',
		description:
			"Trade perps with Polynomial's smart wallet to access up to 50x leverage.",
		link: 'https://trade.polynomial.fi/',
		tag: 'PERPS',
		height: '50px',
		width: '50px',
	},
	{
		uri: '/dhedge.svg',
		name: 'dHedge',
		description:
			'Use your sUSD to find permissionless investment managers and automated strategies.',
		link: 'https://app.dhedge.org/#',
		tag: 'ASST MGMT',
		height: '50px',
		width: '50px',
	},
	{
		uri: '/lyra.svg',
		name: 'Lyra',
		description:
			'Lyra is the leading decentralized options protocol and uses Synthetix to delta hedge their AMM.',
		link: 'https://app.lyra.finance/#/trade/optimism/eth-usd',
		tag: 'OPTIONS',
		height: '50px',
		width: '50px',
	},
	{
		uri: '/thales.svg',
		name: 'Thales',
		description:
			'Use your sUSD to take positions on parimutuel crypto markets.',
		link: 'https://thalesmarket.io/',
		tag: 'PARIMUTUEL',
		height: '50px',
		width: '50px',
	},
	{
		uri: '/curve.svg',
		name: 'Curve',
		description:
			'Deposit synths into Curve pools to provide liquidity to the ecosystem and earn yield.',
		link: 'https://curve.fi/',
		tag: 'SPOT',
		height: '50px',
		width: '50px',
	},
	{
		uri: '/toros.svg',
		name: 'Toros',
		description:
			'Toros enables a suite of one-click financial tools that simplify complex strategies.',
		link: 'https://toros.finance/',
		tag: 'ASST MGMT',
		height: '50px',
		width: '50px',
	},
	{
		uri: '/overtime.svg',
		name: 'Overtime Markets',
		description:
			"Use your sUSD to take positions on sporting events with Overtime's sports AMM.",
		link: 'https://overtimemarkets.xyz/',
		tag: 'AMM',
		height: '50px',
		width: '50px',
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
