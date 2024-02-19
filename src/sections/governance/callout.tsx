import { Flex, Heading, Text } from '@chakra-ui/react';
import { GradientText } from 'src/components';

export default function GovernanceCallout() {
	return (
		<Flex
			flexDir="column"
			w="100%"
			py={{ base: '60px', md: 20 }}
			maxW="800px"
			alignSelf="start"
		>
			<Text color="gray.500" fontSize={{ base: '16px' }} mb={{ base: 4 }}>
				SYNTHETIX GOVERNANCE
			</Text>
			<Heading
				fontSize={{ base: '36px', lg: '48px' }}
				lineHeight={{ base: '120%' }}
			>
				The Synthetix protocol is governed by a{' '}
				<GradientText>decentralized</GradientText> set of representative
				councils that are <GradientText>voted on by stakers</GradientText>.
			</Heading>
		</Flex>
	);
}
