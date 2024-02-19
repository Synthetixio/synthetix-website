import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function GovernanceHeader() {
	return (
		<Flex flexDir="column" position="relative" pb={{ base: '60px' }} w="100%">
			<Box
				position="absolute"
				width={1178}
				height={608}
				top={{ base: '50px' }}
				right={{ base: '-580px', md: '-440px' }}
				zIndex={0}
			>
				<Image
					src="spartan-governance.svg"
					alt="spartan helm"
					width={1178}
					height={608}
				/>
			</Box>
			<Heading
				fontSize={{ base: '48px', lg: '60px' }}
				mt={{ base: 56 }}
				zIndex={10}
				maxW={{ md: '483px' }}
			>
				A Decentralized Governance
			</Heading>
			<Text
				fontSize={{ base: '16px' }}
				lineHeight={{ base: '24px' }}
				color="gray.500"
				mt={{ base: 4 }}
				zIndex={10}
				maxW={{ md: '483px' }}
			>
				Synthetix is a decentralized protocol run by governance, with
				representative councils elected by the community, ensuring every
				decision reflects the collective voice of its users.
			</Text>
			<Link href="https://governance.synthetix.io/" rel="noopener noreferrer">
				<Button mt={{ base: 6 }} w="fit-content" h={{ base: 12 }} zIndex={10}>
					Vote for Governance
				</Button>
			</Link>
		</Flex>
	);
}
