import { Flex, Text, Box, Button } from '@chakra-ui/react';

export const AggregatedStats = () => {
	return (
		<Box width="100%" mb={40}>
			<Flex justifyContent="space-between" width="100%">
				<Flex flexDirection="column">
					<Text
						fontSize="24px"
						lineHeight="32px"
						color="white"
						mb="16px"
						fontFamily="heading"
					>
						All Time Volume
					</Text>
					<Text textStyle="heading-4xl">$11B</Text>
				</Flex>
				<Flex flexDirection="column">
					<Text
						fontSize="24px"
						lineHeight="32px"
						color="white"
						mb="16px"
						fontFamily="heading"
					>
						Open Interest
					</Text>
					<Text textStyle="heading-4xl">$123M</Text>
				</Flex>
				<Flex flexDirection="column">
					<Text
						fontSize="24px"
						lineHeight="32px"
						color="white"
						mb="16px"
						fontFamily="heading"
					>
						Unique Trading Accounts
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
						Markets
					</Text>
					<Text textStyle="heading-4xl">24</Text>
				</Flex>
			</Flex>
			<Button p="10px 40px 10px 40px" mt="34px" variant="link" color="cyan.500">
				See All Stats
			</Button>
		</Box>
	);
};
