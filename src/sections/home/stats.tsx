import { Flex, Text, Box, Button } from '@chakra-ui/react';

export const Stats = () => {
	return (
		<Box width="100%" my={40}>
			<Flex justifyContent="space-between" width="100%">
				<Flex flexDirection="column">
					<Text
						fontSize="24px"
						lineHeight="32px"
						color="white"
						mb="16px"
						fontFamily="heading"
					>
						TVL
					</Text>
					<Text textStyle="heading-4xl">$500M</Text>
				</Flex>
				<Flex flexDirection="column">
					<Text
						fontSize="24px"
						lineHeight="32px"
						color="white"
						mb="16px"
						fontFamily="heading"
					>
						Unique Stakers
					</Text>
					<Text textStyle="heading-4xl">60,789</Text>
				</Flex>
				<Flex flexDirection="column">
					<Text
						fontSize="24px"
						lineHeight="32px"
						color="white"
						mb="16px"
						fontFamily="heading"
					>
						Total Trading Fees
					</Text>
					<Text textStyle="heading-4xl">$60M</Text>
				</Flex>
			</Flex>
			<Button p="10px 40px 10px 40px" mt="34px" variant="link" color="cyan.500">
				See All Stats
			</Button>
		</Box>
	);
};
