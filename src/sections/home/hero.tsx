import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import SNXPerpsLooper from 'src/svg/SNXPerpsLooper';

export const Hero = () => {
	return (
		<Flex mt="65px" position="relative" height="700px" width="100%">
			<Flex
				flexDirection="column"
				justifyContent="center"
				maxWidth="50%"
				height="100%"
				pb={20}
				zIndex={1}
			>
				<Text
					fontSize="16px"
					lineHeight="24px"
					color="gray.500"
					fontFamily="heading"
					mb="16px"
					fontWeight={400}
				>
					Fueling the next generation of permissionless DeFi protocols.
				</Text>
				<Box width="600px">
					<Heading
						fontWeight={800}
						lineHeight="72px"
						fontSize="60px"
						color="gray.50"
						mb="16px"
					>
						The Liquidity Layer of DeFi
					</Heading>
				</Box>
				<Text
					mb="16px"
					fontSize="16px"
					lineHeight="24px"
					color="gray.500"
					fontFamily="heading"
					fontWeight={400}
				>
					Synthetix powers the liquidity for permissionless derivatives like
					perpetual futures, options, sports AMMs, and more across EVM chains.
					Learn more about markets that leverage Synthetix liquidity.
				</Text>
				<Button mt="16px" width="fit-content" borderRadius="4px">
					Explore Ecosystem
				</Button>
			</Flex>
			<SNXPerpsLooper
				transform={{
					base: 'translate(-50%, 10%)',
					md: 'translate(-50%, 10%)',
					lg: 'translate(-50%, -20%)',
					xl: 'translate(-5%, -20%)',
				}}
				top="-30px"
				left="50%"
				position={{ base: 'absolute' }}
				zIndex={0}
			/>
		</Flex>
	);
};
