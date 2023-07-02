import { Flex, Link, Text } from '@chakra-ui/react';
import { InterestedLooper } from 'src/svg/InterestedLooper';
import { links } from 'src/utils/constants';

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
					<Link
						bgGradient="linear(to-r, #34EDB3, cyan.500)"
						gap="8px"
						p="10px 16px"
						borderRadius="4px"
						width="fit-content"
						color="black"
						fontWeight={700}
						_hover={{ textDecoration: 'none', opacity: 0.8 }}
						href={links.v3IntegrationGuide}
						target="_blank"
					>
						Integrate with Synthetix
					</Link>
				</Flex>
				<InterestedLooper
					height="100%"
					position="absolute"
					top="0"
					right="0"
					bottom="0"
				/>
			</Flex>
		</Flex>
	);
};
