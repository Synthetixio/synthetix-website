import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import SNXPerpsLooper from 'src/svg/SNXPerpsLooper';

export const Hero = () => {
	const onClick = () => {
		const ecosystem = document.getElementById('ecosystem');
		if (ecosystem) {
			const offset = ecosystem.getBoundingClientRect().top;
			window.scrollTo({ top: offset - 100, behavior: 'smooth' });
		}
	};

	return (
		<Flex pt="182px" position="relative" width="100%">
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
					<Text color="gray.50" mb="16px" width="500px" textStyle="heading-4xl">
						The Liquidity Layer of DeFi
					</Text>
				</Box>
				<Text
					mb="16px"
					fontSize="16px"
					lineHeight="24px"
					color="gray.500"
					fontFamily="heading"
					fontWeight={400}
					width="625px"
				>
					Synthetix powers the liquidity for permissionless derivatives like
					perpetual futures, options, sports AMMs, and more across EVM chains.
					Learn more about markets that leverage Synthetix liquidity.
				</Text>
				<Button
					mt="16px"
					gap="8px"
					width="fit-content"
					borderRadius="4px"
					onClick={onClick}
				>
					Explore Ecosystem
				</Button>
			</Flex>
			<SNXPerpsLooper
				transform={{
					// TODO: Confirm sizing for base and md
					base: 'translate(-50%, 10%)',
					md: 'translate(-50%, 0%)',
					lg: 'translate(-5%, -15%)',
				}}
				top="-30px"
				left="50%"
				position={{ base: 'absolute' }}
				zIndex={0}
			/>
		</Flex>
	);
};
