import { Box, Button, Flex, Heading, Show, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function GovernanceAction() {
	return (
		<Flex flexDir="column" w="100%" my={{ base: 10 }} pos="relative">
			<Text
				color="gray.500"
				fontSize={{ base: '16px' }}
				mb={{ base: 4 }}
				w={{ base: '100%', md: '360px' }}
			>
				SYNTHETIX GOVERNANCE
			</Text>
			<Heading
				fontSize={{ base: '36px' }}
				lineHeight={{ base: '120%' }}
				mb={{ base: 4 }}
				w={{ base: '100%', md: '360px' }}
			>
				Participate in Governance
			</Heading>
			<Text
				color="gray.500"
				fontSize={{ base: '14px' }}
				mb={{ base: 4 }}
				w={{ base: '100%', md: '360px' }}
			>
				Play a pivotal role in Synthetix Governance. As a staker, your votes in
				council elections and contributions to proposals are essential, steering
				the protocol&apos;s direction and evolution.
			</Text>
			<Flex gap="6" my={{ base: 6 }}>
				<Link
					href="https://sips.synthetix.io/all-sip/"
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
			<Show above="md">
				<Box
					width={{ md: '510px' }}
					height="581px"
					position="absolute"
					top={0}
					right={{ md: '-150px' }}
				>
					<Image src="shield.svg" alt="shield" width="1110" height="581" />
				</Box>
			</Show>
			<Flex
				w="100%"
				p="12"
				flexDir="column"
				rounded="base"
				bg="navy.700"
				border="1px solid"
				borderColor="gray.900"
				boxShadow="dark-lg"
			>
				<Heading mb={{ md: 6 }}>
					Want to hear all about Governance updates?
				</Heading>
				<Text fontSize={{ md: '16px' }} color="gray.500" mb={{ md: 6 }}>
					Learn more about governance by reading the documentation on each
					council and how they interact with each other
				</Text>
				<Link
					href="https://discord.com/invite/ptfNSByB8P"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button>Join Discord</Button>
				</Link>
			</Flex>
		</Flex>
	);
}
