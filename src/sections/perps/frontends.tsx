import {
	Flex,
	Text,
	FlexProps,
	Heading,
	Button,
	Link,
	Image,
	Icon,
	Show,
	Hide,
} from '@chakra-ui/react';
import { Conduit, Kwenta, Synthetix, dHedge } from './icons/Frontends';

const FrontendCards = [
	{
		logo: <Image src="/polynomial.png" w="50px" h="50px" />,
		name: 'Polynomial',
		description:
			'Polynomial is a DeFi derivatives powerhouse that offers derivatives-based products built on top of Synthetix such as perps, power perps, and vaults. It is a one-stop solution built on top of Polynomial smart contract wallets.',
		link: 'https://www.polynomial.fi/',
	},
	{
		logo: Kwenta,
		name: 'Kwenta',
		description:
			'Kwenta is a decentralized derivatives trading platform offering perpetual futures and options trading on Optimism. Gain exposure to a variety of crypto and real-world assets, and advanced tooling through Kwenta Smart Margin.',
		link: 'https://kwenta.io/',
	},
	{
		logo: <Image src="/decentrex.png" w="50px" h="50px" />,
		name: 'Decentrex',
		description:
			'Decentrex is a decentralized perpetual futures exchange and leverage aggregator. On Decentrex, users have access to deep liquidity and lightning fast trades, thanks to the powerful infrastructure provided by Synthetix and Optimism.',
		link: 'https://kwenta.io/',
	},
	{
		logo: dHedge,
		name: 'dHedge',
		description:
			'dHEDGE is a decentralized asset management protocol. It empowers users to access high-performing vaults managed by skilled asset managers. Asset managers can utilize sophisticated DeFi instruments like Kwenta perpetual futures and Lyra options to generate returns.',
		link: 'https://www.dhedge.org/',
	},
	{
		logo: Conduit,
		name: 'Conduit',
		description:
			'Conduit is a community-centric, perpetual trading platform that provides a high performing, modular user experience. It introduces novel features that are intuitive to users, with Synthetix as the backbone. Your gateway to crypto trading.',
		link: 'https://alpha.conduit.lol/',
	},
	{
		logo: Synthetix,
		name: 'Synthetix',
		description: [
			'Learn more about how to integrate Perps and other Synthetix markets in our developer documentation and reach out to the developers at ',
			'perps@snxdao.io.',
		],
		link: 'https://discord.com/invite/AEdUHzt',
	},
];

const FrontEnds = ({ ...props }: FlexProps) => {
	return (
		<Flex
			maxW={{
				base: '100vw',
				md: '48rem',
				lg: '62rem',
				xl: '80rem',
				'2xl': '96rem',
			}}
			pt="48px"
			flexDirection="column"
			alignItems="center"
			position="relative"
			width="100%"
			mb="64px"
			p={{ base: '24px' }}
			{...props}
		>
			<Heading mb="16px" w="100%" fontSize="48px">
				Integrators
			</Heading>
			<Text color="gray.500" w="100%">
				Multiple front ends have chosen to integrate Synthetix’ composable and
				permissionless smart contracts
			</Text>
			<Flex
				w="100%"
				flexWrap="wrap"
				justifyContent={{ lg: 'space-around', '2xl': 'space-between' }}
			>
				{FrontendCards.map((card, i) => (
					<FrontendCard {...card} key={card.name.concat(i.toString())} />
				))}
			</Flex>
		</Flex>
	);
};

function FrontendCard({
	logo,
	name,
	description,
	link,
}: {
	logo: JSX.Element;
	name: string;
	description: string | string[];
	link: string;
}) {
	return (
		<Flex
			flexDir="column"
			alignItems="flex-start"
			w={{ base: '100%', lg: '396px', '2xl': '480px' }}
			h={{ base: '284px', lg: '374px', '2xl': '326px' }}
			bg="navy.900"
			borderWidth="1px"
			borderStyle="solid"
			borderRadius="base"
			borderColor="gray.900"
			mt="24px"
			p="24px"
		>
			<Hide below="sm">
				{logo}
				<Heading my="16px" fontSize="18px">
					{name}
				</Heading>
				<Text mb="auto" fontSize="14px">
					{Array.isArray(description) ? (
						<>
							{description[0]}{' '}
							<Link href="mailto: perps@snxdao.io" color="cyan.500">
								perps@snxdao.io.
							</Link>
						</>
					) : (
						description
					)}
				</Text>
			</Hide>
			<Hide above="sm">
				<Flex>
					{logo}
					<Heading my="16px" fontSize="18px" ml="16px">
						{name}
					</Heading>
				</Flex>
				<Text mb="auto" fontSize="14px">
					{Array.isArray(description) ? (
						<>
							{description[0]}{' '}
							<Link href="mailto: perps@snxdao.io" color="cyan.500">
								perps@snxdao.io.
							</Link>
						</>
					) : (
						description
					)}
				</Text>
			</Hide>
			<Button
				variant={name !== 'Synthetix' ? 'outline' : 'solid'}
				onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
				w={{ base: '100%', lg: '180px' }}
				size="sm"
				rightIcon={
					name === 'Synthetix' ? undefined : (
						<Icon
							width="14px"
							height="14px"
							viewBox="0 0 14 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_4786_501)">
								<path
									d="M9.07952 4.47127L4.65444 4.47127L4.65445 3.30478L11.071 3.30478L11.071 9.7213L9.90448 9.7213L9.90448 5.29623L4.11717 11.325L3.29221 10.5001L9.07952 4.47127Z"
									fill="#00D1FF"
								/>
							</g>
							<defs>
								<clipPath id="clip0_4786_501">
									<rect width="14" height="14" fill="white" />
								</clipPath>
							</defs>
						</Icon>
					)
				}
			>
				{name !== 'Synthetix' ? `Visit ${name}` : 'Integrate with Synthetix'}
			</Button>
		</Flex>
	);
}

export default FrontEnds;
