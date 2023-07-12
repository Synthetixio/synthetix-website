import { Button, Flex, Link, Show, Text } from '@chakra-ui/react';
import { InterestedLooper } from 'src/svg/InterestedLooper';
import { links } from 'src/utils/constants';

export const Interested = () => {
	return (
		<Flex mb={{ base: '60px', lg: '100px' }} w="100%" mt="16px">
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
							maxHeight="400px"
							maxWidth="100%"
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
					px={{ base: '16px', md: '24px', lg: '48px' }}
					pb={{ base: '16px', md: '24px', lg: '48px' }}
					pt={{ base: '16px', md: '24px', lg: '48px' }}
				>
					<Text
						as="h2"
						fontFamily="heading"
						color="gray.50"
						mb="16px"
						zIndex={1}
						textStyle="heading-xl"
						width={{ base: '100%', md: '57%' }}
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

					<Link href={links.v3IntegrationGuide} target="_blank">
						<Button
							w="fit-content"
							borderRadius="4px"
							fontWeight={700}
							fontSize="14px"
							padding="10px 16px"
							size={{ base: 'lg', md: 'md' }}
						>
							Integrate with Synthetix
						</Button>
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
