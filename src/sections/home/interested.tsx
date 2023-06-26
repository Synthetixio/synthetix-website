import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { InterestedLooper } from 'src/svg/InterestedLooper';

export const Interested = () => {
	return (
		<Flex mb="100px" w="100%" mt="16px">
			<Flex
				bg="navy.700"
				border="1px"
				borderColor="gray.900"
				p="48px"
				borderRadius="5px"
				position="relative"
				w="100%"
			>
				<Flex flexDirection="column" width="55%">
					<Text textStyle="heading-xl" mb="16px">
						Interested in building in the Synthetix Ecosystem?
					</Text>
					<Text
						fontFamily="heading"
						fontSize="16px"
						lineHeight="24px"
						color="gray.500"
						mb="24px"
					>
						Learn more about how to integrate Perps and other Synthetix markets
						by visiting the developer documentation and joining the Synthetix
						Discord
					</Text>
					<Button p="10px 16px" width="fit-content">
						Integrate with Synthetix
					</Button>
				</Flex>
				<InterestedLooper position="absolute" top="0" right="-180" bottom="0" />
			</Flex>
		</Flex>
	);
};
