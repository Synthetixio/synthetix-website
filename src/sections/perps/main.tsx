import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import LinkOffIcon from 'src/svg/LinkOffIcon';
import SNXPerpsLooper from 'src/svg/SNXPerpsLooper';

export default function FuturesMain() {
	return (
		<Flex
			position="relative"
			as="section"
			w="100%"
			height={{ base: 'auto', lg: '600px' }}
			bg="navy.900"
			wrap={{ base: 'wrap-reverse', lg: 'nowrap' }}
			mb="48px"
		>
			<Flex
				w={{ base: '100%', lg: '600px' }}
				flexDir="column"
				p={{ base: 0, lg: '80px 0px' }}
				mt={{ base: '450px', lg: 0 }}
			>
				<Heading
					fontWeight={{ base: '700', md: '800' }}
					fontSize={{ base: '48px', md: '60px' }}
					lineHeight={{ base: '48px', md: '60px' }}
					mb="24px"
				>
					Decentralized <br /> Perpetual <br /> Futures
				</Heading>
				<Text
					size={{ base: 'sm' }}
					lineHeight={{ base: '20px', md: '24px' }}
					fontWeight={{ base: 400 }}
					color="gray.500"
					maxW="container.sm"
					mb="24px"
				>
					Synthetix perpetual futures are a set of permissionless and
					decentralized smart contracts, offering deep liquidity and low trading
					fees on a range of synthetic assets. Third party integrators have
					decided to integrate with Synthetix.
				</Text>
				<Flex w="100%" justifyContent="center">
					<Button mr="24px" w="100%" maxW="340px">
						See Integrators
					</Button>
					<Button
						w="100%"
						maxW="340px"
						variant="outline"
						colorScheme="gray"
						rightIcon={<LinkOffIcon white />}
						onClick={() =>
							window.open('https://watcher.synthetix.io/', '_blank', 'noopener')
						}
					>
						See Stats
					</Button>
				</Flex>
			</Flex>
			<SNXPerpsLooper
				transform={{ base: 'translate(-50%, 0%)', lg: 'translate(-50%, -25%)' }}
				top="-30px"
				left="50%"
				position={{ base: 'absolute', lg: 'relative' }}
			/>
		</Flex>
	);
}
