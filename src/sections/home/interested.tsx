import { Flex, Link, Show, Text } from '@chakra-ui/react';
import { InterestedLooper } from 'src/svg/InterestedLooper';
import { links } from 'src/utils/constants';

export const Interested = () => {
	return (
		<Flex mb="100px" w="100%" mt="16px">
			<Flex
				bg="navy.700"
				border="1px"
				borderColor="gray.900"
				borderRadius="5px"
				position="relative"
				w="100%"
				flexDirection={{ base: 'column', lg: 'row' }}
			>
				<Show below="lg">
					<Flex display="relative" height="250px" width="100%" bg="navy.700">
						<InterestedLooper
							height="400px"
							position="absolute"
							top="0"
							right="0"
							bottom="0"
							zIndex={0}
						/>
					</Flex>
				</Show>
				<Flex
					flexDirection="column"
					width="100%"
					bg="navy.700"
					zIndex={{ base: 1, lg: 'unset' }}
					px={{ base: '16px', md: '48px' }}
					pb={{ base: '16px', md: '48px' }}
					pt="16px"
				>
					<Text
						as="h2"
						fontSize="36px"
						lineHeight="120%"
						fontFamily="heading"
						color="gray.50"
						mb="16px"
						fontWeight={700}
						width={{ base: '100%', lg: '55%' }}
						zIndex={1}
					>
						Interested in building in the Synthetix Ecosystem?
					</Text>
					<Text
						fontFamily="heading"
						fontSize="16px"
						lineHeight="24px"
						color="gray.500"
						mb="24px"
						width={{ base: '100%', lg: '55%' }}
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
				<Show above="lg">
					<InterestedLooper
						height="100%"
						position="absolute"
						top="0"
						right="0"
						bottom="0"
						zIndex={0}
					/>
				</Show>
			</Flex>
		</Flex>
	);
};
