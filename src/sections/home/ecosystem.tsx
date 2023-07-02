import { Heading, Text, Box } from '@chakra-ui/react';

export const Ecosystem = () => {
	return (
		<Box id="ecosystem" position="relative" w="100%">
			<Box width="100%" my="100px">
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
					<Box width="52.5%">
						<Heading
							fontWeight={700}
							color="gray.50"
							fontSize="48px"
							lineHeight="56px"
							width="600px"
							mb="16px"
						>
							A Network of DeFi Apps Powered by Synthetix
						</Heading>
						<Text
							fontSize="16px"
							lineHeight="24px"
							fontFamily="heading"
							color="gray.500"
							mb="16px"
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
