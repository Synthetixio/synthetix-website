import { Flex, Text, FlexProps, Heading, Image } from '@chakra-ui/react';
import { IntegratorCard } from 'src/components';

export const FrontendCards = [
	{
		logo: <Image src="/kwenta-frontend.png" h={{ base: '40px', xl: '50px' }} />,
		name: 'Kwenta',
		description:
			'Kwenta is a decentralized derivatives trading platform offering perpetual futures and options trading on Optimism. Gain exposure to a variety of crypto and real-world assets, and advanced tooling through Kwenta Smart Margin.',
		link: 'https://kwenta.eth.limo/dashboard/markets/',
	},
	{
		logo: <Image src="/polynomial.png" h={{ base: '40px', xl: '50px' }} />,
		name: 'Polynomial',
		description:
			'Polynomial is a DeFi derivatives powerhouse that offers derivatives-based products built on top of Synthetix such as perps, power perps, and vaults. It is a one-stop solution built on top of Polynomial smart contract wallets.',
		link: 'https://trade.polynomial.fi/',
	},
	{
		logo: <Image src="/decentrex.png" h={{ base: '40px', xl: '50px' }} />,
		name: 'Decentrex',
		description:
			'Decentrex is a decentralized perpetual futures exchange and leverage aggregator. On Decentrex, users have access to deep liquidity and lightning fast trades, thanks to the powerful infrastructure provided by Synthetix and Optimism.',
		link: 'https://decentrex.com/trade/ETH-USD',
	},
	{
		logo: <Image src="/dhedge.png" h={{ base: '40px', xl: '50px' }} />,
		name: 'dHedge',
		description:
			'dHEDGE is a decentralized asset management protocol. It empowers users to access high-performing vaults managed by skilled asset managers. Asset managers can utilize sophisticated DeFi instruments like Kwenta perpetual futures and Lyra options to generate returns.',
		link: 'https://app.dhedge.org/#',
	},
	{
		logo: <Image src="/conduit.png" h={{ base: '40px', xl: '50px' }} />,
		name: 'Conduit',
		description:
			'Conduit is a community-centric, perpetual trading platform that provides a high performing, modular user experience. It introduces novel features that are intuitive to users, with Synthetix as the backbone. Your gateway to crypto trading.',
		link: 'https://alpha.conduit.lol/',
	},
	{
		logo: <Image src="/lyra-perps.png" h={{ base: '40px', xl: '50px' }} />,
		name: 'Lyra',
		description:
			'Lyra is an option AMM that allows traders to buy and sell options on cryptocurrencies against a pool of liquidity. Lyra leverages Synthetix perpetual futures to hedge delta exposure and provide market neutral, organic yield to its liquidity providers.',
		link: 'https://app.lyra.finance/#/trade/optimism/seth-susd',
	},
];

const FrontEnds = ({ ...props }: FlexProps) => {
	return (
		<Flex
			id="frontends-integrators"
			maxW={{
				base: '100vw',
				md: '48rem',
				lg: '62rem',
				xl: '80rem',
				'2xl': '96rem',
			}}
			flexDirection="column"
			alignItems="center"
			position="relative"
			width="100%"
			my={{ base: '62px', md: '100px' }}
			px={{ base: '16px', lg: '24px' }}
			{...props}
		>
			<Heading
				mb="16px"
				w="100%"
				fontSize={{ base: '36px', md: '48px' }}
				fontWeight={{ base: '700' }}
			>
				Integrators
			</Heading>
			<Text color="gray.500" w="100%">
				Multiple front ends have chosen to integrate Synthetix’ composable and
				permissionless smart contracts.
			</Text>
			<Flex
				w="100%"
				flexWrap="wrap"
				justifyContent={{ lg: 'flex-start' }}
				columnGap={{ lg: '16px', xl: '24px' }}
			>
				{FrontendCards.map((card, i) => (
					<IntegratorCard {...card} key={card.name.concat(i.toString())} />
				))}
			</Flex>
		</Flex>
	);
};

export default FrontEnds;
