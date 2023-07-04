import { Heading, Text, Box } from '@chakra-ui/react';

export const Ecosystem = () => {
	return (
		<Box
			id="ecosystem"
			position="relative"
			w="100%"
			my={{ base: '60px', lg: '100px' }}
		>
			<Box width="100%">
				<Box width="100%" position="relative" zIndex={1}>
					<Text
						lineHeight="24px"
						fontSize="16px"
						fontFamily="heading"
						color="gray.500"
						mb={4}
					>
						SYNTHETIX ECOSYSTEM
					</Text>
					<Box width="100%">
						<Text
							fontWeight={700}
							color="gray.50"
							mb="16px"
							textStyle="heading-2xl"
							maxWidth={'575px'}
							as="h2"
						>
							A Network of DeFi Apps Powered by Synthetix
						</Text>
						<Text
							fontSize="16px"
							lineHeight="24px"
							fontFamily="heading"
							color="gray.500"
							mb="16px"
							maxWidth={{ base: '100%', md: '780px' }}
						>
							Explore the growing ecosystem of decentralized apps built on top
							of Synthetix liquidity. The Synthetix ecosystem is comprised of
							derivatives exchanges, sUSD utility, and more
						</Text>
					</Box>
				</Box>
			</Box>
			<Box
				position="absolute"
				bgGradient="linear-gradient(44deg, #EE2EFF 0%, #5744EA 100%)"
				width="584px"
				height="536px"
				zIndex={0}
				borderRadius="100%"
				filter="blur(250px)"
				top="20px"
				left="-200px"
			/>
		</Box>
	);
};

export default Ecosystem;
