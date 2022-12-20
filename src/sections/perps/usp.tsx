import { Text, Flex, FlexProps, Grid, GridItem, Box } from '@chakra-ui/react';

import {
	Verified,
	Downtime,
	Algorithm,
	Optimism,
	Assets,
	GasStation,
} from 'src/svg';

const USPS = [
	{
		label: 'Best Price Execution',
		description:
			'Traders using platforms tied into the Synthetix protocol for perpetual futures contracts are guaranteed to have some of the best price execution available, with little to no slippage and fills you can’t get elsewhere.',
		Icon: Verified,
	},
	{
		label: 'Lowest Downtime & Liquidation Risk',
		description:
			'Users are unlikely to experience the downtime seen on CEXs during periods of high volatility. Because our synths are merely reflections of price action, the risk of cascading liquidations due to forced selloffs is eliminated.',
		Icon: Downtime,
	},
	{
		label: 'Simulated Liquidity',
		description:
			'Simulated liquidity is the fundamental algorithm behind all synthetic assets available for trading on the Synthetix protocol. It ensures that traders get great liquidity with low to no slippage across any asset pair with up to 10x leverage.',
		Icon: Algorithm,
	},
	{
		label: 'Secure Layer 2',
		description:
			'As an EVM equivalent solution, OE ensures that the security of Ethereum Mainnet is carried over to Layer 2. Simple code means your funds are as secure as keeping them on mainnet, without the cost of gas.',
		Icon: Optimism,
	},
	{
		label: 'Any Asset Class',
		description:
			'Get all the benefits of DeFi with a fully on-chain permissionless futures trading experience across a number of asset classes. Get leveraged exposure to price action in any market and trade between crypto tokens, commodities, currencies and more all in one place. ',
		Icon: Assets,
	},
	{
		label: 'Low Gas and Fees',
		description:
			'Built on Optimistic Ethereum, your gas goes further with gas prices that are considerably lower than L1 and transactions that happen almost instantaneously.',
		Icon: GasStation,
	},
];

export default function USP({ ...props }: FlexProps) {
	return (
		<Flex flexDirection="column" {...props}>
			<Text
				as="h2"
				mt={{ base: 8, md: 0 }}
				fontFamily="GT America"
				fontWeight="900"
				fontSize="32px"
				lineHeight="36px"
				textTransform="uppercase"
				sx={{ fontStretch: 'expanded' }}
				mb={28}
				textAlign="center"
			>
				Trade Perpetual Futures Like the Best
			</Text>
			<Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}>
				{USPS.map(({ label, description, Icon }) => (
					<GridItem
						key={label}
						h={{ base: '250px', sm: '200px', md: '180px', lg: '160px' }}
					>
						<Flex>
							<Flex
								width={{ base: '68px', lg: '93px' }}
								height={{ base: '68px', lg: '93px' }}
								borderWidth="1px"
								borderStyle="solid"
								borderColor="cyan.500"
								borderRadius="full"
								justifyContent="center"
								alignItems="center"
								bgGradient="linear-gradient(180deg, #08021E 0%, #120446 146.21%)"
								boxShadow="0px 0px 14px #00D1FF"
							>
								<Icon width={{ base: '30', md: '40', lg: '55' }} />
							</Flex>
							<Box width={{ base: '70%', md: '80%' }} ml={8}>
								<Text
									fontFamily="GT America"
									fontWeight="700"
									fontSize="16px"
									color="cyan.500"
									mb={2}
								>
									{label}
								</Text>
								<Text
									fontFamily="heading"
									fontSize="14px"
									lineHeight="20px"
									opacity={0.7}
									pr={2}
								>
									{description}
								</Text>
							</Box>
						</Flex>
					</GridItem>
				))}
			</Grid>
		</Flex>
	);
}
