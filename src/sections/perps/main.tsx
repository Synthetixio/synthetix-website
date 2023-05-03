import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import LinkOffIcon from 'src/svg/LinkOffIcon';
import SNXPerpsLooper from 'src/svg/SNXPerpsLooper';

export default function FuturesMain() {
	return (
		<Flex
			position="relative"
			as="section"
			w="100%"
			height={{ base: 'auto' }}
			bg="navy.900"
			wrap={{ base: 'wrap-reverse', xl: 'nowrap' }}
			mb="48px"
		>
			<Flex
				w={{ base: '100%', lg: '600px' }}
				flexDir="column"
				p={{ base: 0 }}
				mt={{ base: '400px', md: '0px', lg: '550px', xl: '77px' }}
			>
				<Heading
					fontWeight={{ base: '700', md: '800' }}
					fontSize={{ base: '48px', md: '60px' }}
					lineHeight={{ base: '48px', md: '60px' }}
					mb="24px"
					// In case the text overflows into the picture
					zIndex={2}
				>
					Decentralized <br /> Perpetual <br /> Futures
				</Heading>
				<Text
					fontSize={{ base: 'md' }}
					lineHeight={{ base: '20px', md: '24px' }}
					fontWeight={400}
					color="gray.500"
					w={{ base: '100%' }}
					mb="24px"
				>
					Synthetix Perps offers integrators deep liquidity, low fees and
					additional resources for building your own frontend.
				</Text>
				<Flex w="100%">
					<Button mr="24px" w="100%" size={{ base: 'lg', xl: 'md' }}>
						See Integrators
					</Button>
					<Button
						size={{ base: 'lg', xl: 'md' }}
						w="100%"
						variant="outline"
						colorScheme="gray"
						rightIcon={<LinkOffIcon white />}
						onClick={() =>
							window.open(
								'https://watcher.synthetix.io/',
								'_blank',
								'noopener noreferrer',
							)
						}
					>
						See Stats
					</Button>
				</Flex>
			</Flex>
			<SNXPerpsLooper
				transform={{
					base: 'translate(-50%, -10%)',
					lg: 'translate(-50%, -25%)',
					xl: 'translate(0%, -25%)',
				}}
				top="-30px"
				left="50%"
				position={{ base: 'absolute' }}
			/>
		</Flex>
	);
}
