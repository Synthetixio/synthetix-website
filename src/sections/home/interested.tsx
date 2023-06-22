import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { InterestedLooper } from 'src/svg/InterestedLooper';

export const Interested = () => {
	return (
		<Flex mb="200px" w="100%">
			<Flex
				bg="#0E052F"
				border="1px"
				borderColor="gray.900"
				p="48px"
				borderRadius="5px"
				maxHeight="288px"
				position="relative"
				w="100%"
			>
				<Flex flexDirection="column" width="55%">
					<Heading textStyle="heading-4xl" mb="16px">
						Interested in building in the Synthetix Ecosystem?
					</Heading>
					<Text
						fontFamily="heading"
						fontSize="12px"
						lineHeight="16px"
						color="gray.500"
						mb="24px"
					>
						Learn more about how to integrate Perps and other Synthetix markets
						by visiting the developer documentation and joining the Synthetix
						Discord
					</Text>
					<Button p="10px" width="fit-content">
						Integrate with Synthetix
					</Button>
				</Flex>
				<InterestedLooper position="absolute" top="0" right="-200" bottom="0" />
			</Flex>
		</Flex>
	);
};
