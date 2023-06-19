import { Flex, Heading, Text, Box } from '@chakra-ui/react';

export const Ecosystem = () => {
	return (
		<Box width="100%" position="relative">
			<Box position="relative" zIndex={1}>
				<Text
					lineHeight="24px"
					fontSize="16px"
					fontFamily="heading"
					color="gray.500"
					mb={4}
				>
					SYNTHETIX ECOSYSTEM
				</Text>
				<Box width="52.5%">
					<Heading
						fontWeight={700}
						color="gray.50"
						fontSize="48px"
						lineHeight="56px"
						mb={4}
					>
						A Network of DeFi Apps Powered by Synthetix
					</Heading>
					<Text
						fontSize="16px"
						lineHeight="24px"
						fontFamily="heading"
						color="gray.500"
					>
						Each Vault supports a single collateral asset. Pools connected to
						one or more Markets. All external collateral will be onboarded into
						the protocol through Synthetix governance. Stakers have an
						increasing range of Pools to allocate their capital to. This gives
						stakers more control over their credit as the V3 system provides
						more options for both liquidity and hedging.
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default Ecosystem;
