import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function GovernanceAction() {
	return (
		<Flex flexDir="column" w="100%" my={{ base: 10 }}>
			<Text color="gray.500" fontSize={{ base: '16px' }} mb={{ base: 4 }}>
				SYNTHETIX GOVERNANCE
			</Text>
			<Heading
				fontSize={{ base: '36px' }}
				lineHeight={{ base: '120%' }}
				mb={{ base: 4 }}
			>
				Participate in Governance
			</Heading>
			<Text color="gray.500" fontSize={{ base: '14px' }} mb={{ base: 4 }}>
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
		</Flex>
	);
}
