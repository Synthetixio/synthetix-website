import { Button, Flex, Heading, Show, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Shield from 'src/svg/Shield';

export default function GovernanceAction() {
	return (
		<Flex
			flexDir="column"
			w="100%"
			py={{ base: '60px', lg: '100px' }}
			pos="relative"
		>
			<Text
				color="gray.500"
				fontSize={{ base: '16px' }}
				mb={{ base: 4 }}
				w={{ base: '100%', md: '360px', lg: '525px' }}
			>
				SYNTHETIX GOVERNANCE
			</Text>
			<Heading
				fontSize={{ base: '36px', md: '48px' }}
				lineHeight={{ base: '120%' }}
				mb={{ base: 4 }}
				w={{ base: '100%', md: '360px', lg: '525px' }}
			>
				Participate in Governance
			</Heading>
			<Text
				color="gray.500"
				fontSize={{ base: '14px' }}
				mb={{ base: 4 }}
				w={{ base: '100%', md: '360px', lg: '525px' }}
			>
				Play a pivotal role in Synthetix Governance. As a staker, your votes in
				council elections and contributions to proposals are essential, steering
				the protocol&apos;s direction and evolution.
			</Text>
			<Flex gap="6" my={{ base: 6 }}>
				<Link
					href="https://sips.synthetix.io/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button>All SIPs & SCCPs</Button>
				</Link>
				<Link
					href="https://pr.synthetix.io/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button variant="outline" colorScheme="gray" color="white">
						Create a SIP
					</Button>
				</Link>
			</Flex>
			<Shield
				width={{ base: '100%', md: '810px', lg: '100%' }}
				transform={{ base: 'scale(1.6)', md: 'unset' }}
				height={{ base: '450px' }}
				position={{ md: 'absolute' }}
				top={0}
				zIndex={1}
				right={{ md: '-300px' }}
			/>

			<Flex
				mt={{ base: '60px' }}
				w="100%"
				p={{ base: '4', md: '12' }}
				flexDir="column"
				rounded="base"
				bg="navy.700"
				border="1px solid"
				borderColor="gray.900"
				boxShadow="dark-lg"
			>
				<Heading mb={{ base: 4 }}>
					Want to hear all about Governance updates?
				</Heading>
				<Text fontSize={{ md: '16px' }} color="gray.500" mb={{ base: 6 }}>
					Learn more about governance by reading the documentation on each
					council and how they interact with each other
				</Text>
				<Link
					href="https://discord.com/channels/413890591840272394/937743028095967332"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button>Join Discord</Button>
				</Link>
			</Flex>
		</Flex>
	);
}
